(()=>{
const page=document.body.dataset.page||'home',API=(window.WISSEN_API_URL||'').replace(/\/$/,''),LS='ost1020-v342-',D=window.OST1020_DATA||{};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],esc=s=>String(s??'').replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
const clone=v=>JSON.parse(JSON.stringify(v??[])),arr=v=>Array.isArray(v)?v:String(v||'').split(/\n|;/).map(s=>s.trim()).filter(Boolean);
const svg={
 menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
 home:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/></svg>`,
 back:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/><path d="M9 12h10"/></svg>`,
 books:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M13 17.5c6.8-2.9 13-2.4 19 1.4v29.4c-6-3.8-12.2-4.3-19-1.4V17.5Z" stroke="#c92a32" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M51 17.5c-6.8-2.9-13-2.4-19 1.4v29.4c6-3.8 12.2-4.3 19-1.4V17.5Z" stroke="#c92a32" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M20 25h7M20 31h7M37 25h7M37 31h7" stroke="#e05d64" stroke-width="2.4" stroke-linecap="round"/>
<path d="M32 18.9v29.4" stroke="#c92a32" stroke-width="3.4" stroke-linecap="round"/>
<path d="M42 35v10l3-2.2 3 2.2V35" fill="#c92a32"/>
</svg>`,
 abcde:`<svg viewBox="0 0 64 64" aria-hidden="true">
<rect x="9" y="10" width="42" height="7" rx="3.5" fill="#3b82f6"/><text x="13" y="16" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">A</text>
<rect x="9" y="19" width="37" height="7" rx="3.5" fill="#ef4444"/><text x="13" y="25" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">B</text>
<rect x="9" y="28" width="33" height="7" rx="3.5" fill="#f59e0b"/><text x="13" y="34" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">C</text>
<rect x="9" y="37" width="29" height="7" rx="3.5" fill="#10b981"/><text x="13" y="43" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">D</text>
<rect x="9" y="46" width="25" height="7" rx="3.5" fill="#8b5cf6"/><text x="13" y="52" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">E</text>
<path d="M51 23v27M45.5 29c2.5-3 8.5-3 11 0M46 44c3 2.4 7 2.4 10 0" fill="none" stroke="#3979c9" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
 diag:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<circle cx="27" cy="27" r="13" stroke="#c92a32" stroke-width="4"/>
<path d="m37 37 12 12" stroke="#c92a32" stroke-width="4.8" stroke-linecap="round"/>
</svg>`,
 skill:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M42.7 12.2a15 15 0 0 0-17.4 18.9L12.2 44.2a5.4 5.4 0 0 0 7.6 7.6l13.1-13.1a15 15 0 0 0 18.9-17.4l-8.7 8.7-8.1-1.8-1.8-8.1 9.5-7.9Z" fill="#3b82f6"/>
<circle cx="17.1" cy="46.9" r="2.2" fill="#fff"/>
</svg>`,
 alg:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M18 13.5h18l10 10v27H18c-3.3 0-6-2.7-6-6v-25c0-3.3 2.7-6 6-6Z" stroke="#2f80ed" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M36 13.5v10h10" stroke="#2f80ed" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M22 27h18M22 35h14M22 43h10" stroke="#6aa8f4" stroke-width="3.2" stroke-linecap="round"/>
<path d="m41.5 40.5 4 4 7-8" stroke="#20b77a" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
 sim:`<svg viewBox="0 0 64 64" fill="none"><rect x="7" y="10" width="50" height="34" rx="9" fill="#29455f"/><path d="M12 29h8l5-10 7 18 6-13 5 5h8" stroke="#43d3c6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="25" cy="49" r="9" fill="#2f80ed"/><path d="m22 44 7 5-7 5z" fill="#fff"/></svg>`,
 calendar:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<rect x="12" y="15" width="40" height="34" rx="9" stroke="#7b55df" stroke-width="3.4"/>
<path d="M12 25.5h40M22 10v10M42 10v10" stroke="#7b55df" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="24" cy="34.5" r="2.2" fill="#b390ff"/><circle cx="32" cy="34.5" r="2.2" fill="#b390ff"/><circle cx="40" cy="34.5" r="2.2" fill="#b390ff"/>
</svg>`,
 change:`<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<rect x="16" y="10" width="32" height="44" rx="8" stroke="#c257c8" stroke-width="3.4"/>
<path d="M23 22h18M23 30h14M23 38h18" stroke="#c257c8" stroke-width="3.2" stroke-linecap="round"/>
<path d="M36 16h6" stroke="#de8be1" stroke-width="3.2" stroke-linecap="round"/>
</svg>`};
function icon(name){return svg[name]||svg.books}
function chrome(){
 const bb=$('[data-back-btn]'),hb=$('[data-home-btn]');
 if(bb){bb.innerHTML=svg.back;bb.onclick=()=>{if(history.length>1)history.back();else location.href='index.html'}}
 if(hb)hb.innerHTML=svg.home;
 document.body.insertAdjacentHTML('beforeend',`<div class="overlay"><div class="shade" data-overlay-close></div><section class="overlay-panel" role="dialog" aria-modal="true"><div class="overlay-head"><h2 data-overlay-title></h2><button class="close" data-overlay-close>✕</button></div><div class="overlay-body" data-overlay-body></div></section></div>`);
 $$('[data-overlay-close]').forEach(x=>x.onclick=()=>$('.overlay').classList.remove('show'));
 const footer=document.createElement('div');footer.className='global-editor-footer';footer.innerHTML='<a href="editor.html">✏️ Redaktion</a>';document.body.appendChild(footer);
}
function open(title,html){
 $('[data-overlay-title]').textContent=title;
 $('[data-overlay-body]').innerHTML=html;
 $('.overlay').classList.add('show');
}
async function get(name){if(API){try{const r=await fetch(`${API}/content/${name}`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}try{const l=localStorage.getItem(LS+name);if(l)return JSON.parse(l)}catch(e){}return clone(D[name]||[])}
async function articles(){if(API){try{const r=await fetch(`${API}/articles`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}return clone(D.articles||[])}
async function save(name,data){
 localStorage.setItem(LS+name,JSON.stringify(data));
 if(API){try{const pin=sessionStorage.getItem('ost1020-editor-pin')||'';const url=`${API}/content/${name}`;const r=await fetch(url,{method:'PUT',headers:{'Content-Type':'application/json','X-Admin-Pin':pin},body:JSON.stringify(data)});if(r.status===401){sessionStorage.removeItem('ost1020-editor-pin');throw new Error('PIN abgelaufen oder ungültig')}return r.ok}catch(e){}}
 return false
}

function coreCard(href,ico,title,sub){return `<a class="core-card" href="${href}"><div class="core-visual">${ico}</div><div class="core-card-copy"><h3>${title}</h3></div></a>`}
function newsHtml(n,i=''){const map={Lehrmeinung:'🔄',Leitlinie:'📋',Ausbildung:'🎓',Termin:'📅',Simulationstraining:'🖥️',Organisation:'📣',Literatur:'📚'};const c=n.category||'Organisation';return `<button class="news-item" data-news="${i}"><span class="news-icon">${map[c]||'📣'}</span><div><span class="cat-pill">${esc(c)}</span><h3>${esc(n.title)}</h3><div class="news-meta">${esc(n.date||'')}</div></div><span class="arrow">›</span></button>`}
const RECENT_KEY='ost1020-recent-pages',FAV_KEY='ost1020-favorites';
function rememberPage(){if(page==='home'||page==='editor')return;const labels={news:'Aktuelles',literature:'Literatursammlung',abcde:'ABCDE-Schema',differential:'Differentialdiagnostik',skills:'Skilltraining',algorithms:'Algorithmen & Leitlinien',changes:'Lehrmeinungsänderungen',events:'Termine',guide:'Simulationstraining',materials:'Materialien'};const href=location.pathname.split('/').pop()||'index.html';let r=[];try{r=JSON.parse(localStorage.getItem(RECENT_KEY)||'[]')}catch(e){}r=[{page,label:labels[page]||document.title,href},...r.filter(x=>x.page!==page)].slice(0,4);localStorage.setItem(RECENT_KEY,JSON.stringify(r))}
function favorites(){try{return JSON.parse(localStorage.getItem(FAV_KEY)||'[]')}catch(e){return[]}}
function toggleFavorite(href){let f=favorites();f=f.includes(href)?f.filter(x=>x!==href):[...f,href];localStorage.setItem(FAV_KEY,JSON.stringify(f));return f.includes(href)}

async function home(){
 const [news,events,arts,ab,diff,skillsData,algs,changes]=await Promise.all([get('news'),get('events'),articles(),get('abcde'),get('differential'),get('skills'),get('algorithms'),get('changes')]);
 const now=new Date(),today=now.toISOString().slice(0,10),active=(news||[]).filter(x=>x.active!==false).slice(0,3);
 const upcoming=(events||[]).filter(x=>x.date>=today).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)).slice(0,3);
 const monday=new Date(now);monday.setHours(12,0,0,0);monday.setDate(now.getDate()-((now.getDay()+6)%7));
 const week=Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.toISOString().slice(0,10),hits=(events||[]).filter(e=>e.date===key);return {d,key,hits}});
 const weekHtml=week.map(({d,key,hits})=>`<a class="week-day ${key===today?'today':''} ${hits.length?'has-event':''}" href="termine.html"><span>${d.toLocaleDateString('de-DE',{weekday:'short'}).replace('.','')}</span><strong>${d.getDate()}</strong>${hits.length?`<em>${hits.length}</em>`:''}</a>`).join('');
 const eventHtml=upcoming.map(e=>{const count=arr(e.attendees).length,cap=Number(e.capacity)||10;return `<a class="week-event" href="termine.html"><span class="week-event-date">${new Date(e.date+'T12:00:00').toLocaleDateString('de-DE',{day:'2-digit',month:'short'})}</span><span class="week-event-copy"><strong>${esc(e.title)}</strong><small>${esc(e.time||'')} · ${esc(e.location||'')}</small></span><span class="week-event-count">👥 ${count}/${cap}</span></a>`}).join('')||'<div class="empty compact">Keine Termine in nächster Zeit.</div>';
 const recent=(()=>{try{return JSON.parse(localStorage.getItem(RECENT_KEY)||'[]')}catch(e){return[]}})();
 const index=[...(arts||[]).map(x=>({label:x.title,sub:'Literatur',href:'literatur.html'})),...(ab||[]).map(x=>({label:`${x.key} – ${x.title}`,sub:'ABCDE',href:'abcde.html'})),...(diff||[]).map(x=>({label:x.title,sub:'Differentialdiagnostik',href:'differential.html'})),...(skillsData||[]).flatMap(g=>g.skills.map(s=>({label:s.name,sub:g.name,href:'skilltraining.html'}))),...(algs||[]).map(x=>({label:x.title,sub:'Algorithmus',href:'algorithmen.html'})),...(changes||[]).map(x=>({label:x.title,sub:'Lehrmeinung',href:'lehrmeinung.html'}))];
 $('[data-main]').innerHTML=`<section class="dashboard-hero compact-hero"><div class="hero-kicker">OST 1020</div><h1>Wissenssammlung 1020</h1></section>
 <section class="dashboard-search"><div class="global-search"><span>⌕</span><input data-global-search placeholder="Wissen, Skills, Literatur …"><button data-search-clear aria-label="Suche löschen">✕</button></div><div class="search-results hidden" data-search-results></div></section>
 <section class="section section-first"><div class="section-head"><h2>Aktuelles</h2><a href="aktuelles.html">Alle anzeigen</a></div><div class="news-list dashboard-news">${active.map((n,i)=>newsHtml(n,i)).join('')||'<div class="empty">Keine Meldungen</div>'}</div></section>
 <section class="section"><div class="section-head"><h2>Menü</h2></div><div class="core-grid">${coreCard('literatur.html',svg.books,'Literatursammlung','Lehrbücher, Artikel und Leitlinien')}${coreCard('abcde.html',svg.abcde,'ABCDE-Schema','Systematisch beurteilen und handeln')}${coreCard('differential.html',svg.diag,'Differentialdiagnostik','Symptome einordnen und abgrenzen')}${coreCard('skilltraining.html',svg.skill,'Skilltraining','Praktische Fertigkeiten Schritt für Schritt')}${coreCard('algorithmen.html',svg.alg,'Algorithmen & Leitlinien','Handlungssicherheit in jeder Situation')}${coreCard('simulation.html',svg.sim,'Simulationstraining','Szenarien, Funktionen und Tipps')}${coreCard('termine.html',svg.calendar,'Termine','Übungen und Fortbildungen')}${coreCard('lehrmeinung.html',svg.change,'Lehrmeinungsänderungen','Neue Empfehlungen kompakt')}</div></section>
 <section class="section"><div class="section-head"><h2>Diese Woche</h2><a href="termine.html">Kalender öffnen</a></div><div class="week-card"><div class="week-strip">${weekHtml}</div><div class="week-events">${eventHtml}</div></div></section>
 ${recent.length?`<section class="section recent-section"><div class="section-head"><h2>Zuletzt angesehen</h2></div><div class="recent-list">${recent.map(r=>`<a href="${esc(r.href)}"><span>↗</span><strong>${esc(r.label)}</strong></a>`).join('')}</div></section>`:''}`;
 const q=$('[data-global-search]'),results=$('[data-search-results]');
 const drawSearch=()=>{const term=q.value.trim().toLowerCase();if(!term){results.classList.add('hidden');results.innerHTML='';return}const hits=index.filter(x=>(x.label+' '+x.sub).toLowerCase().includes(term)).slice(0,8);results.innerHTML=hits.map(x=>`<a href="${x.href}"><span><strong>${esc(x.label)}</strong><small>${esc(x.sub)}</small></span><b>›</b></a>`).join('')||'<div class="empty compact">Keine Treffer.</div>';results.classList.remove('hidden')};q.oninput=drawSearch;$('[data-search-clear]').onclick=()=>{q.value='';drawSearch();q.focus()};
 $('[data-main]').addEventListener('click',e=>{const n=e.target.closest('[data-news]');if(n){const x=active[+n.dataset.news];if(x)open(x.title,`<section class="overlay-section news-detail"><span class="cat-pill">${esc(x.category||'Organisation')}</span><div class="news-meta">${esc(x.date||'')}</div><p>${esc(x.text||'')}</p></section>`);}});
}
async function newsPage(){
 const d=await get('news');
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Aktuelles</h1><div class="toolbar"><div class="filter-chips"><button class="filter-chip active" data-cat="all">Alle</button>${[...new Set(d.map(x=>x.category||'Organisation'))].map(c=>`<button class="filter-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div></div></section><div class="news-list" data-list></div>`;
 let shown=d;
 const draw=cat=>{shown=d.filter(x=>cat==='all'||(x.category||'Organisation')===cat);$('[data-list]').innerHTML=shown.map((n,i)=>newsHtml(n,i)).join('')||'<div class="empty">Keine Meldungen</div>'};
 $('[data-main]').onclick=e=>{const c=e.target.closest('[data-cat]');if(c){$$('[data-cat]').forEach(x=>x.classList.toggle('active',x===c));draw(c.dataset.cat);return}const n=e.target.closest('[data-news]');if(n){const x=shown[+n.dataset.news];open(x.title,`<section class="overlay-section news-detail"><span class="cat-pill">${esc(x.category||'Organisation')}</span><div class="news-meta">${esc(x.date||'')}</div><p>${esc(x.text||'Noch keine Beschreibung hinterlegt.')}</p>${x.link?`<a class="btn primary" href="${esc(x.link)}">Weiterlesen</a>`:''}</section>`)}};
 draw('all')
}
async function literature(){
 const arts=await articles();
 const defs=[['Reanimation','❤️',['Reanimation','Kreislaufstillstand']],['Simulation & Debriefing','👥',['Simulation','Debriefing','Ausbildung']],['CRM & Human Factors','🧑‍🤝‍🧑',['CRM','Human Factors','Entscheidungsfindung']],['Neurologie / Schlaganfall','🧠',['Neurologie','Schlaganfall']],['Qualität & Sicherheit','🛡️',['Qualität','Patientensicherheit','System']],['Critical Care','🫁',['Critical Care','Diagnostik']],['Pharmakologie & Schmerz','💊',['Pharmakologie','Schmerz']],['HEMS & Präklinik','🚁',['HEMS','Versorgung','Österreich']]];
 const now=new Date();const fresh=a=>{const raw=a.added||a.activeSince||'';if(!raw)return false;const d=new Date(raw+'T12:00:00');return !Number.isNaN(d.getTime())&&((now-d)/86400000)<=30&&((now-d)/86400000)>=0};
 const freshItems=arts.filter(fresh);
 const groups=[{id:'new',title:'Neuerscheinungen',icon:'✨',items:freshItems,new:true},...defs.map((x,i)=>({id:'g'+i,title:x[0],icon:x[1],items:arts.filter(a=>arr(a.topics).some(t=>x[2].includes(t)))}))].filter(g=>g.items.length);
 $('[data-main]').innerHTML=`<section class="page-banner lit-banner"><div class="page-banner-row"><h1>Literatursammlung</h1><a class="editor-shortcut" href="editor.html#literatur">✏️ Redaktion</a></div><div class="toolbar"><div class="searchbar"><input data-q placeholder="Literatur suchen …"><select data-f><option value="all">Alle Kategorien</option>${groups.map(g=>`<option value="${g.id}">${esc(g.title)}</option>`).join('')}</select></div><div class="filter-chips"><button class="filter-chip active" data-chip="all">Alle</button>${groups.map(g=>`<button class="filter-chip" data-chip="${g.id}">${g.icon} ${esc(g.title)}</button>`).join('')}</div></div></section><section class="lit-list" data-list></section>`;
 function article(a){const link=a.freeUrl||a.publisherUrl||'';const auth=Array.isArray(a.authors)?a.authors.join(', '):String(a.authors||'');return `<article class="lit-article-card"><div class="doc-icon">📄</div><div class="lit-article-copy"><h4>${esc(a.title)}</h4><p>${esc(auth)}${a.journal?` · ${esc(a.journal)}`:''}${a.year?` · ${esc(a.year)}`:''}</p><div class="lit-meta"><span class="meta-chip">${esc(a.type||'Artikel')}</span>${a.level?`<span class="meta-chip">${esc(String(a.level).toUpperCase())}</span>`:''}${a.access?`<span class="meta-chip">${esc(a.access==='oa'?'Open Access':a.access==='free'?'Freie Version':'Paywall')}</span>`:''}</div></div>${link?`<a class="lit-link-arrow" href="${esc(link)}" target="_blank" rel="noopener" aria-label="Artikel öffnen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg></a>`:''}</article>`}
 function draw(){const q=$('[data-q]').value.toLowerCase().trim(),fid=$('[data-f]').value;const list=groups.filter(g=>fid==='all'||g.id===fid).map(g=>{const items=g.items.filter(a=>!q||[a.title,Array.isArray(a.authors)?a.authors.join(' '):a.authors,a.journal,arr(a.topics).join(' ')].join(' ').toLowerCase().includes(q));if(!items.length)return'';return `<article class="lit-topic" data-group="${g.id}"><button class="lit-topic-head" data-toggle="${g.id}"><span class="lit-topic-icon">${g.icon}</span><span><h3>${esc(g.title)}</h3><p>${items.length} Artikel${g.new?' · letzte 30 Tage':''}</p></span><span class="lit-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7 5 5-5 5"/></svg></span></button><div class="lit-articles hidden">${items.map(article).join('')}</div></article>`}).join('');$('[data-list]').innerHTML=list||'<div class="empty">Keine Treffer</div>'}
 $('[data-q]').oninput=draw;$('[data-f]').onchange=draw;$('[data-main]').onclick=e=>{const c=e.target.closest('[data-chip]');if(c){$$('[data-chip]').forEach(x=>x.classList.toggle('active',x===c));$('[data-f]').value=c.dataset.chip;draw();return}const t=e.target.closest('[data-toggle]');if(t){const box=t.closest('.lit-topic'),body=$('.lit-articles',box);box.classList.toggle('expanded');body.classList.toggle('hidden')}};draw()
}
async function abcdePage(){
 const d=await get('abcde'),labels={A:'Airway',B:'Breathing',C:'Circulation',D:'Disability',E:'Exposure'},sub={A:'Atemweg',B:'Atmung',C:'Kreislauf',D:'Neurologie',E:'Umgebung'},vis={A:'🫁',B:'🫁',C:'❤️',D:'🧠',E:'🌡️'};let current=0;
 $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>ABCDE-Schema</h1></section><section class="abcde-wrap"><div class="abcde-tabs" data-tabs></div><div class="abcde-main simplified" data-detail></div></section>`;
 function block(title,ico,items,klass=''){return `<section class="abcde-block ${klass}"><div class="abcde-block-head"><span>${ico}</span><strong>${title}</strong></div><ul>${arr(items).map(it=>`<li>${esc(it)}</li>`).join('')}</ul></section>`}
 function render(){const x=d[current];$('[data-tabs]').innerHTML=d.map((a,i)=>`<button class="abcde-tab ${a.key.toLowerCase()} ${i===current?'active':''}" data-abc="${i}"><strong>${esc(a.key)}</strong><span>${esc(labels[a.key]||a.title)}</span></button>`).join('');$('[data-detail]').innerHTML=`<div class="abcde-head"><span class="abcde-letter ${esc((x.key||'').toLowerCase())}">${esc(x.key)}</span><span><h2>${esc(x.key)} – ${esc(labels[x.key]||x.title)}</h2><p>${esc(sub[x.key]||x.title)}</p></span><span class="abcde-visual">${vis[x.key]||'🩺'}</span></div><div class="abcde-direct">${block('Beurteilung','🔎',x.checks)}${block('Maßnahmen','⚙️',x.actions)}${block('Warnzeichen','⚠️',x.pitfalls,'warning')}</div>`}
 $('[data-main]').onclick=e=>{const a=e.target.closest('[data-abc]');if(a){current=+a.dataset.abc;render()}};render()
}
async function differentialPage(){
 const d=await get('differential'),emo={lungs:'🫁',heart:'❤️',brain:'🧠',bolt:'⚡',abdomen:'🩺',syringe:'💉',clock:'🕒',bandage:'🩹',stethoscope:'🩺',search:'🔎'};
 const params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 const causes=x?arr(x.causes).map(c=>typeof c==='string'?{name:c,info:`${c} ist eine mögliche Differentialdiagnose bei ${x.title}.`}:c):[];
 if(x){
   $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page"><div class="detail-lead"><span class="detail-big-icon">${emo[x.icon]||x.icon||'🩺'}</span><div><h2>${esc(x.title)}</h2></div></div><section class="detail-section"><h3>Wichtige Fragen</h3><ul>${arr(x.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="detail-section warning"><h3>Red Flags</h3><ul>${arr(x.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="detail-section"><h3>Mögliche Krankheitsbilder</h3><div class="disease-list">${causes.map((v,i)=>`<button class="disease-card" data-disease="${i}"><span>🩺</span><strong>${esc(v.name)}</strong><b>›</b></button>`).join('')}</div></section></section>`;
   $('[data-main]').onclick=e=>{const b=e.target.closest('[data-disease]');if(!b)return;const disease=causes[+b.dataset.disease];open(disease.name,`<section class="overlay-section"><h3>Kurzinfo</h3><p>${esc(disease.info||'Keine Kurzinfo hinterlegt.')}</p></section>`) };
   return;
 }
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Differentialdiagnostik</h1></section><div class="list">${d.map(x=>`<a class="row-card" href="differential.html?id=${encodeURIComponent(x.id)}"><span class="row-icon">${emo[x.icon]||x.icon||'🩺'}</span><span><strong>${esc(x.title)}</strong><small>${arr(x.causes).length} mögliche Krankheitsbilder</small></span><span class="arrow">›</span></a>`).join('')}</div>`;
}

async function simpleCards(name,title,mode){
 const d=await get(name);const emo={lungs:'🫁',heart:'❤️',brain:'🧠',bolt:'⚡',abdomen:'🩺',syringe:'💉',clock:'🕒',bandage:'🩹',stethoscope:'🩺',search:'🔎'};
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>${title}</h1></section><div class="list">${d.map((x,i)=>`<button class="row-card" data-i="${i}"><span class="row-icon">${mode==='diff'?(emo[x.icon]||x.icon||'🩺'):esc(x.icon|| (mode==='change'?'🔄':mode==='guide'?'🖥️':'📋'))}</span><span><strong>${esc(x.title||x.name)}</strong><small>${esc(x.category||x.stand||'')}</small></span><span class="arrow">›</span></button>`).join('')}</div>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-i]');if(!b)return;const x=d[+b.dataset.i];let html='';if(mode==='diff')html=`<section class="overlay-section"><h3>Mögliche Ursachen</h3>${arr(x.causes).map(v=>`<button class="overlay-row"><span class="oi">🔎</span><span><strong>${esc(v)}</strong></span><span class="arrow">›</span></button>`).join('')}</section><section class="overlay-section"><h3>Wichtige Fragen</h3><ul>${arr(x.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section warning"><h3>Red Flags</h3><ul>${arr(x.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else if(mode==='alg')html=`<section class="overlay-section"><h3>Ablauf</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='change')html=`<section class="overlay-section"><h3>Bisher</h3><div class="news-text">${esc(x.old||'')}</div></section><section class="overlay-section"><h3>Neu</h3><div class="news-text">${esc(x.new||'')}</div></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='guide')html=`<section class="overlay-section"><h3>Schritte</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else html=`<section class="overlay-section"><div class="news-text">${esc(x.note||x.description||'')}</div></section>`;open(x.title||x.name,html)}
}

async function algorithmsPage(){
 const d=await get('algorithms');
 const params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){
   const steps=arr(x.steps),flow=steps.map((st,i)=>`<div class="flow-node"><span>${i+1}</span><strong>${esc(st)}</strong></div>${i<steps.length-1?'<div class="flow-arrow">↓</div>':''}`).join('');
   const mat=x.materials||{background:[],checklists:[]};
   const materialTile=(key,ico,title,items)=>`<button class="algorithm-material-tile" data-material-kind="${key}"><span>${ico}</span><strong>${title}</strong><small>${arr(items).length} Datei${arr(items).length===1?'':'en'}</small></button>`;
   $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page algorithm-detail"><div class="detail-lead"><span class="detail-big-icon">${esc(x.icon||'📋')}</span><div><h2>${esc(x.title)}</h2><p>${esc(x.category||'')} · ${esc(x.stand||'')}</p></div></div><section class="flowchart standalone">${flow}</section><section class="guideline-box"><h3>Leitlinie / Quelle</h3><p>${esc(x.source||'Noch keine Quelleninformation hinterlegt.')}</p>${x.sourceUrl?`<a class="btn primary" href="${esc(x.sourceUrl)}" target="_blank" rel="noopener">Original öffnen ↗</a>`:''}</section><section class="detail-section"><h3>Materialien</h3><div class="algorithm-material-grid">${materialTile('background','📚','Hintergrundinfos',mat.background||[])}${materialTile('checklists','✅','Checklisten',mat.checklists||[])}</div></section></section>`;
   $('[data-main]').onclick=e=>{const b=e.target.closest('[data-material-kind]');if(!b)return;const key=b.dataset.materialKind,items=arr(mat[key]);const title=key==='background'?'Hintergrundinfos':'Checklisten';open(title,items.length?`<div class="material-list">${items.map(m=>`<a class="material-card" href="${esc(m.url||'#')}" ${m.url?'target="_blank" rel="noopener"':''}><span>${key==='background'?'📘':'📄'}</span><span><strong>${esc(m.title||'Datei')}</strong><small>${esc(m.note||'')}</small></span><b>›</b></a>`).join('')}</div>`:'<div class="empty">Noch keine Dateien hinterlegt.</div>')};
   return
 }
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Algorithmen & Leitlinien</h1></section><div class="list">${d.map(x=>`<a class="row-card" href="algorithmen.html?id=${encodeURIComponent(x.id)}"><span class="row-icon">${esc(x.icon||'📋')}</span><span><strong>${esc(x.title)}</strong><small>${esc(x.category||'')} · ${esc(x.stand||'')}</small></span><span class="arrow">›</span></a>`).join('')}</div>`;
}
async function skills(){
 const d=await get('skills');
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Skilltraining</h1></section><section class="skill-groups">${d.map((g,gi)=>`<div><div class="skill-group-head"><h2>${esc(g.name)}</h2><span>${g.skills.length} Skills</span></div><div class="skill-grid">${g.skills.map((sk,si)=>`<button class="skill-card" data-g="${gi}" data-s="${si}"><span class="skill-icon">${si%5===0?'🫁':si%5===1?'🩺':si%5===2?'❤️':si%5===3?'🧰':'🩹'}</span><span><strong>${esc(sk.name)}</strong><small>${(sk.sections||[]).length||1} Bereiche</small></span><span class="arrow">›</span></button>`).join('')}</div></div>`).join('')}</section>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-g][data-s]');if(!b)return;const sk=d[+b.dataset.g].skills[+b.dataset.s],sections=sk.sections||[{title:'Ablauf',items:arr(sk.items)}];open(sk.name,sections.map(sec=>`<section class="overlay-section skill-overlay-section"><h3>${esc(sec.title)}</h3><ul>${arr(sec.items).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`).join(''))}
}
async function changesPage(){
 const d=await get('changes'),params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){$('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page change-detail"><div class="change-meta"><span class="cat-pill">${esc(x.category||'Lehrmeinung')}</span><span>${esc(x.date||'')}</span></div>${x.imageUrl?`<img class="change-image" src="${esc(x.imageUrl)}" alt="${esc(x.title)}">`:''}<div class="before-after"><section class="compare-card old"><span>BISHER</span><h3>Alt</h3><p>${esc(x.old||'')}</p></section><section class="compare-card new"><span>NEU</span><h3>Neu</h3><p>${esc(x.new||'')}</p></section></div><section class="guideline-box"><h3>Quelle / Einordnung</h3><p>${esc(x.source||'')}</p></section></section>`;return}
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Lehrmeinungsänderungen</h1></section><div class="list">${d.map(x=>`<a class="row-card" href="lehrmeinung.html?id=${encodeURIComponent(x.id)}"><span class="row-icon">🔄</span><span><strong>${esc(x.title)}</strong><small>${esc(x.category||'')} · ${esc(x.date||'')}</small></span><span class="arrow">›</span></a>`).join('')}</div>`
}
async function guidePage(){
 const d=await get('guide');
 const flat=d.flatMap((x,i)=>arr(x.steps).map((st,j)=>({title:x.title,icon:x.icon||'🖥️',step:st,group:i,index:j}))),nodes=[];
 d.forEach((x,i)=>{nodes.push(`<div class="sim-flow-group"><div class="sim-flow-title"><span>${esc(x.icon||'🖥️')}</span><strong>${esc(x.title)}</strong></div>${arr(x.steps).map((st,j)=>`<div class="flow-node sim-node"><span>${j+1}</span><strong>${esc(st)}</strong></div>${j<arr(x.steps).length-1?'<div class="flow-arrow">↓</div>':''}`).join('')}</div>${i<d.length-1?'<div class="sim-group-arrow">↓</div>':''}`)});
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Simulationstraining</h1></section><section class="simulation-flow">${nodes.join('')}</section>`
}

function monthKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`}
function dayKey(y,m,d){return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`}
function attendeeEntries(value){return Array.isArray(value)?value.map(a=>typeof a==='string'?{clientId:a,name:'',registeredAt:''}:a).filter(a=>a&&a.clientId):[]}
function attendeeJoined(value,clientId){return attendeeEntries(value).some(a=>a.clientId===clientId)}
function exportAttendancePdf(ev){
 const people=attendeeEntries(ev.attendees),date=ev.date?new Date(ev.date+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}):'',time=ev.time||'',place=ev.location||'';
 const cp={196:196,214:214,220:220,228:228,246:246,252:252,223:223,8364:128,8211:150,8212:151,8216:145,8217:146,8220:147,8221:148};
 const pdfStr=value=>{let out='';for(const ch of String(value??'')){const c=ch.codePointAt(0);if(ch==='\\'||ch==='('||ch===')')out+='\\'+ch;else if(c>=32&&c<=126)out+=ch;else{const b=cp[c]??63;out+='\\'+b.toString(8).padStart(3,'0')}}return out};
 const wrap=(text,max=74)=>{const words=String(text||'').split(/\s+/).filter(Boolean),lines=[];let line='';for(const w of words){if(!line){line=w;continue}if((line+' '+w).length<=max)line+=' '+w;else{lines.push(line);line=w}}if(line)lines.push(line);return lines.length?lines:['']};
 const pages=[];let page=[],y=790;
 const text=(x,yy,size,value,bold=false)=>page.push(`BT /${bold?'F2':'F1'} ${size} Tf ${x} ${yy} Td (${pdfStr(value)}) Tj ET`);
 const rule=(yy)=>page.push(`0.79 0.16 0.20 RG 0.8 w 50 ${yy} m 545 ${yy} l S`);
 const header=(continuation=false)=>{text(50,790,19,continuation?'Teilnehmerliste - Fortsetzung':'Teilnehmerliste',true);text(50,762,15,ev.title||'Termin',true);text(50,742,10,`Datum: ${date}${time?'  |  Uhrzeit: '+time:''}`);text(50,727,10,`Ort: ${place||'-'}`);text(50,712,10,`Teilnehmende: ${people.length}${ev.capacity?' / '+ev.capacity:''}`);rule(698);y=675};
 const next=()=>{if(page.length)pages.push(page.join('\n'));page=[];header(pages.length>0)};
 header(false);
 if(!people.length){text(50,y,11,'Keine Teilnehmenden eingetragen.');}
 people.forEach((person,i)=>{const reg=person.registeredAt?new Date(person.registeredAt).toLocaleString('de-DE'):'';const name=person.name||'Ohne Namensangabe';const lines=wrap(`${i+1}. ${name}`,70);const needed=lines.length*15+(reg?13:0)+7;if(y-needed<55)next();lines.forEach((ln,li)=>{text(50+(li?18:0),y,11,ln,li===0);y-=15});if(reg){text(68,y,9,`Anmeldung: ${reg}`);y-=13}y-=7});
 if(page.length)pages.push(page.join('\n'));
 const objects={1:'<< /Type /Catalog /Pages 2 0 R >>',3:'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',4:'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'};
 const kids=[];pages.forEach((content,i)=>{const pid=5+i*2,cid=pid+1;kids.push(`${pid} 0 R`);objects[pid]=`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${cid} 0 R >>`;objects[cid]=`<< /Length ${content.length} >>\nstream\n${content}\nendstream`});objects[2]=`<< /Type /Pages /Kids [${kids.join(' ')}] /Count ${pages.length} >>`;
 const max=Math.max(...Object.keys(objects).map(Number));let out='%PDF-1.4\n',offsets=[0];for(let i=1;i<=max;i++){offsets[i]=out.length;out+=`${i} 0 obj\n${objects[i]}\nendobj\n`}const xref=out.length;out+=`xref\n0 ${max+1}\n0000000000 65535 f \n`;for(let i=1;i<=max;i++)out+=`${String(offsets[i]).padStart(10,'0')} 00000 n \n`;out+=`trailer\n<< /Size ${max+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
 const blob=new Blob([out],{type:'application/pdf'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`Teilnehmerliste-${String(ev.date||'Termin')}-${String(ev.title||'').replace(/[^a-zA-Z0-9äöüÄÖÜß]+/g,'-').replace(/^-|-$/g,'')||'Termin'}.pdf`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)
}
function askParticipantName(defaultName=''){
 return new Promise(resolve=>{
  const modal=document.createElement('div');modal.className='rsvp-modal show';modal.innerHTML=`<div class="rsvp-shade" data-rsvp-close></div><section class="rsvp-dialog" role="dialog" aria-modal="true" aria-labelledby="rsvp-title"><button class="rsvp-x" data-rsvp-close aria-label="Schließen">✕</button><div class="rsvp-symbol">👤</div><h2 id="rsvp-title">Teilnahme anmelden</h2><p>Bitte Vor- und Nachnamen eingeben. Der Name wird für die Teilnehmerliste dieses Termins gespeichert.</p><label><span>Name</span><input data-rsvp-name autocomplete="name" maxlength="100" placeholder="Vor- und Nachname" value="${esc(defaultName)}"></label><div class="rsvp-actions"><button class="btn" data-rsvp-close>Abbrechen</button><button class="btn primary" data-rsvp-submit>Anmelden</button></div></section>`;document.body.appendChild(modal);const input=$('[data-rsvp-name]',modal);const finish=v=>{modal.remove();resolve(v)};$$('[data-rsvp-close]',modal).forEach(b=>b.onclick=()=>finish(null));$('[data-rsvp-submit]',modal).onclick=()=>{const name=input.value.trim();if(!name){input.classList.add('invalid');input.focus();return}localStorage.setItem('ost1020-participant-name',name);finish(name)};input.oninput=()=>input.classList.remove('invalid');input.onkeydown=e=>{if(e.key==='Enter')$('[data-rsvp-submit]',modal).click();if(e.key==='Escape')finish(null)};setTimeout(()=>{input.focus();input.select()},20)
 })
}
async function toggleRsvp(eventId,clientId,name=''){if(API){try{const r=await fetch(`${API}/events/rsvp/${encodeURIComponent(eventId)}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId,name})});if(r.ok)return await r.json()}catch(e){}}return null}
async function eventsPage(){let d=await get('events');let cursor=new Date();cursor.setDate(1);let selected='';const clientId=localStorage.getItem('ost1020-client-id')||(()=>{const id='c-'+Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem('ost1020-client-id',id);return id})();$('[data-main]').innerHTML=`<section class="page-banner"><h1>Termine</h1></section><section class="calendar" data-cal></section><section class="section"><div class="section-head"><h2 data-list-title>Kommende Termine</h2></div><div class="event-list" data-events></div></section>`;
 function drawCal(){const y=cursor.getFullYear(),m=cursor.getMonth(),first=new Date(y,m,1),last=new Date(y,m+1,0),offset=(first.getDay()+6)%7,days=[];for(let i=0;i<offset;i++)days.push('');for(let i=1;i<=last.getDate();i++)days.push(i);const ym=`${y}-${String(m+1).padStart(2,'0')}`;$('[data-cal]').innerHTML=`<div class="cal-head"><button data-prev>‹</button><strong>${cursor.toLocaleDateString('de-DE',{month:'long',year:'numeric'})}</strong><button data-next>›</button></div><div class="cal-week"><span>Mo</span><span>Di</span><span>Mi</span><span>Do</span><span>Fr</span><span>Sa</span><span>So</span></div><div class="cal-grid">${days.map(day=>{if(!day)return'<span></span>';const date=`${ym}-${String(day).padStart(2,'0')}`,has=d.some(e=>e.date===date);return `<button class="cal-day ${has?'has':''} ${selected===date?'selected':''}" data-date="${date}">${day}</button>`}).join('')}</div>`}
 function drawEvents(){const today=new Date().toISOString().slice(0,10);let list=d.filter(e=>selected?e.date===selected:e.date>=today).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));$('[data-list-title]').textContent=selected?new Date(selected+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}):'Kommende Termine';$('[data-events]').innerHTML=list.map(e=>{const attendees=attendeeEntries(e.attendees),cap=Number(e.capacity)||10,joined=attendeeJoined(e.attendees,clientId),count=attendees.length,pct=Math.min(100,Math.round(count/cap*100));return `<article class="event-card"><span class="event-icon">${e.category==='Skilltraining'?'🫁':e.category==='Simulationstraining'?'❤️':'📅'}</span><span><span class="cat-pill">${esc(e.category||'Termin')}</span><h3>${esc(e.title)}</h3><div class="event-meta">🕒 ${esc(e.time)} · 📍 ${esc(e.location)}</div></span><span class="event-right"><div class="participants">👥 ${count}/${cap}</div><div class="progress"><span style="width:${pct}%"></span></div><button class="join-btn ${joined?'joined':''}" data-rsvp="${esc(e.id)}">${joined?'Teilnahme zurückziehen':'Teilnehmen'}</button></span></article>`}).join('')||'<div class="empty">Keine Termine</div>'}
 $('[data-main]').onclick=async e=>{if(e.target.closest('[data-prev]')){cursor.setMonth(cursor.getMonth()-1);selected='';drawCal();drawEvents();return}if(e.target.closest('[data-next]')){cursor.setMonth(cursor.getMonth()+1);selected='';drawCal();drawEvents();return}const day=e.target.closest('[data-date]');if(day){selected=day.dataset.date;const sd=new Date(selected+'T12:00:00');cursor=new Date(sd.getFullYear(),sd.getMonth(),1);drawCal();drawEvents();return}const r=e.target.closest('[data-rsvp]');if(r){const x=d.find(v=>v.id===r.dataset.rsvp);if(!x)return;const joined=attendeeJoined(x.attendees,clientId);let name='';if(joined){if(!confirm('Teilnahme wirklich zurückziehen?'))return}else{name=await askParticipantName(localStorage.getItem('ost1020-participant-name')||'');if(name===null)return}r.disabled=true;const result=await toggleRsvp(r.dataset.rsvp,clientId,name);if(result&&result.events)d=result.events;else{x.attendees=attendeeEntries(x.attendees);const i=x.attendees.findIndex(a=>a.clientId===clientId);if(i>=0)x.attendees.splice(i,1);else if(x.attendees.length<(Number(x.capacity)||10))x.attendees.push({clientId,name,registeredAt:new Date().toISOString()})}drawCal();drawEvents()}};drawCal();drawEvents()}

