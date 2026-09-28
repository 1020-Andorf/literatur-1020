(()=>{
 const page=document.body.dataset.page||'';
 const menu=[
  ['home','⌂','Startseite','./'],['literatur','▤','Literatursammlung','literatur/'],['abcde','A→E','ABCDE-Schema','abcde.html'],['differential','⌕','Differentialdiagnostik','differential.html'],['skilltraining','✓','Skilltraining','skilltraining.html'],['editor','✎','Inhalte bearbeiten','editor.html']
 ];
 const base=location.pathname.includes('/literatur/')?'../':'./';
 const backdrop=document.createElement('div');backdrop.className='drawer-backdrop';
 const drawer=document.createElement('aside');drawer.className='drawer';drawer.setAttribute('aria-label','Navigation');
 drawer.innerHTML=`<div class="drawer-head"><strong>Wissensportal Rettungsdienst</strong><span>Trainingsnetzwerk OST Andorf</span></div><nav class="drawer-nav">${menu.map(([id,icon,label,href])=>`<a class="${page===id?'active':''}" href="${base}${href==='./'?'':href}"><span class="drawer-icon">${icon}</span><span>${label}</span></a>`).join('')}</nav><div class="drawer-note">Ausbildungs- und Nachschlageplattform. Lokale SOPs, Leitlinien und ärztliche Vorgaben haben Vorrang.</div>`;
 document.body.append(backdrop,drawer);
 const btn=document.querySelector('[data-menu-button]');
 const close=()=>{drawer.classList.remove('open');backdrop.classList.remove('open');document.body.style.overflow=''};
 const open=()=>{drawer.classList.add('open');backdrop.classList.add('open');document.body.style.overflow='hidden'};
 btn?.addEventListener('click',open);backdrop.addEventListener('click',close);document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 window.wpEsc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 window.wpLines=v=>Array.isArray(v)?v:String(v||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean);
 window.wpApi=()=>String(window.WISSEN_API_URL||'').replace(/\/$/,'');
 window.wpLoadContent=async(name)=>{
  const api=window.wpApi();
  if(api){try{const r=await fetch(`${api}/content/${encodeURIComponent(name)}?t=${Date.now()}`,{cache:'no-store'});if(r.ok)return await r.json()}catch(e){}}
  const r=await fetch(`${base}data/${name}.json?t=${Date.now()}`,{cache:'no-store'});if(!r.ok)throw new Error('Daten nicht gefunden');return r.json();
 };
 window.wpOpenOverlay=(title,eyebrow,body,subtitle='')=>{
  let o=document.getElementById('detailOverlay');if(!o){o=document.createElement('div');o.id='detailOverlay';o.className='overlay hidden';o.innerHTML='<div class="overlay-card" role="dialog" aria-modal="true"><div class="overlay-head"><div class="overlay-title"><div id="ovEyebrow" class="eyebrow"></div><h2 id="ovTitle"></h2></div><button class="overlay-close" type="button" aria-label="Schließen">✕</button></div><div id="ovBody" class="overlay-body"></div></div>';document.body.appendChild(o);o.querySelector('.overlay-close').onclick=()=>window.wpCloseOverlay();o.onclick=e=>{if(e.target===o)window.wpCloseOverlay()}}
  o.querySelector('#ovTitle').textContent=title;o.querySelector('#ovEyebrow').textContent=eyebrow||'';o.querySelector('#ovBody').innerHTML=(subtitle?`<p class="detail-subtitle">${window.wpEsc(subtitle)}</p>`:'')+body;o.classList.remove('hidden');document.body.style.overflow='hidden';
 };
 window.wpCloseOverlay=()=>{const o=document.getElementById('detailOverlay');if(o)o.classList.add('hidden');document.body.style.overflow=''};
})();
