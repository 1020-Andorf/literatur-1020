
(()=>{
const page=document.body.dataset.page||'home';
const API=(window.WISSEN_API_URL||'').replace(/\/$/,'');
const LS='ost1020-v22-';
let editorPin='';
const $=(s,r=document)=>r.querySelector(s); const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
const svg={
 menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/></svg>',
 close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
 book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16"/></svg>',
 search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
 check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 12 4 4 10-10"/></svg>',
 lungs:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 4v7"/><path d="M10 10c-2-4-4-5-5-3-1 2-2 6-2 9 0 3 2 5 5 4 2-.6 3-3 3-6V9"/><path d="M14 10c2-4 4-5 5-3 1 2 2 6 2 9 0 3-2 5-5 4-2-.6-3-3-3-6V9"/></svg>',
 heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z"/></svg>',
 brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 4a3 3 0 0 0-5 2 3 3 0 0 0 0 5 3 3 0 0 0 1 5 3 3 0 0 0 4 3V4zM15 4a3 3 0 0 1 5 2 3 3 0 0 1 0 5 3 3 0 0 1-1 5 3 3 0 0 1-4 3V4z"/></svg>',
 bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m13 2-8 12h7l-1 8 8-12h-7z"/></svg>',
 stethoscope:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v2a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/></svg>',
 syringe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m14 4 6 6M11 7l6 6M3 21l5-5M5 19l-2 2M8 16l8-8 3 3-8 8z"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 bandage:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 16 8-8a4 4 0 0 1 6 6l-8 8a4 4 0 0 1-6-6z"/><path d="M8 8 3 13a4 4 0 0 0 6 6l5-5"/><path d="M10 11h.01M13 14h.01"/></svg>'
};
function chrome(){
  $('[data-menu-btn]').innerHTML=svg.menu; $('[data-home-btn]').innerHTML=svg.home;
  document.body.insertAdjacentHTML('beforeend',`<div class="menu" data-menu><div class="shade" data-menu-close></div><aside class="menu-sheet"><div class="menu-head"><strong>Menü</strong><button class="close" data-menu-close>${svg.close}</button></div><nav class="nav">${[['literatur.html','Literatursammlung','literature'],['abcde.html','ABCDE-Schema','abcde'],['differential.html','Differentialdiagnostik','differential'],['skilltraining.html','Skilltraining','skills'],['editor.html','Redaktion','editor']].map(x=>`<a href="${x[0]}" class="${page===x[2]?'active':''}">${x[1]}</a>`).join('')}</nav></aside></div><div class="overlay" data-overlay><div class="shade" data-overlay-close></div><section class="overlay-panel"><div class="overlay-head"><h2 data-overlay-title></h2><button class="close" data-overlay-close>${svg.close}</button></div><div class="overlay-body" data-overlay-body></div></section></div>`);
  $('[data-menu-btn]').onclick=()=>{$('[data-menu]').classList.add('show');document.body.classList.add('menu-open')};
  $$('[data-menu-close]').forEach(b=>b.onclick=()=>{$('[data-menu]').classList.remove('show');document.body.classList.remove('menu-open')});
  $$('[data-overlay-close]').forEach(b=>b.onclick=closeOverlay);
}
function openOverlay(title,html){$('[data-overlay-title]').textContent=title;$('[data-overlay-body]').innerHTML=html;$('[data-overlay]').classList.add('show');document.body.classList.add('overlay-open')}
function closeOverlay(){$('[data-overlay]').classList.remove('show');document.body.classList.remove('overlay-open')}
async function getData(name){
  if(API){try{const r=await fetch(`${API}/content/${name}`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}
  try{const raw=localStorage.getItem(LS+name);if(raw)return JSON.parse(raw)}catch(e){}
  const r=await fetch(`data/${name}.json?v=22`,{cache:'no-store'});return r.json();
}
async function saveData(name,data){
  localStorage.setItem(LS+name,JSON.stringify(data));
  if(API&&editorPin){try{const r=await fetch(`${API}/content/${name}`,{method:'PUT',headers:{'Content-Type':'application/json','X-Admin-Pin':editorPin},body:JSON.stringify(data)});if(r.ok)return {remote:true};}catch(e){}}
  return {remote:false};
}
async function getArticles(){
  if(API){try{const r=await fetch(`${API}/articles`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}
  const r=await fetch('data/articles.json?v=22',{cache:'no-store'});return r.json();
}
function arr(v){return Array.isArray(v)?v:String(v||'').split(/\n|;/).map(s=>s.trim()).filter(Boolean)}
function articleHtml(a){
 const authors=Array.isArray(a.authors)?a.authors.join(', '):String(a.authors||'');
 const url=a.freeUrl||a.publisherUrl||'';
 return `<article class="overlay-section"><div class="article-title">${esc(a.title)}</div><div class="article-meta">${esc(authors)}${a.journal?' · '+esc(a.journal):''}${a.year?' · '+esc(a.year):''}</div>${a.why?`<div class="article-why">${esc(a.why)}</div>`:''}${url?`<a class="article-link" target="_blank" rel="noopener" href="${esc(url)}">Artikel öffnen</a>`:''}</article>`;
}
function topicDefs(){return [
 ['reanimation','Reanimation','bolt','blue',['Reanimation','Kreislaufstillstand']],['simulation','Simulation & Debriefing','check','teal',['Simulation','Debriefing','Ausbildung']],['crm','CRM & Human Factors','brain','purple',['CRM','Human Factors','Entscheidungsfindung']],['neuro','Neurologie / Schlaganfall','brain','blue',['Neurologie','Schlaganfall']],['quality','Qualität & Sicherheit','check','teal',['Qualität','Patientensicherheit','System']],['critical','Critical Care','lungs','purple',['Critical Care','Diagnostik']],['pharma','Pharmakologie & Schmerz','syringe','blue',['Pharmakologie','Schmerz']],['hems','HEMS & Präklinik','bolt','teal',['HEMS','Versorgung','Österreich']]]}
function renderHome(){ $('[data-main]').innerHTML=`<div class="home-title">OST 1020 -<br>Wissenssammlung</div><div class="home-grid"><a class="home-tile lit" href="literatur.html"><span class="home-icon">${svg.book}</span><span class="home-label">Literatursammlung</span></a><a class="home-tile abc" href="abcde.html"><span class="home-icon text">A→E</span><span class="home-label">ABCDE-Schema</span></a><a class="home-tile diff" href="differential.html"><span class="home-icon">${svg.search}</span><span class="home-label">Differentialdiagnostik</span></a><a class="home-tile skill" href="skilltraining.html"><span class="home-icon">${svg.check}</span><span class="home-label">Skilltraining</span></a></div>`}
async function renderLiterature(){
 const articles=await getArticles();const defs=topicDefs();const groups=defs.map(d=>({id:d[0],title:d[1],icon:d[2],color:d[3],items:articles.filter(a=>arr(a.topics).some(t=>d[4].includes(t)))})).filter(g=>g.items.length);
 $('[data-main]').innerHTML=`<section class="card"><div class="grid-2">${groups.map(g=>`<button class="topic-tile" data-topic="${g.id}"><div style="display:flex;align-items:center;gap:10px"><span class="mini-icon ${g.color}">${svg[g.icon]||svg.book}</span><span class="tile-text">${esc(g.title)}</span></div><span class="topic-count">${g.items.length} Artikel</span></button>`).join('')}</div></section>`;
 groups.forEach(g=>$(`[data-topic="${g.id}"]`).onclick=()=>openOverlay(g.title,g.items.map(articleHtml).join('')));
}
async function renderAbc(){const data=await getData('abcde');$('[data-main]').innerHTML=`<section class="card"><div class="grid-2">${data.map((x,i)=>`<button class="abc-tile" data-id="${esc(x.id)}"><span class="abc-letter ${['blue','purple','teal','green','red'][i%5]}">${esc(x.key)}</span><span class="abc-label">${esc(x.title)}</span></button>`).join('')}</div></section>`;data.forEach(x=>$(`[data-id="${x.id}"]`).onclick=()=>openOverlay(`${x.key} · ${x.title}`,sectionsHtml([['Beurteilung',x.checks],['Maßnahmen',x.actions],['Häufige Fehler',x.pitfalls]])))}
function sectionsHtml(parts){return parts.map(([t,list])=>`<section class="overlay-section"><h3>${esc(t)}</h3><ul class="overlay-list">${arr(list).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`).join('')}
async function renderDiff(){const data=await getData('differential');$('[data-main]').innerHTML=`<section class="card"><div class="grid-2">${data.map((x,i)=>`<button class="symptom-tile" data-id="${esc(x.id)}"><span class="mini-icon ${['teal','purple','blue','green'][i%4]}">${svg[x.icon]||svg.search}</span><span class="tile-text">${esc(x.title)}</span></button>`).join('')}</div></section>`;data.forEach(x=>$(`[data-id="${x.id}"]`).onclick=()=>openOverlay(x.title,sectionsHtml([['Mögliche Ursachen',x.causes],['Wichtige Fragen',x.questions],['Red Flags',x.redflags]])))}
async function renderSkills(){const data=await getData('skills');const groups=[...new Set(data.map(x=>x.group))];$('[data-main]').innerHTML=`<section class="card">${groups.map(g=>`<div class="group-title">${esc(g)}</div><div class="grid-2">${data.filter(x=>x.group===g).map((x,i)=>`<button class="skill-tile" data-skill="${esc(x.id)}"><span class="mini-icon ${['blue','teal','green','purple'][i%4]}">${esc(g)}</span><span class="tile-text">${esc(x.name)}</span></button>`).join('')}</div>`).join('')}</section>`;data.forEach(x=>$(`[data-skill="${x.id}"]`).onclick=()=>openOverlay(x.name,sectionsHtml([['Indikation',x.indication],['Material',x.material],['Ablauf',x.steps]])))}
async function authPin(pin){if(!API)return pin==='1020';try{const r=await fetch(`${API}/auth`,{method:'POST',headers:{'X-Admin-Pin':pin}});return r.ok}catch(e){return false}}
function lines(v){return arr(v).join('\n')}
function editField(label,value,key,multiline=false){return `<div class="edit-field"><label>${label}</label>${multiline?`<textarea data-key="${key}">${esc(value)}</textarea>`:`<input data-key="${key}" value="${esc(value)}">`}</div>`}
async function renderEditor(){
 const main=$('[data-main]');if(!editorPin){main.innerHTML=`<section class="pin-card"><h2>Redaktion</h2><div class="pin-row"><input class="field" type="password" inputmode="numeric" placeholder="PIN" data-pin><button class="btn primary" data-unlock>Öffnen</button></div><div class="status" data-auth-msg></div></section>`;$('[data-unlock]').onclick=async()=>{const pin=$('[data-pin]').value.trim();if(await authPin(pin)){editorPin=pin;sessionStorage.setItem('ost1020-pin',pin);renderEditor()}else $('[data-auth-msg]').textContent='PIN nicht korrekt.'};return}
 let active='abcde';let datasets={abcde:await getData('abcde'),differential:await getData('differential'),skills:await getData('skills')};
 main.innerHTML=`<section class="card"><div class="editor-tabs"><button class="editor-tab active" data-tab="abcde">ABCDE</button><button class="editor-tab" data-tab="differential">Leitsymptome</button><button class="editor-tab" data-tab="skills">Skills</button></div><div data-edit-list></div><div class="editor-actions"><button class="btn primary" data-save>Speichern</button><button class="btn" data-lock>Schließen</button></div><div class="status" data-status></div></section>`;
 function renderTab(){$$('.editor-tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===active));const list=$('[data-edit-list]');const data=datasets[active];if(active==='abcde'){list.innerHTML=`<div class="editor-list">${data.map((x,i)=>`<details class="edit-card" data-idx="${i}"><summary>${esc(x.key)} · ${esc(x.title)}<span>⌄</span></summary><div class="edit-body">${editField('Titel',x.title,'title')}${editField('Beurteilung – eine Zeile pro Punkt',lines(x.checks),'checks',true)}${editField('Maßnahmen – eine Zeile pro Punkt',lines(x.actions),'actions',true)}${editField('Häufige Fehler – eine Zeile pro Punkt',lines(x.pitfalls),'pitfalls',true)}</div></details>`).join('')}</div>`}
 if(active==='differential'){list.innerHTML=`<div class="add-row"><button class="btn" data-add>+ Leitsymptom</button></div><div class="editor-list">${data.map((x,i)=>`<details class="edit-card" data-idx="${i}"><summary>${esc(x.title)}<span>⌄</span></summary><div class="edit-body">${editField('Titel',x.title,'title')}${editField('Mögliche Ursachen',lines(x.causes),'causes',true)}${editField('Wichtige Fragen',lines(x.questions),'questions',true)}${editField('Red Flags',lines(x.redflags),'redflags',true)}<button class="btn danger" data-delete>Leitsymptom löschen</button></div></details>`).join('')}</div>`}
 if(active==='skills'){list.innerHTML=`<div class="add-row"><button class="btn" data-add>+ Skill</button></div><div class="editor-list">${data.map((x,i)=>`<details class="edit-card" data-idx="${i}"><summary>${esc(x.name)} <span>${esc(x.group)} · ⌄</span></summary><div class="edit-body">${editField('Name',x.name,'name')}${editField('Gruppe',x.group,'group')}${editField('Indikation',lines(x.indication),'indication',true)}${editField('Material',lines(x.material),'material',true)}${editField('Ablauf',lines(x.steps),'steps',true)}<button class="btn danger" data-delete>Skill löschen</button></div></details>`).join('')}</div>`}
 $$('.edit-card').forEach(card=>{const idx=+card.dataset.idx;$$('[data-key]',card).forEach(inp=>inp.oninput=()=>{const k=inp.dataset.key;datasets[active][idx][k]=['checks','actions','pitfalls','causes','questions','redflags','indication','material','steps'].includes(k)?arr(inp.value):inp.value});const del=$('[data-delete]',card);if(del)del.onclick=()=>{datasets[active].splice(idx,1);renderTab()}});const add=$('[data-add]');if(add)add.onclick=()=>{if(active==='differential')datasets.differential.push({id:'sym-'+Date.now(),icon:'search',title:'Neues Leitsymptom',causes:[],questions:[],redflags:[]});else datasets.skills.push({id:'skill-'+Date.now(),name:'Neuer Skill',group:'A',indication:[],material:[],steps:[]});renderTab()}}
 $$('.editor-tab').forEach(b=>b.onclick=()=>{active=b.dataset.tab;renderTab()});$('[data-save]').onclick=async()=>{const result=await Promise.all(Object.entries(datasets).map(([n,d])=>saveData(n,d)));$('[data-status]').textContent=result.every(x=>x.remote)?'Gespeichert und mit GitHub synchronisiert.':'Gespeichert. Für GitHub-Synchronisation den mitgelieferten Worker aktualisieren.'};$('[data-lock]').onclick=()=>{editorPin='';sessionStorage.removeItem('ost1020-pin');renderEditor()};renderTab();
}
async function init(){chrome();editorPin=sessionStorage.getItem('ost1020-pin')||'';if(page==='home')renderHome();if(page==='literature')await renderLiterature();if(page==='abcde')await renderAbc();if(page==='differential')await renderDiff();if(page==='skills')await renderSkills();if(page==='editor')await renderEditor()}
window.addEventListener('DOMContentLoaded',init);
})();
