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
  if($('.overlay')?.classList.contains('show')){closeOverlay();return}
  const params=new URLSearchParams(location.search);
  if(page==='modules'&&params.has('id')){params.delete('id');location.href='themen.html?'+params.toString();return}
  if(page==='modules'){if(params.has('id')){params.delete('id');location.href='themen.html?'+params.toString();return}if(['mpg','checklists'].includes(params.get('bereich'))){location.href='training.html';return}}
  if(page==='meetings'&&params.has('id')){location.href='dienstbesprechungen.html';return}
  if(page==='algorithms'&&params.has('id')){location.href='algorithmen.html';return}
  if(page==='changes'&&params.has('id')){location.href='lehrmeinung.html';return}
  if(page==='differential'){
   if(params.has('disease')){params.delete('disease');location.href='differential.html'+(params.size?'?'+params:'');return}
   if(params.has('id')){params.delete('id');location.href='differential.html'+(params.size?'?'+params:'');return}
   if(params.has('group')){location.href='differential.html';return}
  }
  const parents={wissen:'index.html',training:'index.html',events:'index.html',modules:'wissen.html',news:'index.html',meetings:'index.html',editor:'index.html',differential:'wissen.html',algorithms:'wissen.html',literature:'wissen.html',guidelines:'wissen.html',abcde:'wissen.html',changes:'index.html',skills:'training.html',guide:'training.html',faq:'training.html'};
  location.href=parents[page]||'index.html';
 }}
 if(hb)hb.innerHTML=svg.home;
 document.body.insertAdjacentHTML('beforeend',`<div class="overlay"><div class="shade" data-overlay-close></div><section class="overlay-panel" role="dialog" aria-modal="true"><div class="overlay-head"><h2 data-overlay-title></h2></div><div class="overlay-body" data-overlay-body></div></section></div>`);
 $$('[data-overlay-close]').forEach(x=>x.onclick=closeOverlay);
 $('.overlay')?.addEventListener('click',e=>{if(e.target===$('.overlay'))closeOverlay()});
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&$('.overlay')?.classList.contains('show'))closeOverlay()});

 {
  const menu=[
   {id:'home',label:'Start',href:'index.html',icon:svg.home,match:['home']},
   {id:'wissen',label:'Wissen',href:'wissen.html',icon:svg.books,match:['wissen','differential','algorithms','literature','guidelines','abcde','modules']},
   {id:'training',label:'Training',href:'training.html',icon:svg.skill,match:['training','skills','guide','faq']},
   {id:'events',label:'Termine',href:'termine.html',icon:svg.calendar,match:['events']},
   {id:'meetings',label:'Dienstbesprechungen',href:'dienstbesprechungen.html',icon:ostIcon('users'),match:['meetings']},
   {id:'changes',label:'Lehrmeinungsänderungen',href:'lehrmeinung.html',icon:ostIcon('changes'),match:['changes']}
  ];
  const current=(menu.find(x=>x.match.includes(page))||{}).id;
  const renderLink=(it,desktop=false)=>`<a class="${current===it.id?'active':''}" ${current===it.id?'aria-current="page"':''} href="${it.href}"><span class="${desktop?'ds-icon':'simple-menu-icon'}">${it.icon||it.emoji}</span><span>${it.label}</span></a>`;
  const sidebar=document.createElement('aside');
  sidebar.className='desktop-sidebar';
  sidebar.setAttribute('aria-label','Hauptnavigation');
  sidebar.innerHTML=`<div class="desktop-sidebar-head"><div class="desktop-brand-kicker">OST 1020</div><strong>Wissenssammlung</strong></div><nav class="desktop-sidebar-nav"><div class="desktop-nav-group">${menu.map(x=>renderLink(x,true)).join('')}</div></nav><div class="sidebar-actions"><a class="editor-entry-button ${page==='editor'?'active':''}" href="editor.html">✎ <span>Redaktion</span></a><button type="button" class="desktop-feedback-btn" data-feedback-open-desktop>💬 <span>Fehler melden</span></button></div>`;
  document.body.appendChild(sidebar);
  $('[data-feedback-open-desktop]',sidebar)?.addEventListener('click',showFeedback);
  const mobile=document.createElement('nav');
  mobile.className='compact-top-navigation';
  mobile.setAttribute('aria-label','Hauptnavigation');
  mobile.innerHTML=`<div class="compact-menu-links">${menu.map(x=>renderLink(x)).join('')}</div><a href="editor.html" class="compact-editor-entry" aria-label="Redaktion öffnen">✎ <span>Redaktion</span></a>`;
  const topbar=$('.topbar');
  // Navigation on phones uses home tiles, not a sliding sticky menu.
  mobile.remove();
  if(topbar&&page!=='home'){document.body.classList.add('ost-compact-header')}
 }

}
function showFeedback(){
 const panel=`<section class="overlay-section"><p>Fehler oder Verbesserungsvorschlag melden. Keine personenbezogenen Patientendaten eingeben.</p><label class="ux-field"><span>Thema</span><input data-fb-title maxlength="160" placeholder="z. B. Quelle überprüfen"></label><label class="ux-field"><span>Beschreibung</span><textarea data-fb-message maxlength="3000" placeholder="Was sollte korrigiert werden?"></textarea></label><button type="button" class="btn primary" data-fb-submit>Meldung absenden</button><div data-fb-status role="status"></div></section>`;
 open('Fehler melden',panel);
 $('[data-fb-submit]').onclick=async()=>{const title=$('[data-fb-title]').value.trim(),message=$('[data-fb-message]').value.trim(),status=$('[data-fb-status]');if(title.length<3||message.length<10){status.textContent='Bitte ein Thema und eine ausführlichere Beschreibung angeben.';return}if(!API){status.textContent='Worker nicht konfiguriert.';return}try{const r=await fetch(`${API}/feedback`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,message,href:location.href})});const out=await r.json();status.textContent=r.ok?'Danke, Meldung gespeichert.':out.error||'Speichern fehlgeschlagen.';if(r.ok)$('[data-fb-submit]').disabled=true}catch{status.textContent='Verbindung fehlgeschlagen.'}}
}
let overlayReturnScroll=0;
function closeOverlay(){
 const modal=$('.overlay');
 if(!modal?.classList.contains('show'))return;
 modal.classList.remove('show');
 $('.overlay-panel')?.classList.remove('ost-med-sheet','ost-news-modal','ost-simple-anatomy-sheet');
 document.body.classList.remove('ost-overlay-open');
 document.documentElement.classList.remove('ost-overlay-open');
 document.body.style.position='';
 document.body.style.top='';
 document.body.style.left='';
 document.body.style.right='';
 document.body.style.width='';
 window.scrollTo(0,overlayReturnScroll);
}
function open(title,html,options={}){
 const modal=$('.overlay');
 if(!modal?.classList.contains('show')){
  overlayReturnScroll=window.scrollY||document.documentElement.scrollTop||0;
  document.documentElement.classList.add('ost-overlay-open');
  document.body.classList.add('ost-overlay-open');
  Object.assign(document.body.style,{position:'fixed',top:`-${overlayReturnScroll}px`,left:'0',right:'0',width:'100%'});
 }
 $('.overlay-panel')?.classList.toggle('ost-news-modal',!!options.news);
 $('.overlay-panel')?.classList.toggle('ost-med-sheet',!!options.sheet);
 $('.overlay-panel')?.classList.toggle('ost-simple-anatomy-sheet',!!options.simpleAnatomy);
 $('[data-overlay-body]').onclick=null;
 $('[data-overlay-title]').textContent=options.news?'':title;
 $('[data-overlay-body]').innerHTML=html;
 modal.classList.add('show');
 const panel=$('.overlay-panel');if(panel)panel.scrollTop=0;
 const scroll=$('[data-overlay-body]');if(scroll)scroll.scrollTop=0;
}
function mergeDiagnostics(remote){
 const base=clone(D.differential||[]),incoming=Array.isArray(remote)?remote:[];
 const extras=window.OST1020_DIAGNOSTIC_THEORY||{};
 base.forEach(x=>{if(!x.theory&&extras[x.id])x.theory=extras[x.id]});
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
function seedModules(data){
 if(!Array.isArray(data))data=[];
 const seed=window.OST1020_MODULE_SEED||[];
 const byId=new Map(seed.map(x=>[x.id,x]));
 const merged=data.map(x=>{
  const next=byId.get(x.id);
  if(!next||!next.body||!x.body||!['anatomy','pharm'].includes(x.module))return x;
  // Nur unveränderte Standardtexte ergänzen. Eigene Redaktionsfassungen werden nicht überschrieben.
  const extensionAt=next.body.indexOf('\n\n## ');
  const publishedBase=extensionAt<0?next.body:next.body.slice(0,extensionAt);
  return x.body===publishedBase?{...x,body:next.body}:x;
 });
 const known=new Set(data.map(x=>x.id));
 return [...merged,...seed.filter(x=>!known.has(x.id))]
}
async function get(name){
 if(API){
  try{
   const r=await fetch(`${API}/content/${name}`,{cache:'no-store'});
   if(r.ok){
    const data=await r.json();
    if(Array.isArray(data)){
     // Ein leerer API-Bestand darf vorhandene Basisthemen nicht versehentlich ausblenden.
     if(!data.length&&['skills','changes','algorithms','guide'].includes(name)&&Array.isArray(D[name])&&D[name].length)return clone(D[name]);
     return name==='differential'?mergeDiagnostics(data):name==='knowledgeModules'?seedModules(data):data;
    }
   }
  }catch(e){}
 }
 try{
  const l=localStorage.getItem(LS+name);
  if(l){const data=JSON.parse(l);if(Array.isArray(data))return name==='differential'?mergeDiagnostics(data):name==='knowledgeModules'?seedModules(data):data}
 }catch(e){}
 if(name==='knowledgeModules')return seedModules(clone(D[name]||[]));
 if(Array.isArray(D[name])&&D[name].length)return clone(D[name]);
 // Die bestehende statische Datendatei verwenden, wenn der Worker nicht erreichbar ist.
 if(['events','meetings'].includes(name)){
  try{const r=await fetch(`data/${name}.json`,{cache:'no-store'});if(r.ok){const data=await r.json();if(Array.isArray(data))return data}}catch(e){}
 }
 return clone(D[name]||[]);
}
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
async function contentCatalog(){const [a,d,c,sk,li,km]=await Promise.all([get('algorithms'),get('differential'),get('changes'),get('skills'),articles(),get('knowledgeModules')]);const result=[];function add(type,x,extra=''){if(!x||!x.id)return;result.push({type,id:String(x.id),title:String(x.title||x.name||''),text:[x.title,x.name,x.category,x.group,x.source,x.why,x.info,x.description,x.physiology,x.findings,x.redflags,extra,arr(x.synonyms).join(' ')].filter(Boolean).join(' '),href:contentLink(type,String(x.id),x.module)})}a.forEach(x=>add('algorithms',x,arr(x.steps).join(' ')));d.forEach(x=>add('differential',x,[...arr(x.causes).map(c=>typeof c==='object'?[c.name,c.info,c.physiology,c.findings].join(' '):c),...arr(x.questions)].join(' ')));c.forEach(x=>add('changes',x,[x.old,x.new,x.validity].join(' ')));sk.forEach(g=>g.skills?.forEach(x=>add('skills',{...x,id:x.id||'skill:'+g.name+':'+x.name},g.name)));li.forEach(x=>add('articles',x,arr(x.topics).join(' ')));(Array.isArray(km)?km:[]).filter(x=>MODULE_TYPES[x.module]&&x.status!=='draft').forEach(x=>add('knowledgeModules',x,[x.body,x.summary,x.sources].join(' ')));return result}
function relatedHtml(item,catalog){const cards=relRefs(item).map(r=>catalog.find(c=>c.type===r.type&&c.id===r.id)).filter(Boolean);return cards.length?`<section class="ost-related"><h3>Passende Inhalte</h3><div class="ost-related-list">${cards.map(c=>`<a href="${esc(c.href)}"><span>${esc(LINK_TYPES[c.type][0])}</span><strong>${esc(c.title)}</strong><b>›</b></a>`).join('')}</div></section>`:''}
function normalizedSearch(s){return String(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('de').replace(/ß/g,'ss')}
const SEARCH_SYNONYMS=[['atemnot','dyspnoe'],['herzinfarkt','acs','akutes koronarsyndrom'],['schlaganfall','stroke'],['bewusstlos','bewusstseinsstorung'],['wiederbelebung','reanimation','cpr']];
function searchTokens(q){const qn=normalizedSearch(q);const tokens=[qn];for(const group of SEARCH_SYNONYMS){if(group.some(x=>qn.includes(normalizedSearch(x))))tokens.push(...group.map(normalizedSearch))}return [...new Set(tokens)]}
function catalogSearch(cat,term){const keys=searchTokens(term);return cat.map(x=>{const title=normalizedSearch(x.title),txt=normalizedSearch(x.text);let score=0;for(const q of keys){if(title===q)score+=120;else if(title.startsWith(q))score+=65;else if(title.includes(q))score+=40;if(txt.includes(q))score+=12}return {...x,score}}).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.title.localeCompare(b.title,'de')).slice(0,25)}
function coreCard(href,ico,title,sub){return `<a class="core-card" href="${href}"><div class="core-visual">${ico}</div><div class="core-card-copy"><h3>${title}</h3></div></a>`}
// Einheitliche, dezente Kontur-Symbole für Navigationskacheln und Rubriken.
const OST_ICONS={
 book:'<path d="M12 7c-2.5-1.8-5.1-2.1-9-1v13c3.9-1.1 6.5-.8 9 1m0-13c2.5-1.8 5.1-2.1 9-1v13c-3.9-1.1-6.5-.8-9 1m0-13v13"/>',
 training:'<path d="m2 9 10-5 10 5-10 5-10-5Zm4 3v5c3.9 3 8.1 3 12 0v-5M22 10v7"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h6"/>',
 users:'<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m13-14a4 4 0 0 1 0 8m5 6v-2a4 4 0 0 0-3-3.87"/><circle cx="9.5" cy="7" r="4"/>',
 refresh:'<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.7 9A7 7 0 0 1 18 6l2 1M4 17l2 1a7 7 0 0 0 12.3-3"/>',
 notes:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
 guideline:'<path d="M6 3h11a2 2 0 0 1 2 2v16H8a3 3 0 0 1-3-3V5a2 2 0 0 1 1-2Zm-1 15a3 3 0 0 1 3-3h11"/>',
 search:'<circle cx="10.8" cy="10.8" r="6.7"/><path d="m16 16 5 5"/>',
 pill:'<path d="M9 3h6v2h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V3Z"/><path d="M10 11h4M12 9v4"/><path d="M9 5h6"/>',
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
 dictionary:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Zm0 13a3 3 0 0 1 3-3h13M9 8h6m-6 3h5"/>',
 skill:'<path d="m14 5 5 5M4 20l8.5-8.5a5 5 0 0 1 6.8-6.8l-4.1 4.1 1 3.1 3.1 1 4.1-4.1a5 5 0 0 1-6.8 6.8L8 24"/>',
 device:'<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M7 11h3l2-4 2 8 2-4h1M9 18h6"/>',
 checklist:'<rect x="6" y="3" width="13" height="18" rx="2"/><path d="m9 9 1.5 1.5L13 8m-4 7 1.5 1.5L13 14m2-4h2m-2 6h2"/>',
 screen:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-3-12 6 2-6 3V9Z"/>',
 question:'<circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-1.3 1-1.9 1.5-1.9 3M12 17.5v.5"/>',
 changes:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h5M9 16h3"/><path d="m15 15 2 2 4-4"/>',
 anatomy:'<path d="M12 21s-8-4.8-9-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-1 5.2-9 10-9 10Z"/><path d="M3 12h5l2-3 3 6 2-3h6"/>',
 edit:'<path d="M12 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-7"/><path d="m16 5 3-3 3 3-9 9-4 1 1-4 9-9"/>',
 news:'<path d="M3 10v4h3l9 5V5L6 10H3Z"/><path d="M7 14l2 6h3M19 9a5 5 0 0 1 0 6"/>',
 folder:'<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9H3Z"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 group:'<path d="M4 20v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"/><circle cx="12" cy="7" r="4"/>',
 lock:'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/>'
};
function ostIcon(key){return `<svg class="ost-outline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${OST_ICONS[key]||OST_ICONS.book}</svg>`}
function normalizedTitle(t){return String(t||'').replace(/^[^\p{L}\p{N}]+/gu,'').replace(/\s+/g,' ').trim()}
function headerTitle(){
 const params=new URLSearchParams(location.search);
 const map={home:'Wissenssammlung',wissen:'Wissen',training:'Training',events:'Termine',news:'Aktuelles',meetings:'Dienstbesprechungen',editor:'Redaktion',differential:'Diagnostik',algorithms:'Algorithmen & Merkhilfen',literature:'Literatursammlung',guidelines:'Leitlinien / Guidelines',abcde:'ABCDE-Schema',changes:'Lehrmeinung',skills:'Skilltraining',guide:'Simulations Guide',faq:'FAQ zu Simulationstrainings'};
 if(page==='modules'){
  const slug=params.get('bereich')||'pharm';
  return (MODULE_TYPES[slug]&&MODULE_TYPES[slug].title)||'Wissensbereich';
 }
 return map[page]||'OST 1020';
}
function syncHeaderTitle(){
 const brand=$('.topbar .brand strong');
 if(brand)brand.textContent=headerTitle();
 if(page!=='home')document.title=`OST 1020 – ${headerTitle()}`;
}
function cleanupDuplicatePageHeading(){
 syncHeaderTitle();
 if(page==='home')return;
 const banner=document.querySelector('.main > .page-banner:first-child');
 if(!banner)return;
 const h1=banner.querySelector('h1');
 if(!h1)return;
 const header=normalizedTitle(headerTitle()).toLocaleLowerCase('de');
 const own=normalizedTitle(h1.textContent).toLocaleLowerCase('de');
 if(!header||header!==own)return;
 const row=h1.closest('.page-banner-row');
 h1.remove();
 if(row && !row.textContent.trim() && !row.querySelector('button,a,input,select,.toolbar,.filter-chips'))row.remove();
 banner.classList.add('page-banner-no-title');
 const keep=banner.querySelector('.toolbar,.searchbar,input,select,button,a,p,.filter-chips,.page-banner-row,.ost-module-toolbar,.diag-search-wrap');
 if(!keep)banner.remove();
}

function newsHtml(n,i=''){const map={Lehrmeinung:'🔄',Leitlinie:'📋',Ausbildung:'🎓',Termin:'📅',Simulationstraining:'🖥️',Organisation:'📣',Literatur:'📚'};const c=n.category||'Organisation';return `<button class="news-item news-title-only" data-news="${i}"><h3>${esc(n.title)}</h3><span class="arrow" aria-hidden="true">›</span></button>`}
const RECENT_KEY='ost1020-recent-pages',FAV_KEY='ost1020-favorites';
function rememberPage(){if(page==='home'||page==='editor')return;const labels={home:'Start',wissen:'Wissen',news:'Aktuelles',literature:'Literatursammlung',abcde:'ABCDE-Schema',differential:'Diagnostik',skills:'Skilltraining',algorithms:'Algorithmen & Merkhilfen',meetings:'Dienstbesprechungen',changes:'Lehrmeinungsänderungen',events:'Termine',guide:'Quick Guide Simulation',materials:'Materialien'};const href=location.pathname.split('/').pop()||'index.html';let r=[];try{r=JSON.parse(localStorage.getItem(RECENT_KEY)||'[]')}catch(e){}r=[{page,label:labels[page]||document.title,href},...r.filter(x=>x.page!==page)].slice(0,4);localStorage.setItem(RECENT_KEY,JSON.stringify(r))}
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
 $('[data-main]').innerHTML=`<section class="ost-home-intro"><span>OST 1020</span><div class="ost-home-title-row"><h1>Wissenssammlung</h1></div></section>
 <section class="dashboard-search"><div class="global-search"><span>⌕</span><input data-global-search placeholder="Wissen durchsuchen …"><button data-search-clear aria-label="Suche löschen">✕</button></div><div class="search-results hidden" data-search-results></div></section>
 <section class="section section-first compact-news"><div class="section-head"><h2>Aktuelles</h2><a href="aktuelles.html">Alle →</a></div><div class="news-list dashboard-news">${active.map((n,i)=>newsHtml(n,i)).join('')||'<div class="empty">Keine Meldungen</div>'}</div></section>
 <section class="section ost-shortcuts"><div class="section-head"><h2>Menü</h2></div><nav class="ost-main-destinations" aria-label="Hauptmenü"><a href="wissen.html">${ostIcon('book')}<span>Wissen</span></a><a href="training.html">${ostIcon('training')}<span>Training</span></a><a href="termine.html">${ostIcon('calendar')}<span>Termine</span></a><a href="dienstbesprechungen.html">${ostIcon('users')}<span>Besprechungen</span></a><a href="lehrmeinung.html">${ostIcon('changes')}<span>Lehrmeinung</span></a></nav></section>
 <section class="section ost-week-bottom"><div class="section-head"><h2>Diese Woche</h2><a href="termine.html">Alle Termine →</a></div><div class="week-card"><div class="week-strip">${weekHtml}</div><div class="week-events">${eventHtml}</div></div></section><div class="ost-home-admin-footer"><a class="ost-home-editor" href="editor.html" aria-label="Redaktion öffnen">✎ Redaktion</a></div>`;
 const q=$('[data-global-search]'),results=$('[data-search-results]');
 let catalog=[];contentCatalog().then(c=>{catalog=c;if(q.value.trim())drawSearch()}).catch(()=>{});
 const drawSearch=()=>{const term=q.value.trim();if(!term){results.classList.add('hidden');results.innerHTML='';return}const hits=catalogSearch(catalog,term);const groups=[...new Set(hits.map(x=>x.type))];results.innerHTML=groups.map(type=>`<div class="ost-search-group"><h3>${esc(LINK_TYPES[type][0])}</h3>${hits.filter(x=>x.type===type).map(x=>`<a href="${esc(x.href)}"><span><strong>${esc(x.title)}</strong></span><b>›</b></a>`).join('')}</div>`).join('')||'<div class="empty compact">Keine Treffer.</div>';results.classList.remove('hidden')};q.oninput=drawSearch;$('[data-search-clear]').onclick=()=>{q.value='';drawSearch();q.focus()};
 $('[data-main]').addEventListener('click',e=>{const n=e.target.closest('[data-news]');if(n){const x=active[+n.dataset.news];if(x)open(x.title,`<section class="overlay-section news-detail"><p>${esc(x.text||'')}</p>${x.link?`<a class="btn primary" href="${esc(x.link)}">Inhalt öffnen →</a>`:''}</section>`,{news:true});}});
}

