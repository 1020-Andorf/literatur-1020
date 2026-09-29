
(function(){
  const page = document.body.dataset.page || '';
  function $(sel, root=document){ return root.querySelector(sel); }
  function $$(sel, root=document){ return Array.from(root.querySelectorAll(sel)); }
  function esc(str){ return String(str ?? '').replace(/[&<>"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m])); }
  window.wpEsc = esc;

  const storageKey = type => `wp-content-${type}`;
  window.wpGetContent = function(type){
    try{
      const raw = localStorage.getItem(storageKey(type));
      if(raw) return JSON.parse(raw);
    }catch(e){}
    return structuredClone ? structuredClone(window.PORTAL_DEFAULTS[type]) : JSON.parse(JSON.stringify(window.PORTAL_DEFAULTS[type]));
  };
  window.wpSetContent = function(type,data){ localStorage.setItem(storageKey(type), JSON.stringify(data)); };

  function buildDrawer(){
    const items = [
      ['index.html','Startseite'],['literatur.html','Literatursammlung'],['abcde.html','ABCDE-Schema'],['differential.html','Differentialdiagnostik'],['skilltraining.html','Skilltraining'],['editor.html','Checklisten bearbeiten']
    ];
    const current = location.pathname.split('/').pop() || 'index.html';
    const drawer = document.createElement('div');
    drawer.className = 'drawer';
    drawer.innerHTML = `
      <div class="drawer-backdrop" data-close-drawer></div>
      <aside class="drawer-panel">
        <div>
          <div class="kicker">Wissensportal</div>
          <h2>Rettungsdienst</h2>
          <p>Übersichtliche mobile Wissensplattform im VitaSim-Stil.</p>
        </div>
        <nav class="nav-links">${items.map(([href,label])=>`<a class="nav-link ${current===href?'active':''}" href="${href}"><span>${label}</span><span>›</span></a>`).join('')}</nav>
        <div class="nav-footer">Trainingsnetzwerk OST Andorf<br>Optimiert für Smartphone und Tablet.</div>
      </aside>`;
    document.body.appendChild(drawer);
    $$('.menu-btn,[data-menu-button]').forEach(btn=>btn.addEventListener('click', ()=>{drawer.classList.add('show');document.body.classList.add('drawer-open');}));
    drawer.addEventListener('click', e=>{ if(e.target.matches('[data-close-drawer], .drawer.show')){drawer.classList.remove('show');document.body.classList.remove('drawer-open');} });
    drawer.querySelector('.drawer-panel').addEventListener('click', e=>e.stopPropagation());
  }

  let overlay;
  function ensureOverlay(){
    if(overlay) return overlay;
    overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `<div class="overlay-card"><div class="overlay-head"><div><div class="kicker" id="ov-kicker"></div><h3 id="ov-title"></h3><p id="ov-sub"></p></div><button class="close-btn" aria-label="Schließen">✕</button></div><div class="overlay-body" id="ov-body"></div></div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e=>{ if(e.target === overlay || e.target.closest('.close-btn')) overlay.classList.remove('show'); });
    return overlay;
  }
  window.wpOpenOverlay = function(title,kicker,bodyHtml,subtitle=''){
    const ov = ensureOverlay();
    $('#ov-title', ov).textContent = title;
    $('#ov-kicker', ov).textContent = kicker || '';
    $('#ov-sub', ov).textContent = subtitle || '';
    $('#ov-body', ov).innerHTML = bodyHtml;
    ov.classList.add('show');
  };

  buildDrawer();

  // Literature page logic
  async function initLiterature(){
    const res = await fetch('data/articles.json');
    const articles = await res.json();
    let filtered = articles.slice();
    const list = $('#literature-list');
    const qInput = $('#search');
    const topicSel = $('#topic');
    const levelSel = $('#level');
    const accessSel = $('#access');
    const topics = [...new Set(articles.flatMap(a=>a.topics || []))].sort((a,b)=>a.localeCompare(b,'de'));
    topicSel.innerHTML = `<option value="">Alle Themen</option>` + topics.map(t=>`<option>${esc(t)}</option>`).join('');
    function badge(text){ return `<span class="badge">${esc(text)}</span>`; }
    function render(){
      const q = (qInput.value || '').toLowerCase().trim();
      filtered = articles.filter(a=>{
        const hit = !q || [a.title,a.authors,a.journal,(a.topics||[]).join(' '),a.why].join(' ').toLowerCase().includes(q);
        const topicOk = !topicSel.value || (a.topics||[]).includes(topicSel.value);
        const levelOk = !levelSel.value || a.level===levelSel.value;
        const accessOk = !accessSel.value || a.access===accessSel.value;
        return hit && topicOk && levelOk && accessOk;
      });
      list.innerHTML = filtered.map(a=>`
        <article class="list-card">
          <div class="badges">${(a.topics||[]).slice(0,3).map(badge).join('')} ${badge(a.level.toUpperCase())}</div>
          <h3>${esc(a.title)}</h3>
          <p>${esc(a.why || '')}</p>
          <div class="badges">${badge(a.journal || 'Quelle')} ${badge(a.year || '')} ${badge(a.access==='oa' ? 'Open Access' : a.access==='free' ? 'Freie Version' : 'Paywall')}</div>
          <div class="btn-row">
            ${a.freeUrl ? `<a class="btn primary" target="_blank" rel="noopener" href="${esc(a.freeUrl)}">Artikel öffnen</a>`:''}
            ${a.publisherUrl && a.publisherUrl!==a.freeUrl ? `<a class="btn ghost" target="_blank" rel="noopener" href="${esc(a.publisherUrl)}">Verlagsseite</a>`:''}
          </div>
        </article>`).join('') || '<div class="list-card"><h3>Keine Treffer</h3><p>Bitte Suche oder Filter anpassen.</p></div>';
      $('#count').textContent = `${filtered.length} Einträge`;
    }
    [qInput,topicSel,levelSel,accessSel].forEach(el=>el.addEventListener('input', render));
    render();
  }
  if(page==='literature'){ initLiterature().catch(err=>$('#literature-list').innerHTML=`<div class="list-card"><h3>Fehler</h3><p>${esc(err.message)}</p></div>`); }

  // Editor logic
  function makeLines(arr){ return (arr||[]).join('\n'); }
  function splitLines(text){ return text.split(/\n+/).map(s=>s.trim()).filter(Boolean); }
  function initEditor(){
    const types = ['abcde','differential','skilltraining'];
    let current = 'abcde';
    const switcher = $('#editor-switch');
    const list = $('#editor-list');
    const status = $('#editor-status');
    function renderType(){
      $$('.segment',switcher).forEach(btn=>btn.classList.toggle('active', btn.dataset.type===current));
      const data = wpGetContent(current);
      if(current==='abcde'){
        list.innerHTML = data.sections.map((s,idx)=>`
          <details class="accordion"><summary>${esc(s.key)} · ${esc(s.title)}<span>▾</span></summary><div class="accordion-body">
          <div class="editor-fields">
            <div class="field"><label>Titel</label><input data-k="title" value="${esc(s.title)}"></div>
            <div class="field"><label>Unterzeile</label><input data-k="subtitle" value="${esc(s.subtitle||'')}"></div>
            <div class="field"><label>Intro</label><textarea data-k="intro">${esc(s.intro||'')}</textarea></div>
            <div class="field chips-edit"><label>Beurteilung (eine Zeile pro Punkt)</label><textarea data-k="assessment">${esc(makeLines(s.assessment))}</textarea></div>
            <div class="field chips-edit"><label>Maßnahmen</label><textarea data-k="measures">${esc(makeLines(s.measures))}</textarea></div>
            <div class="field chips-edit"><label>Red Flags</label><textarea data-k="redflags">${esc(makeLines(s.redflags))}</textarea></div>
            <div class="field"><label>Merksatz</label><textarea data-k="remember">${esc(s.remember||'')}</textarea></div>
          </div></div></details>`).join('');
        $$('.accordion').forEach((acc,idx)=>{
          const s=data.sections[idx];
          $$('input,textarea',acc).forEach(f=>f.addEventListener('input',()=>{
            const key=f.dataset.k;
            let v=f.value;
            if(['assessment','measures','redflags'].includes(key)) v=splitLines(v);
            s[key]=v; wpSetContent('abcde',data); status.textContent='ABCDE gespeichert';
          }));
        });
      } else if(current==='differential'){
        list.innerHTML = data.groups.map((g,idx)=>`
          <details class="accordion"><summary>${esc(g.title)}<span>▾</span></summary><div class="accordion-body"><div class="editor-fields">
            <div class="field"><label>Leitsymptom</label><input data-group="${idx}" data-k="title" value="${esc(g.title)}"></div>
            <div class="field"><label>Icon</label><input data-group="${idx}" data-k="icon" value="${esc(g.icon||'')}"></div>
            <div class="field"><label>Overlay-Punkte (Format: Diagnose|Frage 1;Frage 2|Red Flag 1;Red Flag 2 – eine Zeile pro Diagnose)</label><textarea data-group="${idx}" data-k="items">${esc((g.items||[]).map(it=>`${it.name}|${(it.questions||[]).join('; ')}|${(it.redFlags||[]).join('; ')}`).join('\n'))}</textarea></div>
          </div></div></details>`).join('');
        $$('input,textarea',list).forEach(el=>el.addEventListener('input',()=>{
          const gi=+el.dataset.group; const g=data.groups[gi]; const key=el.dataset.k;
          if(key==='items') g.items=splitLines(el.value).map(line=>{const [name,q,r]=line.split('|');return {name:(name||'').trim(), questions:(q||'').split(';').map(s=>s.trim()).filter(Boolean), redFlags:(r||'').split(';').map(s=>s.trim()).filter(Boolean)}}).filter(x=>x.name);
          else g[key]=el.value;
          wpSetContent('differential',data); status.textContent='Differentialdiagnostik gespeichert';
        }));
      } else {
        list.innerHTML = data.skills.map((s,idx)=>`
          <details class="accordion"><summary>${esc(s.name)}<span>▾</span></summary><div class="accordion-body"><div class="editor-fields">
            <div class="field"><label>Skill</label><input data-skill="${idx}" data-k="name" value="${esc(s.name)}"></div>
            <div class="field"><label>Kategorie</label><input data-skill="${idx}" data-k="category" value="${esc(s.category||'')}"></div>
            <div class="field chips-edit"><label>Indikation</label><textarea data-skill="${idx}" data-k="indication">${esc(makeLines(s.indication))}</textarea></div>
            <div class="field chips-edit"><label>Ablauf</label><textarea data-skill="${idx}" data-k="steps">${esc(makeLines(s.steps))}</textarea></div>
            <div class="field chips-edit"><label>Fehlerquellen</label><textarea data-skill="${idx}" data-k="pitfalls">${esc(makeLines(s.pitfalls))}</textarea></div>
          </div></div></details>`).join('');
        $$('input,textarea',list).forEach(el=>el.addEventListener('input',()=>{
          const si=+el.dataset.skill; const s=data.skills[si]; const key=el.dataset.k;
          let v=el.value; if(['indication','steps','pitfalls'].includes(key)) v=splitLines(v); s[key]=v; wpSetContent('skilltraining',data); status.textContent='Skilltraining gespeichert';
        }));
      }
    }
    switcher.addEventListener('click', e=>{ const btn=e.target.closest('.segment'); if(!btn) return; current=btn.dataset.type; renderType(); });
    $('#reset-data').addEventListener('click', ()=>{ if(confirm('Lokale Änderungen zurücksetzen?')){ localStorage.removeItem(storageKey(current)); renderType(); status.textContent='Auf Standard zurückgesetzt'; } });
    $('#export-data').addEventListener('click', ()=>{ const blob = new Blob([JSON.stringify(wpGetContent(current), null, 2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`${current}.json`; a.click(); URL.revokeObjectURL(a.href); });
    $('#import-file').addEventListener('change', async e=>{ const file=e.target.files[0]; if(!file) return; try{ const data=JSON.parse(await file.text()); wpSetContent(current,data); renderType(); status.textContent='Importiert'; }catch(err){ status.textContent='Import fehlgeschlagen'; }});
    renderType();
  }
  if(page==='editor') initEditor();
})();
