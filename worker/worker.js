
export default {
 async fetch(request, env) {
  const origin=request.headers.get("Origin")||"";
  const allowed=env.ALLOWED_ORIGIN||"*";
  const cors={"Access-Control-Allow-Origin":allowed==="*"?"*":allowed,"Vary":"Origin","Access-Control-Allow-Headers":"Content-Type, X-Admin-Pin","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"};
  if(request.method==="OPTIONS")return new Response(null,{headers:cors});
  const url=new URL(request.url);
  try{
   if(url.pathname==="/articles"&&request.method==="GET")return json(await getJson(env,"data/articles.json"),200,cors);
   if(url.pathname==="/site"&&request.method==="GET")return json(await getJson(env,"data/site.json"),200,cors);
   if(!await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256))return json({error:"PIN ungültig"},401,cors);

   if(url.pathname==="/articles"&&(request.method==="POST"||request.method==="PUT")){
    const article=await request.json(); if(!article.title)return json({error:"Titel fehlt"},400,cors);
    const cur=await getJson(env,"data/articles.json",true); let items=cur.items;
    if(article.featured)items=items.map(x=>({...x,featured:false}));
    const idx=items.findIndex(x=>x.id===article.id);
    if(request.method==="PUT"&&idx>=0)items[idx]=article; else if(idx>=0)items[idx]=article; else items.unshift(article);
    await putJson(env,"data/articles.json",items,cur.sha,`Literatur: ${article.title}`);
    return json({ok:true},200,cors);
   }
   if(url.pathname.startsWith("/articles/")&&request.method==="DELETE"){
    const id=decodeURIComponent(url.pathname.split("/").pop());const cur=await getJson(env,"data/articles.json",true);
    const items=cur.items.filter(x=>x.id!==id);await putJson(env,"data/articles.json",items,cur.sha,`Literatur löschen: ${id}`);return json({ok:true},200,cors);
   }
   if(url.pathname==="/site"&&request.method==="PUT"){
    const next=await request.json();const cur=await getJson(env,"data/site.json",true);
    await putJson(env,"data/site.json",next,cur.sha,"Website-Einstellungen aktualisieren");return json({ok:true},200,cors);
   }
   return json({error:"Not found"},404,cors);
  }catch(e){return json({error:e.message||"Serverfehler"},500,cors)}
 }
}
function json(data,status,headers){return new Response(JSON.stringify(data),{status,headers:{...headers,"Content-Type":"application/json; charset=utf-8"}})}
async function validPin(pin,expected){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pin));const h=[...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("");return h===expected}
async function gh(env,path,init={}){const r=await fetch(`https://api.github.com${path}`,{...init,headers:{"Authorization":`Bearer ${env.GITHUB_TOKEN}`,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":"wissen-fuer-den-dienst",...(init.headers||{})}});if(!r.ok)throw new Error(`GitHub API ${r.status}: ${await r.text()}`);return r}
async function getJson(env,file,withSha=false){const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}?ref=${env.GITHUB_BRANCH||"main"}`;const d=await(await gh(env,p)).json();const text=decodeURIComponent(escape(atob(d.content.replace(/\n/g,""))));const items=JSON.parse(text);return withSha?{items,sha:d.sha}:items}
async function putJson(env,file,obj,sha,message){const text=JSON.stringify(obj,null,2);const b64=btoa(unescape(encodeURIComponent(text)));const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;await gh(env,p,{method:"PUT",body:JSON.stringify({message,content:b64,sha,branch:env.GITHUB_BRANCH||"main"})})}
