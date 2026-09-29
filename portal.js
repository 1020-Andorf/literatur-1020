
(function(){
const STORAGE_KEY='ost1020_content_v2';
const PIN_KEY='ost1020_editor_unlocked';
const EDITOR_PIN='1020';
const page=document.body.dataset.page;
const menuButton=document.querySelector('[data-menu-button]');
const menu=document.querySelector('[data-menu]');
const overlay=document.querySelector('[data-overlay]');
const overlayTitle=document.querySelector('[data-overlay-title]');
const overlaySub=document.querySelector('[data-overlay-sub]');
const overlayBody=document.querySelector('[data-overlay-body]');
const content = loadContent();

function loadContent(){
  const base = structuredClone(window.OST_DEFAULT_CONTENT || {});
  try{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(raw){
      const user=JSON.parse(raw);
      return Object.assign(base,user);
    }
  }catch(e){}
  return base;
}
function saveContent(obj){ localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); }
function esc(s){ return String(s??'').replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m])); }
function iconSVG(type){
  const map={
    home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11.5 12 4l9 7.5"/><path d="M5 10.5V20h14v-9.5"/></svg>',
    menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="11" width="16" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>'
  };
  return map[type]||'';
}
function topicGroups(){
  return [
    {id:'reanimation',title:'Reanimation', icon:'⚡', color:'b-blue', tags:['Reanimation','Kreislaufstillstand']},
    {id:'simulation',title:'Simulation & Debriefing', icon:'🎯', color:'b-teal', tags:['Simulation','Debriefing','Ausbildung']},
    {id:'crm',title:'CRM & Human Factors', icon:'👥', color:'b-purple', tags:['CRM','Human Factors','Entscheidungsfindung']},
    {id:'neuro',title:'Neurologie / Schlaganfall', icon:'🧠', color:'b-blue', tags:['Neurologie','Schlaganfall']},
    {id:'quality',title:'Qualität & Sicherheit', icon:'🛡️', color:'b-teal', tags:['Qualität','Patientensicherheit','System']},
    {id:'critical',title:'Critical Care', icon:'🫁', color:'b-purple', tags:['Critical Care','Diagnostik']},
    {id:'pharma',title:'Pharmakologie & Schmerz', icon:'💊', color:'b-blue', tags:['Pharmakologie','Schmerz']},
    {id:'hems',title:'HEMS & Präklinik', icon:'🚁', color:'b-teal', tags:['HEMS','Versorgung','Österreich']}
  ];
}
function menuHTML(){
  return `
    <div class="menu-panel" data-menu>
      <div class="menu-backdrop" data-menu-close></div>
      <aside class="menu-sheet">
        <div class="menu-top"><div class="menu-title">Menü</div><button class="icon-btn" data-menu-close>${iconSVG('close')}</button></div>
        <div class="menu-links">
          <a class="menu-link" href="literatur.html">Literatursammlung</a>
          <a class="menu-link" href="abcde.html">ABCDE-Schema</a>
          <a class="menu-link" href="differential.html">Differentialdiagnostik</a>
          <a class="menu-link" href="skilltraining.html">Skilltraining</a>
          <a class="menu-link" href="editor.html">Redaktion</a>
        </div>
      </aside>
    </div>`;
}
function overlayHTML(){
  return `<div class="overlay" data-overlay>
    <div class="overlay-backdrop" data-overlay-close></div>
    <section class="overlay-panel">
      <div class="overlay-header">
        <div><h3 data-overlay-title></h3><p data-overlay-sub></p></div>
        <button class="close-btn" data-overlay-close>${iconSVG('close')}</button>
      </div>
      <div class="overlay-body" data-overlay-body></div>
    </section>
  </div>`;
}