const MODULE_TYPES={"pharm":{"title":"Pharmakologie","icon":"⚕️","area":"wissen"},"anatomy":{"title":"Anatomie & Physiologie","icon":"🫀","area":"wissen"},"befund":{"title":"Befundwörterbuch","icon":"📖","area":"wissen"},"mpg":{"title":"MPG-Informationen","icon":"🩺","area":"training"},"checklists":{"title":"Checklisten","icon":"📄","area":"training"}};
const MODULE_ICON_OPTIONS=['','⚕️','💉','🫀','🫁','🧠','🩺','📖','📄','🧪','🔬','🧬','⚡','🖥️','🧰','🦠','💧','❤️','🦴','👶'];
function moduleItemIcon(item,slug){
 const saved=String(item?.icon||'').trim();if(saved)return saved;
 const text=String([item?.title,item?.category,item?.summary].filter(Boolean).join(' ')).toLocaleLowerCase('de');
 if(slug==='pharm'){
  if(/analge|schmerz|opioid|paracetamol|ibuprofen|novalgin|morphin/.test(text))return '⚕️';
  if(/adrenalin|noradren|vaso|kreislauf|reanimation/.test(text))return '🫀';
  if(/salbutamol|broncho|asthma|copd|inhal/.test(text))return '🫁';
  if(/insulin|glukose|diabetes|hypoglyk/.test(text))return '🧪';
  if(/antibiot|antiinfek/.test(text))return '🦠';
  if(/sedier|benzodiazep|midazolam|narkose/.test(text))return '💉';
  if(/antiem|übel|erbrechen/.test(text))return '💧';
  return '⚕️';
 }
 if(slug==='anatomy'){
  if(/herz|kreislauf|koronar|gefäß/.test(text))return '🫀';
  if(/lunge|atem|bronch|respira/.test(text))return '🫁';
  if(/gehirn|neuro|nerv/.test(text))return '🧠';
  if(/skelett|fraktur|knochen|muskel/.test(text))return '🦴';
  if(/kind|päd|neonat/.test(text))return '👶';
  if(/stoffwechsel|endo|hormon/.test(text))return '🧬';
  return '🩺';
 }
 if(slug==='mpg'){
  if(/defi|monitor|corpuls/.test(text))return '⚡';
  if(/beatm|ventil|cpap/.test(text))return '🫁';
  if(/absaug/.test(text))return '💧';
  return '🩺';
 }
 if(slug==='checklists')return '📄';
 if(slug==='befund')return '📖';
 return MODULE_TYPES[slug]?.icon||'📘';
}
function moduleIconSelect(current=''){return `<label class="ost-module-field"><span>Symbol</span><select data-mf="icon">${MODULE_ICON_OPTIONS.map(v=>`<option value="${v}" ${String(current||'')===v?'selected':''}>${v||'Kein Symbol'}</option>`).join('')}</select><small>Optionales Symbol für Eintragslisten und Detailansichten.</small></label>`}
function shortModuleExplanation(x){const summary=String(x?.summary||'').trim();if(summary)return summary;const body=String(x?.body||'').replace(/!\[[^\]]*\]\([^)]*\)/g,' ').replace(/\r?\n+/g,' ').trim();if(!body)return '';const first=body.split(/(?<=[.!?])\s+/)[0]||body;const short=first.split(/[:;,-]/)[0]||first;return short.slice(0,90).trim()}
const BODY_MODEL_IMAGE='assets/anatomie-koerpermodell.png';
function pickByPattern(items,pattern){return items.find(x=>pattern.test([x.title,x.category,x.summary,x.synonyms].join(' ')))||null}

