
let articles=[], site={}; const state={topic:"Alle",search:"",access:"all"};
const $=s=>document.querySelector(s);
const api=()=>window.WISSEN_API_URL||"";

async function fetchJson(path, fallback){
  try{const r=await fetch(api()?`${api()}${path}`:fallback,{cache:"no-store"});if(!r.ok)throw 0;return await r.json()}catch(e){return null}
}
async function loadAll(){
  const [a,s]=await Promise.all([fetchJson("/articles","data/articles.json"),fetchJson("/site","data/site.json")]);
  if(a)articles=a;if(s)site=s;applySite();renderAll();fillArticleSelect();fillSiteForm();
}
function applySite(){
  document.title=site.title||"Wissen für den Dienst";
  $("#siteTitle").textContent=site.title||"Wissen für den Dienst";$("#siteSubtitle").textContent=site.subtitle||"";
  $("#siteEyebrow").textContent=site.eyebrow||"";$("#siteFooter").textContent=site.footer||"";
  if(site.accent)document.documentElement.style.setProperty("--accent",site.accent);
}
function aLabel(a){return a==="oa"?["Open Access","oa"]:a==="free"?["Freie Version","oa"]:["Paywall","pay"]}
function isNew(a){return a.added&&((Date.now()-new Date(a.added))/86400000)<=30}
function card(a){const [lab,cls]=aLabel(a.access);return `<article class="card">
<div>${isNew(a)?'<span class="new">Neu</span>':""}</div><div class="meta">${(a.topics||[]).map(t=>`<span class="chip">${esc(t)}</span>`).join("")}<span class="chip ${cls}">${lab}</span></div>
<h3>${esc(a.title)}</h3><div class="small">${esc(a.authors||"")}${a.journal?" · "+esc(a.journal):""}${a.year?" · "+a.year:""}${a.read?" · ⏱ "+esc(a.read):""}</div>
<p>${esc(a.why||"")}</p><div class="btnrow">${a.publisherUrl?`<a class="btn" href="${attr(a.publisherUrl)}" target="_blank" rel="noopener">Originalquelle</a>`:""}${a.freeUrl?`<a class="btn secondary" href="${attr(a.freeUrl)}" target="_blank" rel="noopener">Freie Version</a>`:""}${a.doi?`<a class="btn secondary" href="https://doi.org/${attr(a.doi)}" target="_blank" rel="noopener">DOI</a>`:""}</div></article>`}
function renderFeatured(a=null){a=a||articles.find(x=>x.featured)||articles[0];if(!a){$("#featured").innerHTML="";return}const [lab,cls]=aLabel(a.access);$("#featured").innerHTML=`<div class="feature"><div class="eyebrow accent">⭐ Lesetipp</div><h2>${esc(a.title)}</h2><div class="meta">${(a.topics||[]).map(t=>`<span class="chip">${esc(t)}</span>`).join("")}<span class="chip">${esc(a.type||"")}</span><span class="chip ${cls}">${lab}</span></div><p><strong>Warum lesenswert?</strong><br>${esc(a.why||"")}</p><div class="btnrow">${a.publisherUrl?`<a class="btn" href="${attr(a.publisherUrl)}" target="_blank" rel="noopener">Originalquelle →</a>`:""}${a.freeUrl?`<a class="btn secondary" href="${attr(a.freeUrl)}" target="_blank" rel="noopener">Freie Version</a>`:""}</div></div>`}
function renderTopics(){const all=["Alle",...new Set(articles.flatMap(a=>a.topics||[]))].sort((a,b)=>a==="Alle"?-1:a.localeCompare(b));$("#topics").innerHTML=all.map(t=>`<button class="topic-btn ${state.topic===t?"active":""}" data-topic="${attr(t)}">${esc(t)}</button>`).join("");document.querySelectorAll(".topic-btn").forEach(b=>b.onclick=()=>{state.topic=b.dataset.topic;renderTopics();renderCards()})}
function renderCards(){const q=state.search.toLowerCase().trim();const f=articles.filter(a=>{const t=state.topic==="Alle"||(a.topics||[]).includes(state.topic);const x=state.access==="all"||a.access===state.access;const hay=[a.title,a.authors,a.journal,a.year,a.type,a.why,...(a.topics||[])].join(" ").toLowerCase();return t&&x&&(!q||hay.includes(q))}).sort((a,b)=>(b.added||"").localeCompare(a.added||""));$("#count").textContent=`${f.length} Einträge`;$("#empty").style.display=f.length?"none":"block";$("#cards").innerHTML=f.map(card).join("")}
function renderAll(){renderFeatured();renderTopics();renderCards()}
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function attr(s){return esc(s)}
$("#search").oninput=e=>{state.search=e.target.value;renderCards()};$("#access").onchange=e=>{state.access=e.target.value;renderCards()};$("#randomBtn").onclick=()=>articles.length&&renderFeatured(articles[Math.floor(Math.random()*articles.length)]);

$("#adminOpen").onclick=()=>$("#adminModal").classList.remove("hidden");$("#adminClose").onclick=()=>$("#adminModal").classList.add("hidden");$("#adminModal").onclick=e=>{if(e.target.id==="adminModal")$("#adminModal").classList.add("hidden")};
document.querySelectorAll(".tab").forEach(t=>t.onclick=()=>{document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===t));document.querySelectorAll(".tabpane").forEach(p=>p.classList.add("hidden"));$("#"+t.dataset.tab).classList.remove("hidden")});

