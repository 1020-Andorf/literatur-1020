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
 document.body.classList.add('app-shell',`page-${page}`); if(window.matchMedia('(min-width: 1100px)').matches) document.body.classList.add('desktop-has-sidebar');
 const bb=$('[data-back-btn]'),hb=$('[data-home-btn]');
 if(bb){bb.innerHTML=svg.back;bb.onclick=()=>{
  if($('.overlay')?.classList.contains('show')){$('.overlay').classList.remove('show');return}
  const params=new URLSearchParams(location.search);
  if(page==='meetings'&&params.has('id')){location.href='dienstbesprechungen.html';return}
  if(page==='algorithms'&&params.has('id')){location.href='algorithmen.html';return}
  if(page==='changes'&&params.has('id')){location.href='lehrmeinung.html';return}
  if(page==='differential'){
   if(params.has('disease')){params.delete('disease');location.href='differential.html'+(params.size?'?'+params:'');return}
   if(params.has('id')){params.delete('id');location.href='differential.html'+(params.size?'?'+params:'');return}
   if(params.has('group')){location.href='differential.html';return}
  }
  const parents={wissen:'index.html',training:'index.html',events:'index.html',modules:'wissen.html',news:'index.html',meetings:'index.html',editor:'index.html',differential:'wissen.html',algorithms:'wissen.html',literature:'wissen.html',guidelines:'wissen.html',abcde:'wissen.html',changes:'aktuelles.html',skills:'training.html',guide:'training.html',faq:'training.html'};
  location.href=parents[page]||'index.html';
 }}
 if(hb)hb.innerHTML=svg.home;
 document.body.insertAdjacentHTML('beforeend',`<div class="overlay"><div class="shade" data-overlay-close></div><section class="overlay-panel" role="dialog" aria-modal="true"><div class="overlay-head"><h2 data-overlay-title></h2><button class="close" data-overlay-close>✕</button></div><div class="overlay-body" data-overlay-body></div></section></div>`);
 $$('[data-overlay-close]').forEach(x=>x.onclick=()=>$('.overlay').classList.remove('show'));

 {
  const navItems=[
   {id:'home',label:'Start',href:'index.html',icon:svg.home,match:['home']},
   {id:'wissen',label:'Wissen',href:'wissen.html',icon:svg.books,match:['wissen','differential','algorithms','literature','guidelines','abcde','modules']},
   {id:'training',label:'Training',href:'training.html',icon:svg.skill,match:['training','skills','guide','faq']},
   {id:'events',label:'Termine',href:'termine.html',icon:svg.calendar,match:['events']}
  ];
  const extraItems=[
   {id:'news',label:'Aktuelles',href:'aktuelles.html',emoji:'📣',match:['news']},
   {id:'meetings',label:'Dienstbesprechungen',href:'dienstbesprechungen.html',emoji:'🗣️',match:['meetings']},
   {id:'changes',label:'Lehrmeinung',href:'lehrmeinung.html',emoji:'🔄',match:['changes']},
   {id:'editor',label:'Redaktion',href:'editor.html',emoji:'✏️',match:['editor']}
  ];
  const activeId=(navItems.find(it=>it.match.includes(page))||{}).id || ((extraItems.find(it=>it.match.includes(page))||{}).id) || '';
  const more=document.createElement('div');
  more.className='mobile-more-sheet';
  more.innerHTML=`<div class="mobile-more-shade" data-more-close></div><section class="mobile-more-panel"><div class="mobile-more-grid">${extraItems.filter(x=>x.id!=='news').map(x=>`<a class="${activeId===x.id?'active':''}" href="${x.href}"><span>${x.emoji}</span><strong>${x.label}</strong></a>`).join('')}<button type="button" data-feedback-open><span>💬</span><strong>Fehler melden</strong></button></div></section>`;
  document.body.appendChild(more);
  const nav=document.createElement('nav');
  nav.className='mobile-bottom-nav';
  nav.setAttribute('aria-label','Hauptnavigation');
  nav.innerHTML=`${navItems.map(it=>`<a class="${activeId===it.id?'active':''}" href="${it.href}"><span class="mbn-icon">${it.icon}</span><span>${it.label}</span></a>`).join('')}<button type="button" class="${['news','meetings','changes','editor'].includes(activeId)?'active':''}" data-open-more><span class="mbn-icon more-arrow" aria-hidden="true">⌃</span><span>Mehr</span></button>`;
  document.body.appendChild(nav);
  $$('[data-more-close]',more).forEach(el=>el.onclick=()=>{more.classList.remove('show');$('[data-open-more]',nav)?.setAttribute('aria-expanded','false')});
  $('[data-feedback-open]',more)?.addEventListener('click',()=>{more.classList.remove('show');showFeedback()});
  $('[data-open-more]',nav)?.addEventListener('click',()=>{const isOpen=more.classList.toggle('show');$('[data-open-more]',nav)?.setAttribute('aria-expanded',String(isOpen));});
  $('[data-open-more]',nav)?.setAttribute('aria-expanded','false');

  const sidebar=document.createElement('aside');
  sidebar.className='desktop-sidebar';
  sidebar.setAttribute('aria-label','Desktop-Navigation');
  sidebar.innerHTML=`<div class="desktop-sidebar-head"><div class="desktop-brand-kicker">OST 1020</div><strong>Wissenssammlung</strong><p>Schneller Zugriff für Redaktion und Inhalte.</p></div><nav class="desktop-sidebar-nav"><div class="desktop-nav-group"><div class="desktop-nav-title">Navigation</div>${navItems.map(it=>`<a class="${activeId===it.id?'active':''}" href="${it.href}"><span class="ds-icon ds-icon-svg">${it.icon}</span><span>${it.label}</span></a>`).join('')}</div><div class="desktop-nav-group"><div class="desktop-nav-title">Mehr</div>${extraItems.map(it=>`<a class="${activeId===it.id?'active':''}" href="${it.href}"><span class="ds-icon ds-icon-emoji">${it.emoji}</span><span>${it.label}</span></a>`).join('')}<button type="button" class="desktop-feedback-btn" data-feedback-open-desktop><span class="ds-icon ds-icon-emoji">💬</span><span>Fehler melden</span></button></div></nav>`;
  document.body.appendChild(sidebar);
  $('[data-feedback-open-desktop]',sidebar)?.addEventListener('click',showFeedback);
 }
}
function showFeedback(){
 const panel=`<section class="overlay-section"><p>Fehler oder Verbesserungsvorschlag melden. Keine personenbezogenen Patientendaten eingeben.</p><label class="ux-field"><span>Thema</span><input data-fb-title maxlength="160" placeholder="z. B. Quelle überprüfen"></label><label class="ux-field"><span>Beschreibung</span><textarea data-fb-message maxlength="3000" placeholder="Was sollte korrigiert werden?"></textarea></label><button type="button" class="btn primary" data-fb-submit>Meldung absenden</button><div data-fb-status role="status"></div></section>`;
 open('Fehler melden',panel);
 $('[data-fb-submit]').onclick=async()=>{const title=$('[data-fb-title]').value.trim(),message=$('[data-fb-message]').value.trim(),status=$('[data-fb-status]');if(title.length<3||message.length<10){status.textContent='Bitte ein Thema und eine ausführlichere Beschreibung angeben.';return}if(!API){status.textContent='Worker nicht konfiguriert.';return}try{const r=await fetch(`${API}/feedback`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,message,href:location.href})});const out=await r.json();status.textContent=r.ok?'Danke, Meldung gespeichert.':out.error||'Speichern fehlgeschlagen.';if(r.ok)$('[data-fb-submit]').disabled=true}catch{status.textContent='Verbindung fehlgeschlagen.'}}
}
function open(title,html){
 $('[data-overlay-title]').textContent=title;
 $('[data-overlay-body]').innerHTML=html;
 $('.overlay').classList.add('show');
}
function mergeDiagnostics(remote){
 const base=clone(D.differential||[]),incoming=Array.isArray(remote)?remote:[];
 const ids=new Map(incoming.map(x=>[x.id,x]));
 const lockedTitles=new Set(['allergie','stroke','trauma']);
 const lockedGroups=new Set(['allergie']);
 const result=base.map(b=>{
  const old=ids.get(b.id);if(!old)return b;
  const oldCauses=arr(old.causes).map(c=>typeof c==='string'?{name:c}:c);
  const mergedCauses=arr(b.causes).map(c=>{
   const existing=oldCauses.find(v=>v.name===c.name);if(!existing)return c;
   const generic=!existing.physiology&&!existing.findings&&!existing.cave&&(!existing.info||existing.info.includes('ist eine mögliche Differentialdiagnose'));
   return generic?{...existing,physiology:c.physiology,findings:c.findings,cave:c.cave,info:c.info,sourceUrl:c.sourceUrl,sourceLabel:c.sourceLabel}: {...c,...existing,sourceUrl:existing.sourceUrl||c.sourceUrl,sourceLabel:existing.sourceLabel||c.sourceLabel};
  });
  const canon=n=>String(n||'').toLocaleLowerCase('de').replace(/[^a-z0-9äöüß]/g,'').replace(/^acs$/,'akuteskoronarsyndrom').replace(/^aaa$/,'rupturierteaortenaneurysma');const newNames=new Set(mergedCauses.map(c=>canon(c.name)));
  return {...b,...old,title:lockedTitles.has(b.id)?b.title:(old.title||b.title),group:lockedGroups.has(b.id)?b.group:(old.group||b.group),causes:[...mergedCauses,...(b.id==='allergie'?[]:oldCauses.filter(c=>!newNames.has(canon(c.name))))]};
 });
 for(const x of result){const seen=new Set();x.causes=x.causes.filter(c=>{const n=String(c.name||'').toLocaleLowerCase('de').replace(/[^a-z0-9äöüß]/g,'');if(seen.has(n))return false;seen.add(n);return true})}const known=new Set(base.map(x=>x.id));
 return [...result,...incoming.filter(x=>!known.has(x.id))];
}
async function get(name){if(API){try{const r=await fetch(`${API}/content/${name}`,{cache:'no-store'});if(r.ok){const data=await r.json();return name==='differential'?mergeDiagnostics(data):data}}catch(e){}}try{const l=localStorage.getItem(LS+name);if(l){const data=JSON.parse(l);return name==='differential'?mergeDiagnostics(data):data}}catch(e){}return clone(D[name]||[])}
async function articles(){if(API){try{const r=await fetch(`${API}/articles`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}return clone(D.articles||[])}
async function save(name,data){
 localStorage.setItem(LS+name,JSON.stringify(data));
 if(API){try{const pin=sessionStorage.getItem('ost1020-editor-pin')||'';const url=`${API}/content/${name}`;const r=await fetch(url,{method:'PUT',headers:{'Content-Type':'application/json','X-Admin-Pin':pin},body:JSON.stringify(data)});if(r.status===401){sessionStorage.removeItem('ost1020-editor-pin');throw new Error('PIN abgelaufen oder ungültig')}return r.ok}catch(e){}}
 return false
}


// Querverlinkungen und Suchindex: ausschließlich bestehende freigegebene Inhalte.
const LINK_TYPES={knowledgeModules:['Weitere Themen','themen.html'],algorithms:['Algorithmen & Schemata','algorithmen.html'],differential:['Diagnostik','differential.html'],articles:['Literatur','literatur.html'],skills:['Skilltraining','skilltraining.html'],changes:['Lehrmeinung','lehrmeinung.html']};
function contentLink(type,id,module){if(type==='knowledgeModules')return 'themen.html?bereich='+encodeURIComponent(module||'pharm')+'&id='+encodeURIComponent(id);const base=LINK_TYPES[type]?.[1];return base?(type==='algorithms'||type==='changes'?base+'?id='+encodeURIComponent(id):type==='differential'?base+'?id='+encodeURIComponent(id):base):''}
function relRefs(x){return Array.isArray(x?.related)?x.related.filter(r=>r&&typeof r.type==='string'&&typeof r.id==='string'):[]}
async function contentCatalog(){const [a,d,c,sk,li,km]=await Promise.all([get('algorithms'),get('differential'),get('changes'),get('skills'),articles(),get('knowledgeModules')]);const result=[];function add(type,x,extra=''){if(!x||!x.id)return;result.push({type,id:String(x.id),title:String(x.title||x.name||''),text:[x.title,x.name,x.category,x.group,x.source,x.why,x.info,x.description,x.physiology,x.findings,x.redflags,extra,arr(x.synonyms).join(' ')].filter(Boolean).join(' '),href:contentLink(type,String(x.id),x.module)})}a.forEach(x=>add('algorithms',x,arr(x.steps).join(' ')));d.forEach(x=>add('differential',x,[...arr(x.causes).map(c=>typeof c==='object'?[c.name,c.info,c.physiology,c.findings].join(' '):c),...arr(x.questions)].join(' ')));c.forEach(x=>add('changes',x,[x.old,x.new,x.validity].join(' ')));sk.forEach(g=>g.skills?.forEach(x=>add('skills',{...x,id:x.id||'skill:'+g.name+':'+x.name},g.name)));li.forEach(x=>add('articles',x,arr(x.topics).join(' ')));(Array.isArray(km)?km:[]).filter(x=>x.status!=='draft').forEach(x=>add('knowledgeModules',x,[x.body,x.summary,x.sources].join(' ')));return result}
function relatedHtml(item,catalog){const cards=relRefs(item).map(r=>catalog.find(c=>c.type===r.type&&c.id===r.id)).filter(Boolean);return cards.length?`<section class="ost-related"><h3>Passende Inhalte</h3><div class="ost-related-list">${cards.map(c=>`<a href="${esc(c.href)}"><span>${esc(LINK_TYPES[c.type][0])}</span><strong>${esc(c.title)}</strong><b>›</b></a>`).join('')}</div></section>`:''}
function normalizedSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('de').replace(/ß/g,'ss')}
const SEARCH_SYNONYMS=[['atemnot','dyspnoe'],['herzinfarkt','acs','akutes koronarsyndrom'],['schlaganfall','stroke'],['bewusstlos','bewusstseinsstorung'],['wiederbelebung','reanimation','cpr']];
function searchTokens(q){const qn=normalizedSearch(q);const tokens=[qn];for(const group of SEARCH_SYNONYMS){if(group.some(x=>qn.includes(normalizedSearch(x))))tokens.push(...group.map(normalizedSearch))}return [...new Set(tokens)]}
function catalogSearch(cat,term){const keys=searchTokens(term);return cat.map(x=>{const title=normalizedSearch(x.title),txt=normalizedSearch(x.text);let score=0;for(const q of keys){if(title===q)score+=120;else if(title.startsWith(q))score+=65;else if(title.includes(q))score+=40;if(txt.includes(q))score+=12}return {...x,score}}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title,'de')).slice(0,25)}
function coreCard(href,ico,title,sub){return `<a class="core-card" href="${href}"><div class="core-visual">${ico}</div><div class="core-card-copy"><h3>${title}</h3></div></a>`}
function newsHtml(n,i=''){const map={Lehrmeinung:'🔄',Leitlinie:'📋',Ausbildung:'🎓',Termin:'📅',Simulationstraining:'🖥️',Organisation:'📣',Literatur:'📚'};const c=n.category||'Organisation';return `<button class="news-item" data-news="${i}"><span class="news-icon">${map[c]||'📣'}</span><div><span class="cat-pill">${esc(c)}</span><h3>${esc(n.title)}</h3><div class="news-meta">${esc(n.date||'')}</div></div><span class="arrow">›</span></button>`}
const RECENT_KEY='ost1020-recent-pages',FAV_KEY='ost1020-favorites';
function rememberPage(){if(page==='home'||page==='editor')return;const labels={home:'Start',wissen:'Wissen',news:'Aktuelles',literature:'Literatursammlung',abcde:'ABCDE-Schema',differential:'Diagnostik',skills:'Skilltraining',algorithms:'Algorithmen und Schemata',meetings:'Dienstbesprechungen',changes:'Lehrmeinungsänderungen',events:'Termine',guide:'Quick Guide Simulation',materials:'Materialien'};const href=location.pathname.split('/').pop()||'index.html';let r=[];try{r=JSON.parse(localStorage.getItem(RECENT_KEY)||'[]')}catch(e){}r=[{page,label:labels[page]||document.title,href},...r.filter(x=>x.page!==page)].slice(0,4);localStorage.setItem(RECENT_KEY,JSON.stringify(r))}
function favorites(){try{return JSON.parse(localStorage.getItem(FAV_KEY)||'[]')}catch(e){return[]}}
function toggleFavorite(href){let f=favorites();f=f.includes(href)?f.filter(x=>x!==href):[...f,href];localStorage.setItem(FAV_KEY,JSON.stringify(f));return f.includes(href)}