function interactiveBodyMap(groups,mode){
 const rects={brain:[42,5,16,13],lungs:[29,22,22,18],heart:[47,28,15,13],abdomen:[37,41,29,18],kidney:[38,50,28,13],movement:[29,59,42,34]};
 const elements=groups.map(g=>{const r=rects[g.id]||[40,40,20,12];return `<button type="button" class="ost-organ-hit hit-${g.id}" data-body-zone="${g.id}" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%" aria-label="${esc(g.label)} öffnen"><span class="ost-organ-indicator"></span><span class="ost-organ-tip">${esc(g.label)}</span></button>`}).join('');
 return `<div class="ost-model-stage ${mode==='diagnosis'?'ost-diagnosis-model':''}"><div class="ost-model-art"><img src="${BODY_MODEL_IMAGE}" alt="Anatomisches Körpermodell, Organe direkt antippen" draggable="false" loading="eager" onerror="this.onerror=null;this.src='assets/koerpermodell-533.svg'">${elements}</div><p class="ost-model-hint">Organ antippen, um Themen zu öffnen</p></div>`;
}
function renderModuleText(raw){
 const lines=String(raw||'').split(/\r?\n/);let list=false;const out=[];
 const inline=text=>esc(text).replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*]+)\*/g,'<em>$1</em>');
 const image=/^!\[([^\]]*)\]\((https:\/\/[^\s)]+|assets\/[a-zA-Z0-9._\/-]+)\)$/;
 for(const line of lines){const t=line.trim(),m=t.match(image);if(m){if(list){out.push('</ul>');list=false}out.push(`<figure class="ost-inline-figure"><img loading="lazy" src="${esc(m[2])}" alt="${esc(m[1])}"><figcaption>${esc(m[1])}</figcaption></figure>`);continue}
 if(t.startsWith('## ')){if(list){out.push('</ul>');list=false}out.push(`<h3>${inline(t.slice(3))}</h3>`);continue}
 if(t.startsWith('### ')){if(list){out.push('</ul>');list=false}out.push(`<h4>${inline(t.slice(4))}</h4>`);continue}
 if(t.startsWith('- ')){if(!list){out.push('<ul>');list=true}out.push(`<li>${inline(t.slice(2))}</li>`);continue}
 if(list){out.push('</ul>');list=false}if(t)out.push(`<p>${inline(t)}</p>`)
 }if(list)out.push('</ul>');return out.join('')||'<p>Noch kein Fachinhalt hinterlegt.</p>'
}
function moduleFields(x){if(x.module==='checklists')return moduleIconSelect(x.icon)+`<label class="ost-module-field"><span>Titel</span><input data-mf="title" value="${esc(x.title||'')}"></label><label class="ost-module-field"><span>Kategorie / Übung</span><input data-mf="category" value="${esc(x.category||'')}"></label><label class="ost-module-field"><span>Kurzbeschreibung</span><textarea data-mf="summary" rows="3">${esc(x.summary||'')}</textarea></label><label class="ost-module-field"><span>Weitere Hinweise (optional)</span><textarea data-mf="body" rows="4">${esc(x.body||'')}</textarea></label><label class="ost-module-field"><span>PDF-Adresse</span><input type="url" data-mf="documentUrl" value="${esc(x.documentUrl||'')}" placeholder="Wird beim Upload automatisch eingetragen"></label><label class="ost-image-upload">📄 PDF hochladen<input type="file" data-module-upload="pdf" accept="application/pdf,.pdf"></label>`;return moduleIconSelect(x.icon)+['title','category','summary','body','image','imageCaption','sources','synonyms','reviewOwner','reviewDue'].map(k=>{const label={title:'Titel',category:'Kategorie',summary:'Kurzbeschreibung',body:'Fachinhalt / Lernnotizen',image:'Titelbild (URL oder Bildpfad)',imageCaption:'Bildunterschrift / Alternativtext',sources:'Quellen / Hersteller- und Handbuchlinks (URLs)',synonyms:'Suchbegriffe / Synonyme (mit Komma getrennt)',reviewOwner:'Fachliche Prüfung durch',reviewDue:'Nächste Prüfung (JJJJ-MM-TT)'}[k];if(k==='body')return `<label class="ost-module-field"><span>${label}</span><div class="ost-rich-toolbar"><button type="button" data-rich="heading">Überschrift</button><button type="button" data-rich="bold"><b>Fett</b></button><button type="button" data-rich="italic"><i>Kursiv</i></button><button type="button" data-rich="list">Aufzählung</button><button type="button" data-rich="image">📷 Bild hochladen & einfügen</button></div><textarea class="ost-rich-input" data-mf="body" rows="15" placeholder="Ausführliche Fachtexte …">${esc(x.body||'')}</textarea><small>Absätze, ## Überschrift, **fett**, *kursiv*, - Listen. Bilder können direkt im Text eingefügt werden.</small><label class="ost-image-upload ost-hidden-upload">Bild in den Text hochladen<input type="file" data-module-upload="inline" accept="image/png,image/jpeg,image/webp"></label></label>`;return `<label class="ost-module-field"><span>${label}</span>${['sources','summary'].includes(k)?`<textarea data-mf="${k}" rows="3">${esc(x[k]||'')}</textarea>`:`<input data-mf="${k}" value="${esc(x[k]||'')}">`}${k==='image'?'<label class="ost-image-upload">Titelbild hochladen<input type="file" data-module-upload="cover" accept="image/png,image/jpeg,image/webp"></label>':''}</label>`}).join('')}

