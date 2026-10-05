
export default {
 async fetch(request, env) {
  const cors={"Access-Control-Allow-Origin":env.ALLOWED_ORIGIN||"*","Vary":"Origin","Access-Control-Allow-Headers":"Content-Type, X-Admin-Pin","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"};
  if(request.method==="OPTIONS")return new Response(null,{headers:cors});
  const url=new URL(request.url);
  try{
   if(url.pathname==="/articles"&&request.method==="GET")return json(await getJson(env,"data/articles.json"),200,cors);
   const m=url.pathname.match(/^\/content\/(articles|abcde|differential|skills|news|algorithms|changes|events|guide|materials)$/);
   if(m&&request.method==="GET")return json(await getJson(env,`data/${m[1]}.json`),200,cors);
   if(url.pathname==="/auth"&&request.method==="POST"){const body=await request.json().catch(()=>({}));return (await validPin(String(body.pin||""),env.ADMIN_PIN_SHA256))?json({ok:true},200,cors):json({error:"PIN ungültig"},401,cors);}
   const rsvp=url.pathname.match(/^\/events\/rsvp\/([^/]+)$/);
   if(rsvp&&request.method==="POST"){
    const id=decodeURIComponent(rsvp[1]);const body=await request.json();const clientId=String(body.clientId||"").trim();const name=String(body.name||"").trim();
    if(!clientId||clientId.length>120)return json({error:"Ungültige Teilnehmer-ID"},400,cors);
    if(name.length>100)return json({error:"Name zu lang"},400,cors);
    const cur=await getJson(env,"data/events.json",true);const items=cur.items;const ev=items.find(x=>x.id===id);
    if(!ev)return json({error:"Termin nicht gefunden"},404,cors);
    ev.attendees=Array.isArray(ev.attendees)?ev.attendees:[];ev.attendees=ev.attendees.map(a=>typeof a==="string"?{clientId:a,name:"",registeredAt:""}:a).filter(a=>a&&a.clientId);const i=ev.attendees.findIndex(a=>a.clientId===clientId);
    if(i>=0)ev.attendees.splice(i,1);else{if(!name)return json({error:"Name fehlt"},400,cors);if(ev.attendees.length<(Number(ev.capacity)||10))ev.attendees.push({clientId,name,registeredAt:new Date().toISOString()});}
    await putJson(env,"data/events.json",items,cur.sha,`Termin Teilnahme: ${id}`);
    return json({ok:true,events:items,count:ev.attendees.length,capacity:Number(ev.capacity)||10,joined:ev.attendees.some(a=>a.clientId===clientId)},200,cors);
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