async function uploadMedia(file){
 if(!API)throw new Error('Worker nicht konfiguriert');
 const pin=sessionStorage.getItem('ost1020-editor-pin')||'';const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result).split(',')[1]||'');r.onerror=()=>reject(r.error);r.readAsDataURL(file)});
 const res=await fetch(`${API}/media`,{method:'POST',headers:{'Content-Type':'application/json','X-Admin-Pin':pin},body:JSON.stringify({name:file.name,type:file.type,data})});if(!res.ok)throw new Error((await res.json().catch(()=>({}))).error||`HTTP ${res.status}`);const j=await res.json();return j.url
}

async function verifyEditorPin(pin){
 if(API){try{const r=await fetch(`${API}/auth`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({pin})});return r.ok}catch(e){return false}}
 return pin==='1020'
}
async function editor(){
 const gate=async()=>{const pin=sessionStorage.getItem('ost1020-editor-pin')||'';if(pin&&await verifyEditorPin(pin))return true;return false};
 if(!(await gate())){
   $('[data-main]').innerHTML=`<section class="pin-box editor-gate"><div class="pin-symbol">🔐</div><h2>Redaktion</h2><p>PIN eingeben, um Inhalte zu bearbeiten.</p><input type="password" inputmode="numeric" data-pin placeholder="PIN"><div class="actions"><button class="btn primary" data-unlock>Entsperren</button><a class="btn" href="index.html">Abbrechen</a></div><div class="pin-status" data-pin-status></div></section>`;
   const attempt=async()=>{const v=$('[data-pin]').value.trim();if(!v)return;const st=$('[data-pin-status]');st.textContent='Prüfe …';if(await verifyEditorPin(v)){sessionStorage.setItem('ost1020-editor-pin',v);editor()}else{st.textContent='PIN nicht korrekt.';$('[data-pin]').select()}};
   $('[data-unlock]').onclick=attempt;$('[data-pin]').onkeydown=e=>{if(e.key==='Enter')attempt()};return;
 }
 const tabs=[['news','Aktuelles'],['articles','Literatur'],['abcde','ABCDE'],['differential','Diagnostik'],['skills','Skills'],['algorithms','Algorithmen'],['changes','Lehrmeinung'],['events','Termine'],['attendance','Teilnehmerlisten'],['guide','Simulationstraining']];
 $('[data-main]').innerHTML=`<section class="page-banner"><div class="page-banner-row"><h1>Redaktion</h1><button class="editor-shortcut" data-lock-editor>🔒 Sperren</button></div></section><section class="editor-dashboard"><aside class="editor-nav">${tabs.map((t,i)=>`<button class="editor-nav-btn ${i?'':'active'}" data-tab="${t[0]}"><span>${['📣','📚','🩺','🔎','🎓','📋','🔄','📅','👥','🖥️'][i]}</span><strong>${t[1]}</strong></button>`).join('')}</aside><section class="editor-content" data-edit></section></section>`;
 $('[data-lock-editor]').onclick=()=>{sessionStorage.removeItem('ost1020-editor-pin');editor()};

 const splitLines=v=>String(v||'').split(/\n+/).map(x=>x.trim()).filter(Boolean);
 const field=(label,value,key,type='text')=>`<label class="ux-field"><span>${label}</span>${type==='textarea'?`<textarea data-k="${key}">${esc(Array.isArray(value)?value.join('\n'):value||'')}</textarea>`:`<input data-k="${key}" type="${type}" value="${esc(value??'')}">`}</label>`;
 const listEditor=(items,key,placeholder)=>`<div class="repeat-list" data-list-key="${key}">${arr(items).map((v,i)=>`<div class="repeat-row"><input value="${esc(v)}" data-list-item="${i}" placeholder="${placeholder}"><button type="button" data-remove-row>✕</button></div>`).join('')}<button type="button" class="small-add" data-add-row="${key}">+ Punkt</button></div>`;

 const editorDrafts=new Map();
 let currentEditorState=null;
 async function draw(name){
   const sourceName=name==='attendance'?'events':name;
   const loaded=editorDrafts.has(sourceName)?editorDrafts.get(sourceName):(name==='articles'?await articles():await get(sourceName));
   const d=loaded,box=$('[data-edit]');
   editorDrafts.set(sourceName,d);
   currentEditorState={name:sourceName,view:name,d,box};
   if(name==='attendance'){
     const today=new Date().toISOString().slice(0,10),current=[...d].filter(ev=>(ev.date||'')>=today).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)),past=[...d].filter(ev=>(ev.date||'')<today).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));
     const eventCard=ev=>{const people=attendeeEntries(ev.attendees),dateLabel=ev.date?new Date(ev.date+'T12:00:00').toLocaleDateString('de-DE',{day:'2-digit',month:'2-digit',year:'numeric'}):'';return `<details class="attendance-event" data-attendance-event="${esc(ev.id)}"><summary class="attendance-event-head"><div><span class="cat-pill">${esc(ev.category||'Termin')}</span><h3>${esc(ev.title)}</h3><p>${esc(dateLabel)}${ev.time?` · ${esc(ev.time)}`:''}${ev.location?` · ${esc(ev.location)}`:''}</p></div><span class="attendance-head-actions"><strong>${people.length}/${Number(ev.capacity)||10}</strong><i class="attendance-chevron" aria-hidden="true"></i></span></summary><div class="attendance-event-body">${people.length?`<div class="attendance-table">${people.map((p,i)=>`<div class="attendance-row"><span class="attendance-no">${i+1}</span><span><strong>${esc(p.name||'Ohne Namensangabe')}</strong><small>${p.registeredAt?`angemeldet ${new Date(p.registeredAt).toLocaleString('de-DE')}`:'älterer Eintrag'}</small></span></div>`).join('')}</div>`:'<div class="empty compact">Noch keine Anmeldungen.</div>'}<div class="attendance-tools"><button class="btn attendance-pdf" data-attendance-pdf="${esc(ev.id)}">PDF exportieren</button>${people.length?`<button class="btn attendance-clear" data-attendance-clear="${esc(ev.id)}">Liste leeren</button>`:''}</div></div></details>`};
     const group=(title,subtitle,items,klass)=>`<section class="attendance-group ${klass}"><div class="attendance-group-head"><div><h3>${title}</h3><p>${subtitle}</p></div><span>${items.length}</span></div><div class="attendance-editor-list">${items.map(eventCard).join('')||'<div class="empty">Keine Termine in diesem Bereich.</div>'}</div></section>`;
     box.innerHTML=`<div class="editor-toolbar"><div><h2>Teilnehmerlisten</h2><p>Anwesenheit nach Termin nachvollziehen und als PDF exportieren.</p></div></div>${group('Aktuelle Termine','Heute und kommende Trainingseinheiten.',current,'current')}${group('Anwesenheitsarchiv','Vergangene Termine bleiben mit Teilnehmerliste erhalten.',past,'archive')}`;
     box.onclick=async e=>{const pdf=e.target.closest('[data-attendance-pdf]');if(pdf){e.preventDefault();e.stopPropagation();const ev=d.find(x=>x.id===pdf.dataset.attendancePdf);if(ev)exportAttendancePdf(ev);return}const clear=e.target.closest('[data-attendance-clear]');if(clear){e.preventDefault();e.stopPropagation();const ev=d.find(x=>x.id===clear.dataset.attendanceClear);if(!ev)return;if(!confirm(`Teilnehmerliste für „${ev.title}“ wirklich leeren?`))return;ev.attendees=[];clear.disabled=true;const ok=await save('events',d);if(!ok&&!API)localStorage.setItem(LS+'events',JSON.stringify(d));await draw('attendance')}};
     return
   }
   box.innerHTML=`<div class="editor-toolbar"><div><h2>${tabs.find(t=>t[0]===name)?.[1]||name}</h2><p>Einträge öffnen, bearbeiten und direkt synchronisieren.</p></div><div class="editor-toolbar-actions"><button class="btn primary" data-add>+ Neu</button><button class="btn" data-save>Speichern</button></div></div><div class="editor-items" data-items></div>`;
   const itemsBox=$('[data-items]',box);
   const render=()=>{itemsBox.innerHTML=d.map((x,i)=>renderCard(name,x,i)).join('')};render();
   const sync=()=>{readAll(name,d,box);editorDrafts.set(name,d)};
   const rerenderOpen=i=>{render();openCard(i)};
   $('[data-add]',box).onclick=()=>{sync();d.unshift(blank(name));render();openCard(0)};
   $('[data-save]',box).onclick=async()=>{sync();const ok=await save(name,d);alert(ok?'Gespeichert und synchronisiert.':'Lokal gespeichert. Worker-Sync nicht verfügbar.')};
   box.onclick=async e=>{
     const del=e.target.closest('[data-del]');if(del){const i=+del.dataset.del;sync();d.splice(i,1);render();return}
     const addRow=e.target.closest('[data-add-row]');if(addRow){
       const card=addRow.closest('[data-index]'),ci=+card.dataset.index,key=addRow.dataset.addRow;
       const skillCard=addRow.closest('.skill-editor-card'),sectionCard=addRow.closest('.section-editor-card');
       const si=skillCard?+skillCard.dataset.skillIndex:-1,sci=sectionCard?+sectionCard.dataset.sectionIndex:-1;
       sync();const x=d[ci];
       if(name==='skills'&&key==='sectionItems'&&si>=0&&sci>=0){const sec=x.skills?.[si]?.sections?.[sci];if(sec){sec.items=Array.isArray(sec.items)?sec.items:[];sec.items.push('')}}
       else{if(!Array.isArray(x[key]))x[key]=[];x[key].push('')}
       rerenderOpen(ci);return
     }
     const remove=e.target.closest('[data-remove-row]');if(remove){
       const card=remove.closest('[data-index]'),ci=+card.dataset.index,list=remove.closest('[data-list-key]'),key=list.dataset.listKey;
       const idx=[...list.querySelectorAll('.repeat-row')].indexOf(remove.closest('.repeat-row'));
       const skillCard=remove.closest('.skill-editor-card'),sectionCard=remove.closest('.section-editor-card');
       const si=skillCard?+skillCard.dataset.skillIndex:-1,sci=sectionCard?+sectionCard.dataset.sectionIndex:-1;
       sync();const x=d[ci];
       if(name==='skills'&&key==='sectionItems'&&si>=0&&sci>=0){const items=x.skills?.[si]?.sections?.[sci]?.items;if(Array.isArray(items))items.splice(idx,1)}
       else if(Array.isArray(x[key]))x[key].splice(idx,1);
       rerenderOpen(ci);return
     }
     const addSec=e.target.closest('[data-add-section]');if(addSec){const card=addSec.closest('[data-index]'),ci=+card.dataset.index,si=+addSec.dataset.skillIndex;sync();const g=d[ci];g.skills[si].sections=g.skills[si].sections||[];g.skills[si].sections.push({title:'Neuer Abschnitt',items:[]});rerenderOpen(ci);return}
     const addSkill=e.target.closest('[data-add-skill]');if(addSkill){const card=addSkill.closest('[data-index]'),ci=+card.dataset.index;sync();const g=d[ci];g.skills=g.skills||[];g.skills.push({name:'Neuer Skill',sections:[{title:'Ablauf',items:[]}]});rerenderOpen(ci);return}
     const addDisease=e.target.closest('[data-add-disease]');if(addDisease){const card=addDisease.closest('[data-index]'),ci=+card.dataset.index;sync();const x=d[ci];x.causes=x.causes||[];x.causes.push({name:'Neues Krankheitsbild',info:''});rerenderOpen(ci);return}
     const addMat=e.target.closest('[data-add-alg-material]');if(addMat){const card=addMat.closest('[data-index]'),ci=+card.dataset.index,kind=addMat.dataset.addAlgMaterial;sync();const x=d[ci];x.materials=x.materials||{background:[],checklists:[]};x.materials[kind]=x.materials[kind]||[];x.materials[kind].push({title:'Neue Datei',url:'',note:''});rerenderOpen(ci);return}
     const lookup=e.target.closest('[data-doi-lookup]');if(lookup){const row=lookup.closest('[data-index]'),doi=$('[data-k="doi"]',row)?.value.trim();if(!doi)return alert('Bitte zuerst eine DOI eingeben.');lookup.disabled=true;try{const r=await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);if(!r.ok)throw new Error('DOI nicht gefunden');const m=(await r.json()).message;const set=(k,v)=>{const el=$(`[data-k="${k}"]`,row);if(el&&v!=null)el.value=v};set('title',Array.isArray(m.title)?m.title[0]:'');set('authors',(m.author||[]).map(a=>[a.given,a.family].filter(Boolean).join(' ')).join(', '));set('journal',Array.isArray(m['container-title'])?m['container-title'][0]:'');set('year',m.published?.['date-parts']?.[0]?.[0]||'');set('publisherUrl',m.URL||'');sync()}catch(err){alert(err.message)}finally{lookup.disabled=false}}
   };
   box.onchange=async e=>{const input=e.target.closest('[data-media-upload]');if(!input||!input.files?.[0])return;const file=input.files[0],target=input.dataset.target,status=document.createElement('div');status.className='upload-status';status.textContent='Lade hoch …';input.after(status);try{const url=await uploadMedia(file);const holder=input.closest('[data-material-item]')||input.closest('[data-index]');const field=$(`[data-k="${target}"]`,holder);if(field){field.value=url;field.dispatchEvent(new Event('input',{bubbles:true}))}readAll(name,d,box);const synced=await save(name,d);status.textContent=synced?'Upload gespeichert und synchronisiert.':'Upload gespeichert. Worker-Sync nicht verfügbar.'}catch(err){status.textContent='Upload fehlgeschlagen: '+err.message}};
   function openCard(i){const c=itemsBox.querySelector(`[data-card="${i}"]`);if(c)c.open=true}
 }

 function renderCard(name,x,i){
   let body='';
   if(name==='algorithms'){
     const mat=x.materials||{background:[],checklists:[]};
     body=`<div class="editor-grid two">${field('Titel',x.title,'title')}${field('Symbol',x.icon,'icon')}${field('Kategorie',x.category,'category')}${field('Stand',x.stand,'stand')}</div><section class="editor-subsection"><h3>Ablauf / Flowchart</h3>${listEditor(x.steps,'steps','Algorithmusschritt')}</section><section class="editor-subsection"><h3>Leitlinie</h3>${field('Quelleninfo',x.source,'source','textarea')}${field('Web-Link zur Leitlinie',x.sourceUrl,'sourceUrl')}</section><section class="editor-subsection"><h3>Materialien</h3>${renderMaterialGroup('Hintergrundinfos','background',mat.background||[],i)}${renderMaterialGroup('Checklisten','checklists',mat.checklists||[],i)}</section>`;
   } else if(name==='skills'){
     body=`${field('Kategorie',x.name,'name')}<div class="skill-editor-list">${(x.skills||[]).map((sk,si)=>`<section class="skill-editor-card" data-skill-index="${si}">${field('Skillname',sk.name,'skillName')}<div class="section-editor-list">${(sk.sections||[]).map((sec,sci)=>`<div class="section-editor-card" data-section-index="${sci}">${field('Unterüberschrift',sec.title,'sectionTitle')}${listEditor(sec.items,'sectionItems','Inhalt')}</div>`).join('')}</div><button class="small-add" type="button" data-add-section data-skill-index="${si}">+ Unterüberschrift</button></section>`).join('')}</div><button class="btn" type="button" data-add-skill>+ Skill hinzufügen</button>`;
   } else if(name==='differential'){
     body=`<div class="editor-grid two">${field('Leitsymptom',x.title,'title')}${field('Symbol / Emoji',x.icon,'icon')}</div><section class="editor-subsection"><h3>Wichtige Fragen</h3>${listEditor(x.questions,'questions','Frage')}</section><section class="editor-subsection"><h3>Red Flags</h3>${listEditor(x.redflags,'redflags','Red Flag')}</section><section class="editor-subsection"><h3>Krankheitsbilder</h3><div class="disease-editor-list">${arr(x.causes).map((c,ci)=>{const o=typeof c==='string'?{name:c,info:''}:c;return `<div class="disease-editor-card" data-disease-index="${ci}">${field('Name',o.name,'diseaseName')}${field('Kurzinfo fürs Overlay',o.info,'diseaseInfo','textarea')}</div>`}).join('')}</div><button class="small-add" type="button" data-add-disease>+ Krankheitsbild</button></section>`;
   } else if(name==='articles'){
     body=`<div class="editor-grid two">${field('Titel',x.title,'title')}${field('DOI',x.doi,'doi')}${field('Autor:innen',x.authors,'authors')}${field('Journal / Quelle',x.journal,'journal')}${field('Jahr',x.year,'year')}${field('Dokumenttyp',x.type,'type')}${field('Themen / Kategorien',Array.isArray(x.topics)?x.topics.join(', '):x.topics,'topics')}${field('Zielgruppe',x.level,'level')}${field('Sprache',x.language,'language')}${field('Lizenz',x.license,'license')}${field('Lesezeit',x.read,'read')}${field('Zugriff',x.access,'access')}${field('Original-/Verlagslink',x.publisherUrl,'publisherUrl')}${field('Freier Volltext',x.freeUrl,'freeUrl')}${field('Hinzugefügt am',x.added,'added','date')}</div>${field('Warum lesenswert?',x.why,'why','textarea')}<button class="btn" type="button" data-doi-lookup>DOI-Daten abrufen</button>`;
   } else if(name==='news') body=field('Titel',x.title,'title')+field('Kategorie',x.category,'category')+field('Datum',x.date,'date','date')+field('Beschreibung',x.text,'text','textarea');
   else if(name==='events') body=field('Titel',x.title,'title')+`<div class="editor-grid two">${field('Datum',x.date,'date','date')}${field('Uhrzeit',x.time,'time')}${field('Ort',x.location,'location')}${field('Kategorie',x.category,'category')}${field('Max. Teilnehmer',x.capacity,'capacity')}</div>`+field('Beschreibung',x.description,'description','textarea');
   else if(name==='changes') body=field('Titel',x.title,'title')+field('Kategorie',x.category,'category')+field('Datum',x.date,'date','date')+field('Bisher',x.old,'old','textarea')+field('Neu',x.new,'new','textarea')+field('Quelle',x.source,'source')+field('Bild-URL',x.imageUrl,'imageUrl')+`<label class="ux-field"><span>Bild hochladen</span><input type="file" accept="image/*" data-media-upload data-target="imageUrl"></label>`;
   else if(name==='abcde') body=field('Buchstabe',x.key,'key')+field('Titel',x.title,'title')+`<section class="editor-subsection"><h3>Beurteilung</h3>${listEditor(x.checks,'checks','Punkt')}</section><section class="editor-subsection"><h3>Maßnahmen</h3>${listEditor(x.actions,'actions','Punkt')}</section><section class="editor-subsection"><h3>Warnzeichen</h3>${listEditor(x.pitfalls,'pitfalls','Punkt')}</section>`;
   else if(name==='guide') body=field('Titel',x.title,'title')+field('Symbol',x.icon,'icon')+`<section class="editor-subsection"><h3>Schritte</h3>${listEditor(x.steps,'steps','Schritt')}</section>`;
   return `<details class="edit-card ux-edit-card" data-card="${i}"><summary><span>${esc(x.title||x.name||x.key||'Neuer Eintrag')}</span><span>▾</span></summary><div class="edit-body" data-index="${i}">${body}<div class="danger-zone"><button class="btn danger" data-del="${i}">Eintrag löschen</button></div></div></details>`;
 }
 function renderMaterialGroup(title,key,items,i){return `<div class="material-editor-group"><div class="material-editor-head"><strong>${title}</strong><button class="small-add" type="button" data-add-alg-material="${key}">+ Datei</button></div>${items.map((m,mi)=>`<div class="material-editor-item" data-material-item data-kind="${key}" data-material-index="${mi}">${field('Titel',m.title,'matTitle')}${field('Beschreibung',m.note,'matNote','textarea')}${field('Datei-/Web-URL',m.url,'matUrl')}<label class="ux-field"><span>PDF oder Bild hochladen</span><input type="file" accept="application/pdf,image/*" data-media-upload data-target="matUrl"></label></div>`).join('')}</div>`}
 function readAll(name,d,box){
   $$('[data-index]',box).forEach(row=>{const x=d[+row.dataset.index];
     $$(':scope > [data-k], :scope > .editor-grid [data-k], :scope > .ux-field [data-k]',row).forEach(el=>{const k=el.dataset.k;if(!k||['skillName','sectionTitle','sectionItems','diseaseName','diseaseInfo','matTitle','matNote','matUrl'].includes(k))return;let v=el.value;if(['topics'].includes(k))v=String(v).split(',').map(s=>s.trim()).filter(Boolean);if(k==='capacity')v=Number(v)||10;x[k]=v});
     if(name==='algorithms'){
       x.steps=[...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.materials=x.materials||{background:[],checklists:[]};['background','checklists'].forEach(kind=>{x.materials[kind]=[...row.querySelectorAll(`[data-material-item][data-kind="${kind}"]`)].map(m=>({title:$('[data-k="matTitle"]',m)?.value||'',note:$('[data-k="matNote"]',m)?.value||'',url:$('[data-k="matUrl"]',m)?.value||''}))})
     } else if(name==='skills'){
       x.skills=[...row.querySelectorAll('[data-skill-index]')].filter(el=>el.classList.contains('skill-editor-card')).map(sk=>({name:$('[data-k="skillName"]',sk)?.value||'',sections:[...sk.querySelectorAll('.section-editor-card')].map(sec=>({title:$('[data-k="sectionTitle"]',sec)?.value||'',items:[...sec.querySelectorAll('[data-list-item]')].map(el=>el.value.trim()).filter(Boolean)}))}))
     } else if(name==='differential'){
       x.questions=[...row.querySelectorAll('[data-list-key="questions"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.redflags=[...row.querySelectorAll('[data-list-key="redflags"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.causes=[...row.querySelectorAll('.disease-editor-card')].map(c=>({name:$('[data-k="diseaseName"]',c)?.value||'',info:$('[data-k="diseaseInfo"]',c)?.value||''})).filter(c=>c.name)
     } else if(name==='abcde'){['checks','actions','pitfalls'].forEach(k=>x[k]=[...row.querySelectorAll(`[data-list-key="${k}"] [data-list-item]`)].map(el=>el.value.trim()).filter(Boolean))}
     else if(name==='guide')x.steps=[...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);
     if(!x.id)x.id=(x.title||x.name||'item').toLowerCase().replace(/[^a-z0-9äöü]+/gi,'-')+'-'+Date.now()
   })
 }
 function blank(n){if(n==='skills')return{name:'Neue Kategorie',skills:[]};if(n==='abcde')return{id:'x-'+Date.now(),key:'X',title:'Neuer Bereich',checks:[],actions:[],pitfalls:[]};if(n==='differential')return{id:'symptom-'+Date.now(),title:'Neues Leitsymptom',icon:'🩺',questions:[],redflags:[],causes:[]};if(n==='events')return{id:'event-'+Date.now(),title:'Neuer Termin',date:new Date().toISOString().slice(0,10),time:'18:00',location:'',category:'Simulationstraining',capacity:10,attendees:[]};if(n==='algorithms')return{id:'algorithm-'+Date.now(),title:'Neuer Algorithmus',icon:'📋',category:'',stand:'',steps:[],source:'',sourceUrl:'',materials:{background:[],checklists:[]}};if(n==='articles')return{id:'article-'+Date.now(),title:'Neuer Artikel',authors:'',journal:'',year:new Date().getFullYear(),doi:'',topics:[],type:'Fachartikel',read:'',access:'oa',level:'rs-nfs',language:'de',license:'',why:'',publisherUrl:'',freeUrl:'',featured:false,added:new Date().toISOString().slice(0,10),archived:false};if(n==='changes')return{id:'change-'+Date.now(),title:'Neue Lehrmeinungsänderung',category:'',date:new Date().toISOString().slice(0,10),old:'',new:'',source:'',imageUrl:''};if(n==='guide')return{id:'guide-'+Date.now(),title:'Neuer Schritt',icon:'🖥️',steps:[]};return{id:'new-'+Date.now(),title:'Neuer Eintrag'}}
 $('.editor-nav').onclick=e=>{const b=e.target.closest('[data-tab]');if(!b)return;if(currentEditorState&&currentEditorState.view!=='attendance'){readAll(currentEditorState.name,currentEditorState.d,currentEditorState.box);editorDrafts.set(currentEditorState.name,currentEditorState.d)}$$('.editor-nav-btn').forEach(x=>x.classList.toggle('active',x===b));draw(b.dataset.tab)};
 const hash=location.hash.replace('#','');draw(hash==='literatur'?'articles':hash&&tabs.some(t=>t[0]===hash)?hash:'news')
}

async function init(){chrome();rememberPage();if(page==='home')return home();if(page==='news')return newsPage();if(page==='literature')return literature();if(page==='abcde')return abcdePage();if(page==='differential')return differentialPage();if(page==='skills')return skills();if(page==='algorithms')return algorithmsPage();if(page==='changes')return changesPage();if(page==='events')return eventsPage();if(page==='guide')return guidePage();if(page==='materials'){location.replace('algorithmen.html');return}if(page==='editor')return editor()}
window.addEventListener('DOMContentLoaded',init)
})();