async function modulePage(){
 const slug=new URLSearchParams(location.search).get('bereich')||'pharm', meta=MODULE_TYPES[slug];if(!meta){$('[data-main]').innerHTML='<p>Bereich nicht gefunden.</p>';return}
 const all=await get('knowledgeModules'),items=(Array.isArray(all)?all:[]).filter(x=>x.module===slug&&x.status!=='draft');
 const q=new URLSearchParams(location.search).get('id'),current=items.find(x=>x.id===q);
 if(slug==='befund'){
 const base=`<section class="page-banner"><h1>Befundwörterbuch</h1><p>Fachbegriffe und Abkürzungen auf einen Blick.</p></section>`;
 $('[data-main]').innerHTML=base+`<div class="ost-module-toolbar"><input type="search" data-befund-search placeholder="Abkürzung oder Begriff suchen …" aria-label="Befundwörterbuch durchsuchen"></div><div class="ost-dictionary-wrap"><table class="ost-dictionary"><thead><tr><th>Begriff / Abkürzung</th><th>Erklärung</th></tr></thead><tbody data-befund-rows></tbody></table></div>`;
 const draw=()=>{const term=normalizedSearch($('[data-befund-search]').value);const matched=items.filter(x=>normalizedSearch([x.title,x.summary,x.body,x.synonyms].join(' ')).includes(term)).sort((a,b)=>String(a.title).localeCompare(String(b.title),'de',{sensitivity:'base'}));$('[data-befund-rows]').innerHTML=matched.map(x=>`<tr><th scope="row">${esc(x.title)}</th><td>${esc(shortModuleExplanation(x)||'–')}</td></tr>`).join('')||'<tr><td colspan="2">Keine Einträge gefunden.</td></tr>'};$('[data-befund-search]').addEventListener('input',draw);draw();return;
 }
 if(slug==='checklists'){
  const base=`<section class="page-banner"><h1>Checklisten</h1></section>`;
  $('[data-main]').innerHTML=base+`<div class="ost-module-toolbar"><input type="search" data-checklist-search placeholder="Checkliste suchen …" aria-label="Checklisten durchsuchen"></div><div class="ost-checklist-list" data-checklist-list></div>`;
  const draw=()=>{const term=normalizedSearch($('[data-checklist-search]').value);const hits=items.filter(x=>normalizedSearch([x.title,x.category,x.summary,x.body].join(' ')).includes(term)).sort((a,b)=>String(a.title).localeCompare(String(b.title),'de'));$('[data-checklist-list]').innerHTML=hits.map(x=>`<article class="ost-checklist-card"><span class="ost-checklist-icon" aria-hidden="true">${ostIcon('checklist')}</span><div class="ost-checklist-info"><h2>${esc(x.title)}</h2>${x.category?`<div class="ost-checklist-category">${esc(x.category)}</div>`:''}${x.summary?`<p>${esc(x.summary)}</p>`:''}${x.body?`<div class="ost-checklist-body">${renderModuleText(x.body)}</div>`:''}</div>${x.documentUrl&&/^https:\/\/[^\s"<>]+$/i.test(x.documentUrl)?`<a class="ost-checklist-download" href="${esc(x.documentUrl)}" target="_blank" rel="noopener noreferrer" download>PDF öffnen <span aria-hidden="true">↗</span></a>`:'<span class="ost-checklist-missing">Noch kein PDF</span>'}</article>`).join('')||'<p class="empty">Noch keine Checklisten vorhanden.</p>'};$('[data-checklist-search]').oninput=draw;draw();return;
 }
 const base=`<section class="page-banner"><h1>${esc(meta.title)}</h1></section>`;
 if(current){const itemIcon=moduleItemIcon(current,slug);$('[data-main]').innerHTML=base+`<article class="ost-module-detail"><div class="ost-module-detail-head"><span class="ost-module-symbol">${esc(itemIcon)}</span><div><div class="ost-module-kicker">${esc(current.category||meta.title)}</div><h2>${esc(current.title)}</h2></div></div>${current.summary?`<p class="ost-module-lead">${esc(current.summary)}</p>`:''}${current.image&&/^(https:\/\/[^\s]+|assets\/[a-zA-Z0-9._\/-]+\.(svg|png|webp|jpg|jpeg))$/i.test(current.image)?`<figure class="ost-figure"><img class="ost-anatomy-figure" src="${esc(current.image)}" alt="${esc(current.imageCaption||'Lernabbildung: '+current.title)}" loading="lazy"><figcaption>${esc(current.imageCaption||'Schematische Lernabbildung')}</figcaption></figure>`:''}<div class="ost-module-body">${renderModuleText(current.body)}</div>${current.sources?`<section class="ost-module-sources"><h3>Quellen</h3><p>${esc(current.sources).replace(/\n/g,'<br>')}</p></section>`:''}<p class="diag-hint">Inhalte vor klinischer Anwendung anhand freigegebener lokaler Vorgaben prüfen.${current.reviewDue?' Nächste Prüfung: '+esc(current.reviewDue):''}</p></article>`;const cat=await contentCatalog();$('[data-main]').insertAdjacentHTML('beforeend',relatedHtml(current,cat));return}
 if(slug==='anatomy'){
  const groups=[
   {id:'brain',label:'Gehirn & Nervensystem',icon:'🧠',pattern:/gehirn|nerven|neuro|sinne/i,desc:'Gehirn, Nerven und Signalverarbeitung'},
   {id:'lungs',label:'Atmungssystem',icon:'🫁',pattern:/atmung|lunge|gasaustausch|respira/i,desc:'Lunge, Ventilation und Gasaustausch'},
   {id:'heart',label:'Herz & Kreislauf',icon:'🫀',pattern:/herz|kreislauf|gefäß|blut/i,desc:'Herz, Kreislauf und Versorgung'},
   {id:'abdomen',label:'Abdomen & Verdauung',icon:'🩺',pattern:/verdau|abdomen|leber|magen|darm|stoffwechsel/i,desc:'Organe, Verdauung und Stoffwechsel'},
   {id:'kidney',label:'Niere & Harnsystem',icon:'💧',pattern:/niere|harn|ausscheid/i,desc:'Filterung, Elektrolyte und Wasserhaushalt'},
   {id:'movement',label:'Bewegungsapparat',icon:'🦴',pattern:/skelett|muskel|knochen|bewegung/i,desc:'Muskeln, Knochen und Gelenke'}
  ];
  const map=interactiveBodyMap(groups,'anatomy');
  $('[data-main]').innerHTML=`<div class="ost-model-screen"><label class="ost-model-search"><span>⌕</span><input type="search" data-module-search placeholder="Anatomie durchsuchen …" aria-label="Anatomie durchsuchen"></label><div class="ost-model-intro">Tippe direkt auf ein Organ oder eine Körperregion</div>${map}<section class="ost-model-results" data-module-list hidden></section></div>`;
  const showArticle=(x,origin)=>{
   const backText=origin?`Zurück zu ${esc(origin.label)}`:'Zurück zum Körpermodell';
   open(x.title,`<article class="ost-article-sheet"><button type="button" class="ost-anat-back" data-anat-back aria-label="${backText}"><span aria-hidden="true">←</span> ${backText}</button>${x.image?`<img class="ost-sheet-figure" src="${esc(x.image)}" alt="${esc(x.imageCaption||x.title)}" onerror="this.remove()">`:''}<div class="ost-module-body">${renderModuleText(x.body)}</div>${x.sources?`<aside class="ost-sheet-source"><strong>Quellen</strong><p>${esc(x.sources)}</p></aside>`:''}<p class="diag-hint">Fachliche Inhalte anhand lokaler Vorgaben prüfen.</p></article>`,{sheet:true});
   $('[data-overlay-body]').onclick=e=>{if(e.target.closest('[data-anat-back]')){if(origin)showGroup(origin);else closeOverlay()}};
  };
  const showGroup=g=>{const matched=items.filter(x=>g.pattern.test([x.title,x.category,x.summary,x.synonyms].join(' ')));const render=matched.length?matched.map(x=>`<button type="button" class="ost-sheet-row" data-anat-item="${esc(x.id)}"><span class="ost-sheet-row-icon">${g.icon}</span><span><strong>${esc(x.title)}</strong></span><b>›</b></button>`).join(''):'<p>Für diese Körperregion ist noch kein Artikel hinterlegt.</p>';
   open(g.label,`<div class="ost-sheet-rows ost-anatomy-only-list">${render}</div>`,{sheet:true,simpleAnatomy:true});$('[data-overlay-body]').onclick=e=>{const b=e.target.closest('[data-anat-item]');if(b){const x=items.find(x=>x.id===b.dataset.anatItem);if(x)showArticle(x,g)}};
  };
  $('[data-main]').onclick=e=>{const b=e.target.closest('[data-body-zone]');if(b){const g=groups.find(x=>x.id===b.dataset.bodyZone);if(g)showGroup(g)}};
  $('[data-module-search]').oninput=e=>{const q=normalizedSearch(e.target.value.trim()),box=$('[data-module-list]');if(!q){box.hidden=true;box.innerHTML='';return}const hits=items.filter(x=>normalizedSearch([x.title,x.category,x.summary,x.body,x.synonyms].join(' ')).includes(q));box.hidden=false;box.innerHTML=`<h3>Suchergebnisse</h3>${hits.map(x=>`<button class="ost-sheet-row" data-search-anat="${esc(x.id)}"><span>📘</span><strong>${esc(x.title)}</strong><b>›</b></button>`).join('')||'<p>Keine Treffer</p>'}`;box.onclick=event=>{const b=event.target.closest('[data-search-anat]');if(b){const item=items.find(x=>x.id===b.dataset.searchAnat);if(item)showArticle(item)}}};
  return;
 }
 $('[data-main]').innerHTML=base+`<div class="ost-module-toolbar"><input type="search" data-module-search placeholder="${esc(meta.title)} durchsuchen …" aria-label="Themen durchsuchen"></div><div class="ost-link-directory ost-tonal-directory" data-module-list></div><p class="diag-hint">Einträge werden in der Redaktion gepflegt. Technische Angaben und Anleitungen bitte anhand der Herstellerdokumentation prüfen.</p>`;
 const draw=()=>{const term=normalizedSearch($('[data-module-search]').value);const hits=items.filter(x=>normalizedSearch([x.title,x.category,x.summary,x.body,x.synonyms].join(' ')).includes(term));$('[data-module-list]').innerHTML=hits.map(x=>`<a href="themen.html?bereich=${encodeURIComponent(slug)}&id=${encodeURIComponent(x.id)}"><span>${x.icon?esc(x.icon):moduleItemIcon(x,slug)}</span><div><strong>${esc(x.title)}</strong>${x.summary?`<small>${esc(x.summary)}</small>`:''}</div><b>›</b></a>`).join('')||'<div class="empty">Noch keine Einträge in diesem Bereich. Inhalte können in der Redaktion ergänzt werden.</div>'};$('[data-module-search]').oninput=draw;draw();
}
let activeModuleSetter=null;
async function moduleEditor(box,initialModule='pharm'){
 const records=await get('knowledgeModules');let items=Array.isArray(records)?clone(records):[];let active=initialModule;let selectedId='';activeModuleSetter=(slug)=>{active=slug;selectedId='';render()};
 const render=()=>{box.innerHTML=`<div class="editor-toolbar"><div><h2>Wissensbereiche</h2><p>Fachartikel, Begriffe, MPG-Geräte und Checklisten pflegen. Bei Geräten: Modell im Titel, Hersteller in Kategorie, Spezifikationen und Anleitungshinweise im Fachinhalt; Handbuch-Links unter Quellen.</p></div><div class="ost-editor-module-actions"><button type="button" class="btn" data-mod-seed>Neue Lerntexte übernehmen</button><button type="button" class="btn primary" data-mod-new>+ Eintrag</button></div></div><div data-mod-note role="status"></div><div class="ost-entry-picker"><label>Eintrag auswählen<select data-mod-select><option value="">– Bitte auswählen –</option>${items.filter(x=>x.module===active).sort((a,b)=>String(a.title).localeCompare(String(b.title),"de")).map(x=>`<option value="${esc(x.id)}" ${selectedId===x.id?"selected":""}>${esc(x.title)}</option>`).join("")}</select></label></div><div class="ost-module-admin-list">${items.filter(x=>x.module===active&&x.id===selectedId).map(x=>`<details open data-mod-id="${esc(x.id)}"><summary><strong>${esc(x.title||'Ohne Titel')}</strong><span>${x.status==='draft'?'Entwurf':'Öffentlich'}</span></summary><div class="ost-module-fields">${moduleFields(x)}<label class="ost-module-field"><span>Status</span><select data-mf="status"><option value="published" ${x.status!=='draft'?'selected':''}>Veröffentlicht</option><option value="draft" ${x.status==='draft'?'selected':''}>Entwurf</option></select></label><div class="ost-module-admin-buttons"><button type="button" class="btn primary" data-mod-save>Speichern</button><button type="button" class="btn danger" data-mod-delete>Eintrag löschen</button></div></div></details>`).join('')||'<div class="empty">Noch keine Einträge. Mit „+ Eintrag“ starten.</div>'}</div><p class="diag-hint">Die Themenmodule teilen sich eine Datensammlung. Ältere Pilotdaten bleiben zur sicheren Wiederherstellung gespeichert. Entwürfe sind kein Zugriffsschutz.</p>`};
 const persist=async()=>{const ok=await save('knowledgeModules',items);const el=box.querySelector('[data-mod-note]');if(el)el.textContent=ok?'Mit dem Worker synchronisiert.':'Lokal gespeichert – Worker-Synchronisierung nicht bestätigt.';return ok};
 box.addEventListener('change',async e=>{if(e.target.matches("[data-mod-select]")){selectedId=e.target.value;render();return;}const input=e.target.closest('[data-module-upload]');if(!input?.files?.[0])return;const file=input.files[0];if(file.size>10*1024*1024){alert('Bitte Dateien unter 10 MB wählen.');return}if(input.dataset.moduleUpload==='pdf'&&(file.type!=='application/pdf'||!file.name.toLowerCase().endsWith('.pdf'))){alert('Bitte eine PDF-Datei wählen.');return}const card=input.closest('[data-mod-id]');if(!card)return;const note=card.querySelector('.ost-module-upload-note')||document.createElement('div');note.className='ost-module-upload-note';input.parentElement.after(note);note.textContent='Bild wird hochgeladen …';try{const url=await uploadMedia(file);if(input.dataset.moduleUpload==='pdf'){card.querySelector('[data-mf="documentUrl"]').value=url}else if(input.dataset.moduleUpload==='cover'){card.querySelector('[data-mf="image"]').value=url}else{const field=card.querySelector('[data-mf="body"]');const pos=field.selectionStart??field.value.length;field.setRangeText(`\n\n![${file.name.replace(/\.[^.]+$/,'')}](${url})\n\n`,pos,pos,'end');field.focus()}note.textContent='Hochgeladen – bitte anschließend „Speichern“ wählen.'}catch(err){note.textContent='Upload fehlgeschlagen: '+err.message}input.value=''});
 box.addEventListener('click',e=>{const btn=e.target.closest('[data-rich]');if(!btn)return;const card=btn.closest('[data-mod-id]'),area=card?.querySelector('[data-mf="body"]');if(!area)return;const a=area.selectionStart,b=area.selectionEnd,v=area.value,sel=v.slice(a,b);if(btn.dataset.rich==="image"){card?.querySelector('[data-module-upload="inline"]')?.click();return;}let replacement='';switch(btn.dataset.rich){case 'heading':replacement='## '+(sel||'Neue Überschrift');break;case 'bold':replacement='**'+(sel||'Wichtiger Begriff')+'**';break;case 'italic':replacement='*'+(sel||'Hervorhebung')+'*';break;case 'list':replacement='- '+(sel||'Listenpunkt');break;case 'image':card?.querySelector('[data-module-upload="inline"]')?.click();return;}area.setRangeText(replacement,a,b,'end');area.focus()});
 box.onclick=async e=>{const tab=e.target.closest('[data-mod-tab]');if(tab){active=tab.dataset.modTab;render();return}if(e.target.closest('[data-mod-seed]')){const seeds=window.OST1020_MODULE_SEED||[];const updates=seeds.filter(seed=>seed.module===active&&items.some(x=>x.id===seed.id&&(x.body!==seed.body||x.image!==seed.image)));if(!updates.length){alert('Für diese Rubrik liegen keine neueren Lerntexte vor.');return}if(!confirm(updates.length+' bestehende Einträge mit erweiterten Lerntexten und Abbildungen aus der Projektversion aktualisieren? Eigene Texte in diesen Einträgen werden ersetzt. Vorher ein Backup der Produktivdaten erstellen.'))return;items=items.map(x=>{const seed=updates.find(y=>y.id===x.id);return seed?{...x,body:seed.body,image:seed.image||x.image,imageCaption:seed.imageCaption||x.imageCaption,sources:x.sources||seed.sources}:x});await persist();render();return}if(e.target.closest('[data-mod-new]')){const id='wissen-'+Date.now().toString(36);items.unshift({id,module:active,title:'Neuer Eintrag',category:'',summary:'',body:'',icon:'',image:'',imageCaption:'',sources:'',synonyms:'',reviewOwner:'',reviewDue:'',status:'draft',related:[]});selectedId=id;render();const el=box.querySelector('[data-mod-id="'+id+'"]');if(el)el.open=true;return}const card=e.target.closest('[data-mod-id]');if(!card)return;const x=items.find(i=>i.id===card.dataset.modId);if(!x)return;if(e.target.closest('[data-mod-delete]')){if(!confirm('Eintrag endgültig löschen?'))return;items=items.filter(i=>i!==x);await persist();render();return}if(e.target.closest('[data-mod-save]')){card.querySelectorAll('[data-mf]').forEach(el=>x[el.dataset.mf]=el.value);if(!x.title.trim()){alert('Titel fehlt.');return}await persist();render()}};
 render();
}

