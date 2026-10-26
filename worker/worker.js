
export default {
 async scheduled(event,env,ctx){if(env.BACKUPS)ctx.waitUntil(backupNow(env));},
 async fetch(request, env) {
  const cors={"Access-Control-Allow-Origin":env.ALLOWED_ORIGIN||"*","Vary":"Origin","Access-Control-Allow-Headers":"Content-Type, X-Admin-Pin","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"};
  if(request.method==="OPTIONS")return new Response(null,{headers:cors});
  const url=new URL(request.url);
  const origin=request.headers.get('Origin');
  if(env.ALLOWED_ORIGIN&&origin&&origin!==env.ALLOWED_ORIGIN)return json({error:'Origin nicht zugelassen'},403,cors);
  try{
   if(url.pathname==="/articles"&&request.method==="GET")return json(await getJson(env,"data/articles.json"),200,cors);
   const m=url.pathname.match(/^\/content\/(articles|abcde|differential|skills|news|algorithms|changes|events|guide|materials|meetings|knowledgeModules|organSystems|literatureCategories)$/);
   if(m&&request.method==="GET")return json(await getJson(env,`data/${m[1]}.json`),200,cors);
   if(url.pathname==="/auth"&&request.method==="POST"){const body=await request.json().catch(()=>({}));return (await validPin(String(body.pin||""),env.ADMIN_PIN_SHA256))?json({ok:true},200,cors):json({error:"PIN ungültig"},401,cors);}
   const rsvp=url.pathname.match(/^\/events\/rsvp\/([^/]+)$/);
   if(rsvp&&request.method==="POST"){
    const id=decodeURIComponent(rsvp[1]);const body=await request.json().catch(()=>({}));const clientId=String(body.clientId||"").trim(),name=String(body.name||"").trim();
    if(!/^[a-zA-Z0-9_-]{8,120}$/.test(clientId)||name.length>100)return json({error:"Ungültige Eingabe"},400,cors);
    for(let attempt=0;attempt<3;attempt++){
     const cur=await getJson(env,"data/events.json",true),items=cur.items,ev=items.find(x=>x.id===id);
     if(!ev)return json({error:"Termin nicht gefunden"},404,cors);
     if(eventEnded(ev))return json({error:"Termin ist bereits vorbei"},409,cors);
     const people=normalizedAttendees(ev.attendees),waiting=Array.isArray(ev.waitlist)?ev.waitlist.filter(x=>x&&x.clientId):[];
     const pidx=people.findIndex(a=>a.clientId===clientId),widx=waiting.findIndex(a=>a.clientId===clientId);
     const cap=Math.max(1,Number(ev.capacity)||10);
     let action='';
     if(pidx>=0){people.splice(pidx,1);action='withdrawn';if(waiting.length){const promoted=waiting.shift();people.push({...promoted,registeredAt:new Date().toISOString(),promotedAt:new Date().toISOString()})}}
     else if(widx>=0){waiting.splice(widx,1);action='waitlist_removed'}
     else{if(!name)return json({error:"Name fehlt"},400,cors);if(people.length<cap){people.push({clientId,name,registeredAt:new Date().toISOString()});action='joined'}else{waiting.push({clientId,name,registeredAt:new Date().toISOString()});action='waitlisted'}}
     ev.attendees=people;ev.waitlist=waiting;
     try{await putJson(env,"data/events.json",items,cur.sha,`Termin Teilnahme: ${id}`);return json({ok:true,events:items,joined:people.some(a=>a.clientId===clientId),waitlisted:waiting.some(a=>a.clientId===clientId),count:people.length,waiting:waiting.length,capacity:cap,action},200,cors)}catch(e){if(attempt<2&&/GitHub API 409|GitHub API 422/.test(e.message))continue;throw e}
    }
    return json({error:"Gleichzeitige Änderung: bitte erneut versuchen"},409,cors);
   }
   if(url.pathname==="/feedback"&&request.method==="POST"){
    if(!feedbackAvailable(env))return json({error:"Feedback-Speicher fehlt: FEEDBACK_KV oder privates R2-Binding BACKUPS konfigurieren"},503,cors);
    const ip=request.headers.get('CF-Connecting-IP')||'unknown';const ipHash=await sha256(ip+String(env.FEEDBACK_SALT||''));const key='limit:'+ipHash;
    if(await feedbackRateLimited(env,key))return json({error:"Bitte später erneut senden"},429,cors);
    const data=await request.json().catch(()=>({}));const title=String(data.title||'').trim(),message=String(data.message||'').trim(),href=String(data.href||'').trim();
    if(title.length<3||title.length>160||message.length<10||message.length>3000||href.length>500)return json({error:"Ungültige Meldung"},400,cors);
    const id=crypto.randomUUID(),record={id,title,message,href:href.startsWith('https://')?href:'',status:'offen',createdAt:new Date().toISOString()};
    await feedbackWrite(env,'feedback:'+id,record);await feedbackWrite(env,key,{expires:Date.now()+300000},300);
    return json({ok:true,id},201,cors);
   }
   if(url.pathname==="/admin/feedback"&&request.method==="GET"){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    if(!feedbackAvailable(env))return json({error:'Feedback-Speicher nicht eingerichtet'},503,cors);
    const {entries,cursor,list_complete}=await feedbackEntries(env);return json({items:entries.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)),cursor,list_complete},200,cors);
   }
   const feedbackStatus=url.pathname.match(/^\/admin\/feedback\/([a-z0-9-]+)$/);
   if(feedbackStatus&&request.method==='PATCH'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    if(!feedbackAvailable(env))return json({error:'Feedback-Speicher nicht eingerichtet'},503,cors);
    const key='feedback:'+feedbackStatus[1],old=await feedbackRead(env,key);if(!old)return json({error:'Nicht gefunden'},404,cors);
    const body=await request.json().catch(()=>({}));if(!['offen','in Bearbeitung','erledigt'].includes(body.status))return json({error:'Ungültiger Status'},400,cors);
    await feedbackWrite(env,key,{...old,status:body.status});return json({ok:true},200,cors);
   }
   if(url.pathname==='/admin/history'&&request.method==='GET'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    const name=url.searchParams.get('name');if(!allowedContent(name))return json({error:'Ungültiger Bereich'},400,cors);
    const file=`data/${name}.json`,path=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/commits?path=${encodeURIComponent(file)}&per_page=30`;
    const commits=await(await gh(env,path)).json();return json({items:commits.map(x=>({sha:x.sha,date:x.commit?.committer?.date||'',message:x.commit?.message||''}))},200,cors);
   }
   if(url.pathname==='/admin/restore'&&request.method==='POST'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    const b=await request.json().catch(()=>({}));if(!allowedContent(b.name)||!/^[a-f0-9]{40}$/.test(String(b.sha||'')))return json({error:'Ungültige Version'},400,cors);
    const file=`data/${b.name}.json`,old=await getJsonAt(env,file,b.sha),cur=await getJson(env,file,true);
    if(!Array.isArray(old))return json({error:'Ungültige historische Daten'},422,cors);
    await putJson(env,file,old,cur.sha,`Wiederherstellung ${b.name} aus ${b.sha}`);return json({ok:true},200,cors);
   }
   if(url.pathname==='/admin/backup'&&request.method==='POST'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    if(!env.BACKUPS)return json({error:'R2-Binding BACKUPS fehlt'},503,cors);
    const info=await backupNow(env);return json({ok:true,...info},200,cors);
   }
   if(url.pathname==='/admin/backup-status'&&request.method==='GET'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    if(!env.BACKUPS)return json({configured:false},200,cors);
    const objects=await env.BACKUPS.list({prefix:'ost1020/',limit:20});return json({configured:true,items:objects.objects.map(o=>({key:o.key,uploaded:o.uploaded,size:o.size}))},200,cors);
   }
   if(url.pathname==='/admin/review'&&request.method==='GET'){
    if(!(await validPin(request.headers.get('X-Admin-Pin')||'',env.ADMIN_PIN_SHA256)))return json({error:'Unauthorized'},401,cors);
    const [algs,changes]=await Promise.all([getJson(env,'data/algorithms.json'),getJson(env,'data/changes.json')]);
    const items=[...algs.map(x=>({...x,_type:'algorithms'})),...changes.map(x=>({...x,_type:'changes'}))].map(x=>({id:x.id,title:x.title,type:x._type,lastReviewed:x.lastReviewed||'',reviewDue:x.reviewDue||'',reviewOwner:x.reviewOwner||'',source:x.source||''}));
    return json({items},200,cors);
   }
   if(url.pathname==="/media"&&request.method==="POST"){
    if(!(await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256)))return json({error:"Unauthorized"},401,cors);
    const body=await request.json();const rawName=String(body.name||"datei").replace(/[^a-zA-Z0-9._-]+/g,"-").slice(-100);const data=String(body.data||"");
    if(!data)return json({error:"Datei fehlt"},400,cors);if(data.length>28_000_000)return json({error:"Datei zu groß (max. ca. 20 MB)"},413,cors);
    const file=`assets/uploads/${Date.now()}-${rawName}`;await putBase64(env,file,data,`Upload: ${rawName}`);
    const branch=env.GITHUB_BRANCH||"main";const rawUrl=`https://raw.githubusercontent.com/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/${branch}/${file}`;const pagesBase=String(env.PUBLIC_BASE_URL||"").replace(/\/$/,"");const publicUrl=pagesBase?`${pagesBase}/${file}`:rawUrl;
    return json({ok:true,url:publicUrl,rawUrl,path:file},200,cors);
   }
   if(url.pathname==="/articles"&&(request.method==="POST"||request.method==="PUT")){
    if(!(await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256)))return json({error:"Unauthorized"},401,cors);
    const article=await request.json();if(!article.title)return json({error:"Titel fehlt"},400,cors);
    const cur=await getJson(env,"data/articles.json",true);let items=cur.items;
    if(article.featured)items=items.map(x=>({...x,featured:false}));
    const idx=items.findIndex(x=>x.id===article.id);if(idx>=0)items[idx]=article;else items.unshift(article);
    await putJson(env,"data/articles.json",items,cur.sha,`Literatur: ${article.title}`);return json({ok:true},200,cors);
   }
   if(url.pathname.startsWith("/articles/")&&request.method==="DELETE"){
    if(!(await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256)))return json({error:"Unauthorized"},401,cors);
    const id=decodeURIComponent(url.pathname.split("/").pop());const cur=await getJson(env,"data/articles.json",true);const items=cur.items.filter(x=>x.id!==id);await putJson(env,"data/articles.json",items,cur.sha,`Literatur löschen: ${id}`);return json({ok:true},200,cors);
   }
   if(m&&request.method==="PUT"){
    if(!(await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256)))return json({error:"Unauthorized"},401,cors);
    const next=await request.json();const cur=await getJson(env,`data/${m[1]}.json`,true);await putJson(env,`data/${m[1]}.json`,next,cur.sha,`Wissenssammlung: ${m[1]} aktualisiert`);return json({ok:true},200,cors);
   }
   return json({error:"Not found"},404,cors);
  }catch(e){return json({error:e.message||"Serverfehler"},500,cors)}
 }
}
function json(data,status,headers){return new Response(JSON.stringify(data),{status,headers:{...headers,"Content-Type":"application/json; charset=utf-8"}})}
async function validPin(pin,expected){if(!expected)return false;const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pin));const h=[...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("");return h===expected}
async function gh(env,path,init={}){const r=await fetch(`https://api.github.com${path}`,{...init,headers:{"Authorization":`Bearer ${env.GITHUB_TOKEN}`,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":"ost-1020-wissenssammlung",...(init.headers||{})}});if(!r.ok)throw new Error(`GitHub API ${r.status}: ${await r.text()}`);return r}
async function getJson(env,file,withSha=false){const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}?ref=${env.GITHUB_BRANCH||"main"}`;const d=await(await gh(env,p)).json();const text=decodeURIComponent(escape(atob(d.content.replace(/\n/g,""))));const items=JSON.parse(text);return withSha?{items,sha:d.sha}:items}
async function putJson(env,file,obj,sha,message){const text=JSON.stringify(obj,null,2);const b64=btoa(unescape(encodeURIComponent(text)));const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;await gh(env,p,{method:"PUT",body:JSON.stringify({message,content:b64,sha,branch:env.GITHUB_BRANCH||"main"})})}

async function putBase64(env,file,b64,message){const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;await gh(env,p,{method:"PUT",body:JSON.stringify({message,content:b64,branch:env.GITHUB_BRANCH||"main"})})}

const CONTENT_NAMES=['articles','abcde','differential','skills','news','algorithms','changes','events','guide','materials','meetings','knowledgeModules','organSystems','literatureCategories'];
function allowedContent(n){return CONTENT_NAMES.includes(n)}
function normalizedAttendees(a){return (Array.isArray(a)?a:[]).map(v=>typeof v==='string'?{clientId:v,name:'',registeredAt:''}:v).filter(v=>v&&v.clientId)}
function eventEnded(ev){const date=String(ev.date||''),time=/^([01]\d|2[0-3]):[0-5]\d$/.test(ev.time||'')?ev.time:'23:59';if(!/^\d{4}-\d{2}-\d{2}$/.test(date))return true;const timezone=String(ev.timezone||'Europe/Vienna');let fmt;try{fmt=new Intl.DateTimeFormat('en-CA',{timeZone:timezone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'})}catch{fmt=new Intl.DateTimeFormat('en-CA',{timeZone:'Europe/Vienna',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'})}const parts=Object.fromEntries(fmt.formatToParts(new Date()).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));const local=`${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;return local>`${date}T${time}`}
async function sha256(str){const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str));return [...new Uint8Array(bytes)].map(b=>b.toString(16).padStart(2,'0')).join('')}
async function getJsonAt(env,file,sha){const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}?ref=${sha}`;const data=await(await gh(env,p)).json();return JSON.parse(decodeURIComponent(escape(atob(data.content.replace(/\n/g,'')))))}
async function backupNow(env){if(!env.BACKUPS)throw new Error('R2-Binding BACKUPS fehlt');const records={};for(const name of CONTENT_NAMES){records[name]=await getJson(env,`data/${name}.json`)}const snapshot={format:'ost1020-backup-v1',date:new Date().toISOString(),records};const key=`ost1020/${snapshot.date.slice(0,10)}/${snapshot.date.replace(/[:.]/g,'-')}.json`;await env.BACKUPS.put(key,JSON.stringify(snapshot),{httpMetadata:{contentType:'application/json'},customMetadata:{format:'ost1020-backup-v1'}});return {key,createdAt:snapshot.date,collections:CONTENT_NAMES.length}}


// Feedback storage: prefer KV; fall back to private R2 BACKUPS (same binding used for backups).
// Never expose feedback records through the public content endpoint.
function feedbackAvailable(env){return Boolean(env.FEEDBACK_KV||env.BACKUPS)}
function feedbackObjectKey(key){return 'private-feedback/'+key+'.json'}
async function feedbackRead(env,key){
 if(env.FEEDBACK_KV)return await env.FEEDBACK_KV.get(key,'json');
 const obj=await env.BACKUPS.get(feedbackObjectKey(key));return obj?await obj.json():null;
}
async function feedbackWrite(env,key,value,ttl){
 if(env.FEEDBACK_KV)return env.FEEDBACK_KV.put(key,JSON.stringify(value),ttl?{expirationTtl:ttl}:undefined);
 return env.BACKUPS.put(feedbackObjectKey(key),JSON.stringify(value),{httpMetadata:{contentType:'application/json'}});
}
async function feedbackRateLimited(env,key){const obj=await feedbackRead(env,key);return Boolean(obj&&Number(obj.expires)>Date.now())}
async function feedbackEntries(env){
 if(env.FEEDBACK_KV){
  const result=await env.FEEDBACK_KV.list({prefix:'feedback:',limit:100});
  const entries=(await Promise.all(result.keys.map(k=>feedbackRead(env,k.name)))).filter(Boolean);
  return {entries,cursor:result.cursor,list_complete:result.list_complete};
 }
 const result=await env.BACKUPS.list({prefix:'private-feedback/feedback:',limit:100});
 const entries=(await Promise.all(result.objects.map(async obj=>{const record=await env.BACKUPS.get(obj.key);return record?await record.json():null}))).filter(Boolean);
 return {entries,cursor:result.cursor,list_complete:result.truncated===false};
}