// Meldungen werden 30 Tage nach ihrem Datum ausgeblendet, nicht aus dem Datenspeicher gelöscht.
function visibleNews(items){const now=new Date();now.setHours(12,0,0,0);return (Array.isArray(items)?items:[]).filter(n=>{if(n.active===false)return false;if(!n.date)return true;const d=new Date(String(n.date).slice(0,10)+'T12:00:00');if(Number.isNaN(d.getTime()))return true;const days=(now-d)/86400000;return days<30&&days>=-1}).sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')))}
async function home(){
 const [news,events,arts,ab,diff,skillsData,algs,changes]=await Promise.all([get('news'),get('events'),articles(),get('abcde'),get('differential'),get('skills'),get('algorithms'),get('changes')]);
 const now=new Date(),today=now.toISOString().slice(0,10),active=visibleNews(news).slice(0,3);
 const upcoming=(events||[]).filter(x=>x.date>=today).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time)).slice(0,3);
 const monday=new Date(now);monday.setHours(12,0,0,0);monday.setDate(now.getDate()-((now.getDay()+6)%7));
 const week=Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(monday.getDate()+i);const key=d.toISOString().slice(0,10),hits=(events||[]).filter(e=>e.date===key);return {d,key,hits}});
 const weekHtml=week.map(({d,key,hits})=>`<a class="week-day ${key===today?'today':''} ${hits.length?'has-event':''}" href="termine.html"><span>${d.toLocaleDateString('de-DE',{weekday:'short'}).replace('.','')}</span><strong>${d.getDate()}</strong>${hits.length?`<em>${hits.length}</em>`:''}</a>`).join('');
 const eventHtml=upcoming.map(e=>{const count=arr(e.attendees).length,cap=Number(e.capacity)||10;return `<a class="week-event" href="termine.html"><span class="week-event-date">${new Date(e.date+'T12:00:00').toLocaleDateString('de-DE',{day:'2-digit',month:'short'})}</span><span class="week-event-copy"><strong>${esc(e.title)}</strong><small>${esc(e.time||'')} · ${esc(e.location||'')}</small></span><span class="week-event-count">👥 ${count}/${cap}</span></a>`}).join('')||'<div class="empty compact">Keine Termine in nächster Zeit.</div>';
 const recent=(()=>{try{return JSON.parse(localStorage.getItem(RECENT_KEY)||'[]')}catch(e){return[]}})();
 const index=[...(arts||[]).map(x=>({label:x.title,sub:'Literatur',href:'literatur.html'})),...(ab||[]).map(x=>({label:`${x.key} – ${x.title}`,sub:'ABCDE',href:'abcde.html'})),...(diff||[]).map(x=>({label:x.title,sub:'Diagnostik',href:'differential.html'})),...(skillsData||[]).flatMap(g=>g.skills.map(s=>({label:s.name,sub:g.name,href:'skilltraining.html'}))),...(algs||[]).map(x=>({label:x.title,sub:'Algorithmus',href:'algorithmen.html'})),...(changes||[]).map(x=>({label:x.title,sub:'Lehrmeinung',href:'lehrmeinung.html'}))];
 $('[data-main]').innerHTML=`<section class="dashboard-hero compact-hero"><div class="hero-kicker">OST 1020</div><h1>Wissenssammlung 1020</h1></section>
 <section class="dashboard-search"><div class="global-search"><span>⌕</span><input data-global-search placeholder="Wissen, Skills, Literatur …"><button data-search-clear aria-label="Suche löschen">✕</button></div><div class="search-results hidden" data-search-results></div></section>
 <section class="section section-first compact-news"><div class="section-head"><h2>Aktuelles</h2><a href="aktuelles.html">Alle Meldungen</a></div><div class="news-list dashboard-news">${active.map((n,i)=>newsHtml(n,i)).join('')||'<div class="empty">Keine Meldungen</div>'}</div></section>
 <section class="section ost-shortcuts"><div class="section-head"><h2>Schnellzugriff</h2></div><nav class="ost-shortcut-grid" aria-label="Schnellzugriff"><a href="algorithmen.html"><span aria-hidden="true">📋</span><strong>Schemata</strong></a><a href="skilltraining.html"><span aria-hidden="true">🩹</span><strong>Skills</strong></a><a href="termine.html"><span aria-hidden="true">📅</span><strong>Termine</strong></a><a href="lehrmeinung.html"><span aria-hidden="true">🔄</span><strong>Lehrmeinung</strong></a></nav></section>
 <section class="section ost-week-bottom"><div class="section-head"><h2>Diese Woche</h2><a href="termine.html">Kalender öffnen</a></div><div class="week-card"><div class="week-strip">${weekHtml}</div><div class="week-events">${eventHtml}</div></div></section>`;
 const q=$('[data-global-search]'),results=$('[data-search-results]');
 let catalog=[];contentCatalog().then(c=>{catalog=c;if(q.value.trim())drawSearch()}).catch(()=>{});
 const drawSearch=()=>{const term=q.value.trim();if(!term){results.classList.add('hidden');results.innerHTML='';return}const hits=catalogSearch(catalog,term);const groups=[...new Set(hits.map(x=>x.type))];results.innerHTML=groups.map(type=>`<div class="ost-search-group"><h3>${esc(LINK_TYPES[type][0])}</h3>${hits.filter(x=>x.type===type).map(x=>`<a href="${esc(x.href)}"><span><strong>${esc(x.title)}</strong></span><b>›</b></a>`).join('')}</div>`).join('')||'<div class="empty compact">Keine Treffer.</div>';results.classList.remove('hidden')};q.oninput=drawSearch;$('[data-search-clear]').onclick=()=>{q.value='';drawSearch();q.focus()};
 $('[data-main]').addEventListener('click',e=>{const n=e.target.closest('[data-news]');if(n){const x=active[+n.dataset.news];if(x)open(x.title,`<section class="overlay-section news-detail"><span class="cat-pill">${esc(x.category||'Organisation')}</span><div class="news-meta">${esc(x.date||'')}</div><p>${esc(x.text||'')}</p>${x.link?`<a class="btn primary" href="${esc(x.link)}">Inhalt öffnen →</a>`:''}</section>`);}});
}

