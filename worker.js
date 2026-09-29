
export default {
 async fetch(request, env) {
  const cors={"Access-Control-Allow-Origin":env.ALLOWED_ORIGIN||"*","Vary":"Origin","Access-Control-Allow-Headers":"Content-Type, X-Admin-Pin","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"};
  if(request.method==="OPTIONS")return new Response(null,{headers:cors});
  const url=new URL(request.url);
  try{
   if(url.pathname==="/articles"&&request.method==="GET")return json(await getJson(env,"data/articles.json"),200,cors);
   const m=url.pathname.match(/^\/content\/(abcde|differential|skills)$/);
   if(m&&request.method==="GET")return json(await getJson(env,`data/${m[1]}.json`),200,cors);
   if(url.pathname==="/auth"&&request.method==="POST")return await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256)?json({ok:true},200,cors):json({error:"PIN ungültig"},401,cors);
   if(!await validPin(request.headers.get("X-Admin-Pin")||"",env.ADMIN_PIN_SHA256))return json({error:"PIN ungültig"},401,cors);
   if(m&&request.method==="PUT"){
    const next=await request.json();const cur=await getJson(env,`data/${m[1]}.json`,true);await putJson(env,`data/${m[1]}.json`,next,cur.sha,`Wissenssammlung: ${m[1]} aktualisiert`);return json({ok:true},200,cors);
   }
   return json({error:"Not found"},404,cors);
  }catch(e){return json({error:e.message||"Serverfehler"},500,cors)}
 }
}
function json(data,status,headers){return new Response(JSON.stringify(data),{status,headers:{...headers,"Content-Type":"application/json; charset=utf-8"}})}
async function validPin(pin,expected){const d=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(pin));const h=[...new Uint8Array(d)].map(b=>b.toString(16).padStart(2,"0")).join("");return h===expected}
async function gh(env,path,init={}){const r=await fetch(`https://api.github.com${path}`,{...init,headers:{"Authorization":`Bearer ${env.GITHUB_TOKEN}`,"Accept":"application/vnd.github+json","X-GitHub-Api-Version":"2022-11-28","User-Agent":"ost-1020-wissenssammlung",...(init.headers||{})}});if(!r.ok)throw new Error(`GitHub API ${r.status}: ${await r.text()}`);return r}
async function getJson(env,file,withSha=false){const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}?ref=${env.GITHUB_BRANCH||"main"}`;const d=await(await gh(env,p)).json();const text=decodeURIComponent(escape(atob(d.content.replace(/\n/g,""))));const items=JSON.parse(text);return withSha?{items,sha:d.sha}:items}
async function putJson(env,file,obj,sha,message){const text=JSON.stringify(obj,null,2);const b64=btoa(unescape(encodeURIComponent(text)));const p=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${file}`;await gh(env,p,{method:"PUT",body:JSON.stringify({message,content:b64,sha,branch:env.GITHUB_BRANCH||"main"})})}
