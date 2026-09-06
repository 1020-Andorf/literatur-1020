
export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": env.ALLOWED_ORIGIN || "*",
      "Access-Control-Allow-Headers": "Content-Type, X-Admin-Pin",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    };
    if (request.method === "OPTIONS") return new Response(null, { headers: cors });

    const url = new URL(request.url);
    if (url.pathname !== "/articles") return json({error:"Not found"},404,cors);

    if (request.method === "GET") {
      const content = await getFile(env);
      return json(content,200,cors);
    }

    if (request.method === "POST") {
      const pin = request.headers.get("X-Admin-Pin") || "";
      if (!(await validPin(pin, env.ADMIN_PIN_SHA256))) return json({error:"PIN ungültig"},401,cors);

      const article = await request.json();
      if (!article.title) return json({error:"Titel fehlt"},400,cors);

      const current = await getFile(env, true);
      let items = current.items;
      if (article.featured) items = items.map(x => ({...x, featured:false}));
      items.unshift(article);

      await putFile(env, items, current.sha, `Literatur: ${article.title}`);
      return json({ok:true},200,cors);
    }
    return json({error:"Method not allowed"},405,cors);
  }
};

function json(data,status,headers){return new Response(JSON.stringify(data),{status,headers:{...headers,"Content-Type":"application/json; charset=utf-8"}})}

async function validPin(pin, expectedHex){
  const bytes = new TextEncoder().encode(pin);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  const hex = [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");
  return hex === expectedHex;
}

async function gh(env, path, init={}){
  const r = await fetch(`https://api.github.com${path}`,{
    ...init,
    headers:{
      "Authorization":`Bearer ${env.GITHUB_TOKEN}`,
      "Accept":"application/vnd.github+json",
      "X-GitHub-Api-Version":"2022-11-28",
      "User-Agent":"wissen-fuer-den-dienst",
      ...(init.headers||{})
    }
  });
  if(!r.ok) throw new Error(`GitHub API ${r.status}: ${await r.text()}`);
  return r;
}
async function getFile(env,withSha=false){
  const path=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/data/articles.json?ref=${env.GITHUB_BRANCH||"main"}`;
  const data=await (await gh(env,path)).json();
  const text=decodeURIComponent(escape(atob(data.content.replace(/\n/g,""))));
  const items=JSON.parse(text);
  return withSha?{items,sha:data.sha}:items;
}
async function putFile(env,items,sha,message){
  const text=JSON.stringify(items,null,2);
  const b64=btoa(unescape(encodeURIComponent(text)));
  const path=`/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/data/articles.json`;
  await gh(env,path,{method:"PUT",body:JSON.stringify({message,content:b64,sha,branch:env.GITHUB_BRANCH||"main"})});
}