function mountChrome(){
  document.body.insertAdjacentHTML('beforeend', menuHTML()+overlayHTML());
  const mBtn=document.querySelector('[data-menu-button]');
  if(mBtn)mBtn.innerHTML=iconSVG('menu');
  const hBtn=document.querySelector('[data-home-button]');
  if(hBtn)hBtn.innerHTML=iconSVG('home');
  bindChrome();
}
function bindChrome(){
  document.querySelectorAll('[data-menu-button]').forEach(el=>el.onclick=()=>document.body.classList.add('menu-open'));
  document.querySelectorAll('[data-menu-close]').forEach(el=>el.onclick=()=>document.body.classList.remove('menu-open'));
  document.querySelectorAll('[data-overlay-close]').forEach(el=>el.onclick=closeOverlay);
}
function openOverlay(title, sub, bodyHTML){
  document.querySelector('[data-overlay-title]').textContent=title;
  document.querySelector('[data-overlay-sub]').textContent=sub||'';
  document.querySelector('[data-overlay-body]').innerHTML=bodyHTML;
  document.querySelector('[data-overlay]').classList.add('active');
}
function closeOverlay(){ document.querySelector('[data-overlay]')?.classList.remove('active'); }

async function loadArticles(){
  try{
    const res=await fetch('data/articles.json');
    if(!res.ok) throw new Error('fetch');
    return await res.json();
  } catch(e){ return []; }
}

function renderHome(){
  document.querySelector('[data-main]').innerHTML=`
    <section class="hero-card">
      <span class="hero-kicker">OST 1020</span>
      <h1>Wissenssammlung</h1>
      <div class="lead">Kompaktes Nachschlagewerk für Ausbildung und Einsatz – mobil optimiert und im Stil von VitaSim.</div>
    </section>
    <section class="tile-grid">
      <a class="home-tile lit" href="literatur.html"><div class="tile-icon">📚</div><div class="tile-title">Literatursammlung</div></a>
      <a class="home-tile abcde" href="abcde.html"><div class="tile-icon">A→E</div><div class="tile-title">ABCDE-Schema</div></a>
      <a class="home-tile diff" href="differential.html"><div class="tile-icon">🔎</div><div class="tile-title">Differentialdiagnostik</div></a>
      <a class="home-tile skill" href="skilltraining.html"><div class="tile-icon">✓</div><div class="tile-title">Skilltraining</div></a>
    </section>
    <div class="info-banner">Einheitliche mobile Oberfläche, klare Overlays und PIN-geschützte Redaktion.</div>`;
}

async function renderLiterature(){
  const articles=await loadArticles();
  const groups=topicGroups().map(g=>({
    ...g,
    items: articles.filter(a => (a.topics||[]).some(t => g.tags.includes(t)))
  })).filter(g=>g.items.length);
  document.querySelector('[data-main]').innerHTML=`
    <section class="page-card">
      <div class="section-header"><div><h2>Themen</h2><p>Tippe auf ein Thema, um die zugehörigen Artikel zu öffnen.</p></div></div>
      <div class="topics-grid">
        ${groups.map(g=>`<button class="topic-tile" data-topic="${g.id}"><div class="row"><div class="tile-badge ${g.color}">${g.icon}</div><div class="topic-name">${esc(g.title)}</div></div><div class="tile-meta">${g.items.length} Artikel</div></button>`).join('')}
      </div>
    </section>`;
  groups.forEach(g=>{
    const el=document.querySelector(`[data-topic="${g.id}"]`);
    if(el) el.onclick=()=>{
      openOverlay(g.title, `${g.items.length} Artikel`, g.items.map(a=>articleHTML(a)).join(''));
    };
  });
}
function articleHTML(a){
  const url = a.freeUrl || a.publisherUrl || '#';
  return `<article class="article-card overlay-card"><h4>${esc(a.title)}</h4><div class="article-meta">${esc((a.authors||[]).join(', '))} · ${esc(a.journal||'')} ${a.year?('· '+a.year):''}</div>${a.why?`<div>${esc(a.why)}</div>`:''}<div class="article-tags">${(a.topics||[]).slice(0,5).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>${url && url!=='#'?`<div style="margin-top:12px"><a class="small-btn" target="_blank" rel="noopener" href="${esc(url)}">Artikel öffnen</a></div>`:''}</article>`;
}

