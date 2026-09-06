
let articles=[]; const state={topic:"Alle",search:"",access:"all"};
const $=s=>document.querySelector(s);

async function loadArticles(){
  try{
    const base = window.WISSEN_API_URL;
    const r = await fetch(base ? `${base}/articles` : `data/articles.json`, {cache:"no-store"});
    articles = await r.json();
    renderAll();
  }catch(e){ $("#cards").innerHTML="<p>Literaturdaten konnten nicht geladen werden.</p>"; }
}
function aLabel(a){return a==="oa"?["Open Access","oa"]:a==="free"?["Freie Version","oa"]:["Paywall","pay"]}
function isNew(a){if(!a.added)return false; const d=(Date.now()-new Date(a.added))/86400000; return d<=30}
function card(a){
  const [lab,cls]=aLabel(a.access);
  return `<article class="card">
    <div>${isNew(a)?'<span class="new">Neu</span>':""}</div>
    <div class="meta">${a.topics.map(t=>`<span class="chip">${t}</span>`).join("")}<span class="chip ${cls}">${lab}</span></div>
    <h3>${a.title}</h3>
    <div class="small">${a.authors||""}${a.journal?" · "+a.journal:""}${a.year?" · "+a.year:""}${a.read?" · ⏱ "+a.read:""}</div>
    <p>${a.why||""}</p>
    <div class="btnrow">
      ${a.publisherUrl?`<a class="btn" href="${a.publisherUrl}" target="_blank" rel="noopener">Originalquelle</a>`:""}
      ${a.freeUrl?`<a class="btn secondary" href="${a.freeUrl}" target="_blank" rel="noopener">Freie Version</a>`:""}
      ${a.doi?`<a class="btn secondary" href="https://doi.org/${a.doi}" target="_blank" rel="noopener">DOI</a>`:""}
    </div>
  </article>`
}
function renderFeatured(a=null){
  a=a||articles.find(x=>x.featured)||articles[0]; if(!a){$("#featured").innerHTML="";return}
  const [lab,cls]=aLabel(a.access);
  $("#featured").innerHTML=`<div class="feature"><div class="eyebrow accent">⭐ Lesetipp</div><h2>${a.title}</h2>
  <div class="meta">${a.topics.map(t=>`<span class="chip">${t}</span>`).join("")}<span class="chip">${a.type}</span><span class="chip ${cls}">${lab}</span></div>
  <p><strong>Warum lesenswert?</strong><br>${a.why||""}</p>
  <div class="btnrow">${a.publisherUrl?`<a class="btn" href="${a.publisherUrl}" target="_blank">Originalquelle →</a>`:""}${a.freeUrl?`<a class="btn secondary" href="${a.freeUrl}" target="_blank">Freie Version</a>`:""}</div></div>`;
}
function renderTopics(){
  const all=["Alle",...new Set(articles.flatMap(a=>a.topics||[]))].sort((a,b)=>a==="Alle"?-1:a.localeCompare(b));
  $("#topics").innerHTML=all.map(t=>`<button class="topic-btn ${state.topic===t?"active":""}" data-topic="${t}">${t}</button>`).join("");
  document.querySelectorAll(".topic-btn").forEach(b=>b.onclick=()=>{state.topic=b.dataset.topic;renderTopics();renderCards()})
}
function renderCards(){
  const q=state.search.toLowerCase().trim();
  const f=articles.filter(a=>{
    const t=state.topic==="Alle"||(a.topics||[]).includes(state.topic);
    const x=state.access==="all"||a.access===state.access;
    const hay=[a.title,a.authors,a.journal,a.year,a.type,a.why,...(a.topics||[])].join(" ").toLowerCase();
    return t&&x&&(!q||hay.includes(q));
  }).sort((a,b)=>(b.added||"").localeCompare(a.added||""));
  $("#count").textContent=`${f.length} Einträge`; $("#empty").style.display=f.length?"none":"block"; $("#cards").innerHTML=f.map(card).join("");
}
function renderAll(){renderFeatured();renderTopics();renderCards()}
$("#search").addEventListener("input",e=>{state.search=e.target.value;renderCards()});
$("#access").addEventListener("change",e=>{state.access=e.target.value;renderCards()});
$("#randomBtn").onclick=()=>{if(articles.length)renderFeatured(articles[Math.floor(Math.random()*articles.length)])};

$("#adminOpen").onclick=()=>$("#adminModal").classList.remove("hidden");
$("#adminClose").onclick=()=>$("#adminModal").classList.add("hidden");
$("#adminModal").addEventListener("click",e=>{if(e.target.id==="adminModal")$("#adminModal").classList.add("hidden")});

function formToArticle(fd){
  const slug=(fd.get("title")||"artikel").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
  return {
    id:`${slug}-${Date.now()}`, title:fd.get("title").trim(), authors:fd.get("authors").trim(),
    journal:fd.get("journal").trim(), year:Number(fd.get("year"))||"", doi:fd.get("doi").trim(),
    topics:fd.get("topics").split(",").map(x=>x.trim()).filter(Boolean), type:fd.get("type"),
    read:fd.get("read").trim(), access:fd.get("access"), why:fd.get("why").trim(),
    publisherUrl:fd.get("publisherUrl").trim(), freeUrl:fd.get("freeUrl").trim(),
    featured:fd.get("featured")==="on", added:new Date().toISOString().slice(0,10)
  };
}
$("#previewBtn").onclick=()=>{const fd=new FormData($("#articleForm")); renderFeatured(formToArticle(fd)); $("#adminModal").classList.add("hidden"); window.scrollTo({top:220,behavior:"smooth"})};

$("#articleForm").addEventListener("submit",async e=>{
  e.preventDefault(); const fd=new FormData(e.target); const article=formToArticle(fd); const pin=fd.get("pin");
  if(!window.WISSEN_API_URL){
    $("#formStatus").textContent="Noch keine API konfiguriert. Der Editor kann bereits Vorschauen erzeugen; gemeinsames Speichern benötigt den Worker.";
    return;
  }
  $("#formStatus").textContent="Speichere …";
  try{
    const r=await fetch(`${window.WISSEN_API_URL}/articles`,{
      method:"POST",headers:{"Content-Type":"application/json","X-Admin-Pin":pin},body:JSON.stringify(article)
    });
    const data=await r.json();
    if(!r.ok) throw new Error(data.error||"Fehler");
    $("#formStatus").textContent="Gespeichert.";
    e.target.reset(); await loadArticles();
  }catch(err){$("#formStatus").textContent=`Fehler: ${err.message}`}
});
loadArticles();