const MODULE_TYPES={"pharm": {"title": "Pharmakologie", "icon": "💊", "area": "wissen"}, "anatomy": {"title": "Anatomie & Physiologie", "icon": "🫀", "area": "wissen"}, "ecg": {"title": "EKG & Befundinterpretation", "icon": "📈", "area": "wissen"}, "equipment": {"title": "Gerätekunde", "icon": "🩺", "area": "training"}, "crm": {"title": "Kommunikation & Human Factors", "icon": "🤝", "area": "training"}, "special": {"title": "Besondere Einsatzlagen", "icon": "🚨", "area": "wissen"}, "evidence": {"title": "Wissenschaft & Evidenz", "icon": "🔬", "area": "wissen"}};
function moduleFields(x){return ['title','category','summary','body','sources','synonyms','reviewOwner','reviewDue'].map(k=>{const label={title:'Titel',category:'Kategorie',summary:'Kurzbeschreibung',body:'Fachinhalt / Lernnotizen',sources:'Quellen (URLs / Literaturangaben)',synonyms:'Suchbegriffe / Synonyme (mit Komma getrennt)',reviewOwner:'Fachliche Prüfung durch',reviewDue:'Nächste Prüfung (JJJJ-MM-TT)'}[k];return `<label class="ost-module-field"><span>${label}</span>${['body','sources','summary'].includes(k)?`<textarea data-mf="${k}" rows="${k==='body'?7:3}">${esc(x[k]||'')}</textarea>`:`<input data-mf="${k}" value="${esc(x[k]||'')}">`}</label>`}).join('')}
async function modulePage(){
 const slug=new URLSearchParams(location.search).get('bereich')||'pharm', meta=MODULE_TYPES[slug];if(!meta){$('[data-main]').innerHTML='<p>Bereich nicht gefunden.</p>';return}
 const all=await get('knowledgeModules'),items=(Array.isArray(all)?all:[]).filter(x=>x.module===slug&&x.status!=='draft');
 const q=new URLSearchParams(location.search).get('id'),current=items.find(x=>x.id===q);
 const base=`<section class="page-banner"><h1>${esc(meta.icon)} ${esc(meta.title)}</h1></section>`;
 if(current){$('[data-main]').innerHTML=base+`<a class="ost-module-back" href="themen.html?bereich=${encodeURIComponent(slug)}">← Zur Übersicht</a><article class="ost-module-detail"><div class="ost-module-kicker">${esc(current.category||meta.title)}</div><h2>${esc(current.title)}</h2>${current.summary?`<p class="ost-module-lead">${esc(current.summary)}</p>`:''}<div class="ost-module-body">${esc(current.body||'Noch kein Fachinhalt hinterlegt.').replace(/\n/g,'<br>')}</div>${current.sources?`<section class="ost-module-sources"><h3>Quellen</h3><p>${esc(current.sources).replace(/\n/g,'<br>')}</p></section>`:''}<p class="diag-hint">Inhalte vor klinischer Anwendung anhand freigegebener lokaler Vorgaben prüfen.${current.reviewDue?' Nächste Prüfung: '+esc(current.reviewDue):''}</p></article>`;const cat=await contentCatalog();$('[data-main]').insertAdjacentHTML('beforeend',relatedHtml(current,cat));return}
 $('[data-main]').innerHTML=base+`<div class="ost-module-toolbar"><input type="search" data-module-search placeholder="${esc(meta.title)} durchsuchen …" aria-label="Themen durchsuchen"></div><div class="ost-link-directory" data-module-list></div><p class="diag-hint">Pilotbereich: Die Redaktion kann hier Inhalte erstellen, bearbeiten und später einzelne Kategorien entfernen.</p>`;
 const draw=()=>{const term=normalizedSearch($('[data-module-search]').value);const hits=items.filter(x=>normalizedSearch([x.title,x.category,x.summary,x.body,x.synonyms].join(' ')).includes(term));$('[data-module-list]').innerHTML=hits.map(x=>`<a href="themen.html?bereich=${encodeURIComponent(slug)}&id=${encodeURIComponent(x.id)}"><span>${esc(meta.icon)}</span><div><strong>${esc(x.title)}</strong>${x.summary?`<small>${esc(x.summary)}</small>`:''}</div><b>›</b></a>`).join('')||'<div class="empty">Noch keine Einträge in diesem Bereich. Inhalte können in der Redaktion ergänzt werden.</div>'};$('[data-module-search]').oninput=draw;draw();
}
async function moduleEditor(box){
 const records=await get('knowledgeModules');let items=Array.isArray(records)?clone(records):[];let active='pharm';
 const render=()=>{box.innerHTML=`<div class="editor-toolbar"><div><h2>Neue Themenbereiche</h2><p>Sieben Pilotmodule separat pflegen und bei Bedarf wieder entfernen.</p></div><button type="button" class="btn primary" data-mod-new>+ Eintrag</button></div><div class="ost-module-tabs">${Object.entries(MODULE_TYPES).map(([slug,m])=>`<button type="button" class="filter-chip ${slug===active?'active':''}" data-mod-tab="${slug}">${esc(m.icon)} ${esc(m.title)}</button>`).join('')}</div><div data-mod-note role="status"></div><div class="ost-module-admin-list">${items.filter(x=>x.module===active).map(x=>`<details data-mod-id="${esc(x.id)}"><summary><strong>${esc(x.title||'Ohne Titel')}</strong><span>${x.status==='draft'?'Entwurf':'Öffentlich'}</span></summary><div class="ost-module-fields">${moduleFields(x)}<label class="ost-module-field"><span>Status</span><select data-mf="status"><option value="published" ${x.status!=='draft'?'selected':''}>Veröffentlicht</option><option value="draft" ${x.status==='draft'?'selected':''}>Entwurf</option></select></label><div class="ost-module-admin-buttons"><button type="button" class="btn primary" data-mod-save>Speichern</button><button type="button" class="btn danger" data-mod-delete>Eintrag löschen</button></div></div></details>`).join('')||'<div class="empty">Noch keine Einträge. Mit „+ Eintrag“ starten.</div>'}</div><p class="diag-hint">Alle sieben Module teilen sich eine Datensammlung. Zum Entfernen einer Rubrik genügt es später, ihre Navigation zu deaktivieren. Entwürfe dürfen nicht als vertrauliche Informationen verwendet werden.</p>`};
 const persist=async()=>{const ok=await save('knowledgeModules',items);const el=box.querySelector('[data-mod-note]');if(el)el.textContent=ok?'Mit dem Worker synchronisiert.':'Lokal gespeichert – Worker-Synchronisierung nicht bestätigt.';return ok};
 box.onclick=async e=>{const tab=e.target.closest('[data-mod-tab]');if(tab){active=tab.dataset.modTab;render();return}if(e.target.closest('[data-mod-new]')){const id='wissen-'+Date.now().toString(36);items.unshift({id,module:active,title:'Neuer Eintrag',category:'',summary:'',body:'',sources:'',synonyms:'',reviewOwner:'',reviewDue:'',status:'draft',related:[]});render();const el=box.querySelector('[data-mod-id="'+id+'"]');if(el)el.open=true;return}const card=e.target.closest('[data-mod-id]');if(!card)return;const x=items.find(i=>i.id===card.dataset.modId);if(!x)return;if(e.target.closest('[data-mod-delete]')){if(!confirm('Eintrag endgültig löschen?'))return;items=items.filter(i=>i!==x);await persist();render();return}if(e.target.closest('[data-mod-save]')){card.querySelectorAll('[data-mf]').forEach(el=>x[el.dataset.mf]=el.value);if(!x.title.trim()){alert('Titel fehlt.');return}await persist();render()}};
 render();
}