function fillArticleSelect(){const sel=$("#articleSelect");sel.innerHTML='<option value="">Neuen Artikel anlegen</option>'+articles.slice().sort((a,b)=>a.title.localeCompare(b.title)).map(a=>`<option value="${attr(a.id)}">${esc(a.title)}</option>`).join("")}
function resetArticle(){const f=$("#articleForm");f.reset();f.elements.id.value="";$("#deleteBtn").classList.add("hidden");$("#formStatus").textContent="";$("#articleSelect").value=""}
$("#newArticleBtn").onclick=resetArticle;
$("#articleSelect").onchange=e=>{const a=articles.find(x=>x.id===e.target.value);if(!a)return resetArticle();const f=$("#articleForm");for(const k of ["id","title","authors","journal","year","doi","type","read","access","publisherUrl","freeUrl","why"])if(f.elements[k])f.elements[k].value=a[k]??"";f.elements.topics.value=(a.topics||[]).join(", ");f.elements.featured.checked=!!a.featured;$("#deleteBtn").classList.remove("hidden")};

$("#doiBtn").onclick=async()=>{
  let doi=$("#doiLookup").value.trim().replace(/^https?:\/\/(dx\.)?doi\.org\//i,"");if(!doi)return;
  $("#formStatus").textContent="DOI wird abgefragt …";
  try{
    const r=await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
    if(!r.ok)throw new Error("DOI nicht gefunden");
    const m=(await r.json()).message,f=$("#articleForm");
    f.elements.title.value=(m.title&&m.title[0])||"";
    f.elements.authors.value=(m.author||[]).map(a=>[a.given,a.family].filter(Boolean).join(" ")).join(", ");
    f.elements.journal.value=(m["container-title"]&&m["container-title"][0])||m.publisher||"";
    const parts=(m.published&&m.published["date-parts"]&&m.published["date-parts"][0])||(m.issued&&m.issued["date-parts"]&&m.issued["date-parts"][0]);
    f.elements.year.value=parts?parts[0]:""; f.elements.doi.value=m.DOI||doi;
    f.elements.publisherUrl.value=m.URL||`https://doi.org/${doi}`;
    $("#formStatus").textContent="Metadaten übernommen. Bitte Themen, Lesezeit, Zugriff und Einordnung ergänzen.";
  }catch(err){$("#formStatus").textContent="DOI-Abfrage fehlgeschlagen: "+err.message}
};
function formArticle(fd){const existing=fd.get("id");const slug=(fd.get("title")||"artikel").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");return {id:existing||`${slug}-${Date.now()}`,title:fd.get("title").trim(),authors:fd.get("authors").trim(),journal:fd.get("journal").trim(),year:Number(fd.get("year"))||"",doi:fd.get("doi").trim(),topics:fd.get("topics").split(",").map(x=>x.trim()).filter(Boolean),type:fd.get("type"),read:fd.get("read").trim(),access:fd.get("access"),why:fd.get("why").trim(),publisherUrl:fd.get("publisherUrl").trim(),freeUrl:fd.get("freeUrl").trim(),featured:fd.get("featured")==="on",added: existing?(articles.find(a=>a.id===existing)?.added||new Date().toISOString().slice(0,10)):new Date().toISOString().slice(0,10)}}
$("#previewBtn").onclick=()=>{renderFeatured(formArticle(new FormData($("#articleForm"))));$("#adminModal").classList.add("hidden");window.scrollTo({top:220,behavior:"smooth"})};
$("#articleForm").onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target),article=formArticle(fd),pin=fd.get("pin");if(!api()){ $("#formStatus").textContent="Speichern ist erst nach Einrichtung des Workers aktiv.";return }$("#formStatus").textContent="Speichere …";try{const r=await fetch(`${api()}/articles`,{method:article.id&&articles.some(a=>a.id===article.id)?"PUT":"POST",headers:{"Content-Type":"application/json","X-Admin-Pin":pin},body:JSON.stringify(article)});const d=await r.json();if(!r.ok)throw new Error(d.error||"Fehler");$("#formStatus").textContent="Gespeichert.";await loadAll();resetArticle()}catch(err){$("#formStatus").textContent="Fehler: "+err.message}};
$("#deleteBtn").onclick=async()=>{const f=$("#articleForm"),id=f.elements.id.value,pin=f.elements.pin.value;if(!id)return;if(!confirm("Diesen Artikel wirklich löschen?"))return;if(!api()){ $("#formStatus").textContent="Löschen ist erst nach Einrichtung des Workers aktiv.";return }try{const r=await fetch(`${api()}/articles/${encodeURIComponent(id)}`,{method:"DELETE",headers:{"X-Admin-Pin":pin}});const d=await r.json();if(!r.ok)throw new Error(d.error||"Fehler");await loadAll();resetArticle();$("#formStatus").textContent="Artikel gelöscht."}catch(err){$("#formStatus").textContent="Fehler: "+err.message}};

function fillSiteForm(){const f=$("#siteForm");for(const k of ["title","eyebrow","subtitle","footer","accent"])if(f.elements[k])f.elements[k].value=site[k]||""}
$("#siteForm").onsubmit=async e=>{e.preventDefault();const fd=new FormData(e.target),pin=fd.get("pin");const next={title:fd.get("title").trim(),eyebrow:fd.get("eyebrow").trim(),subtitle:fd.get("subtitle").trim(),footer:fd.get("footer").trim(),accent:fd.get("accent")};if(!api()){site=next;applySite();$("#siteStatus").textContent="Vorschau angewendet. Dauerhaftes Speichern benötigt den Worker.";return}try{const r=await fetch(`${api()}/site`,{method:"PUT",headers:{"Content-Type":"application/json","X-Admin-Pin":pin},body:JSON.stringify(next)});const d=await r.json();if(!r.ok)throw new Error(d.error||"Fehler");site=next;applySite();$("#siteStatus").textContent="Erscheinungsbild gespeichert."}catch(err){$("#siteStatus").textContent="Fehler: "+err.message}};
loadAll();