async function wissenPage(){
 const links=[['notes','Algorithmen & Merkhilfen','algorithmen.html','Strukturierte Abläufe und Untersuchungsschemata'],['guideline','Leitlinien / Guidelines','leitlinien.html','Quellen, Fachgesellschaften und Empfehlungen'],['book','Literatursammlung','literatur.html','Artikel, Lehrbücher und Forschung'],['search','Diagnostik','differential.html','Leitsymptome und Krankheitsbilder'],['pill','Pharmakologie','themen.html?bereich=pharm','Übersicht und Nachschlagen'],['heart','Anatomie & Physiologie','themen.html?bereich=anatomy','Übersicht und Nachschlagen'],['dictionary','Befundwörterbuch','themen.html?bereich=befund','Fachbegriffe und Abkürzungen']];
 $('[data-main]').innerHTML=`<h1 class="ost-visually-hidden">Wissen</h1><div class="ost-link-directory ost-tonal-directory">${links.map(([ico,title,url,sub])=>`<a href="${url}"><span>${ostIcon(ico)}</span><div><span class="directory-item-name">${title}</span></div><b>›</b></a>`).join('')}</div>`;
}
async function trainingPage(){
 const links=[['training','Skilltraining','skilltraining.html','Fertigkeiten, Materialien und Abläufe'],['device','MPG-Informationen','themen.html?bereich=mpg','Geräte, Spezifikationen und Bedienungsanleitungen'],['checklist','Checklisten','themen.html?bereich=checklists','PDF-Checklisten und Übungsunterlagen'],['screen','Simulations Guide','simulation.html','Quick Guide für den Simulator'],['question','FAQ zu Simulationstrainings','simulation-faq.html','Häufige Fragen zur Vorbereitung und Durchführung']];
 $('[data-main]').innerHTML=`<h1 class="ost-visually-hidden">Training</h1><div class="ost-link-directory ost-tonal-directory">${links.map(([ico,title,url,sub])=>`<a href="${url}"><span>${ostIcon(ico)}</span><div><span class="directory-item-name">${title}</span></div><b>›</b></a>`).join('')}</div>`;
}
async function guidelinesPage(){
 const a=await get('algorithms');const refs=a.filter(x=>x.sourceUrl&&/^https:\/\//i.test(x.sourceUrl));
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Leitlinien / Guidelines</h1><p>Quellen und weiterführende Leitlinien aus dem bestehenden Algorithmenbestand.</p></section><div class="ost-link-directory ost-tonal-directory">${refs.map(x=>`<a href="${esc(x.sourceUrl)}" target="_blank" rel="noopener noreferrer"><span>📖</span><div><strong>${esc(x.title)}</strong></div><b>↗</b></a>`).join('')||'<p class="empty">Noch keine verlinkten Leitlinien. Unter Redaktion → Algorithmen & Schemata können Quellen-URLs hinterlegt werden.</p>'}</div><p class="diag-hint">Die Links sind externe Quellen. Gültigkeit und Aktualität bitte prüfen.</p>`;
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
 $('[data-main]').onclick=e=>{const c=e.target.closest('[data-cat]');if(c){$$('[data-cat]').forEach(x=>x.classList.toggle('active',x===c));draw(c.dataset.cat);return}const n=e.target.closest('[data-news]');if(n){const x=shown[+n.dataset.news];open(x.title,`<section class="overlay-section news-detail"><p>${esc(x.text||'Noch keine Beschreibung hinterlegt.')}</p>${x.link?`<a class="btn primary" href="${esc(x.link)}">Weiterlesen</a>`:''}</section>`,{news:true})}};
 draw('all')
}
async function literature(){
 const arts=await articles();
 const defs=[['Reanimation','❤️',['Reanimation','Kreislaufstillstand']],['Simulation & Debriefing','👥',['Simulation','Debriefing','Ausbildung']],['CRM & Human Factors','🧑‍🤝‍🧑',['CRM','Human Factors','Entscheidungsfindung']],['Neurologie / Schlaganfall','🧠',['Neurologie','Schlaganfall']],['Qualität & Sicherheit','🛡️',['Qualität','Patientensicherheit','System']],['Critical Care','🫁',['Critical Care','Diagnostik']],['Pharmakologie & Schmerz','⚕️',['Pharmakologie','Schmerz']],['HEMS & Präklinik','🚁',['HEMS','Versorgung','Österreich']]];
 const now=new Date();
 const fresh=a=>{const raw=a.added||a.activeSince||'';if(!raw)return false;const d=new Date(raw+'T12:00:00');return !Number.isNaN(d.getTime())&&((now-d)/86400000)<=30&&((now-d)/86400000)>=0};
 const freshItems=arts.filter(fresh);
 const groups=[{id:'new',title:'Neuerscheinungen',icon:'✨',items:freshItems,new:true},...defs.map((x,i)=>({id:'g'+i,title:x[0],icon:x[1],items:arts.filter(a=>arr(a.topics).some(t=>x[2].includes(t)))}))].filter(g=>g.items.length);
 $('[data-main]').innerHTML=`<section class="page-banner lit-banner lit-clean"><div class="page-banner-row"><h1>Literatursammlung</h1></div><div class="toolbar lit-toolbar"><div class="searchbar literature-search"><input data-q placeholder="Literatur suchen …"><select data-f><option value="all">Alle Kategorien</option>${groups.map(g=>`<option value="${g.id}">${esc(g.title)}</option>`).join('')}</select></div></div></section><section class="lit-list lit-list-clean" data-list></section>`;
 function article(a){
  const link=a.freeUrl||a.publisherUrl||'';
  const auth=Array.isArray(a.authors)?a.authors.join(', '):String(a.authors||'');
  return `<article class="lit-article-card"><div class="doc-icon">📄</div><div class="lit-article-copy"><h4>${esc(a.title)}</h4><p>${esc(auth)}${a.journal?` · ${esc(a.journal)}`:''}${a.year?` · ${esc(a.year)}`:''}</p><div class="lit-meta"><span class="meta-chip">${esc(a.type||'Artikel')}</span>${a.level?`<span class="meta-chip">${esc(String(a.level).toUpperCase())}</span>`:''}${a.access?`<span class="meta-chip">${esc(a.access==='oa'?'Open Access':a.access==='free'?'Freie Version':'Paywall')}</span>`:''}</div></div>${link?`<a class="lit-link-arrow" href="${esc(link)}" target="_blank" rel="noopener" aria-label="Artikel öffnen"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg></a>`:''}</article>`
 }
 function draw(){
  const q=$('[data-q]').value.toLowerCase().trim();
  const fid=$('[data-f]').value;
  const visible=groups.filter(g=>fid==='all'||g.id===fid).map(g=>{
   const items=g.items.filter(a=>!q||[a.title,Array.isArray(a.authors)?a.authors.join(' '):a.authors,a.journal,arr(a.topics).join(' ')].join(' ').toLowerCase().includes(q));
   if(!items.length)return'';
   return `<article class="lit-topic ${g.new?'lit-topic-fresh':''}" data-group="${g.id}"><button class="lit-topic-head" data-toggle="${g.id}"><span class="lit-topic-icon">${g.icon}</span><span class="lit-topic-copy"><h3>${esc(g.title)}</h3><p>${items.length} Artikel${g.new?' · letzte 30 Tage':''}</p></span><span class="lit-chevron" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7 5 5-5 5"/></svg></span></button><div class="lit-articles hidden">${items.map(article).join('')}</div></article>`
  }).join('');
  $('[data-list]').innerHTML=visible||'<div class="empty">Keine Treffer</div>';
 }
 $('[data-q]').oninput=draw;
 $('[data-f]').onchange=draw;
 $('[data-main]').onclick=e=>{
  const t=e.target.closest('[data-toggle]');
  if(t){
   const box=t.closest('.lit-topic');
   const body=$('.lit-articles',box);
   box.classList.toggle('expanded');
   body.classList.toggle('hidden');
  }
 };
 draw();
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
 const params=new URLSearchParams(location.search),id=params.get('id'),idx=params.get('disease'),groupParam=params.get('group');
 const symptom=d.find(x=>x.id===id),causes=symptom?arr(symptom.causes).map(c=>typeof c==='string'?{name:c}:c):[];
 const link=(x,i)=>`differential.html?id=${encodeURIComponent(x.id)}${i===undefined?'':'&disease='+i}`;
 const intro='<p class="diag-hint">Lernmaterial, keine Diagnose- oder Therapieanweisung. Bei Instabilität ABCDE und lokale SOPs priorisieren. Externe Recherchelinks ersetzen keine geprüften Leitlinien.</p>';
 const breadcrumbs=xs=>`<nav class="diag-breadcrumb"><a href="differential.html">Diagnostik</a>${xs.map(it=>`<span>›</span>${it.href?`<a href="${it.href}">${esc(it.name)}</a>`:`<strong>${esc(it.name)}</strong>`}`).join('')}</nav>`;
 const safeUrl=url=>{try{const u=new URL(url);return ['https:','http:'].includes(u.protocol)?u.href:''}catch(e){return ''}};
 const clip=(v,n=170)=>{const t=String(v||'').trim();return t.length>n?`${t.slice(0,n-1).trim()}…`:t};
 const groupMeta={
  'Atemweg':{label:'Atmung & Atemweg',icon:'🫁',sub:'Dyspnoe, Husten, Stridor, obere Atemwege'},
  'Atmung':{label:'Atmung & Atemweg',icon:'🫁',sub:'Dyspnoe, Husten, Stridor, obere Atemwege'},
  'Kreislauf':{label:'Herz & Kreislauf',icon:'❤️',sub:'Thoraxschmerz, Rhythmus, Schock, Synkope'},
  'Neurologie':{label:'Neurologie',icon:'🧠',sub:'Bewusstsein, Ausfälle, Krampf, Schwindel'},
  'Abdomen':{label:'Abdomen & Verdauung',icon:'🩺',sub:'Bauchschmerz, GI-Blutung, Erbrechen, Stuhl'},
  'Stoffwechsel':{label:'Stoffwechsel & Endokrinologie',icon:'💉',sub:'Blutzucker, Elektrolyte, metabolische Krisen'},
  'Infektion':{label:'Infektion & Allgemein',icon:'🦠',sub:'Fieber, Infektzeichen, Allgemeinzustand'},
  'Allgemein / Allergie':{label:'Allergie & Haut',icon:'🌿',sub:'Allergische Reaktion, Hautveränderungen'},
  'Urologie':{label:'Urologie / Gyn / Geburt',icon:'🩸',sub:'Harnwege, gynäkologische und geburtshilfliche Beschwerden'},
  'Geburtshilfe':{label:'Urologie / Gyn / Geburt',icon:'🩸',sub:'Harnwege, gynäkologische und geburtshilfliche Beschwerden'},
  'Trauma':{label:'Trauma & Umwelt',icon:'🩹',sub:'Verletzungen, Blutung, Kälte/Hitze, SHT'},
  'Umwelt':{label:'Trauma & Umwelt',icon:'🩹',sub:'Verletzungen, Blutung, Kälte/Hitze, SHT'},
  'Psychiatrie / Toxikologie':{label:'Psyche & Intoxikation',icon:'🧩',sub:'Angst, Agitation, Intoxikation, Somnolenz'},
  'Pädiatrie':{label:'Pädiatrie',icon:'🧒',sub:'Kinderleitsymptome und Besonderheiten'}
 };
 const order=['Atmung & Atemweg','Herz & Kreislauf','Neurologie','Abdomen & Verdauung','Stoffwechsel & Endokrinologie','Infektion & Allgemein','Allergie & Haut','Urologie / Gyn / Geburt','Trauma & Umwelt','Psyche & Intoxikation','Pädiatrie','Weitere'];
 const resolveGroup=g=>groupMeta[g]||{label:g||'Weitere',icon:'🩺',sub:'Weitere Leitsymptome'};
 const diseaseIcon=name=>{const n=String(name||'').toLocaleLowerCase('de');if(/schlaganfall|blutung|infarkt|meningitis|epilep|krampfanfall|parese|migraene|migräne|schwindel|delir|hirn/.test(n))return '🧠';if(/koronar|kardio|rhythm|tachykard|bradykard|herz|synkope|aorta|perikard|vorhofflimmern|av-block/.test(n))return '❤️';if(/lunge|pneumo|asthma|copd|bronch|embolie|stridor|atem|epiglott|krupp/.test(n))return '🫁';if(/anaphyl|allerg|urtikaria|angioödem|exanthem/.test(n))return '🌿';if(/diabet|gluk|hypokal|hyperkal|hyponatr|elektrolyt|metabol|thyreo/.test(n))return '💉';if(/sepsis|infekt|virus|bakter|fieber|erysipel/.test(n))return '🦠';if(/ileus|abdomen|append|gastro|pankreat|kolik|ulku|divertikel|chole|mesenteri/.test(n))return '🩺';if(/schwanger|präeklam|ektop|abort|plazenta|uterus|ovarial/.test(n))return '🤰';if(/fraktur|trauma|hämatom|verletz|luxation/.test(n))return '🩹';if(/intox|medikament|alkohol|opioid|benzodiazepin/.test(n))return '⚗️';if(/niere|harn|ureter|zystit|pyeloneph/.test(n))return '🩸';return '🩺'};
 const diseaseCard=(c,i)=>`<a class="diag-disease-card diag-disease-compact" href="${link(symptom,i)}"><div class="diag-disease-head"><span class="diag-result-icon">${diseaseIcon(c.name)}</span><span class="diag-disease-title"><strong>${esc(c.name)}</strong></span><b>›</b></div></a>`;
 if(symptom&&idx!==null){
  const c=causes[Number(idx)];if(!c){location.replace(link(symptom));return}
  const parts=[['Pathophysiologie / physiologische Änderung',c.physiology],['Typische Befunde / auffällige Werte',c.findings],['Präklinische Einordnung',c.info],['CAVE / Warnzeichen',c.cave]].filter(y=>y[1]);
  const url=safeUrl(c.sourceUrl);
  const backTarget=link(symptom);
  $('[data-main]').innerHTML=`<article class="diag-detail"><a class="ost-anat-back diag-inline-back" href="${backTarget}"><span aria-hidden="true">←</span> Zur Übersicht</a><h2>${esc(c.name)}</h2><div class="diag-detail-grid">${parts.map(([t,v])=>`<section class="diag-info-section ${t.startsWith('CAVE')?'diag-cave':''}"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`).join('')}</div>${url?`<section class="diag-info-section diag-source-box"><h3>Weiterlesen</h3><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(c.sourceLabel||'Externe Fachliteratur')}</a><p class="diag-hint">Recherchelink – Inhalte und Aktualität der Quelle eigenständig prüfen.</p></section>`:''}</article>${intro}`;return;
 }
 if(symptom){
  $('[data-main]').innerHTML=`${breadcrumbs([{name:symptom.title}])}<div class="diag-summary"><span class="diag-big-icon">${iconFor(symptom)}</span><div><div class="diag-summary-kicker">Leitsymptom / Beschwerdebild</div><h2>${esc(symptom.title)}</h2><p>${causes.length} häufige Krankheitsbilder</p></div></div>${symptom.theory?`<section class="ost-theory-aside"><div class="ost-theory-label">HINTERGRUNDWISSEN</div><p>${esc(symptom.theory)}</p></section>`:''}<section class="diag-assess-grid"><section class="diag-assess-box"><h3>🗣️ Wichtige Fragen</h3><ul>${arr(symptom.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="diag-assess-box diag-alert-box"><h3>⚠️ Red Flags</h3><ul>${arr(symptom.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section></section><h2 class="diag-section-title">Krankheitsbilder</h2><div class="diag-disease-list">${causes.map((c,i)=>diseaseCard(c,i)).join('')}</div>${intro}`;const catalog=await contentCatalog();$('[data-main]').insertAdjacentHTML('beforeend',relatedHtml(symptom,catalog));return;
 }
 const groups=new Map();
 d.forEach(x=>{const meta=resolveGroup(x.group);if(!groups.has(meta.label))groups.set(meta.label,{meta,items:[]});groups.get(meta.label).items.push(x)});
 const sorted=[...groups.values()].sort((a,b)=>(order.indexOf(a.meta.label)<0?999:order.indexOf(a.meta.label))-(order.indexOf(b.meta.label)<0?999:order.indexOf(b.meta.label)));
 if(groupParam){
  const currentGroup=sorted.find(({meta})=>meta.label===groupParam);
  if(!currentGroup){location.replace('differential.html');return}
  $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(currentGroup.meta.label)}</h1></section>${breadcrumbs([{name:currentGroup.meta.label}])}<section class="diag-group-overview">${currentGroup.items.map(item=>`<article class="diag-symptom-shell"><div class="diag-symptom-shell-head"><div><div class="diag-summary-kicker">Leitsymptom</div><h2>${esc(item.title)}</h2><p>${esc(clip(item.theory||currentGroup.meta.sub||'',180))}</p></div><a class="diag-open-link" href="${link(item)}">Übersicht öffnen →</a></div><div class="diag-disease-chiplist">${arr(item.causes).map((raw,i)=>{const c=typeof raw==='string'?{name:raw}:raw;return `<button type="button" class="diag-disease-chip" data-diag-overlay="1" data-symptom="${esc(item.id)}" data-disease="${i}"><span>${diseaseIcon(c.name)}</span><strong>${esc(c.name)}</strong></button>`}).join('')}</div></article>`).join('')}</section>${intro}`;
  $('[data-main]').onclick=e=>{const btn=e.target.closest('[data-diag-overlay]');if(!btn)return;const sx=currentGroup.items.find(x=>x.id===btn.dataset.symptom);const list=sx?arr(sx.causes).map(c=>typeof c==='string'?{name:c}:c):[];const c=list[Number(btn.dataset.disease)];if(!sx||!c)return;const parts=[['Pathophysiologie / physiologische Änderung',c.physiology],['Typische Befunde / auffällige Werte',c.findings],['Präklinische Einordnung',c.info],['CAVE / Warnzeichen',c.cave]].filter(y=>y[1]);const url=safeUrl(c.sourceUrl);open(c.name,`<section class="overlay-section diag-quick-overlay"><div class="diag-kicker">${esc(sx.title)}</div>${parts.map(([t,v])=>`<section class="diag-info-section ${t.startsWith('CAVE')?'diag-cave':''}"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`).join('')||'<p>Für dieses Krankheitsbild ist noch keine Detailbeschreibung hinterlegt.</p>'}${url?`<section class="diag-info-section diag-source-box"><h3>Weiterlesen</h3><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(c.sourceLabel||'Externe Fachliteratur')}</a></section>`:''}<a class="btn primary" href="${link(sx,list.indexOf(c))}">Vollansicht öffnen</a></section>`)};
  return;
 }
 const quickGroups=['Neurologie','Atmung & Atemweg','Herz & Kreislauf','Abdomen & Verdauung','Stoffwechsel & Endokrinologie','Urologie / Gyn / Geburt','Trauma & Umwelt'];
 const bodyGroups=[
  {id:'brain',label:'Neurologie',group:'Neurologie',desc:'Bewusstsein, Ausfälle und neurologische Symptome'},
  {id:'lungs',label:'Atemweg & Atmung',group:'Atmung & Atemweg',desc:'Atmung, Dyspnoe, Husten und Stridor'},
  {id:'heart',label:'Herz & Kreislauf',group:'Herz & Kreislauf',desc:'Thoraxschmerz, Rhythmusstörungen, Schock'},
  {id:'abdomen',label:'Abdomen',group:'Abdomen & Verdauung',desc:'Bauchschmerzen, gastrointestinale Symptome'},
  {id:'kidney',label:'Urologie',group:'Urologie / Gyn / Geburt',desc:'Harnwege und gynäkologische Beschwerden'},
  {id:'movement',label:'Trauma & Umwelt',group:'Trauma & Umwelt',desc:'Verletzungen und traumatische Beschwerden'}
 ].filter(g=>sorted.some(s=>s.meta.label===g.group));
 const diseaseInfo=(x,c,i,g)=>{
   const parts=[['Pathophysiologie',c.physiology],['Typische Befunde',c.findings],['Präklinische Einordnung',c.info],['CAVE',c.cave]].filter(pair=>pair[1]);
   open(c.name,`<div class="ost-disease-info"><button type="button" class="ost-anat-back" data-diag-back><span aria-hidden="true">←</span> Zur Übersicht</button>${parts.map(([title,value])=>`<section class="ost-disease-part ${title==='CAVE'?'ost-disease-cave':''}"><h3>${esc(title)}</h3><p>${esc(value)}</p></section>`).join('')||'<p>Keine Detailbeschreibung vorhanden.</p>'}<p class="diag-hint">Lernmaterial; lokale SOPs und freigegebene Leitlinien sind maßgeblich.</p></div>`,{sheet:true});
   $('[data-overlay-body]').onclick=e=>{if(e.target.closest('[data-diag-back]'))showDiseaseGroup(g)};
 };
 const showDiseaseGroup=g=>{
  const group=sorted.find(entry=>entry.meta.label===g.group);if(!group)return;
  const symptoms=group.items.map(x=>x.title).filter(Boolean);
  const unique=new Set();
  const diseases=group.items.flatMap(x=>arr(x.causes).map((raw,i)=>({x,i,c:typeof raw==='string'?{name:raw}:raw}))).filter(entry=>{const name=String(entry.c.name||'').trim().toLocaleLowerCase('de');if(!name||unique.has(name))return false;unique.add(name);return true});
  open(g.label,`<section class="ost-diag-symptom-overview"><h3>Typische Symptome</h3><div class="ost-diag-symptom-chips">${symptoms.map(name=>`<span>${esc(name)}</span>`).join('')}</div></section><h3 class="ost-sheet-subheading">Krankheitsbilder</h3><div class="ost-diag-condition-list">${diseases.map(entry=>`<button class="ost-sheet-row" data-diag-item="${esc(entry.x.id)}" data-diag-index="${entry.i}"><span class="ost-sheet-row-icon">${diseaseIcon(entry.c.name)}</span><span><strong>${esc(entry.c.name)}</strong></span><b>›</b></button>`).join('')}</div>`,{sheet:true});
  $('[data-overlay-body]').onclick=e=>{const b=e.target.closest('[data-diag-item]');if(!b)return;const x=group.items.find(v=>v.id===b.dataset.diagItem);if(!x)return;const c=arr(x.causes)[Number(b.dataset.diagIndex)];if(c)diseaseInfo(x,typeof c==='string'?{name:c}:c,Number(b.dataset.diagIndex),g)};
 };
 $('[data-main]').innerHTML=`<div class="ost-model-screen"><label class="ost-model-search"><span>⌕</span><input type="search" data-diag-search placeholder="Diagnostik durchsuchen …" aria-label="Diagnostik durchsuchen"></label><div class="ost-model-intro">Tippe direkt auf eine Körperregion</div>${interactiveBodyMap(bodyGroups,'diagnosis')}<section class="ost-model-results" data-diag-search-results hidden></section></div>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-body-zone]');if(b){const g=bodyGroups.find(x=>x.id===b.dataset.bodyZone);if(g)showDiseaseGroup(g)}};
 const input=$('[data-diag-search]'),results=$('[data-diag-search-results]');
 input.oninput=()=>{const q=normalizedSearch(input.value.trim());results.hidden=!q;if(!q){results.innerHTML='';return}const found=[];d.forEach(x=>{if(normalizedSearch(x.title).includes(q))found.push({x,i:null});arr(x.causes).forEach((r,i)=>{const c=typeof r==='string'?{name:r}:r;if(normalizedSearch(c.name).includes(q))found.push({x,i,c})})});results.innerHTML=`<h3>Suchergebnisse</h3>${found.slice(0,80).map(f=>`<button class="ost-sheet-row" data-search-diag="${esc(f.x.id)}" data-index="${f.i===null?'':f.i}"><span>🩺</span><strong>${esc(f.c?f.c.name:f.x.title)}</strong><b>›</b></button>`).join('')||'<p>Keine Treffer</p>'}`;results.onclick=e=>{const b=e.target.closest('[data-search-diag]');if(!b)return;const x=d.find(x=>x.id===b.dataset.searchDiag);if(!x)return;if(b.dataset.index!==''){const c=arr(x.causes)[Number(b.dataset.index)];const g=bodyGroups.find(g=>resolveGroup(x.group).label===g.group);if(c)diseaseInfo(x,typeof c==='string'?{name:c}:c,Number(b.dataset.index),g||{group:resolveGroup(x.group).label,label:resolveGroup(x.group).label})}else{const g=bodyGroups.find(g=>resolveGroup(x.group).label===g.group);if(g)showDiseaseGroup(g);else open(x.title,`<div class="ost-sheet-info">${esc(x.theory||'Leitsymptom')}</div>`,{sheet:true})}}};

}