async function wissenPage(){
 const links=[['📋','Algorithmen & Schemata','algorithmen.html','Strukturierte Abläufe und Untersuchungsschemata'],['📖','Leitlinien / Guidelines','leitlinien.html','Quellen, Fachgesellschaften und Empfehlungen'],['📚','Literatursammlung','literatur.html','Artikel, Lehrbücher und Forschung'],['🩺','Diagnostik','differential.html','Leitsymptome und Krankheitsbilder'],['💊','Pharmakologie','themen.html?bereich=pharm','Pilotmodul'],['🫀','Anatomie & Physiologie','themen.html?bereich=anatomy','Pilotmodul'],['📈','EKG & Befundinterpretation','themen.html?bereich=ecg','Pilotmodul'],['🚨','Besondere Einsatzlagen','themen.html?bereich=special','Pilotmodul'],['🔬','Wissenschaft & Evidenz','themen.html?bereich=evidence','Pilotmodul']];
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Wissen</h1></section><div class="ost-link-directory">${links.map(([ico,title,url,sub])=>`<a href="${url}"><span>${ico}</span><div><strong>${title}</strong></div><b>›</b></a>`).join('')}</div>`;
}
async function trainingPage(){
 const links=[['🩹','Skilltraining','skilltraining.html','Fertigkeiten, Materialien und Abläufe'],['🖥️','Simulations Guide','simulation.html','Quick Guide für den Simulator'],['❓','FAQ zu Simulationstrainings','simulation-faq.html','Häufige Fragen zur Vorbereitung und Durchführung'],['🩺','Gerätekunde','themen.html?bereich=equipment','Pilotmodul'],['🤝','Kommunikation & Human Factors','themen.html?bereich=crm','Pilotmodul']];
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Training</h1></section><div class="ost-link-directory">${links.map(([ico,title,url,sub])=>`<a href="${url}"><span>${ico}</span><div><strong>${title}</strong></div><b>›</b></a>`).join('')}</div>`;
}
async function guidelinesPage(){
 const a=await get('algorithms');const refs=a.filter(x=>x.sourceUrl&&/^https:\/\//i.test(x.sourceUrl));
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Leitlinien / Guidelines</h1><p>Quellen und weiterführende Leitlinien aus dem bestehenden Algorithmenbestand.</p></section><div class="ost-link-directory">${refs.map(x=>`<a href="${esc(x.sourceUrl)}" target="_blank" rel="noopener noreferrer"><span>📖</span><div><strong>${esc(x.title)}</strong></div><b>↗</b></a>`).join('')||'<p class="empty">Noch keine verlinkten Leitlinien. Unter Redaktion → Algorithmen & Schemata können Quellen-URLs hinterlegt werden.</p>'}</div><p class="diag-hint">Die Links sind externe Quellen. Gültigkeit und Aktualität bitte prüfen.</p>`;
}
async function faqPage(){
 const items=[['Wie bereite ich eine Simulation vor?','Lernziel, Fallbeschreibung, Rollen, Material und technische Ausstattung vor Beginn abstimmen. Den Simulator und die Kommunikation vor dem Szenario kurz testen.'],['Wie läuft ein Simulationstraining ab?','Üblicherweise auf Briefing, Szenario und anschließendes strukturiertes Debriefing aufteilen. Lernziele und Rollen vorab klären.'],['Wo finde ich die Simulatorbedienung?','Im Simulations Guide sind die vorhandenen Schnellstart- und Bedienungsschritte zusammengestellt.'],['Was tun bei technischen Problemen?','Szenario gegebenenfalls pausieren, Geräteverbindungen und Stromversorgung prüfen und die zuständige betreuende Person informieren.'],['Wie kann ich Trainingsinhalte ergänzen?','Die Redaktion bietet unter Quick Guide Simulation die Pflege der vorhandenen Schritte. Für weitere FAQ-Einträge kann die Seite später redaktionell erweitert werden.']];
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>FAQ zu Simulationstrainings</h1><p>Allgemeine Hinweise zu Vorbereitung, Durchführung und Nachbesprechung.</p></section><div class="ost-faq-list">${items.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div><p class="diag-hint">Allgemeine Orientierung; lokale Ausbildungsstandards gehen vor.</p>`;
}
async function newsPage(){
 const d=visibleNews(await get('news'));
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
 const d=await get('differential');
 const iconMap={lungs:'🫁',heart:'❤️',brain:'🧠',abdomen:'🩺',syringe:'💉',bolt:'⚡',bandage:'🩹',clock:'🕒',stethoscope:'🩺'};
 const iconFor=x=>iconMap[x.icon]||x.icon||'🩺';
 const params=new URLSearchParams(location.search),id=params.get('id'),idx=params.get('disease');
 const symptom=d.find(x=>x.id===id),causes=symptom?arr(symptom.causes).map(c=>typeof c==='string'?{name:c}:c):[];
 const link=(x,i)=>`differential.html?id=${encodeURIComponent(x.id)}${i===undefined?'':'&disease='+i}`;
 const intro='<p class="diag-hint">Lernmaterial, keine Diagnose- oder Therapieanweisung. Bei Instabilität ABCDE und lokale SOPs priorisieren. Externe Recherchelinks ersetzen keine geprüften Leitlinien.</p>';
 const breadcrumbs=xs=>`<nav class="diag-breadcrumb"><a href="differential.html">Diagnostik</a>${xs.map(it=>`<span>›</span>${it.href?`<a href="${it.href}">${esc(it.name)}</a>`:`<strong>${esc(it.name)}</strong>`}`).join('')}</nav>`;
 const safeUrl=url=>{try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:''}catch(e){return ''}};
 const clip=(v,n=170)=>{const t=String(v||'').trim();return t.length>n?`${t.slice(0,n-1).trim()}…`:t};
 const groupMeta={
  'Atemweg':{label:'Atmung & Atemweg',tone:'breath',icon:'🫁',sub:'Dyspnoe, Husten, Stridor, obere Atemwege'},
  'Atmung':{label:'Atmung & Atemweg',tone:'breath',icon:'🫁',sub:'Dyspnoe, Husten, Stridor, obere Atemwege'},
  'Kreislauf':{label:'Herz & Kreislauf',tone:'heart',icon:'❤️',sub:'Thoraxschmerz, Rhythmus, Schock, Synkope'},
  'Neurologie':{label:'Neurologie',tone:'brain',icon:'🧠',sub:'Bewusstsein, Ausfälle, Krampf, Schwindel'},
  'Abdomen':{label:'Abdomen & Verdauung',tone:'abdomen',icon:'🩺',sub:'Bauchschmerz, GI-Blutung, Erbrechen, Stuhl'},
  'Stoffwechsel':{label:'Stoffwechsel & Endokrinologie',tone:'metabolic',icon:'💉',sub:'Blutzucker, Elektrolyte, metabolische Krisen'},
  'Infektion':{label:'Infektion & Allgemein',tone:'infection',icon:'🦠',sub:'Fieber, Infektzeichen, Allgemeinzustand'},
  'Allgemein / Allergie':{label:'Allergie & Haut',tone:'allergy',icon:'🌿',sub:'Allergische Reaktion, Hautveränderungen'},
  'Urologie':{label:'Urologie / Gyn / Geburt',tone:'uro',icon:'🩸',sub:'Harnwege, gynäkologische und geburtshilfliche Beschwerden'},
  'Geburtshilfe':{label:'Urologie / Gyn / Geburt',tone:'uro',icon:'🩸',sub:'Harnwege, gynäkologische und geburtshilfliche Beschwerden'},
  'Trauma':{label:'Trauma & Umwelt',tone:'trauma',icon:'🩹',sub:'Verletzungen, Blutung, Kälte/Hitze, SHT'},
  'Umwelt':{label:'Trauma & Umwelt',tone:'trauma',icon:'🩹',sub:'Verletzungen, Blutung, Kälte/Hitze, SHT'},
  'Psychiatrie / Toxikologie':{label:'Psyche & Intoxikation',tone:'psyche',icon:'🧩',sub:'Angst, Agitation, Intoxikation, Somnolenz'},
  'Pädiatrie':{label:'Pädiatrie',tone:'kids',icon:'🧒',sub:'Kinderleitsymptome und Besonderheiten'}
 };
 const order=['Atmung & Atemweg','Herz & Kreislauf','Neurologie','Abdomen & Verdauung','Stoffwechsel & Endokrinologie','Infektion & Allgemein','Allergie & Haut','Urologie / Gyn / Geburt','Trauma & Umwelt','Psyche & Intoxikation','Pädiatrie','Weitere'];
 const resolveGroup=g=>groupMeta[g]||{label:g||'Weitere',tone:'default',icon:'🩺',sub:'Weitere Leitsymptome'};
 const diseaseIcon=name=>{
  const n=String(name||'').toLocaleLowerCase('de');
  if(/schlaganfall|blutung|infarkt|meningitis|epilep|krampfanfall|parese|migraene|migräne|schwindel|delir|hirn/.test(n))return '🧠';
  if(/koronar|kardio|rhythm|tachykard|bradykard|herz|synkope|aorta|perikard|vorhofflimmern|av-block/.test(n))return '❤️';
  if(/lunge|pneumo|asthma|copd|bronch|embolie|stridor|atem|epiglott|krupp/.test(n))return '🫁';
  if(/anaphyl|allerg|urtikaria|angioödem|exanthem/.test(n))return '🌿';
  if(/diabet|gluk|hypokal|hyperkal|hyponatr|elektrolyt|metabol|thyreo/.test(n))return '💉';
  if(/sepsis|infekt|virus|bakter|fieber|erysipel/.test(n))return '🦠';
  if(/ileus|abdomen|append|gastro|pankreat|kolik|ulku|divertikel|chole|mesenteri/.test(n))return '🩺';
  if(/schwanger|präeklam|ektop|abort|plazenta|uterus|ovarial/.test(n))return '🤰';
  if(/fraktur|trauma|hämatom|verletz|luxation/.test(n))return '🩹';
  if(/intox|medikament|alkohol|opioid|benzodiazepin/.test(n))return '⚗️';
  if(/niere|harn|ureter|zystit|pyeloneph/.test(n))return '🩸';
  return '🩺';
 };
 const symptomCard=x=>`<a class="diag-result diag-symptom-card" href="${link(x)}"><span class="diag-result-icon">${iconFor(x)}</span><span><strong>${esc(x.title)}</strong></span><b>›</b></a>`;
 const diseaseCard=(c,i)=>`<a class="diag-disease-card diag-disease-compact" href="${link(symptom,i)}"><div class="diag-disease-head"><span class="diag-result-icon">${diseaseIcon(c.name)}</span><span class="diag-disease-title"><strong>${esc(c.name)}</strong></span><b>›</b></div></a>`;
 if(symptom&&idx!==null){
  const c=causes[Number(idx)];if(!c){location.replace(link(symptom));return}
  const parts=[['Pathophysiologie / physiologische Änderung',c.physiology],['Typische Befunde / auffällige Werte',c.findings],['Präklinische Einordnung',c.info],['CAVE / Warnzeichen',c.cave]].filter(y=>y[1]);
  const url=safeUrl(c.sourceUrl);
  $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>Krankheitsbild</h1></section>${breadcrumbs([{name:symptom.title,href:link(symptom)},{name:c.name}])}<article class="diag-detail"><div class="diag-kicker">${esc(symptom.title)}</div><h2>${esc(c.name)}</h2><div class="diag-detail-grid">${parts.map(([t,v])=>`<section class="diag-info-section ${t.startsWith('CAVE')?'diag-cave':''}"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`).join('')}</div>${url?`<section class="diag-info-section diag-source-box"><h3>Weiterlesen</h3><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(c.sourceLabel||'Externe Fachliteratur')}</a><p class="diag-hint">Recherchelink – Inhalte und Aktualität der Quelle eigenständig prüfen.</p></section>`:''}</article>${intro}`;return;
 }
 if(symptom){
  $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(symptom.title)}</h1></section>${breadcrumbs([{name:symptom.title}])}<div class="diag-summary"><span class="diag-big-icon">${iconFor(symptom)}</span><div><div class="diag-summary-kicker">Leitsymptom / Beschwerdebild</div><h2>${esc(symptom.title)}</h2><p>${causes.length} häufige Krankheitsbilder</p></div></div><section class="diag-assess-grid"><section class="diag-assess-box"><h3>🗣️ Wichtige Fragen</h3><ul>${arr(symptom.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="diag-assess-box diag-alert-box"><h3>⚠️ Red Flags</h3><ul>${arr(symptom.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section></section><h2 class="diag-section-title">Krankheitsbilder</h2><div class="diag-disease-list">${causes.map((c,i)=>diseaseCard(c,i)).join('')}</div>${intro}`;const catalog=await contentCatalog();$('[data-main]').insertAdjacentHTML('beforeend',relatedHtml(symptom,catalog));return;
 }
 const groups=new Map();
 d.forEach(x=>{const meta=resolveGroup(x.group);if(!groups.has(meta.label))groups.set(meta.label,{meta,items:[]});groups.get(meta.label).items.push(x)});
 const sorted=[...groups.values()].sort((a,b)=>(order.indexOf(a.meta.label)<0?999:order.indexOf(a.meta.label))-(order.indexOf(b.meta.label)<0?999:order.indexOf(b.meta.label)));
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Diagnostik</h1></section><div class="diag-search-wrap"><input class="diag-search" data-diag-search placeholder="Symptom oder Krankheitsbild suchen …" aria-label="Diagnostik durchsuchen"></div><div data-diag-categories class="diag-sections">${sorted.map(({meta,items})=>`<details class="diag-group" data-tone="${meta.tone}"><summary><span class="diag-group-badge">${meta.icon}</span><span class="diag-group-copy"><strong>${esc(meta.label)}</strong></span><span class="diag-group-chevron">⌄</span></summary><div class="diag-results">${items.map(symptomCard).join('')}</div></details>`).join('')}</div><div data-diag-search-results class="diag-results" hidden></div>${intro}`;
 const input=$('[data-diag-search]'),categories=$('[data-diag-categories]'),results=$('[data-diag-search-results]');
 input.oninput=()=>{
  const q=input.value.trim().toLocaleLowerCase('de');
  categories.hidden=!!q;results.hidden=!q;
  if(!q)return;
  const found=[];
  d.forEach(x=>{
   const meta=resolveGroup(x.group);
   if(String(x.title||'').toLocaleLowerCase('de').includes(q))found.push({type:'symptom',x,meta});
   arr(x.causes).forEach((c,i)=>{const obj=typeof c==='string'?{name:c}:c;if(String(obj.name||'').toLocaleLowerCase('de').includes(q))found.push({type:'disease',x,meta,i,obj})});
  });
  results.innerHTML=found.slice(0,80).map(r=>r.type==='symptom'?`<a class="diag-result diag-symptom-card" href="${link(r.x)}"><span class="diag-result-icon">${iconFor(r.x)}</span><span><strong>${esc(r.x.title)}</strong></span><b>›</b></a>`:`<a class="diag-disease-card diag-disease-compact" href="${link(r.x,r.i)}"><div class="diag-disease-head"><span class="diag-result-icon">${diseaseIcon(r.obj.name)}</span><span class="diag-disease-title"><strong>${esc(r.obj.name)}</strong></span><b>›</b></div></a>`).join('')||'<p class="diag-lead">Keine Treffer gefunden.</p>';
 };
}

async function simpleCards(name,title,mode){
 const d=await get(name);const emo={lungs:'🫁',heart:'❤️',brain:'🧠',bolt:'⚡',abdomen:'🩺',syringe:'💉',clock:'🕒',bandage:'🩹',stethoscope:'🩺',search:'🔎'};
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>${title}</h1></section><div class="list">${d.map((x,i)=>`<button class="row-card" data-i="${i}"><span class="row-icon">${mode==='diff'?(emo[x.icon]||x.icon||'🩺'):esc(x.icon|| (mode==='change'?'🔄':mode==='guide'?'🖥️':'📋'))}</span><span><strong>${esc(x.title||x.name)}</strong></span><span class="arrow">›</span></button>`).join('')}</div>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-i]');if(!b)return;const x=d[+b.dataset.i];let html='';if(mode==='diff')html=`<section class="overlay-section"><h3>Mögliche Ursachen</h3>${arr(x.causes).map(v=>`<button class="overlay-row"><span class="oi">🔎</span><span><strong>${esc(v)}</strong></span><span class="arrow">›</span></button>`).join('')}</section><section class="overlay-section"><h3>Wichtige Fragen</h3><ul>${arr(x.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section warning"><h3>Red Flags</h3><ul>${arr(x.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else if(mode==='alg')html=`<section class="overlay-section"><h3>Ablauf</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='change')html=`<section class="overlay-section"><h3>Bisher</h3><div class="news-text">${esc(x.old||'')}</div></section><section class="overlay-section"><h3>Neu</h3><div class="news-text">${esc(x.new||'')}</div></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='guide')html=`<section class="overlay-section"><h3>Schritte</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else html=`<section class="overlay-section"><div class="news-text">${esc(x.note||x.description||'')}</div></section>`;open(x.title||x.name,html)}
}

async function algorithmsPage(){
 const d=await get('algorithms');
 const params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){
   const steps=arr(x.steps),flow=steps.map((st,i)=>`<div class="flow-node"><span>${i+1}</span><strong>${esc(st)}</strong></div>${i<steps.length-1?'<div class="flow-arrow">↓</div>':''}`).join('');
   const mat=x.materials||{background:[],checklists:[]};
   const safeMedia=url=>{try{const u=new URL(url,location.href);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return ''}};
   const image=safeMedia(x.imageUrl);
   const materialList=(key,title,items)=>`<section class="algorithm-list-group"><h3>${title}</h3>${arr(items).length?`<ul class="algorithm-link-list">${arr(items).map(m=>{const u=safeMedia(m.url);return `<li><span class="algorithm-list-icon">${key==='background'?'📘':'✅'}</span><div><strong>${esc(m.title||'Material')}</strong>${m.note?`<small>${esc(m.note)}</small>`:''}</div>${u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">Öffnen ↗</a>`:''}</li>`}).join('')}</ul>`:'<p class="algorithm-empty">Noch keine Materialien hinterlegt.</p>'}</section>`;
   $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page algorithm-detail"><div class="detail-lead"><span class="detail-big-icon">${esc(x.icon||'📋')}</span><div><h2>${esc(x.title)}</h2><p>${esc(x.category||'')} · ${esc(x.stand||'')}</p></div></div>${image?`<figure class="algorithm-figure"><img src="${esc(image)}" alt="${esc(x.title)} – Schema oder Algorithmus" loading="lazy"><figcaption>${esc(x.imageCaption||x.title)}</figcaption></figure>`:''}<section class="${x.category?.startsWith('Schema')?'schema-visual':'flowchart standalone'} ${x.id==='schema-pat'?'schema-triangle':''}">${x.id==='schema-pat'?`<div class="pat-visual"><div>👶<strong>Erscheinungsbild</strong><span>TICLS</span></div><div>🫁<strong>Atemarbeit</strong><span>Geräusche, Einziehungen</span></div><div>🩸<strong>Hautdurchblutung</strong><span>Farbe, Marmorierung</span></div></div>`:''}${flow}</section><section class="guideline-box"><h3>Leitlinie / Quelle</h3><p>${esc(x.source||'Noch keine Quelleninformation hinterlegt.')}</p>${x.sourceUrl?`<a class="btn primary" href="${esc(x.sourceUrl)}" target="_blank" rel="noopener">Original öffnen ↗</a>`:''}</section><section class="detail-section"><h2>Materialien</h2><div class="algorithm-material-lists">${materialList('background','Hintergrundinformationen',mat.background||[])}${materialList('checklists','Checklisten',mat.checklists||[])}</div></section></section>`;
   const catalog=await contentCatalog();$('.algorithm-detail')?.insertAdjacentHTML('beforeend',relatedHtml(x,catalog));
   return
 }
 const types=['Schema','Algorithmus'];
 const tile=x=>`<a class="scheme-tile" href="algorithmen.html?id=${encodeURIComponent(x.id)}"><span class="scheme-icon">${esc(x.icon||'📋')}</span><h2>${esc(x.title)}</h2><span class="scheme-more">Ansehen →</span></a>`;
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Algorithmen und Schemata</h1></section><section class="scheme-section"><h2>Algorithmen</h2><div class="scheme-grid">${d.filter(x=>!x.category?.startsWith('Schema')).map(tile).join('')}</div></section><section class="scheme-section"><h2>Schemata & Merkhilfen</h2><div class="scheme-grid">${d.filter(x=>x.category?.startsWith('Schema')).map(tile).join('')}</div></section>`;
}
async function meetingsPage(){
 const d=await get('meetings'),p=new URLSearchParams(location.search),item=d.find(x=>x.id===p.get('id'));
 const safe=u=>{try{const a=new URL(u);return ['https:','http:'].includes(a.protocol)?a.href:''}catch{return ''}};
 const asset=f=>{const url=safe(f.url),kind=/\.(png|jpe?g|gif|webp|svg)(?:[?#]|$)/i.test(url)?'image':/\.pdf(?:[?#]|$)/i.test(url)?'pdf':/\.(pptx?|key)(?:[?#]|$)/i.test(url)?'slide':'link';return `<article class="meeting-resource"><span class="meeting-file-icon">${{image:'🖼️',pdf:'📄',slide:'📊',link:'🔗'}[kind]}</span><div><strong>${esc(f.title||'Material')}</strong><p>${esc(f.note||'')}</p>${kind==='image'&&url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${esc(url)}" alt="${esc(f.title||'Grafik')}"></a>`:''}${url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Material öffnen ↗</a>`:'<small>Kein Link hinterlegt</small>'}</div></article>`};
 if(item){$('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(item.title)}</h1></section><article class="meeting-detail"><div class="meeting-meta"><span>${esc(item.date||'')}</span><span>${esc(item.category||'Dienstbesprechung')}</span>${item.speaker?`<span>Referent:in: ${esc(item.speaker)}</span>`:''}</div><p class="meeting-summary">${esc(item.summary||'Keine Zusammenfassung hinterlegt.')}</p><h2>Vorträge, Grafiken und Links</h2><div class="meeting-resources">${arr(item.files).map(asset).join('')||'<p>Noch keine Materialien.</p>'}</div></article>`;return}
 const unique=[...new Map(d.map(x=>[x.id,x])).values()].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Dienstbesprechungen</h1></section><div class="meeting-grid">${unique.map(x=>`<a class="meeting-tile" href="dienstbesprechungen.html?id=${encodeURIComponent(x.id)}"><span class="meeting-tile-icon">🗣️</span><span class="meeting-date">${esc(x.date||'Dienstbesprechung')} · ${esc(x.category||'Allgemein')}</span><h2>${esc(x.title)}</h2><p>${esc(x.summary||'Materialien ansehen').slice(0,170)}</p><span class="meeting-tile-cta">Materialsammlung ansehen →</span></a>`).join('')||'<div class="empty">Noch keine Dienstbesprechungen hinterlegt. In der Redaktion können Einträge erstellt werden.</div>'}</div>`;
}

async function skills(){
 const d=await get('skills');
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Skilltraining</h1></section><section class="skill-groups">${d.map((g,gi)=>`<div><div class="skill-group-head"><h2>${esc(g.name)}</h2></div><div class="skill-grid">${g.skills.map((sk,si)=>`<button class="skill-card" data-g="${gi}" data-s="${si}"><span class="skill-icon">${si%5===0?'🫁':si%5===1?'🩺':si%5===2?'❤️':si%5===3?'🧰':'🩹'}</span><span><strong>${esc(sk.name)}</strong></span><span class="arrow">›</span></button>`).join('')}</div></div>`).join('')}</section>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-g][data-s]');if(!b)return;const sk=d[+b.dataset.g].skills[+b.dataset.s],sections=sk.sections||[{title:'Ablauf',items:arr(sk.items)}];open(sk.name,sections.map((sec,sidx)=>`<section class="overlay-section skill-overlay-section"><div class="skill-overlay-head"><span>${String(sidx+1).padStart(2,'0')}</span><h3>${esc(sec.title)}</h3></div>${arr(sec.items).length?`<ul class="skill-detail-list">${arr(sec.items).map((v,i)=>`<li><span class="skill-point">${i+1}</span><span>${esc(v)}</span></li>`).join('')}</ul>`:'<div class="skill-empty">Noch keine Inhalte</div>'}</section>`).join(''))}
}
async function changesPage(){
 const d=await get('changes'),params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){$('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page change-detail">${x.imageUrl?`<img class="change-image" src="${esc(x.imageUrl)}" alt="${esc(x.title)}">`:''}<div class="before-after"><section class="compare-card old"><span>BISHER</span><h3>Alt</h3><p>${esc(x.old||'')}</p></section><section class="compare-card new"><span>NEU</span><h3>Neu</h3><p>${esc(x.new||'')}</p></section></div><section class="guideline-box"><h3>Quelle / Einordnung</h3><p>${esc(x.source||'')}</p></section><section class="guideline-box change-validity"><h3>Gültigkeit</h3><p>${esc(x.validity||'Noch nicht hinterlegt')}</p></section></section>`;const catalog=await contentCatalog();$('.change-detail')?.insertAdjacentHTML('beforeend',relatedHtml(x,catalog));return}
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Lehrmeinungsänderungen</h1></section><div class="list">${d.map(x=>`<a class="row-card" href="lehrmeinung.html?id=${encodeURIComponent(x.id)}"><span class="row-icon">🔄</span><span><strong>${esc(x.title)}</strong></span><span class="arrow">›</span></a>`).join('')}</div>`
}
async function guidePage(){
 const d=await get('guide');
 const flat=d.flatMap((x,i)=>arr(x.steps).map((st,j)=>({title:x.title,icon:x.icon||'🖥️',step:st,group:i,index:j}))),nodes=[];
 d.forEach((x,i)=>{nodes.push(`<div class="sim-flow-group"><div class="sim-flow-title"><span>${esc(x.icon||'🖥️')}</span><strong>${esc(x.title)}</strong></div>${arr(x.steps).map((st,j)=>`<div class="flow-node sim-node"><span>${j+1}</span><strong>${esc(st)}</strong></div>${j<arr(x.steps).length-1?'<div class="flow-arrow">↓</div>':''}`).join('')}</div>${i<d.length-1?'<div class="sim-group-arrow">↓</div>':''}`)});
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Simulations Guide</h1></section><section class="simulation-flow">${nodes.join('')}</section>`
}

function monthKey(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`}
function dayKey(y,m,d){return `${y}-${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`}
function eventHasEnded(ev){if(!ev?.date)return false;const time=/^([01]\d|2[0-3]):[0-5]\d$/.test(String(ev.time||'').trim())?String(ev.time).trim():'23:59';const end=new Date(`${ev.date}T${time}:59`);return !Number.isNaN(end.getTime())&&Date.now()>end.getTime()}
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
async function toggleRsvp(eventId,clientId,name=''){if(!API)return null;try{const r=await fetch(`${API}/events/rsvp/${encodeURIComponent(eventId)}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({clientId,name})});const body=await r.json();if(!r.ok){alert(body.error||'Serverfehler');return null}return body}catch(e){alert('Verbindung zum Server fehlgeschlagen');return null}}
async function eventsPage(){let d=await get('events');let cursor=new Date();cursor.setDate(1);let selected='';const clientId=localStorage.getItem('ost1020-client-id')||(()=>{const id='c-'+Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem('ost1020-client-id',id);return id})();$('[data-main]').innerHTML=`<section class="page-banner"><h1>Termine</h1></section><section class="calendar" data-cal></section><section class="section"><div class="section-head"><h2 data-list-title>Kommende Termine</h2></div><div class="event-list" data-events></div></section>`;
 function drawCal(){
  const y=cursor.getFullYear(),m=cursor.getMonth(),first=new Date(y,m,1),offset=(first.getDay()+6)%7,daysInMonth=new Date(y,m+1,0).getDate();
  const today=new Date(),todayKey=dayKey(today.getFullYear(),today.getMonth(),today.getDate());
  const cells=Array.from({length:Math.ceil((offset+daysInMonth)/7)*7},(_,i)=>{const date=new Date(y,m,i-offset+1),key=dayKey(date.getFullYear(),date.getMonth(),date.getDate()),hits=d.filter(e=>e.date===key),out=date.getMonth()!==m;
   return `<button class="cal-day ${out?'muted':''} ${key===todayKey?'today':''} ${hits.length?'has':''} ${selected===key?'selected':''}" data-date="${key}" aria-label="${date.toLocaleDateString('de-DE',{weekday:'long',day:'numeric',month:'long'})}${hits.length?' – '+hits.length+' Termin(e)':''}" title="${esc(hits.map(e=>e.title).join(' · '))}"><span class="cal-number">${date.getDate()}</span>${hits.length?`<span class="cal-event-pips">${hits.slice(0,3).map(()=>'<i></i>').join('')}</span>`:''}</button>`;
  });
  $('[data-cal]').innerHTML=`<div class="cal-head"><button type="button" class="cal-nav" data-prev aria-label="Vorheriger Monat">‹</button><strong>${cursor.toLocaleDateString('de-DE',{month:'long',year:'numeric'})}</strong><button type="button" class="cal-nav" data-next aria-label="Nächster Monat">›</button></div><div class="cal-week">${['Mo','Di','Mi','Do','Fr','Sa','So'].map(v=>`<span>${v}</span>`).join('')}</div><div class="cal-grid">${cells.join('')}</div><p class="cal-help">Tage mit Punkt haben Termine · Tag auswählen, um Termine anzuzeigen.</p>`;
 }
 function drawEvents(){const now=new Date();const today=dayKey(now.getFullYear(),now.getMonth(),now.getDate());let list=d.filter(e=>selected?e.date===selected:!eventHasEnded(e)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));$('[data-list-title]').textContent=selected?new Date(selected+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}):'Kommende Termine';$('[data-events]').innerHTML=list.map(e=>{const attendees=attendeeEntries(e.attendees),cap=Number(e.capacity)||10,joined=attendeeJoined(e.attendees,clientId),waitlisted=(Array.isArray(e.waitlist)?e.waitlist:[]).some(a=>a.clientId===clientId),count=attendees.length,pct=Math.min(100,Math.round(count/cap*100)),ended=eventHasEnded(e);return `<article class="event-card"><span class="event-icon">${e.category==='Skilltraining'?'🫁':e.category==='Simulationstraining'?'❤️':'📅'}</span><span><span class="cat-pill">${esc(e.category||'Termin')}</span><h3>${esc(e.title)}</h3><div class="event-meta">🕒 ${esc(e.time)} · 📍 ${esc(e.location)}</div></span><span class="event-right"><div class="participants">👥 ${count}/${cap}</div><div class="progress"><span style="width:${pct}%"></span></div><button class="join-btn ${joined?'joined':''}" data-rsvp="${esc(e.id)}" ${ended?'disabled aria-disabled="true"':''}>${ended?'Termin vorbei':joined?'Teilnahme zurückziehen':waitlisted?'Warteliste verlassen':count>=cap?'Auf Warteliste':'Teilnehmen'}</button></span></article>`}).join('')||'<div class="empty">Keine Termine</div>'}
 $('[data-main]').onclick=async e=>{if(e.target.closest('[data-prev]')){cursor.setMonth(cursor.getMonth()-1);selected='';drawCal();drawEvents();return}if(e.target.closest('[data-next]')){cursor.setMonth(cursor.getMonth()+1);selected='';drawCal();drawEvents();return}const day=e.target.closest('[data-date]');if(day){selected=day.dataset.date;const sd=new Date(selected+'T12:00:00');cursor=new Date(sd.getFullYear(),sd.getMonth(),1);drawCal();drawEvents();return}const r=e.target.closest('[data-rsvp]');if(r){const x=d.find(v=>v.id===r.dataset.rsvp);if(!x||eventHasEnded(x))return;const joined=attendeeJoined(x.attendees,clientId),waitlisted=(Array.isArray(x.waitlist)?x.waitlist:[]).some(a=>a.clientId===clientId);let name='';if(joined||waitlisted){if(!confirm(waitlisted?'Wartelisteneintrag wirklich entfernen?':'Teilnahme wirklich zurückziehen?'))return}else{name=await askParticipantName(localStorage.getItem('ost1020-participant-name')||'');if(name===null)return}r.disabled=true;const result=await toggleRsvp(r.dataset.rsvp,clientId,name);if(result&&result.events)d=result.events;else if(API){alert('Anmeldung konnte nicht synchronisiert werden. Bitte erneut versuchen.')}else{alert('Für verbindliche Anmeldungen muss der Worker verbunden sein.')}drawCal();drawEvents()}};drawCal();drawEvents()}

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
 const tabs=[['abcde','ABCDE'],['algorithms','Algorithmen & Schemata'],['news','Aktuelles'],['meetings','Dienstbesprechungen'],['differential','Diagnostik'],['articles','Literatur'],['changes','Lehrmeinungsänderungen'],['guide','Quick Guide Simulation'],['skills','Skilltraining'],['attendance','Teilnehmerlisten'],['events','Termine'],['modules','Neue Themenbereiche']];
 const tabIcons={abcde:'🩺',algorithms:'📋',news:'📣',meetings:'🗣️',differential:'🔎',articles:'📚',changes:'🔄',guide:'🖥️',skills:'🎓',attendance:'👥',events:'📅',modules:'🧩'};
 $('[data-main]').innerHTML=`<section class="page-banner"><div class="page-banner-row"><h1>Redaktion</h1><button class="editor-shortcut" data-lock-editor>🔒 Sperren</button></div></section><section class="ost-editor-overview" data-editor-overview><div class="ost-editor-overview-head"><h2>Redaktions-Dashboard</h2><small>Live-Übersicht aus vorhandenen Daten</small></div><div class="ost-editor-stats" data-editor-stats><div>Lade Übersicht …</div></div><div class="ost-editor-actions"><button type="button" class="btn" data-open-review>Prüffristen</button><button type="button" class="btn" data-open-feedback>Fehlermeldungen</button><button type="button" class="btn" data-open-history>Versionsverlauf</button><button type="button" class="btn" data-open-backup>Backup</button></div></section><section class="admin-tools"><details><summary>🗄️ Wartung, Versionen &amp; Meldungen</summary><div class="admin-tools-actions"><button class="btn" data-admin-history>Versionsverlauf</button><button class="btn" data-admin-backup>Backup erstellen</button><button class="btn" data-admin-status>Backups anzeigen</button><button class="btn" data-admin-feedback>Meldungen ansehen</button><button class="btn" data-admin-review>Prüffristen</button></div><div class="admin-tools-results" data-admin-results></div></details></section><section class="editor-dashboard"><aside class="editor-nav">${tabs.map((t,i)=>`<button class="editor-nav-btn ${i?'':'active'}" data-tab="${t[0]}"><span>${tabIcons[t[0]]||'📋'}</span><strong>${t[1]}</strong></button>`).join('')}</aside><section class="editor-content" data-edit></section></section>`;
 $('[data-lock-editor]').onclick=()=>{sessionStorage.removeItem('ost1020-editor-pin');editor()};
 const overviewSources=await Promise.all([get('algorithms'),get('differential'),get('changes'),get('news')]);
 const allOverview=overviewSources.flat();const due=allOverview.filter(x=>x.reviewDue&&x.reviewDue<=new Date().toISOString().slice(0,10));const lacking=allOverview.filter(x=>(x.reviewDue||x.lastReviewed)&&!x.reviewOwner);const drafts=allOverview.filter(x=>x.status==='draft');
 $('[data-editor-stats]').innerHTML=`<div><strong>${allOverview.length}</strong><span>Inhalte</span></div><div><strong>${due.length}</strong><span>Prüffrist fällig</span></div><div><strong>${drafts.length}</strong><span>Markierte Entwürfe</span></div><div><strong>${lacking.length}</strong><span>Ohne Prüfverantwortliche</span></div>`;
 const openAdmin=id=>{const d=$('.admin-tools details');d.open=true;$('[data-admin-'+id+']')?.click();d.scrollIntoView({behavior:'smooth',block:'start'})};
 $('[data-open-review]').onclick=()=>openAdmin('review');$('[data-open-feedback]').onclick=()=>openAdmin('feedback');$('[data-open-history]').onclick=()=>openAdmin('history');$('[data-open-backup]').onclick=()=>openAdmin('backup');
 const adminResult=$('[data-admin-results]');
 const adminRequest=async(path,options={})=>{if(!API)throw Error('Worker nicht konfiguriert');const pin=sessionStorage.getItem('ost1020-editor-pin')||'';const r=await fetch(`${API}${path}`,{...options,headers:{'X-Admin-Pin':pin,'Content-Type':'application/json',...(options.headers||{})}});const data=await r.json();if(!r.ok)throw Error(data.error||'HTTP '+r.status);return data};
 const showAdminError=e=>{adminResult.textContent='Fehler: '+e.message};
 $('[data-admin-history]').onclick=async()=>{try{const name=prompt('Bereich für Versionsverlauf (z. B. algorithms, events, changes, differential):','algorithms');if(!name)return;const d=await adminRequest('/admin/history?name='+encodeURIComponent(name));adminResult.innerHTML=`<h3>Versionsverlauf: ${esc(name)}</h3>${d.items.map(v=>`<div class="admin-version-row"><span><strong>${esc(v.date)}</strong><small>${esc(v.message)}</small></span><button type="button" data-restore-sha="${esc(v.sha)}" data-restore-name="${esc(name)}">Wiederherstellen</button></div>`).join('')}`;adminResult.querySelectorAll('[data-restore-sha]').forEach(b=>b.onclick=async()=>{if(!confirm('ACHTUNG: Diese Version wird erneut als aktueller Inhalt veröffentlicht. Fortfahren?'))return;try{await adminRequest('/admin/restore',{method:'POST',body:JSON.stringify({sha:b.dataset.restoreSha,name:b.dataset.restoreName})});adminResult.textContent='Wiederhergestellt. Seite neu laden.'}catch(e){showAdminError(e)}})}catch(e){showAdminError(e)}};
 $('[data-admin-backup]').onclick=async()=>{try{const d=await adminRequest('/admin/backup',{method:'POST'});adminResult.textContent='Backup erstellt: '+d.key}catch(e){showAdminError(e)}};
 $('[data-admin-status]').onclick=async()=>{try{const d=await adminRequest('/admin/backup-status');adminResult.textContent=d.configured?d.items.map(x=>x.key+' ('+x.size+' Bytes)').join('\n'):'R2-Backup noch nicht konfiguriert.'}catch(e){showAdminError(e)}};
 $('[data-admin-feedback]').onclick=async()=>{try{const d=await adminRequest('/admin/feedback');adminResult.innerHTML='<h3>Fehlermeldungen</h3>'+d.items.map(x=>`<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.createdAt)} · ${esc(x.status)}</small><p>${esc(x.message)}</p><button data-complete="${esc(x.id)}">Als erledigt markieren</button></div>`).join('');adminResult.querySelectorAll('[data-complete]').forEach(b=>b.onclick=async()=>{try{await adminRequest('/admin/feedback/'+b.dataset.complete,{method:'PATCH',body:JSON.stringify({status:'erledigt'})});b.textContent='Erledigt';b.disabled=true}catch(e){showAdminError(e)}})}catch(e){showAdminError(e)}};
 $('[data-admin-review]').onclick=async()=>{try{const d=await adminRequest('/admin/review'),today=new Date().toISOString().slice(0,10);adminResult.innerHTML='<h3>Fachliche Prüffristen</h3>'+d.items.filter(x=>!x.reviewDue||x.reviewDue<=today).map(x=>`<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.type)} · Nächste Prüfung: ${esc(x.reviewDue||'Nicht festgelegt')} · ${esc(x.reviewOwner||'Keine verantwortliche Person')}</small></div>`).join('')}catch(e){showAdminError(e)}};


 const editorCatalog=await contentCatalog();
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
   if(name==='modules'){await moduleEditor(box);return}
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
     const publish=e.target.closest('[data-publish-news]');if(publish){
       if(!['algorithms','differential','articles','changes','skills','guide','meetings'].includes(name))return;
       sync();const idx=Number(publish.dataset.publishNews),entry=d[idx];if(!entry)return;
       const title=String(entry.title||entry.name||'').trim();if(!title)return alert('Bitte zuerst einen Titel eingeben.');
       if(!confirm(`„${title}“ als neue Meldung unter Aktuelles veröffentlichen?`))return;
       const map={algorithms:['Leitlinie','algorithmen.html'],differential:['Leitlinie','differential.html'],articles:['Literatur','literatur.html'],changes:['Lehrmeinung','lehrmeinung.html'],skills:['Ausbildung','skilltraining.html'],guide:['Simulationstraining','simulation.html'],meetings:['Organisation','dienstbesprechungen.html']};
       const [category,base]=map[name],link=entry.id&&['algorithms','changes','meetings'].includes(name)?base+'?id='+encodeURIComponent(entry.id):base;
       const current=await get('news'),today=new Date().toLocaleDateString('sv-SE');
       const exists=current.some(v=>v.relatedSection===name&&v.relatedId===String(entry.id||title));
       if(exists&&!confirm('Es gibt bereits eine verknüpfte Meldung. Trotzdem eine weitere erstellen?'))return;
       const newsItem={id:'news-'+Date.now(),title:'Neu: '+title,category,date:today,text:'Neuer oder aktualisierter Inhalt: '+title,link,active:true,relatedSection:name,relatedId:String(entry.id||title)};
       const saved=await save('news',[newsItem,...current]);
       alert(saved?'Meldung unter Aktuelles veröffentlicht.':'Meldung nur lokal gespeichert – Worker-Synchronisierung prüfen.');return;
     }
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
     const removeSec=e.target.closest('[data-remove-section]');if(removeSec){const card=removeSec.closest('[data-index]'),ci=+card.dataset.index,skillCard=removeSec.closest('.skill-editor-card'),si=skillCard?+skillCard.dataset.skillIndex:-1,sci=+removeSec.dataset.removeSection;if(si<0||sci<0)return;sync();const g=d[ci],sec=g.skills?.[si]?.sections?.[sci];if(!sec)return;if(!confirm(`Unterüberschrift „${sec.title||'Ohne Titel'}“ wirklich entfernen?`))return;g.skills[si].sections.splice(sci,1);rerenderOpen(ci);return}
     const addSkill=e.target.closest('[data-add-skill]');if(addSkill){const card=addSkill.closest('[data-index]'),ci=+card.dataset.index;sync();const g=d[ci];g.skills=g.skills||[];g.skills.push({name:'Neuer Skill',sections:[{title:'Ablauf',items:[]}]});rerenderOpen(ci);return}
     const addDisease=e.target.closest('[data-add-disease]');if(addDisease){const card=addDisease.closest('[data-index]'),ci=+card.dataset.index;sync();const x=d[ci];x.causes=x.causes||[];x.causes.push({name:'Neues Krankheitsbild',physiology:'',findings:'',cave:'',info:''});rerenderOpen(ci);return}
     const addMat=e.target.closest('[data-add-alg-material]');if(addMat){if(name==='meetings'){const ci=+addMat.closest('[data-index]').dataset.index;sync();d[ci].files=d[ci].files||[];d[ci].files.push({title:'Neues Material',url:'',note:''});rerenderOpen(ci);return}const card=addMat.closest('[data-index]'),ci=+card.dataset.index,kind=addMat.dataset.addAlgMaterial;sync();const x=d[ci];x.materials=x.materials||{background:[],checklists:[]};x.materials[kind]=x.materials[kind]||[];x.materials[kind].push({title:'Neue Datei',url:'',note:''});rerenderOpen(ci);return}
     const lookup=e.target.closest('[data-doi-lookup]');if(lookup){const row=lookup.closest('[data-index]'),doi=$('[data-k="doi"]',row)?.value.trim();if(!doi)return alert('Bitte zuerst eine DOI eingeben.');lookup.disabled=true;try{const r=await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);if(!r.ok)throw new Error('DOI nicht gefunden');const m=(await r.json()).message;const set=(k,v)=>{const el=$(`[data-k="${k}"]`,row);if(el&&v!=null)el.value=v};set('title',Array.isArray(m.title)?m.title[0]:'');set('authors',(m.author||[]).map(a=>[a.given,a.family].filter(Boolean).join(' ')).join(', '));set('journal',Array.isArray(m['container-title'])?m['container-title'][0]:'');set('year',m.published?.['date-parts']?.[0]?.[0]||'');set('publisherUrl',m.URL||'');sync()}catch(err){alert(err.message)}finally{lookup.disabled=false}}
   };
   box.addEventListener('input',e=>{if(!e.target.matches('[data-related-search]'))return;const root=e.target.closest('.ost-related-editor'),results=root.querySelector('[data-related-results]'),term=e.target.value.trim();const selected=new Set([...root.querySelectorAll('[data-rel-type][data-rel-id]')].map(el=>el.dataset.relType+':'+el.dataset.relId));const hits=term?catalogSearch(editorCatalog,term).filter(c=>!selected.has(c.type+':'+c.id)).slice(0,8):[];results.innerHTML=hits.map(c=>`<label class="ost-rel-choice"><input type="checkbox" data-rel-type="${esc(c.type)}" data-rel-id="${esc(c.id)}"><span>${esc(c.title)} <small>${esc(LINK_TYPES[c.type][0])}</small></span></label>`).join('');});
   box.addEventListener('change',e=>{if(!e.target.matches('[data-rel-type][data-rel-id]'))return;const root=e.target.closest('.ost-related-editor'),selected=root.querySelector('[data-related-selected]');if(e.target.checked){selected.appendChild(e.target.closest('label'));}else{e.target.closest('label').remove();}});
   box.onchange=async e=>{const input=e.target.closest('[data-media-upload]');if(!input||!input.files?.[0])return;const file=input.files[0],target=input.dataset.target,status=document.createElement('div');status.className='upload-status';status.textContent='Lade hoch …';input.after(status);try{const url=await uploadMedia(file);const holder=input.closest('[data-material-item]')||input.closest('[data-index]');const field=$(`[data-k="${target}"]`,holder);if(field){field.value=url;field.dispatchEvent(new Event('input',{bubbles:true}))}readAll(name,d,box);const synced=await save(name,d);status.textContent=synced?'Upload gespeichert und synchronisiert.':'Upload gespeichert. Worker-Sync nicht verfügbar.'}catch(err){status.textContent='Upload fehlgeschlagen: '+err.message}};
   function openCard(i){const c=itemsBox.querySelector(`[data-card="${i}"]`);if(c)c.open=true}
 }

 function relatedEditor(name,x){if(!LINK_TYPES[name])return'';const val=relRefs(x).map(r=>r.type+':'+r.id).join('\n');const opts=editorCatalog.filter(c=>!(c.type===name&&c.id===String(x.id||'')));return `<section class="editor-subsection ost-related-editor"><h3>Medizinische Querverlinkungen</h3><p>Passende Inhalte per Suche auswählen. Bereits gesetzte Verknüpfungen bleiben erhalten.</p><input type="search" data-related-search placeholder="Titel suchen …"><div data-related-results></div><div data-related-selected>${relRefs(x).map(r=>{const c=opts.find(c=>c.type===r.type&&c.id===r.id);return `<label class="ost-rel-choice"><input type="checkbox" data-rel-type="${esc(r.type)}" data-rel-id="${esc(r.id)}" checked><span>${esc(c?.title||r.type+':'+r.id)}</span></label>`}).join('')}</div></section>`}
 function renderCard(name,x,i){
   let body='';
   if(name==='meetings'){
     body=`<div class="editor-grid two">${field('Titel',x.title,'title')}${field('Datum',x.date,'date','date')}${field('Thema / Kategorie',x.category,'category')}${field('Referent:in',x.speaker,'speaker')}</div>${field('Zusammenfassung',x.summary,'summary','textarea')}<section class="editor-subsection"><h3>Vorträge, Grafiken, PDFs und Links</h3>${renderMaterialGroup('Materialien','files',x.files||[],i)}</section>`;
   } else if(name==='algorithms'){
     const mat=x.materials||{background:[],checklists:[]};
     body=`<div class="editor-grid two">${field('Titel',x.title,'title')}${field('Symbol',x.icon,'icon')}${field('Kategorie',x.category,'category')}${field('Stand',x.stand,'stand')}</div><section class="editor-subsection"><h3>Ablauf / Schritte / Schemaelemente</h3>${listEditor(x.steps,'steps','Algorithmusschritt')}</section><section class="editor-subsection"><h3>Leitlinie / Quelle</h3>${field('Quelleninfo',x.source,'source','textarea')}${field('Web-Link zur Leitlinie',x.sourceUrl,'sourceUrl')}</section><section class="editor-subsection"><h3>Fachliche Prüfung</h3><div class="editor-grid two">${field('Zuletzt fachlich geprüft',x.lastReviewed,'lastReviewed','date')}${field('Nächste Prüfung fällig',x.reviewDue,'reviewDue','date')}${field('Verantwortliche Person',x.reviewOwner,'reviewOwner')}</div></section><section class="editor-subsection"><h3>Grafik / Schema-Bild</h3>${field('Bild-URL (optional)',x.imageUrl,'imageUrl')}${field('Bildunterschrift',x.imageCaption,'imageCaption')}<label class="ux-field"><span>Grafik hochladen (PNG, JPG, SVG, WebP)</span><input type="file" accept="image/*" data-media-upload data-target="imageUrl"></label></section><section class="editor-subsection"><h3>Materialien</h3>${renderMaterialGroup('Hintergrundinfos','background',mat.background||[],i)}${renderMaterialGroup('Checklisten','checklists',mat.checklists||[],i)}</section>`;
   } else if(name==='skills'){
     body=`${field('Kategorie',x.name,'name')}<div class="skill-editor-list">${(x.skills||[]).map((sk,si)=>`<section class="skill-editor-card" data-skill-index="${si}">${field('Skillname',sk.name,'skillName')}<div class="section-editor-list">${(sk.sections||[]).map((sec,sci)=>`<div class="section-editor-card" data-section-index="${sci}"><div class="section-editor-head"><strong>Unterüberschrift ${sci+1}</strong><button type="button" class="section-remove-btn" data-remove-section="${sci}" aria-label="Unterüberschrift entfernen">✕ Entfernen</button></div>${field('Unterüberschrift',sec.title,'sectionTitle')}${listEditor(sec.items,'sectionItems','Inhalt')}</div>`).join('')}</div><button class="small-add" type="button" data-add-section data-skill-index="${si}">+ Unterüberschrift</button></section>`).join('')}</div><button class="btn" type="button" data-add-skill>+ Skill hinzufügen</button>`;
   } else if(name==='differential'){
     body=`<div class="editor-grid two">${field('Symptom / führendes Beschwerdebild',x.title,'title')}${field('Fachbereich / Gruppe',x.group||'Weitere','group')}${field('Symbol / Emoji',x.icon,'icon')}</div><section class="editor-subsection"><h3>Wichtige Fragen</h3>${listEditor(x.questions,'questions','Frage')}</section><section class="editor-subsection"><h3>Red Flags</h3>${listEditor(x.redflags,'redflags','Red Flag')}</section><section class="editor-subsection"><h3>Krankheitsbilder</h3><div class="disease-editor-list">${arr(x.causes).map((c,ci)=>{const o=typeof c==='string'?{name:c,info:''}:c;return `<div class="disease-editor-card" data-disease-index="${ci}">${field('Name',o.name,'diseaseName')}${field('Physiologie / Pathophysiologie',o.physiology,'diseasePhysiology','textarea')}${field('Typische Befunde / auffällige Werte',o.findings,'diseaseFindings','textarea')}${field('CAVE / Warnzeichen',o.cave,'diseaseCave','textarea')}${field('Weitere Informationen (optional)',o.info,'diseaseInfo','textarea')}${field('Quellenlink (https://…)',o.sourceUrl,'diseaseSourceUrl')}${field('Linktext',o.sourceLabel,'diseaseSourceLabel')}</div>`}).join('')}</div><button class="small-add" type="button" data-add-disease>+ Krankheitsbild</button></section>`;
   } else if(name==='articles'){
     body=`<div class="editor-grid two">${field('Titel',x.title,'title')}${field('DOI',x.doi,'doi')}${field('Autor:innen',x.authors,'authors')}${field('Journal / Quelle',x.journal,'journal')}${field('Jahr',x.year,'year')}${field('Dokumenttyp',x.type,'type')}${field('Themen / Kategorien',Array.isArray(x.topics)?x.topics.join(', '):x.topics,'topics')}${field('Zielgruppe',x.level,'level')}${field('Sprache',x.language,'language')}${field('Lizenz',x.license,'license')}${field('Lesezeit',x.read,'read')}${field('Zugriff',x.access,'access')}${field('Original-/Verlagslink',x.publisherUrl,'publisherUrl')}${field('Freier Volltext',x.freeUrl,'freeUrl')}${field('Hinzugefügt am',x.added,'added','date')}</div>${field('Warum lesenswert?',x.why,'why','textarea')}<button class="btn" type="button" data-doi-lookup>DOI-Daten abrufen</button>`;
   } else if(name==='news') body=field('Titel',x.title,'title')+field('Kategorie',x.category,'category')+field('Datum',x.date,'date','date')+field('Beschreibung',x.text,'text','textarea');
   else if(name==='events') body=field('Titel',x.title,'title')+`<div class="editor-grid two">${field('Datum',x.date,'date','date')}${field('Uhrzeit',x.time,'time')}${field('Ort',x.location,'location')}${field('Kategorie',x.category,'category')}${field('Max. Teilnehmer',x.capacity,'capacity')}</div>`+field('Beschreibung',x.description,'description','textarea');
   else if(name==='changes') body=field('Titel',x.title,'title')+field('Kategorie',x.category,'category')+field('Datum',x.date,'date','date')+field('Bisher',x.old,'old','textarea')+field('Neu',x.new,'new','textarea')+field('Quelle',x.source,'source')+field('Gültigkeit',x.validity,'validity')+field('Zuletzt fachlich geprüft',x.lastReviewed,'lastReviewed','date')+field('Nächste Prüfung fällig',x.reviewDue,'reviewDue','date')+field('Verantwortliche Person',x.reviewOwner,'reviewOwner')+field('Bild-URL',x.imageUrl,'imageUrl')+`<label class="ux-field"><span>Bild hochladen</span><input type="file" accept="image/*" data-media-upload data-target="imageUrl"></label>`;
   else if(name==='abcde') body=field('Buchstabe',x.key,'key')+field('Titel',x.title,'title')+`<section class="editor-subsection"><h3>Beurteilung</h3>${listEditor(x.checks,'checks','Punkt')}</section><section class="editor-subsection"><h3>Maßnahmen</h3>${listEditor(x.actions,'actions','Punkt')}</section><section class="editor-subsection"><h3>Warnzeichen</h3>${listEditor(x.pitfalls,'pitfalls','Punkt')}</section>`;
   else if(name==='guide') body=field('Titel',x.title,'title')+field('Symbol',x.icon,'icon')+`<section class="editor-subsection"><h3>Schritte</h3>${listEditor(x.steps,'steps','Schritt')}</section>`;
   return `<details class="edit-card ux-edit-card" data-card="${i}"><summary><span>${esc(x.title||x.name||x.key||'Neuer Eintrag')}</span><span>▾</span></summary><div class="edit-body" data-index="${i}">${body}${relatedEditor(name,x)}${["algorithms","differential","articles","changes","skills","guide","meetings"].includes(name)?`<div class="editor-news-link"><button class="btn" type="button" data-publish-news="${i}">📣 Unter Aktuelles veröffentlichen</button><small>Erstellt eine neue Meldung mit Verknüpfung zu diesem Inhalt.</small></div>`:""}<div class="danger-zone"><button class="btn danger" data-del="${i}">Eintrag löschen</button></div></div></details>`;
 }
 function renderMaterialGroup(title,key,items,i){return `<div class="material-editor-group"><div class="material-editor-head"><strong>${title}</strong><button class="small-add" type="button" data-add-alg-material="${key}">+ Datei</button></div>${items.map((m,mi)=>`<div class="material-editor-item" data-material-item data-kind="${key}" data-material-index="${mi}">${field('Titel',m.title,'matTitle')}${field('Beschreibung',m.note,'matNote','textarea')}${field('Datei-/Web-URL',m.url,'matUrl')}<label class="ux-field"><span>PDF, Bild oder Präsentation hochladen</span><input type="file" accept="application/pdf,image/*,.ppt,.pptx,.odp" data-media-upload data-target="matUrl"></label></div>`).join('')}</div>`}
 function readAll(name,d,box){
   $$('[data-index]',box).forEach(row=>{const x=d[+row.dataset.index];
     $$(':scope > [data-k], :scope > .editor-grid [data-k], :scope > .ux-field [data-k]',row).forEach(el=>{const k=el.dataset.k;if(!k||['skillName','sectionTitle','sectionItems','diseaseName','diseaseInfo','diseasePhysiology','diseaseFindings','diseaseCave','diseaseSourceUrl','diseaseSourceLabel','matTitle','matNote','matUrl'].includes(k))return;let v=el.value;if(['topics'].includes(k))v=String(v).split(',').map(s=>s.trim()).filter(Boolean);if(k==='capacity')v=Number(v)||10;x[k]=v});
     if(name==='meetings'){x.files=[...row.querySelectorAll('[data-material-item][data-kind="files"]')].map(m=>({title:$('[data-k="matTitle"]',m)?.value||'',note:$('[data-k="matNote"]',m)?.value||'',url:$('[data-k="matUrl"]',m)?.value||''}))}
     if(name==='algorithms'){
       x.steps=[...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.materials=x.materials||{background:[],checklists:[]};['background','checklists'].forEach(kind=>{x.materials[kind]=[...row.querySelectorAll(`[data-material-item][data-kind="${kind}"]`)].map(m=>({title:$('[data-k="matTitle"]',m)?.value||'',note:$('[data-k="matNote"]',m)?.value||'',url:$('[data-k="matUrl"]',m)?.value||''}))})
     } else if(name==='skills'){
       x.skills=[...row.querySelectorAll('[data-skill-index]')].filter(el=>el.classList.contains('skill-editor-card')).map(sk=>({name:$('[data-k="skillName"]',sk)?.value||'',sections:[...sk.querySelectorAll('.section-editor-card')].map(sec=>({title:$('[data-k="sectionTitle"]',sec)?.value||'',items:[...sec.querySelectorAll('[data-list-item]')].map(el=>el.value.trim()).filter(Boolean)}))}))
     } else if(name==='differential'){
       x.questions=[...row.querySelectorAll('[data-list-key="questions"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.redflags=[...row.querySelectorAll('[data-list-key="redflags"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);x.causes=[...row.querySelectorAll('.disease-editor-card')].map(c=>({name:$('[data-k="diseaseName"]',c)?.value||'',info:$('[data-k="diseaseInfo"]',c)?.value||'',physiology:$('[data-k="diseasePhysiology"]',c)?.value||'',findings:$('[data-k="diseaseFindings"]',c)?.value||'',cave:$('[data-k="diseaseCave"]',c)?.value||'',sourceUrl:$('[data-k="diseaseSourceUrl"]',c)?.value||'',sourceLabel:$('[data-k="diseaseSourceLabel"]',c)?.value||''})).filter(c=>c.name)
     } else if(name==='abcde'){['checks','actions','pitfalls'].forEach(k=>x[k]=[...row.querySelectorAll(`[data-list-key="${k}"] [data-list-item]`)].map(el=>el.value.trim()).filter(Boolean))}
     else if(name==='guide')x.steps=[...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el=>el.value.trim()).filter(Boolean);
     if(row.querySelector('.ost-related-editor')) x.related=[...row.querySelectorAll('[data-rel-type][data-rel-id]:checked')].map(el=>({type:el.dataset.relType,id:el.dataset.relId}));
     if(!x.id)x.id=(x.title||x.name||'item').toLowerCase().replace(/[^a-z0-9äöü]+/gi,'-')+'-'+Date.now()
   })
 }
 function blank(n){if(n==='meetings')return{id:'meeting-'+Date.now(),title:'Neue Dienstbesprechung',date:new Date().toISOString().slice(0,10),category:'Fortbildung',speaker:'',summary:'',files:[]};if(n==='skills')return{name:'Neue Kategorie',skills:[]};if(n==='abcde')return{id:'x-'+Date.now(),key:'X',title:'Neuer Bereich',checks:[],actions:[],pitfalls:[]};if(n==='differential')return{id:'symptom-'+Date.now(),title:'Neues Leitsymptom',group:'Weitere',icon:'🩺',questions:[],redflags:[],causes:[]};if(n==='events')return{id:'event-'+Date.now(),title:'Neuer Termin',date:new Date().toISOString().slice(0,10),time:'18:00',location:'',category:'Simulationstraining',capacity:10,attendees:[]};if(n==='algorithms')return{id:'algorithm-'+Date.now(),title:'Neuer Algorithmus',icon:'📋',category:'',stand:'',steps:[],source:'',sourceUrl:'',materials:{background:[],checklists:[]}};if(n==='articles')return{id:'article-'+Date.now(),title:'Neuer Artikel',authors:'',journal:'',year:new Date().getFullYear(),doi:'',topics:[],type:'Fachartikel',read:'',access:'oa',level:'rs-nfs',language:'de',license:'',why:'',publisherUrl:'',freeUrl:'',featured:false,added:new Date().toISOString().slice(0,10),archived:false};if(n==='changes')return{id:'change-'+Date.now(),title:'Neue Lehrmeinungsänderung',category:'',date:new Date().toISOString().slice(0,10),old:'',new:'',source:'',validity:'',imageUrl:''};if(n==='guide')return{id:'guide-'+Date.now(),title:'Neuer Schritt',icon:'🖥️',steps:[]};return{id:'new-'+Date.now(),title:'Neuer Eintrag'}}
 $('.editor-nav').onclick=e=>{const b=e.target.closest('[data-tab]');if(!b)return;if(currentEditorState&&currentEditorState.view!=='attendance'){readAll(currentEditorState.name,currentEditorState.d,currentEditorState.box);editorDrafts.set(currentEditorState.name,currentEditorState.d)}$$('.editor-nav-btn').forEach(x=>x.classList.toggle('active',x===b));draw(b.dataset.tab)};
 const hash=location.hash.replace('#','');draw(hash==='literatur'?'articles':hash&&tabs.some(t=>t[0]===hash)?hash:'news')
}

async function init(){chrome();rememberPage();if(page==='home')return home();if(page==='wissen')return wissenPage();if(page==='modules')return modulePage();if(page==='training')return trainingPage();if(page==='guidelines')return guidelinesPage();if(page==='faq')return faqPage();if(page==='news')return newsPage();if(page==='literature')return literature();if(page==='abcde')return abcdePage();if(page==='differential')return differentialPage();if(page==='skills')return skills();if(page==='algorithms')return algorithmsPage();if(page==='changes')return changesPage();if(page==='events')return eventsPage();if(page==='guide')return guidePage();if(page==='materials'){location.replace('algorithmen.html');return}if(page==='meetings')return meetingsPage();if(page==='editor')return editor()}
window.addEventListener('DOMContentLoaded',init)
})();