function renderABCDE(){
  document.querySelector('[data-main]').innerHTML=`<section class="page-card"><div class="section-header"><div><h2>ABCDE-Schema</h2><p>Strukturierte Beurteilung mit klarer mobiler Übersicht.</p></div></div><div class="page-stack">${content.abcde.map((item,idx)=>`
      <button class="abc-card" data-abc="${item.id}"><div class="abc-head"><div class="abc-letter ${idx%2? 'b-purple':'b-blue'}">${esc(item.icon)}</div><div><div class="abc-title">${esc(item.title)}</div><div class="abc-sub">${esc(item.subtitle)}</div></div></div><div class="abc-tags">${item.checks.slice(0,3).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></button>`).join('')}</div></section>`;
  content.abcde.forEach(item=>{
    document.querySelector(`[data-abc="${item.id}"]`).onclick=()=>openOverlay(item.title,item.subtitle,
      `<div class="overlay-card"><h4>Beurteilung</h4><ul class="overlay-list">${item.checks.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Maßnahmen</h4><ul class="overlay-list">${item.actions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Häufige Fehler</h4><ul class="overlay-list">${item.pitfalls.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`);
  });
}

function renderDifferential(){
  document.querySelector('[data-main]').innerHTML=`<section class="page-card"><div class="section-header"><div><h2>Leitsymptome</h2><p>Leitsymptom antippen und Übersicht im Overlay öffnen.</p></div></div><div class="symptom-grid">${content.differential.map((item,i)=>`<button class="list-tile" data-sym="${item.id}"><div class="row"><div class="tile-badge ${i%3===0?'b-teal':i%3===1?'b-purple':'b-blue'}">${item.icon}</div><div class="list-title">${esc(item.title)}</div></div><div class="list-meta">Ursachen · Fragen · Red Flags</div></button>`).join('')}</div></section>`;
  content.differential.forEach(item=>{
    document.querySelector(`[data-sym="${item.id}"]`).onclick=()=>openOverlay(item.title,'Differentialdiagnostische Übersicht',
      `<div class="overlay-card"><h4>Mögliche Ursachen</h4><ul class="overlay-list">${item.causes.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Wichtige Fragen</h4><ul class="overlay-list">${item.questions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Red Flags</h4><ul class="overlay-list">${item.redflags.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`);
  });
}

function renderSkills(){
  document.querySelector('[data-main]').innerHTML=`<section class="page-card"><div class="section-header"><div><h2>Skilltraining</h2><p>Kompakte Skill-Kacheln – mobil optimiert und an VitaSim angelehnt.</p></div></div><div class="skill-grid">${content.skills.map((item,i)=>`<button class="skill-tile" data-skill="${esc(item.name)}"><div class="row"><div class="tile-badge ${i%4===0?'b-blue':i%4===1?'b-teal':i%4===2?'b-green':'b-purple'}">${esc(item.group)}</div><div class="skill-name">${esc(item.name)}</div></div><div class="skill-meta">Skill öffnen</div></button>`).join('')}</div></section>`;
  content.skills.forEach((item)=>{
    const d=content.skillDetails[item.name] || {indikation:['Indikation lokal ergänzen.'],material:['Material lokal ergänzen.'],ablauf:['Ablauf lokal ergänzen.']};
    document.querySelector(`[data-skill="${CSS.escape(item.name)}"]`).onclick=()=>openOverlay(item.name,`Bereich ${item.group}`,
      `<div class="overlay-card"><h4>Indikation</h4><ul class="overlay-list">${d.indikation.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Material</h4><ul class="overlay-list">${d.material.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>
       <div class="overlay-card"><h4>Ablauf</h4><ul class="overlay-list">${d.ablauf.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`);
  });
}

function renderEditor(){
  const unlocked=sessionStorage.getItem(PIN_KEY)==='1';
  const wrap=document.querySelector('[data-main]');
  if(!unlocked){
    wrap.innerHTML=`<section class="pin-card"><div style="display:flex;align-items:center;gap:10px">${iconSVG('lock')}<h2>Redaktion entsperren</h2></div><p>Die Bearbeitung ist PIN-geschützt. Inhalte werden lokal im Browser gespeichert.</p><div class="pin-row"><input class="pin-input" type="password" inputmode="numeric" placeholder="PIN" data-pin><button class="primary-btn" data-unlock>Entsperren</button></div><div style="margin-top:12px;color:#b42318" data-pin-error></div></section>`;
    wrap.querySelector('[data-unlock]').onclick=()=>{
      const pin=wrap.querySelector('[data-pin]').value.trim();
      if(pin===EDITOR_PIN){ sessionStorage.setItem(PIN_KEY,'1'); renderEditor(); } else { wrap.querySelector('[data-pin-error]').textContent='PIN nicht korrekt.'; }
    };
    return;
  }
  wrap.innerHTML=`
    <section class="editor-section"><div class="editor-top"><div><h2 style="margin:0;color:var(--navy)">Redaktion</h2><div style="color:var(--muted)">Checklisten und Inhalte lokal bearbeiten.</div></div><div class="row-actions"><button class="ghost-btn" data-lock-editor>PIN-Schutz aktiv</button><button class="small-btn" data-reset>Zurücksetzen</button></div></div>
      <div class="editor-grid">
        <details class="collapsible"><summary>ABCDE-Schema <span>▾</span></summary><div class="collapsible-body"><textarea data-edit-abcde>${esc(JSON.stringify(content.abcde,null,2))}</textarea></div></details>
        <details class="collapsible"><summary>Differentialdiagnostik <span>▾</span></summary><div class="collapsible-body"><textarea data-edit-diff>${esc(JSON.stringify(content.differential,null,2))}</textarea></div></details>
        <details class="collapsible"><summary>Skilltraining <span>▾</span></summary><div class="collapsible-body"><textarea data-edit-skills>${esc(JSON.stringify(content.skills,null,2))}</textarea></div></details>
        <details class="collapsible"><summary>Skill-Details <span>▾</span></summary><div class="collapsible-body"><textarea data-edit-skilldetails>${esc(JSON.stringify(content.skillDetails,null,2))}</textarea></div></details>
        <div class="row-actions"><button class="primary-btn" data-save-editor>Speichern</button><button class="ghost-btn" data-export-editor>Export JSON</button><label class="small-btn" style="display:inline-flex;align-items:center">Import JSON<input type="file" accept="application/json" data-import-editor class="hidden"></label></div>
        <div data-editor-msg style="color:var(--muted)"></div>
      </div>
    </section>`;
  wrap.querySelector('[data-lock-editor]').onclick=()=>{sessionStorage.removeItem(PIN_KEY); renderEditor();};
  wrap.querySelector('[data-reset]').onclick=()=>{ if(confirm('Lokale Änderungen zurücksetzen?')){ localStorage.removeItem(STORAGE_KEY); location.reload(); } };
  wrap.querySelector('[data-save-editor]').onclick=()=>{
    try{
      const next={
        abcde: JSON.parse(wrap.querySelector('[data-edit-abcde]').value),
        differential: JSON.parse(wrap.querySelector('[data-edit-diff]').value),
        skills: JSON.parse(wrap.querySelector('[data-edit-skills]').value),
        skillDetails: JSON.parse(wrap.querySelector('[data-edit-skilldetails]').value)
      };
      saveContent(next);
      wrap.querySelector('[data-editor-msg]').textContent='Änderungen gespeichert.';
    }catch(e){ wrap.querySelector('[data-editor-msg]').textContent='Fehler im JSON: '+e.message; }
  };
  wrap.querySelector('[data-export-editor]').onclick=()=>{
    const blob=new Blob([localStorage.getItem(STORAGE_KEY) || JSON.stringify(content,null,2)],{type:'application/json'});
    const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download='ost1020-wissenssammlung.json'; a.click(); URL.revokeObjectURL(a.href);
  };
  wrap.querySelector('[data-import-editor]').addEventListener('change',ev=>{
    const file=ev.target.files[0]; if(!file) return;
    const fr=new FileReader();
    fr.onload=()=>{ try{ const parsed=JSON.parse(fr.result); saveContent(parsed); location.reload(); }catch(e){ wrap.querySelector('[data-editor-msg]').textContent='Import fehlgeschlagen.'; } };
    fr.readAsText(file);
  });
}

function init(){
  mountChrome();
  switch(page){
    case 'home': return renderHome();
    case 'literature': return renderLiterature();
    case 'abcde': return renderABCDE();
    case 'differential': return renderDifferential();
    case 'skilltraining': return renderSkills();
    case 'editor': return renderEditor();
  }
}
window.addEventListener('DOMContentLoaded',init);
})();