async function simpleCards(name,title,mode){
 const d=await get(name);const emo={lungs:'🫁',heart:'❤️',brain:'🧠',bolt:'⚡',abdomen:'🩺',syringe:'💉',clock:'🕒',bandage:'🩹',stethoscope:'🩺',search:'🔎'};
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>${title}</h1></section><div class="list ost-tonal-list">${d.map((x,i)=>`<button class="row-card" data-i="${i}"><span class="row-icon">${mode==='diff'?(emo[x.icon]||x.icon||'🩺'):esc(x.icon|| (mode==='change'?'🔄':mode==='guide'?'🖥️':'📋'))}</span><span><strong>${esc(x.title||x.name)}</strong></span><span class="arrow">›</span></button>`).join('')}</div>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-i]');if(!b)return;const x=d[+b.dataset.i];let html='';if(mode==='diff')html=`<section class="overlay-section"><h3>Mögliche Ursachen</h3>${arr(x.causes).map(v=>`<button class="overlay-row"><span class="oi">🔎</span><span><strong>${esc(v)}</strong></span><span class="arrow">›</span></button>`).join('')}</section><section class="overlay-section"><h3>Wichtige Fragen</h3><ul>${arr(x.questions).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section warning"><h3>Red Flags</h3><ul>${arr(x.redflags).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else if(mode==='alg')html=`<section class="overlay-section"><h3>Ablauf</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='change')html=`<section class="overlay-section"><h3>Bisher</h3><div class="news-text">${esc(x.old||'')}</div></section><section class="overlay-section"><h3>Neu</h3><div class="news-text">${esc(x.new||'')}</div></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source||'')}</div></section>`;else if(mode==='guide')html=`<section class="overlay-section"><h3>Schritte</h3><ul>${arr(x.steps).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></section>`;else html=`<section class="overlay-section"><div class="news-text">${esc(x.note||x.description||'')}</div></section>`;open(x.title||x.name,html)}
}

async function algorithmsPage(){
 const d=await get('algorithms');
 const params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){
   const steps=arr(x.steps),flow=steps.map((st,i)=>{
    const schema=x.category?.startsWith('Schema');
    const acronym=schema?String(st).match(/^\s*([A-ZÄÖÜ]{1,3})\s*[–—-]\s*/):null;
    const marker=schema&&acronym?acronym[1]:['•','◆','✦','•','◆','✦'][i%6];
    const phrase=acronym?String(st).slice(acronym[0].length):String(st);
    const headingMatch=phrase.match(/^([^:：]{2,48}):\s*(.+)$/);
    const formatted=headingMatch?`<strong class="flow-step-heading">${esc(headingMatch[1])}</strong><span class="flow-step-text">${esc(headingMatch[2])}</span>`:`<span class="flow-step-text">${esc(phrase)}</span>`;
    return `<div class="flow-node ost-teaching-step ${schema?'ost-schema-step':'ost-algorithm-step'} tone-${(i%6)+1}"><span class="flow-step-marker" aria-hidden="true">${esc(marker)}</span><div class="flow-step-copy">${formatted}</div></div>${i<steps.length-1?'<div class="flow-arrow ost-teaching-arrow" aria-hidden="true">↓</div>':''}`;
   }).join('');
   const mat=x.materials||{background:[],checklists:[]};
   const safeMedia=url=>{try{const u=new URL(url,location.href);return ['http:','https:'].includes(u.protocol)?u.href:''}catch{return ''}};
   const image=safeMedia(x.imageUrl);
   const materialList=(key,title,items)=>`<section class="algorithm-list-group"><h3>${title}</h3>${arr(items).length?`<ul class="algorithm-link-list">${arr(items).map(m=>{const u=safeMedia(m.url);return `<li><span class="algorithm-list-icon">${key==='background'?'📘':'✅'}</span><div><strong>${esc(m.title||'Material')}</strong>${m.note?`<small>${esc(m.note)}</small>`:''}</div>${u?`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer">Öffnen ↗</a>`:''}</li>`}).join('')}</ul>`:'<p class="algorithm-empty">Noch keine Materialien hinterlegt.</p>'}</section>`;
   $('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page algorithm-detail"><div class="detail-lead"><span class="detail-big-icon">${ostIcon('notes')}</span><div><h2>${esc(x.title)}</h2></div></div>${image?`<figure class="algorithm-figure"><img src="${esc(image)}" alt="${esc(x.title)} – Schema oder Algorithmus" loading="lazy" onerror="this.closest('figure')?.remove()"><figcaption>${esc(x.imageCaption||x.title)}</figcaption></figure>`:''}<section class="${x.category?.startsWith('Schema')?'schema-visual':'flowchart standalone'} ${x.id==='schema-pat'?'schema-triangle':''}">${x.id==='schema-pat'?`<div class="pat-visual"><div>👶<strong>Erscheinungsbild</strong><span>TICLS</span></div><div>🫁<strong>Atemarbeit</strong><span>Geräusche, Einziehungen</span></div><div>🩸<strong>Hautdurchblutung</strong><span>Farbe, Marmorierung</span></div></div>`:''}${flow}</section><section class="guideline-box"><h3>Leitlinie / Quelle</h3><p>${esc(x.source||'Noch keine Quelleninformation hinterlegt.')}</p>${x.sourceUrl?`<a class="btn primary" href="${esc(x.sourceUrl)}" target="_blank" rel="noopener">Original öffnen ↗</a>`:''}</section><section class="detail-section"><h2>Materialien</h2><div class="algorithm-material-lists">${materialList('background','Hintergrundinformationen',mat.background||[])}${materialList('checklists','Checklisten',mat.checklists||[])}</div></section></section>`;
   const catalog=await contentCatalog();$('.algorithm-detail')?.insertAdjacentHTML('beforeend',relatedHtml(x,catalog));
   return
 }
 const types=['Schema','Algorithmus'];
 const tile=x=>`<a class="scheme-tile" href="algorithmen.html?id=${encodeURIComponent(x.id)}"><span class="scheme-icon">${ostIcon(x.category?.startsWith('Schema')?'notes':'checklist')}</span><h2>${esc(x.title)}</h2><span class="scheme-more">Ansehen →</span></a>`;
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Algorithmen & Merkhilfen</h1></section><section class="scheme-section"><h2>Algorithmen</h2><div class="scheme-grid ost-tonal-grid">${d.filter(x=>!x.category?.startsWith('Schema')).map(tile).join('')}</div></section><section class="scheme-section"><h2>Merkhilfen</h2><div class="scheme-grid ost-tonal-grid">${d.filter(x=>x.category?.startsWith('Schema')).map(tile).join('')}</div></section>`;
}
async function meetingsPage(){
 const d=await get('meetings'),p=new URLSearchParams(location.search),item=d.find(x=>x.id===p.get('id'));
 const safe=u=>{try{const a=new URL(u);return ['https:','http:'].includes(a.protocol)?a.href:''}catch{return ''}};
 const asset=f=>{const url=safe(f.url),kind=/\.(png|jpe?g|gif|webp|svg)(?:[?#]|$)/i.test(url)?'image':/\.pdf(?:[?#]|$)/i.test(url)?'pdf':/\.(pptx?|key)(?:[?#]|$)/i.test(url)?'slide':'link';return `<article class="meeting-resource"><span class="meeting-file-icon">${{image:'🖼️',pdf:'📄',slide:'📊',link:'🔗'}[kind]}</span><div><strong>${esc(f.title||'Material')}</strong><p>${esc(f.note||'')}</p>${kind==='image'&&url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${esc(url)}" alt="${esc(f.title||'Grafik')}"></a>`:''}${url?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Material öffnen ↗</a>`:'<small>Kein Link hinterlegt</small>'}</div></article>`};
 if(item){$('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(item.title)}</h1></section><article class="meeting-detail"><div class="meeting-meta"><span>${esc(item.date||'')}</span><span>${esc(item.category||'Dienstbesprechung')}</span>${item.speaker?`<span>Referent:in: ${esc(item.speaker)}</span>`:''}</div><p class="meeting-summary">${esc(item.summary||'Keine Zusammenfassung hinterlegt.')}</p><h2>Vorträge, Grafiken und Links</h2><div class="meeting-resources">${arr(item.files).map(asset).join('')||'<p>Noch keine Materialien.</p>'}</div></article>`;return}
 const unique=[...new Map(d.map(x=>[x.id,x])).values()].sort((a,b)=>String(b.date||'').localeCompare(String(a.date||'')));
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Dienstbesprechungen</h1></section><div class="meeting-grid ost-tonal-grid">${unique.map(x=>`<a class="meeting-tile" href="dienstbesprechungen.html?id=${encodeURIComponent(x.id)}"><span class="meeting-tile-icon">${ostIcon('users')}</span><span class="meeting-date">${esc(x.date||'Dienstbesprechung')} · ${esc(x.category||'Allgemein')}</span><h2>${esc(x.title)}</h2><p>${esc(x.summary||'Materialien ansehen').slice(0,170)}</p><span class="meeting-tile-cta">Materialsammlung ansehen →</span></a>`).join('')||'<div class="empty">Noch keine Dienstbesprechungen hinterlegt. In der Redaktion können Einträge erstellt werden.</div>'}</div>`;
}

async function skills(){
 const d=await get('skills');
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Skilltraining</h1></section><section class="skill-groups">${d.map((g,gi)=>`<div><div class="skill-group-head"><h2>${esc(g.name)}</h2></div><div class="skill-grid ost-tonal-grid">${g.skills.map((sk,si)=>`<button class="skill-card" data-g="${gi}" data-s="${si}"><span class="skill-icon">${ostIcon('training')}</span><span><strong>${esc(sk.name)}</strong></span><span class="arrow">›</span></button>`).join('')}</div></div>`).join('')}</section>`;
 $('[data-main]').onclick=e=>{const b=e.target.closest('[data-g][data-s]');if(!b)return;const sk=d[+b.dataset.g].skills[+b.dataset.s],sections=sk.sections||[{title:'Ablauf',items:arr(sk.items)}];open(sk.name,sections.map((sec,sidx)=>`<section class="overlay-section skill-overlay-section"><div class="skill-overlay-head"><span>${String(sidx+1).padStart(2,'0')}</span><h3>${esc(sec.title)}</h3></div>${arr(sec.items).length?`<ul class="skill-detail-list">${arr(sec.items).map((v,i)=>`<li><span class="skill-point">${i+1}</span><span>${esc(v)}</span></li>`).join('')}</ul>`:'<div class="skill-empty">Noch keine Inhalte</div>'}</section>`).join(''))}
}
async function changesPage(){
 const d=await get('changes'),params=new URLSearchParams(location.search),id=params.get('id'),x=d.find(v=>v.id===id);
 if(x){$('[data-main]').innerHTML=`<section class="page-banner compact-banner"><h1>${esc(x.title)}</h1></section><section class="detail-page change-detail">${x.imageUrl?`<img class="change-image" src="${esc(x.imageUrl)}" alt="${esc(x.title)}">`:''}<div class="before-after"><section class="compare-card old"><span>BISHER</span><h3>Alt</h3><p>${esc(x.old||'')}</p></section><section class="compare-card new"><span>NEU</span><h3>Neu</h3><p>${esc(x.new||'')}</p></section></div><section class="guideline-box"><h3>Quelle / Einordnung</h3><p>${esc(x.source||'')}</p></section><section class="guideline-box change-validity"><h3>Gültigkeit</h3><p>${esc(x.validity||'Noch nicht hinterlegt')}</p></section></section>`;const catalog=await contentCatalog();$('.change-detail')?.insertAdjacentHTML('beforeend',relatedHtml(x,catalog));return}
 $('[data-main]').innerHTML=`<section class="page-banner"><h1>Lehrmeinungsänderungen</h1></section><div class="list ost-tonal-list">${d.map(x=>`<a class="row-card" href="lehrmeinung.html?id=${encodeURIComponent(x.id)}"><span class="row-icon">${ostIcon('changes')}</span><span><strong>${esc(x.title)}</strong></span><span class="arrow">›</span></a>`).join('')}</div>`
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
 function drawEvents(){const now=new Date();const today=dayKey(now.getFullYear(),now.getMonth(),now.getDate());let list=d.filter(e=>selected?e.date===selected:!eventHasEnded(e)).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time));
 const archive=!selected&&!list.length&&d.some(e=>eventHasEnded(e));
 if(archive)list=d.filter(eventHasEnded).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time)).slice(0,8);
 $('[data-list-title]').textContent=selected?new Date(selected+'T12:00:00').toLocaleDateString('de-DE',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}):archive?'Vergangene Termine':'Kommende Termine';$('[data-events]').innerHTML=list.map(e=>{const attendees=attendeeEntries(e.attendees),cap=Number(e.capacity)||10,joined=attendeeJoined(e.attendees,clientId),waitlisted=(Array.isArray(e.waitlist)?e.waitlist:[]).some(a=>a.clientId===clientId),count=attendees.length,pct=Math.min(100,Math.round(count/cap*100)),ended=eventHasEnded(e);return `<article class="event-card"><span class="event-icon">${e.category==='Skilltraining'?'🫁':e.category==='Simulationstraining'?'❤️':'📅'}</span><span><span class="cat-pill">${esc(e.category||'Termin')}</span><h3>${esc(e.title)}</h3><div class="event-meta">🕒 ${esc(e.time)} · 📍 ${esc(e.location)}</div></span><span class="event-right"><div class="participants">👥 ${count}/${cap}</div><div class="progress"><span style="width:${pct}%"></span></div><button class="join-btn ${joined?'joined':''}" data-rsvp="${esc(e.id)}" ${ended?'disabled aria-disabled="true"':''}>${ended?'Termin vorbei':joined?'Teilnahme zurückziehen':waitlisted?'Warteliste verlassen':count>=cap?'Auf Warteliste':'Teilnehmen'}</button></span></article>`}).join('')||'<div class="empty">Keine Termine vorhanden. Weitere Termine können in der Redaktion angelegt werden.</div>'}
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
   $('[data-main]').innerHTML=`<section class="pin-box editor-gate"><div class="pin-symbol">${ostIcon('lock')}</div><h2>Redaktion</h2><p>PIN eingeben, um Inhalte zu bearbeiten.</p><label class="ost-visually-hidden" for="editor-pin">PIN</label><input id="editor-pin" type="password" inputmode="numeric" data-pin placeholder="PIN"><div class="actions"><button class="btn primary" data-unlock>Entsperren</button><a class="btn" href="index.html">Abbrechen</a></div><div class="pin-status" data-pin-status></div></section>`;
   const attempt=async()=>{const v=$('[data-pin]').value.trim();if(!v)return;const st=$('[data-pin-status]');st.textContent='Prüfe …';if(await verifyEditorPin(v)){sessionStorage.setItem('ost1020-editor-pin',v);editor()}else{st.textContent='PIN nicht korrekt.';$('[data-pin]').select()}};
   $('[data-unlock]').onclick=attempt;$('[data-pin]').onkeydown=e=>{if(e.key==='Enter')attempt()};return;
 }
 const tabs=[['abcde','ABCDE'],['algorithms','Algorithmen & Merkhilfen'],['news','Aktuelles'],['meetings','Dienstbesprechungen'],['differential','Diagnostik'],['articles','Literatur'],['changes','Lehrmeinungsänderungen'],['guide','Quick Guide Simulation'],['skills','Skilltraining'],['attendance','Teilnehmerlisten'],['events','Termine'],['modules','Wissensbereiche']];
 const tabIcons={abcde:ostIcon('notes'),algorithms:ostIcon('notes'),news:ostIcon('news'),meetings:ostIcon('users'),differential:ostIcon('search'),articles:ostIcon('book'),changes:ostIcon('changes'),guide:ostIcon('screen'),skills:ostIcon('training'),attendance:ostIcon('group'),events:ostIcon('calendar'),modules:ostIcon('book')};
 $('[data-main]').innerHTML=`<section class="page-banner"><div class="page-banner-row"><h1>Redaktion</h1><button class="editor-shortcut" data-lock-editor>🔒 Sperren</button></div></section><section class="ost-editor-overview" data-editor-overview><div class="ost-editor-overview-head"><h2>Redaktions-Dashboard</h2><small>Live-Übersicht aus vorhandenen Daten</small></div><div class="ost-editor-stats" data-editor-stats><div>Lade Übersicht …</div></div><div class="ost-editor-actions"><button type="button" class="btn" data-open-review>Prüffristen</button><button type="button" class="btn" data-open-feedback>Fehlermeldungen</button><button type="button" class="btn" data-open-history>Versionsverlauf</button><button type="button" class="btn" data-open-backup>Backup</button></div></section><section class="admin-tools"><details><summary>🗄️ Wartung, Versionen &amp; Meldungen</summary><div class="admin-tools-actions"><button class="btn" data-admin-history>Versionsverlauf</button><button class="btn" data-admin-backup>Backup erstellen</button><button class="btn" data-admin-status>Backups anzeigen</button><button class="btn" data-admin-feedback>Meldungen ansehen</button><button class="btn" data-admin-review>Prüffristen</button></div><div class="admin-tools-results" data-admin-results></div></details></section><section class="editor-dashboard"><aside class="editor-nav">${tabs.map((t,i)=>`<button class="editor-nav-btn ${i?'':'active'}" data-tab="${t[0]}"><span>${tabIcons[t[0]]||'📋'}</span><strong>${t[1]}</strong></button>`).join('')}</aside><section class="editor-content" data-edit></section></section>`;
 const maintenance=$('.admin-tools');if(maintenance)$('[data-main]').appendChild(maintenance);
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
 const listEditor=(items,key,placeholder)=>`<div class="repeat-list" data-list-key="${key}">${arr(items).map((v,i)=>`<div class="repeat-row"><input value="${esc(v)}" data-list-item="${i}" placeholder="${placeholder}"><div class="repeat-move-actions"><button type="button" data-move-list="up" aria-label="Punkt nach oben verschieben" title="Nach oben">↑</button><button type="button" data-move-list="down" aria-label="Punkt nach unten verschieben" title="Nach unten">↓</button></div><button type="button" data-remove-row aria-label="Punkt entfernen">✕</button></div>`).join('')}<button type="button" class="small-add" data-add-row="${key}">+ Punkt</button></div>`;

 const editorDrafts=new Map();
 let currentEditorState=null;
 async function draw(name){
   const sourceName=name==='attendance'?'events':name;
   const loaded=editorDrafts.has(sourceName)?editorDrafts.get(sourceName):(name==='articles'?await articles():await get(sourceName));
   const d=loaded,box=$('[data-edit]');
   editorDrafts.set(sourceName,d);
   currentEditorState={name:sourceName,view:name,d,box};
   if(name==='modules'){await moduleEditor(box,moduleRequested);return}
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
   let selectedIndex=-1;
   let filterTerm='';
   const render=()=>{
     if(name==='news'){itemsBox.innerHTML=d.map((x,i)=>renderCard(name,x,i)).join('');return}
     const isSortable=['algorithms','skills','guide','changes','differential','meetings'].includes(name);
     const options=d.map((x,i)=>({i,label:String(x.title||x.name||x.key||'Eintrag '+(i+1)),search:normalizedSearch([x.title,x.authors,x.journal,Array.isArray(x.topics)?x.topics.join(' '):x.topics].join(' '))}));
     if(!isSortable)options.sort((a,b)=>a.label.localeCompare(b.label,'de'));
     const visible=name==='articles'&&filterTerm?options.filter(x=>x.search.includes(normalizedSearch(filterTerm))):options;
     const orderKey=x=>name==='algorithms'?(String(x.category||'').startsWith('Schema')?'Merkhilfen':'Algorithmen'):'Einträge';
     const orderGroups=isSortable?[...new Set(d.map(orderKey))]:[];
     const orderTools=isSortable?`<section class="ost-order-editor"><div class="ost-order-title"><strong>Reihenfolge der Liste</strong><small>Mit ↑ und ↓ sortieren, anschließend oben „Speichern“ wählen.</small></div><p class="ost-order-unsaved" data-order-unsaved aria-live="polite"></p>${orderGroups.map(group=>`<div class="ost-order-group">${orderGroups.length>1?`<h3>${esc(group)}</h3>`:''}${d.map((x,i)=>({x,i})).filter(({x})=>orderKey(x)===group).map(({x,i},pos,all)=>`<div class="ost-order-entry"><span>${esc(String(x.title||x.name||x.key||'Eintrag '+(i+1)))}</span><div class="ost-order-buttons"><button type="button" data-order-dir="up" data-order-index="${i}" aria-label="${esc(String(x.title||x.name||'Eintrag'))} nach oben" ${pos===0?'disabled':''}>↑</button><button type="button" data-order-dir="down" data-order-index="${i}" aria-label="${esc(String(x.title||x.name||'Eintrag'))} nach unten" ${pos===all.length-1?'disabled':''}>↓</button></div></div>`).join('')}</div>`).join('')}</section>`:'';
     const pickerTop=name==='articles'?`<div class="literature-admin-stats"><div><strong>${d.length}</strong><span>Artikel gesamt</span></div><div><strong>${new Set(d.flatMap(x=>Array.isArray(x.topics)?x.topics:[x.topics]).filter(Boolean)).size}</strong><span>Themen</span></div></div><div class="editor-grid two literature-editor-tools"><label class="ux-field"><span>Literatur suchen</span><input data-article-filter placeholder="Titel, Autor:in, Journal …" value="${esc(filterTerm)}"></label><label class="ux-field"><span>Eintrag auswählen</span><select data-editor-pick><option value="-1">– Bitte auswählen –</option>${visible.map(x=>`<option value="${x.i}" ${selectedIndex===x.i?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label></div>`:`<div class="ost-entry-picker"><label>Eintrag auswählen<select data-editor-pick><option value="-1">– Bitte auswählen –</option>${options.map(x=>`<option value="${x.i}" ${selectedIndex===x.i?'selected':''}>${esc(x.label)}</option>`).join('')}</select></label></div>`;
     itemsBox.innerHTML=pickerTop+(selectedIndex>=0&&d[selectedIndex]?renderCard(name,d[selectedIndex],selectedIndex):'<p class="diag-hint">Wähle einen Eintrag aus, um das Bearbeitungsfenster zu öffnen.</p>')+orderTools;
     itemsBox.querySelector('[data-editor-pick]')?.addEventListener('change',e=>{sync();selectedIndex=Number(e.target.value);render();openCard(selectedIndex)});
     itemsBox.querySelector('[data-article-filter]')?.addEventListener('input',e=>{filterTerm=e.target.value;if(selectedIndex>=0&&!visible.some(v=>v.i===selectedIndex))selectedIndex=-1;render();});
   };render();
   const sync=()=>{readAll(name,d,box);editorDrafts.set(name,d)};
   const rerenderOpen=i=>{selectedIndex=i;render();openCard(i)};
   $('[data-add]',box).onclick=()=>{sync();d.unshift(blank(name));selectedIndex=0;render();openCard(0)};
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
     const moveOrder=e.target.closest('[data-order-dir]');if(moveOrder){
       sync();const i=Number(moveOrder.dataset.orderIndex),direction=moveOrder.dataset.orderDir==='up'?-1:1;
       const groupKey=x=>name==='algorithms'?(String(x.category||'').startsWith('Schema')?'schema':'algorithm'):'all';
       if(!d[i])return;
       const others=d.map((x,j)=>({x,j})).filter(({x})=>groupKey(x)===groupKey(d[i]));
       const position=others.findIndex(v=>v.j===i),neighbor=others[position+direction];
       if(!neighbor)return;
       const j=neighbor.j,previouslySelected=d[selectedIndex];
       [d[i],d[j]]=[d[j],d[i]];
       selectedIndex=previouslySelected?d.indexOf(previouslySelected):-1;
       render();if(selectedIndex>=0)openCard(selectedIndex);
       const notice=box.querySelector('[data-order-unsaved]');
       if(notice)notice.textContent='Reihenfolge geändert – bitte Speichern anklicken.';
       return;
     }
     const moveList=e.target.closest('[data-move-list]');if(moveList){
       const row=moveList.closest('.repeat-row'),list=row?.closest('[data-list-key]');
       if(!row||!list)return;
       if(moveList.dataset.moveList==='up'&&row.previousElementSibling?.classList.contains('repeat-row'))list.insertBefore(row,row.previousElementSibling);
       else if(moveList.dataset.moveList==='down'&&row.nextElementSibling?.classList.contains('repeat-row'))list.insertBefore(row.nextElementSibling,row);
       return;
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
     body=`<div class="editor-grid two">${field('Symptom / führendes Beschwerdebild',x.title,'title')}${field('Fachbereich / Gruppe',x.group||'Weitere','group')}${field('Symbol / Emoji',x.icon,'icon')}</div>${field('Physiologisches Hintergrundwissen',x.theory,'theory','textarea')}<section class="editor-subsection"><h3>Wichtige Fragen</h3>${listEditor(x.questions,'questions','Frage')}</section><section class="editor-subsection"><h3>Red Flags</h3>${listEditor(x.redflags,'redflags','Red Flag')}</section><section class="editor-subsection"><h3>Krankheitsbilder</h3><div class="disease-editor-list">${arr(x.causes).map((c,ci)=>{const o=typeof c==='string'?{name:c,info:''}:c;return `<div class="disease-editor-card" data-disease-index="${ci}">${field('Name',o.name,'diseaseName')}${field('Physiologie / Pathophysiologie',o.physiology,'diseasePhysiology','textarea')}${field('Typische Befunde / auffällige Werte',o.findings,'diseaseFindings','textarea')}${field('CAVE / Warnzeichen',o.cave,'diseaseCave','textarea')}${field('Weitere Informationen (optional)',o.info,'diseaseInfo','textarea')}${field('Quellenlink (https://…)',o.sourceUrl,'diseaseSourceUrl')}${field('Linktext',o.sourceLabel,'diseaseSourceLabel')}</div>`}).join('')}</div><button class="small-add" type="button" data-add-disease>+ Krankheitsbild</button></section>`;
   } else if(name==='articles'){
     body=`<section class="editor-subsection"><h3>Bibliografische Daten</h3><div class="editor-grid two">${field('Titel',x.title,'title')}${field('DOI',x.doi,'doi')}${field('Autor:innen',x.authors,'authors')}${field('Journal / Quelle',x.journal,'journal')}${field('Jahr',x.year,'year')}${field('Dokumenttyp',x.type,'type')}</div><button class="btn" type="button" data-doi-lookup>DOI-Daten abrufen</button></section><section class="editor-subsection"><h3>Einordnung</h3><div class="editor-grid two">${field('Themen / Kategorien',Array.isArray(x.topics)?x.topics.join(', '):x.topics,'topics')}${field('Zielgruppe',x.level,'level')}${field('Sprache',x.language,'language')}${field('Lizenz',x.license,'license')}${field('Lesezeit',x.read,'read')}${field('Zugriff',x.access,'access')}${field('Hinzugefügt am',x.added,'added','date')}</div>${field('Warum lesenswert?',x.why,'why','textarea')}</section><section class="editor-subsection"><h3>Links</h3><div class="editor-grid two">${field('Original-/Verlagslink',x.publisherUrl,'publisherUrl')}${field('Freier Volltext',x.freeUrl,'freeUrl')}</div></section>`;
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
 const editorGroups=[
  {id:'aktuelles',title:'Aktuelles',icon:ostIcon('news'),items:['news']},
  {id:'dienstbesprechungen',title:'Dienstbesprechungen',icon:ostIcon('users'),items:['meetings']},
  {id:'lehrmeinung',title:'Lehrmeinung',icon:ostIcon('changes'),items:['changes']},
  {id:'literatur',title:'Literatur',icon:ostIcon('book'),items:['articles']},
  {id:'termine',title:'Termine',icon:ostIcon('calendar'),items:['events','attendance']},
  {id:'training',title:'Training',icon:ostIcon('training'),items:['modules:checklists','guide','skills','modules:mpg']},
  {id:'wissen',title:'Wissen',icon:ostIcon('book'),items:['abcde','algorithms','modules:anatomy','modules:befund','differential','modules:pharm']}
 ];
 const extraLabels={'modules:anatomy':['Anatomie & Physiologie',ostIcon('anatomy')],'modules:befund':['Befundwörterbuch',ostIcon('dictionary')],'modules:pharm':['Pharmakologie',ostIcon('pill')],'modules:mpg':['MPG-Informationen',ostIcon('device')],'modules:checklists':['Checklisten',ostIcon('checklist')]};
 let moduleRequested='pharm';
 const groupedEditorMenu=document.createElement('div');
 groupedEditorMenu.className='editor-grouped-menu';
 groupedEditorMenu.innerHTML=`<nav class="editor-primary-groups" aria-label="Redaktion Hauptbereiche">${editorGroups.map(g=>`<button type="button" data-editor-group="${g.id}" aria-pressed="false"><span>${g.icon}</span><strong>${g.title}</strong></button>`).join('')}</nav><div class="editor-group-subtitle" data-editor-group-label></div><nav class="editor-subgroup-tiles ost-tonal-grid" aria-label="Unterbereiche"></nav>`;
 $('.editor-dashboard').insertBefore(groupedEditorMenu,$('.editor-content'));
 $('.editor-dashboard').after($('.admin-tools'));
 const syncGroupedEditorMenu=tab=>{
  const group=editorGroups.find(g=>g.items.includes(tab)|| (tab==='modules'&&(g.id==='wissen'&&!['mpg','checklists'].includes(moduleRequested)||g.id==='training'&&['mpg','checklists'].includes(moduleRequested))))||editorGroups[0];
  groupedEditorMenu.querySelectorAll('[data-editor-group]').forEach(b=>{
   const active=b.dataset.editorGroup===group.id;
   b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));
  });
  $('[data-editor-group-label]',groupedEditorMenu).textContent=group.title+' bearbeiten';
  $('.editor-subgroup-tiles',groupedEditorMenu).innerHTML=group.items.map(id=>{
    const item=tabs.find(t=>t[0]===id)|| (extraLabels[id]?[id,extraLabels[id][0]]:null);if(!item)return '';
    return `<button type="button" class="editor-subgroup-tile ${tab===id?'active':''}" data-editor-subtab="${id}" aria-pressed="${String(tab===id)}"><span>${extraLabels[id]?.[1]||tabIcons[id]||'📋'}</span><strong>${esc(item[1])}</strong></button>`;
  }).join('');
 };
 groupedEditorMenu.addEventListener('click',e=>{
  const groupButton=e.target.closest('[data-editor-group]');
  const subButton=e.target.closest('[data-editor-subtab]');
  const targetId=subButton?.dataset.editorSubtab || editorGroups.find(g=>g.id===groupButton?.dataset.editorGroup)?.items[0];
  if(targetId){if(targetId.startsWith('modules:')){moduleRequested=targetId.split(':')[1];$('.editor-nav [data-tab="modules"]')?.click();if(activeModuleSetter)activeModuleSetter(moduleRequested)}else $('.editor-nav [data-tab="'+targetId+'"]')?.click();}
 });
 const mobilePick=document.createElement('div');mobilePick.className='editor-mobile-picker';mobilePick.innerHTML=`<label for="editor-mobile-select">Redaktionsbereich</label><select id="editor-mobile-select">${tabs.map(t=>`<option value="${t[0]}">${t[1]}</option>`).join('')}</select>`;$('.editor-dashboard').insertBefore(mobilePick,$('.editor-content'));mobilePick.hidden=true;
 mobilePick.querySelector('select').onchange=e=>$('.editor-nav [data-tab="'+e.target.value+'"]')?.click();
 $('.editor-nav').onclick=e=>{const b=e.target.closest('[data-tab]');if(!b)return;if(currentEditorState&&currentEditorState.view!=='attendance'){readAll(currentEditorState.name,currentEditorState.d,currentEditorState.box);editorDrafts.set(currentEditorState.name,currentEditorState.d)}$$('.editor-nav-btn').forEach(x=>x.classList.toggle('active',x===b));if(mobilePick)mobilePick.querySelector('select').value=b.dataset.tab;syncGroupedEditorMenu(b.dataset.tab);draw(b.dataset.tab)};
 const hash=location.hash.replace('#','');const initialTab=hash==='literatur'?'articles':hash&&tabs.some(t=>t[0]===hash)?hash:'news';syncGroupedEditorMenu(initialTab);draw(initialTab)
}

async function init(){
 chrome();
 syncHeaderTitle();
 rememberPage();
 if(page==='home')await home();
 else if(page==='wissen')await wissenPage();
 else if(page==='modules')await modulePage();
 else if(page==='training')await trainingPage();
 else if(page==='guidelines')await guidelinesPage();
 else if(page==='faq')await faqPage();
 else if(page==='news')await newsPage();
 else if(page==='literature')await literature();
 else if(page==='abcde')await abcdePage();
 else if(page==='differential')await differentialPage();
 else if(page==='skills')await skills();
 else if(page==='algorithms')await algorithmsPage();
 else if(page==='changes')await changesPage();
 else if(page==='events')await eventsPage();
 else if(page==='guide')await guidePage();
 else if(page==='materials'){location.replace('algorithmen.html');return}
 else if(page==='meetings')await meetingsPage();
 else if(page==='editor')await editor();
 cleanupDuplicatePageHeading();
}
window.addEventListener('DOMContentLoaded',init)
})();
