/* OST 1020 · lesbar formatierter Anwendungsstand 560. Fachlogik unveraendert. */
(() => {
    const page = document.body.dataset.page || 'home', API = (window.WISSEN_API_URL || '').replace(/\/$/, ''), LS = 'ost1020-v342-', D = window.OST1020_DATA || {};
    const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)], esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[m]));
    const clone = v => JSON.parse(JSON.stringify(v ?? [])), arr = v => Array.isArray(v) ? v : String(v || '').split(/\n|;/).map(s => s.trim()).filter(Boolean);
    const svg = {
        menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
        home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/></svg>`,
        back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/><path d="M9 12h10"/></svg>`,
        books: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M13 17.5c6.8-2.9 13-2.4 19 1.4v29.4c-6-3.8-12.2-4.3-19-1.4V17.5Z" stroke="#c92a32" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M51 17.5c-6.8-2.9-13-2.4-19 1.4v29.4c6-3.8 12.2-4.3 19-1.4V17.5Z" stroke="#c92a32" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M20 25h7M20 31h7M37 25h7M37 31h7" stroke="#e05d64" stroke-width="2.4" stroke-linecap="round"/>
<path d="M32 18.9v29.4" stroke="#c92a32" stroke-width="3.4" stroke-linecap="round"/>
<path d="M42 35v10l3-2.2 3 2.2V35" fill="#c92a32"/>
</svg>`,
        abcde: `<svg viewBox="0 0 64 64" aria-hidden="true">
<rect x="9" y="10" width="42" height="7" rx="3.5" fill="#3b82f6"/><text x="13" y="16" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">A</text>
<rect x="9" y="19" width="37" height="7" rx="3.5" fill="#ef4444"/><text x="13" y="25" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">B</text>
<rect x="9" y="28" width="33" height="7" rx="3.5" fill="#f59e0b"/><text x="13" y="34" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">C</text>
<rect x="9" y="37" width="29" height="7" rx="3.5" fill="#10b981"/><text x="13" y="43" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">D</text>
<rect x="9" y="46" width="25" height="7" rx="3.5" fill="#8b5cf6"/><text x="13" y="52" font-size="7" font-family="Arial,sans-serif" font-weight="700" fill="#fff">E</text>
<path d="M51 23v27M45.5 29c2.5-3 8.5-3 11 0M46 44c3 2.4 7 2.4 10 0" fill="none" stroke="#3979c9" stroke-width="2.5" stroke-linecap="round"/>
</svg>`,
        diag: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<circle cx="27" cy="27" r="13" stroke="#c92a32" stroke-width="4"/>
<path d="m37 37 12 12" stroke="#c92a32" stroke-width="4.8" stroke-linecap="round"/>
</svg>`,
        skill: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M42.7 12.2a15 15 0 0 0-17.4 18.9L12.2 44.2a5.4 5.4 0 0 0 7.6 7.6l13.1-13.1a15 15 0 0 0 18.9-17.4l-8.7 8.7-8.1-1.8-1.8-8.1 9.5-7.9Z" fill="#3b82f6"/>
<circle cx="17.1" cy="46.9" r="2.2" fill="#fff"/>
</svg>`,
        alg: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<path d="M18 13.5h18l10 10v27H18c-3.3 0-6-2.7-6-6v-25c0-3.3 2.7-6 6-6Z" stroke="#2f80ed" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M36 13.5v10h10" stroke="#2f80ed" stroke-width="3.4" stroke-linejoin="round"/>
<path d="M22 27h18M22 35h14M22 43h10" stroke="#6aa8f4" stroke-width="3.2" stroke-linecap="round"/>
<path d="m41.5 40.5 4 4 7-8" stroke="#20b77a" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
        sim: `<svg viewBox="0 0 64 64" fill="none"><rect x="7" y="10" width="50" height="34" rx="9" fill="#29455f"/><path d="M12 29h8l5-10 7 18 6-13 5 5h8" stroke="#43d3c6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="25" cy="49" r="9" fill="#2f80ed"/><path d="m22 44 7 5-7 5z" fill="#fff"/></svg>`,
        calendar: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<rect x="12" y="15" width="40" height="34" rx="9" stroke="#7b55df" stroke-width="3.4"/>
<path d="M12 25.5h40M22 10v10M42 10v10" stroke="#7b55df" stroke-width="3.4" stroke-linecap="round"/>
<circle cx="24" cy="34.5" r="2.2" fill="#b390ff"/><circle cx="32" cy="34.5" r="2.2" fill="#b390ff"/><circle cx="40" cy="34.5" r="2.2" fill="#b390ff"/>
</svg>`,
        change: `<svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
<rect x="16" y="10" width="32" height="44" rx="8" stroke="#c257c8" stroke-width="3.4"/>
<path d="M23 22h18M23 30h14M23 38h18" stroke="#c257c8" stroke-width="3.2" stroke-linecap="round"/>
<path d="M36 16h6" stroke="#de8be1" stroke-width="3.2" stroke-linecap="round"/>
</svg>`
    };
    function icon(name) { return svg[name] || svg.books; }
    // ------------------------------------------------------------------------
    // Gemeinsamer Seitenrahmen, Navigation und Menues
    // ------------------------------------------------------------------------
    function chrome() {
        document.body.classList.add('app-shell', `page-${page}`);
        if (window.matchMedia('(min-width: 1100px)').matches)
            document.body.classList.add('desktop-has-sidebar');
        const bb = $('[data-back-btn]'), hb = $('[data-home-btn]');
        if (bb) {
            bb.innerHTML = svg.back;
            bb.onclick = () => {
                if ($('.overlay')?.classList.contains('show')) {
                    closeOverlay();
                    return;
                }
                const params = new URLSearchParams(location.search);
                if(page==='training'&&params.has('typ')){location.href='training.html';return;}
                if(page==='materials'&&params.has('typ')){location.href='materialien.html';return;}
                if(page==='events'&&(params.has('datum')||params.has('month'))){location.href='termine.html';return;}
                if(page==='literature'){location.href='materialien.html?typ=literature';return;}
                if (page === 'modules' && params.has('id')) {
                    params.delete('id');
                    location.href = 'themen.html?' + params.toString();
                    return;
                }
                if (page === 'modules') {
                    if (params.has('id')) {
                        params.delete('id');
                        location.href = 'themen.html?' + params.toString();
                        return;
                    }
                    if (['mpg', 'checklists', 'material-checklists'].includes(params.get('bereich'))) {
                        location.href = params.get('bereich') === 'material-checklists' ? 'materialien.html?typ=checklists' : 'training.html?typ=' + (params.get('bereich') === 'checklists' ? 'checklists' : 'devices');
                        return;
                    }
                }
                if (page === 'meetings' && params.has('id')) {
                    location.href = 'dienstbesprechungen.html';
                    return;
                }
                if (page === 'algorithms' && params.has('id')) {
                    location.href = 'algorithmen.html';
                    return;
                }
                if (page === 'changes' && params.has('id')) {
                    location.href = 'lehrmeinung.html';
                    return;
                }
                if (page === 'topics') {
                    if(params.has('eintrag')){params.delete('eintrag');location.href='themen-uebersicht.html?'+params.toString();return;}
                    if(params.has('thema')){location.href='themen-uebersicht.html';return;}
                    location.href = 'index.html';
                    return;
                }
                if (page === 'differential') {
                    if (params.has('disease')) {
                        params.delete('disease');
                        location.href = 'differential.html' + (params.size ? '?' + params : '');
                        return;
                    }
                    if (params.has('id')) {
                        params.delete('id');
                        location.href = 'differential.html' + (params.size ? '?' + params : '');
                        return;
                    }
                    if (params.has('group')) {
                        location.href = 'differential.html';
                        return;
                    }
                }
                const parents = { topics: 'index.html', wissen: 'index.html', training: 'index.html', events: 'index.html', modules: 'wissen.html', news: 'index.html', meetings: 'index.html', editor: 'index.html', differential: 'wissen.html', algorithms: 'wissen.html', literature: 'wissen.html', guidelines: 'wissen.html', abcde: 'wissen.html', changes: 'index.html', skills: 'training.html', guide: 'training.html', faq: 'training.html' };
                location.href = parents[page] || 'index.html';
            };
        }
        if (hb)
            hb.innerHTML = svg.home;
        const headerInner = $('.topbar-inner'), headerBrand = $('.topbar .brand');
        if (headerInner && bb && hb && headerBrand) {
            headerInner.append(bb, headerBrand, hb);
        }
        document.body.insertAdjacentHTML('beforeend', `<div class="overlay"><div class="shade" data-overlay-close></div><section class="overlay-panel" role="dialog" aria-modal="true" aria-label="Inhalt"><button type="button" class="ost-overlay-dismiss" data-overlay-close aria-label="Overlay schließen" title="Schließen">×</button><div class="overlay-head"><h2 data-overlay-title></h2></div><div class="overlay-body" data-overlay-body></div></section></div>`);
        $$('[data-overlay-close]').forEach(x => x.onclick = closeOverlay);
        $('.overlay')?.addEventListener('click', e => { if (e.target === $('.overlay'))
            closeOverlay(); });
        document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('.overlay')?.classList.contains('show'))
            closeOverlay(); });
        {
            const menu = [
                { id: 'home', label: 'Start', href: 'index.html', icon: svg.home, match: ['home'] },
                { id: 'wissen', label: 'Leitsymptome', href: 'themen-uebersicht.html', icon: svg.books, match: ['wissen', 'differential', 'algorithms', 'literature', 'guidelines', 'abcde', 'modules'] },
                { id: 'training', label: 'Training', href: 'training.html', icon: svg.skill, match: ['training', 'skills', 'guide', 'faq'] },
                { id: 'materials', label: 'Materialien', href: 'materialien.html', icon: ostIcon('book'), match: ['materials', 'guidelines', 'literature'] },
                { id: 'events', label: 'Termine', href: 'termine.html', icon: svg.calendar, match: ['events'] },
                { id: 'meetings', label: 'Dienstbesprechungen', href: 'dienstbesprechungen.html', icon: ostIcon('users'), match: ['meetings'] },
                { id: 'changes', label: 'Lehrmeinungsänderungen', href: 'lehrmeinung.html', icon: ostIcon('changes'), match: ['changes'] }
            ];
            const current = (menu.find(x => x.match.includes(page)) || {}).id;
            const renderLink = (it, desktop = false) => `<a class="${current === it.id ? 'active' : ''}" ${current === it.id ? 'aria-current="page"' : ''} href="${it.href}"><span class="${desktop ? 'ds-icon' : 'simple-menu-icon'}">${it.icon || it.emoji}</span><span>${it.label}</span></a>`;
            const desktopTop = document.createElement('nav');
            desktopTop.className = 'clinical-desktop-header';
            desktopTop.setAttribute('aria-label', 'Bereiche');
            desktopTop.innerHTML = `<a class="clinical-logo" href="index.html">OST <strong>1020</strong></a><div class="clinical-desktop-links"><a href="index.html">Start</a><a href="themen-uebersicht.html">Leitsymptome</a><a href="training.html">Training</a><a href="materialien.html">Materialien</a><a href="termine.html">Termine</a><a href="dienstbesprechungen.html">Besprechungen</a></div>`;
            // Unified navigation: one unobtrusive topbar on phone and desktop.
            // desktopTop is deliberately not inserted.
            const sidebar = document.createElement('aside');
            sidebar.className = 'desktop-sidebar';
            sidebar.setAttribute('aria-label', 'Hauptnavigation');
            sidebar.innerHTML = `<div class="desktop-sidebar-head"><div class="desktop-brand-kicker">OST 1020</div><strong>Wissenssammlung</strong></div><nav class="desktop-sidebar-nav"><div class="desktop-nav-group">${menu.map(x => renderLink(x, true)).join('')}</div></nav><div class="sidebar-actions"><button type="button" class="desktop-feedback-btn" data-feedback-open-desktop>💬 <span>Fehler melden</span></button></div>`;
            // No sidebar: consistent reading width and scrolling on all screens.
            $('[data-feedback-open-desktop]', sidebar)?.addEventListener('click', showFeedback);
            const mobile = document.createElement('nav');
            mobile.className = 'compact-top-navigation';
            mobile.setAttribute('aria-label', 'Hauptnavigation');
            mobile.innerHTML = `<div class="compact-menu-links">${menu.map(x => renderLink(x)).join('')}</div>`;
            const topbar = $('.topbar');
            // Navigation on phones uses home tiles, not a sliding sticky menu.
            mobile.remove();
            if (topbar && page !== 'home') {
                document.body.classList.add('ost-compact-header');
            }
            const bottom = document.createElement('nav');
            bottom.className = 'clinical-bottom-nav';
            bottom.setAttribute('aria-label', 'Schnellnavigation');
            bottom.innerHTML = `<a href="index.html" ${page === 'home' ? 'aria-current="page"' : ''}>${svg.home}<span>Start</span></a><a href="themen-uebersicht.html" ${['wissen', 'topics', 'differential', 'modules'].includes(page) ? 'aria-current="page"' : ''}>${svg.books}<span>Leitsymptome</span></a><a href="training.html" ${['training', 'skills', 'guide', 'faq'].includes(page) ? 'aria-current="page"' : ''}>${svg.skill}<span>Training</span></a><a href="materialien.html" ${['materials', 'guidelines', 'literature'].includes(page) ? 'aria-current="page"' : ''}>${ostIcon('book')}<span>Materialien</span></a>`;
            // No fixed bottom navigation: it must never cover content or safe-area.
        }
    }
    function showFeedback() {
        const panel = `<section class="overlay-section"><p>Fehler oder Verbesserungsvorschlag melden. Keine personenbezogenen Patientendaten eingeben.</p><label class="ux-field"><span>Thema</span><input data-fb-title maxlength="160" placeholder="z. B. Quelle überprüfen"></label><label class="ux-field"><span>Beschreibung</span><textarea data-fb-message maxlength="3000" placeholder="Was sollte korrigiert werden?"></textarea></label><button type="button" class="btn primary" data-fb-submit>Meldung absenden</button><div data-fb-status role="status"></div></section>`;
        open('Fehler melden', panel);
        $('[data-fb-submit]').onclick = async () => { const title = $('[data-fb-title]').value.trim(), message = $('[data-fb-message]').value.trim(), status = $('[data-fb-status]'); if (title.length < 3 || message.length < 10) {
            status.textContent = 'Bitte ein Thema und eine ausführlichere Beschreibung angeben.';
            return;
        } if (!API) {
            status.textContent = 'Worker nicht konfiguriert.';
            return;
        } try {
            const r = await fetch(`${API}/feedback`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title, message, href: location.href }) });
            const out = await r.json();
            status.textContent = r.ok ? 'Danke, Meldung gespeichert.' : out.error || 'Speichern fehlgeschlagen.';
            if (r.ok)
                $('[data-fb-submit]').disabled = true;
        }
        catch {
            status.textContent = 'Verbindung fehlgeschlagen.';
        } };
    }
    let overlayReturnScroll = 0;
    function closeOverlay() {
        const modal = $('.overlay');
        if (!modal?.classList.contains('show'))
            return;
        modal.classList.remove('show');
        $('.overlay-panel')?.classList.remove('ost-med-sheet', 'ost-news-modal', 'ost-simple-anatomy-sheet');
        document.body.classList.remove('ost-overlay-open');
        document.documentElement.classList.remove('ost-overlay-open');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        window.scrollTo(0, overlayReturnScroll);
    }
    function open(title, html, options = {}) {
        const modal = $('.overlay');
        if (!modal?.classList.contains('show')) {
            overlayReturnScroll = window.scrollY || document.documentElement.scrollTop || 0;
            document.documentElement.classList.add('ost-overlay-open');
            document.body.classList.add('ost-overlay-open');
            Object.assign(document.body.style, { position: 'fixed', top: `-${overlayReturnScroll}px`, left: '0', right: '0', width: '100%' });
        }
        $('.overlay-panel')?.classList.toggle('ost-news-modal', !!options.news);
        $('.overlay-panel')?.classList.toggle('ost-med-sheet', !!options.sheet);
        $('.overlay-panel')?.classList.toggle('ost-simple-anatomy-sheet', !!options.simpleAnatomy);
        $('[data-overlay-body]').onclick = null;
        $('[data-overlay-title]').textContent = title;
        $('[data-overlay-body]').innerHTML = html;
        modal.classList.add('show');
        const panel = $('.overlay-panel');
        if (panel)
            panel.scrollTop = 0;
        const scroll = $('[data-overlay-body]');
        if (scroll)
            scroll.scrollTop = 0;
    }
    function mergeDiagnostics(remote) {
        const base = clone(D.differential || []), incoming = Array.isArray(remote) ? remote : [];
        const extras = window.OST1020_DIAGNOSTIC_THEORY || {};
        base.forEach(x => { if (!x.theory && extras[x.id])
            x.theory = extras[x.id]; });
        const ids = new Map(incoming.map(x => [x.id, x]));
        const lockedTitles = new Set();
        const lockedGroups = new Set();
        const result = base.map(b => {
            const old = ids.get(b.id);
            if (!old)
                return b;
            const oldCauses = arr(old.causes).map(c => typeof c === 'string' ? { name: c } : c);
            const mergedCauses = arr(b.causes).map(c => {
                const existing = oldCauses.find(v => v.name === c.name);
                if (!existing)
                    return c;
                const generic = !existing.physiology && !existing.findings && !existing.cave && (!existing.info || existing.info.includes('ist eine mögliche Differentialdiagnose'));
                return generic ? { ...existing, physiology: c.physiology, findings: c.findings, cave: c.cave, info: c.info, sourceUrl: c.sourceUrl, sourceLabel: c.sourceLabel } : { ...c, ...existing, sourceUrl: existing.sourceUrl || c.sourceUrl, sourceLabel: existing.sourceLabel || c.sourceLabel };
            });
            const canon = n => String(n || '').toLocaleLowerCase('de').replace(/[^a-z0-9äöüß]/g, '').replace(/^acs$/, 'akuteskoronarsyndrom').replace(/^aaa$/, 'rupturierteaortenaneurysma');
            const newNames = new Set(mergedCauses.map(c => canon(c.name)));
            const deleted=new Set(arr(old.deletedCauseNames).map(canon));
            const causes=[...mergedCauses, ...(b.id === 'allergie' ? [] : oldCauses.filter(c => !newNames.has(canon(c.name))))].filter(c=>!deleted.has(canon(c.name)));
            return { ...b, ...old, title: lockedTitles.has(b.id) ? b.title : (old.title || b.title), group: lockedGroups.has(b.id) ? b.group : (old.group || b.group), causes };
        });
        for (const x of result) {
            const seen = new Set();
            x.causes = x.causes.filter(c => { const n = String(c.name || '').toLocaleLowerCase('de').replace(/[^a-z0-9äöüß]/g, ''); if (seen.has(n))
                return false; seen.add(n); return true; });
        }
        const known = new Set(base.map(x => x.id));
        return [...result, ...incoming.filter(x => !known.has(x.id))];
    }
    function seedModules(data) {
        if (!Array.isArray(data))
            data = [];
        const seed = window.OST1020_MODULE_SEED || [];
        const byId = new Map(seed.map(x => [x.id, x]));
        const merged = data.map(x => {
            const next = byId.get(x.id);
            if (!next || !next.body || !x.body || !['anatomy', 'pharm'].includes(x.module))
                return x;
            // Nur unveränderte Standardtexte ergänzen. Eigene Redaktionsfassungen werden nicht überschrieben.
            const extensionAt = next.body.indexOf('\n\n## ');
            const publishedBase = extensionAt < 0 ? next.body : next.body.slice(0, extensionAt);
            return x.body === publishedBase ? { ...x, body: next.body } : x;
        });
        const known = new Set(data.map(x => x.id));
        return [...merged, ...seed.filter(x => !known.has(x.id))];
    }
    async function get(name) {
        if (API) {
            try {
                const r = await fetch(`${API}/content/${name}`, { cache: 'no-store' });
                if (r.ok) {
                    const data = await r.json();
                    if (Array.isArray(data)) {
                        // Ein leerer API-Bestand darf vorhandene Basisthemen nicht versehentlich ausblenden.
                        if (!data.length && ['skills', 'changes', 'algorithms', 'guide'].includes(name) && Array.isArray(D[name]) && D[name].length)
                            return clone(D[name]);
                        return name === 'differential' ? mergeDiagnostics(data) : name === 'knowledgeModules' ? seedModules(data) : data;
                    }
                }
            }
            catch (e) { }
        }
        try {
            const l = localStorage.getItem(LS + name);
            if (l) {
                const data = JSON.parse(l);
                if (Array.isArray(data))
                    return name === 'differential' ? mergeDiagnostics(data) : name === 'knowledgeModules' ? seedModules(data) : data;
            }
        }
        catch (e) { }
        if (name === 'knowledgeModules')
            return seedModules(clone(D[name] || []));
        if (Array.isArray(D[name]) && D[name].length)
            return clone(D[name]);
        // Die bestehende statische Datendatei verwenden, wenn der Worker nicht erreichbar ist.
        if (['events', 'meetings'].includes(name)) {
            try {
                const r = await fetch(`data/${name}.json`, { cache: 'no-store' });
                if (r.ok) {
                    const data = await r.json();
                    if (Array.isArray(data))
                        return data;
                }
            }
            catch (e) { }
        }
        return clone(D[name] || []);
    }
    async function articles() { if (API) {
        try {
            const r = await fetch(`${API}/articles`, { cache: 'no-store' });
            if (r.ok)
                return await r.json();
        }
        catch (e) { }
    } try {
        const r = await fetch('data/articles.json', { cache: 'no-store' });
        if (r.ok) {
            const rows = await r.json();
            if (Array.isArray(rows))
                return rows;
        }
    }
    catch (e) { } return clone(D.articles || []); }
    async function save(name, data) {
        localStorage.setItem(LS + name, JSON.stringify(data));
        if (API) {
            try {
                const pin = sessionStorage.getItem('ost1020-editor-pin') || '';
                const url = `${API}/content/${name}`;
                const r = await fetch(url, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'X-Admin-Pin': pin }, body: JSON.stringify(data) });
                if (r.status === 401) {
                    sessionStorage.removeItem('ost1020-editor-pin');
                    throw new Error('PIN abgelaufen oder ungültig');
                }
                return r.ok;
            }
            catch (e) { }
        }
        return false;
    }
    // Querverlinkungen und Suchindex: ausschließlich bestehende freigegebene Inhalte.
    const LINK_TYPES = { knowledgeModules: ['Weitere Themen', 'themen.html'], algorithms: ['Algorithmen & Schemata', 'algorithmen.html'], differential: ['Diagnostik', 'differential.html'], articles: ['Literatur-Archiv', 'literatur.html'], skills: ['Skilltraining', 'skilltraining.html'], changes: ['Lehrmeinung', 'lehrmeinung.html'] };
    function contentLink(type, id, module) { if (type === 'knowledgeModules') {
        if (module === 'checklists') return 'training.html?typ=checklists';
        if (module === 'material-checklists') return 'materialien.html?typ=checklists';
        return 'themen.html?bereich=' + encodeURIComponent(module || 'pharm') + '&id=' + encodeURIComponent(id);
    } const base = LINK_TYPES[type]?.[1]; return base ? (type === 'algorithms' || type === 'changes' ? base + '?id=' + encodeURIComponent(id) : type === 'differential' ? base + '?id=' + encodeURIComponent(id) : base) : ''; }
    function relRefs(x) { return Array.isArray(x?.related) ? x.related.filter(r => r && typeof r.type === 'string' && typeof r.id === 'string') : []; }
    async function contentCatalog() { const [d, c, sk, li, km] = await Promise.all([get('differential'), get('changes'), get('skills'), articles(), get('knowledgeModules')]); const result = []; function add(type, x, extra = '') { if (!x || !x.id)
        return; result.push({ type, id: String(x.id), title: String(x.title || x.name || ''), text: [x.title, x.name, x.category, x.group, x.source, x.why, x.info, x.description, x.physiology, x.findings, x.redflags, extra, arr(x.synonyms).join(' ')].filter(Boolean).join(' '), href: contentLink(type, String(x.id), x.module) }); } d.forEach(x => add('differential', x, [...arr(x.causes).map(c => typeof c === 'object' ? [c.name, c.info, c.physiology, c.findings].join(' ') : c), ...arr(x.questions)].join(' '))); c.forEach(x => add('changes', x, [x.old, x.new, x.validity].join(' '))); sk.forEach(g => g.skills?.forEach(x => add('skills', { ...x, id: x.id || 'skill:' + g.name + ':' + x.name }, g.name))); li.forEach(x => add('articles', x, arr(x.topics).join(' '))); (Array.isArray(km) ? km : []).filter(x => MODULE_TYPES[x.module] && x.status !== 'draft').forEach(x => add('knowledgeModules', x, [x.body, x.summary, x.sources].join(' '))); return result; }
    function relatedHtml(item, catalog) { const cards = relRefs(item).map(r => catalog.find(c => c.type === r.type && c.id === r.id)).filter(Boolean); return cards.length ? `<section class="ost-related"><h3>Passende Inhalte</h3><div class="ost-related-list">${cards.map(c => `<a href="${esc(c.href)}"><span>${esc(LINK_TYPES[c.type][0])}</span><strong>${esc(c.title)}</strong><b>›</b></a>`).join('')}</div></section>` : ''; }
    function normalizedSearch(s) { return String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('de').replace(/ß/g, 'ss'); }
    const SEARCH_SYNONYMS = [['atemnot', 'dyspnoe'], ['herzinfarkt', 'acs', 'akutes koronarsyndrom'], ['schlaganfall', 'stroke'], ['bewusstlos', 'bewusstseinsstorung'], ['wiederbelebung', 'reanimation', 'cpr']];
    function searchTokens(q) { const qn = normalizedSearch(q); const tokens = [qn]; for (const group of SEARCH_SYNONYMS) {
        if (group.some(x => qn.includes(normalizedSearch(x))))
            tokens.push(...group.map(normalizedSearch));
    } return [...new Set(tokens)]; }
    function catalogSearch(cat, term) { const keys = searchTokens(term); return cat.map(x => { const title = normalizedSearch(x.title), txt = normalizedSearch(x.text); let score = 0; for (const q of keys) {
        if (title === q)
            score += 120;
        else if (title.startsWith(q))
            score += 65;
        else if (title.includes(q))
            score += 40;
        if (txt.includes(q))
            score += 12;
    } return { ...x, score }; }).filter(x => x.score > 0).sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'de')).slice(0, 25); }
    function coreCard(href, ico, title, sub) { return `<a class="core-card" href="${href}"><div class="core-visual">${ico}</div><div class="core-card-copy"><h3>${title}</h3></div></a>`; }
    // Einheitliche, dezente Kontur-Symbole für Navigationskacheln und Rubriken.
    const OST_ICONS = {
        book: '<path d="M12 7c-2.5-1.8-5.1-2.1-9-1v13c3.9-1.1 6.5-.8 9 1m0-13c2.5-1.8 5.1-2.1 9-1v13c-3.9-1.1-6.5-.8-9 1m0-13v13"/>',
        training: '<path d="m2 9 10-5 10 5-10 5-10-5Zm4 3v5c3.9 3 8.1 3 12 0v-5M22 10v7"/>',
        calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h6"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2m13-14a4 4 0 0 1 0 8m5 6v-2a4 4 0 0 0-3-3.87"/><circle cx="9.5" cy="7" r="4"/>',
        refresh: '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M5.7 9A7 7 0 0 1 18 6l2 1M4 17l2 1a7 7 0 0 0 12.3-3"/>',
        notes: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>',
        guideline: '<path d="M6 3h11a2 2 0 0 1 2 2v16H8a3 3 0 0 1-3-3V5a2 2 0 0 1 1-2Zm-1 15a3 3 0 0 1 3-3h11"/>',
        search: '<circle cx="10.8" cy="10.8" r="6.7"/><path d="m16 16 5 5"/>',
        pill: '<rect x="7" y="2.9" width="10" height="18.2" rx="5" transform="rotate(42 12 12)"/><path d="m8.15 15.15 7.7-7.7"/><path d="M9.3 6.9h3.1M10.85 5.35v3.1"/>',
        heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
        dictionary: '<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Zm0 13a3 3 0 0 1 3-3h13M9 8h6m-6 3h5"/>',
        skill: '<path d="m14 5 5 5M4 20l8.5-8.5a5 5 0 0 1 6.8-6.8l-4.1 4.1 1 3.1 3.1 1 4.1-4.1a5 5 0 0 1-6.8 6.8L8 24"/>',
        device: '<rect x="4" y="3" width="16" height="18" rx="3"/><path d="M7 11h3l2-4 2 8 2-4h1M9 18h6"/>',
        checklist: '<rect x="6" y="3" width="13" height="18" rx="2"/><path d="m9 9 1.5 1.5L13 8m-4 7 1.5 1.5L13 14m2-4h2m-2 6h2"/>',
        screen: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8m-4-4v4m-3-12 6 2-6 3V9Z"/>',
        question: '<circle cx="12" cy="12" r="10"/><path d="M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-1.3 1-1.9 1.5-1.9 3M12 17.5v.5"/>',
        changes: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h5M9 16h3"/><path d="m15 15 2 2 4-4"/>',
        anatomy: '<path d="M12 21s-8-4.8-9-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-1 5.2-9 10-9 10Z"/><path d="M3 12h5l2-3 3 6 2-3h6"/>',
        edit: '<path d="M12 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-7"/><path d="m16 5 3-3 3 3-9 9-4 1 1-4 9-9"/>',
        news: '<path d="M3 10v4h3l9 5V5L6 10H3Z"/><path d="M7 14l2 6h3M19 9a5 5 0 0 1 0 6"/>',
        folder: '<path d="M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9H3Z"/>',
        check: '<path d="m4 12 5 5L20 6"/>',
        group: '<path d="M4 20v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2"/><circle cx="12" cy="7" r="4"/>',
        lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 1 1 8 0v3"/>'
    };
    function ostIcon(key) { return `<svg class="ost-outline-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${OST_ICONS[key] || OST_ICONS.book}</svg>`; }
    function normalizedTitle(t) { return String(t || '').replace(/^[^\p{L}\p{N}]+/gu, '').replace(/\s+/g, ' ').trim(); }
    function headerTitle() {
        const params = new URLSearchParams(location.search);
        const map = { home: 'Wissenssammlung', wissen: 'Leitsymptome', topics: 'Leitsymptome', training: 'Training', events: 'Termine', news: 'Aktuelles', meetings: 'Dienstbesprechungen', editor: 'Redaktion', differential: 'Diagnostik', algorithms: 'Algorithmen & Merkhilfen', literature: 'Literatur-Archiv', guidelines: 'Leitlinien / Guidelines', abcde: 'ABCDE-Schema', changes: 'Lehrmeinungsänderungen', materials: 'Materialien', skills: 'Training · Skills', guide: 'Training · Simulation', faq: 'Training · FAQ' };
        if (page === 'modules') {
            const slug = params.get('bereich') || 'anatomy';
            return (MODULE_TYPES[slug] && MODULE_TYPES[slug].title) || 'Wissensbereich';
        }
        return map[page] || 'OST 1020';
    }
    function syncHeaderTitle() {
        const brand = $('.topbar .brand strong');
        if (brand)
            brand.textContent = headerTitle();
        if (page !== 'home')
            document.title = `OST 1020 – ${headerTitle()}`;
    }
    function cleanupDuplicatePageHeading() {
        if (page !== 'topics')
            syncHeaderTitle();
        if (page === 'home')
            return;
        const banner = document.querySelector('.main > .page-banner:first-child');
        if (!banner)
            return;
        const h1 = banner.querySelector('h1');
        if (!h1)
            return;
        const header = normalizedTitle(headerTitle()).toLocaleLowerCase('de');
        const own = normalizedTitle(h1.textContent).toLocaleLowerCase('de');
        if (!header || header !== own)
            return;
        const row = h1.closest('.page-banner-row');
        h1.remove();
        if (row && !row.textContent.trim() && !row.querySelector('button,a,input,select,.toolbar,.filter-chips'))
            row.remove();
        banner.classList.add('page-banner-no-title');
        const keep = banner.querySelector('.toolbar,.searchbar,input,select,button,a,p,.filter-chips,.page-banner-row,.ost-module-toolbar,.diag-search-wrap');
        if (!keep)
            banner.remove();
    }
    function newsHtml(n, i = '') { const map = { Lehrmeinung: '🔄', Leitlinie: '📋', Ausbildung: '🎓', Termin: '📅', Simulationstraining: '🖥️', Organisation: '📣', Literatur: '📚' }; const c = n.category || 'Organisation'; return `<button class="news-item news-title-only" data-ost574-id="${esc(n.id)}" data-news="${i}"><h3>${esc(n.title)}</h3><span class="arrow" aria-hidden="true">›</span></button>`; }
    const RECENT_KEY = 'ost1020-recent-pages', FAV_KEY = 'ost1020-favorites';
    function rememberPage() { if (page === 'home' || page === 'editor')
        return; const labels = { home: 'Start', topics: 'Leitsymptome', wissen: 'Leitsymptome', news: 'Aktuelles', literature: 'Literatur-Archiv', abcde: 'ABCDE-Schema', differential: 'Diagnostik', skills: 'Training · Skills', algorithms: 'Algorithmen & Merkhilfen', meetings: 'Dienstbesprechungen', changes: 'Lehrmeinungsänderungen', events: 'Termine', guide: 'Quick Guide Simulation', materials: 'Materialien' }; const href = location.pathname.split('/').pop() || 'index.html'; let r = []; try {
        r = JSON.parse(localStorage.getItem(RECENT_KEY) || '[]');
    }
    catch (e) { } r = [{ page, label: labels[page] || document.title, href }, ...r.filter(x => x.page !== page)].slice(0, 4); localStorage.setItem(RECENT_KEY, JSON.stringify(r)); }
    function favorites() { try {
        return JSON.parse(localStorage.getItem(FAV_KEY) || '[]');
    }
    catch (e) {
        return [];
    } }
    function toggleFavorite(href) { let f = favorites(); f = f.includes(href) ? f.filter(x => x !== href) : [...f, href]; localStorage.setItem(FAV_KEY, JSON.stringify(f)); return f.includes(href); }
    // Meldungen werden 30 Tage nach ihrem Datum ausgeblendet, nicht aus dem Datenspeicher gelöscht.
    function visibleNews(items) { const now = new Date(); now.setHours(12, 0, 0, 0); return (Array.isArray(items) ? items : []).filter(n => { if (n.active === false)
        return false; if (!n.date)
        return true; const d = new Date(String(n.date).slice(0, 10) + 'T12:00:00'); if (Number.isNaN(d.getTime()))
        return true; const days = (now - d) / 86400000; return days < 30 && days >= -1; }).sort((a, b) => String(b.date || '').localeCompare(String(a.date || ''))); }
    // ------------------------------------------------------------------------
    // Startseite und Neuigkeiten
    // ------------------------------------------------------------------------
    async function home() {
        const [news, events, lit] = await Promise.all([get('news'), get('events'), articles()]);
        const today = (()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');})(), active = visibleNews(news).slice(0, 3);
        const upcoming = (events || []).filter(x => x.date >= today).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)).slice(0, 2);
        const weekToday = new Date(); weekToday.setHours(12,0,0,0);
        const monday = new Date(weekToday); monday.setDate(monday.getDate() - (monday.getDay()+6)%7);
        const weekKey = d => [d.getFullYear(), String(d.getMonth()+1).padStart(2,'0'), String(d.getDate()).padStart(2,'0')].join('-');
        const weekDays = Array.from({length:7},(_,i)=>{const d=new Date(monday);d.setDate(d.getDate()+i);return {key:weekKey(d),date:d};});
        const weekCalendar = `<div class="ost580-week" aria-label="Aktuelle Kalenderwoche">${weekDays.map(({key,date})=>{
          const daily=(events||[]).filter(x=>x.date===key);
          const mark=key===today?' ost580-today':'';
          return `<a href="termine.html?datum=${encodeURIComponent(key)}" class="ost580-day${mark}" ${key===today?'aria-current="date"':''}><span>${['So','Mo','Di','Mi','Do','Fr','Sa'][date.getDay()]}</span><strong>${date.getDate()}</strong>${daily.length?`<small>${daily.length} Termin${daily.length>1?'e':''}</small>`:'<small> </small>'}</a>`;
        }).join('')}</div>`;
        const picks = (Array.isArray(lit) ? lit : []).filter(x => (x.featured === true || x.featured === 'true') && (!Date.parse(x.activeSince || x.added || '') || Date.now()-Date.parse(x.activeSince || x.added) < 30*86400000)).sort((a, b) => Number(a.featureRank || 99) - Number(b.featureRank || 99) || String(b.added || '').localeCompare(String(a.added || ''))).slice(0, 2);
        const destinations = [
            ['topics', 'Leitsymptome', 'themen-uebersicht.html', 'anatomy'],
            ['training', 'Training', 'training.html', 'training'],
            ['literature', 'Materialien', 'materialien.html', 'book'],
            ['events', 'Termine', 'termine.html', 'calendar'],
            ['meetings', 'Besprechungen & Vorträge', 'dienstbesprechungen.html', 'users'],
            ['changes', 'Lehrmeinung', 'lehrmeinung.html', 'changes']
        ];
        const external = a => { const u = String(a.freeUrl || a.publisherUrl || ''); return /^https?:\/\//i.test(u) ? u : ''; };
        $('[data-main]').innerHTML = `<div class="cf-home cf548-home"><header class="cf548-welcome"><h1>Wissenssammlung <span>OST 1020</span></h1></header>
 <section class="cf-search"><span>${ostIcon('search')}</span><input data-global-search type="search" placeholder="Symptome, Medikamente, Themen suchen …" aria-label="Alle Inhalte durchsuchen"><div class="search-results hidden" data-search-results></div></section>
 <section class="cf-section cf-home-updates cf548-news"><div class="cf-section-title"><h2>Aktuelles</h2><a href="aktuelles.html">Alle →</a><button class="ost583-home-add" type="button" data-ost583-home-add="news" aria-label="Meldung hinzufügen">＋</button></div><div class="cf-simple-list">${active.map((n, i) => `<div class="ost583-home-news-row"><button type="button" data-news="${i}"><span>${esc(n.title)}</span><b>›</b></button><button type="button" class="ost583-home-pencil" data-ost583-home-news="${esc(n.id)}" aria-label="${esc(n.title)} bearbeiten">✎</button></div>`).join('') || '<p class="cf-muted">Keine aktuellen Meldungen</p>'}</div></section>
 <section class="cf-section cf548-menu"><div class="cf-section-title"><h2>Menü</h2></div><nav class="cf-home-grid" aria-label="Themenbereiche">${destinations.map(([klass, title, href, ico]) => `<a class="cf-destination cf-${klass}" href="${href}"><span class="cf-destination-icon">${ostIcon(ico)}</span><strong>${title}</strong></a>`).join('')}</nav></section>
 <section class="cf-section cf548-reading" data-reading-section><div class="cf-section-title"><h2>Lesetipps</h2><a href="literatur.html">Literatur-Archiv →</a><button class="ost583-home-add" type="button" data-ost583-home-add="articles" aria-label="Lesetipp hinzufügen">＋</button></div><div class="cf548-reading-list">${picks.length ? picks.map(a => { const link = external(a); return `<div class="ost583-reading-row"><a class="cf548-reading-item" href="${link ? esc(link) : 'literatur.html'}" ${link ? 'target="_blank" rel="noopener noreferrer"' : ''}><span class="cf548-reading-icon">${ostIcon('book')}</span><span><strong>${esc(a.title)}</strong>${a.why ? `<small>${esc(String(a.why).replace(/[*#\[\]]/g, '').slice(0, 110))}</small>` : ''}</span><b>↗</b></a><button class="ost583-home-pencil" type="button" data-ost583-home-reading="${esc(a.id)}" aria-label="${esc(a.title)} bearbeiten">✎</button></div>`; }).join('') : '<p class="cf-muted">Lesetipps lassen sich in der Redaktion unter Literatur & Lesetipps auswählen.</p>'}</div></section>
 <section class="cf-section cf548-dates" data-events-section><div class="cf-section-title"><h2>Nächste Termine</h2><a href="termine.html">Kalender →</a></div>${weekCalendar}<div class="cf-simple-list">${upcoming.map(e => `<a href="termine.html"><span>${esc(e.title)}</span><small>${esc(e.date || '')}</small></a>`).join('') || '<p class="cf-muted">Keine kommenden Termine</p>'}</div></section>
 </div>`;
        const switchHost=document.createElement('div');switchHost.className='ost577-switch-host';switchHost.dataset.ost577SwitchHost='';
        $('[data-events-section]')?.insertAdjacentElement('afterend',switchHost);
        ost576InstallSwitch();
        if(!picks.length)$('[data-reading-section]')?.classList.add('ost583-no-reading');
        const q = $('[data-global-search]'), results = $('[data-search-results]');
        let cat = [];
        contentCatalog().then(data => { cat = data; if (q.value)
            draw(); }).catch(() => { });
        function draw() { const term = q.value.trim(); results.classList.toggle('hidden', !term); if (!term) {
            results.innerHTML = '';
            return;
        } const hits = catalogSearch(cat, term).filter(x => !/simulation(?:-faq)?\.html/i.test(x.href || '')); results.innerHTML = hits.map(x => `<a href="${esc(x.href)}"><strong>${esc(x.title)}</strong><small>${esc(LINK_TYPES[x.type]?.[0] || 'Thema')}</small></a>`).join('') || '<p>Keine Treffer.</p>'; }
        q.oninput = draw;
        const homeRoot=$('[data-main]');
        homeRoot.addEventListener('click',async e=>{
          const add=e.target.closest('[data-ost583-home-add]');
          if(add){e.preventDefault();e.stopPropagation();const st=add.dataset.ost583HomeAdd;
            ost575Create(st,st==='articles'?{featured:true,activeSince:today,added:today}:{});return;
          }
          const pencil=e.target.closest('[data-ost583-home-news],[data-ost583-home-reading]');
          if(!pencil)return;
          e.preventDefault();e.stopPropagation();if(!await ost574Pin())return;
          const isNews=pencil.hasAttribute('data-ost583-home-news');const store=isNews?'news':'articles';
          const id=isNews?pencil.dataset.ost583HomeNews:pencil.dataset.ost583HomeReading;
          const list=await get(store),item=list.find(x=>String(x.id)===String(id));if(!item)return;
          const row=pencil.closest(isNews?'.ost583-home-news-row':'.ost583-reading-row');
          if(!row||row.dataset.editing)return;row.dataset.editing='1';
          const prior=row.innerHTML;
          row.innerHTML=`<div class="ost583-home-editor"><label>Titel<input data-home-title value="${esc(item.title||'')}"></label><label>${isNews?'Meldung':'Beschreibung / Lesetipp'}</label>${ost573Toolbar()}<div class="ost573-editable" contenteditable="true" data-home-rich>${ost570CleanHtml(item[isNews?'text':'why']||'')}</div>${isNews?`<label>Datum<input type="date" data-home-date value="${esc(item.date||today)}"></label>`:''}<div class="ost570-actions"><button type="button" class="btn primary" data-home-save>Speichern</button><button type="button" class="btn" data-home-cancel>Abbrechen</button><button type="button" class="btn danger" data-home-delete>Löschen</button><span data-home-status role="status"></span></div></div>`;
          const panel=row.querySelector('.ost583-home-editor'),editor=panel.querySelector('[data-home-rich]');ost573BindRich(panel,editor);
          const restore=()=>{row.innerHTML=prior;delete row.dataset.editing;};
          panel.querySelector('[data-home-cancel]').onclick=restore;
          panel.querySelector('[data-home-delete]').onclick=async()=>{
            if(!confirm('Eintrag endgültig löschen?'))return;const latest=await get(store);
            if(await save(store,latest.filter(x=>String(x.id)!==String(id))))location.reload();
            else panel.querySelector('[data-home-status]').textContent='Löschen fehlgeschlagen.';
          };
          panel.querySelector('[data-home-save]').onclick=async()=>{
            const latest=await get(store),idx=latest.findIndex(x=>String(x.id)===String(id));if(idx<0)return;
            const title=panel.querySelector('[data-home-title]').value.trim();if(!title){panel.querySelector('[data-home-status]').textContent='Titel erforderlich.';return;}
            latest[idx]={...latest[idx],title,[isNews?'text':'why']:ost570CleanHtml(editor.innerHTML)};
            if(isNews)latest[idx].date=panel.querySelector('[data-home-date]').value;
            if(await save(store,latest))location.reload();
            else panel.querySelector('[data-home-status]').textContent='Speichern fehlgeschlagen.';
          };
        });
        $('[data-main]').addEventListener('click', e => { const b = e.target.closest('[data-news]'); if (!b)
            return; const n = active[+b.dataset.news]; if (n)
            open(n.title, `<section class="overlay-section news-detail"><div class="ost-news-rich">${renderModuleText(n.text || '')}</div></section>`, { news: true }); });
    }
    const MODULE_TYPES = { "pharm": { "title": "Pharmakologie", "icon": "⚕️", "area": "wissen" }, "anatomy": { "title": "Anatomie & Physiologie", "icon": "🫀", "area": "wissen" }, "befund": { "title": "Befundwörterbuch", "icon": "📖", "area": "wissen" }, "mpg": { "title": "MPG-Informationen", "icon": "🩺", "area": "training" }, "checklists": { "title": "Übungschecklisten", "icon": "📄", "area": "training" }, "material-checklists": { "title": "Checklisten", "icon": "📄", "area": "materialien" } };
    const MODULE_ICON_OPTIONS = ['', '⚕️', '💉', '🫀', '🫁', '🧠', '🩺', '📖', '📄', '🧪', '🔬', '🧬', '⚡', '🖥️', '🧰', '🦠', '💧', '❤️', '🦴', '👶'];
    function moduleItemIcon(item, slug) {
        const saved = String(item?.icon || '').trim();
        if (saved)
            return saved;
        const text = String([item?.title, item?.category, item?.summary].filter(Boolean).join(' ')).toLocaleLowerCase('de');
        if (slug === 'pharm') {
            if (/analge|schmerz|opioid|paracetamol|ibuprofen|novalgin|morphin/.test(text))
                return '⚕️';
            if (/adrenalin|noradren|vaso|kreislauf|reanimation/.test(text))
                return '🫀';
            if (/salbutamol|broncho|asthma|copd|inhal/.test(text))
                return '🫁';
            if (/insulin|glukose|diabetes|hypoglyk/.test(text))
                return '🧪';
            if (/antibiot|antiinfek/.test(text))
                return '🦠';
            if (/sedier|benzodiazep|midazolam|narkose/.test(text))
                return '💉';
            if (/antiem|übel|erbrechen/.test(text))
                return '💧';
            return '⚕️';
        }
        if (slug === 'anatomy') {
            if (/herz|kreislauf|koronar|gefäß/.test(text))
                return '🫀';
            if (/lunge|atem|bronch|respira/.test(text))
                return '🫁';
            if (/gehirn|neuro|nerv/.test(text))
                return '🧠';
            if (/skelett|fraktur|knochen|muskel/.test(text))
                return '🦴';
            if (/kind|päd|neonat/.test(text))
                return '👶';
            if (/stoffwechsel|endo|hormon/.test(text))
                return '🧬';
            return '🩺';
        }
        if (slug === 'mpg') {
            if (/defi|monitor|corpuls/.test(text))
                return '⚡';
            if (/beatm|ventil|cpap/.test(text))
                return '🫁';
            if (/absaug/.test(text))
                return '💧';
            return '🩺';
        }
        if (slug === 'checklists' || slug === 'material-checklists')
            return '📄';
        if (slug === 'befund')
            return '📖';
        return MODULE_TYPES[slug]?.icon || '📘';
    }
    function moduleIconSelect(current = '') { return `<label class="ost-module-field"><span>Symbol</span><select data-mf="icon">${MODULE_ICON_OPTIONS.map(v => `<option value="${v}" ${String(current || '') === v ? 'selected' : ''}>${v || 'Kein Symbol'}</option>`).join('')}</select><small>Optionales Symbol für Eintragslisten und Detailansichten.</small></label>`; }
    function shortModuleExplanation(x) { const summary = String(x?.summary || '').trim(); if (summary)
        return summary; const body = String(x?.body || '').replace(/!\[[^\]]*\]\([^)]*\)/g, ' ').replace(/\r?\n+/g, ' ').trim(); if (!body)
        return ''; const first = body.split(/(?<=[.!?])\s+/)[0] || body; const short = first.split(/[:;,-]/)[0] || first; return short.slice(0, 90).trim(); }
    const BODY_MODEL_IMAGE = 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/202403_human_anatomy_skeleton_and_organs.svg/960px-202403_human_anatomy_skeleton_and_organs.svg.png';
    function pickByPattern(items, pattern) { return items.find(x => pattern.test([x.title, x.category, x.summary, x.synonyms].join(' '))) || null; }
    function interactiveBodyMap(groups, mode) {
        // The marker is at the actual organ location. Labels sit outside the illustrated body.
        const anatomyPoints = { brain: [50, 10], lungs: [44, 33], heart: [54, 35], abdomen: [53, 49], kidney: [45, 57], movement: [54, 81] };
        const diagnosisPoints = { brain: [50, 10], lungs: [44, 33], heart: [54, 35], abdomen: [53, 49], kidney: [45, 57], movement: [54, 81] };
        const points = mode === 'diagnosis' ? diagnosisPoints : anatomyPoints;
        const elements = groups.map(g => { const [x, y] = points[g.id] || [50, 50]; return `<button type="button" class="ost-organ-hit hit-${g.id}" data-body-zone="${g.id}" style="left:${x}%;top:${y}%" aria-label="${esc(g.label)} öffnen"><span class="ost-organ-indicator"></span><span class="ost-organ-tip">${esc(g.label)}</span></button>`; }).join('');
        return `<div class="ost-model-stage ${mode === 'diagnosis' ? 'ost-diagnosis-model' : 'ost-anatomy-model'}"><div class="ost-model-art"><img src="${BODY_MODEL_IMAGE}" alt="Anatomisches Körpermodell, Organe direkt antippen" draggable="false" loading="eager" onerror="this.onerror=null;this.src='assets/anatomie-koerpermodell.png'">${elements}</div><small class="ost-model-credit">Anatomische Darstellung: DBCLS / Togopic, <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a> (angepasste Darstellung)</small></div>`;
    }
    function renderModuleText(raw) {
        if(/^\s*<(?:p|div|ul|ol|h[2-4]|blockquote|figure|font|span|strong|em|a|img)(?:\s|>)/i.test(String(raw||'')))return ost570CleanHtml(raw);
        const lines = String(raw || '').split(/\r?\n/);
        let list = false;
        const out = [];
        const inline = text => esc(text).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>').replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1 ↗</a>');
        const image = /^!\[([^\]]*)\]\((https:\/\/[^\s)]+|assets\/[a-zA-Z0-9._\/-]+)\)$/;
        for (const line of lines) {
            const t = line.trim(), m = t.match(image);
            if (m) {
                if (list) {
                    out.push('</ul>');
                    list = false;
                }
                out.push(`<figure class="ost-inline-figure"><img loading="lazy" src="${esc(m[2])}" alt="${esc(m[1])}"><figcaption>${esc(m[1])}</figcaption></figure>`);
                continue;
            }
            if (t.startsWith('## ')) {
                if (list) {
                    out.push('</ul>');
                    list = false;
                }
                out.push(`<h3>${inline(t.slice(3))}</h3>`);
                continue;
            }
            if (t.startsWith('### ')) {
                if (list) {
                    out.push('</ul>');
                    list = false;
                }
                out.push(`<h4>${inline(t.slice(4))}</h4>`);
                continue;
            }
            if (t.startsWith('- ')) {
                if (!list) {
                    out.push('<ul>');
                    list = true;
                }
                out.push(`<li>${inline(t.slice(2))}</li>`);
                continue;
            }
            if (list) {
                out.push('</ul>');
                list = false;
            }
            if (t)
                out.push(`<p>${inline(t)}</p>`);
        }
        if (list)
            out.push('</ul>');
        return out.join('') || '<p>Noch kein Fachinhalt hinterlegt.</p>';
    }
    function moduleFields(x) { if (x.module === 'checklists' || x.module === 'material-checklists')
        return moduleIconSelect(x.icon) + `<label class="ost-module-field"><span>Titel</span><input data-mf="title" value="${esc(x.title || '')}"></label><label class="ost-module-field"><span>Kategorie / Übung</span><input data-mf="category" value="${esc(x.category || '')}"></label><label class="ost-module-field"><span>Kurzbeschreibung</span><textarea data-mf="summary" rows="3">${esc(x.summary || '')}</textarea></label><label class="ost-module-field"><span>Weitere Hinweise (optional)</span><textarea data-mf="body" rows="4">${esc(x.body || '')}</textarea></label><label class="ost-module-field"><span>PDF-Adresse</span><input type="url" data-mf="documentUrl" value="${esc(x.documentUrl || '')}" placeholder="Wird beim Upload automatisch eingetragen"></label><label class="ost-image-upload">📄 PDF hochladen<input type="file" data-module-upload="pdf" accept="application/pdf,.pdf"></label>`; return moduleIconSelect(x.icon) + ['title', 'category', 'summary', 'body', 'image', 'imageCaption', 'sources', 'synonyms', 'reviewOwner', 'reviewDue'].map(k => { const label = { title: 'Titel', category: 'Kategorie', summary: 'Kurzbeschreibung', body: 'Fachinhalt / Lernnotizen', image: 'Titelbild (URL oder Bildpfad)', imageCaption: 'Bildunterschrift / Alternativtext', sources: 'Quellen / Hersteller- und Handbuchlinks (URLs)', synonyms: 'Suchbegriffe / Synonyme (mit Komma getrennt)', reviewOwner: 'Fachliche Prüfung durch', reviewDue: 'Nächste Prüfung (JJJJ-MM-TT)' }[k]; if (k === 'body')
        return `<label class="ost-module-field"><span>${label}</span><div class="ost-rich-toolbar"><button type="button" data-rich="heading">Überschrift</button><button type="button" data-rich="bold"><b>Fett</b></button><button type="button" data-rich="italic"><i>Kursiv</i></button><button type="button" data-rich="list">Aufzählung</button><button type="button" data-rich="image">📷 Bild hochladen & einfügen</button></div><textarea class="ost-rich-input" data-mf="body" rows="15" placeholder="Ausführliche Fachtexte …">${esc(x.body || '')}</textarea><small>Absätze, ## Überschrift, **fett**, *kursiv*, - Listen. Bilder können direkt im Text eingefügt werden.</small><label class="ost-image-upload ost-hidden-upload">Bild in den Text hochladen<input type="file" data-module-upload="inline" accept="image/png,image/jpeg,image/webp"></label></label>`; return `<label class="ost-module-field"><span>${label}</span>${['sources', 'summary'].includes(k) ? `<textarea data-mf="${k}" rows="3">${esc(x[k] || '')}</textarea>` : `<input data-mf="${k}" value="${esc(x[k] || '')}">`}${k === 'image' ? '<label class="ost-image-upload">Titelbild hochladen<input type="file" data-module-upload="cover" accept="image/png,image/jpeg,image/webp"></label>' : ''}</label>`; }).join(''); }
    // ------------------------------------------------------------------------
    // Lernmodule
    // ------------------------------------------------------------------------
    async function modulePage() {
        const slug = new URLSearchParams(location.search).get('bereich') || 'pharm', meta = MODULE_TYPES[slug];
        if (!meta) {
            $('[data-main]').innerHTML = '<p>Bereich nicht gefunden.</p>';
            return;
        }
        const all = await get('knowledgeModules'), items = (Array.isArray(all) ? all : []).filter(x => x.module === slug && x.status !== 'draft').sort(ostEditorialOrder);
        const q = new URLSearchParams(location.search).get('id'), current = items.find(x => x.id === q);
        if (slug === 'befund') {
            const base = `<section class="page-banner"><h1>Befundwörterbuch</h1><p>Fachbegriffe und Abkürzungen auf einen Blick.</p></section>`;
            $('[data-main]').innerHTML = base + `<div class="ost-module-toolbar"><input type="search" data-befund-search placeholder="Abkürzung oder Begriff suchen …" aria-label="Befundwörterbuch durchsuchen"></div><div class="ost-dictionary-wrap"><table class="ost-dictionary"><thead><tr><th>Begriff / Abkürzung</th><th>Erklärung</th></tr></thead><tbody data-befund-rows></tbody></table></div>`;
            const draw = () => { const term = normalizedSearch($('[data-befund-search]').value); const matched = items.filter(x => normalizedSearch([x.title, x.summary, x.body, x.synonyms].join(' ')).includes(term)).sort((a, b) => ostEditorialOrder(a, b) || String(a.title).localeCompare(String(b.title), 'de', { sensitivity: 'base' })); $('[data-befund-rows]').innerHTML = matched.map(x => `<tr><th scope="row">${esc(x.title)}</th><td>${esc(shortModuleExplanation(x) || '–')}</td></tr>`).join('') || '<tr><td colspan="2">Keine Einträge gefunden.</td></tr>'; };
            $('[data-befund-search]').addEventListener('input', draw);
            draw();
            return;
        }
        if (slug === 'checklists' || slug === 'material-checklists') {
            const base = `<section class="page-banner"><h1>${esc(meta.title)}</h1></section>`;
            $('[data-main]').innerHTML = base + `<div class="ost-module-toolbar"><input type="search" data-checklist-search placeholder="Checkliste suchen …" aria-label="Checklisten durchsuchen"></div><div class="ost-checklist-list" data-checklist-list></div>`;
            const draw = () => { const term = normalizedSearch($('[data-checklist-search]').value); const hits = items.filter(x => normalizedSearch([x.title, x.category, x.summary, x.body].join(' ')).includes(term)).sort((a, b) => ostEditorialOrder(a, b) || String(a.title).localeCompare(String(b.title), 'de')); $('[data-checklist-list]').innerHTML = hits.map(x => `<article class="ost-checklist-card"><span class="ost-checklist-icon" aria-hidden="true">${ostIcon('checklist')}</span><div class="ost-checklist-info"><h2>${esc(x.title)}</h2>${x.category ? `<div class="ost-checklist-category">${esc(x.category)}</div>` : ''}${x.summary ? `<p>${esc(x.summary)}</p>` : ''}${x.body ? `<div class="ost-checklist-body">${renderModuleText(x.body)}</div>` : ''}</div>${x.documentUrl && /^https:\/\/[^\s"<>]+$/i.test(x.documentUrl) ? `<a class="ost-checklist-download" href="${esc(x.documentUrl)}" target="_blank" rel="noopener noreferrer" download>PDF öffnen <span aria-hidden="true">↗</span></a>` : '<span class="ost-checklist-missing">Noch kein PDF</span>'}</article>`).join('') || '<p class="empty">Noch keine Checklisten vorhanden.</p>'; };
            $('[data-checklist-search]').oninput = draw;
            draw();
            return;
        }
        const base = `<section class="page-banner"><h1>${esc(meta.title)}</h1></section>`;
        if (current && slug !== 'pharm') {
            const itemIcon = moduleItemIcon(current, slug);
            $('[data-main]').innerHTML = base + `<article class="ost-module-detail"><div class="ost-module-detail-head"><span class="ost-module-symbol">${esc(itemIcon)}</span><div><div class="ost-module-kicker">${esc(current.category || meta.title)}</div><h2>${esc(current.title)}</h2></div></div>${current.summary ? `<p class="ost-module-lead">${esc(current.summary)}</p>` : ''}${current.image && /^(https:\/\/[^\s]+|assets\/[a-zA-Z0-9._\/-]+\.(svg|png|webp|jpg|jpeg))$/i.test(current.image) ? `<figure class="ost-figure"><img class="ost-anatomy-figure" src="${esc(current.image)}" alt="${esc(current.imageCaption || 'Lernabbildung: ' + current.title)}" loading="lazy"><figcaption>${esc(current.imageCaption || 'Schematische Lernabbildung')}</figcaption></figure>` : ''}<div class="ost-module-body">${renderModuleText(current.body)}</div>${current.sources ? `<section class="ost-module-sources"><h3>Quellen</h3><p>${esc(current.sources).replace(/\n/g, '<br>')}</p></section>` : ''}<p class="diag-hint">Inhalte vor klinischer Anwendung anhand freigegebener lokaler Vorgaben prüfen.${current.reviewDue ? ' Nächste Prüfung: ' + esc(current.reviewDue) : ''}</p></article>`;
            const cat = await contentCatalog();
            $('[data-main]').insertAdjacentHTML('beforeend', relatedHtml(current, cat));
            return;
        }
        if (slug === 'anatomy') {
            const groups = [
                { id: 'brain', label: 'Gehirn & Nervensystem', icon: '🧠', pattern: /gehirn|nerven|neuro|sinne/i, desc: 'Gehirn, Nerven und Signalverarbeitung' },
                { id: 'lungs', label: 'Atmungssystem', icon: '🫁', pattern: /atmung|lunge|gasaustausch|respira/i, desc: 'Lunge, Ventilation und Gasaustausch' },
                { id: 'heart', label: 'Herz & Kreislauf', icon: '🫀', pattern: /herz|kreislauf|gefäß|blut/i, desc: 'Herz, Kreislauf und Versorgung' },
                { id: 'abdomen', label: 'Abdomen & Verdauung', icon: '🩺', pattern: /verdau|abdomen|leber|magen|darm|stoffwechsel/i, desc: 'Organe, Verdauung und Stoffwechsel' },
                { id: 'kidney', label: 'Niere & Harnsystem', icon: '💧', pattern: /niere|harn|ausscheid/i, desc: 'Filterung, Elektrolyte und Wasserhaushalt' },
                { id: 'movement', label: 'Bewegungsapparat', icon: '🦴', pattern: /skelett|muskel|knochen|bewegung/i, desc: 'Muskeln, Knochen und Gelenke' }
            ];
            const map = interactiveBodyMap(groups, 'anatomy');
            $('[data-main]').innerHTML = `<div class="ost-model-screen"><label class="ost-model-search"><span>⌕</span><input type="search" data-module-search placeholder="Anatomie durchsuchen …" aria-label="Anatomie durchsuchen"></label>${map}<section class="ost-model-results" data-module-list hidden></section></div>`;
            const showArticle = (x, origin) => {
                const backText = origin ? `Zurück zu ${esc(origin.label)}` : 'Zurück zum Körpermodell';
                open(x.title, `<article class="ost-article-sheet"><button type="button" class="ost-anat-back" data-anat-back aria-label="${backText}"><span aria-hidden="true">←</span> ${backText}</button>${x.image ? `<img class="ost-sheet-figure" src="${esc(x.image)}" alt="${esc(x.imageCaption || x.title)}" onerror="this.remove()">` : ''}<div class="ost-module-body">${renderModuleText(x.body)}</div>${x.sources ? `<aside class="ost-sheet-source"><strong>Quellen</strong><p>${esc(x.sources)}</p></aside>` : ''}<p class="diag-hint">Fachliche Inhalte anhand lokaler Vorgaben prüfen.</p></article>`, { sheet: true });
                $('[data-overlay-body]').onclick = e => { if (e.target.closest('[data-anat-back]')) {
                    if (origin)
                        showGroup(origin);
                    else
                        closeOverlay();
                } };
            };
            const showGroup = g => {
                const matched = items.filter(x => g.pattern.test([x.title, x.category, x.summary, x.synonyms].join(' ')));
                const render = matched.length ? matched.map(x => `<button type="button" class="ost-sheet-row" data-anat-item="${esc(x.id)}"><span class="ost-sheet-row-icon">${g.icon}</span><span><strong>${esc(x.title)}</strong></span><b>›</b></button>`).join('') : '<p>Für diese Körperregion ist noch kein Artikel hinterlegt.</p>';
                open(g.label, `<div class="ost-sheet-rows ost-anatomy-only-list">${render}</div>`, { sheet: true, simpleAnatomy: true });
                $('[data-overlay-body]').onclick = e => { const b = e.target.closest('[data-anat-item]'); if (b) {
                    const x = items.find(x => x.id === b.dataset.anatItem);
                    if (x)
                        showArticle(x, g);
                } };
            };
            $('[data-main]').onclick = e => { const b = e.target.closest('[data-body-zone]'); if (b) {
                const g = groups.find(x => x.id === b.dataset.bodyZone);
                if (g)
                    showGroup(g);
            } };
            $('[data-module-search]').oninput = e => { const q = normalizedSearch(e.target.value.trim()), box = $('[data-module-list]'); if (!q) {
                box.hidden = true;
                box.innerHTML = '';
                return;
            } const hits = items.filter(x => normalizedSearch([x.title, x.category, x.summary, x.body, x.synonyms].join(' ')).includes(q)); box.hidden = false; box.innerHTML = `<h3>Suchergebnisse</h3>${hits.map(x => `<button class="ost-sheet-row" data-search-anat="${esc(x.id)}"><span>📘</span><strong>${esc(x.title)}</strong><b>›</b></button>`).join('') || '<p>Keine Treffer</p>'}`; box.onclick = event => { const b = event.target.closest('[data-search-anat]'); if (b) {
                const item = items.find(x => x.id === b.dataset.searchAnat);
                if (item)
                    showArticle(item);
            } }; };
            return;
        }
        if (slug === 'pharm') {
            const definitions = [
                { id: 'pain', label: 'Schmerz & Analgesie', icon: '✚', group: 'Therapie', match: /analget|schmerz|opioid|antipyret|nsaid|antirheumat|paracetamol|morphin|fentanyl/i },
                { id: 'sedation', label: 'Sedierung & Narkose', icon: '☾', group: 'Therapie', match: /sedati|narkose|anästhe|hypnot|benzodia|anxiol/i },
                { id: 'cardio', label: 'Herz & Kreislauf', icon: '♡', group: 'Organsystem', match: /sympatho|katechol|antiarrhythm|kardio|herz|kreislauf|vagol|vaso|antiangin/i },
                { id: 'air', label: 'Atemwege', icon: '↝', group: 'Organsystem', match: /bronch|asthma|respira|lunge|atem|inhal/i },
                { id: 'blood', label: 'Gerinnung & Blut', icon: '◈', group: 'Organsystem', match: /antithrom|gerinn|blut|antikoag|thrombol|hämosta/i },
                { id: 'other', label: 'Weitere Medikamente', icon: '✳', group: 'Weitere', match: /.*/ }
            ];
            const assigned = new Set();
            const groups = definitions.map((g, i) => {
                const related = items.filter(x => {
                    if (assigned.has(x.id))
                        return false;
                    const match = i === definitions.length - 1 || g.match.test([x.title, x.category, x.synonyms].join(' '));
                    if (match)
                        assigned.add(x.id);
                    return match;
                });
                return { ...g, items: related };
            }).filter(g => g.items.length);
            const byId = id => items.find(x => x.id === id);
            const goArticle = (x, g) => {
                if (!x)
                    return;
                const origin = g || groups.find(group => group.items.some(item => item.id === x.id));
                open(x.title, `<article class="ost-pharm-article"><button type="button" class="ost-anat-back" data-pharm-back><span aria-hidden="true">←</span> ${origin ? 'Zurück zu ' + esc(origin.label) : 'Zurück zur Auswahl'}</button>${x.image ? `<img class="ost-sheet-figure" src="${esc(x.image)}" alt="${esc(x.imageCaption || x.title)}" onerror="this.remove()">` : ''}<div class="ost-module-body">${renderModuleText(x.body)}</div>${x.sources ? `<aside class="ost-sheet-source"><strong>Quellen</strong><p>${esc(x.sources)}</p></aside>` : ''}<p class="diag-hint">Lerninhalte – lokale SOP, Fachinformation, Kontraindikationen und Dosierungen vor Anwendung prüfen.</p></article>`, { sheet: true });
                $('[data-overlay-body]').onclick = e => { if (e.target.closest('[data-pharm-back]'))
                    origin ? goGroup(origin) : closeOverlay(); };
            };
            const goGroup = g => {
                open(g.label, `<section class="ost-pharm-group-sheet"><div class="ost-sheet-rows">${g.items.map(x => `<button type="button" class="ost-sheet-row" data-pharm-item="${esc(x.id)}"><span class="ost-sheet-row-icon">${esc(moduleItemIcon(x, slug))}</span><span><strong>${esc(x.title)}</strong></span><b>›</b></button>`).join('')}</div></section>`, { sheet: true });
                $('[data-overlay-body]').onclick = e => { const b = e.target.closest('[data-pharm-item]'); if (b)
                    goArticle(byId(b.dataset.pharmItem), g); };
            };
            $('[data-main]').innerHTML = `<section class="ost-pharm-explorer"><label class="ost-model-search"><span aria-hidden="true">⌕</span><input type="search" data-pharm-search placeholder="Wirkstoffgruppe oder Medikament suchen …" aria-label="Pharmakologie durchsuchen"></label><nav class="ost-pharm-map" aria-label="Interaktive Pharmakologie"><div class="ost-pharm-map-center" aria-hidden="true"><svg viewBox="0 0 120 120" role="presentation" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="ostPharmGlass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f6fbff"/><stop offset="1" stop-color="#dceff7"/></linearGradient><linearGradient id="ostPharmCapsule" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e7657b"/><stop offset="1" stop-color="#b94761"/></linearGradient></defs><circle cx="60" cy="60" r="55" fill="#eff7fb"/><circle cx="60" cy="60" r="48" fill="white" stroke="#d2e5ef" stroke-width="2"/><g transform="rotate(-38 60 58)"><rect x="25" y="44" width="70" height="30" rx="15" fill="url(#ostPharmGlass)" stroke="#396e90" stroke-width="2.8"/><path d="M60 44H80C88 44 95 51 95 59S88 74 80 74H60V44Z" fill="url(#ostPharmCapsule)"/><path d="M60 44V74" stroke="#396e90" stroke-width="2.8"/><path d="M38 59H52M45 52V66" stroke="#396e90" stroke-width="2.8" stroke-linecap="round"/></g><path d="M28 92h12l4-7 5 13 6-20 7 14h14" stroke="#61a5b9" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg><strong>Pharmakologie</strong></div>${groups.map((g, i) => `<button type="button" class="ost-pharm-sector sector-${g.id}" data-pharm-group="${g.id}" style="--sector:${i}"><span class="ost-pharm-sector-icon" aria-hidden="true">${g.icon}</span><span class="ost-pharm-sector-copy"><strong>${esc(g.label)}</strong><small>${g.items.length} ${g.items.length === 1 ? 'Thema' : 'Themen'}</small></span><span class="ost-sector-chevron" aria-hidden="true">›</span></button>`).join('')}</nav><div data-pharm-results class="ost-pharm-results" hidden></div></section>`;
            $('[data-main]').addEventListener('click', e => { const b = e.target.closest('[data-pharm-group]'); if (b) {
                const g = groups.find(x => x.id === b.dataset.pharmGroup);
                if (g)
                    goGroup(g);
            }
            else {
                const item = e.target.closest('[data-pharm-search-item]');
                if (item) {
                    const x = byId(item.dataset.pharmSearchItem);
                    if (x)
                        goArticle(x);
                }
            } });
            const search = $('[data-pharm-search]'), results = $('[data-pharm-results]');
            search.addEventListener('input', () => {
                const term = normalizedSearch(search.value.trim());
                results.hidden = !term;
                if (!term) {
                    results.innerHTML = '';
                    return;
                }
                const found = items.filter(x => normalizedSearch([x.title, x.category, x.synonyms, x.summary, x.body].join(' ')).includes(term));
                results.innerHTML = found.length ? `<h3>${found.length} Suchtreffer</h3><div class="ost-sheet-rows">${found.map(x => `<button type="button" class="ost-sheet-row" data-pharm-search-item="${esc(x.id)}"><span class="ost-sheet-row-icon">${esc(moduleItemIcon(x, slug))}</span><span><strong>${esc(x.title)}</strong></span><b>›</b></button>`).join('')}</div>` : '<p class="empty">Keine Einträge gefunden.</p>';
            });
            if (current)
                goArticle(current);
            return;
        }
        const openModuleSheet = item => open(item.title, `<article class="ost-article-sheet ost-pharm-sheet">${item.image ? `<img class="ost-sheet-figure" src="${esc(item.image)}" alt="${esc(item.imageCaption || item.title)}" onerror="this.remove()">` : ''}<div class="ost-module-body">${renderModuleText(item.body)}</div>${item.sources ? `<aside class="ost-sheet-source"><strong>Quellen</strong><p>${esc(item.sources)}</p></aside>` : ''}<p class="diag-hint">Technische Angaben und Fachinhalte anhand lokaler Vorgaben, Herstellerdokumentation und freigegebener SOPs prüfen.</p></article>`, { sheet: true });
        $('[data-main]').innerHTML = base + `<div class="ost-module-toolbar"><input type="search" data-module-search placeholder="${esc(meta.title)} durchsuchen …" aria-label="Themen durchsuchen"></div><div class="ost-link-directory ost-tonal-directory ${slug === 'pharm' ? 'ost-pharm-directory' : ''}" data-module-list></div><p class="diag-hint">Einträge werden in der Redaktion gepflegt. Technische Angaben und Anleitungen bitte anhand der Herstellerdokumentation prüfen.</p>`;
        const draw = () => { const term = normalizedSearch($('[data-module-search]').value); const hits = items.filter(x => normalizedSearch([x.title, x.category, x.summary, x.body, x.synonyms].join(' ')).includes(term)); $('[data-module-list]').innerHTML = hits.map(x => slug === 'pharm' ? `<button type="button" class="ost-module-sheet-link" data-module-sheet="${esc(x.id)}"><span>${x.icon ? esc(x.icon) : moduleItemIcon(x, slug)}</span><div><strong>${esc(x.title)}</strong>${x.summary ? `<small>${esc(x.summary)}</small>` : ''}</div><b>›</b></button>` : `<a href="themen.html?bereich=${encodeURIComponent(slug)}&id=${encodeURIComponent(x.id)}"><span>${x.icon ? esc(x.icon) : moduleItemIcon(x, slug)}</span><div><strong>${esc(x.title)}</strong>${x.summary ? `<small>${esc(x.summary)}</small>` : ''}</div><b>›</b></a>`).join('') || '<div class="empty">Noch keine Einträge in diesem Bereich. Inhalte können in der Redaktion ergänzt werden.</div>'; };
        $('[data-module-search]').oninput = draw;
        draw();
        if (slug === 'pharm') {
            $('[data-module-list]').onclick = e => { const b = e.target.closest('[data-module-sheet]'); if (!b)
                return; const item = items.find(x => x.id === b.dataset.moduleSheet); if (item)
                openModuleSheet(item); };
            if (current)
                openModuleSheet(current);
        }
    }
    // Gemeinsame Wissens-Auswahl der Redaktion: Organgruppe vor Inhaltsart.
    let editorKnowledgeOrgan = 'herz';
    let editorKnowledgeOrganSetter = null;
    let activeModuleSetter = null;
    const ostEditorialOrder = (a, b) => {
        const av = Number(a?.order), bv = Number(b?.order);
        const ah = a?.order !== undefined && a?.order !== null && Number.isFinite(av);
        const bh = b?.order !== undefined && b?.order !== null && Number.isFinite(bv);
        if (!ah && !bh) return 0; // Bestandsreihenfolge nicht heimlich veraendern.
        return (ah ? av : Number.MAX_SAFE_INTEGER) - (bh ? bv : Number.MAX_SAFE_INTEGER);
    };
    async function moduleEditor(box, initialModule = 'pharm', editorSection = '') {
        const records = await get('knowledgeModules');
        let items = Array.isArray(records) ? clone(records) : [];
        let active = initialModule;
        let anatomyImportRows = [];
        let selectedId = '';
        let organFilter = editorSection === 'wissen' ? editorKnowledgeOrgan : 'herz';
        if (editorSection === 'wissen') editorKnowledgeOrganSetter = id => {
            organFilter = id;
            selectedId = '';
            render();
        };
        activeModuleSetter = (slug) => { active = slug; selectedId = ''; render(); };
        const belongsToOrgan = x => {
            if (!['anatomy', 'befund'].includes(active)) return true;
            const t = CF_TOPICS.find(t => t.id === organFilter);
            if (t) {
                if (x.organGroup) return x.organGroup === t.id;
                return active === 'anatomy'
                    ? t.anatomy.test(x.title)
                    : cfTopicContains([x.title, x.summary, x.body].join(' '), t);
            }
            return !CF_TOPICS.some(topic => x.organGroup === topic.id ||
                (!x.organGroup && (active === 'anatomy'
                    ? topic.anatomy.test(x.title)
                    : cfTopicContains([x.title, x.summary, x.body].join(' '), topic))));
        };
        const orderedModuleItems = () => items.filter(x => x.module === active && belongsToOrgan(x)).sort(ostEditorialOrder);
        const moduleOrderPanel = () => {
            const rows = orderedModuleItems();
            if (rows.length < 2) return '';
            return `<section class="ost-order-editor cf562-order-editor"><div class="ost-order-title"><strong>Reihenfolge der Einträge</strong><small>Mit ↑ und ↓ verschieben. Die Reihenfolge wird direkt gespeichert und auf der Website übernommen.</small></div><div class="ost-order-group">${rows.map((x,i) => `<div class="ost-order-entry"><span>${esc(x.title || 'Ohne Titel')}</span><div class="ost-order-buttons"><button type="button" data-mod-order="up" data-mod-order-id="${esc(x.id)}" ${!i ? 'disabled' : ''} aria-label="${esc(x.title)} nach oben">↑</button><button type="button" data-mod-order="down" data-mod-order-id="${esc(x.id)}" ${i === rows.length - 1 ? 'disabled' : ''} aria-label="${esc(x.title)} nach unten">↓</button></div></div>`).join('')}</div></section>`;
        };
        const anatomyEditorFields = x => `<section class="cf552-subsection-editor"><div class="cf552-subsection-header"><h3>Aufklappbare Unterpunkte</h3><button type="button" class="btn" data-sub-add>+ Unterpunkt</button></div>${(Array.isArray(x.subsections) ? x.subsections : []).map((v, i) => `<div class="cf552-subsection-row" data-sub-index="${i}"><label>Überschrift<input data-sub-title value="${esc(v.title || '')}"></label><label>Inhalt<textarea data-sub-body rows="4">${esc(v.body || '')}</textarea></label><div class="cf552-subsection-actions"><button type="button" data-sub-move="up" ${!i ? 'disabled' : ''}>↑</button><button type="button" data-sub-move="down" ${i === (x.subsections.length - 1) ? 'disabled' : ''}>↓</button><button type="button" data-sub-remove>Entfernen</button></div></div>`).join('')}</section>`;
        const anatomyImportPanel = () => active !== 'anatomy' ? '' : `<details class="ost565-import ost567-import"><summary>Anatomie-Fachinformationen aus JSON importieren</summary><p>Nur neue Einträge. Erst Vorschau und manuelle Auswahl, dann als Entwurf übernehmen. Vorhandene Einträge bleiben unverändert.</p><label>JSON-Datei auswählen<input type="file" accept=".json,application/json" data-anatomy-import-file></label><div data-anatomy-import-preview><p>Bitte JSON-Datei auswählen.</p></div></details>`;
        const anatomyNorm = s => String(s || '').normalize('NFKC').trim().toLocaleLowerCase('de').replace(/\s+/g, ' ');
        const anatomyOrgan = label => CF_TOPICS.find(t => anatomyNorm(t.label) === anatomyNorm(label) || anatomyNorm(t.id) === anatomyNorm(label));
        const anatomyPreview = () => {
            const area = box.querySelector('[data-anatomy-import-preview]');
            if (!area) return;
            const existing = new Set(items.filter(x => x.module === 'anatomy').map(x => anatomyNorm(x.title)));
            area.innerHTML = `<p>${anatomyImportRows.length} Einträge geladen. Duplikate und unbekannte Organgruppen sind gesperrt.</p><div class="ost565-import-rows">${anatomyImportRows.map((r,i) => {
                const invalid = !anatomyOrgan(r.organgruppe), duplicate = existing.has(anatomyNorm(r.titel)) || anatomyImportRows.findIndex(x => anatomyNorm(x.titel) === anatomyNorm(r.titel)) !== i;
                return `<label class="ost565-import-row"><input type="checkbox" data-anatomy-import-row="${i}" ${invalid || duplicate ? 'disabled' : 'checked'}><span><strong>${esc(r.titel)}</strong><small>${esc(r.organgruppe)} · ${invalid ? 'Unbekannte Organgruppe' : duplicate ? 'Duplikat – übersprungen' : 'Neu – für Import auswählbar'}</small></span></label>`;
            }).join('')}</div><button type="button" class="btn primary" data-anatomy-import-apply>Ausgewählte Einträge als Entwürfe übernehmen</button><p data-anatomy-import-note role="status"></p>`;
        };
        const checklistMoveField = x => !['checklists', 'material-checklists'].includes(active) ? '' : `<label class="ost-module-field"><span>Bereich / Zuordnung</span><select data-checklist-target><option value="checklists" ${x.module === 'checklists' ? 'selected' : ''}>Training – Übungschecklisten</option><option value="material-checklists" ${x.module === 'material-checklists' ? 'selected' : ''}>Materialien – Checklisten</option></select><small>Ein Wechsel wird erst mit „Speichern“ übernommen. Der Eintrag erscheint danach ausschließlich im gewählten Bereich.</small></label>`;
        const legacyChecklistPicker = () => {
            if (active !== 'material-checklists') return '';
            const legacy = items.filter(x => x.module === 'checklists').sort(ostEditorialOrder);
            if (!legacy.length) return '';
            return `<section class="ost-checklist-transfer" aria-label="Bestehende Checklisten zuordnen"><h3>Bestehende Übungschecklisten zuordnen</h3><p>Die früher gemeinsam verwendeten Checklisten liegen zunächst unter Training. Einzelne Einträge kannst du ohne Kopieren nach Materialien verschieben.</p><label>Eintrag auswählen<select data-checklist-transfer-id><option value="">– Eintrag wählen –</option>${legacy.map(x => `<option value="${esc(x.id)}">${esc(x.title || 'Ohne Titel')}${x.status === 'draft' ? ' (Entwurf)' : ''}</option>`).join('')}</select></label><button type="button" class="btn" data-checklist-transfer>Nach Materialien verschieben</button></section>`;
        };
        const render = () => { const heading = active === 'anatomy' ? 'Anatomie & Physiologie' : active === 'checklists' ? 'Übungschecklisten' : active === 'material-checklists' ? 'Checklisten' : 'Wissensbereiche';
            const description = ['checklists', 'material-checklists'].includes(active) ? 'Checklisten auswählen, bearbeiten und als PDF ergänzen. Einträge lassen sich ohne Inhaltsverlust zwischen Training und Materialien verschieben.' : 'Fachartikel, Begriffe und Geräte pflegen. Bei Geräten: Modell im Titel, Hersteller in Kategorie, Spezifikationen und Anleitungshinweise im Fachinhalt; Handbuch-Links unter Quellen.';
            box.innerHTML = `<div class="editor-toolbar ost567-heading"><div><span class="ost567-eyebrow">REDAKTION / WISSEN</span><h2>${heading}</h2><p>${description}</p></div><div class="ost-editor-module-actions"><button type="button" class="btn" data-mod-seed>Neue Lerntexte übernehmen</button><button type="button" class="btn primary" data-mod-new>+ Eintrag</button></div></div><div data-mod-note role="status"></div>${active === 'anatomy' ? anatomyImportPanel() : ''}<div class="ost567-edit-shell"><div class="ost-entry-picker cf551-module-pickers">${['anatomy', 'befund'].includes(active) && editorSection !== 'wissen' ? `<label>Organgruppe<select data-mod-region>${CF_TOPICS.map(t => `<option value="${esc(t.id)}" ${organFilter === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}<option value="other" ${organFilter === 'other' ? 'selected' : ''}>Weitere Themen</option></select></label>` : ''}<label>${editorSection === 'wissen' ? '3. Eintrag auswählen' : 'Eintrag auswählen'}<select data-mod-select><option value="">– Bitte auswählen –</option>${orderedModuleItems().map(x => `<option value="${esc(x.id)}" ${selectedId === x.id ? "selected" : ""}>${esc(x.title)}</option>`).join("")}</select></label></div><div class="ost-module-admin-list">${items.filter(x => x.module === active && x.id === selectedId).map(x => `<details open data-mod-id="${esc(x.id)}"><summary><strong>${esc(x.title || 'Ohne Titel')}</strong><span>${x.status === 'draft' ? 'Entwurf' : 'Öffentlich'}</span></summary><div class="ost-module-fields">${['anatomy', 'befund'].includes(active) ? `<label class="ost-module-field"><span>Organgruppe</span><select data-mf="organGroup">${CF_TOPICS.map(t => `<option value="${esc(t.id)}" ${x.organGroup === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}<option value="other" ${x.organGroup === 'other' ? 'selected' : ''}>Weitere Themen</option></select></label>` : ''}${moduleFields(x)}${checklistMoveField(x)}${active === 'anatomy' ? anatomyEditorFields(x) : ''}<label class="ost-module-field"><span>Status</span><select data-mf="status"><option value="published" ${x.status !== 'draft' ? 'selected' : ''}>Veröffentlicht</option><option value="draft" ${x.status === 'draft' ? 'selected' : ''}>Entwurf</option></select></label><div class="ost-module-admin-buttons"><button type="button" class="btn primary" data-mod-save>Speichern</button><button type="button" class="btn danger" data-mod-delete>Eintrag löschen</button></div></div></details>`).join('') || '<div class="empty">Noch keine Einträge. Mit „+ Eintrag“ starten.</div>'}</div></div>${legacyChecklistPicker()}${moduleOrderPanel()}<p class="diag-hint">Die Themenmodule teilen sich eine Datensammlung. Ältere Pilotdaten bleiben zur sicheren Wiederherstellung gespeichert. Entwürfe sind kein Zugriffsschutz.</p>`; };
        const persist = async () => { const ok = await save('knowledgeModules', items); const el = box.querySelector('[data-mod-note]'); if (el)
            el.textContent = ok ? 'Mit dem Worker synchronisiert.' : 'Lokal gespeichert – Worker-Synchronisierung nicht bestätigt.'; return ok; };
        box.addEventListener('input', e => {
            const field = e.target.closest('[data-mf]');
            const item = field?.closest('[data-mod-id]');
            if (field && item) {
                const x = items.find(i => i.id === item.dataset.modId);
                if (x)
                    x[field.dataset.mf] = field.value;
            }
            const sub = e.target.closest('[data-sub-title],[data-sub-body]');
            if (sub) {
                const card = sub.closest('[data-mod-id]'), row = sub.closest('[data-sub-index]'), x = items.find(v => v.id === card?.dataset.modId), i = Number(row?.dataset.subIndex);
                if (x && Number.isInteger(i) && x.subsections?.[i])
                    x.subsections[i][sub.matches('[data-sub-title]') ? 'title' : 'body'] = sub.value;
            }
        });
        box.addEventListener('change', async (e) => {
            if (e.target.matches('[data-anatomy-import-file]')) {
                const file = e.target.files?.[0]; if (!file) return;
                try {
                    if (file.size > 2_000_000) throw Error('Maximal 2 MB pro JSON-Datei.');
                    const parsed = JSON.parse(await file.text());
                    if (!Array.isArray(parsed) || parsed.length > 150) throw Error('Erwartet wird eine Liste mit maximal 150 Einträgen.');
                    if (parsed.some(r => !r || Array.isArray(r) || typeof r !== 'object' || typeof r.titel !== 'string' || !r.titel.trim() || typeof r.organgruppe !== 'string' || !r.organgruppe.trim())) throw Error('titel und organgruppe sind Pflichtfelder.');
                    anatomyImportRows = parsed;
                    anatomyPreview();
                } catch (err) {
                    anatomyImportRows = [];
                    box.querySelector('[data-anatomy-import-preview]').textContent = 'Importfehler: ' + err.message;
                }
                return;
            }
            if (e.target.matches('[data-mod-region]')) {
            organFilter = e.target.value;
            selectedId = '';
            render();
            return;
        } if (e.target.matches("[data-mod-select]")) {
            selectedId = e.target.value;
            render();
            return;
        } const input = e.target.closest('[data-module-upload]'); if (!input?.files?.[0])
            return; const file = input.files[0]; if (file.size > 10 * 1024 * 1024) {
            alert('Bitte Dateien unter 10 MB wählen.');
            return;
        } if (input.dataset.moduleUpload === 'pdf' && (file.type !== 'application/pdf' || !file.name.toLowerCase().endsWith('.pdf'))) {
            alert('Bitte eine PDF-Datei wählen.');
            return;
        } const card = input.closest('[data-mod-id]'); if (!card)
            return; const note = card.querySelector('.ost-module-upload-note') || document.createElement('div'); note.className = 'ost-module-upload-note'; input.parentElement.after(note); note.textContent = 'Bild wird hochgeladen …'; try {
            const url = await uploadMedia(file);
            if (input.dataset.moduleUpload === 'pdf') {
                card.querySelector('[data-mf="documentUrl"]').value = url;
            }
            else if (input.dataset.moduleUpload === 'cover') {
                card.querySelector('[data-mf="image"]').value = url;
            }
            else {
                const field = card.querySelector('[data-mf="body"]');
                const pos = field.selectionStart ?? field.value.length;
                field.setRangeText(`\n\n![${file.name.replace(/\.[^.]+$/, '')}](${url})\n\n`, pos, pos, 'end');
                field.focus();
            }
            note.textContent = 'Hochgeladen – bitte anschließend „Speichern“ wählen.';
        }
        catch (err) {
            note.textContent = 'Upload fehlgeschlagen: ' + err.message;
        } input.value = ''; });
        box.addEventListener('click', e => { const btn = e.target.closest('[data-rich]'); if (!btn)
            return; const card = btn.closest('[data-mod-id]'), area = card?.querySelector('[data-mf="body"]'); if (!area)
            return; const a = area.selectionStart, b = area.selectionEnd, v = area.value, sel = v.slice(a, b); if (btn.dataset.rich === "image") {
            card?.querySelector('[data-module-upload="inline"]')?.click();
            return;
        } let replacement = ''; switch (btn.dataset.rich) {
            case 'heading':
                replacement = '## ' + (sel || 'Neue Überschrift');
                break;
            case 'bold':
                replacement = '**' + (sel || 'Wichtiger Begriff') + '**';
                break;
            case 'italic':
                replacement = '*' + (sel || 'Hervorhebung') + '*';
                break;
            case 'list':
                replacement = '- ' + (sel || 'Listenpunkt');
                break;
            case 'image':
                card?.querySelector('[data-module-upload="inline"]')?.click();
                return;
        } area.setRangeText(replacement, a, b, 'end'); area.focus(); });
        box.onclick = async (e) => { const sb = e.target.closest('[data-sub-add],[data-sub-remove],[data-sub-move]'); if (sb) {
            const card = sb.closest('[data-mod-id]'), x = items.find(v => v.id === card?.dataset.modId);
            if (!x)
                return;
            card.querySelectorAll('[data-mf]').forEach(el => x[el.dataset.mf] = el.value);
            x.subsections = Array.isArray(x.subsections) ? x.subsections : [];
            const row = sb.closest('[data-sub-index]'), i = Number(row?.dataset.subIndex);
            if (sb.hasAttribute('data-sub-add'))
                x.subsections.push({ title: 'Neuer Unterpunkt', body: '' });
            else if (row && sb.hasAttribute('data-sub-remove'))
                x.subsections.splice(i, 1);
            else if (row) {
                const j = i + (sb.dataset.subMove === 'up' ? -1 : 1);
                if (j >= 0 && j < x.subsections.length)
                    [x.subsections[i], x.subsections[j]] = [x.subsections[j], x.subsections[i]];
            }
            render();
            return;
        } if (e.target.closest('[data-checklist-transfer]')) {
            const chosen = box.querySelector('[data-checklist-transfer-id]')?.value;
            const x = items.find(x => x.id === chosen && x.module === 'checklists');
            if (!x) { alert('Bitte zuerst eine Übungscheckliste auswählen.'); return; }
            if (!confirm('„' + x.title + '“ von Training nach Materialien verschieben? Der Inhalt bleibt vollständig erhalten.')) return;
            x.module = 'material-checklists';
            selectedId = x.id;
            const ok = await persist();
            render();
            const note = box.querySelector('[data-mod-note]');
            if (note) note.textContent = ok ? 'Checkliste nach Materialien verschoben und gespeichert.' : 'Verschiebung nur lokal gespeichert – Worker prüfen.';
            return;
        } const tab = e.target.closest('[data-mod-tab]'); if (tab) {
            active = tab.dataset.modTab;
            render();
            return;
        } if (e.target.closest('[data-anatomy-import-apply]')) {
            const note = box.querySelector('[data-anatomy-import-note]');
            const indexes = [...box.querySelectorAll('[data-anatomy-import-row]:checked')].map(x => Number(x.dataset.anatomyImportRow));
            const existing = new Set(items.filter(x => x.module === 'anatomy').map(x => anatomyNorm(x.title)));
            const seen = new Set(existing); const picked = indexes.map(i => anatomyImportRows[i]).filter(r => { const key = anatomyNorm(r?.titel); if (!r || !anatomyOrgan(r.organgruppe) || seen.has(key)) return false; seen.add(key); return true; });
            if (!picked.length) { if (note) note.textContent = 'Bitte neue Einträge auswählen.'; return; }
            if (!confirm(picked.length + ' Anatomie-Einträge als Entwürfe übernehmen? Vorhandene Einträge werden nicht verändert.')) return;
            const additions = picked.map((r,i) => ({
                id: 'anatomy-import-' + Date.now().toString(36) + '-' + i,
                module: 'anatomy', organGroup: anatomyOrgan(r.organgruppe).id, title: r.titel.trim(),
                category: String(r.organgruppe || ''), summary: String(r.zusammenfassung || ''),
                body: [r.grundlagen, r.physiologie && '## Physiologie\n' + r.physiologie, r.rs_schwerpunkt && '## RS – Schwerpunkt\n' + r.rs_schwerpunkt, r.nfs_vertiefung && '## NFS – Vertiefung\n' + r.nfs_vertiefung, r.warnzeichen && '## Warnzeichen / CAVE\n' + r.warnzeichen].filter(Boolean).join('\n\n'),
                icon: '', image: '', imageCaption: '', sources: String(r.quellen || ''),
                synonyms: String(r.synonyme || ''), reviewOwner: '', reviewDue: '', status: 'draft',
                subsections: Array.isArray(r.unterpunkte) ? r.unterpunkte.filter(x => x && typeof x.titel === 'string').map(x => ({title: String(x.titel), body: String(x.inhalt || '')})) : [], related: []
            }));
            const updated = [...additions, ...items];
            const ok = await save('knowledgeModules', updated);
            if (!ok) { if (note) note.textContent = 'Cloudflare-Speicherung nicht bestätigt. Daten nicht übernommen. Bitte Verbindung prüfen.'; return; }
            items = updated;
            anatomyImportRows = [];
            selectedId = additions[0]?.id || '';
            render();
            const msg = box.querySelector('[data-mod-note]');
            if (msg) msg.textContent = additions.length + ' Anatomie-Einträge als Entwürfe übernommen und synchronisiert. Bitte einzeln fachlich prüfen und veröffentlichen.';
            return;
        } if (e.target.closest('[data-mod-seed]')) {
            const seeds = window.OST1020_MODULE_SEED || [];
            const updates = seeds.filter(seed => seed.module === active && items.some(x => x.id === seed.id && (x.body !== seed.body || x.image !== seed.image)));
            if (!updates.length) {
                alert('Für diese Rubrik liegen keine neueren Lerntexte vor.');
                return;
            }
            if (!confirm(updates.length + ' bestehende Einträge mit erweiterten Lerntexten und Abbildungen aus der Projektversion aktualisieren? Eigene Texte in diesen Einträgen werden ersetzt. Vorher ein Backup der Produktivdaten erstellen.'))
                return;
            items = items.map(x => { const seed = updates.find(y => y.id === x.id); return seed ? { ...x, body: seed.body, image: seed.image || x.image, imageCaption: seed.imageCaption || x.imageCaption, sources: x.sources || seed.sources } : x; });
            await persist();
            render();
            return;
        } if (e.target.closest('[data-mod-order]')) {
            const btn = e.target.closest('[data-mod-order]');
            const rows = orderedModuleItems();
            const position = rows.findIndex(x => x.id === btn.dataset.modOrderId);
            const neighbor = rows[position + (btn.dataset.modOrder === 'up' ? -1 : 1)];
            if (position < 0 || !neighbor) return;
            // Nur Eintraege derselben Modulart / Organgruppe umsortieren.
            const ordered = rows.slice();
            const j = ordered.indexOf(neighbor);
            [ordered[position], ordered[j]] = [ordered[j], ordered[position]];
            ordered.forEach((x, i) => { x.order = i + 1; });
            const ok = await persist();
            render();
            const note = box.querySelector('[data-mod-note]');
            if (note) note.textContent = ok ? 'Reihenfolge gespeichert und synchronisiert.' : 'Reihenfolge nur lokal gespeichert – Worker prüfen.';
            return;
        } if (e.target.closest('[data-mod-new]')) {
            const id = 'wissen-' + Date.now().toString(36);
            items.unshift({ id, module: active, organGroup: ['anatomy', 'befund'].includes(active) ? organFilter : '', title: 'Neuer Eintrag', category: '', summary: '', body: '', icon: '', image: '', imageCaption: '', sources: '', synonyms: '', reviewOwner: '', reviewDue: '', status: 'draft', related: [] });
            selectedId = id;
            render();
            const el = box.querySelector('[data-mod-id="' + id + '"]');
            if (el)
                el.open = true;
            return;
        } const card = e.target.closest('[data-mod-id]'); if (!card)
            return; const x = items.find(i => i.id === card.dataset.modId); if (!x)
            return; if (e.target.closest('[data-mod-delete]')) {
            if (!confirm('Eintrag endgültig löschen?'))
                return;
            items = items.filter(i => i !== x);
            await persist();
            render();
            return;
        } if (e.target.closest('[data-mod-save]')) {
            card.querySelectorAll('[data-mf]').forEach(el => x[el.dataset.mf] = el.value);
            if (!x.title.trim()) {
                alert('Titel fehlt.');
                return;
            }
            const destination = card.querySelector('[data-checklist-target]')?.value;
            const moved = ['checklists', 'material-checklists'].includes(x.module) &&
                ['checklists', 'material-checklists'].includes(destination) && destination !== x.module;
            if (moved && !confirm('„' + x.title + '“ in den anderen Checklisten-Bereich verschieben?')) return;
            if (moved) x.module = destination;
            const ok = await persist();
            if (moved) selectedId = '';
            render();
            if (moved) {
                const note = box.querySelector('[data-mod-note]');
                if (note) note.textContent = ok ? 'Checkliste verschoben und gespeichert. Sie ist jetzt im anderen Bereich sichtbar.' : 'Verschiebung nur lokal gespeichert – Worker prüfen.';
            }
        } };
        render();
    }
    const CF_TOPICS = [
        { id: 'herz', label: 'Herz & Kreislauf', icon: 'heart', image: 'herz', groups: ['Kreislauf'], anatomy: /herz|kreislauf|blut und sauerstoff/i, pharma: /sympathomim|katechol|antiarrhythm|antithromb|volumen/i, terms: ['herz', 'kreislauf', 'koronar', 'cardio', 'kardio', 'ekg', 'rhythm', 'infarkt', 'aorta', 'schock', 'synkope', 'palpitation', 'thorax', 'reanimation', 'cpr'] },
        { id: 'atmung', label: 'Atmung & Atemwege', icon: 'device', image: 'atmung', groups: ['Atmung', 'Atemweg'], anatomy: /atmung|gasaustausch/i, pharma: /bronchodil|glukokortikoid/i, terms: ['atem', 'lungen', 'lunge', 'asthma', 'copd', 'hypox', 'dyspnoe', 'bronch', 'respira', 'pneumo', 'stridor', 'husten'] },
        { id: 'neurologie', label: 'Neurologie', icon: 'anatomy', image: 'gehirn', groups: ['Neurologie'], anatomy: /gehirn|nervensystem/i, pharma: /antikonvuls|sedativ/i, terms: ['gehirn', 'nerv', 'schlaganfall', 'krampf', 'stroke', 'bewusst', 'neuro', 'schwindel', 'kopfschmerz'] },
        { id: 'abdomen', label: 'Abdomen & Stoffwechsel', icon: 'search', image: 'bauch', groups: ['Abdomen', 'Stoffwechsel', 'Infektion'], anatomy: /verdau|leber|stoffwechsel|säure-basen/i, pharma: /antiemet|glukoseregulation|volumen/i, terms: ['bauch', 'abdomen', 'magen', 'stoffwechsel', 'diabet', 'zucker', 'leber', 'verdau', 'gastro', 'metabol', 'übelkeit'] },
        { id: 'niere', label: 'Niere & Harnsystem', icon: 'pill', image: 'niere', groups: ['Urologie', 'Geburtshilfe'], anatomy: /niere|flüssigkeitshaushalt|säure-basen/i, pharma: /volumen|elektrolyte/i, terms: ['niere', 'harn', 'uro', 'flüssigkeit', 'elektrolyt', 'diure', 'geburtshilfe', 'gynäk'] },
        { id: 'trauma', label: 'Trauma & Bewegung', icon: 'training', image: null, groups: ['Trauma', 'Umwelt'], anatomy: /bewegung|knochen|muskel/i, pharma: /analget|schmerz/i, terms: ['trauma', 'fraktur', 'verletz', 'wirbel', 'lagerung', 'schiene', 'beweg', 'knochen', 'blutung'] }
    ];
    const CF_ORGAN_TABS = [['anatomy', 'Anatomie & Physiologie', 'anatomy'], ['diseases', 'Krankheitsbilder', 'heart'], ['terms', 'Fachbegriffe', 'dictionary'], ['materials', 'Materialien', 'book']];
    const cfTopicContains = (value, topic) => { const text = normalizedSearch(value); return topic.terms.some(term => text.includes(normalizedSearch(term))); };
    function cf552AnatomyBody(value, subsections) {
        const segments = String(value || '').split(/^(#{2,3})[ \t]+(.+)\s*$/gm);
        let html = segments[0]?.trim() ? `<div class="ost-module-body">${renderModuleText(segments[0])}</div>` : '';
        for (let i = 1; i + 1 < segments.length; i += 3) {
            const title = segments[i + 1]?.trim();
            if (!title)
                continue;
            html += `<details class="cf552-anatomy-subpoint"><summary>${esc(title)}<span class="cf552-chevron" aria-hidden="true"></span></summary><div class="ost-module-body">${renderModuleText(segments[i + 2] || '')}</div></details>`;
        }
        for (const x of (Array.isArray(subsections) ? subsections : [])) {
            if (!String(x.title || '').trim())
                continue;
            html += `<details class="cf552-anatomy-subpoint"><summary>${esc(x.title)}<span class="cf552-chevron" aria-hidden="true"></span></summary><div class="ost-module-body">${renderModuleText(x.body || '')}</div></details>`;
        }
        return html || '<div class="ost-module-body">Noch kein Fachinhalt hinterlegt.</div>';
    }
    // ------------------------------------------------------------------------
    // Wissen: Organgruppen, Inhalte und aufklappbare Eintraege
    // ------------------------------------------------------------------------
    function ost570CleanHtml(markup) {
        const input = document.createElement('template'); input.innerHTML = String(markup || '');
        const allowed = new Set(['P','DIV','H2','H3','H4','STRONG','B','EM','I','U','UL','OL','LI','BLOCKQUOTE','BR','A','IMG','FONT','SPAN']);
        function clean(node) {
            if (node.nodeType === 3) return document.createTextNode(node.textContent);
            if (node.nodeType !== 1) return document.createDocumentFragment();
            const tag = allowed.has(node.tagName) ? node.tagName.toLowerCase() : 'span';
            const el = document.createElement(tag);
            if (tag === 'a') { try {const u = new URL(node.getAttribute('href') || '', location.href); if (['https:','http:'].includes(u.protocol)) {el.href=u.href;el.rel='noopener noreferrer';el.target='_blank';}} catch(e){} }
            if (tag === 'img') { try {const u = new URL(node.getAttribute('src') || '', location.href);if(['https:','http:'].includes(u.protocol)){el.src=u.href;el.alt=node.getAttribute('alt') || 'Illustration';el.loading='lazy';}} catch(e){} }
            if (tag === 'font') { const face=node.getAttribute('face');if(['Arial','Georgia','Verdana','Times New Roman','Courier New'].includes(face))el.setAttribute('face',face);const size=Number(node.getAttribute('size'));if(size>=1&&size<=7)el.setAttribute('size',String(size));const color=node.getAttribute('color')||'';if(/^#[a-f0-9]{6}$/i.test(color))el.setAttribute('color',color);}
            // Safe, whitelisted CSS for rich text: no arbitrary style URLs or layout overrides.
            const colorOk=v=>/^#[a-f0-9]{3,8}$/i.test(v)||/^rgba?\(\s*[\d.,%\s]+\)$/i.test(v);
            if(['p','div','span','h2','h3','h4','li','blockquote'].includes(tag)){
              if(colorOk(node.style.color))el.style.color=node.style.color;
              if(colorOk(node.style.backgroundColor))el.style.backgroundColor=node.style.backgroundColor;
              if(['left','center','right','justify'].includes(node.style.textAlign))el.style.textAlign=node.style.textAlign;
              if(/^(?:[8-9]|[1-4]\d|50)px$/.test(node.style.fontSize))el.style.fontSize=node.style.fontSize;
              const family=node.style.fontFamily.replace(/["']/g,'');if(['Arial','Georgia','Verdana','Times New Roman','Courier New'].includes(family))el.style.fontFamily=family;
            }
            if (node.dataset?.callout && ['danger','info','note','success'].includes(node.dataset.callout)) el.dataset.callout=node.dataset.callout;
            for (const child of [...node.childNodes]) el.appendChild(clean(child));
            return el;
        }
        const wrap = document.createElement('div');
        for(const node of [...input.content.childNodes]) wrap.appendChild(clean(node));
        return wrap.innerHTML;
    }
        const ost573Toolbar = () => `<div class="ost573-toolbar" role="toolbar" aria-label="Text formatieren"><button type="button" data-rt="bold" title="Fett"><b>F</b></button><button type="button" data-rt="italic" title="Kursiv"><i>K</i></button><button type="button" data-rt="underline" title="Unterstrichen"><u>U</u></button><button type="button" data-rt="insertUnorderedList" title="Aufzählung">• Liste</button><button type="button" data-rt="insertOrderedList" title="Nummerierung">1. Liste</button><button type="button" data-rt="formatBlock" data-val="H3" title="Überschrift">H3</button><button type="button" data-rt="formatBlock" data-val="P" title="Normaler Absatz">Absatz</button><select data-rt-font aria-label="Schriftart"><option value="">Schriftart</option><option value="Arial">Arial</option><option value="Georgia">Georgia</option><option value="Verdana">Verdana</option><option value="Times New Roman">Times New Roman</option><option value="Courier New">Courier New</option></select><select data-rt-size aria-label="Schriftgröße"><option value="">Größe</option><option value="2">Klein</option><option value="3">Normal</option><option value="4">Groß</option><option value="5">Sehr groß</option></select><label class="ost583-color-label" title="Textfarbe">Text <input type="color" value="#193c55" data-rt-color aria-label="Textfarbe"></label><label class="ost583-color-label" title="Hintergrundfarbe">Marker <input type="color" value="#fff4a7" data-rt-highlight aria-label="Text hervorheben"></label><button type="button" data-rt-link>Link</button><button type="button" data-rt-img>Bild-URL</button><label class="ost583-rich-upload">Bild hochladen<input type="file" accept="image/jpeg,image/png,image/webp" data-rt-upload></label><span class="ost583-rt-status" data-rt-status aria-live="polite"></span></div>`;
        function ost573BindRich(host, editor){
            if(!host||!editor)return;
            let savedRange=null;
            const capture=()=>{const sel=window.getSelection();if(sel?.rangeCount&&editor.contains(sel.anchorNode))savedRange=sel.getRangeAt(0).cloneRange();};
            const restore=()=>{editor.focus();if(!savedRange)return;try{const sel=window.getSelection();sel.removeAllRanges();sel.addRange(savedRange);}catch(e){}};
            const apply=(cmd,value=null)=>{restore();document.execCommand(cmd,false,value);capture();};
            ['keyup','mouseup','input','touchend'].forEach(kind=>editor.addEventListener(kind,capture));
            $$('[data-rt]',host).forEach(b=>{b.addEventListener('mousedown',e=>e.preventDefault());b.onclick=()=>apply(b.dataset.rt,b.dataset.val||null);});
            const font=$('[data-rt-font]',host),size=$('[data-rt-size]',host),color=$('[data-rt-color]',host),highlight=$('[data-rt-highlight]',host);
            if(font)font.onchange=e=>{if(e.target.value)apply('fontName',e.target.value);};
            if(size)size.onchange=e=>{if(e.target.value)apply('fontSize',e.target.value);};
            if(color)color.oninput=e=>apply('foreColor',e.target.value);
            if(highlight)highlight.oninput=e=>apply('hiliteColor',e.target.value);
            const link=$('[data-rt-link]',host);if(link)link.onclick=()=>{const url=prompt('HTTPS-Link:');if(!url)return;try{const u=new URL(url);if(u.protocol!=='https:')throw Error();apply('createLink',u.href);}catch{alert('Bitte eine gültige HTTPS-Adresse eingeben.');}};
            const img=$('[data-rt-img]',host);if(img)img.onclick=()=>{const url=prompt('Öffentliche HTTPS-Bildadresse:');if(!url)return;try{const u=new URL(url);if(u.protocol!=='https:')throw Error();apply('insertImage',u.href);}catch{alert('Bitte eine gültige HTTPS-Bildadresse eingeben.');}};
            const upload=$('[data-rt-upload]',host);if(upload)upload.onchange=async()=>{
              const file=upload.files?.[0],status=$('[data-rt-status]',host);if(!file)return;
              if(!['image/jpeg','image/png','image/webp'].includes(file.type)){if(status)status.textContent='Nur JPG, PNG oder WebP.';return;}
              if(file.size>12*1024*1024){if(status)status.textContent='Bild zu groß (max. 12 MB).';return;}
              if(status)status.textContent='Bild wird hochgeladen …';upload.disabled=true;
              try{const url=await uploadMedia(file);apply('insertImage',url);if(status)status.textContent='Bild eingefügt.';}
              catch(e){if(status)status.textContent='Upload fehlgeschlagen: '+(e.message||'Worker prüfen');}
              finally{upload.disabled=false;upload.value='';}
            };
        }
    // Update 574: gemeinsame PIN-geschützte Bearbeitung direkt an bestehenden Einträgen.
    // Spezialfelder bleiben separat; Anmeldelisten und Anhänge werden nie überschrieben.
    const ost574Config = {
      'aktuelles.html': {store:'news', cards:'.news-list [data-news]', title:'h2,h3,strong', rich:['text'], fields:['category','date','link']},
      'literatur.html': {store:'articles', cards:'.cf548-archive-card', title:'h2', rich:['why'], fields:['authors','journal','year','doi','freeUrl','publisherUrl']},
      'lehrmeinung.html': {store:'changes', cards:'.change-detail,.ost-tonal-list .row-card', title:'h1,strong', rich:['old','new','source','validity'], fields:['date','category','imageUrl']},
      'dienstbesprechungen.html': {store:'meetings', cards:'.meeting-detail,.meeting-tile', title:'h1,h2', rich:['summary'], fields:['date','category','speaker']},
      'termine.html': {store:'events', cards:'.event-card', title:'h3', rich:['description'], fields:['date','time','location','category','capacity']},
      'materialien.html': {store:'algorithms', cards:'.cf563-entry', title:'summary strong', rich:['explanation'], fields:['category','stand','source','sourceUrl']},
      'training.html': {store:'knowledgeModules', cards:'.cf563-entry', title:'summary strong', rich:['body','summary'], fields:['category','documentUrl']},
      'skilltraining.html': {store:'skills', cards:'.ost-skill-group', title:'.ost-skill-acc-title', rich:[], fields:[]}
    };

    // Neue Einträge auf den jeweiligen Seiten, PIN und identischer Speicherdienst.
    const ost575Defaults={
      news:{title:'Neue Meldung',category:'Allgemeines',date:new Date().toISOString().slice(0,10),text:''},
      events:{title:'Neuer Termin',date:new Date().toISOString().slice(0,10),time:'18:00',location:'',category:'Übungen',capacity:10,description:'',attendees:[],waitlist:[]},
      changes:{title:'Neue Lehrmeinung',date:new Date().toISOString().slice(0,10),category:'Allgemein',old:'',new:'',source:'',active:true},
      meetings:{title:'Neue Besprechung',date:new Date().toISOString().slice(0,10),category:'Allgemein',speaker:'',summary:'',files:[]},
      articles:{title:'Neue Literatur',authors:'',journal:'',year:new Date().getFullYear(),why:'',topics:[],tags:[]},
      knowledgeModules:{title:'Neue Checkliste',module:'checklists',status:'published',body:'',summary:'',documentUrl:''},
      algorithms:{title:'Neue Leitlinie',category:'Leitlinie',steps:[],materials:{background:[],checklists:[]},sourceUrl:'',source:''},
      skills:{name:'Neue Skillgruppe',skills:[]}
    };
    // Update 576: zentrale Bearbeitungsfreigabe und eigene Neuanlage-Maske.
    const ost576IsEditing=()=>sessionStorage.getItem('ost1020-edit-unlocked')==='1';
    function ost576SyncEdit(){document.body.classList.toggle('ost576-edit-enabled',ost576IsEditing());}
    async function ost576ToggleEdit(){
      if(ost576IsEditing()){
        sessionStorage.removeItem('ost1020-edit-unlocked');sessionStorage.removeItem('ost1020-editor-pin');ost576SyncEdit();return;
      }
      if(await ost574Pin()){sessionStorage.setItem('ost1020-edit-unlocked','1');ost576SyncEdit();}
    }
    function ost576InstallSwitch(){
      const home=/^(index\.html)?$/.test(location.pathname.split('/').pop());
      if(!home){document.querySelector('[data-ost576-edit-switch]')?.remove();ost576SyncEdit();return;}
      const area=document.querySelector('[data-main]');
      if(!area)return;
      // Reuse the single host created by the home page, without duplicating controls.
      let host=area.querySelector('[data-ost577-switch-host]');
      if(!host){
        host=document.createElement('div');
        host.dataset.ost577SwitchHost='';
        const events=area.querySelector('[data-events-section]');
        if(events)events.insertAdjacentElement('afterend',host);
        else area.appendChild(host);
      }
      host.className='ost577-switch-host';
      let button=host.querySelector('[data-ost576-edit-switch]');
      if(!button){
        button=document.createElement('button');
        button.type='button';
        button.dataset.ost576EditSwitch='';
        button.className='ost576-edit-switch';
        host.appendChild(button);
      }
      button.onclick=async()=>{await ost576ToggleEdit();ost576InstallSwitch();};
      let adminLink=host.querySelector('[data-ost588-admin]');
      if(!adminLink){
        adminLink=document.createElement('a');
        adminLink.href='administration.html';
        adminLink.dataset.ost588Admin='';
        adminLink.className='ost576-edit-switch ost588-admin-link';
        adminLink.textContent='⚙ Verwaltung';
        host.appendChild(adminLink);
      }
      button.textContent=ost576IsEditing()?'🔒 Bearbeitung beenden':'✎ Bearbeitung freigeben';
      button.setAttribute('aria-pressed',String(ost576IsEditing()));
      ost576SyncEdit();
    }

    function ost576Modal(title,fields,onSave){
      document.querySelector('.ost576-modal-backdrop')?.remove();
      const backdrop=document.createElement('div');backdrop.className='ost576-modal-backdrop';
      const showField=f=>{
        const key=esc(f.key),label=esc(f.label||f.key),value=esc(f.value??'');
        let control='';
        if(f.type==='textarea')control=`<textarea name="${key}" rows="5" ${f.required?'required':''}>${value}</textarea>`;
        else if(f.type==='rich')control=`<div class="ost583-modal-rich">${ost573Toolbar()}<div class="ost573-editable" data-ost583-rich="${key}" contenteditable="true" role="textbox" aria-label="${label}">${ost570CleanHtml(f.value||'')}</div></div>`;
        else if(f.type==='select')control=`<select name="${key}">${(f.options||[]).map(o=>`<option value="${esc(o.value)}" ${String(o.value)===String(f.value)?'selected':''}>${esc(o.label)}</option>`).join('')}</select>`;
        else control=`<input name="${key}" type="${f.type||'text'}" value="${value}" ${f.required?'required':''}>`;
        return `<div class="ost583-modal-field"><label for="ost583-${key}">${label}</label>${control}</div>`;
      };
      backdrop.innerHTML=`<section class="ost576-modal ost583-modal" role="dialog" aria-modal="true" aria-label="${esc(title)}"><header><h2>${esc(title)}</h2><button class="ost576-close" type="button" aria-label="Schließen">×</button></header><form class="ost576-form">${fields.map(showField).join('')}<div class="ost576-form-actions"><button class="btn primary" type="submit">Speichern</button><button class="btn" type="button" data-cancel>Abbrechen</button><span role="status" data-status></span></div></form></section>`;
      document.body.appendChild(backdrop);
      backdrop.querySelectorAll('.ost583-modal-rich').forEach(host=>ost573BindRich(host,host.querySelector('[contenteditable]')));
      const close=()=>{backdrop.remove();document.removeEventListener('keydown',escKey);};
      const escKey=e=>{if(e.key==='Escape'&&!e.isComposing){e.stopPropagation();close();}};
      document.addEventListener('keydown',escKey);
      backdrop.querySelector('.ost576-close').onclick=close;
      backdrop.querySelector('[data-cancel]').onclick=close;
      backdrop.addEventListener('click',e=>{if(e.target===backdrop)close();});
      backdrop.querySelector('form').onsubmit=async e=>{
        e.preventDefault();const form=e.currentTarget,submit=form.querySelector('[type=submit]'),status=backdrop.querySelector('[data-status]');
        if(!form.reportValidity())return;
        submit.disabled=true;status.textContent='Speichere …';
        const vals=Object.fromEntries(new FormData(form).entries());
        backdrop.querySelectorAll('[data-ost583-rich]').forEach(node=>vals[node.dataset.ost583Rich]=ost570CleanHtml(node.innerHTML));
        try{if(await onSave(vals))close();else status.textContent='Speichern fehlgeschlagen. Bitte Verbindung und PIN prüfen.';}
        catch(err){status.textContent=err.message||'Speichern fehlgeschlagen.';}
        finally{if(submit.isConnected)submit.disabled=false;}
      };
      backdrop.querySelector('input,textarea,select,[contenteditable]')?.focus();return backdrop;
    }
    async function ost575Create(store,overrides={}){
      if(!await ost574Pin())return;
      const item={...ost575Defaults[store],...overrides,id:'inline-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6)};
      const map={news:['title','date','category','text'],events:['title','date','time','location','category','capacity','description'],changes:['title','date','category','old','new','source'],meetings:['title','date','category','speaker','summary'],articles:['title','authors','journal','year','why','freeUrl'],differential:['title','theory'],knowledgeModules:['title','summary','documentUrl'],algorithms:['title','sourceUrl','source'],skills:['name']};
      const keys=map[store]||['title'];const fields=keys.map(k=>({key:k,label:({title:'Titel',name:'Skillgruppe',date:'Datum',time:'Uhrzeit',location:'Ort',category:'Kategorie',capacity:'Teilnehmerlimit',description:'Beschreibung',summary:'Untertitel',documentUrl:'PDF-/Web-Link',sourceUrl:'PDF-/Web-Link',old:'Bisherige Lehrmeinung',new:'Neue Lehrmeinung',text:'Meldung',why:'Beschreibung',theory:'Überblick'})[k]||k,value:item[k]??'',type:k==='date'?'date':k==='capacity'?'number':['description','text','old','new','why','theory'].includes(k)?'rich':'text',required:k==='title'||k==='name'}));
      ost576Modal('Neuen Eintrag erstellen',fields,async values=>{const data=await get(store);if(!Array.isArray(data))return false;Object.assign(item,values);if('capacity' in item)item.capacity=Number(item.capacity)||10;const ok=await save(store,[...data,item]);if(ok)location.reload();return ok;});
    }
    async function ost583CreateSkill(){
      if(!await ost574Pin())return;
      const groups=await get('skills');if(!Array.isArray(groups)||!groups.length){alert('Bitte zunächst eine Skillgruppe anlegen.');return;}
      ost576Modal('Neuen Skill anlegen',[{key:'group',label:'Skillgruppe',type:'select',value:groups[0].id||groups[0].name,options:groups.map(g=>({value:g.id||g.name,label:g.name}))},{key:'name',label:'Name des Skills',required:true},{key:'description',label:'Was muss man können?',type:'textarea'}],async v=>{
        const fresh=await get('skills'),group=fresh.find(g=>(g.id||g.name)===v.group.trim());if(!group||!v.name.trim())return false;
        group.skills=[...(group.skills||[]),{name:v.name.trim(),sections:[{title:'Was muss man können?',items:v.description.split('\n').map(x=>x.trim()).filter(Boolean)}]}];
        if(await save('skills',fresh)){location.reload();return true;}return false;
      });
    }
    function ost583SkillAdd(root){
      if(!root||root.querySelector('[data-ost583-skill-add]'))return;
      root.querySelector('[data-ost575-add]')?.remove();
      const b=document.createElement('button');b.type='button';b.className='ost575-add';b.dataset.ost583SkillAdd='';b.textContent='＋ Skill hinzufügen';b.onclick=ost583CreateSkill;root.appendChild(b);
    }
    function ost575AddButton(root,store,overrides={}){
      if(!root || root.querySelector('[data-ost575-add]'))return;
      const b=document.createElement('button');b.type='button';b.className='ost575-add';b.dataset.ost575Add='';b.textContent='＋ Neuer Eintrag';b.title='Neuen Eintrag anlegen';
      root.appendChild(b);b.onclick=()=>ost575Create(store,overrides);
    }
    let ost574Decorating=false;
    function ost574MatchesTitle(rec, title){return String(rec?.title || rec?.name || '').trim() === title.trim();}
    async function ost574Pin(){
      let pin=sessionStorage.getItem('ost1020-editor-pin')||'';
      if(pin && await verifyEditorPin(pin)) return true;
      pin=prompt('Redaktions-PIN eingeben:')||'';
      if(!pin || !await verifyEditorPin(pin)){alert('PIN nicht korrekt oder Eingabe abgebrochen.');return false;}
      sessionStorage.setItem('ost1020-editor-pin',pin);return true;
    }
    function ost574Fields(record,config){
      return [...config.fields.map(k=>({key:k,label:k,rich:false})),...config.rich.map(k=>({key:k,label:k,rich:true}))];
    }
    async function ost574Edit(entry,record,config){
      if(entry.dataset.ost574Editing==='yes') return;
      if(!await ost574Pin()) return;
      const store=config.store, existing=await get(store);
      const idx=existing.findIndex(x=>String(x.id)===String(record.id));
      if(idx<0){alert('Datensatz wurde nicht gefunden.');return;}
      const mainTitle=entry.querySelector(config.title);
      if(!mainTitle){alert('Titel nicht gefunden.');return;}
      entry.dataset.ost574Editing='yes';
      // Editor-Steuerelemente müssen ihre eigenen Click-Handler erhalten.
      // Kein Capture-Listener: dieser verhinderte Speichern, Abbrechen und Löschen.
      const originalTitle=mainTitle.innerHTML;
      const originalSnapshot=[...entry.children].filter(el=>!el.matches('.ost574-tools,.ost574-fields')).map(el=>[el,el.hidden]);
      // Titel wird direkt an seiner bisherigen Stelle bearbeitet.
      mainTitle.contentEditable='true';mainTitle.classList.add('ost574-title-live');
      mainTitle.textContent=record.title||record.name||'';
      mainTitle.focus();
      const widget=document.createElement('div');widget.className='ost574-fields';
      const fields=ost574Fields(record,config);
      widget.innerHTML=fields.map(({key,label,rich})=>`<div class="ost574-field"><label>${esc(({date:'Datum',time:'Uhrzeit',location:'Ort',category:'Kategorie',capacity:'Teilnehmerlimit',imageUrl:'Bildadresse',old:'Bisherige Lehrmeinung',new:'Neue Lehrmeinung',source:'Quelle',description:'Beschreibung',summary:'Kurzbeschreibung',documentUrl:'PDF oder Link',sourceUrl:'Link',stand:'Stand'})[label]||label)}</label>${rich ? `${ost573Toolbar()}<div class="ost573-editable ost574-rich-live" contenteditable="true" data-ost574-field="${key}"></div>` : `<input data-ost574-field="${key}" value="${esc(record[key]??'')}">`}</div>`).join('') + `<div class="ost570-actions"><button class="btn primary" type="button" data-ost574-save>Speichern</button><button class="btn" type="button" data-ost574-cancel>Abbrechen</button><span role="status" data-ost574-status></span></div>`;
      entry.appendChild(widget);
      fields.filter(x=>x.rich).forEach(({key})=>{const ed=widget.querySelector(`[data-ost574-field="${key}"]`);ed.innerHTML=ost570CleanHtml(record[key]||'');ost573BindRich(ed.closest('.ost574-field'),ed);});
      // Redundante alte Beschreibung während der Bearbeitung ausblenden, Titel bleibt sichtbar.
      originalSnapshot.forEach(([el])=>{if(el!==mainTitle && !el.contains(mainTitle) && !el.classList.contains('ost574-tools'))el.hidden=true;});
      const reset=()=>{mainTitle.contentEditable='false';mainTitle.classList.remove('ost574-title-live');mainTitle.innerHTML=originalTitle;originalSnapshot.forEach(([el,hidden])=>{el.hidden=hidden;});widget.remove();delete entry.dataset.ost574Editing;};
      const removeButton=document.createElement('button');removeButton.type='button';removeButton.className='btn ost582-delete';removeButton.textContent='Eintrag löschen';removeButton.setAttribute('aria-label','Diesen Eintrag endgültig löschen');
      widget.querySelector('.ost570-actions').prepend(removeButton);
      removeButton.onclick=async()=>{if(!confirm('Eintrag „'+(record.title||record.name||'')+'“ endgültig löschen?'))return;const status=widget.querySelector('[data-ost574-status]');status.textContent='Lösche …';const latest=await get(store);const filtered=latest.filter(x=>String(x.id)!==String(record.id));if(filtered.length===latest.length){status.textContent='Eintrag nicht gefunden.';return;}removeButton.disabled=true;if(await save(store,filtered))location.reload();else{removeButton.disabled=false;status.textContent='Löschen fehlgeschlagen.';}};
      widget.querySelector('[data-ost574-cancel]').onclick=reset;
      widget.querySelector('[data-ost574-save]').onclick=async()=>{
        const status=widget.querySelector('[data-ost574-status]');status.textContent='Speichere …';
        const current=await get(store);const index=current.findIndex(x=>String(x.id)===String(record.id));
        if(index<0){status.textContent='Eintrag nicht gefunden.';return;}
        const next={...current[index]}; next[record.title!==undefined?'title':'name']=mainTitle.textContent.trim()||record.title||record.name;
        fields.forEach(({key,rich})=>{const node=widget.querySelector(`[data-ost574-field="${key}"]`);next[key]=rich?ost570CleanHtml(node.innerHTML):(key==='capacity'?Number(node.value)||0:Array.isArray(current[index][key])?node.value.split(',').map(v=>v.trim()).filter(Boolean):node.value);});
        if(await save(store,current.map((x,i)=>i===index?next:x))){location.reload();}
        else status.textContent='Speichern fehlgeschlagen. Änderungen nicht übernommen.';
      };
    }
    async function ost574EditSkillGroup(entry,group){
      if(entry.dataset.ost574Editing==='yes' || !await ost574Pin())return;
      const data=await get('skills');const idx=data.findIndex(x=>String(x.id)===String(group.id));
      if(idx<0)return;
      entry.dataset.ost574Editing='yes';entry.open=true;
      const title=entry.querySelector('.ost-skill-acc-title,summary strong');if(!title){alert('Skillgruppen-Titel nicht gefunden.');delete entry.dataset.ost574Editing;return;}const initial=title.textContent;
      title.contentEditable='true';title.classList.add('ost574-title-live');
      const list=entry.querySelector('.ost-skill-acc-items')||entry.querySelector('summary + div');const prev=list?.hidden||false;if(list)list.hidden=true;
      const host=document.createElement('div');host.className='ost574-fields';
      host.innerHTML=arr(group.skills).map((sk,i)=>`<section class="ost574-skill"><label>Skill ${i+1}</label><input data-skill-title="${i}" value="${esc(sk.name)}">${arr(sk.sections).map((sec,j)=>`<div class="ost574-skill-section"><label>Abschnitt</label><input data-skill-section-title="${i}-${j}" value="${esc(sec.title)}"><label>Aufzählungspunkte (je eine Zeile)</label><textarea data-skill-items="${i}-${j}" rows="5">${esc(arr(sec.items).join('\n'))}</textarea></div>`).join('')}</section>`).join('')+`<div class="ost570-actions"><button class="btn primary" data-skill-save>Speichern</button><button class="btn" data-skill-cancel>Abbrechen</button><span data-skill-status role="status"></span></div>`;
      entry.appendChild(host);
      const stop=()=>{title.textContent=initial;title.contentEditable='false';title.classList.remove('ost574-title-live');if(list)list.hidden=prev;host.remove();delete entry.dataset.ost574Editing;};
      host.querySelector('[data-skill-cancel]').onclick=stop;
      host.querySelector('[data-skill-save]').onclick=async()=>{
        const status=host.querySelector('[data-skill-status]');status.textContent='Speichere …';
        const latest=await get('skills'),index=latest.findIndex(x=>String(x.id)===String(group.id));if(index<0){status.textContent='Gruppe nicht gefunden.';return;}
        const updated=structuredClone(latest[index]);updated.name=title.textContent.trim()||updated.name;
        arr(updated.skills).forEach((skill,i)=>{skill.name=host.querySelector(`[data-skill-title="${i}"]`).value.trim()||skill.name;arr(skill.sections).forEach((sec,j)=>{sec.title=host.querySelector(`[data-skill-section-title="${i}-${j}"]`).value.trim()||sec.title;sec.items=host.querySelector(`[data-skill-items="${i}-${j}"]`).value.split('\n').map(v=>v.trim()).filter(Boolean);});});
        if(await save('skills',latest.map((v,i)=>i===index?updated:v)))location.reload();else status.textContent='Speichern fehlgeschlagen.';
      };
    }
    async function ost574Decorate(){
      const path=location.pathname.split('/').pop();if(['training.html','materialien.html','skilltraining.html'].includes(path))return;const cfg=ost574Config[path];if(!cfg || ost574Decorating)return;
      ost574Decorating=true;
      try{
        const data=await get(cfg.store);
      ost575AddButton(document.querySelector('[data-main]'),cfg.store);if(!Array.isArray(data))return;
        document.querySelectorAll(cfg.cards).forEach(entry=>{
          if(entry.dataset.ost574Enhanced)return;
          const titleNode=entry.querySelector(cfg.title);if(!titleNode)return;
          const title=titleNode.textContent.trim();const item=entry.dataset.ost574Id?data.find(x=>String(x.id)===entry.dataset.ost574Id):data.find(x=>ost574MatchesTitle(x,title));if(!item)return;

          entry.dataset.ost574Enhanced='yes';entry.classList.add('ost574-editable-card');
          const pencil=document.createElement('button');pencil.type='button';pencil.className='ost574-pencil';pencil.textContent='✎';pencil.title='Direkt bearbeiten (PIN erforderlich)';pencil.setAttribute('aria-label',title+' bearbeiten');
          pencil.onclick=e=>{e.preventDefault();e.stopPropagation();if(entry.tagName==='DETAILS')entry.open=true;if(cfg.store==='skills')ost574EditSkillGroup(entry,item);else if(cfg.store==='articles'||(cfg.store==='meetings'&&entry.classList.contains('meeting-detail')))ost575LinksEditor(entry,cfg.store,item.id);else ost574Edit(entry,item,cfg);};
          // Nicht innerhalb des klickbaren Links verschachteln.
          entry.insertAdjacentElement('afterbegin',pencil);
        });
      }finally{ost574Decorating=false;}
    }
    if(ost574Config[location.pathname.split('/').pop()] && !['training.html','materialien.html','skilltraining.html'].includes(location.pathname.split('/').pop())){
      const obs=new MutationObserver(()=>{if(!ost574Decorating)ost574Decorate();});
      obs.observe(document.querySelector('[data-main]')||document.body,{childList:true,subtree:true});
      setTimeout(ost574Decorate,100);
    }
    async function topicHub() {
        const params = new URLSearchParams(location.search);
        const [modules, differentials, literature, mnemonicStore, siteData] = await Promise.all([get('knowledgeModules'), get('differential'), articles(), get('algorithms'), get('organSystems')]);
        const savedLabels=Object.fromEntries((Array.isArray(siteData)?siteData:[]).map(x=>[x.id,x.label]));
        CF_TOPICS.forEach(t=>{if(typeof savedLabels[t.id]==='string' && savedLabels[t.id].trim())t.label=savedLabels[t.id].trim();});
        const externalOrgans=(Array.isArray(siteData)?siteData:[]).filter(x=>x.isCustom);
        externalOrgans.forEach(x=>{if(x && /^[a-z0-9-]+$/.test(x.id) && !CF_TOPICS.some(t=>t.id===x.id))CF_TOPICS.push({id:x.id,label:x.label,icon:'heart',image:null,groups:[x.group||x.label],anatomy:/^$/,pharma:/^$/,terms:[]});});
        const organMeta=id=>(Array.isArray(siteData)?siteData:[]).find(x=>x.id===id)||{};
        const originalOrder=new Map(CF_TOPICS.map((t,i)=>[t.id,i]));
        CF_TOPICS.sort((a,b)=>(organMeta(a.id).order===undefined?originalOrder.get(a.id)+100:Number(organMeta(a.id).order))-(organMeta(b.id).order===undefined?originalOrder.get(b.id)+100:Number(organMeta(b.id).order)));

        const km = (Array.isArray(modules) ? modules : []).filter(x => x.status !== 'draft');
        const area = $('[data-main]');
        let organ = CF_TOPICS.find(t => t.id === params.get('thema')) || CF_TOPICS[0];
        const views = [['symptoms', 'Leitsymptome', 'heart']];
        let tab = 'symptoms';
        let chosen = params.get('eintrag') || '';
        const stage = params.get('eintrag') ? 'article' : params.get('thema') ? 'symptoms' : 'organs';
        area.innerHTML = `<section class="cf551-wissen cf552-wissen ost570-hub"><div class="ost570-breadcrumb" data-cf-crumb></div><div class="cf547-search" data-cf-search-wrap>${ostIcon('search')}<input data-cf-search type="search" placeholder="Leitsymptom suchen …" aria-label="Leitsymptom suchen"></div><section class="cf552-filter-group cf552-organ-group" data-cf-organ-section><nav class="cf551-organ-nav" data-cf-organs aria-label="Organgruppe auswählen"></nav></section><section class="cf552-filter-group cf552-category-group" data-cf-category-section><nav class="cf551-category-nav" data-cf-categories aria-label="Leitsymptome"></nav></section><div class="cf551-content" data-cf-content></div></section>`;
        const input = $('[data-cf-search]', area), organBar = $('[data-cf-organs]', area), categoryBar = $('[data-cf-categories]', area), out = $('[data-cf-content]', area);
        const plain = (value) => esc(Array.isArray(value) ? value.join(', ') : String(value || ''));
        const section = (title, value) => value ? `<section class="cf551-article-section ${/warnzeichen|cave/i.test(title) ? 'ost568-panel ost568-danger' : /medikamente/i.test(title) ? 'ost568-panel ost568-amber' : ''}" id="abschnitt-${normalizedSearch(title).replace(/[^a-z0-9]+/g, '-')}"><h3>${esc(title)}</h3><p>${plain(value)}</p></section>` : '';
        const info = t => {
            const symptoms = differentials.filter(d => !d.deleted && t.groups.includes(d.group));
            const diseases = [];
            const names = new Set();
            symptoms.forEach(d => arr(d.causes).forEach((c, index) => { const value = typeof c === 'string' ? { name: c } : c; if (!value.name)
                return; const key = normalizedSearch(value.name); if (names.has(key))
                return; names.add(key); diseases.push({ value, source: d, index }); }));
            const anatomy = km.filter(x => x.module === 'anatomy' && (x.organGroup === t.id || (!x.organGroup && t.anatomy.test(x.title))));
            const terms = km.filter(x => x.module === 'befund' && (x.organGroup === t.id || (!x.organGroup && cfTopicContains([x.title, x.summary, x.body].join(' '), t))));
            const materials = [...literature.filter(x => cfTopicContains([x.title, arr(x.topics).join(' '), x.why].join(' '), t)).map(x => ({ kind: 'article', value: x })), ...km.filter(x => x.module === 'material-checklists' && cfTopicContains([x.title, x.summary].join(' '), t)).map(x => ({ kind: 'checklist', value: x })), ...(Array.isArray(mnemonicStore) ? mnemonicStore : []).filter(x => String(x.category || '').startsWith('Schema') && cfTopicContains(x.title, t)).map(x => ({ kind: 'mnemonic', value: x }))];
            diseases.sort((a, b) => ostEditorialOrder(a.value, b.value));
            anatomy.sort(ostEditorialOrder);
            terms.sort(ostEditorialOrder);
            return { symptoms, diseases, anatomy, terms, materials };
        };
        const href = (value) => /^https?:\/\//i.test(String(value || '')) ? String(value) : '';
        function entries() {
            const d = info(organ);
            if (tab === 'symptoms')
                return d.symptoms.map(x => ({ id: 'symptom:' + x.id, title: x.title, icon: 'heart', type: 'symptom', value: x }));
            if (tab === 'anatomy')
                return d.anatomy.map(x => ({ id: 'anatomy:' + x.id, title: x.title, icon: 'anatomy', type: 'module', value: x }));
            if (tab === 'terms')
                return d.terms.map(x => ({ id: 'term:' + x.id, title: x.title, icon: 'dictionary', type: 'module', value: x }));
            if (tab === 'diseases')
                return d.diseases.map(({ value, source, index }) => ({ id: 'disease:' + source.id + ':' + index, title: value.name, icon: 'heart', type: 'disease', value, source }));
            return d.materials.map(({ kind, value }, i) => ({ id: 'material:' + kind + ':' + (value.id || i), title: value.title || 'Material', icon: kind === 'checklist' ? 'checklist' : 'book', type: kind, value }));
        }
        function article(item) {
            if (!item)
                return '<div class="cf551-empty">Hier sind noch keine Inhalte hinterlegt.</div>';
            const { value: v } = item;
            let body = '';
            if (item.type === 'symptom') {
                const warning = arr(v.redflags);
                const questions = arr(v.questions);
                const causes = arr(v.causes).map(c => typeof c === 'string' ? { name: c } : c);
                const pencil = (part, index = '') => `<button type="button" class="ost571-pencil" data-ost571-part="${part}" data-ost571-index="${index}" aria-label="Abschnitt bearbeiten (PIN erforderlich)" title="Abschnitt bearbeiten">✎</button>`;
                const sectionTones = v.sectionTones || {};
                const panelTone = (key, fallback) => `ost568-panel ost568-${sectionTones[key] || fallback}`;
                const redFlagsHtml = v.redflagsHtml ? ost570CleanHtml(v.redflagsHtml) : (warning.length ? `<ul>${warning.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : '<p>Keine Warnzeichen hinterlegt.</p>');
                const questionHtml = v.questionsHtml ? ost570CleanHtml(v.questionsHtml) : (questions.length ? `<ul>${questions.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : '<p>Noch keine Fragen hinterlegt.</p>');
                body = `<section class="${panelTone('theory','info')}" id="ueberblick"><div class="ost571-section-head"><h3>${esc((v.sectionTitles||{}).theory || 'Überblick')}</h3>${pencil('theory')}</div><div class="ost571-edit-region ost-module-body">${ost570CleanHtml(v.theory || '<p>Noch kein Überblick hinterlegt.</p>')}</div></section>`
                  + `<section class="${panelTone('redflags','danger')}" id="red-flags"><div class="ost571-section-head"><h3>${esc((v.sectionTitles||{}).redflags || '⚠ Red Flags · Warnzeichen')}</h3>${pencil('redflags')}</div><div class="ost571-edit-region">${redFlagsHtml}</div></section>`
                  + `<section class="${panelTone('questions','blue')}" id="anamnese"><div class="ost571-section-head"><h3>${esc((v.sectionTitles||{}).questions || 'Wichtige Fragen / Anamnese')}</h3>${pencil('questions')}</div><div class="ost571-edit-region">${questionHtml}</div></section>`
                  + `<section class="ost571-diseases" id="differenzialdiagnosen"><h3>Mögliche Krankheitsbilder</h3><div class="ost571-disease-list">${causes.map((c,i)=>`<details class="ost571-disease-card ost572-accordion"><summary><strong>${esc(c.name || 'Unbenannt')}</strong><span class="ost572-expand">＋</span></summary><div class="ost571-section-head ost572-card-edit">${pencil('cause',i)}</div><div class="ost572-disease-content">${c.articleHtml ? `<div class="ost581-disease-unified">${ost570CleanHtml(c.articleHtml)}</div>` : [['Symptome',c.symptoms],['Einordnung',c.info],['Pathophysiologie',c.physiology],['Befunde',c.findings],['Pharmakologie',c.medications || c.medication],['CAVE / Warnzeichen',c.cave]].filter(x=>x[1]).map(([heading,value])=>`<div class="ost571-disease-field ${heading.startsWith('CAVE') ? 'ost571-cave' : ''}"><strong>${esc(heading)}</strong><div>${renderModuleText(value)}</div></div>`).join('')}</div></details>`).join('') || '<p>Noch keine Krankheitsbilder eingetragen.</p>'}</div><button type="button" class="ost575-add" data-ost583-cause-add>＋ Krankheitsbild hinzufügen</button></section>`;
                body += `<section class="ost570-rich ${panelTone('richContent','amber')}" id="artikel-ergaenzungen"><div class="ost571-section-head"><h3>${esc((v.sectionTitles||{}).richContent || 'Merksätze & weitere Fachinformationen')}</h3>${pencil('richContent')}</div><div class="ost571-edit-region">${ost570CleanHtml(v.richContent || '<p>Noch keine Merksätze hinterlegt.</p>')}</div></section>`;
                const sourceLinks = causes.filter(c => href(c.sourceUrl));
                { const legacy = sourceLinks.length ? `<ul>${sourceLinks.map(c => `<li><a href="${esc(c.sourceUrl)}" target="_blank" rel="noopener noreferrer">${esc(c.sourceLabel || c.name || 'Fachquelle')}</a></li>`).join('')}</ul>` : '<p>Noch keine Quellen hinterlegt.</p>'; body += `<section class="ost568-panel ost568-plain" id="quellen"><div class="ost571-section-head"><h3>${esc((v.sectionTitles||{}).sources || 'Quellen und weiterführende Informationen')}</h3>${pencil('sources')}</div><div class="ost571-edit-region">${v.sourcesHtml ? ost570CleanHtml(v.sourcesHtml) : legacy}</div></section>`; }
            }
            else if (item.type === 'disease') {
                const symptom = v.symptoms || item.source.title;
                body = section('Symptome', symptom) + section('Erkrankung & Einordnung', v.info) + section('Physiologie / Pathophysiologie', v.physiology) + section('Typische Befunde', v.findings) + section('Relevante Medikamente', v.medications || v.medication) + section('Warnzeichen', v.cave);
                if (href(v.sourceUrl))
                    body += `<a href="${esc(v.sourceUrl)}" target="_blank" rel="noopener noreferrer" class="cf551-source-link">${esc(v.sourceLabel || 'Fachquelle öffnen')} ↗</a>`;
            }
            else if (item.type === 'module')
                body = (v.image ? `<img class="cf551-topic-image" src="${esc(v.image)}" alt="${esc(v.imageCaption || v.title)}" onerror="this.remove()">` : '') + `${tab === 'anatomy' ? cf552AnatomyBody(v.body, v.subsections) : `<div class="ost-module-body">${renderModuleText(v.body)}</div>`}` + section('Quellen', v.sources);
            else if (item.type === 'mnemonic')
                body = arr(v.steps).map((s, i) => `<div class="cf551-memo-step"><span>${i + 1}</span><p>${plain(s)}</p></div>`).join('');
            else if (item.type === 'checklist')
                body = `<div class="ost-module-body">${renderModuleText(v.body || v.summary || '')}</div>` + (href(v.documentUrl) ? `<a class="cf551-source-link" href="${esc(v.documentUrl)}" target="_blank" rel="noopener noreferrer">Checkliste öffnen ↗</a>` : '');
            else
                body = section('Einordnung', v.why) + (href(v.freeUrl || v.publisherUrl) ? `<a class="cf551-source-link" href="${esc(v.freeUrl || v.publisherUrl)}" target="_blank" rel="noopener noreferrer">Artikel öffnen ↗</a>` : '');
            const headings = [...body.matchAll(/<h3>([^<]+)<\/h3>/g)].map(m => m[1]); const jump = item.type === 'symptom' ? `<details class="ost572-jump"><summary>☰ Inhaltsübersicht</summary><nav><a href="#ueberblick">Überblick</a><a href="#red-flags">Red Flags</a><a href="#anamnese">Anamnese</a><a href="#differenzialdiagnosen">Krankheitsbilder</a><a href="#artikel-ergaenzungen">Merksätze & Fachinformationen</a></nav></details>` : ''; return `<article class="cf551-article cf552-inline-article ost567-article ost568-article">${jump}${body || '<p class="cf551-article-blank">Dieser Inhalt kann in der Redaktion ergänzt werden.</p>'}</article>`;
        }
        const crumb = $('[data-cf-crumb]',area), searchWrap=$('[data-cf-search-wrap]',area), organSection=$('[data-cf-organ-section]',area), catSection=$('[data-cf-category-section]',area);
        function articleLink(item) { const u=new URLSearchParams({thema:organ.id,eintrag:item.id});return 'themen-uebersicht.html?'+u.toString(); }
        function organsLink(){return 'themen-uebersicht.html';}
        function symptomLink(){return 'themen-uebersicht.html?thema='+encodeURIComponent(organ.id);}
        function draw() {
            const currentTitle = $('.topbar .brand strong');
            if(currentTitle) currentTitle.textContent=chosen ? 'Fachartikel' : params.has('thema') ? organ.label : 'Leitsymptome';
            const current=entries().find(x=>x.id===chosen);
            const isArticle=!!current;
            const hasOrgan=!!params.get('thema');
            organSection.hidden=hasOrgan;catSection.hidden=!hasOrgan || isArticle;
            searchWrap.hidden=true;
            crumb.innerHTML=`${hasOrgan ? `<a href="${organsLink()}">Organsysteme</a>` : ''}${hasOrgan ? ` <span>›</span> <a href="${symptomLink()}">${esc(organ.label)}</a>` : ''}${isArticle ? ` <span>›</span> <strong>${esc(current.title)}</strong>` : ''}`;
            organBar.innerHTML=CF_TOPICS.filter(t=>!organMeta(t.id).hidden).map((t,i)=>{const count=differentials.filter(x=>!x.deleted&&t.groups.includes(x.group)).length;return `<div class="ost583-tile-wrap"><a class="ost570-tile ost572-tile" href="themen-uebersicht.html?thema=${encodeURIComponent(t.id)}"><span class="ost572-count">${count}</span><strong>${esc(t.label)}</strong><span class="ost572-chevron">›</span></a><button type="button" class="ost583-tile-pencil" data-ost583-organ="${esc(t.id)}" aria-label="${esc(t.label)} umbenennen">✎</button></div>`}).join('');
            if(!hasOrgan && ost576IsEditing()){const b=document.createElement('button');b.type='button';b.className='ost575-add';b.textContent='＋ Organsystem';b.onclick=()=>ost583CreateOrgan();organBar.after(b);}
            if(!hasOrgan){out.innerHTML='<p class="ost569-hint">Wähle ein Organsystem. Auf der nächsten Seite findest du die zugehörigen Leitsymptome.</p>';return;}
            const all=entries(), needle=normalizedSearch(input.value.trim());
            const found=needle ? all.filter(x=>normalizedSearch(x.title).includes(needle)) : all;
            categoryBar.innerHTML=found.map((x,i)=>`<div class="ost583-tile-wrap"><a class="ost570-symptom-tile ost572-tile" href="${articleLink(x)}"><strong>${esc(x.title)}</strong><span class="ost572-chevron">›</span></a><button type="button" class="ost583-tile-pencil" data-ost583-symptom="${esc(x.value.id)}" aria-label="${esc(x.title)} umbenennen">✎</button></div>`).join('') || '<p>Keine passenden Leitsymptome gefunden.</p>';
            if(!isArticle){out.innerHTML='';return;}
            out.innerHTML=`<header class="ost570-article-head"><div><span class="ost567-eyebrow">LEITSYMPTOM · ${esc(organ.label)}</span><h1 class="ost570-title-text">${esc(current.title)}</h1><p>Fachwissen für RS & NFS</p></div><button type="button" class="ost570-edit-btn" data-ost570-edit aria-label="Titel mit PIN bearbeiten" title="Titel bearbeiten">✎</button></header>${article(current)}<section class="ost570-inline-editor" data-ost570-editor hidden></section>`;
            $('[data-ost570-edit]',out).addEventListener('click',()=>editArticle(current,'title'));
            $$('[data-ost571-part]',out).forEach(b=>b.addEventListener('click',()=>editArticle(current,b.dataset.ost571Part,Number(b.dataset.ost571Index || 0))));
            out.querySelector('[data-ost583-cause-add]')?.addEventListener('click',()=>ost583CreateCause(current));
        }
        async function ost583CreateCause(item){
          if(!await ost574Pin())return;
          ost576Modal('Krankheitsbild hinzufügen',[
            {key:'name',label:'Name des Krankheitsbildes',required:true},
            {key:'articleHtml',label:'Fachinformationen',type:'rich',value:'<h3>Symptome</h3><p></p><h3>Befunde</h3><p></p><h3>Pharmakologie</h3><p></p>'}
          ],async values=>{
            const latest=await get('differential'),idx=latest.findIndex(x=>String(x.id)===String(item.value.id));if(idx<0)return false;
            latest[idx]={...latest[idx],causes:[...arr(latest[idx].causes),{name:values.name.trim(),articleHtml:ost570CleanHtml(values.articleHtml)}],deletedCauseNames:arr(latest[idx].deletedCauseNames).filter(n=>normalizedSearch(n)!==normalizedSearch(values.name))};
            if(await save('differential',latest)){location.reload();return true;}return false;
          });
        }
        async function editArticle(item, part = "all", causeIndex = 0){
            let host=$('[data-ost570-editor]',out);
            let pin=sessionStorage.getItem('ost1020-editor-pin') || '';
            if(!pin || !await verifyEditorPin(pin)){
                pin=prompt('Redaktions-PIN eingeben:') || '';
                if(!pin || !await verifyEditorPin(pin)){alert('PIN nicht korrekt oder Eingabe abgebrochen.');return;}
                sessionStorage.setItem('ost1020-editor-pin',pin);
            }
            const current=item.value;
            const toneLabels={info:'Blau',danger:'Rot',amber:'Gelb',blue:'Hellblau',success:'Grün',plain:'Weiß'};
            const toneOptions=(selected='info')=>`<label class="ost573-tone-picker">Fensterfarbe<select data-ost573-tone>${Object.entries(toneLabels).map(([val,label])=>`<option value="${val}" ${selected===val?'selected':''}>${label}</option>`).join('')}</select></label>`;
            const listHtml=(values, empty)=>arr(values).length ? `<ul>${arr(values).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : `<p>${esc(empty)}</p>`;
            const extractList=(html)=>{const wrap=document.createElement('div');wrap.innerHTML=html;const lis=[...wrap.querySelectorAll('li')].map(li=>li.textContent.trim()).filter(Boolean);if(lis.length)return lis;return wrap.textContent.split(/\n+/).map(x=>x.trim()).filter(Boolean);};
            const cleanupCancel=(target,originalHtml,editingClass='ost573-is-inline-editing')=>{target.innerHTML=originalHtml;target.closest('section,details,.cf563-entry-body')?.classList.remove(editingClass);};
            if(part==='title'){
                const h1=$('.ost570-title-text',out);
                if(!h1) return;
                const original=h1.textContent;
                const wrap=document.createElement('span');
                wrap.className='ost573-title-inline';
                wrap.innerHTML=`<input type="text" maxlength="180" value="${esc(current.title || '')}" data-ost573-title-inline><span class="ost576-title-actions"><button type="button" class="btn primary small" data-ost573-title-save>Speichern</button><button type="button" class="btn small" data-ost573-title-cancel>Abbrechen</button><span class="ost573-inline-status" data-ost573-title-status></span></span>`;
                h1.replaceChildren(wrap);
                const inputEl=$('[data-ost573-title-inline]',h1); inputEl.focus(); inputEl.select();
                $('[data-ost573-title-cancel]',h1).onclick=()=>{h1.textContent=original;};
                $('[data-ost573-title-save]',h1).onclick=async()=>{
                    const status=$('[data-ost573-title-status]',h1); status.textContent='Speichere …';
                    const latest=await get('differential'); const index=latest.findIndex(x=>String(x.id)===String(current.id));
                    if(index<0){status.textContent='Leitsymptom nicht gefunden.';return;}
                    latest[index]={...latest[index], title:inputEl.value.trim().slice(0,180) || latest[index].title};
                    const ok=await save('differential',latest);
                    if(ok){Object.assign(current,latest[index]); draw();} else status.textContent='Speichern fehlgeschlagen.';
                };
                return;
            }
            if(['theory','redflags','questions','richContent','sources'].includes(part)){
                const selector={theory:'#ueberblick .ost571-edit-region',redflags:'#red-flags .ost571-edit-region',questions:'#anamnese .ost571-edit-region',richContent:'#artikel-ergaenzungen .ost571-edit-region',sources:'#quellen .ost571-edit-region'}[part];
                const region=$(selector,out);
                if(!region) return;
                const section=region.closest('section');
                const heading=section?.querySelector('.ost571-section-head h3');
                const originalHeading=heading?.textContent || '';
                const originalHtml=region.innerHTML;
                section?.classList.add('ost573-is-inline-editing');
                const currentTone=((current.sectionTones||{})[part]) || ({theory:'info',redflags:'danger',questions:'blue',richContent:'amber',sources:'plain'}[part]);
                const valueHtml = part==='sources' ? (current.sourcesHtml ? ost570CleanHtml(current.sourcesHtml) : originalHtml) : part==='theory' ? ost570CleanHtml(current.theory || '<p>Noch kein Überblick hinterlegt.</p>') : part==='richContent' ? ost570CleanHtml(current.richContent || '<p>Noch keine Merksätze hinterlegt.</p>') : part==='redflags' ? (current.redflagsHtml ? ost570CleanHtml(current.redflagsHtml) : listHtml(current.redflags,'Keine Warnzeichen hinterlegt.')) : (current.questionsHtml ? ost570CleanHtml(current.questionsHtml) : listHtml(current.questions,'Noch keine Fragen hinterlegt.'));
                if(heading){heading.contentEditable="true";heading.classList.add("ost575-heading-edit");heading.setAttribute("aria-label","Abschnittstitel bearbeiten");}
                region.innerHTML=`<div class="ost573-inline-editor-shell">${ost573Toolbar()}<div class="ost573-inline-toolbar-row">${toneOptions(currentTone)}</div><div class="ost573-editable" contenteditable="true" data-ost573-inline-rich></div><div class="ost570-actions"><button class="btn primary" type="button" data-ost573-inline-save>Speichern</button><button class="btn" type="button" data-ost573-inline-cancel>Abbrechen</button><span role="status" data-ost573-inline-status></span></div></div>`;
                const editor=$('[data-ost573-inline-rich]',region); editor.innerHTML=valueHtml; ost573BindRich(region,editor);
                $('[data-ost573-inline-cancel]',region).onclick=()=>{if(heading){heading.textContent=originalHeading;heading.contentEditable='false';heading.classList.remove('ost575-heading-edit');}cleanupCancel(region,originalHtml);};
                $('[data-ost573-inline-save]',region).onclick=async()=>{
                    const status=$('[data-ost573-inline-status]',region); status.textContent='Speichere …';
                    const latest=await get('differential'); const index=latest.findIndex(x=>String(x.id)===String(current.id));
                    if(index<0){status.textContent='Leitsymptom nicht gefunden.';return;}
                    const updated={...latest[index]};
                    const clean=ost570CleanHtml(editor.innerHTML);
                    if(part==='theory') updated.theory=clean;
                    else if(part==='richContent') updated.richContent=clean;
                    else if(part==='sources') updated.sourcesHtml=clean;
                    else if(part==='redflags'){ updated.redflagsHtml=clean; updated.redflags=extractList(clean); }
                    else if(part==='questions'){ updated.questionsHtml=clean; updated.questions=extractList(clean); }
                    updated.sectionTones={...(updated.sectionTones||{}), [part]: $('[data-ost573-tone]',region).value};
                    updated.sectionTitles={...(updated.sectionTitles||{}),[part]:heading?.textContent.trim()||originalHeading};
                    const ok=await save('differential', latest.map((x,i)=>i===index?updated:x));
                    if(ok){ Object.assign(current,updated); draw(); } else status.textContent='Speichern fehlgeschlagen.';
                };
                editor.focus();
                return;
            }
            if(part==='cause'){
                const target=$$('.ost571-disease-card',out)[causeIndex];
                if(!target)return;
                target.open=true;
                const header=target.querySelector('summary strong');
                const body=target.querySelector('.ost572-disease-content');
                const originalBody=body.innerHTML;
                const originalName=header.textContent;
                const source=typeof (current.causes||[])[causeIndex]==='string' ? {name:current.causes[causeIndex]} : {...((current.causes||[])[causeIndex]||{})};
                header.contentEditable='true';header.classList.add('ost575-heading-edit');
                const fields=[['symptoms','Symptome'],['info','Einordnung'],['physiology','Pathophysiologie'],['findings','Befunde'],['medications','Pharmakologie'],['cave','CAVE / Warnzeichen']];
                const initialHtml=source.articleHtml || fields.filter(([k])=>source[k]).map(([key,label])=>`<h3>${esc((source.sectionTitles||{})[key]||label)}</h3><div>${ost570CleanHtml(source[key])}</div>`).join('');
                body.innerHTML=`<div class="ost575-disease-form"><p class="ost581-hint">Alle Unterüberschriften und Inhalte in einem Textfeld bearbeiten.</p>${ost573Toolbar()}<div class="ost573-editable ost581-disease-rich" contenteditable="true" data-cause-article></div><div class="ost575-edit-actions"><button class="btn primary" type="button" data-cause-save>Speichern</button><button class="btn" type="button" data-cause-cancel>Abbrechen</button><button class="btn danger" type="button" data-cause-delete>Krankheitsbild löschen</button><span data-cause-status role="status"></span></div></div>`;
                const rich=body.querySelector('[data-cause-article]');rich.innerHTML=ost570CleanHtml(initialHtml);ost573BindRich(body,rich);
                const reset=()=>{header.textContent=originalName;header.contentEditable='false';header.classList.remove('ost575-heading-edit');body.innerHTML=originalBody;};
                body.querySelector('[data-cause-cancel]').onclick=reset;
                body.querySelector('[data-cause-delete]').onclick=async()=>{
                    if(!confirm('Krankheitsbild endgültig aus diesem Leitsymptom entfernen?'))return;
                    const latest=await get('differential'),i=latest.findIndex(x=>String(x.id)===String(current.id));if(i<0)return;
                    const next={...latest[i],causes:[...arr(latest[i].causes)]};
                    const removed=next.causes.splice(causeIndex,1)[0];
                    const name=typeof removed==='string'?removed:removed?.name||originalName;
                    next.deletedCauseNames=[...new Set([...arr(next.deletedCauseNames),name])];
                    if(await save('differential',latest.map((v,n)=>n===i?next:v))){Object.assign(current,next);draw();}
                    else body.querySelector('[data-cause-status]').textContent='Löschen fehlgeschlagen.';
                };
                body.querySelector('[data-cause-save]').onclick=async()=>{
                    const status=body.querySelector('[data-cause-status]');status.textContent='Speichere …';
                    const latest=await get('differential'), i=latest.findIndex(x=>String(x.id)===String(current.id));
                    if(i<0){status.textContent='Eintrag nicht gefunden.';return;}
                    const updated={...latest[i],causes:[...arr(latest[i].causes)]};
                    const cause={...source,name:header.textContent.trim()||originalName};
                    cause.articleHtml=ost570CleanHtml(rich.innerHTML);
                    updated.causes[causeIndex]=cause;
                    if(await save('differential',latest.map((item,n)=>n===i?updated:item))){Object.assign(current,updated);draw();}
                    else status.textContent='Speichern fehlgeschlagen.';
                };
                return;
            }
        }
        if(params.has('thema') && !params.has('eintrag'))ost575AddButton(area,'differential',{title:'Neues Leitsymptom',group:organ.groups[0]||'Weitere',questions:[],redflags:[],causes:[]});
        async function ost583CreateOrgan(){
            if(!await ost574Pin())return;
            ost576Modal('Organsystem hinzufügen',[{key:'label',label:'Name des Organsystems',required:true}],async vals=>{
                const label=vals.label.trim();if(!label)return false;
                const id='fach-'+Date.now().toString(36);
                const site=await get('organSystems');site.push({id,label,group:label,isCustom:true});
                if(await save('organSystems',site)){location.reload();return true;}return false;
            });
        }
        area.addEventListener('click',async e=>{
            const ob=e.target.closest('[data-ost583-organ]');
            const sb=e.target.closest('[data-ost583-symptom]');
            if(!ob&&!sb)return;
            e.preventDefault();e.stopPropagation();if(!await ost574Pin())return;
            if(ob){
                const t=CF_TOPICS.find(x=>x.id===ob.dataset.ost583Organ);if(!t)return;
                const modal=ost576Modal('Organsystem bearbeiten',[{key:'label',label:'Titel',value:t.label,required:true}],async values=>{
                    const list=await get('organSystems'),i=list.findIndex(x=>x.id===t.id);
                    if(i>=0)list[i]={...list[i],label:values.label.trim()};
                    else list.push({id:t.id,label:values.label.trim(),isCustom:false});
                    if(await save('organSystems',list)){location.reload();return true;}return false;
                });
                const actions=modal.querySelector('.ost576-form-actions');
                const organOrder=async delta=>{
                    const current=CF_TOPICS.filter(x=>!organMeta(x.id).hidden).map(x=>x.id);
                    const i=current.indexOf(t.id),j=i+delta;if(j<0||j>=current.length)return;
                    [current[i],current[j]]=[current[j],current[i]];
                    const list=await get('organSystems');
                    current.forEach((id,k)=>{const n=list.findIndex(x=>x.id===id);if(n>=0)list[n]={...list[n],order:k};else list.push({id,label:CF_TOPICS.find(x=>x.id===id)?.label||id,order:k});});
                    if(await save('organSystems',list))location.reload();else alert('Sortieren fehlgeschlagen.');
                };
                for(const [label,delta] of [['↑ Nach oben',-1],['↓ Nach unten',1]]){
                    const b=document.createElement('button');b.type='button';b.className='btn';b.textContent=label;b.onclick=()=>organOrder(delta);actions.prepend(b);
                }
                const del=document.createElement('button');del.type='button';del.className='btn danger';del.textContent='Organsystem löschen';
                del.onclick=async()=>{
                    if(differentials.some(x=>t.groups.includes(x.group))){alert('Bitte zuerst alle Leitsymptome dieses Organsystems verschieben oder löschen.');return;}
                    if(!confirm('Leeres Organsystem wirklich entfernen?'))return;
                    const list=await get('organSystems'),i=list.findIndex(x=>x.id===t.id);
                    if(i>=0){if(list[i].isCustom)list.splice(i,1);else list[i]={...list[i],hidden:true};}
                    else list.push({id:t.id,label:t.label,hidden:true});
                    if(await save('organSystems',list))location.href='themen-uebersicht.html';else alert('Löschen fehlgeschlagen.');
                };actions.prepend(del);
            }else{
                const item=differentials.find(x=>String(x.id)===sb.dataset.ost583Symptom);if(!item)return;
                const currentTopic=CF_TOPICS.find(t=>t.groups.includes(item.group))||organ;
                const modal=ost576Modal('Leitsymptom bearbeiten',[
                    {key:'title',label:'Titel',value:item.title,required:true},
                    {key:'organId',label:'Organsystem',type:'select',value:currentTopic.id,options:CF_TOPICS.filter(t=>!organMeta(t.id).hidden).map(t=>({value:t.id,label:t.label}))}
                ],async values=>{
                    const latest=await get('differential'),idx=latest.findIndex(x=>String(x.id)===String(item.id));if(idx<0)return false;
                    const target=CF_TOPICS.find(t=>t.id===values.organId)||currentTopic;
                    latest[idx]={...latest[idx],title:values.title.trim(),group:target.groups[0]};
                    if(await save('differential',latest)){location.reload();return true;}return false;
                });
                const del=document.createElement('button');del.type='button';del.className='btn danger';del.textContent='Leitsymptom löschen';
                del.onclick=async()=>{
                    if(!confirm('Leitsymptom einschließlich aller Krankheitsbilder endgültig löschen?'))return;
                    const latest=await get('differential'),remaining=latest.filter(x=>String(x.id)!==String(item.id));
                    if(remaining.length===latest.length)return;
                    if(await save('differential',remaining))location.reload();else alert('Löschen fehlgeschlagen.');
                };modal.querySelector('.ost576-form-actions')?.prepend(del);
            }
        });
        input.addEventListener('input',draw);
        draw();
    }
    async function wissenPage() {
        location.replace('themen-uebersicht.html' + location.search);
    }
    // ------------------------------------------------------------------------
    // Training
    // ------------------------------------------------------------------------
    // Gemeinsame In-situ-Bearbeitung für strukturierte Datensätze (Titel + Freitext).
    async function ost573EditCard(card, store, id, textField, rerender){
        let pin=sessionStorage.getItem('ost1020-editor-pin') || '';
        if(!pin || !await verifyEditorPin(pin)){
            pin=prompt('Redaktions-PIN eingeben:') || '';
            if(!pin || !await verifyEditorPin(pin)){alert('PIN ungültig.');return;}
            sessionStorage.setItem('ost1020-editor-pin',pin);
        }
        const data=await get(store), idx=data.findIndex(x=>String(x.id)===String(id));
        if(idx<0){alert('Datensatz nicht gefunden.');return;}
        card.open=true;
        card.classList.add('ost573-editing-card');
        let host=card.querySelector('.ost573-card-editor');
        if(!host){host=document.createElement('section');host.className='ost573-card-editor';card.querySelector('.cf563-entry-body')?.prepend(host);}
        host.innerHTML=`<label>Titel<input data-ost573-card-title value="${esc(data[idx].title||'')}"></label><label>Inhalt / Beschreibung</label>${ost573Toolbar()}<div class="ost573-editable" data-ost573-card-rich contenteditable="true"></div><label>PDF- oder Weblink<input type="url" data-ost575-document-url value="${esc(data[idx].documentUrl||data[idx].sourceUrl||'')}" placeholder="https://…"></label>${data[idx].module==='mpg'?'':`<label>Untertitel<input data-ost575-subtitle value="${esc(data[idx].summary||data[idx].source||'')}"></label>`}<div class="ost570-actions"><button type="button" class="btn primary" data-ost573-card-save>Speichern</button><button type="button" class="btn" data-ost573-card-cancel>Abbrechen</button><span role="status" data-ost573-card-status></span></div>`;
        const rich=host.querySelector('[data-ost573-card-rich]');rich.innerHTML=ost570CleanHtml(data[idx][textField]||'');ost573BindRich(host,rich);
        host.querySelector('[data-ost573-card-cancel]').onclick=()=>{card.classList.remove('ost573-editing-card'); host.remove();};
        host.querySelector('[data-ost573-card-save]').onclick=async()=>{
            const state=host.querySelector('[data-ost573-card-status]');state.textContent='Speichere …';
            const latest=await get(store), index=latest.findIndex(x=>String(x.id)===String(id));
            if(index<0){state.textContent='Datensatz nicht gefunden.';return;}
            latest[index]={...latest[index],title:host.querySelector('[data-ost573-card-title]').value.trim()||latest[index].title,[textField]:ost570CleanHtml(rich.innerHTML)};
            const url=host.querySelector('[data-ost575-document-url]').value.trim();if(url && !/^https?:\/\//i.test(url)){state.textContent='Nur HTTP(S)-Links erlaubt.';return;}
            latest[index][store==='algorithms'?'sourceUrl':'documentUrl']=url;const subtitle=host.querySelector('[data-ost575-subtitle]');if(subtitle)latest[index][store==='algorithms'?'source':'summary']=subtitle.value.trim();
            if(await save(store,latest)){Object.assign(data[idx],latest[index]);location.reload();}else state.textContent='Speichern fehlgeschlagen.';
        };
    }
    // Link-/PDF-Sammlung im jeweiligen Kasten; pro Link Titel, URL und Untertitel.
    async function ost575LinksEditor(card,store,id){
      if(!await ost574Pin())return;
      const items=await get(store),item=items.find(v=>String(v.id)===String(id));if(!item)return;
      card.open=true;card.classList.add('ost575-edit-links');
      const host=card.querySelector('.cf563-entry-body,.cf548-archive-copy,.meeting-resources');if(!host)return;
      let prior=host.querySelector('.ost575-link-editor');if(prior)prior.remove();
      const panel=document.createElement('div');panel.className='ost575-link-editor';host.prepend(panel);
      let links=(store==='meetings'?(item.files||[]):(item.links||[])).map(x=>({...x}));
      if(!links.length&&store==='algorithms')links=[...(item.materials?.background||[]),...(item.materials?.checklists||[])].map(x=>({...x}));
      if(!links.length){const old=store==='articles'?(item.freeUrl||item.publisherUrl):(item.documentUrl||item.sourceUrl);
        if(old)links=[{title:item.title||'PDF / Link',url:old,note:item.summary||item.source||''}];}
      let draftTitle=item.title||'';
      let draftSubtitle=store==='knowledgeModules'?(item.summary||''):'';
      let draftDescription=item.why||item.explanation||item.body||item.summary||'';
      let draftFeatured=!!item.featured;
      let draftMeta={authors:item.authors||'',journal:item.journal||'',year:item.year||'',doi:item.doi||'',date:item.date||'',category:item.category||'',speaker:item.speaker||'',tags:Array.isArray(item.tags)?item.tags.join(', '):String(item.tags||'')};
      const render=()=>{
        panel.innerHTML=`<h3>Link- und PDF-Sammlung</h3><label>Überschrift<input data-link-main-title value="${esc(draftTitle)}"></label>${store==='knowledgeModules'?`<label>Untertitel / Beschreibung der Checkliste<textarea data-link-main-subtitle rows="3">${esc(draftSubtitle)}</textarea></label>`:''}${store==='articles'?`<div class="ost583-doc-meta"><label>Autor:innen<input data-doc-meta="authors" value="${esc(draftMeta.authors)}"></label><label>Journal / Quelle<input data-doc-meta="journal" value="${esc(draftMeta.journal)}"></label><label>Jahr<input data-doc-meta="year" value="${esc(draftMeta.year)}"></label><label>DOI<input data-doc-meta="doi" value="${esc(draftMeta.doi)}"></label><label>Kategorien / Tags (mit Komma trennen)<input data-doc-meta="tags" value="${esc(draftMeta.tags)}"></label></div><label>Beschreibung / Lesetipp</label><div class="ost583-doc-description">${ost573Toolbar()}<div class="ost573-editable" data-link-description contenteditable="true">${ost570CleanHtml(draftDescription)}</div></div><label class="ost583-check"><input type="checkbox" data-link-featured ${draftFeatured?'checked':''}>Als Lesetipp auf der Startseite anzeigen (maximal 30 Tage)</label>`:''}${store==='meetings'?`<div class="ost583-doc-meta"><label>Datum<input type="date" data-doc-meta="date" value="${esc(draftMeta.date)}"></label><label>Kategorie<input data-doc-meta="category" value="${esc(draftMeta.category)}"></label><label>Referent:in<input data-doc-meta="speaker" value="${esc(draftMeta.speaker)}"></label></div><label>Zusammenfassung</label><div class="ost583-doc-description">${ost573Toolbar()}<div class="ost573-editable" data-link-description contenteditable="true">${ost570CleanHtml(draftDescription)}</div></div>`:''}<div class="ost575-links">${links.map((x,i)=>`<div class="ost575-link-row" data-link-row="${i}"><label>Titel<input data-link-field="title" value="${esc(x.title||'')}"></label><label>Link / PDF-Adresse<input data-link-field="url" type="url" value="${esc(x.url||'')}"></label><label>Untertitel<input data-link-field="note" value="${esc(x.note||'')}"></label><label class="ost581-upload-label">PDF hochladen<input type="file" data-link-upload="${i}" accept="${store==='meetings'?'application/pdf,image/jpeg,image/png,image/webp':'application/pdf,.pdf'}"></label><div class="ost576-link-actions"><button type="button" data-link-up="${i}" class="btn" ${i===0?'disabled':''}>↑</button><button type="button" data-link-down="${i}" class="btn" ${i===links.length-1?'disabled':''}>↓</button><button type="button" data-link-remove="${i}" class="btn">Entfernen</button></div></div>`).join('')}</div><div class="ost575-edit-actions"><button type="button" class="btn" data-link-add>＋ Weiteren Link</button><button type="button" class="btn primary" data-link-save>Speichern</button><button type="button" class="btn" data-link-cancel>Abbrechen</button><button type="button" class="btn danger" data-link-delete>Eintrag löschen</button><span data-link-status role="status"></span></div>`;
        if(['articles','meetings'].includes(store))ost573BindRich(panel.querySelector('.ost583-doc-description'),panel.querySelector('[data-link-description]'));
        const collect=()=>{draftTitle=panel.querySelector('[data-link-main-title]').value;
          if(store==='knowledgeModules')draftSubtitle=panel.querySelector('[data-link-main-subtitle]').value;
          if(['articles','meetings'].includes(store)){draftDescription=ost570CleanHtml(panel.querySelector('[data-link-description]').innerHTML);draftFeatured=!!panel.querySelector('[data-link-featured]')?.checked;panel.querySelectorAll('[data-doc-meta]').forEach(x=>draftMeta[x.dataset.docMeta]=x.value.trim());}
          panel.querySelectorAll('[data-link-row]').forEach(row=>{const i=Number(row.dataset.linkRow);['title','url','note'].forEach(key=>links[i][key]=row.querySelector(`[data-link-field="${key}"]`).value.trim());});};
        panel.querySelectorAll('[data-link-upload]').forEach(input=>input.onchange=async()=>{
          const file=input.files?.[0];if(!file)return;
          const status=panel.querySelector('[data-link-status]');
          if(!((file.type==='application/pdf'||file.name.toLowerCase().endsWith('.pdf'))||(store==='meetings'&&['image/png','image/jpeg','image/webp'].includes(file.type)))){status.textContent='Nur PDFs'+(store==='meetings'?' oder Bilder':'')+' erlaubt.';return;}
          if(file.size>19*1024*1024){status.textContent='PDF zu groß (maximal 19 MB).';return;}
          collect();status.textContent='Lade PDF hoch …';input.disabled=true;
          try{const url=await uploadMedia(file);if(!url)throw Error('Upload hat keine Adresse zurückgegeben');links[Number(input.dataset.linkUpload)].url=url;render();}
          catch(err){status.textContent='Upload fehlgeschlagen: '+(err.message||'Verbindung prüfen');input.disabled=false;}
        });
        panel.querySelectorAll('[data-link-remove]').forEach(b=>b.onclick=()=>{collect();links.splice(Number(b.dataset.linkRemove),1);render();});
        panel.querySelectorAll('[data-link-up],[data-link-down]').forEach(b=>b.onclick=()=>{collect();const i=Number(b.dataset.linkUp??b.dataset.linkDown);const j=i+(b.hasAttribute('data-link-up')?-1:1);if(j<0||j>=links.length)return;[links[i],links[j]]=[links[j],links[i]];render();});
        panel.querySelector('[data-link-add]').onclick=()=>{collect();links.push({title:'Neues Dokument',url:'',note:''});render();};
        panel.querySelector('[data-link-cancel]').onclick=()=>{panel.remove();card.classList.remove('ost575-edit-links');};
        panel.querySelector('[data-link-delete]').onclick=async()=>{
          if(!confirm('Diesen Eintrag einschließlich seiner Linkliste dauerhaft löschen?'))return;
          const latest=await get(store),filtered=latest.filter(x=>String(x.id)!==String(id));
          if(filtered.length===latest.length)return;
          if(await save(store,filtered))location.reload();else panel.querySelector('[data-link-status]').textContent='Löschen fehlgeschlagen.';
        };
        panel.querySelector('[data-link-save]').onclick=async()=>{
          collect();const status=panel.querySelector('[data-link-status]');
          if(links.some(x=>x.url && !/^https?:\/\//i.test(x.url))){status.textContent='Links müssen mit http:// oder https:// beginnen.';return;}
          status.textContent='Speichere …';const latest=await get(store),idx=latest.findIndex(x=>String(x.id)===String(id));if(idx<0){status.textContent='Eintrag nicht gefunden.';return;}
          const next={...latest[idx],title:draftTitle.trim()||item.title,links:links.filter(x=>x.url)};
          if(store==='knowledgeModules'){
            next.documentUrl=next.links[0]?.url||'';
            next.summary=draftSubtitle.trim();
          }else if(store==='algorithms'){
            // Legacy materials and source fields intentionally retained: no silent data loss.
            next.sourceUrl=next.links[0]?.url||next.sourceUrl||'';
          }else if(store==='articles'){
            next.freeUrl=next.links[0]?.url||next.freeUrl||'';
            next.why=draftDescription;
            ['authors','journal','year','doi'].forEach(k=>next[k]=draftMeta[k]);next.tags=String(draftMeta.tags||'').split(',').map(x=>x.trim()).filter(Boolean);
            const featured=draftFeatured;
            if(featured&&!next.featured)next.activeSince=new Date().toISOString().slice(0,10);
            next.featured=featured;
          }else if(store==='meetings'){
            next.files=next.links;delete next.links;
            next.summary=draftDescription;
            ['date','category','speaker'].forEach(k=>next[k]=draftMeta[k]);
          }
          latest[idx]=next;if(await save(store,latest))location.reload();else status.textContent='Speichern fehlgeschlagen.';
        };
      };render();
    }
    function ost579Documents(links){
      return (Array.isArray(links)?links:[]).filter(x=>x && /^https?:\/\//i.test(String(x.url||''))).map(x=>`<a class="ost579-doc-link" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer"><strong>${esc(x.title||'Dokument öffnen')}</strong>${x.note?`<small>${esc(x.note)}</small>`:''}<span aria-hidden="true">↗</span></a>`).join('');
    }
    async function ost583EditSkillRow(row,groupIndex,skillIndex){
      if(row.querySelector('.ost583-skill-editor')||!await ost574Pin())return;
      const groups=await get('skills'),skill=groups[groupIndex]?.skills?.[skillIndex];if(!skill)return;
      let draftName=skill.name;
      const original=Array.from(row.children).map(node=>[node,node.hidden]);
      original.forEach(([node])=>node.hidden=true);
      let sections=structuredClone(Array.isArray(skill.sections)?skill.sections:[]);
      const panel=document.createElement('div');panel.className='ost583-skill-editor';row.appendChild(panel);
      const htmlOf=s=>s.richHtml?ost570CleanHtml(s.richHtml):`<ul>${arr(s.items).map(it=>`<li>${esc(it)}</li>`).join('')}</ul>`;
      const readSections=()=>{draftName=panel.querySelector('[data-skill-name]')?.value||draftName;panel.querySelectorAll('[data-skill-section-index]').forEach(box=>{
        const i=Number(box.dataset.skillSectionIndex);const x=sections[i];if(!x)return;
        x.title=box.querySelector('[data-skill-section-title]').value.trim();
        x.richHtml=ost570CleanHtml(box.querySelector('[data-skill-section-rich]').innerHTML);
        const list=document.createElement('div');list.innerHTML=x.richHtml;
        const points=[...list.querySelectorAll('li')].map(n=>n.textContent.trim()).filter(Boolean);
        x.items=points.length?points:list.textContent.split(/\n+/).map(v=>v.trim()).filter(Boolean);
      });};
      const end=()=>{panel.remove();original.forEach(([node,hidden])=>node.hidden=hidden);};
      const render=()=>{
        panel.innerHTML=`<label class="ost583-skill-title">Skilltitel<input data-skill-name value="${esc(draftName)}" required></label><div data-skill-sections>${sections.map((sec,i)=>`<section class="ost583-skill-section" data-skill-section-index="${i}"><div class="ost583-skill-section-head"><label>Abschnittstitel<input data-skill-section-title value="${esc(sec.title||'')}" required></label><div><button type="button" class="btn" data-skill-up="${i}" ${i===0?'disabled':''}>↑</button><button type="button" class="btn" data-skill-down="${i}" ${i===sections.length-1?'disabled':''}>↓</button><button type="button" class="btn danger" data-skill-remove="${i}">Löschen</button></div></div>${ost573Toolbar()}<div class="ost573-editable" contenteditable="true" data-skill-section-rich="${i}">${htmlOf(sec)}</div></section>`).join('')}</div><button type="button" class="btn" data-skill-section-add>＋ Abschnitt</button><div class="ost570-actions"><button class="btn primary" type="button" data-skill-save>Speichern</button><button class="btn" type="button" data-skill-cancel>Abbrechen</button><button class="btn danger" type="button" data-skill-delete>Skill löschen</button><button class="btn" type="button" data-skill-move="-1">Skill ↑</button><button class="btn" type="button" data-skill-move="1">Skill ↓</button><span role="status" data-skill-status></span></div>`;
        panel.querySelectorAll('.ost583-skill-section').forEach(x=>ost573BindRich(x,x.querySelector('[data-skill-section-rich]')));
        panel.querySelector('[data-skill-cancel]').onclick=end;
        panel.querySelector('[data-skill-section-add]').onclick=()=>{readSections();sections.push({title:'Neuer Abschnitt',items:[],richHtml:'<p></p>'});render();};
        panel.querySelectorAll('[data-skill-remove]').forEach(b=>b.onclick=()=>{readSections();sections.splice(Number(b.dataset.skillRemove),1);render();});
        panel.querySelectorAll('[data-skill-up],[data-skill-down]').forEach(b=>b.onclick=()=>{readSections();const i=Number(b.dataset.skillUp??b.dataset.skillDown),j=i+(b.hasAttribute('data-skill-up')?-1:1);[sections[i],sections[j]]=[sections[j],sections[i]];render();});
        panel.querySelector('[data-skill-save]').onclick=async()=>{
          const status=panel.querySelector('[data-skill-status]');readSections();const name=panel.querySelector('[data-skill-name]').value.trim();
          if(!name){status.textContent='Skilltitel erforderlich.';return;}status.textContent='Speichere …';
          const latest=await get('skills');if(!latest[groupIndex]?.skills?.[skillIndex]){status.textContent='Skill nicht gefunden.';return;}
          latest[groupIndex].skills[skillIndex]={...latest[groupIndex].skills[skillIndex],name,sections};
          if(await save('skills',latest))location.reload();else status.textContent='Speichern fehlgeschlagen.';
        };
        panel.querySelector('[data-skill-delete]').onclick=async()=>{if(!confirm('Skill dauerhaft löschen?'))return;const latest=await get('skills');if(!latest[groupIndex]?.skills?.[skillIndex])return;latest[groupIndex].skills.splice(skillIndex,1);if(await save('skills',latest))location.reload();else panel.querySelector('[data-skill-status]').textContent='Löschen fehlgeschlagen.';};
        panel.querySelectorAll('[data-skill-move]').forEach(b=>b.onclick=async()=>{const latest=await get('skills'),arrSkills=latest[groupIndex]?.skills||[],j=skillIndex+Number(b.dataset.skillMove);if(j<0||j>=arrSkills.length)return;[arrSkills[skillIndex],arrSkills[j]]=[arrSkills[j],arrSkills[skillIndex]];if(await save('skills',latest))location.reload();else panel.querySelector('[data-skill-status]').textContent='Verschieben fehlgeschlagen.';});
      };
      render();panel.querySelector('[data-skill-name]')?.focus();
    }
    async function trainingPage() {
        const [groups, modules] = await Promise.all([get('skills'), get('knowledgeModules')]);
        const km = (Array.isArray(modules) ? modules : []).filter(x => x.status !== 'draft');
        const skillsList = Array.isArray(groups) ? groups : [];
        const nav = [['skills', 'Skills', 'training'], ['devices', 'Geräte', 'device'], ['checklists', 'Übungschecklisten', 'checklist']];
        let selected = new URLSearchParams(location.search).get('typ') || 'skills';
        if (!nav.some(n => n[0] === selected))
            selected = 'skills';
        const main = $('[data-main]');
        main.innerHTML = `<section class="cf547 cf547-training"><h1>Training</h1><nav class="cf547-tabs" aria-label="Trainingstyp">${nav.map(([id, label, ico]) => `<button data-training-tab="${id}" class="${selected === id ? 'selected' : ''}">${ostIcon(ico)} ${label}</button>`).join('')}</nav><section class="cf547-content" data-training-content></section></section>`;
        const out = $('[data-training-content]');
        if(selected==='skills')ost583SkillAdd(out);else ost575AddButton(out,'knowledgeModules',selected==='devices'?{module:'mpg'}:{module:'checklists'});
        function render() {
            $$('[data-training-tab]', main).forEach(b => b.classList.toggle('selected', b.dataset.trainingTab === selected));
            if (selected === 'skills') {
                out.innerHTML = `<h2>Skills</h2><div class="cf547-training-groups">${skillsList.map((g, i) => `<details class="cf547-training-group"><summary>${ostIcon('training')} <strong>${esc(g.name)}</strong><small>${arr(g.skills).length}</small><span class="cf549-expand" aria-hidden="true"></span></summary><div>${arr(g.skills).map((sk, j) => `<div class="ost576-skill-row"><button class="cf547-row" data-training-skill="${i}-${j}"><span class="cf547-row-icon">${ostIcon('check')}</span><strong>${esc(sk.name)}</strong><b>›</b></button><button type="button" class="ost576-skill-pencil" data-ost576-skill data-g="${i}" data-s="${j}" aria-label="Skill bearbeiten">✎</button></div>`).join('')}</div></details>`).join('')}</div>`;
            }
            else {
                const type = selected === 'devices' ? 'mpg' : 'checklists';
                const items = km.filter(x => x.module === type).sort(ostEditorialOrder);
                const safeDocument = value => /^https?:\/\//i.test(String(value || '')) ? String(value) : '';
                out.innerHTML = `<h2>${selected === 'devices' ? 'Geräte' : 'Übungschecklisten'}</h2><div class="cf563-inline-list">${items.map(x => {
                    const url = safeDocument(x.documentUrl);
                    const detail = [x.summary ? `<p class="cf563-summary ost579-subtitle">${esc(x.summary)}</p>` : '', x.body ? `<div class="cf563-rich">${renderModuleText(x.body)}</div>` : '', ost579Documents(x.links?.length ? x.links : (url ? [{url,title:'PDF / Dokument',note:x.summary||''}] : []))].filter(Boolean).join('');
                    return `<details class="cf563-entry ${selected === 'checklists' ? 'ost579-document-card' : ''}" ${selected === 'checklists' ? 'open' : ''}><summary><span class="cf563-entry-icon">${ostIcon(selected === 'devices' ? 'device' : 'checklist')}</span><strong>${esc(x.title)}</strong><span class="cf563-chevron" aria-hidden="true"></span></summary><div class="cf563-entry-body"><button type="button" class="ost571-pencil ost573-card-pencil" data-ost573-training="${esc(x.id)}" aria-label="Eintrag direkt bearbeiten">✎</button>${detail || '<p>Zu diesem Eintrag sind noch keine Details hinterlegt.</p>'}</div></details>`;
                }).join('') || '<p class="cf547-empty">Für diesen Bereich sind noch keine redaktionell veröffentlichten Einträge vorhanden.</p>'}</div>`;
            }
        }
        main.addEventListener('click', async e => {
            if(e.target.closest('.ost579-document-card > summary')){e.preventDefault();return;}
            const tab = e.target.closest('[data-training-tab]');
            if (tab) {
                selected = tab.dataset.trainingTab;
                main.querySelector('[data-ost575-add]')?.remove();if(selected==='skills')ost583SkillAdd(out);else ost575AddButton(out,'knowledgeModules',selected==='devices'?{module:'mpg'}:{module:'checklists'});
                history.replaceState(null, '', 'training.html?typ=' + selected);
                render();
                return;
            }
            const pencil=e.target.closest('[data-ost573-training]');
            if(pencil){e.preventDefault();e.stopPropagation();if(selected==='checklists')ost575LinksEditor(pencil.closest('details'),'knowledgeModules',pencil.dataset.ost573Training);else ost573EditCard(pencil.closest('details'),'knowledgeModules',pencil.dataset.ost573Training,'body',render);return;}
            const single=e.target.closest('[data-ost576-skill]');
            if(single){e.preventDefault();e.stopPropagation();ost583EditSkillRow(single.closest('.ost576-skill-row'),Number(single.dataset.g),Number(single.dataset.s));return;}
            const groupEdit=e.target.closest('[data-ost575-skillgroup]');
            if(groupEdit){e.preventDefault();e.stopPropagation();ost574EditSkillGroup(groupEdit.closest('details'),skillsList[Number(groupEdit.dataset.ost575Skillgroup)]);return;}
            const skill = e.target.closest('[data-training-skill]');
            if (skill) {
                const [gi, si] = skill.dataset.trainingSkill.split('-').map(Number);
                const x = skillsList[gi]?.skills?.[si];
                if (!x)
                    return;
                open(x.name, `<div class="cf547-sheet">${arr(x.sections).map(sec => `<section class="cf547-source"><h3>${esc(sec.title)}</h3>${sec.richHtml?ost570CleanHtml(sec.richHtml):`<ul>${arr(sec.items).map(it => `<li>${esc(it)}</li>`).join('')}</ul>`}</section>`).join('')}</div>`, { sheet: true });
            }
        });
        render();
        if(selected==='skills')ost583SkillAdd(out);else ost575AddButton(out,'knowledgeModules',selected==='devices'?{module:'mpg'}:{module:'checklists'});
    }
    // ------------------------------------------------------------------------
    // Materialien
    // ------------------------------------------------------------------------
    async function ost584EditSchema(card,id){
      if(!await ost574Pin())return;
      const data=await get('algorithms'), item=data.find(x=>String(x.id)===String(id));if(!item)return;
      card.open=true;
      const body=card.querySelector('.cf563-entry-body');if(!body)return;
      body.querySelector('.ost584-schema-edit')?.remove();
      body.classList.add('ost585-schema-editing');card.classList.add('ost586-schema-editing');
      const panel=document.createElement('section');panel.className='ost584-schema-edit';body.prepend(panel);
      let steps=arr(item.steps).map(x=>String(x));let title=String(item.title||''),subtitle=String(item.subtitle||'');
      function collect(){title=panel.querySelector('[data-schema-title]').value;subtitle=panel.querySelector('[data-schema-subtitle]').value;panel.querySelectorAll('[data-schema-row]').forEach((r,i)=>{steps[i]=[r.querySelector('[data-schema-marker]').value.trim(),r.querySelector('[data-schema-content]').value.trim()].filter(Boolean).join(' – ')});}
      function draw(){panel.innerHTML=`<h3>Merkhilfe bearbeiten</h3><label>Titel<input data-schema-title value="${esc(title)}"></label><label>Untertitel<input data-schema-subtitle value="${esc(subtitle)}"></label><h4>Buchstaben, Zahlen und Inhalte</h4>${steps.map((raw,i)=>{const m=raw.match(/^\s*([^–—-]+)\s*[–—-]\s*(.*)$/s);return `<div class="ost584-schema-row" data-schema-row="${i}"><label>Zeichen<input data-schema-marker value="${esc(m?m[1]:String(i+1))}"></label><label>Inhalt<textarea rows="2" data-schema-content>${esc(m?m[2]:raw)}</textarea></label><button type="button" class="btn" data-schema-remove="${i}">✕</button></div>`}).join('')}<button type="button" class="btn" data-schema-add>＋ Schritt</button><div class="ost570-actions"><button type="button" class="btn primary" data-schema-save>Speichern</button><button type="button" class="btn" data-schema-cancel>Abbrechen</button><span role="status" data-schema-status></span></div>`;
        panel.querySelector('[data-schema-add]').onclick=()=>{collect();steps.push(`${steps.length+1} – Neuer Schritt`);draw()};
        panel.querySelectorAll('[data-schema-remove]').forEach(b=>b.onclick=()=>{collect();steps.splice(Number(b.dataset.schemaRemove),1);draw()});
        panel.querySelector('[data-schema-cancel]').onclick=()=>{panel.remove();body.classList.remove('ost585-schema-editing');card.classList.remove('ost586-schema-editing');};
        panel.querySelector('[data-schema-save]').onclick=async()=>{collect();const latest=await get('algorithms'),i=latest.findIndex(x=>String(x.id)===String(id));if(i<0)return;latest[i]={...latest[i],title:title.trim()||item.title,subtitle:subtitle.trim(),steps:steps.filter(x=>x.trim())};if(await save('algorithms',latest))location.reload();else panel.querySelector('[data-schema-status]').textContent='Speichern fehlgeschlagen.'};
      }draw();
    }
    async function materialHub() {
        const [modules, algorithms, docs] = await Promise.all([get('knowledgeModules'), get('algorithms'), articles()]);
        const km = Array.isArray(modules) ? modules : [];
        const allAlgorithms = Array.isArray(algorithms) ? algorithms : [];
        // Redaktion speichert Leitlinien auch ohne Quellenlink. Ein Link ist optional.
        // Die öffentliche Auswahl muss dieselben Datensätze wie der Redaktionsbereich zeigen.
        const guidelines = allAlgorithms.filter(x => !String(x.category || '').startsWith('Schema')).sort(ostEditorialOrder);
        const checklists = km.filter(x => x.module === 'material-checklists' && x.status !== 'draft').sort(ostEditorialOrder);
        const mnemonics = allAlgorithms.filter(x => String(x.category || '').startsWith('Schema')).sort(ostEditorialOrder);
        const literature = Array.isArray(docs) ? docs : [];
        const categories = [['guidelines', 'Leitlinien', 'guideline'], ['checklists', 'Checklisten', 'checklist'], ['mnemonics', 'Merkhilfen & Schemata', 'notes'], ['literature', 'Literatur-Archiv', 'book']];
        const param = new URLSearchParams(location.search).get('typ');
        let active = categories.some(c => c[0] === param) ? param : 'guidelines';
        const main = $('[data-main]');
        main.innerHTML = `<section class="cf547 cf547-materials cf553-materials"><h1>Materialien</h1><nav class="cf547-tabs cf550-responsive-tabs cf550-material-tabs" aria-label="Materialtypen">${categories.map(([id, label, ico]) => `<button type="button" data-mat-tab="${id}" class="${active === id ? 'selected' : ''}">${ostIcon(ico)}<span class="ost594-tab-label">${label}</span></button>`).join('')}</nav><section class="cf547-content" data-material-list></section></section>`;
        const box = $('[data-material-list]');
        const safeLink = value => /^https?:\/\//i.test(String(value || '')) ? String(value) : '';
        const link = (url, label) => safeLink(url) ? `<a class="cf563-resource" href="${esc(safeLink(url))}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>` : '';
        const card = (title, iconName, content, collapsed=false) => `<details class="cf563-entry ${collapsed ? 'ost584-collapsible' : 'ost579-document-card'}" ${collapsed ? '' : 'open'}><summary><span class="cf563-entry-icon">${ostIcon(iconName)}</span><strong>${esc(title || 'Ohne Titel')}</strong><span class="cf563-chevron" aria-hidden="true"></span></summary><div class="cf563-entry-body">${content || '<p>Zu diesem Eintrag sind noch keine Details hinterlegt.</p>'}</div></details>`;
        const schemaItem = (text, i) => {
            const raw = String(text ?? '');
            const match = raw.match(/^\s*([A-ZÄÖÜ]{1,3})\s*[–—-]\s*(.*)$/s);
            const acronym = match ? match[1] : '';
            const value = match ? match[2] : raw;
            const split = value.match(/^([^:：]{2,58}):\s*(.+)$/s);
            const copy = split ? `<div class="cf553-schema-copy"><strong>${esc(split[1])}</strong><span>${esc(split[2])}</span></div>` : `<div class="cf553-schema-copy"><span>${esc(value)}</span></div>`;
            return `<li class="cf553-schema-step cf553-tone-${i % 6 + 1}"><span class="cf553-schema-marker" aria-hidden="true">${esc(acronym || '•')}</span>${copy}</li>`;
        };
        const attachments = a => {
            const materials = a.materials && typeof a.materials === 'object' ? a.materials : {};
            const items = [];
            for (const key of ['background', 'checklists']) for (const m of arr(materials[key])) {
                if (m && typeof m === 'object' && safeLink(m.url)) items.push(ost579Documents([m]));
            }
            return items.length ? `<div class="cf563-resources">${items.join('')}</div>` : '';
        };
        const schemaPanel = a => {
            const steps = arr(a.steps);
            return `${steps.length ? `<ol class="cf553-schema-steps">${steps.map(schemaItem).join('')}</ol>` : ''}${String(a.explanation || '').trim() ? `<section class="cf561-schema-explanation"><h3>Erklärung zum Schema</h3><div class="cf561-schema-description">${renderModuleText(a.explanation)}</div></section>` : ''}${a.source ? `<p class="cf553-schema-source"><strong>Quelle:</strong> ${esc(a.source)}</p>` : ''}${link(a.sourceUrl, 'Originalquelle öffnen')}${attachments(a)}`;
        };
        const guidelinePanel = a => {
            const steps = arr(a.steps);
            const image = String(a.imageUrl || '');
            const imageHtml = /^(https?:\/\/|assets\/)/i.test(image) ? `<figure class="cf563-figure"><img loading="lazy" src="${esc(image)}" alt="${esc(a.imageCaption || a.title || 'Leitliniengrafik')}">${a.imageCaption ? `<figcaption>${esc(a.imageCaption)}</figcaption>` : ''}</figure>` : '';
            return `${a.stand ? `<p class="cf563-summary"><strong>Stand:</strong> ${esc(a.stand)}</p>` : ''}${a.explanation ? `<div class="cf563-rich">${renderModuleText(a.explanation)}</div>` : ''}${steps.length ? `<section class="cf563-section"><h3>Ablauf / Schritte</h3><ol class="cf563-steps">${steps.map(t => `<li>${esc(t)}</li>`).join('')}</ol></section>` : ''}${imageHtml}${a.source ? `<p class="cf563-source"><strong>Quelle:</strong> ${esc(a.source)}</p>` : ''}${a.links?.length?ost579Documents(a.links):`${link(a.sourceUrl, 'Leitlinie / Quelle öffnen')}${attachments(a)}`}`;
        };
        function render() {
            $$('[data-mat-tab]', main).forEach(button => {
                const selected = button.dataset.matTab === active;
                button.classList.toggle('selected', selected);
                button.setAttribute('aria-pressed', String(selected));
            });
            const list = active === 'guidelines' ? guidelines : active === 'checklists' ? checklists : active === 'mnemonics' ? mnemonics : literature;
            const iconName = categories.find(c => c[0] === active)[2];
            const items = list.map(a => {
                const editing=`<button class="ost571-pencil ost573-card-pencil" type="button" data-ost573-material="${esc(a.id)}" aria-label="Eintrag direkt bearbeiten">✎</button>`;
                if (active === 'guidelines') return card(a.title, iconName, editing+guidelinePanel(a));
                if (active === 'mnemonics') return card(a.title, iconName, `<div class="ost584-schema-subtitle">${esc(a.subtitle||'')}</div><button type="button" class="ost571-pencil ost584-schema-pencil" data-ost584-schema="${esc(a.id)}" aria-label="Merkhilfe bearbeiten">✎</button>${schemaPanel(a)}`,true);
                if (active === 'checklists') {
                    const content = `${a.summary ? `<p class="cf563-summary">${esc(a.summary)}</p>` : ''}${a.body ? `<div class="cf563-rich">${renderModuleText(a.body)}</div>` : ''}${ost579Documents(a.links?.length ? a.links : (a.documentUrl ? [{url:a.documentUrl,title:'PDF / Dokument',note:a.summary||''}] : []))}`;
                    return card(a.title, iconName, editing+content);
                }
                const details = [a.authors, a.journal, a.year].filter(Boolean).map(x => esc(x)).join(' · ');
                const content = `${details ? `<p class="cf563-summary">${details}</p>` : ''}${a.why ? `<div class="cf563-rich">${renderModuleText(a.why)}</div>` : ''}${a.read ? `<p>${esc(a.read)}</p>` : ''}${ost579Documents(a.links?.length?a.links:(a.freeUrl||a.publisherUrl?[{url:a.freeUrl||a.publisherUrl,title:'Artikel öffnen',note:''}]:[]))}`;
                return card(a.title, iconName, editing+content, active==='literature');
            });
            box.innerHTML = `<div class="cf547-content-title"><h2>${esc(categories.find(c => c[0] === active)[1])}</h2><span>${list.length} Einträge</span></div><div class="cf563-inline-list">${items.join('') || '<p class="cf547-empty">Hier sind noch keine veröffentlichten Inhalte hinterlegt.</p>'}</div>`;
            main.querySelector('[data-ost575-add]')?.remove();ost575AddButton(box,active==='checklists'?'knowledgeModules':active==='literature'?'articles':'algorithms',active==='checklists'?{module:'material-checklists'}:active==='guidelines'?{category:'Leitlinie'}:{});
        }
        main.addEventListener('click', event => {
            if(event.target.closest('.ost579-document-card > summary')){event.preventDefault();return;}
            const schema=event.target.closest('[data-ost584-schema]');if(schema){event.preventDefault();event.stopPropagation();ost584EditSchema(schema.closest('details'),schema.dataset.ost584Schema);return;}
            const edit=event.target.closest('[data-ost573-material]');
            if(edit){event.preventDefault();event.stopPropagation();const storage=active==='checklists'?'knowledgeModules':active==='literature'?'articles':'algorithms';const field=active==='checklists'?'body':'explanation';ost575LinksEditor(edit.closest('details'),storage,edit.dataset.ost573Material);return;}
            const tab = event.target.closest('[data-mat-tab]');
            if (!tab) return;
            active = tab.dataset.matTab;
            history.replaceState(null, '', 'materialien.html?typ=' + active);
            render();
        });
        render();
    }
    async function guidelinesPage() {
        const a = await get('algorithms');
        const refs = a.filter(x => x.sourceUrl && /^https:\/\//i.test(x.sourceUrl));
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>Leitlinien / Guidelines</h1><p>Quellen und weiterführende Leitlinien aus dem bestehenden Algorithmenbestand.</p></section><div class="ost-link-directory ost-tonal-directory">${refs.map(x => `<a href="${esc(x.sourceUrl)}" target="_blank" rel="noopener noreferrer"><span>📖</span><div><strong>${esc(x.title)}</strong></div><b>↗</b></a>`).join('') || '<p class="empty">Noch keine verlinkten Leitlinien. Unter Redaktion → Algorithmen & Schemata können Quellen-URLs hinterlegt werden.</p>'}</div><p class="diag-hint">Die Links sind externe Quellen. Gültigkeit und Aktualität bitte prüfen.</p>`;
    }
    async function faqPage() {
        const items = [['Wie bereite ich eine Simulation vor?', 'Lernziel, Fallbeschreibung, Rollen, Material und technische Ausstattung vor Beginn abstimmen. Den Simulator und die Kommunikation vor dem Szenario kurz testen.'], ['Wie läuft ein Simulationstraining ab?', 'Üblicherweise auf Briefing, Szenario und anschließendes strukturiertes Debriefing aufteilen. Lernziele und Rollen vorab klären.'], ['Wo finde ich die Simulatorbedienung?', 'Im Simulations Guide sind die vorhandenen Schnellstart- und Bedienungsschritte zusammengestellt.'], ['Was tun bei technischen Problemen?', 'Szenario gegebenenfalls pausieren, Geräteverbindungen und Stromversorgung prüfen und die zuständige betreuende Person informieren.'], ['Wie kann ich Trainingsinhalte ergänzen?', 'Die Redaktion bietet unter Quick Guide Simulation die Pflege der vorhandenen Schritte. Für weitere FAQ-Einträge kann die Seite später redaktionell erweitert werden.']];
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>FAQ zu Simulationstrainings</h1><p>Allgemeine Hinweise zu Vorbereitung, Durchführung und Nachbesprechung.</p></section><div class="ost-faq-list">${items.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('')}</div><p class="diag-hint">Allgemeine Orientierung; lokale Ausbildungsstandards gehen vor.</p>`;
    }
    async function newsPage() {
        const d = visibleNews(await get('news'));
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>Aktuelles</h1><div class="toolbar"><div class="filter-chips"><button class="filter-chip active" data-cat="all">Alle</button>${[...new Set(d.map(x => x.category || 'Organisation'))].map(c => `<button class="filter-chip" data-cat="${esc(c)}">${esc(c)}</button>`).join('')}</div></div></section><div class="news-list" data-list></div>`;
        let shown = d;
        const draw = cat => { shown = d.filter(x => cat === 'all' || (x.category || 'Organisation') === cat); $('[data-list]').innerHTML = shown.map((n, i) => newsHtml(n, i)).join('') || '<div class="empty">Keine Meldungen</div>'; };
        $('[data-main]').onclick = e => { const c = e.target.closest('[data-cat]'); if (c) {
            $$('[data-cat]').forEach(x => x.classList.toggle('active', x === c));
            draw(c.dataset.cat);
            return;
        } const n = e.target.closest('[data-news]'); if (n) {
            const x = shown[+n.dataset.news];
            open(x.title, `<section class="overlay-section news-detail"><div class="ost-news-rich">${renderModuleText(x.text || 'Noch keine Beschreibung hinterlegt.')}</div>${x.link ? `<a class="btn primary" href="${esc(x.link)}">Weiterlesen</a>` : ''}</section>`, { news: true });
        } };
        draw('all');
    }
    async function literature() {
        const arts = await articles();
        const tagsOf = a => [...new Set([...(Array.isArray(a.tags) ? a.tags : String(a.tags || '').split(',')), ...(Array.isArray(a.topics) ? a.topics : String(a.topics || '').split(','))].map(v => String(v).trim()).filter(Boolean))];
        const tags = [...new Set(arts.flatMap(tagsOf))].sort((a, b) => a.localeCompare(b, 'de'));
        $('[data-main]').innerHTML = `<section class="cf548-archive"><header class="cf548-archive-head"><h1>Literatur-Archiv</h1><p>Alle Fachartikel, Studien und Quellen an einem Ort.</p></header><div class="cf548-archive-controls"><label><span class="ost-visually-hidden">Literatur suchen</span><input type="search" data-lit-query placeholder="Titel, Autor:innen oder Tags suchen …"></label><label><span class="ost-visually-hidden">Nach Tag filtern</span><select data-lit-tag><option value="">Alle Tags</option>${tags.map(t => `<option value="${esc(t)}">${esc(t)}</option>`).join('')}</select></label></div><p class="cf548-archive-count" data-lit-count></p><div class="cf548-archive-list" data-lit-list></div></section>`;
        const root = $('[data-main]');
        const input = $('[data-lit-query]', root), tagSel = $('[data-lit-tag]', root), box = $('[data-lit-list]', root);
        let pageLimit = 10;
        function draw() {
            const q = normalizedSearch(input.value), tag = tagSel.value;
            const found = arts.filter(a => (!tag || tagsOf(a).includes(tag)) && (!q || normalizedSearch([a.title, a.authors, a.journal, a.why, ...tagsOf(a)].join(' ')).includes(q)));
            $('[data-lit-count]', root).textContent = `${found.length} ${found.length === 1 ? 'Artikel' : 'Artikel'}`;
            box.innerHTML = found.slice(0,pageLimit).map(a => { const link = String(a.freeUrl || a.publisherUrl || ''), safe = /^https?:\/\//i.test(link) ? link : ''; const auth = Array.isArray(a.authors) ? a.authors.join(', ') : String(a.authors || ''); const theseTags = tagsOf(a); return `<details class="ost584-archive-entry"><summary>${esc(a.title)}</summary><article class="cf548-archive-card" data-ost574-id="${esc(a.id)}"><span class="cf548-archive-icon">${ostIcon('book')}</span><div class="cf548-archive-copy"><h2>${esc(a.title)}</h2><p>${esc([auth, a.journal, a.year].filter(Boolean).join(' · '))}</p><div class="cf548-tag-list">${theseTags.slice(0, 5).map(t => `<button type="button" data-filter-tag="${esc(t)}">${esc(t)}</button>`).join('')}</div></div>${safe ? `<a class="cf548-archive-open" href="${esc(safe)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(a.title)} öffnen">↗</a>` : ''}</article></details>`; }).join('') || '<p class="cf-muted">Keine Artikel für diese Auswahl gefunden.</p>';
            if(found.length>pageLimit)box.insertAdjacentHTML('beforeend',`<button type="button" class="btn ost585-more" data-lit-more>Weitere 10 anzeigen (${found.length-pageLimit} verbleibend)</button>`);
            box.querySelector('[data-lit-more]')?.addEventListener('click',()=>{pageLimit+=10;draw();});
            box.querySelectorAll('[data-filter-tag]').forEach(b => b.onclick = () => { tagSel.value = b.dataset.filterTag; draw(); });
        }
        input.addEventListener('input', ()=>{pageLimit=10;draw();});
        tagSel.addEventListener('change', ()=>{pageLimit=10;draw();});
        draw();
    }
    async function abcdePage() {
        const d = await get('abcde'), labels = { A: 'Airway', B: 'Breathing', C: 'Circulation', D: 'Disability', E: 'Exposure' }, sub = { A: 'Atemweg', B: 'Atmung', C: 'Kreislauf', D: 'Neurologie', E: 'Umgebung' }, vis = { A: '🫁', B: '🫁', C: '❤️', D: '🧠', E: '🌡️' };
        let current = 0;
        $('[data-main]').innerHTML = `<section class="page-banner compact-banner"><h1>ABCDE-Schema</h1></section><section class="abcde-wrap"><div class="abcde-tabs" data-tabs></div><div class="abcde-main simplified" data-detail></div></section>`;
        function block(title, ico, items, klass = '') { return `<section class="abcde-block ${klass}"><div class="abcde-block-head"><span>${ico}</span><strong>${title}</strong></div><ul>${arr(items).map(it => `<li>${esc(it)}</li>`).join('')}</ul></section>`; }
        function render() { const x = d[current]; $('[data-tabs]').innerHTML = d.map((a, i) => `<button class="abcde-tab ${a.key.toLowerCase()} ${i === current ? 'active' : ''}" data-abc="${i}"><strong>${esc(a.key)}</strong><span>${esc(labels[a.key] || a.title)}</span></button>`).join(''); $('[data-detail]').innerHTML = `<div class="abcde-head"><span class="abcde-letter ${esc((x.key || '').toLowerCase())}">${esc(x.key)}</span><span><h2>${esc(x.key)} – ${esc(labels[x.key] || x.title)}</h2><p>${esc(sub[x.key] || x.title)}</p></span><span class="abcde-visual">${vis[x.key] || '🩺'}</span></div><div class="abcde-direct">${block('Beurteilung', '🔎', x.checks)}${block('Maßnahmen', '⚙️', x.actions)}${block('Warnzeichen', '⚠️', x.pitfalls, 'warning')}</div>`; }
        $('[data-main]').onclick = e => { const a = e.target.closest('[data-abc]'); if (a) {
            current = +a.dataset.abc;
            render();
        } };
        render();
    }
    async function differentialPage() {
        const d = await get('differential');
        const iconMap = { lungs: '🫁', heart: '❤️', brain: '🧠', abdomen: '🩺', syringe: '💉', bolt: '⚡', bandage: '🩹', clock: '🕒', stethoscope: '🩺' };
        const iconFor = x => iconMap[x.icon] || x.icon || '🩺';
        const params = new URLSearchParams(location.search), id = params.get('id'), idx = params.get('disease'), groupParam = params.get('group');
        const symptom = d.find(x => x.id === id), causes = symptom ? arr(symptom.causes).map(c => typeof c === 'string' ? { name: c } : c) : [];
        const link = (x, i) => `differential.html?id=${encodeURIComponent(x.id)}${i === undefined ? '' : '&disease=' + i}`;
        const intro = '<p class="diag-hint">Lernmaterial, keine Diagnose- oder Therapieanweisung. Bei Instabilität ABCDE und lokale SOPs priorisieren. Externe Recherchelinks ersetzen keine geprüften Leitlinien.</p>';
        const breadcrumbs = xs => `<nav class="diag-breadcrumb"><a href="differential.html">Diagnostik</a>${xs.map(it => `<span>›</span>${it.href ? `<a href="${it.href}">${esc(it.name)}</a>` : `<strong>${esc(it.name)}</strong>`}`).join('')}</nav>`;
        const safeUrl = url => { try {
            const u = new URL(url);
            return ['https:', 'http:'].includes(u.protocol) ? u.href : '';
        }
        catch (e) {
            return '';
        } };
        const clip = (v, n = 170) => { const t = String(v || '').trim(); return t.length > n ? `${t.slice(0, n - 1).trim()}…` : t; };
        const groupMeta = {
            'Atemweg': { label: 'Atmung & Atemweg', icon: '🫁', sub: 'Dyspnoe, Husten, Stridor, obere Atemwege' },
            'Atmung': { label: 'Atmung & Atemweg', icon: '🫁', sub: 'Dyspnoe, Husten, Stridor, obere Atemwege' },
            'Kreislauf': { label: 'Herz & Kreislauf', icon: '❤️', sub: 'Thoraxschmerz, Rhythmus, Schock, Synkope' },
            'Neurologie': { label: 'Neurologie', icon: '🧠', sub: 'Bewusstsein, Ausfälle, Krampf, Schwindel' },
            'Abdomen': { label: 'Abdomen & Verdauung', icon: '🩺', sub: 'Bauchschmerz, GI-Blutung, Erbrechen, Stuhl' },
            'Stoffwechsel': { label: 'Stoffwechsel & Endokrinologie', icon: '💉', sub: 'Blutzucker, Elektrolyte, metabolische Krisen' },
            'Infektion': { label: 'Infektion & Allgemein', icon: '🦠', sub: 'Fieber, Infektzeichen, Allgemeinzustand' },
            'Allgemein / Allergie': { label: 'Allergie & Haut', icon: '🌿', sub: 'Allergische Reaktion, Hautveränderungen' },
            'Urologie': { label: 'Urologie / Gyn / Geburt', icon: '🩸', sub: 'Harnwege, gynäkologische und geburtshilfliche Beschwerden' },
            'Geburtshilfe': { label: 'Urologie / Gyn / Geburt', icon: '🩸', sub: 'Harnwege, gynäkologische und geburtshilfliche Beschwerden' },
            'Trauma': { label: 'Trauma & Umwelt', icon: '🩹', sub: 'Verletzungen, Blutung, Kälte/Hitze, SHT' },
            'Umwelt': { label: 'Trauma & Umwelt', icon: '🩹', sub: 'Verletzungen, Blutung, Kälte/Hitze, SHT' },
            'Psychiatrie / Toxikologie': { label: 'Psyche & Intoxikation', icon: '🧩', sub: 'Angst, Agitation, Intoxikation, Somnolenz' },
            'Pädiatrie': { label: 'Pädiatrie', icon: '🧒', sub: 'Kinderleitsymptome und Besonderheiten' }
        };
        const order = ['Atmung & Atemweg', 'Herz & Kreislauf', 'Neurologie', 'Abdomen & Verdauung', 'Stoffwechsel & Endokrinologie', 'Infektion & Allgemein', 'Allergie & Haut', 'Urologie / Gyn / Geburt', 'Trauma & Umwelt', 'Psyche & Intoxikation', 'Pädiatrie', 'Weitere'];
        const resolveGroup = g => groupMeta[g] || { label: g || 'Weitere', icon: '🩺', sub: 'Weitere Leitsymptome' };
        const diseaseIcon = name => { const n = String(name || '').toLocaleLowerCase('de'); if (/schlaganfall|blutung|infarkt|meningitis|epilep|krampfanfall|parese|migraene|migräne|schwindel|delir|hirn/.test(n))
            return '🧠'; if (/koronar|kardio|rhythm|tachykard|bradykard|herz|synkope|aorta|perikard|vorhofflimmern|av-block/.test(n))
            return '❤️'; if (/lunge|pneumo|asthma|copd|bronch|embolie|stridor|atem|epiglott|krupp/.test(n))
            return '🫁'; if (/anaphyl|allerg|urtikaria|angioödem|exanthem/.test(n))
            return '🌿'; if (/diabet|gluk|hypokal|hyperkal|hyponatr|elektrolyt|metabol|thyreo/.test(n))
            return '💉'; if (/sepsis|infekt|virus|bakter|fieber|erysipel/.test(n))
            return '🦠'; if (/ileus|abdomen|append|gastro|pankreat|kolik|ulku|divertikel|chole|mesenteri/.test(n))
            return '🩺'; if (/schwanger|präeklam|ektop|abort|plazenta|uterus|ovarial/.test(n))
            return '🤰'; if (/fraktur|trauma|hämatom|verletz|luxation/.test(n))
            return '🩹'; if (/intox|medikament|alkohol|opioid|benzodiazepin/.test(n))
            return '⚗️'; if (/niere|harn|ureter|zystit|pyeloneph/.test(n))
            return '🩸'; return '🩺'; };
        const diseaseCard = (c, i) => `<a class="diag-disease-card diag-disease-compact" href="${link(symptom, i)}"><div class="diag-disease-head"><span class="diag-result-icon">${diseaseIcon(c.name)}</span><span class="diag-disease-title"><strong>${esc(c.name)}</strong></span><b>›</b></div></a>`;
        if (symptom && idx !== null) {
            const c = causes[Number(idx)];
            if (!c) {
                location.replace(link(symptom));
                return;
            }
            const parts = [['Pathophysiologie / physiologische Änderung', c.physiology], ['Typische Befunde / auffällige Werte', c.findings], ['Präklinische Einordnung', c.info], ['CAVE / Warnzeichen', c.cave]].filter(y => y[1]);
            const url = safeUrl(c.sourceUrl);
            const backTarget = link(symptom);
            $('[data-main]').innerHTML = `<article class="diag-detail"><a class="ost-anat-back diag-inline-back" href="${backTarget}"><span aria-hidden="true">←</span> Zur Übersicht</a><h2>${esc(c.name)}</h2><div class="diag-detail-grid">${parts.map(([t, v]) => `<section class="diag-info-section ${t.startsWith('CAVE') ? 'diag-cave' : ''}"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`).join('')}</div>${url ? `<section class="diag-info-section diag-source-box"><h3>Weiterlesen</h3><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(c.sourceLabel || 'Externe Fachliteratur')}</a><p class="diag-hint">Recherchelink – Inhalte und Aktualität der Quelle eigenständig prüfen.</p></section>` : ''}</article>${intro}`;
            return;
        }
        if (symptom) {
            $('[data-main]').innerHTML = `${breadcrumbs([{ name: symptom.title }])}<div class="diag-summary"><span class="diag-big-icon">${iconFor(symptom)}</span><div><div class="diag-summary-kicker">Leitsymptom / Beschwerdebild</div><h2>${esc(symptom.title)}</h2><p>${causes.length} häufige Krankheitsbilder</p></div></div>${symptom.theory ? `<section class="ost-theory-aside"><div class="ost-theory-label">HINTERGRUNDWISSEN</div><p>${esc(symptom.theory)}</p></section>` : ''}<section class="diag-assess-grid"><section class="diag-assess-box"><h3>🗣️ Wichtige Fragen</h3><ul>${arr(symptom.questions).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section><section class="diag-assess-box diag-alert-box"><h3>⚠️ Red Flags</h3><ul>${arr(symptom.redflags).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section></section><h2 class="diag-section-title">Krankheitsbilder</h2><div class="diag-disease-list">${causes.map((c, i) => diseaseCard(c, i)).join('')}</div>${intro}`;
            const catalog = await contentCatalog();
            $('[data-main]').insertAdjacentHTML('beforeend', relatedHtml(symptom, catalog));
            return;
        }
        const groups = new Map();
        d.forEach(x => { const meta = resolveGroup(x.group); if (!groups.has(meta.label))
            groups.set(meta.label, { meta, items: [] }); groups.get(meta.label).items.push(x); });
        const sorted = [...groups.values()].sort((a, b) => (order.indexOf(a.meta.label) < 0 ? 999 : order.indexOf(a.meta.label)) - (order.indexOf(b.meta.label) < 0 ? 999 : order.indexOf(b.meta.label)));
        if (groupParam) {
            const currentGroup = sorted.find(({ meta }) => meta.label === groupParam);
            if (!currentGroup) {
                location.replace('differential.html');
                return;
            }
            $('[data-main]').innerHTML = `<section class="page-banner compact-banner"><h1>${esc(currentGroup.meta.label)}</h1></section>${breadcrumbs([{ name: currentGroup.meta.label }])}<section class="diag-group-overview">${currentGroup.items.map(item => `<article class="diag-symptom-shell"><div class="diag-symptom-shell-head"><div><div class="diag-summary-kicker">Leitsymptom</div><h2>${esc(item.title)}</h2><p>${esc(clip(item.theory || currentGroup.meta.sub || '', 180))}</p></div><a class="diag-open-link" href="${link(item)}">Übersicht öffnen →</a></div><div class="diag-disease-chiplist">${arr(item.causes).map((raw, i) => { const c = typeof raw === 'string' ? { name: raw } : raw; return `<button type="button" class="diag-disease-chip" data-diag-overlay="1" data-symptom="${esc(item.id)}" data-disease="${i}"><span>${diseaseIcon(c.name)}</span><strong>${esc(c.name)}</strong></button>`; }).join('')}</div></article>`).join('')}</section>${intro}`;
            $('[data-main]').onclick = e => { const btn = e.target.closest('[data-diag-overlay]'); if (!btn)
                return; const sx = currentGroup.items.find(x => x.id === btn.dataset.symptom); const list = sx ? arr(sx.causes).map(c => typeof c === 'string' ? { name: c } : c) : []; const c = list[Number(btn.dataset.disease)]; if (!sx || !c)
                return; const parts = [['Pathophysiologie / physiologische Änderung', c.physiology], ['Typische Befunde / auffällige Werte', c.findings], ['Präklinische Einordnung', c.info], ['CAVE / Warnzeichen', c.cave]].filter(y => y[1]); const url = safeUrl(c.sourceUrl); open(c.name, `<section class="overlay-section diag-quick-overlay"><div class="diag-kicker">${esc(sx.title)}</div>${parts.map(([t, v]) => `<section class="diag-info-section ${t.startsWith('CAVE') ? 'diag-cave' : ''}"><h3>${esc(t)}</h3><p>${esc(v)}</p></section>`).join('') || '<p>Für dieses Krankheitsbild ist noch keine Detailbeschreibung hinterlegt.</p>'}${url ? `<section class="diag-info-section diag-source-box"><h3>Weiterlesen</h3><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">↗ ${esc(c.sourceLabel || 'Externe Fachliteratur')}</a></section>` : ''}<a class="btn primary" href="${link(sx, list.indexOf(c))}">Vollansicht öffnen</a></section>`); };
            return;
        }
        const quickGroups = ['Neurologie', 'Atmung & Atemweg', 'Herz & Kreislauf', 'Abdomen & Verdauung', 'Stoffwechsel & Endokrinologie', 'Urologie / Gyn / Geburt', 'Trauma & Umwelt'];
        const bodyGroups = [
            { id: 'brain', label: 'Neurologie', group: 'Neurologie', desc: 'Bewusstsein, Ausfälle und neurologische Symptome' },
            { id: 'lungs', label: 'Atemweg & Atmung', group: 'Atmung & Atemweg', desc: 'Atmung, Dyspnoe, Husten und Stridor' },
            { id: 'heart', label: 'Herz & Kreislauf', group: 'Herz & Kreislauf', desc: 'Thoraxschmerz, Rhythmusstörungen, Schock' },
            { id: 'abdomen', label: 'Abdomen', group: 'Abdomen & Verdauung', desc: 'Bauchschmerzen, gastrointestinale Symptome' },
            { id: 'kidney', label: 'Urologie', group: 'Urologie / Gyn / Geburt', desc: 'Harnwege und gynäkologische Beschwerden' },
            { id: 'movement', label: 'Trauma & Umwelt', group: 'Trauma & Umwelt', desc: 'Verletzungen und traumatische Beschwerden' }
        ].filter(g => sorted.some(s => s.meta.label === g.group));
        const diseaseInfo = (x, c, i, g) => {
            const parts = [['Pathophysiologie', c.physiology], ['Typische Befunde', c.findings], ['Präklinische Einordnung', c.info], ['CAVE', c.cave]].filter(pair => pair[1]);
            open(c.name, `<div class="ost-disease-info"><button type="button" class="ost-anat-back" data-diag-back><span aria-hidden="true">←</span> Zur Übersicht</button>${parts.map(([title, value]) => `<section class="ost-disease-part ${title === 'CAVE' ? 'ost-disease-cave' : ''}"><h3>${esc(title)}</h3><p>${esc(value)}</p></section>`).join('') || '<p>Keine Detailbeschreibung vorhanden.</p>'}<p class="diag-hint">Lernmaterial; lokale SOPs und freigegebene Leitlinien sind maßgeblich.</p></div>`, { sheet: true });
            $('[data-overlay-body]').onclick = e => { if (e.target.closest('[data-diag-back]'))
                showDiseaseGroup(g); };
        };
        const showDiseaseGroup = g => {
            const group = sorted.find(entry => entry.meta.label === g.group);
            if (!group)
                return;
            const symptoms = group.items.map(x => x.title).filter(Boolean);
            const unique = new Set();
            const diseases = group.items.flatMap(x => arr(x.causes).map((raw, i) => ({ x, i, c: typeof raw === 'string' ? { name: raw } : raw }))).filter(entry => { const name = String(entry.c.name || '').trim().toLocaleLowerCase('de'); if (!name || unique.has(name))
                return false; unique.add(name); return true; });
            open(g.label, `<section class="ost-diag-symptom-overview"><h3>Typische Symptome</h3><div class="ost-diag-symptom-chips">${symptoms.map(name => `<span>${esc(name)}</span>`).join('')}</div></section><h3 class="ost-sheet-subheading">Krankheitsbilder</h3><div class="ost-diag-condition-list">${diseases.map(entry => `<button class="ost-sheet-row" data-diag-item="${esc(entry.x.id)}" data-diag-index="${entry.i}"><span class="ost-sheet-row-icon">${diseaseIcon(entry.c.name)}</span><span><strong>${esc(entry.c.name)}</strong></span><b>›</b></button>`).join('')}</div>`, { sheet: true });
            $('[data-overlay-body]').onclick = e => { const b = e.target.closest('[data-diag-item]'); if (!b)
                return; const x = group.items.find(v => v.id === b.dataset.diagItem); if (!x)
                return; const c = arr(x.causes)[Number(b.dataset.diagIndex)]; if (c)
                diseaseInfo(x, typeof c === 'string' ? { name: c } : c, Number(b.dataset.diagIndex), g); };
        };
        $('[data-main]').innerHTML = `<div class="ost-model-screen"><label class="ost-model-search"><span>⌕</span><input type="search" data-diag-search placeholder="Diagnostik durchsuchen …" aria-label="Diagnostik durchsuchen"></label><div class="ost-model-intro">Tippe direkt auf eine Körperregion</div>${interactiveBodyMap(bodyGroups, 'diagnosis')}<section class="ost-model-results" data-diag-search-results hidden></section></div>`;
        $('[data-main]').onclick = e => { const b = e.target.closest('[data-body-zone]'); if (b) {
            const g = bodyGroups.find(x => x.id === b.dataset.bodyZone);
            if (g)
                showDiseaseGroup(g);
        } };
        const input = $('[data-diag-search]'), results = $('[data-diag-search-results]');
        input.oninput = () => { const q = normalizedSearch(input.value.trim()); results.hidden = !q; if (!q) {
            results.innerHTML = '';
            return;
        } const found = []; d.forEach(x => { if (normalizedSearch(x.title).includes(q))
            found.push({ x, i: null }); arr(x.causes).forEach((r, i) => { const c = typeof r === 'string' ? { name: r } : r; if (normalizedSearch(c.name).includes(q))
            found.push({ x, i, c }); }); }); results.innerHTML = `<h3>Suchergebnisse</h3>${found.slice(0, 80).map(f => `<button class="ost-sheet-row" data-search-diag="${esc(f.x.id)}" data-index="${f.i === null ? '' : f.i}"><span>🩺</span><strong>${esc(f.c ? f.c.name : f.x.title)}</strong><b>›</b></button>`).join('') || '<p>Keine Treffer</p>'}`; results.onclick = e => { const b = e.target.closest('[data-search-diag]'); if (!b)
            return; const x = d.find(x => x.id === b.dataset.searchDiag); if (!x)
            return; if (b.dataset.index !== '') {
            const c = arr(x.causes)[Number(b.dataset.index)];
            const g = bodyGroups.find(g => resolveGroup(x.group).label === g.group);
            if (c)
                diseaseInfo(x, typeof c === 'string' ? { name: c } : c, Number(b.dataset.index), g || { group: resolveGroup(x.group).label, label: resolveGroup(x.group).label });
        }
        else {
            const g = bodyGroups.find(g => resolveGroup(x.group).label === g.group);
            if (g)
                showDiseaseGroup(g);
            else
                open(x.title, `<div class="ost-sheet-info">${esc(x.theory || 'Leitsymptom')}</div>`, { sheet: true });
        } }; };
    }
    async function simpleCards(name, title, mode) {
        const d = await get(name);
        const emo = { lungs: '🫁', heart: '❤️', brain: '🧠', bolt: '⚡', abdomen: '🩺', syringe: '💉', clock: '🕒', bandage: '🩹', stethoscope: '🩺', search: '🔎' };
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>${title}</h1></section><div class="list ost-tonal-list">${d.map((x, i) => `<button class="row-card" data-i="${i}"><span class="row-icon">${mode === 'diff' ? (emo[x.icon] || x.icon || '🩺') : esc(x.icon || (mode === 'change' ? '🔄' : mode === 'guide' ? '🖥️' : '📋'))}</span><span><strong>${esc(x.title || x.name)}</strong></span><span class="arrow">›</span></button>`).join('')}</div>`;
        $('[data-main]').onclick = e => { const b = e.target.closest('[data-i]'); if (!b)
            return; const x = d[+b.dataset.i]; let html = ''; if (mode === 'diff')
            html = `<section class="overlay-section"><h3>Mögliche Ursachen</h3>${arr(x.causes).map(v => `<button class="overlay-row"><span class="oi">🔎</span><span><strong>${esc(v)}</strong></span><span class="arrow">›</span></button>`).join('')}</section><section class="overlay-section"><h3>Wichtige Fragen</h3><ul>${arr(x.questions).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section warning"><h3>Red Flags</h3><ul>${arr(x.redflags).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section>`;
        else if (mode === 'alg')
            html = `<section class="overlay-section"><h3>Ablauf</h3><ul>${arr(x.steps).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source || '')}</div></section>`;
        else if (mode === 'change')
            html = `<section class="overlay-section"><h3>Bisher</h3><div class="news-text">${esc(x.old || '')}</div></section><section class="overlay-section"><h3>Neu</h3><div class="news-text">${esc(x.new || '')}</div></section><section class="overlay-section"><h3>Quelle</h3><div class="news-text">${esc(x.source || '')}</div></section>`;
        else if (mode === 'guide')
            html = `<section class="overlay-section"><h3>Schritte</h3><ul>${arr(x.steps).map(v => `<li>${esc(v)}</li>`).join('')}</ul></section>`;
        else
            html = `<section class="overlay-section"><div class="news-text">${esc(x.note || x.description || '')}</div></section>`; open(x.title || x.name, html); };
    }
    async function algorithmsPage() {
        const d = await get('algorithms');
        const params = new URLSearchParams(location.search), id = params.get('id'), x = d.find(v => v.id === id);
        if (x) {
            const steps = arr(x.steps), schema = x.category?.startsWith('Schema');
            const timeline = steps.map((st, i) => {
                const acronym = schema ? String(st).match(/^\s*([A-ZÄÖÜ]{1,3})\s*[–—-]\s*/) : null;
                const marker = schema && acronym ? acronym[1] : '•';
                const phrase = acronym ? String(st).slice(acronym[0].length) : String(st);
                const headingMatch = phrase.match(/^([^:：]{2,55}):\s*(.+)$/);
                const title = headingMatch ? headingMatch[1] : phrase.length > 75 ? phrase.slice(0, 72).trim() + '…' : phrase;
                const description = headingMatch ? headingMatch[2] : phrase;
                const details = headingMatch || phrase.length > 92;
                return `<article class="ost-flow-item ost-interactive-step tone-${(i % 6) + 1}" data-flow-index="${i}"><button class="ost-flow-trigger" type="button" data-flow-trigger="${i}" aria-expanded="false"><span class="ost-flow-pin" aria-hidden="true">${marker ? esc(marker) : '<span class="ost-flow-dot"></span>'}</span><span class="ost-flow-trigger-label">${esc(title)}</span><span class="ost-flow-chevron" aria-hidden="true">⌄</span></button><div class="ost-flow-content" data-flow-content="${i}" hidden>${details ? `<p>${esc(description)}</p>` : ''}</div></article>`;
            }).join('');
            const mat = x.materials || { background: [], checklists: [] };
            const safeMedia = url => { try {
                const u = new URL(url, location.href);
                return ['http:', 'https:'].includes(u.protocol) ? u.href : '';
            }
            catch {
                return '';
            } };
            const image = safeMedia(x.imageUrl);
            const materials = [...(mat.background || []).map(m => ({ ...m, kind: 'background' })), ...(mat.checklists || []).map(m => ({ ...m, kind: 'checklist' }))];
            const materialTiles = materials.length ? `<div class="algorithm-material-grid">${materials.map(m => { const u = safeMedia(m.url); return `<a class="algorithm-material-tile" ${u ? `href="${esc(u)}" target="_blank" rel="noopener noreferrer"` : 'role="group"'}><span>${m.kind === 'background' ? '📘' : '✅'}</span><strong>${esc(m.title || 'Material')}</strong><small>${esc(m.note || (m.kind === 'background' ? 'Hintergrundinformation' : 'Checkliste'))}${u ? ' · Öffnen ↗' : ''}</small></a>`; }).join('')}</div>` : '<p class="algorithm-empty">Noch keine Materialien hinterlegt.</p>';
            $('[data-main]').innerHTML = `<section class="detail-page algorithm-detail">${image ? `<figure class="algorithm-figure"><img src="${esc(image)}" alt="${esc(x.title)} – Schema oder Algorithmus" loading="lazy" onerror="this.closest('figure')?.remove()"><figcaption>${esc(x.imageCaption || x.title)}</figcaption></figure>` : ''}<section class="ost-steps-deck ${schema ? 'is-schema' : ''}">${x.id === 'schema-pat' ? `<div class="pat-visual"><div>👶<strong>Erscheinungsbild</strong><span>TICLS</span></div><div>🫁<strong>Atemarbeit</strong><span>Geräusche, Einziehungen</span></div><div>🩸<strong>Hautdurchblutung</strong><span>Farbe, Marmorierung</span></div></div>` : ''}<div class="clinical-learning-toggle" role="group" aria-label="Algorithmusansicht"><button type="button" class="active" data-algo-mode="overview">Übersicht</button><button type="button" data-algo-mode="learn">Lernmodus</button></div><div class="ost-flow-toolbar"><span class="ost-flow-counter" data-flow-counter>${steps.length} Phasen</span><button type="button" class="ost-flow-show-all" data-flow-all>Alle aufklappen</button></div><div class="ost-flow-timeline" data-flow-timeline>${timeline}</div><div class="ost-flow-actions"><button type="button" data-flow-prev disabled>← Zurück</button><button type="button" data-flow-next ${steps.length < 2 ? 'disabled' : ''}>Weiter →</button></div></section><section class="detail-section"><h2>Materialien</h2>${materialTiles}</section></section>`;
            let activeStep = -1, showAll = false;
            const updateFlow = () => {
                const counter = $('[data-flow-counter]');
                if (counter)
                    counter.textContent = showAll ? 'Alle ' + steps.length + ' Phasen' : activeStep < 0 ? steps.length + ' Phasen · antippen zum Öffnen' : 'Phase ' + (activeStep + 1) + ' von ' + steps.length;
                $('[data-flow-all]').textContent = showAll ? 'Alle zuklappen' : 'Alle aufklappen';
                $$('[data-flow-index]').forEach((node, i) => { const expanded = showAll || i === activeStep; node.classList.toggle('is-current', !showAll && i === activeStep); node.querySelector('[data-flow-trigger]').setAttribute('aria-expanded', String(expanded)); node.querySelector('[data-flow-content]').hidden = !expanded; });
                const prev = $('[data-flow-prev]'), next = $('[data-flow-next]');
                prev.disabled = showAll || activeStep <= 0;
                next.disabled = showAll || activeStep >= steps.length - 1;
            };
            $('[data-flow-timeline]')?.addEventListener('click', e => { const b = e.target.closest('[data-flow-trigger]'); if (!b)
                return; const ix = Number(b.dataset.flowTrigger); activeStep = activeStep === ix && !showAll ? -1 : ix; showAll = false; updateFlow(); });
            $$('[data-algo-mode]').forEach(btn => btn.onclick = () => { const learn = btn.dataset.algoMode === 'learn'; $$('[data-algo-mode]').forEach(b => b.classList.toggle('active', b === btn)); $('.algorithm-detail').classList.toggle('clinical-learning', learn); showAll = false; activeStep = learn ? 0 : -1; updateFlow(); });
            $('[data-flow-all]')?.addEventListener('click', () => { showAll = !showAll; updateFlow(); });
            const navigateStep = delta => { activeStep = Math.min(steps.length - 1, Math.max(0, activeStep < 0 ? 0 : activeStep + delta)); showAll = false; updateFlow(); $('[data-flow-index="' + activeStep + '"]')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); };
            $('[data-flow-prev]')?.addEventListener('click', () => navigateStep(-1));
            $('[data-flow-next]')?.addEventListener('click', () => navigateStep(1));
            updateFlow();
            const catalog = await contentCatalog();
            $('.algorithm-detail')?.insertAdjacentHTML('beforeend', relatedHtml(x, catalog));
            return;
        }
        const type = new URLSearchParams(location.search).get('typ') || 'algorithmen';
        const allowed = ['algorithmen', 'merkhilfen', 'checklisten'];
        const selected = allowed.includes(type) ? type : 'algorithmen';
        const tabs = [['algorithmen', 'Algorithmen'], ['merkhilfen', 'Merkhilfen'], ['checklisten', 'Checklisten']];
        const tile = x => `<a class="clinical-list-entry" href="algorithmen.html?id=${encodeURIComponent(x.id)}"><span class="clinical-entry-icon">${ostIcon(x.category?.startsWith('Schema') ? 'notes' : 'checklist')}</span><span>${esc(x.title)}</span><b>›</b></a>`;
        const records = selected === 'merkhilfen' ? d.filter(x => x.category?.startsWith('Schema')) : d.filter(x => !x.category?.startsWith('Schema'));
        let list = records.map(tile).join('');
        if (selected === 'checklisten') {
            const modules = await get('knowledgeModules');
            list = (Array.isArray(modules) ? modules : []).filter(x => x.module === 'material-checklists' && x.status !== 'draft').map(x => `<a class="clinical-list-entry" href="materialien.html?typ=checklists"><span class="clinical-entry-icon">${ostIcon('checklist')}</span><span>${esc(x.title)}</span><b>↗</b></a>`).join('');
        }
        $('[data-main]').innerHTML = `<section class="clinical-combined-intro"><h1>Algorithmen & Materialien</h1></section><nav class="clinical-content-tabs" aria-label="Inhaltstyp">${tabs.map(([id, label]) => `<a href="algorithmen.html?typ=${id}" class="${id === selected ? 'is-active' : ''}" ${id === selected ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav><div class="clinical-content-list">${list || '<p class="empty">Noch keine Inhalte hinterlegt.</p>'}</div>`;
    }
    async function meetingsPage() {
        const d = await get('meetings'), p = new URLSearchParams(location.search), item = d.find(x => x.id === p.get('id'));
        const safe = u => { try {
            const a = new URL(u);
            return ['https:', 'http:'].includes(a.protocol) ? a.href : '';
        }
        catch {
            return '';
        } };
        const asset = f => { const url = safe(f.url), kind = /\.(png|jpe?g|gif|webp|svg)(?:[?#]|$)/i.test(url) ? 'image' : /\.pdf(?:[?#]|$)/i.test(url) ? 'pdf' : /\.(pptx?|key)(?:[?#]|$)/i.test(url) ? 'slide' : 'link'; return `<article class="meeting-resource"><span class="meeting-file-icon">${{ image: '🖼️', pdf: '📄', slide: '📊', link: '🔗' }[kind]}</span><div><strong>${esc(f.title || 'Material')}</strong><p>${esc(f.note || '')}</p>${kind === 'image' && url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="${esc(url)}" alt="${esc(f.title || 'Grafik')}"></a>` : ''}${url ? `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">Material öffnen ↗</a>` : '<small>Kein Link hinterlegt</small>'}</div></article>`; };
        if (item) {
            $('[data-main]').innerHTML = `<article class="meeting-detail" data-ost574-id="${esc(item.id)}"><h1 class="ost583-detail-title">${esc(item.title)}</h1><div class="meeting-meta"><span>${esc(item.date || '')}</span><span>${esc(item.category || 'Dienstbesprechung')}</span>${item.speaker ? `<span>Referent:in: ${esc(item.speaker)}</span>` : ''}</div><div class="meeting-summary">${renderModuleText(item.summary || 'Keine Zusammenfassung hinterlegt.')}</div><h2>Vorträge, Grafiken und Links</h2><div class="meeting-resources">${arr(item.files).map(asset).join('') || '<p>Noch keine Materialien.</p>'}</div></article>`;
            return;
        }
        const unique = [...new Map(d.map(x => [x.id, x])).values()].sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>Dienstbesprechungen</h1></section><div class="meeting-grid ost-tonal-grid">${unique.map(x => `<a class="meeting-tile" data-ost574-id="${esc(x.id)}" href="dienstbesprechungen.html?id=${encodeURIComponent(x.id)}"><span class="meeting-tile-icon">${ostIcon('users')}</span><span class="meeting-date">${esc(x.date || 'Dienstbesprechung')} · ${esc(x.category || 'Allgemein')}</span><h2>${esc(x.title)}</h2><p>${esc(String(x.summary || 'Materialien ansehen').replace(/<[^>]*>/g,' ').slice(0,170))}</p><span class="meeting-tile-cta">Materialsammlung ansehen →</span></a>`).join('') || '<div class="empty">Noch keine Dienstbesprechungen hinterlegt. In der Redaktion können Einträge erstellt werden.</div>'}</div>`;
    }
    async function skills() {
        const d = await get('skills');
        $('[data-main]').innerHTML = `<h1 class="ost-visually-hidden">Skilltraining</h1><section class="ost-skill-accordions">${d.map((g, gi) => `<details class="ost-skill-group"><summary><span class="ost-skill-acc-icon">${ostIcon('training')}</span><span class="ost-skill-acc-title">${esc(g.name)}</span><span class="ost-skill-count">${arr(g.skills).length}</span><span class="ost-skill-toggle" aria-hidden="true">⌄</span></summary><div class="ost-skill-acc-items">${arr(g.skills).map((sk, si) => `<div class="ost576-skill-row"><button class="ost-skill-acc-item" type="button" data-g="${gi}" data-s="${si}"><span>${esc(sk.name)}</span><b aria-hidden="true">›</b></button><button type="button" class="ost576-skill-pencil" data-ost576-skill data-g="${gi}" data-s="${si}" aria-label="${esc(sk.name)} bearbeiten">✎</button></div>`).join('')}</div></details>`).join('')}</section>`;
        ost583SkillAdd(document.querySelector('.ost-skill-accordions'));
        $('[data-main]').onclick = e => {
            const pencil=e.target.closest('[data-ost576-skill]');
            if(pencil){e.preventDefault();e.stopPropagation();ost583EditSkillRow(pencil.closest('.ost576-skill-row'),Number(pencil.dataset.g),Number(pencil.dataset.s));return;}
            const b = e.target.closest('[data-g][data-s]'); if (!b)
            return; const sk = d[+b.dataset.g].skills[+b.dataset.s], sections = sk.sections || [{ title: 'Ablauf', items: arr(sk.items) }]; open(sk.name, sections.map((sec, sidx) => `<section class="overlay-section skill-overlay-section"><div class="skill-overlay-head"><span>${String(sidx + 1).padStart(2, '0')}</span><h3>${esc(sec.title)}</h3></div>${sec.richHtml?ost570CleanHtml(sec.richHtml):arr(sec.items).length?`<ul class="skill-detail-list">${arr(sec.items).map((v, i) => `<li><span class="skill-point">${i + 1}</span><span>${esc(v)}</span></li>`).join('')}</ul>`:'<div class="skill-empty">Noch keine Inhalte</div>'}</section>`).join('')); };
    }
    async function changesPage() {
        const d = await get('changes'), params = new URLSearchParams(location.search), id = params.get('id'), x = d.find(v => v.id === id);
        if (x) {
            $('[data-main]').innerHTML = `<section class="detail-page change-detail" data-ost574-id="${esc(x.id)}"><h1 class="ost583-detail-title">${esc(x.title)}</h1>${x.imageUrl ? `<img class="change-image" src="${esc(x.imageUrl)}" alt="${esc(x.title)}">` : ''}<div class="before-after"><section class="compare-card old"><span>BISHER</span><h3>Alt</h3><div class="ost583-rich-render">${renderModuleText(x.old || '')}</div></section><section class="compare-card new"><span>NEU</span><h3>Neu</h3><div class="ost583-rich-render">${renderModuleText(x.new || '')}</div></section></div><section class="guideline-box"><h3>Quelle / Einordnung</h3><div class="ost583-rich-render">${renderModuleText(x.source || '')}</div></section><section class="guideline-box change-validity"><h3>Gültigkeit</h3><div class="ost583-rich-render">${renderModuleText(x.validity || 'Noch nicht hinterlegt')}</div></section></section>`;
            const catalog = await contentCatalog();
            $('.change-detail')?.insertAdjacentHTML('beforeend', relatedHtml(x, catalog));
            return;
        }
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>Lehrmeinungsänderungen</h1></section><div class="list ost-tonal-list">${d.map(x => `<a class="row-card ost590-change-card" data-ost574-id="${esc(x.id)}" href="lehrmeinung.html?id=${encodeURIComponent(x.id)}"><span class="row-icon ost590-change-icon">${ostIcon('changes')}</span><span class="ost590-change-label"><strong>${esc(x.title)}</strong></span><span class="arrow ost590-change-arrow">›</span></a>`).join('')}</div>`;
    }
    async function guidePage() {
        const d = await get('guide');
        const flat = d.flatMap((x, i) => arr(x.steps).map((st, j) => ({ title: x.title, icon: x.icon || '🖥️', step: st, group: i, index: j }))), nodes = [];
        d.forEach((x, i) => { nodes.push(`<div class="sim-flow-group"><div class="sim-flow-title"><span>${esc(x.icon || '🖥️')}</span><strong>${esc(x.title)}</strong></div>${arr(x.steps).map((st, j) => `<div class="flow-node sim-node"><span>${j + 1}</span><strong>${esc(st)}</strong></div>${j < arr(x.steps).length - 1 ? '<div class="flow-arrow">↓</div>' : ''}`).join('')}</div>${i < d.length - 1 ? '<div class="sim-group-arrow">↓</div>' : ''}`); });
        $('[data-main]').innerHTML = `<section class="page-banner"><h1>Simulations Guide</h1></section><section class="simulation-flow">${nodes.join('')}</section>`;
    }
    function monthKey(d) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`; }
    function dayKey(y, m, d) { return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`; }
    function eventHasEnded(ev) { if (!ev?.date)
        return false; const time = /^([01]\d|2[0-3]):[0-5]\d$/.test(String(ev.time || '').trim()) ? String(ev.time).trim() : '23:59'; const end = new Date(`${ev.date}T${time}:59`); return !Number.isNaN(end.getTime()) && Date.now() > end.getTime(); }
    function attendeeEntries(value) { return Array.isArray(value) ? value.map(a => typeof a === 'string' ? { clientId: a, name: '', registeredAt: '' } : a).filter(a => a && a.clientId) : []; }
    function attendeeJoined(value, clientId) { return attendeeEntries(value).some(a => a.clientId === clientId); }
    function exportAttendancePdf(ev) {
        const people = attendeeEntries(ev.attendees), date = ev.date ? new Date(ev.date + 'T12:00:00').toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : '', time = ev.time || '', place = ev.location || '';
        const cp = { 196: 196, 214: 214, 220: 220, 228: 228, 246: 246, 252: 252, 223: 223, 8364: 128, 8211: 150, 8212: 151, 8216: 145, 8217: 146, 8220: 147, 8221: 148 };
        const pdfStr = value => { let out = ''; for (const ch of String(value ?? '')) {
            const c = ch.codePointAt(0);
            if (ch === '\\' || ch === '(' || ch === ')')
                out += '\\' + ch;
            else if (c >= 32 && c <= 126)
                out += ch;
            else {
                const b = cp[c] ?? 63;
                out += '\\' + b.toString(8).padStart(3, '0');
            }
        } return out; };
        const wrap = (text, max = 74) => { const words = String(text || '').split(/\s+/).filter(Boolean), lines = []; let line = ''; for (const w of words) {
            if (!line) {
                line = w;
                continue;
            }
            if ((line + ' ' + w).length <= max)
                line += ' ' + w;
            else {
                lines.push(line);
                line = w;
            }
        } if (line)
            lines.push(line); return lines.length ? lines : ['']; };
        const pages = [];
        let page = [], y = 790;
        const text = (x, yy, size, value, bold = false) => page.push(`BT /${bold ? 'F2' : 'F1'} ${size} Tf ${x} ${yy} Td (${pdfStr(value)}) Tj ET`);
        const rule = (yy) => page.push(`0.79 0.16 0.20 RG 0.8 w 50 ${yy} m 545 ${yy} l S`);
        const header = (continuation = false) => { text(50, 790, 19, continuation ? 'Teilnehmerliste - Fortsetzung' : 'Teilnehmerliste', true); text(50, 762, 15, ev.title || 'Termin', true); text(50, 742, 10, `Datum: ${date}${time ? '  |  Uhrzeit: ' + time : ''}`); text(50, 727, 10, `Ort: ${place || '-'}`); text(50, 712, 10, `Teilnehmende: ${people.length}${ev.capacity ? ' / ' + ev.capacity : ''}`); rule(698); y = 675; };
        const next = () => { if (page.length)
            pages.push(page.join('\n')); page = []; header(pages.length > 0); };
        header(false);
        if (!people.length) {
            text(50, y, 11, 'Keine Teilnehmenden eingetragen.');
        }
        people.forEach((person, i) => { const reg = person.registeredAt ? new Date(person.registeredAt).toLocaleString('de-DE') : ''; const name = person.name || 'Ohne Namensangabe'; const lines = wrap(`${i + 1}. ${name}`, 70); const needed = lines.length * 15 + (reg ? 13 : 0) + 7; if (y - needed < 55)
            next(); lines.forEach((ln, li) => { text(50 + (li ? 18 : 0), y, 11, ln, li === 0); y -= 15; }); if (reg) {
            text(68, y, 9, `Anmeldung: ${reg}`);
            y -= 13;
        } y -= 7; });
        if (page.length)
            pages.push(page.join('\n'));
        const objects = { 1: '<< /Type /Catalog /Pages 2 0 R >>', 3: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>', 4: '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>' };
        const kids = [];
        pages.forEach((content, i) => { const pid = 5 + i * 2, cid = pid + 1; kids.push(`${pid} 0 R`); objects[pid] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${cid} 0 R >>`; objects[cid] = `<< /Length ${content.length} >>\nstream\n${content}\nendstream`; });
        objects[2] = `<< /Type /Pages /Kids [${kids.join(' ')}] /Count ${pages.length} >>`;
        const max = Math.max(...Object.keys(objects).map(Number));
        let out = '%PDF-1.4\n', offsets = [0];
        for (let i = 1; i <= max; i++) {
            offsets[i] = out.length;
            out += `${i} 0 obj\n${objects[i]}\nendobj\n`;
        }
        const xref = out.length;
        out += `xref\n0 ${max + 1}\n0000000000 65535 f \n`;
        for (let i = 1; i <= max; i++)
            out += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
        out += `trailer\n<< /Size ${max + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
        const blob = new Blob([out], { type: 'application/pdf' }), url = URL.createObjectURL(blob), a = document.createElement('a');
        a.href = url;
        a.download = `Teilnehmerliste-${String(ev.date || 'Termin')}-${String(ev.title || '').replace(/[^a-zA-Z0-9äöüÄÖÜß]+/g, '-').replace(/^-|-$/g, '') || 'Termin'}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1500);
    }
    function askParticipantName(defaultName = '') {
        return new Promise(resolve => {
            const modal = document.createElement('div');
            modal.className = 'rsvp-modal show';
            modal.innerHTML = `<div class="rsvp-shade" data-rsvp-close></div><section class="rsvp-dialog" role="dialog" aria-modal="true" aria-labelledby="rsvp-title"><button class="rsvp-x" data-rsvp-close aria-label="Schließen">✕</button><div class="rsvp-symbol">👤</div><h2 id="rsvp-title">Teilnahme anmelden</h2><p>Bitte Vor- und Nachnamen eingeben. Der Name wird für die Teilnehmerliste dieses Termins gespeichert.</p><label><span>Name</span><input data-rsvp-name autocomplete="name" maxlength="100" placeholder="Vor- und Nachname" value="${esc(defaultName)}"></label><div class="rsvp-actions"><button class="btn" data-rsvp-close>Abbrechen</button><button class="btn primary" data-rsvp-submit>Anmelden</button></div></section>`;
            document.body.appendChild(modal);
            const input = $('[data-rsvp-name]', modal);
            const finish = v => { modal.remove(); resolve(v); };
            $$('[data-rsvp-close]', modal).forEach(b => b.onclick = () => finish(null));
            $('[data-rsvp-submit]', modal).onclick = () => { const name = input.value.trim(); if (!name) {
                input.classList.add('invalid');
                input.focus();
                return;
            } localStorage.setItem('ost1020-participant-name', name); finish(name); };
            input.oninput = () => input.classList.remove('invalid');
            input.onkeydown = e => { if (e.key === 'Enter')
                $('[data-rsvp-submit]', modal).click(); if (e.key === 'Escape')
                finish(null); };
            setTimeout(() => { input.focus(); input.select(); }, 20);
        });
    }
    async function toggleRsvp(eventId, clientId, name = '') { if (!API)
        return null; try {
        const r = await fetch(`${API}/events/rsvp/${encodeURIComponent(eventId)}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientId, name }) });
        const body = await r.json();
        if (!r.ok) {
            alert(body.error || 'Serverfehler');
            return null;
        }
        return body;
    }
    catch (e) {
        alert('Verbindung zum Server fehlgeschlagen');
        return null;
    } }
    // ------------------------------------------------------------------------
    // Termine
    // ------------------------------------------------------------------------
    async function eventsPage() {
        let d = await get('events');
        let cursor = new Date();
        cursor.setDate(1);
        let selected = '';
        const clientId = localStorage.getItem('ost1020-client-id') || (() => { const id = 'c-' + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem('ost1020-client-id', id); return id; })();
        $('[data-main]').innerHTML = `<section class="page-banner ost585-event-head"><h1>Termine</h1><button type="button" class="btn ost585-attendance" data-attendance-open>Teilnehmerlisten / PDF-Export</button></section><section class="calendar" data-cal></section><section class="section"><div class="section-head ost586-participants-head"><h2 data-list-title>Kommende Termine</h2><button type="button" class="btn ost586-participants" data-attendance-open>👥 Teilnehmerlisten & Export</button></div><div class="event-list" data-events></div></section>`;
        // Teilnehmerverwaltung unabhängig von der alten Redaktion. PDF-Erzeugung bleibt unverändert.
        async function openAttendanceWindow(){
            const pin=sessionStorage.getItem('ost1020-editor-pin')||'';
            if(!ost576IsEditing() || !await verifyEditorPin(pin)){
                alert('Teilnehmerlisten sind PIN-geschützt. Bitte zuerst auf der Startseite die Bearbeitung freigeben.');
                return;
            }

            document.querySelector('[data-ost587-attendance]')?.remove();
            const overlay=document.createElement('div');overlay.className='ost587-attendance-overlay';overlay.dataset.ost587Attendance='';
            overlay.innerHTML=`<section class="ost587-attendance-dialog" role="dialog" aria-modal="true" aria-label="Teilnehmerlisten und PDF-Export"><header><h2>Teilnehmerlisten & Export</h2><button type="button" class="btn" data-attendance-close aria-label="Schließen">✕</button></header><div data-attendance-content></div></section>`;
            document.body.appendChild(overlay);
            const close=()=>overlay.remove();
            overlay.querySelector('[data-attendance-close]').onclick=close;
            overlay.addEventListener('click',e=>{if(e.target===overlay)close();});
            const escape=e=>{if(e.key==='Escape'){close();document.removeEventListener('keydown',escape)}};
            document.addEventListener('keydown',escape);
            const target=overlay.querySelector('[data-attendance-content]');
            const today=new Date(), todayLocal=dayKey(today.getFullYear(),today.getMonth(),today.getDate());
            const groups=[['Aktuelle Termine','Heute und kommende Termine',d.filter(x=>(x.date||'')>=todayLocal).sort((a,b)=>(a.date+a.time).localeCompare(b.date+b.time))],['Vergangene Termine','Anwesenheitsarchiv',d.filter(x=>(x.date||'')<todayLocal).sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time))]];
            const eventCard=ev=>{const people=attendeeEntries(ev.attendees),date=ev.date?new Date(ev.date+'T12:00:00').toLocaleDateString('de-DE'):'';return `<details class="attendance-event"><summary class="attendance-event-head"><div><span class="cat-pill">${esc(ev.category||'Termin')}</span><h3>${esc(ev.title)}</h3><p>${esc(date)}${ev.time?' · '+esc(ev.time):''}${ev.location?' · '+esc(ev.location):''}</p></div><strong>${people.length}/${Number(ev.capacity)||10}</strong></summary><div class="attendance-event-body">${people.length?`<div class="attendance-table">${people.map((p,i)=>`<div class="attendance-row"><span class="attendance-no">${i+1}</span><span><strong>${esc(p.name||'Ohne Namensangabe')}</strong><small>${p.registeredAt?'angemeldet '+new Date(p.registeredAt).toLocaleString('de-DE'):''}</small></span></div>`).join('')}</div>`:'<div class="empty compact">Noch keine Anmeldungen.</div>'}<div class="attendance-tools"><button type="button" class="btn" data-attendance-pdf="${esc(ev.id)}">PDF exportieren</button>${people.length?`<button type="button" class="btn" data-attendance-clear="${esc(ev.id)}">Liste leeren</button>`:''}</div></div></details>`;};
            const redraw=()=>{target.innerHTML=groups.map(([title,desc,items])=>`<section class="attendance-group"><div class="attendance-group-head"><div><h3>${title}</h3><p>${desc}</p></div><span>${items.length}</span></div><div class="attendance-editor-list">${items.map(eventCard).join('')||'<div class="empty">Keine Termine vorhanden.</div>'}</div></section>`).join('');};
            redraw();
            target.onclick=async e=>{
                const pdf=e.target.closest('[data-attendance-pdf]');if(pdf){const ev=d.find(x=>String(x.id)===pdf.dataset.attendancePdf);if(ev)exportAttendancePdf(ev);return;}
                const clear=e.target.closest('[data-attendance-clear]');if(clear){const ev=d.find(x=>String(x.id)===clear.dataset.attendanceClear);if(!ev)return;
                    if(!ost576IsEditing()){alert('Zum Leeren bitte zuerst auf der Startseite die Bearbeitung freigeben.');return;}
                    if(!confirm(`Teilnehmerliste für „${ev.title}“ wirklich leeren?`))return;
                    const latest=await get('events'),index=latest.findIndex(x=>String(x.id)===String(ev.id));if(index<0)return;
                    latest[index]={...latest[index],attendees:[]};if(await save('events',latest)){ev.attendees=[];groups.forEach(g=>{g[2]=g[2].map(x=>String(x.id)===String(ev.id)?ev:x)});redraw();drawEvents();}else alert('Speichern fehlgeschlagen.');
                }
            };
        }
        $('[data-main]').addEventListener('click',e=>{if(e.target.closest('[data-attendance-open]'))openAttendanceWindow();});
        function drawCal() {
            const y = cursor.getFullYear(), m = cursor.getMonth(), first = new Date(y, m, 1), offset = (first.getDay() + 6) % 7, daysInMonth = new Date(y, m + 1, 0).getDate();
            const today = new Date(), todayKey = dayKey(today.getFullYear(), today.getMonth(), today.getDate());
            const cells = Array.from({ length: Math.ceil((offset + daysInMonth) / 7) * 7 }, (_, i) => {
                const date = new Date(y, m, i - offset + 1), key = dayKey(date.getFullYear(), date.getMonth(), date.getDate()), hits = d.filter(e => e.date === key), out = date.getMonth() !== m;
                return `<button class="cal-day ${out ? 'muted' : ''} ${key === todayKey ? 'today' : ''} ${hits.length ? 'has' : ''} ${selected === key ? 'selected' : ''}" data-date="${key}" aria-label="${date.toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })}${hits.length ? ' – ' + hits.length + ' Termin(e)' : ''}" title="${esc(hits.map(e => e.title).join(' · '))}"><span class="cal-number">${date.getDate()}</span>${hits.length ? `<span class="cal-event-pips">${hits.slice(0, 3).map(() => '<i></i>').join('')}</span>` : ''}</button>`;
            });
            $('[data-cal]').innerHTML = `<div class="cal-head"><button type="button" class="cal-nav" data-prev aria-label="Vorheriger Monat">‹</button><strong>${cursor.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</strong><button type="button" class="cal-nav" data-next aria-label="Nächster Monat">›</button></div><div class="cal-week">${['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(v => `<span>${v}</span>`).join('')}</div><div class="cal-grid">${cells.join('')}</div><p class="cal-help">Tage mit Punkt haben Termine · Tag auswählen, um Termine anzuzeigen.</p>`;
        }
        function drawEvents() {
            const now = new Date();
            const today = dayKey(now.getFullYear(), now.getMonth(), now.getDate());
            let list = d.filter(e => selected ? e.date === selected : !eventHasEnded(e)).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
            const archive = !selected && !list.length && d.some(e => eventHasEnded(e));
            if (archive)
                list = d.filter(eventHasEnded).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time)).slice(0, 8);
            $('[data-list-title]').textContent = selected ? new Date(selected + 'T12:00:00').toLocaleDateString('de-DE', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }) : archive ? 'Vergangene Termine' : 'Kommende Termine';
            $('[data-events]').innerHTML = list.map(e => { const attendees = attendeeEntries(e.attendees), cap = Number(e.capacity) || 10, joined = attendeeJoined(e.attendees, clientId), waitlisted = (Array.isArray(e.waitlist) ? e.waitlist : []).some(a => a.clientId === clientId), count = attendees.length, pct = Math.min(100, Math.round(count / cap * 100)), ended = eventHasEnded(e); return `<article class="event-card" data-ost574-id="${esc(e.id)}"><span class="event-icon">${e.category === 'Skilltraining' ? '🫁' : e.category === 'Simulationstraining' ? '❤️' : '📅'}</span><span><span class="cat-pill">${esc(e.category || 'Termin')}</span><h3>${esc(e.title)}</h3><div class="event-meta">🕒 ${esc(e.time)} · 📍 ${esc(e.location)}</div></span><span class="event-right"><div class="participants">👥 ${count}/${cap}</div><div class="progress"><span style="width:${pct}%"></span></div><button class="join-btn ${joined ? 'joined' : ''}" data-rsvp="${esc(e.id)}" ${ended ? 'disabled aria-disabled="true"' : ''}>${ended ? 'Termin vorbei' : joined ? 'Teilnahme zurückziehen' : waitlisted ? 'Warteliste verlassen' : count >= cap ? 'Auf Warteliste' : 'Teilnehmen'}</button></span></article>`; }).join('') || '<div class="empty">Keine Termine vorhanden. Weitere Termine können in der Redaktion angelegt werden.</div>';
        }
        $('[data-main]').onclick = async (e) => { if (e.target.closest('[data-prev]')) {
            cursor.setMonth(cursor.getMonth() - 1);
            selected = '';
            drawCal();
            drawEvents();
            return;
        } if (e.target.closest('[data-next]')) {
            cursor.setMonth(cursor.getMonth() + 1);
            selected = '';
            drawCal();
            drawEvents();
            return;
        } const day = e.target.closest('[data-date]'); if (day) {
            selected = day.dataset.date;
            const sd = new Date(selected + 'T12:00:00');
            cursor = new Date(sd.getFullYear(), sd.getMonth(), 1);
            drawCal();
            drawEvents();
            return;
        } const r = e.target.closest('[data-rsvp]'); if (r) {
            const x = d.find(v => v.id === r.dataset.rsvp);
            if (!x || eventHasEnded(x))
                return;
            const joined = attendeeJoined(x.attendees, clientId), waitlisted = (Array.isArray(x.waitlist) ? x.waitlist : []).some(a => a.clientId === clientId);
            let name = '';
            if (joined || waitlisted) {
                if (!confirm(waitlisted ? 'Wartelisteneintrag wirklich entfernen?' : 'Teilnahme wirklich zurückziehen?'))
                    return;
            }
            else {
                name = await askParticipantName(localStorage.getItem('ost1020-participant-name') || '');
                if (name === null)
                    return;
            }
            r.disabled = true;
            const result = await toggleRsvp(r.dataset.rsvp, clientId, name);
            if (result && result.events)
                d = result.events;
            else if (API) {
                alert('Anmeldung konnte nicht synchronisiert werden. Bitte erneut versuchen.');
            }
            else {
                alert('Für verbindliche Anmeldungen muss der Worker verbunden sein.');
            }
            drawCal();
            drawEvents();
        } };
        drawCal();
        drawEvents();
    }
    async function uploadMedia(file) {
        if (!API)
            throw new Error('Worker nicht konfiguriert');
        const pin = sessionStorage.getItem('ost1020-editor-pin') || '';
        const data = await new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(String(r.result).split(',')[1] || ''); r.onerror = () => reject(r.error); r.readAsDataURL(file); });
        const res = await fetch(`${API}/media`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Admin-Pin': pin }, body: JSON.stringify({ name: file.name, type: file.type, data }) });
        if (!res.ok)
            throw new Error((await res.json().catch(() => ({}))).error || `HTTP ${res.status}`);
        const j = await res.json();
        return j.url;
    }
    async function verifyEditorPin(pin) {
        if (API) {
            try {
                const r = await fetch(`${API}/auth`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pin }) });
                return r.ok;
            }
            catch (e) {
                return false;
            }
        }
        return pin === '1020';
    }
    function ostRichEditor(key, value, options = {}) {
        const actions = [['bold', 'B', 'Fett'], ['italic', 'I', 'Kursiv'], ['heading', 'H', 'Überschrift'], ['list', '≡', 'Aufzählung'], ['link', '↗', 'Link'], ['preview', '◉', 'Vorschau']];
        return `<div class="ost-news-editor"><div class="ost-rich-toolbar ost-content-toolbar" role="toolbar" aria-label="Text formatieren">${actions.map(([action, icon, label]) => `<button type="button" data-editor-rich="${action}" title="${label}" aria-label="${label}">${icon}</button>`).join('')}${options.upload ? '<label class="ost-editor-upload">Bild<input type="file" accept="image/png,image/jpeg,image/webp" data-editor-inline-upload></label>' : ''}</div><textarea class="ost-news-textarea" data-k="${key}" rows="8" placeholder="Text eingeben …">${esc(value || '')}</textarea><div class="ost-editor-preview" data-editor-preview hidden></div><small>**Fett**, *Kursiv*, ## Überschrift, - Liste, [Text](https://...) – Speichern oben.</small></div>`;
    }
    async function cf551SymptomEditor(box, d) {
        let organ = 'herz', selected = '';
        const belongs = x => CF_TOPICS.find(t => t.groups.includes(x.group))?.id || 'other';
        const matching = () => d.map((x, i) => ({ x, i })).filter(o => belongs(o.x) === organ).sort((a, b) => String(a.x.title || '').localeCompare(String(b.x.title || ''), 'de'));
        const current = () => matching().find(v => String(v.i) === String(selected));
        const store = () => {
            const item = current();
            if (!item)
                return;
            const e = box.querySelector('.cf551-symptom-form');
            if (!e)
                return;
            item.x.title = e.querySelector('[data-symptom-field="title"]')?.value || '';
            item.x.theory = e.querySelector('[data-symptom-field="theory"]')?.value || '';
            item.x.questions = (e.querySelector('[data-symptom-field="questions"]')?.value || '').split(/\n/).map(x => x.trim()).filter(Boolean);
            item.x.redflags = (e.querySelector('[data-symptom-field="redflags"]')?.value || '').split(/\n/).map(x => x.trim()).filter(Boolean);
        };
        const render = () => {
            const all = matching();
            if (!all.some(x => String(x.i) === String(selected)))
                selected = all[0] ? String(all[0].i) : '';
            const cur = current();
            box.innerHTML = `<section class="cf551-disease-workspace"><div class="cf551-editor-heading"><h2>Symptome</h2><div class="cf551-editor-actions"><button type="button" class="btn" data-symptom-new>+ Symptom</button><button type="button" class="btn primary" data-symptom-save>Speichern</button></div></div><div class="cf551-editor-pickers"><label>Bereich auswählen<select data-symptom-organ>${CF_TOPICS.map(t => `<option value="${t.id}" ${organ === t.id ? 'selected' : ''}>${esc(t.label)}</option>`).join('')}<option value="other" ${organ === 'other' ? 'selected' : ''}>Weitere Fachbereiche</option></select></label><label>Symptom auswählen<select data-symptom-pick>${all.length ? all.map(x => `<option value="${x.i}" ${String(x.i) === String(selected) ? 'selected' : ''}>${esc(x.x.title || 'Neues Symptom')}</option>`).join('') : '<option value="">Keine Einträge</option>'}</select></label></div><div role="status" data-symptom-note></div>${cur ? `<div class="cf551-disease-form cf551-symptom-form"><label class="cf551-editor-field"><span>Symptom</span><input data-symptom-field="title" value="${esc(cur.x.title || '')}"></label><label class="cf551-editor-field"><span>Einordnung / Hintergrundwissen</span><textarea rows="5" data-symptom-field="theory">${esc(cur.x.theory || '')}</textarea></label><label class="cf551-editor-field"><span>Wichtige Fragen (eine pro Zeile)</span><textarea rows="5" data-symptom-field="questions">${esc(arr(cur.x.questions).join('\n'))}</textarea></label><label class="cf551-editor-field"><span>Warnzeichen (eines pro Zeile)</span><textarea rows="5" data-symptom-field="redflags">${esc(arr(cur.x.redflags).join('\n'))}</textarea></label><button type="button" class="btn danger" data-symptom-delete>Symptom löschen (einschließlich verknüpfter Krankheitsbilder)</button></div>` : '<div class="cf551-empty-editor">Für diese Organgruppe sind noch keine Symptome vorhanden.</div>'}</section>`;
        };
        render();
        box.oninput = e => { if (e.target.closest('.cf551-symptom-form'))
            store(); };
        box.onchange = e => { if (e.target.matches('[data-symptom-organ]')) {
            store();
            organ = e.target.value;
            selected = '';
            render();
        }
        else if (e.target.matches('[data-symptom-pick]')) {
            store();
            selected = e.target.value;
            render();
        } };
        box.onclick = async (e) => {
            if (e.target.closest('[data-symptom-save]')) {
                store();
                const ok = await save('differential', d);
                const note = box.querySelector('[data-symptom-note]');
                if (note)
                    note.textContent = ok ? 'Gespeichert und synchronisiert.' : 'Lokal gespeichert – Worker-Synchronisierung prüfen.';
                return;
            }
            if (e.target.closest('[data-symptom-new]')) {
                store();
                const t = CF_TOPICS.find(t => t.id === organ);
                d.push({ id: 'symptom-' + Date.now().toString(36), title: 'Neues Symptom', group: t?.groups[0] || 'Weitere', icon: '', theory: '', questions: [], redflags: [], causes: [] });
                selected = String(d.length - 1);
                render();
                return;
            }
            if (e.target.closest('[data-symptom-delete]')) {
                const o = current();
                if (!o || !confirm('Symptom und verknüpfte Krankheitsbilder wirklich löschen?'))
                    return;
                d.splice(o.i, 1);
                selected = '';
                render();
            }
        };
    }
    async function cf551DiseaseEditor(box, d) {
        let organ = editorKnowledgeOrgan, selected = '';
        editorKnowledgeOrganSetter = id => { organ = id; selected = ''; render(); };
        const groupFor = x => CF_TOPICS.find(t => t.groups.includes(x.group))?.id || 'other';
        const options = () => {
            const values = [];
            d.forEach((sym, si) => arr(sym.causes).forEach((c, ci) => { const v = typeof c === 'string' ? { name: c } : c; if (groupFor(sym) === organ)
                values.push({ si, ci, c: v, sym, key: si + ':' + ci }); }));
            return values.sort((a, b) => ostEditorialOrder(a.c, b.c) || String(a.c.name || '').localeCompare(String(b.c.name || ''), 'de'));
        };
        const field = (label, k, v, large = false) => `<label class="cf551-editor-field"><span>${label}</span>${large ? `<textarea data-disease-field="${k}" rows="${k === 'info' ? 5 : 3}">${esc(v || '')}</textarea>` : `<input data-disease-field="${k}" value="${esc(v || '')}">`}</label>`;
        function current() { return options().find(x => x.key === selected) || null; }
        function store() { const root = box.querySelector('.cf551-disease-workspace'); const item = current(); if (!root || !item)
            return; const parent = d[item.si]; if (!parent)
            return; const old = typeof parent.causes[item.ci] === 'string' ? { name: parent.causes[item.ci] } : parent.causes[item.ci]; root.querySelectorAll('[data-disease-field]').forEach(el => old[el.dataset.diseaseField] = el.value); parent.causes[item.ci] = old; const symptom = root.querySelector('[data-symptom-title]'); if (symptom)
            parent.title = symptom.value; }
        // Import von fachlich geprüften RS/NFS-Krankheitsbildern. Keine automatische Veröffentlichung.
        let importRows = [];
        const importNorm = value => normalizedSearch(String(value || '')).replace(/[^a-z0-9]/g, '');
        const importPreview = () => {
            const preview = box.querySelector('[data-bulk-preview]');
            if (!preview) return;
            if (!importRows.length) { preview.innerHTML = '<p>Noch keine gültigen Einträge geladen.</p>'; return; }
            const existing = new Set(d.flatMap(sym => arr(sym.causes).map(c => importNorm(typeof c === 'string' ? c : c.name))));
            preview.innerHTML = `<p>${importRows.length} Einträge erkannt. Vor dem Import fachlich prüfen; bestehende Titel werden übersprungen.</p><div class="ost565-import-rows">${importRows.map((row, i) => {
                const topic = CF_TOPICS.find(t => importNorm(t.label) === importNorm(row.organgruppe) || importNorm(t.id) === importNorm(row.organgruppe));
                const duplicate = existing.has(importNorm(row.titel)) || importRows.findIndex(r => importNorm(r.titel) === importNorm(row.titel)) !== i;
                const blocked = !topic || duplicate;
                const reason = !topic ? 'Organgruppe unbekannt' : duplicate ? 'Titel bereits vorhanden / doppelt' : 'Noch nicht fachlich freigegeben';
                return `<label class="ost565-import-row"><input type="checkbox" data-bulk-row="${i}" ${blocked ? 'disabled' : 'checked'}><span><strong>${esc(row.titel)}</strong><small>${esc(row.organgruppe)} · ${esc(reason)}</small></span></label>`;
            }).join('')}</div><label class="ost565-import-confirm"><input type="checkbox" data-bulk-confirm> Ich bestätige, dass die ausgewählten Fachtexte anhand der gültigen Lehrmeinung und lokalen SOPs geprüft und zur Veröffentlichung freigegeben wurden.</label><button type="button" class="btn primary" data-bulk-apply>Ausgewählte Krankheitsbilder veröffentlichen</button><p data-bulk-note role="status"></p>`;
        };
        const buildImportedCause = row => ({
            name: String(row.titel).trim(),
            symptoms: String(row.symptome || row.typische_symptome || ''),
            info: [row.grundlagen, row.hinweis, row.rs_schwerpunkt && '## RS – Schwerpunkt\n' + row.rs_schwerpunkt, row.nfs_vertiefung && '## NFS – Vertiefung\n' + row.nfs_vertiefung].filter(Boolean).join('\n\n'),
            physiology: String(row.physiologie || row.pathophysiologie || ''), findings: String(row.befunde || ''), medications: String(row.medikamente || ''), cave: String(row.warnzeichen || ''),
            sourceUrl: String(row.quellen || '').match(/https:\/\/[^\s|]+/)?.[0] || '',
            sourceLabel: 'Fachquellen (Prüfung durch Redaktion)',
            importSource: String(row.quellen || ''),
            importReviewedAt: new Date().toISOString().slice(0, 10)
        });
        function render() {
            const all = options();
            if (!all.some(x => x.key === selected))
                selected = all[0]?.key || '';
            const item = current();
            box.innerHTML = `<section class="cf551-disease-workspace ost567-disease-workspace"><div class="cf551-editor-heading"><div><span class="ost567-eyebrow">REDAKTION / WISSEN</span><h2>Krankheitsbilder</h2><p>Fachwissen strukturiert pflegen, prüfen und veröffentlichen.</p></div><div class="cf551-editor-actions"><button type="button" class="btn" data-disease-new>+ Krankheitsbild</button><button type="button" class="btn primary" data-disease-save>Speichern</button></div></div><details class="ost565-import ost567-import"><summary>Fachinformationen aus JSON importieren</summary><p>JSON zuerst prüfen, Einträge auswählen und nur nach Fachfreigabe veröffentlichen. Bestehende Einträge bleiben erhalten.</p><label>JSON-Datei auswählen<input type="file" accept=".json,application/json" data-bulk-file></label><div data-bulk-preview><p>Bitte JSON-Datei auswählen.</p></div></details><div class="ost567-edit-shell"><div class="cf551-editor-pickers"><label>3. Krankheitsbild auswählen<select data-disease-pick><option value="">– Bitte auswählen –</option>${all.map(x => `<option value="${x.key}" ${x.key === selected ? 'selected' : ''}>${esc(x.c.name || 'Unbenannt')}</option>`).join('')}</select></label></div><div data-disease-note role="status"></div>${item ? `<div class="cf551-disease-form"><div class="cf551-disease-meta">${field('Krankheitsbild', 'name', item.c.name)}<label class="cf551-editor-field"><span>Leitsymptom (Zuordnung)</span><input data-symptom-title value="${esc(item.sym.title || '')}"></label></div>${field('Typische Symptome', 'symptoms', item.c.symptoms, true)}${field('Erkrankung & Einordnung', 'info', item.c.info, true)}${field('Anatomie / Physiologie', 'physiology', item.c.physiology, true)}${field('Befunde', 'findings', item.c.findings, true)}${field('Relevante Medikamente', 'medications', item.c.medications, true)}${field('Warnzeichen / CAVE', 'cave', item.c.cave, true)}<div class="cf551-disease-meta">${field('Fachquelle URL', 'sourceUrl', item.c.sourceUrl)}${field('Quellenbezeichnung', 'sourceLabel', item.c.sourceLabel)}</div><button class="btn danger" type="button" data-disease-delete>Krankheitsbild löschen</button></div>` : '<div class="cf551-empty-editor">Für diesen Bereich sind noch keine Krankheitsbilder vorhanden. Mit „+ Krankheitsbild“ legst du eines an.</div>'}</div>${all.length > 1 ? `<section class="ost-order-editor cf562-order-editor"><div class="ost-order-title"><strong>Reihenfolge der Krankheitsbilder</strong><small>Mit ↑ und ↓ verschieben. Speichert direkt und wird öffentlich übernommen.</small></div><div class="ost-order-group">${all.map((x,i) => `<div class="ost-order-entry"><span>${esc(x.c.name || 'Ohne Titel')}</span><div class="ost-order-buttons"><button type="button" data-disease-order="up" data-disease-key="${esc(x.key)}" ${!i ? 'disabled' : ''} aria-label="${esc(x.c.name)} nach oben">↑</button><button type="button" data-disease-order="down" data-disease-key="${esc(x.key)}" ${i===all.length-1 ? 'disabled' : ''} aria-label="${esc(x.c.name)} nach unten">↓</button></div></div>`).join('')}</div></section>` : ''}</section>`;
        }
        render();
        box.oninput = e => { if (e.target.matches('[data-disease-field], [data-symptom-title]'))
            store(); };
        box.onchange = async e => {
            if (e.target.matches('[data-bulk-file]')) {
                const file = e.target.files?.[0];
                if (!file) return;
                try {
                    if (file.size > 2_000_000) throw new Error('Datei zu groß (maximal 2 MB).');
                    const parsed = JSON.parse(await file.text());
                    if (!Array.isArray(parsed)) throw new Error('Erwartet wird eine JSON-Liste.');
                    if (parsed.length > 150) throw new Error('Maximal 150 Einträge pro Import.');
                    if (parsed.some(row => !row || typeof row !== 'object' || typeof row.titel !== 'string' || !row.titel.trim() || typeof row.organgruppe !== 'string')) throw new Error('Ungültige Einträge: titel und organgruppe sind Pflichtfelder.');
                    importRows = parsed;
                    importPreview();
                } catch (err) {
                    importRows = [];
                    box.querySelector('[data-bulk-preview]').textContent = 'Import nicht möglich: ' + err.message;
                }
                return;
            }
            if (e.target.matches('[data-disease-organ]')) {
            store();
            organ = e.target.value;
            selected = '';
            render();
        }
        else if (e.target.matches('[data-disease-pick]')) {
            store();
            selected = e.target.value;
            render();
        } };
        box.onclick = async (e) => {
            if (e.target.closest('[data-bulk-apply]')) {
                const note = box.querySelector('[data-bulk-note]');
                const picked = [...box.querySelectorAll('[data-bulk-row]:checked')].map(input => importRows[Number(input.dataset.bulkRow)]);
                if (!picked.length) { note.textContent = 'Bitte zunächst Einträge auswählen.'; return; }
                if (!box.querySelector('[data-bulk-confirm]')?.checked) { note.textContent = 'Fachfreigabe muss ausdrücklich bestätigt werden.'; return; }
                const existing = new Set(d.flatMap(sym => arr(sym.causes).map(c => importNorm(typeof c === 'string' ? c : c.name))));
                const importedKeys = new Set(existing); const allowed = picked.filter(row => CF_TOPICS.some(t => importNorm(t.label) === importNorm(row.organgruppe) || importNorm(t.id) === importNorm(row.organgruppe)) && !importedKeys.has(importNorm(row.titel)) && !!importedKeys.add(importNorm(row.titel)));
                if (!allowed.length) { note.textContent = 'Keine neuen Einträge vorhanden.'; return; }
                if (!confirm(`${allowed.length} fachlich freigegebene Krankheitsbilder jetzt veröffentlichen? Dieser Vorgang schreibt in den bestehenden Datenbestand.`)) return;
                // Ausschließlich ergänzen; niemals bestehende Krankheiten oder Symptome überschreiben.
                const updated = JSON.parse(JSON.stringify(d));
                for (const row of allowed) {
                    const topic = CF_TOPICS.find(t => importNorm(t.label) === importNorm(row.organgruppe) || importNorm(t.id) === importNorm(row.organgruppe));
                    let symptom = updated.find(x => x.group === topic.groups[0] && x.title === 'Weitere Krankheitsbilder');
                    if (!symptom) {
                        symptom = { id: 'import-symptom-' + topic.id + '-' + Date.now(), group: topic.groups[0], title: 'Weitere Krankheitsbilder', questions: [], redflags: [], causes: [] };
                        updated.push(symptom);
                    }
                    if (!Array.isArray(symptom.causes)) symptom.causes = [];
                    symptom.causes.push(buildImportedCause(row));
                }
                const ok = await save('differential', updated);
                if (!ok) { note.textContent = 'Cloudflare-Speicherung nicht bestätigt. Bitte Verbindung prüfen und keine weiteren Importe durchführen.'; return; }
                d.splice(0, d.length, ...updated);
                importRows = [];
                selected = '';
                render();
                const msg = box.querySelector('[data-disease-note]');
                if (msg) msg.textContent = `${allowed.length} Krankheitsbilder übernommen und gespeichert.`;
                return;
            }
            if (e.target.closest('[data-disease-order]')) {
                store();
                const btn = e.target.closest('[data-disease-order]');
                const rows = options(), position = rows.findIndex(x => x.key === btn.dataset.diseaseKey);
                const neighbor = rows[position + (btn.dataset.diseaseOrder === 'up' ? -1 : 1)];
                if (position < 0 || !neighbor) return;
                const ordered = rows.slice(), j = ordered.indexOf(neighbor);
                [ordered[position], ordered[j]] = [ordered[j], ordered[position]];
                ordered.forEach((x, i) => {
                    // Strings zu editierbaren Objekten wandeln; Zuordnung zum Symptom bleibt bestehen.
                    const original = d[x.si].causes[x.ci];
                    d[x.si].causes[x.ci] = { ...(typeof original === 'string' ? { name: original } : original), order: i + 1 };
                });
                const ok = await save('differential', d);
                render();
                const note = box.querySelector('[data-disease-note]');
                if (note) note.textContent = ok ? 'Reihenfolge gespeichert und synchronisiert.' : 'Reihenfolge lokal gespeichert – Worker prüfen.';
                return;
            }
            if (e.target.closest('[data-disease-save]')) {
                store();
                const note = box.querySelector('[data-disease-note]');
                const ok = await save('differential', d);
                if (note)
                    note.textContent = ok ? 'Gespeichert und synchronisiert.' : 'Lokal gespeichert – Worker-Synchronisierung bitte prüfen.';
                return;
            }
            if (e.target.closest('[data-disease-new]')) {
                store();
                let sym = d.find(x => groupFor(x) === organ);
                if (!sym) {
                    const t = CF_TOPICS.find(t => t.id === organ);
                    sym = { id: 'symptom-' + Date.now(), group: t?.groups[0] || 'Weitere', title: 'Neues Leitsymptom', questions: [], redflags: [], causes: [] };
                    d.push(sym);
                }
                if (!Array.isArray(sym.causes))
                    sym.causes = [];
                sym.causes.push({ name: 'Neues Krankheitsbild', symptoms: '', medications: '', physiology: '', findings: '', info: '', cave: '' });
                selected = d.indexOf(sym) + ':' + (sym.causes.length - 1);
                render();
                return;
            }
            if (e.target.closest('[data-disease-delete]')) {
                const item = current();
                if (!item || !confirm('Dieses Krankheitsbild wirklich löschen?'))
                    return;
                d[item.si].causes.splice(item.ci, 1);
                selected = '';
                render();
            }
        };
    }
    // ------------------------------------------------------------------------
    // Redaktion (inkl. Cloudflare-Speicherung)
    // ------------------------------------------------------------------------
    async function editor() {
        const gate = async () => { const pin = sessionStorage.getItem('ost1020-editor-pin') || ''; if (pin && await verifyEditorPin(pin))
            return true; return false; };
        if (!(await gate())) {
            $('[data-main]').innerHTML = `<section class="pin-box editor-gate"><div class="pin-symbol">${ostIcon('lock')}</div><h2>Redaktion</h2><p>PIN eingeben, um Inhalte zu bearbeiten.</p><label class="ost-visually-hidden" for="editor-pin">PIN</label><input id="editor-pin" type="password" inputmode="numeric" data-pin placeholder="PIN"><div class="actions"><button class="btn primary" data-unlock>Entsperren</button><a class="btn" href="index.html">Abbrechen</a></div><div class="pin-status" data-pin-status></div></section>`;
            const attempt = async () => { const v = $('[data-pin]').value.trim(); if (!v)
                return; const st = $('[data-pin-status]'); st.textContent = 'Prüfe …'; if (await verifyEditorPin(v)) {
                sessionStorage.setItem('ost1020-editor-pin', v);
                editor();
            }
            else {
                st.textContent = 'PIN nicht korrekt.';
                $('[data-pin]').select();
            } };
            $('[data-unlock]').onclick = attempt;
            $('[data-pin]').onkeydown = e => { if (e.key === 'Enter')
                attempt(); };
            return;
        }
        const tabs = [['abcde', 'ABCDE'], ['news', 'Aktuelles'], ['meetings', 'Besprechungen & Vorträge'], ['differential', 'Krankheitsbilder'], ['articles', 'Literatur & Lesetipps'], ['changes', 'Lehrmeinungsänderungen'], ['skills', 'Skills'], ['attendance', 'Teilnehmerlisten'], ['events', 'Termine'], ['algorithms', 'Leitlinien & Merkhilfen'], ['modules', 'Wissensbereiche']];
        const tabIcons = { abcde: ostIcon('notes'), algorithms: ostIcon('notes'), news: ostIcon('news'), meetings: ostIcon('users'), differential: ostIcon('search'), articles: ostIcon('book'), changes: ostIcon('changes'), guide: ostIcon('screen'), skills: ostIcon('training'), attendance: ostIcon('group'), events: ostIcon('calendar'), modules: ostIcon('book') };
        $('[data-main]').innerHTML = `<section class="page-banner"><div class="page-banner-row"><h1>Redaktion</h1><button class="editor-shortcut" data-lock-editor>🔒 Sperren</button></div></section><section class="admin-tools cf550-editor-management"><details><summary>Verwaltung</summary><div class="ost-editor-stats" data-editor-stats><div>Lade Übersicht …</div></div><div class="ost-editor-actions"><button type="button" class="btn" data-open-review>Prüffristen</button><button type="button" class="btn" data-open-feedback>Fehlermeldungen</button><button type="button" class="btn" data-open-history>Versionsverlauf</button><button type="button" class="btn" data-open-backup>Backup erstellen</button><button type="button" class="btn" data-open-status>Backups ansehen</button></div><div class="admin-tools-actions cf550-management-actions" hidden><button class="btn" data-admin-history>Versionsverlauf</button><button class="btn" data-admin-backup>Backup erstellen</button><button class="btn" data-admin-status>Backups anzeigen</button><button class="btn" data-admin-feedback>Meldungen ansehen</button><button class="btn" data-admin-review>Prüffristen</button></div><div class="admin-tools-results" data-admin-results></div></details></section><section class="editor-dashboard"><aside class="editor-nav">${tabs.map((t, i) => `<button class="editor-nav-btn ${i ? '' : 'active'}" data-tab="${t[0]}"><span>${tabIcons[t[0]] || '📋'}</span><strong>${t[1]}</strong></button>`).join('')}</aside><section class="editor-content" data-edit></section></section>`;
        const maintenance = $('.admin-tools');
        if (maintenance)
            $('[data-main]').appendChild(maintenance);
        $('[data-lock-editor]').onclick = () => { sessionStorage.removeItem('ost1020-editor-pin'); editor(); };
        const overviewSources = await Promise.all([get('algorithms'), get('differential'), get('changes'), get('news')]);
        const allOverview = overviewSources.flat();
        const due = allOverview.filter(x => x.reviewDue && x.reviewDue <= new Date().toISOString().slice(0, 10));
        const lacking = allOverview.filter(x => (x.reviewDue || x.lastReviewed) && !x.reviewOwner);
        const drafts = allOverview.filter(x => x.status === 'draft');
        $('[data-editor-stats]').innerHTML = `<div><strong>${allOverview.length}</strong><span>Inhalte</span></div><div><strong>${due.length}</strong><span>Prüffrist fällig</span></div><div><strong>${drafts.length}</strong><span>Markierte Entwürfe</span></div><div><strong>${lacking.length}</strong><span>Ohne Prüfverantwortliche</span></div>`;
        const openAdmin = id => { const d = $('.admin-tools details'); d.open = true; $('[data-admin-' + id + ']')?.click(); d.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
        $('[data-open-review]').onclick = () => openAdmin('review');
        $('[data-open-feedback]').onclick = () => openAdmin('feedback');
        $('[data-open-history]').onclick = () => openAdmin('history');
        $('[data-open-backup]').onclick = () => openAdmin('backup');
        $('[data-open-status]').onclick = () => openAdmin('status');
        const adminResult = $('[data-admin-results]');
        const adminRequest = async (path, options = {}) => { if (!API)
            throw Error('Worker nicht konfiguriert'); const pin = sessionStorage.getItem('ost1020-editor-pin') || ''; const r = await fetch(`${API}${path}`, { ...options, headers: { 'X-Admin-Pin': pin, 'Content-Type': 'application/json', ...(options.headers || {}) } }); const data = await r.json(); if (!r.ok)
            throw Error(data.error || 'HTTP ' + r.status); return data; };
        const showAdminError = e => { adminResult.textContent = 'Fehler: ' + e.message; };
        $('[data-admin-history]').onclick = async () => { try {
            const name = prompt('Bereich für Versionsverlauf (z. B. algorithms, events, changes, differential):', 'algorithms');
            if (!name)
                return;
            const d = await adminRequest('/admin/history?name=' + encodeURIComponent(name));
            adminResult.innerHTML = `<h3>Versionsverlauf: ${esc(name)}</h3>${d.items.map(v => `<div class="admin-version-row"><span><strong>${esc(v.date)}</strong><small>${esc(v.message)}</small></span><button type="button" data-restore-sha="${esc(v.sha)}" data-restore-name="${esc(name)}">Wiederherstellen</button></div>`).join('')}`;
            adminResult.querySelectorAll('[data-restore-sha]').forEach(b => b.onclick = async () => { if (!confirm('ACHTUNG: Diese Version wird erneut als aktueller Inhalt veröffentlicht. Fortfahren?'))
                return; try {
                await adminRequest('/admin/restore', { method: 'POST', body: JSON.stringify({ sha: b.dataset.restoreSha, name: b.dataset.restoreName }) });
                adminResult.textContent = 'Wiederhergestellt. Seite neu laden.';
            }
            catch (e) {
                showAdminError(e);
            } });
        }
        catch (e) {
            showAdminError(e);
        } };
        $('[data-admin-backup]').onclick = async () => { try {
            const d = await adminRequest('/admin/backup', { method: 'POST' });
            adminResult.textContent = 'Backup erstellt: ' + d.key;
        }
        catch (e) {
            showAdminError(e);
        } };
        $('[data-admin-status]').onclick = async () => { try {
            const d = await adminRequest('/admin/backup-status');
            adminResult.textContent = d.configured ? d.items.map(x => x.key + ' (' + x.size + ' Bytes)').join('\n') : 'R2-Backup noch nicht konfiguriert.';
        }
        catch (e) {
            showAdminError(e);
        } };
        $('[data-admin-feedback]').onclick = async () => { try {
            const d = await adminRequest('/admin/feedback');
            adminResult.innerHTML = '<h3>Fehlermeldungen</h3>' + d.items.map(x => `<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.createdAt)} · ${esc(x.status)}</small><p>${esc(x.message)}</p><button data-complete="${esc(x.id)}">Als erledigt markieren</button></div>`).join('');
            adminResult.querySelectorAll('[data-complete]').forEach(b => b.onclick = async () => { try {
                await adminRequest('/admin/feedback/' + b.dataset.complete, { method: 'PATCH', body: JSON.stringify({ status: 'erledigt' }) });
                b.textContent = 'Erledigt';
                b.disabled = true;
            }
            catch (e) {
                showAdminError(e);
            } });
        }
        catch (e) {
            showAdminError(e);
        } };
        $('[data-admin-review]').onclick = async () => { try {
            const d = await adminRequest('/admin/review'), today = new Date().toISOString().slice(0, 10);
            adminResult.innerHTML = '<h3>Fachliche Prüffristen</h3>' + d.items.filter(x => !x.reviewDue || x.reviewDue <= today).map(x => `<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.type)} · Nächste Prüfung: ${esc(x.reviewDue || 'Nicht festgelegt')} · ${esc(x.reviewOwner || 'Keine verantwortliche Person')}</small></div>`).join('');
        }
        catch (e) {
            showAdminError(e);
        } };
        const editorCatalog = await contentCatalog();
        const splitLines = v => String(v || '').split(/\n+/).map(x => x.trim()).filter(Boolean);
        const field = (label, value, key, type = 'text') => `<label class="ux-field"><span>${label}</span>${type === 'textarea' ? `<textarea data-k="${key}">${esc(Array.isArray(value) ? value.join('\n') : value || '')}</textarea>` : `<input data-k="${key}" type="${type}" value="${esc(value ?? '')}">`}</label>`;
        const listEditor = (items, key, placeholder) => `<div class="repeat-list" data-list-key="${key}">${arr(items).map((v, i) => `<div class="repeat-row"><input value="${esc(v)}" data-list-item="${i}" placeholder="${placeholder}"><div class="repeat-move-actions"><button type="button" data-move-list="up" aria-label="Punkt nach oben verschieben" title="Nach oben">↑</button><button type="button" data-move-list="down" aria-label="Punkt nach unten verschieben" title="Nach unten">↓</button></div><button type="button" data-remove-row aria-label="Punkt entfernen">✕</button></div>`).join('')}<button type="button" class="small-add" data-add-row="${key}">+ Punkt</button></div>`;
        const editorDrafts = new Map();
        let materialAlgorithmsView = 'guidelines'; // Separate editorial views, same algorithms Worker collection.
        let currentEditorState = null;
        async function draw(name) {
            const sourceName = name === 'attendance' ? 'events' : name;
            const loaded = editorDrafts.has(sourceName) ? editorDrafts.get(sourceName) : (name === 'articles' ? await articles() : await get(sourceName));
            const d = loaded, box = $('[data-edit]');
            editorDrafts.set(sourceName, d);
            currentEditorState = { name: sourceName, view: name, d, box };
            if (name === 'modules') {
                await moduleEditor(box, moduleRequested, requestedEditorGroup);
                return;
            }
            if (name === 'differential') {
                await cf551DiseaseEditor(box, d);
                return;
            }
            if (name === 'attendance') {
                const today = new Date().toISOString().slice(0, 10), current = [...d].filter(ev => (ev.date || '') >= today).sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time)), past = [...d].filter(ev => (ev.date || '') < today).sort((a, b) => (b.date + b.time).localeCompare(a.date + a.time));
                const eventCard = ev => { const people = attendeeEntries(ev.attendees), dateLabel = ev.date ? new Date(ev.date + 'T12:00:00').toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' }) : ''; return `<details class="attendance-event" data-attendance-event="${esc(ev.id)}"><summary class="attendance-event-head"><div><span class="cat-pill">${esc(ev.category || 'Termin')}</span><h3>${esc(ev.title)}</h3><p>${esc(dateLabel)}${ev.time ? ` · ${esc(ev.time)}` : ''}${ev.location ? ` · ${esc(ev.location)}` : ''}</p></div><span class="attendance-head-actions"><strong>${people.length}/${Number(ev.capacity) || 10}</strong><i class="attendance-chevron" aria-hidden="true"></i></span></summary><div class="attendance-event-body">${people.length ? `<div class="attendance-table">${people.map((p, i) => `<div class="attendance-row"><span class="attendance-no">${i + 1}</span><span><strong>${esc(p.name || 'Ohne Namensangabe')}</strong><small>${p.registeredAt ? `angemeldet ${new Date(p.registeredAt).toLocaleString('de-DE')}` : 'älterer Eintrag'}</small></span></div>`).join('')}</div>` : '<div class="empty compact">Noch keine Anmeldungen.</div>'}<div class="attendance-tools"><button class="btn attendance-pdf" data-attendance-pdf="${esc(ev.id)}">PDF exportieren</button>${people.length ? `<button class="btn attendance-clear" data-attendance-clear="${esc(ev.id)}">Liste leeren</button>` : ''}</div></div></details>`; };
                const group = (title, subtitle, items, klass) => `<section class="attendance-group ${klass}"><div class="attendance-group-head"><div><h3>${title}</h3><p>${subtitle}</p></div><span>${items.length}</span></div><div class="attendance-editor-list">${items.map(eventCard).join('') || '<div class="empty">Keine Termine in diesem Bereich.</div>'}</div></section>`;
                box.innerHTML = `<div class="editor-toolbar"><div><h2>Teilnehmerlisten</h2><p>Anwesenheit nach Termin nachvollziehen und als PDF exportieren.</p></div></div>${group('Aktuelle Termine', 'Heute und kommende Trainingseinheiten.', current, 'current')}${group('Anwesenheitsarchiv', 'Vergangene Termine bleiben mit Teilnehmerliste erhalten.', past, 'archive')}`;
                box.onclick = async (e) => { const pdf = e.target.closest('[data-attendance-pdf]'); if (pdf) {
                    e.preventDefault();
                    e.stopPropagation();
                    const ev = d.find(x => x.id === pdf.dataset.attendancePdf);
                    if (ev)
                        exportAttendancePdf(ev);
                    return;
                } const clear = e.target.closest('[data-attendance-clear]'); if (clear) {
                    e.preventDefault();
                    e.stopPropagation();
                    const ev = d.find(x => x.id === clear.dataset.attendanceClear);
                    if (!ev)
                        return;
                    if (!confirm(`Teilnehmerliste für „${ev.title}“ wirklich leeren?`))
                        return;
                    ev.attendees = [];
                    clear.disabled = true;
                    const ok = await save('events', d);
                    if (!ok && !API)
                        localStorage.setItem(LS + 'events', JSON.stringify(d));
                    await draw('attendance');
                } };
                return;
            }
            const materialAlgorithmTab = name === 'algorithms' && requestedEditorGroup === 'materialien';
            const isSchemaAlgorithm = x => String(x.category || '').startsWith('Schema');
            const matchesMaterialView = x => !materialAlgorithmTab || (materialAlgorithmsView === 'mnemonics' ? isSchemaAlgorithm(x) : !isSchemaAlgorithm(x));
            const sectionName = materialAlgorithmTab ? (materialAlgorithmsView === 'mnemonics' ? 'Merkhilfen & Schemata' : 'Leitlinien') : (tabs.find(t => t[0] === name)?.[1] || name);
            box.innerHTML = `<div class="editor-toolbar"><div><h2>${sectionName}</h2><p>Inhalt auswählen und einfach bearbeiten.</p></div><div class="editor-toolbar-actions"><button class="btn primary" data-add>+ Neu</button><button class="btn" data-save>Speichern</button></div></div><div class="editor-items" data-items></div>`;
            const itemsBox = $('[data-items]', box);
            let selectedIndex = -1;
            let filterTerm = '';
            const render = () => {
                // A single focused editor for every area, including Aktuelles.
                const isSortable = ['algorithms', 'skills', 'guide', 'changes', 'differential', 'meetings'].includes(name);
                const options = d.map((x, i) => ({ i, label: String(x.title || x.name || x.key || 'Eintrag ' + (i + 1)), search: normalizedSearch([x.title, x.authors, x.journal, Array.isArray(x.topics) ? x.topics.join(' ') : x.topics].join(' ')) })).filter(({ i }) => matchesMaterialView(d[i]));
                if (!isSortable)
                    options.sort((a, b) => a.label.localeCompare(b.label, 'de'));
                const visible = filterTerm ? options.filter(x => x.search.includes(normalizedSearch(filterTerm)) || normalizedSearch(x.label).includes(normalizedSearch(filterTerm))) : options;
                const orderKey = x => name === 'algorithms' ? (String(x.category || '').startsWith('Schema') ? 'Merkhilfen' : 'Algorithmen') : 'Einträge';
                const orderGroups = isSortable ? [...new Set(d.filter(matchesMaterialView).map(orderKey))] : [];
                const orderTools = isSortable ? `<section class="ost-order-editor"><div class="ost-order-title"><strong>Reihenfolge der Liste</strong><small>Mit ↑ und ↓ sortieren, anschließend oben „Speichern“ wählen.</small></div><p class="ost-order-unsaved" data-order-unsaved aria-live="polite"></p>${orderGroups.map(group => `<div class="ost-order-group">${orderGroups.length > 1 ? `<h3>${esc(group)}</h3>` : ''}${d.map((x, i) => ({ x, i })).filter(({ x }) => matchesMaterialView(x) && orderKey(x) === group).map(({ x, i }, pos, all) => `<div class="ost-order-entry"><span>${esc(String(x.title || x.name || x.key || 'Eintrag ' + (i + 1)))}</span><div class="ost-order-buttons"><button type="button" data-order-dir="up" data-order-index="${i}" aria-label="${esc(String(x.title || x.name || 'Eintrag'))} nach oben" ${pos === 0 ? 'disabled' : ''}>↑</button><button type="button" data-order-dir="down" data-order-index="${i}" aria-label="${esc(String(x.title || x.name || 'Eintrag'))} nach unten" ${pos === all.length - 1 ? 'disabled' : ''}>↓</button></div></div>`).join('')}</div>`).join('')}</section>` : '';
                const pickerTop = name === 'articles' ? `<div class="literature-admin-stats"><div><strong>${d.length}</strong><span>Artikel gesamt</span></div><div><strong>${new Set(d.flatMap(x => Array.isArray(x.topics) ? x.topics : [x.topics]).filter(Boolean)).size}</strong><span>Themen</span></div></div><div class="editor-grid two literature-editor-tools"><label class="ux-field"><span>Literatur suchen</span><input data-article-filter placeholder="Titel, Autor:in, Journal …" value="${esc(filterTerm)}"></label><label class="ux-field"><span>Eintrag auswählen</span><select data-editor-pick><option value="-1">– Bitte auswählen –</option>${visible.map(x => `<option value="${x.i}" ${selectedIndex === x.i ? 'selected' : ''}>${esc(x.label)}</option>`).join('')}</select></label></div>` : `<div class="ost-entry-picker"><label>Eintrag auswählen<select data-editor-pick><option value="-1">– Bitte auswählen –</option>${options.map(x => `<option value="${x.i}" ${selectedIndex === x.i ? 'selected' : ''}>${esc(x.label)}</option>`).join('')}</select></label></div>`;
                itemsBox.innerHTML = pickerTop + (selectedIndex >= 0 && d[selectedIndex] ? renderCard(name, d[selectedIndex], selectedIndex) : '<p class="ost-editor-empty">Wähle einen Eintrag aus der Liste oder erstelle einen neuen Inhalt.</p>') + orderTools;
                itemsBox.querySelector('[data-editor-pick]')?.addEventListener('change', e => { sync(); selectedIndex = Number(e.target.value); render(); openCard(selectedIndex); });
                itemsBox.querySelector('[data-article-filter]')?.addEventListener('input', e => { filterTerm = e.target.value; const picker = itemsBox.querySelector('[data-editor-pick]'); if (picker) {
                    const selected = picker.value;
                    const found = options.filter(x => !filterTerm || x.search.includes(normalizedSearch(filterTerm)));
                    picker.innerHTML = `<option value="-1">– ${found.length} Treffer –</option>${found.map(x => `<option value="${x.i}">${esc(x.label)}</option>`).join('')}`;
                    picker.value = found.some(x => String(x.i) === selected) ? selected : '-1';
                } ; });
            };
            render();
            const sync = () => { readAll(name, d, box); editorDrafts.set(name, d); };
            const rerenderOpen = i => { selectedIndex = i; render(); openCard(i); };
            $('[data-add]', box).onclick = () => { sync(); const item = blank(name); if (materialAlgorithmTab) { item.category = materialAlgorithmsView === 'mnemonics' ? 'Schema · Allgemein' : 'Leitlinie'; item.title = materialAlgorithmsView === 'mnemonics' ? 'Neues Merkschema' : 'Neue Leitlinie'; } d.unshift(item); selectedIndex = 0; render(); openCard(0); };
            $('[data-save]', box).onclick = async () => { sync(); const ok = await save(name, d); alert(ok ? 'Gespeichert und synchronisiert.' : 'Lokal gespeichert. Worker-Sync nicht verfügbar.'); };
            box.onclick = async (e) => {
                const rich = e.target.closest('[data-editor-rich]');
                if (rich) {
                    const root = rich.closest('.ost-news-editor'), ta = root?.querySelector('textarea[data-k]');
                    if (!ta)
                        return;
                    if (rich.dataset.editorRich === 'preview') {
                        const preview = root.querySelector('[data-editor-preview]');
                        preview.hidden = !preview.hidden;
                        if (!preview.hidden)
                            preview.innerHTML = renderModuleText(ta.value);
                        return;
                    }
                    const st = ta.selectionStart, ed = ta.selectionEnd, t = ta.value.slice(st, ed), kind = rich.dataset.editorRich;
                    const replacement = kind === 'bold' ? `**${t || 'Text'}**` : kind === 'italic' ? `*${t || 'Text'}*` : kind === 'heading' ? `## ${t || 'Überschrift'}` : kind === 'list' ? `- ${t || 'Listenpunkt'}` : kind === 'link' ? `[${t || 'Linktext'}](https://example.com)` : t;
                    ta.setRangeText(replacement, st, ed, 'end');
                    ta.focus();
                    return;
                }
                const publish = e.target.closest('[data-publish-news]');
                if (publish) {
                    if (!['algorithms', 'differential', 'articles', 'changes', 'skills', 'guide', 'meetings'].includes(name))
                        return;
                    sync();
                    const idx = Number(publish.dataset.publishNews), entry = d[idx];
                    if (!entry)
                        return;
                    const title = String(entry.title || entry.name || '').trim();
                    if (!title)
                        return alert('Bitte zuerst einen Titel eingeben.');
                    if (!confirm(`„${title}“ als neue Meldung unter Aktuelles veröffentlichen?`))
                        return;
                    const map = { algorithms: ['Leitlinie', 'algorithmen.html'], differential: ['Leitlinie', 'differential.html'], articles: ['Literatur-Archiv', 'literatur.html'], changes: ['Lehrmeinung', 'lehrmeinung.html'], skills: ['Ausbildung', 'skilltraining.html'], guide: ['Simulationstraining', 'simulation.html'], meetings: ['Organisation', 'dienstbesprechungen.html'] };
                    const [category, base] = map[name], link = entry.id && ['algorithms', 'changes', 'meetings'].includes(name) ? base + '?id=' + encodeURIComponent(entry.id) : base;
                    const current = await get('news'), today = new Date().toLocaleDateString('sv-SE');
                    const exists = current.some(v => v.relatedSection === name && v.relatedId === String(entry.id || title));
                    if (exists && !confirm('Es gibt bereits eine verknüpfte Meldung. Trotzdem eine weitere erstellen?'))
                        return;
                    const newsItem = { id: 'news-' + Date.now(), title: 'Neu: ' + title, category, date: today, text: 'Neuer oder aktualisierter Inhalt: ' + title, link, active: true, relatedSection: name, relatedId: String(entry.id || title) };
                    const saved = await save('news', [newsItem, ...current]);
                    alert(saved ? 'Meldung unter Aktuelles veröffentlicht.' : 'Meldung nur lokal gespeichert – Worker-Synchronisierung prüfen.');
                    return;
                }
                const moveOrder = e.target.closest('[data-order-dir]');
                if (moveOrder) {
                    sync();
                    const i = Number(moveOrder.dataset.orderIndex), direction = moveOrder.dataset.orderDir === 'up' ? -1 : 1;
                    const groupKey = x => name === 'algorithms' ? (String(x.category || '').startsWith('Schema') ? 'schema' : 'algorithm') : 'all';
                    if (!d[i])
                        return;
                    const others = d.map((x, j) => ({ x, j })).filter(({ x }) => groupKey(x) === groupKey(d[i]));
                    const position = others.findIndex(v => v.j === i), neighbor = others[position + direction];
                    if (!neighbor)
                        return;
                    const j = neighbor.j, previouslySelected = d[selectedIndex];
                    [d[i], d[j]] = [d[j], d[i]];
                    selectedIndex = previouslySelected ? d.indexOf(previouslySelected) : -1;
                    render();
                    if (selectedIndex >= 0)
                        openCard(selectedIndex);
                    const notice = box.querySelector('[data-order-unsaved]');
                    if (notice)
                        notice.textContent = 'Reihenfolge geändert – bitte Speichern anklicken.';
                    return;
                }
                const moveList = e.target.closest('[data-move-list]');
                if (moveList) {
                    const row = moveList.closest('.repeat-row'), list = row?.closest('[data-list-key]');
                    if (!row || !list)
                        return;
                    if (moveList.dataset.moveList === 'up' && row.previousElementSibling?.classList.contains('repeat-row'))
                        list.insertBefore(row, row.previousElementSibling);
                    else if (moveList.dataset.moveList === 'down' && row.nextElementSibling?.classList.contains('repeat-row'))
                        list.insertBefore(row.nextElementSibling, row);
                    return;
                }
                const del = e.target.closest('[data-del]');
                if (del) {
                    const i = +del.dataset.del;
                    sync();
                    d.splice(i, 1);
                    render();
                    return;
                }
                const addRow = e.target.closest('[data-add-row]');
                if (addRow) {
                    const card = addRow.closest('[data-index]'), ci = +card.dataset.index, key = addRow.dataset.addRow;
                    const skillCard = addRow.closest('.skill-editor-card'), sectionCard = addRow.closest('.section-editor-card');
                    const si = skillCard ? +skillCard.dataset.skillIndex : -1, sci = sectionCard ? +sectionCard.dataset.sectionIndex : -1;
                    sync();
                    const x = d[ci];
                    if (name === 'skills' && key === 'sectionItems' && si >= 0 && sci >= 0) {
                        const sec = x.skills?.[si]?.sections?.[sci];
                        if (sec) {
                            sec.items = Array.isArray(sec.items) ? sec.items : [];
                            sec.items.push('');
                        }
                    }
                    else {
                        if (!Array.isArray(x[key]))
                            x[key] = [];
                        x[key].push('');
                    }
                    rerenderOpen(ci);
                    return;
                }
                const remove = e.target.closest('[data-remove-row]');
                if (remove) {
                    const card = remove.closest('[data-index]'), ci = +card.dataset.index, list = remove.closest('[data-list-key]'), key = list.dataset.listKey;
                    const idx = [...list.querySelectorAll('.repeat-row')].indexOf(remove.closest('.repeat-row'));
                    const skillCard = remove.closest('.skill-editor-card'), sectionCard = remove.closest('.section-editor-card');
                    const si = skillCard ? +skillCard.dataset.skillIndex : -1, sci = sectionCard ? +sectionCard.dataset.sectionIndex : -1;
                    sync();
                    const x = d[ci];
                    if (name === 'skills' && key === 'sectionItems' && si >= 0 && sci >= 0) {
                        const items = x.skills?.[si]?.sections?.[sci]?.items;
                        if (Array.isArray(items))
                            items.splice(idx, 1);
                    }
                    else if (Array.isArray(x[key]))
                        x[key].splice(idx, 1);
                    rerenderOpen(ci);
                    return;
                }
                const addSec = e.target.closest('[data-add-section]');
                if (addSec) {
                    const card = addSec.closest('[data-index]'), ci = +card.dataset.index, si = +addSec.dataset.skillIndex;
                    sync();
                    const g = d[ci];
                    g.skills[si].sections = g.skills[si].sections || [];
                    g.skills[si].sections.push({ title: 'Neuer Abschnitt', items: [] });
                    rerenderOpen(ci);
                    return;
                }
                const removeSec = e.target.closest('[data-remove-section]');
                if (removeSec) {
                    const card = removeSec.closest('[data-index]'), ci = +card.dataset.index, skillCard = removeSec.closest('.skill-editor-card'), si = skillCard ? +skillCard.dataset.skillIndex : -1, sci = +removeSec.dataset.removeSection;
                    if (si < 0 || sci < 0)
                        return;
                    sync();
                    const g = d[ci], sec = g.skills?.[si]?.sections?.[sci];
                    if (!sec)
                        return;
                    if (!confirm(`Unterüberschrift „${sec.title || 'Ohne Titel'}“ wirklich entfernen?`))
                        return;
                    g.skills[si].sections.splice(sci, 1);
                    rerenderOpen(ci);
                    return;
                }
                const addSkill = e.target.closest('[data-add-skill]');
                if (addSkill) {
                    const card = addSkill.closest('[data-index]'), ci = +card.dataset.index;
                    sync();
                    const g = d[ci];
                    g.skills = g.skills || [];
                    g.skills.push({ name: 'Neuer Skill', sections: [{ title: 'Ablauf', items: [] }] });
                    rerenderOpen(ci);
                    return;
                }
                const addDisease = e.target.closest('[data-add-disease]');
                if (addDisease) {
                    const card = addDisease.closest('[data-index]'), ci = +card.dataset.index;
                    sync();
                    const x = d[ci];
                    x.causes = x.causes || [];
                    x.causes.push({ name: 'Neues Krankheitsbild', symptoms: '', medications: '', physiology: '', findings: '', cave: '', info: '' });
                    rerenderOpen(ci);
                    return;
                }
                const addMat = e.target.closest('[data-add-alg-material]');
                if (addMat) {
                    if (name === 'meetings') {
                        const ci = +addMat.closest('[data-index]').dataset.index;
                        sync();
                        d[ci].files = d[ci].files || [];
                        d[ci].files.push({ title: 'Neues Material', url: '', note: '' });
                        rerenderOpen(ci);
                        return;
                    }
                    const card = addMat.closest('[data-index]'), ci = +card.dataset.index, kind = addMat.dataset.addAlgMaterial;
                    sync();
                    const x = d[ci];
                    x.materials = x.materials || { background: [], checklists: [] };
                    x.materials[kind] = x.materials[kind] || [];
                    x.materials[kind].push({ title: 'Neue Datei', url: '', note: '' });
                    rerenderOpen(ci);
                    return;
                }
                const lookup = e.target.closest('[data-doi-lookup]');
                if (lookup) {
                    const row = lookup.closest('[data-index]'), doi = $('[data-k="doi"]', row)?.value.trim();
                    if (!doi)
                        return alert('Bitte zuerst eine DOI eingeben.');
                    lookup.disabled = true;
                    try {
                        const r = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`);
                        if (!r.ok)
                            throw new Error('DOI nicht gefunden');
                        const m = (await r.json()).message;
                        const set = (k, v) => { const el = $(`[data-k="${k}"]`, row); if (el && v != null)
                            el.value = v; };
                        set('title', Array.isArray(m.title) ? m.title[0] : '');
                        set('authors', (m.author || []).map(a => [a.given, a.family].filter(Boolean).join(' ')).join(', '));
                        set('journal', Array.isArray(m['container-title']) ? m['container-title'][0] : '');
                        set('year', m.published?.['date-parts']?.[0]?.[0] || '');
                        set('publisherUrl', m.URL || '');
                        sync();
                    }
                    catch (err) {
                        alert(err.message);
                    }
                    finally {
                        lookup.disabled = false;
                    }
                }
            };
            box.addEventListener('input', e => { if (!e.target.matches('[data-related-search]'))
                return; const root = e.target.closest('.ost-related-editor'), results = root.querySelector('[data-related-results]'), term = e.target.value.trim(); const selected = new Set([...root.querySelectorAll('[data-rel-type][data-rel-id]')].map(el => el.dataset.relType + ':' + el.dataset.relId)); const hits = term ? catalogSearch(editorCatalog, term).filter(c => !selected.has(c.type + ':' + c.id)).slice(0, 8) : []; results.innerHTML = hits.map(c => `<label class="ost-rel-choice"><input type="checkbox" data-rel-type="${esc(c.type)}" data-rel-id="${esc(c.id)}"><span>${esc(c.title)} <small>${esc(LINK_TYPES[c.type][0])}</small></span></label>`).join(''); });
            box.addEventListener('change', e => { if (!e.target.matches('[data-rel-type][data-rel-id]'))
                return; const root = e.target.closest('.ost-related-editor'), selected = root.querySelector('[data-related-selected]'); if (e.target.checked) {
                selected.appendChild(e.target.closest('label'));
            }
            else {
                e.target.closest('label').remove();
            } });
            box.onchange = async (e) => { const imageInput = e.target.closest('[data-editor-inline-upload]'); if (imageInput?.files?.[0]) {
                const file = imageInput.files[0], status = document.createElement('span');
                status.className = 'upload-status';
                status.textContent = 'Bild wird hochgeladen …';
                imageInput.parentElement.after(status);
                try {
                    const url = await uploadMedia(file), area = imageInput.closest('.ost-news-editor').querySelector('textarea[data-k]');
                    area.setRangeText(`\n\n![${file.name.replace(/\.[^.]+$/, '')}](${url})\n\n`, area.selectionStart, area.selectionEnd, 'end');
                    status.textContent = 'Bild eingefügt – oben Speichern wählen.';
                }
                catch (err) {
                    status.textContent = 'Upload fehlgeschlagen: ' + err.message;
                }
                imageInput.value = '';
                return;
            } const input = e.target.closest('[data-media-upload]'); if (!input || !input.files?.[0])
                return; const file = input.files[0], target = input.dataset.target, status = document.createElement('div'); status.className = 'upload-status'; status.textContent = 'Lade hoch …'; input.after(status); try {
                const url = await uploadMedia(file);
                const holder = input.closest('[data-material-item]') || input.closest('[data-index]');
                const field = $(`[data-k="${target}"]`, holder);
                if (field) {
                    field.value = url;
                    field.dispatchEvent(new Event('input', { bubbles: true }));
                }
                readAll(name, d, box);
                const synced = await save(name, d);
                status.textContent = synced ? 'Upload gespeichert und synchronisiert.' : 'Upload gespeichert. Worker-Sync nicht verfügbar.';
            }
            catch (err) {
                status.textContent = 'Upload fehlgeschlagen: ' + err.message;
            } };
            function openCard(i) { const c = itemsBox.querySelector(`[data-card="${i}"]`); if (c)
                c.open = true; }
        }
        function relatedEditor(name, x) { if (!LINK_TYPES[name])
            return ''; const val = relRefs(x).map(r => r.type + ':' + r.id).join('\n'); const opts = editorCatalog.filter(c => !(c.type === name && c.id === String(x.id || ''))); return `<section class="editor-subsection ost-related-editor"><h3>Medizinische Querverlinkungen</h3><p>Passende Inhalte per Suche auswählen. Bereits gesetzte Verknüpfungen bleiben erhalten.</p><input type="search" data-related-search placeholder="Titel suchen …"><div data-related-results></div><div data-related-selected>${relRefs(x).map(r => { const c = opts.find(c => c.type === r.type && c.id === r.id); return `<label class="ost-rel-choice"><input type="checkbox" data-rel-type="${esc(r.type)}" data-rel-id="${esc(r.id)}" checked><span>${esc(c?.title || r.type + ':' + r.id)}</span></label>`; }).join('')}</div></section>`; }
        function renderCard(name, x, i) {
            let body = '';
            if (name === 'meetings') {
                body = `<div class="editor-grid two">${field('Titel', x.title, 'title')}${field('Datum', x.date, 'date', 'date')}${field('Thema / Kategorie', x.category, 'category')}${field('Referent:in', x.speaker, 'speaker')}</div>${field('Zusammenfassung', x.summary, 'summary', 'textarea')}<section class="editor-subsection"><h3>Vorträge, Grafiken, PDFs und Links</h3>${renderMaterialGroup('Materialien', 'files', x.files || [], i)}</section>`;
            }
            else if (name === 'algorithms') {
                const mat = x.materials || { background: [], checklists: [] };
                body = `<div class="editor-grid two">${field('Titel', x.title, 'title')}${field('Symbol', x.icon, 'icon')}${field('Kategorie', x.category, 'category')}${field('Stand', x.stand, 'stand')}</div>${String(x.category || '').startsWith('Schema') ? `<section class="editor-subsection"><h3>Schema erklären</h3><p>Beschreibe hier das Schema wie einen Anatomie-Fachtext. Der Text erscheint auf der Materialien-Seite direkt unter dem Schema.</p>${ostRichEditor('explanation', x.explanation)}</section>` : ''}<section class="editor-subsection"><h3>Ablauf / Schritte / Schemaelemente</h3>${listEditor(x.steps, 'steps', 'Algorithmusschritt')}</section><section class="editor-subsection"><h3>Leitlinie / Quelle</h3>${field('Quelleninfo', x.source, 'source', 'textarea')}${field('Web-Link zur Leitlinie', x.sourceUrl, 'sourceUrl')}</section><section class="editor-subsection"><h3>Fachliche Prüfung</h3><div class="editor-grid two">${field('Zuletzt fachlich geprüft', x.lastReviewed, 'lastReviewed', 'date')}${field('Nächste Prüfung fällig', x.reviewDue, 'reviewDue', 'date')}${field('Verantwortliche Person', x.reviewOwner, 'reviewOwner')}</div></section><section class="editor-subsection"><h3>Grafik / Schema-Bild</h3>${field('Bild-URL (optional)', x.imageUrl, 'imageUrl')}${field('Bildunterschrift', x.imageCaption, 'imageCaption')}<label class="ux-field"><span>Grafik hochladen (PNG, JPG, SVG, WebP)</span><input type="file" accept="image/*" data-media-upload data-target="imageUrl"></label></section><section class="editor-subsection"><h3>Materialien</h3>${renderMaterialGroup('Hintergrundinfos', 'background', mat.background || [], i)}${renderMaterialGroup('Checklisten', 'checklists', mat.checklists || [], i)}</section>`;
            }
            else if (name === 'skills') {
                body = `${field('Kategorie', x.name, 'name')}<div class="skill-editor-list">${(x.skills || []).map((sk, si) => `<section class="skill-editor-card" data-skill-index="${si}">${field('Skillname', sk.name, 'skillName')}<div class="section-editor-list">${(sk.sections || []).map((sec, sci) => `<div class="section-editor-card" data-section-index="${sci}"><div class="section-editor-head"><strong>Unterüberschrift ${sci + 1}</strong><button type="button" class="section-remove-btn" data-remove-section="${sci}" aria-label="Unterüberschrift entfernen">✕ Entfernen</button></div>${field('Unterüberschrift', sec.title, 'sectionTitle')}${listEditor(sec.items, 'sectionItems', 'Inhalt')}</div>`).join('')}</div><button class="small-add" type="button" data-add-section data-skill-index="${si}">+ Unterüberschrift</button></section>`).join('')}</div><button class="btn" type="button" data-add-skill>+ Skill hinzufügen</button>`;
            }
            else if (name === 'differential') {
                body = `<div class="editor-grid two">${field('Zuordnung: führendes Leitsymptom', x.title, 'title')}${field('Fachbereich / Gruppe', x.group || 'Weitere', 'group')}${field('Symbol / Emoji', x.icon, 'icon')}</div>${field('Physiologisches Hintergrundwissen', x.theory, 'theory', 'textarea')}<section class="editor-subsection"><h3>Wichtige Fragen</h3>${listEditor(x.questions, 'questions', 'Frage')}</section><section class="editor-subsection"><h3>Red Flags</h3>${listEditor(x.redflags, 'redflags', 'Red Flag')}</section><section class="editor-subsection"><h3>Krankheitsbilder mit Symptomen & Medikamenten</h3><div class="disease-editor-list">${arr(x.causes).map((c, ci) => { const o = typeof c === 'string' ? { name: c, info: '' } : c; return `<div class="disease-editor-card" data-disease-index="${ci}">${field('Name des Krankheitsbildes', o.name, 'diseaseName')}${field('Typische Symptome', o.symptoms, 'diseaseSymptoms', 'textarea')}${field('Physiologie / Pathophysiologie', o.physiology, 'diseasePhysiology', 'textarea')}${field('Typische Befunde / auffällige Werte', o.findings, 'diseaseFindings', 'textarea')}${field('CAVE / Warnzeichen', o.cave, 'diseaseCave', 'textarea')}${field('Weitere Informationen (optional)', o.info, 'diseaseInfo', 'textarea')}${field('Relevante Medikamente / Wirkstoffe', o.medications, 'diseaseMedications', 'textarea')}${field('Quellenlink (https://…)', o.sourceUrl, 'diseaseSourceUrl')}${field('Linktext', o.sourceLabel, 'diseaseSourceLabel')}</div>`; }).join('')}</div><button class="small-add" type="button" data-add-disease>+ Krankheitsbild</button></section>`;
            }
            else if (name === 'articles') {
                body = `<section class="editor-subsection"><h3>Bibliografische Daten</h3><div class="editor-grid two">${field('Titel', x.title, 'title')}${field('DOI', x.doi, 'doi')}${field('Autor:innen', x.authors, 'authors')}${field('Journal / Quelle', x.journal, 'journal')}${field('Jahr', x.year, 'year')}${field('Dokumenttyp', x.type, 'type')}</div><button class="btn" type="button" data-doi-lookup>DOI-Daten abrufen</button></section><section class="editor-subsection"><h3>Einordnung</h3><div class="editor-grid two">${field('Themen / Kategorien', Array.isArray(x.topics) ? x.topics.join(', ') : x.topics, 'topics')}${field('Tags für das Literatur-Archiv', Array.isArray(x.tags) ? x.tags.join(', ') : x.tags, 'tags')}${field('Zielgruppe', x.level, 'level')}${field('Sprache', x.language, 'language')}${field('Lizenz', x.license, 'license')}${field('Lesezeit', x.read, 'read')}${field('Zugriff', x.access, 'access')}${field('Hinzugefügt am', x.added, 'added', 'date')}</div><div class="cf548-editor-feature"><label class="cf548-feature-label"><input data-k="featured" type="checkbox" ${x.featured ? 'checked' : ''}><span>Auf der Startseite als Lesetipp anzeigen</span></label>${field('Reihenfolge der Lesetipps (1 oder 2)', x.featureRank || 1, 'featureRank', 'number')}<p>Auf der Startseite erscheinen höchstens zwei markierte Artikel. Alle Artikel bleiben im Literatur-Archiv auffindbar.</p></div><div class="ost-lit-description-title">Beschreibung / Warum lesenswert?</div>${ostRichEditor('why', x.why)}</section><section class="editor-subsection"><h3>Links</h3><div class="editor-grid two">${field('Original-/Verlagslink', x.publisherUrl, 'publisherUrl')}${field('Freier Volltext', x.freeUrl, 'freeUrl')}</div></section>`;
            }
            else if (name === 'news')
                body = field('Titel', x.title, 'title') + `<div class="editor-grid two">${field('Kategorie', x.category, 'category')}${field('Datum', x.date, 'date', 'date')}</div>` + `<div class="ost-lit-description-title">Beschreibung mit Formatierung</div>` + ostRichEditor('text', x.text, { upload: true });
            else if (name === 'events')
                body = field('Titel', x.title, 'title') + `<div class="editor-grid two">${field('Datum', x.date, 'date', 'date')}${field('Uhrzeit', x.time, 'time')}${field('Ort', x.location, 'location')}${field('Kategorie', x.category, 'category')}${field('Max. Teilnehmer', x.capacity, 'capacity')}</div>` + field('Beschreibung', x.description, 'description', 'textarea');
            else if (name === 'changes')
                body = field('Titel', x.title, 'title') + field('Kategorie', x.category, 'category') + field('Datum', x.date, 'date', 'date') + field('Bisher', x.old, 'old', 'textarea') + field('Neu', x.new, 'new', 'textarea') + field('Quelle', x.source, 'source') + field('Gültigkeit', x.validity, 'validity') + field('Zuletzt fachlich geprüft', x.lastReviewed, 'lastReviewed', 'date') + field('Nächste Prüfung fällig', x.reviewDue, 'reviewDue', 'date') + field('Verantwortliche Person', x.reviewOwner, 'reviewOwner') + field('Bild-URL', x.imageUrl, 'imageUrl') + `<label class="ux-field"><span>Bild hochladen</span><input type="file" accept="image/*" data-media-upload data-target="imageUrl"></label>`;
            else if (name === 'abcde')
                body = field('Buchstabe', x.key, 'key') + field('Titel', x.title, 'title') + `<section class="editor-subsection"><h3>Beurteilung</h3>${listEditor(x.checks, 'checks', 'Punkt')}</section><section class="editor-subsection"><h3>Maßnahmen</h3>${listEditor(x.actions, 'actions', 'Punkt')}</section><section class="editor-subsection"><h3>Warnzeichen</h3>${listEditor(x.pitfalls, 'pitfalls', 'Punkt')}</section>`;
            else if (name === 'guide')
                body = field('Titel', x.title, 'title') + field('Symbol', x.icon, 'icon') + `<section class="editor-subsection"><h3>Schritte</h3>${listEditor(x.steps, 'steps', 'Schritt')}</section>`;
            return `<details class="edit-card ux-edit-card" data-card="${i}"><summary><span>${esc(x.title || x.name || x.key || 'Neuer Eintrag')}</span><span>▾</span></summary><div class="edit-body" data-index="${i}">${body}${relatedEditor(name, x)}${["algorithms", "differential", "articles", "changes", "skills", "guide", "meetings"].includes(name) ? `<div class="editor-news-link"><button class="btn" type="button" data-publish-news="${i}">📣 Unter Aktuelles veröffentlichen</button><small>Erstellt eine neue Meldung mit Verknüpfung zu diesem Inhalt.</small></div>` : ""}<div class="danger-zone"><button class="btn danger" data-del="${i}">Eintrag löschen</button></div></div></details>`;
        }
        function renderMaterialGroup(title, key, items, i) { return `<div class="material-editor-group"><div class="material-editor-head"><strong>${title}</strong><button class="small-add" type="button" data-add-alg-material="${key}">+ Datei</button></div>${items.map((m, mi) => `<div class="material-editor-item" data-material-item data-kind="${key}" data-material-index="${mi}">${field('Titel', m.title, 'matTitle')}${field('Beschreibung', m.note, 'matNote', 'textarea')}${field('Datei-/Web-URL', m.url, 'matUrl')}<label class="ux-field"><span>PDF, Bild oder Präsentation hochladen</span><input type="file" accept="application/pdf,image/*,.ppt,.pptx,.odp" data-media-upload data-target="matUrl"></label></div>`).join('')}</div>`; }
        function readAll(name, d, box) {
            $$('[data-index]', box).forEach(row => {
                const x = d[+row.dataset.index];
                $$('[data-k]', row).forEach(el => { const k = el.dataset.k; if (!k || ['skillName', 'sectionTitle', 'sectionItems', 'diseaseName', 'diseaseSymptoms', 'diseaseMedications', 'diseaseInfo', 'diseasePhysiology', 'diseaseFindings', 'diseaseCave', 'diseaseSourceUrl', 'diseaseSourceLabel', 'matTitle', 'matNote', 'matUrl'].includes(k))
                    return; let v = el.type === 'checkbox' ? el.checked : el.value; if (['topics', 'tags'].includes(k))
                    v = String(v).split(',').map(s => s.trim()).filter(Boolean); if (k === 'capacity')
                    v = Number(v) || 10; if (k === 'featureRank')
                    v = Math.max(1, Number(v) || 1); x[k] = v; });
                if (name === 'meetings') {
                    x.files = [...row.querySelectorAll('[data-material-item][data-kind="files"]')].map(m => ({ title: $('[data-k="matTitle"]', m)?.value || '', note: $('[data-k="matNote"]', m)?.value || '', url: $('[data-k="matUrl"]', m)?.value || '' }));
                }
                if (name === 'algorithms') {
                    x.steps = [...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el => el.value.trim()).filter(Boolean);
                    x.materials = x.materials || { background: [], checklists: [] };
                    ['background', 'checklists'].forEach(kind => { x.materials[kind] = [...row.querySelectorAll(`[data-material-item][data-kind="${kind}"]`)].map(m => ({ title: $('[data-k="matTitle"]', m)?.value || '', note: $('[data-k="matNote"]', m)?.value || '', url: $('[data-k="matUrl"]', m)?.value || '' })); });
                }
                else if (name === 'skills') {
                    x.skills = [...row.querySelectorAll('[data-skill-index]')].filter(el => el.classList.contains('skill-editor-card')).map(sk => ({ name: $('[data-k="skillName"]', sk)?.value || '', sections: [...sk.querySelectorAll('.section-editor-card')].map(sec => ({ title: $('[data-k="sectionTitle"]', sec)?.value || '', items: [...sec.querySelectorAll('[data-list-item]')].map(el => el.value.trim()).filter(Boolean) })) }));
                }
                else if (name === 'differential') {
                    x.questions = [...row.querySelectorAll('[data-list-key="questions"] [data-list-item]')].map(el => el.value.trim()).filter(Boolean);
                    x.redflags = [...row.querySelectorAll('[data-list-key="redflags"] [data-list-item]')].map(el => el.value.trim()).filter(Boolean);
                    x.causes = [...row.querySelectorAll('.disease-editor-card')].map(c => ({ name: $('[data-k="diseaseName"]', c)?.value || '', symptoms: $('[data-k="diseaseSymptoms"]', c)?.value || '', medications: $('[data-k="diseaseMedications"]', c)?.value || '', info: $('[data-k="diseaseInfo"]', c)?.value || '', physiology: $('[data-k="diseasePhysiology"]', c)?.value || '', findings: $('[data-k="diseaseFindings"]', c)?.value || '', cave: $('[data-k="diseaseCave"]', c)?.value || '', sourceUrl: $('[data-k="diseaseSourceUrl"]', c)?.value || '', sourceLabel: $('[data-k="diseaseSourceLabel"]', c)?.value || '' })).filter(c => c.name);
                }
                else if (name === 'abcde') {
                    ['checks', 'actions', 'pitfalls'].forEach(k => x[k] = [...row.querySelectorAll(`[data-list-key="${k}"] [data-list-item]`)].map(el => el.value.trim()).filter(Boolean));
                }
                else if (name === 'guide')
                    x.steps = [...row.querySelectorAll('[data-list-key="steps"] [data-list-item]')].map(el => el.value.trim()).filter(Boolean);
                if (row.querySelector('.ost-related-editor'))
                    x.related = [...row.querySelectorAll('[data-rel-type][data-rel-id]:checked')].map(el => ({ type: el.dataset.relType, id: el.dataset.relId }));
                if (!x.id)
                    x.id = (x.title || x.name || 'item').toLowerCase().replace(/[^a-z0-9äöü]+/gi, '-') + '-' + Date.now();
            });
        }
        function blank(n) { if (n === 'meetings')
            return { id: 'meeting-' + Date.now(), title: 'Neue Dienstbesprechung', date: new Date().toISOString().slice(0, 10), category: 'Fortbildung', speaker: '', summary: '', files: [] }; if (n === 'skills')
            return { name: 'Neue Kategorie', skills: [] }; if (n === 'abcde')
            return { id: 'x-' + Date.now(), key: 'X', title: 'Neuer Bereich', checks: [], actions: [], pitfalls: [] }; if (n === 'differential')
            return { id: 'symptom-' + Date.now(), title: 'Neues Leitsymptom', group: 'Weitere', icon: '🩺', questions: [], redflags: [], causes: [] }; if (n === 'events')
            return { id: 'event-' + Date.now(), title: 'Neuer Termin', date: new Date().toISOString().slice(0, 10), time: '18:00', location: '', category: 'Simulationstraining', capacity: 10, attendees: [] }; if (n === 'algorithms')
            return { id: 'algorithm-' + Date.now(), title: 'Neuer Algorithmus', icon: '📋', category: '', stand: '', steps: [], source: '', sourceUrl: '', materials: { background: [], checklists: [] } }; if (n === 'articles')
            return { id: 'article-' + Date.now(), title: 'Neuer Artikel', authors: '', journal: '', year: new Date().getFullYear(), doi: '', topics: [], tags: [], featureRank: 1, type: 'Fachartikel', read: '', access: 'oa', level: 'rs-nfs', language: 'de', license: '', why: '', publisherUrl: '', freeUrl: '', featured: false, added: new Date().toISOString().slice(0, 10), archived: false }; if (n === 'changes')
            return { id: 'change-' + Date.now(), title: 'Neue Lehrmeinungsänderung', category: '', date: new Date().toISOString().slice(0, 10), old: '', new: '', source: '', validity: '', imageUrl: '' }; if (n === 'guide')
            return { id: 'guide-' + Date.now(), title: 'Neuer Schritt', icon: '🖥️', steps: [] }; return { id: 'new-' + Date.now(), title: 'Neuer Eintrag' }; }
        const editorGroups = [
            { id: 'wissen', title: 'Wissen', icon: ostIcon('anatomy'), items: ['modules:anatomy', 'differential', 'modules:befund', 'jump:materialien'] },
            { id: 'training', title: 'Training', icon: ostIcon('training'), items: ['skills', 'modules:mpg', 'modules:checklists'] },
            { id: 'materialien', title: 'Materialien', icon: ostIcon('book'), items: ['algorithms:guidelines', 'modules:material-checklists', 'algorithms:mnemonics', 'articles'] },
            { id: 'termine', title: 'Termine', icon: ostIcon('calendar'), items: ['events', 'attendance'] },
            { id: 'dienstbesprechungen', title: 'Besprechungen & Vorträge', icon: ostIcon('users'), items: ['meetings'] },
            { id: 'lehrmeinung', title: 'Lehrmeinungsänderungen', icon: ostIcon('changes'), items: ['changes'] },
            { id: 'aktuelles', title: 'Aktuelles', icon: ostIcon('news'), items: ['news'] },
            { id: 'literatur', title: 'Literatur & Lesetipps', icon: ostIcon('book'), items: ['articles'] }
        ];
        const extraLabels = { 'modules:anatomy': ['Anatomie & Physiologie', ostIcon('anatomy')], 'modules:befund': ['Fachbegriffe', ostIcon('dictionary')], 'modules:mpg': ['Geräte', ostIcon('device')], 'modules:checklists': ['Übungschecklisten', ostIcon('checklist')], 'modules:material-checklists': ['Checklisten', ostIcon('checklist')], 'jump:materialien': ['Materialien', ostIcon('book')], 'algorithms:guidelines': ['Leitlinien', ostIcon('guideline')], 'algorithms:mnemonics': ['Merkhilfen & Schemata', ostIcon('notes')], algorithms: ['Leitlinien & Merkhilfen', ostIcon('notes')], differential: ['Krankheitsbilder', ostIcon('heart')], skills: ['Skills', ostIcon('training')], articles: ['Literatur-Archiv', ostIcon('book')] };
        let moduleRequested = 'anatomy', requestedEditorGroup = 'wissen';
        const groupedEditorMenu = document.createElement('div');
        groupedEditorMenu.className = 'editor-grouped-menu ost-editor-workflow cf551-editor-workflow';
        const editorTopLevel = ['wissen', 'training', 'materialien', 'termine', 'dienstbesprechungen', 'lehrmeinung'];
        const editorGroupTile = g => `<button type="button" class="cf555-editor-main-tile" data-editor-main="${g.id}" aria-label="${esc(g.title)}" aria-pressed="false"><span class="cf555-editor-icon">${g.icon}</span><strong>${esc(g.id === 'lehrmeinung' ? 'Lehrmeinung' : g.title)}</strong></button>`;
        groupedEditorMenu.innerHTML = `<nav class="cf555-editor-main-menu" aria-label="Redaktion: Hauptbereiche">${editorTopLevel.map(id => editorGroupTile(editorGroups.find(g => g.id === id))).join('')}</nav><nav class="cf555-editor-extras" aria-label="Weitere Redaktionsinhalte">${['aktuelles', 'literatur'].map(id => editorGroupTile(editorGroups.find(g => g.id === id))).join('')}</nav><div class="cf550-editor-choice" hidden><label for="cf550-editor-group-picker">Bereich auswählen</label><select id="cf550-editor-group-picker" data-editor-group-picker>${editorGroups.map(g => `<option value="${g.id}">${g.title}</option>`).join('')}</select></div><section class="cf562-editor-organs" data-editor-organs hidden><h3>1. Organgruppe</h3><nav class="cf562-editor-organ-grid" aria-label="Organgruppe für Wissen wählen">${CF_TOPICS.map(t => `<button type="button" class="cf562-editor-organ" data-editor-organ="${esc(t.id)}" aria-pressed="false">${ostIcon(t.icon)}<span>${esc(t.label)}</span></button>`).join('')}</nav></section><h3 class="cf562-editor-subheading" data-editor-subheading hidden>2. Inhalte</h3><nav class="editor-subgroup-tiles" aria-label="Unterbereiche"></nav>`;
        $('.editor-dashboard').insertBefore(groupedEditorMenu, $('.editor-content'));
        $('.editor-dashboard').after($('.admin-tools'));
        const syncGroupedEditorMenu = tab => {
            const belongs = g => g.items.includes(tab) || (tab === 'modules' && g.items.includes('modules:' + moduleRequested)) || (tab === 'algorithms' && g.items.some(id => id.startsWith('algorithms:')));
            const group = editorGroups.find(g => g.id === requestedEditorGroup && belongs(g)) || editorGroups.find(belongs) || editorGroups[0];
            requestedEditorGroup = group.id;
            const groupPicker = groupedEditorMenu.querySelector('[data-editor-group-picker]');
            if (groupPicker)
                groupPicker.value = group.id;
            groupedEditorMenu.querySelectorAll('[data-editor-main]').forEach(tile => {
                const active = tile.dataset.editorMain === group.id;
                tile.classList.toggle('active', active);
                tile.setAttribute('aria-pressed', String(active));
            });
            const organSection = groupedEditorMenu.querySelector('[data-editor-organs]');
            organSection.hidden = group.id !== 'wissen';
            groupedEditorMenu.querySelector('[data-editor-subheading]').hidden = group.id !== 'wissen';
            groupedEditorMenu.querySelectorAll('[data-editor-organ]').forEach(tile => {
                const active = group.id === 'wissen' && tile.dataset.editorOrgan === editorKnowledgeOrgan;
                tile.classList.toggle('active', active);
                tile.setAttribute('aria-pressed', String(active));
            });
            const nav = $('.editor-subgroup-tiles', groupedEditorMenu);
            nav.hidden = group.items.length <= 1;
            nav.innerHTML = group.items.length <= 1 ? '' : group.items.map(id => {
                const item = tabs.find(t => t[0] === id) || (extraLabels[id] ? [id, extraLabels[id][0]] : null);
                if (!item)
                    return '';
                const active = id === 'modules:' + moduleRequested && tab === 'modules' || id === 'algorithms:' + materialAlgorithmsView && tab === 'algorithms' || id === 'differential' && tab === 'differential' || id === tab && tab !== 'differential';
                const label = extraLabels[id]?.[0] || item[1];
                return `<button type="button" class="editor-subgroup-tile ${active ? 'active' : ''}" data-editor-subtab="${id}" aria-pressed="${String(active)}"><span>${extraLabels[id]?.[1] || tabIcons[id] || ostIcon('book')}</span><strong>${esc(label)}</strong></button>`;
            }).join('');
        };
        const navigateEditorTab = id => {
            if (id === 'jump:materialien') {
                requestedEditorGroup = 'materialien';
                groupedEditorMenu.querySelector('[data-editor-group-picker]').value = 'materialien';
                id = 'algorithms:guidelines';
            }
            if (id.startsWith('algorithms:')) {
                materialAlgorithmsView = id.split(':')[1] === 'mnemonics' ? 'mnemonics' : 'guidelines';
                $('.editor-nav [data-tab="algorithms"]')?.click();
                return;
            }
            if (id === 'differential') {
                $('.editor-nav [data-tab="differential"]')?.click();
                return;
            }
            if (id.startsWith('modules:')) {
                moduleRequested = id.split(':')[1];
                $('.editor-nav [data-tab="modules"]')?.click();
                // Der Editor wird ueber die Navigation mit der neuen Modulart geladen.
            }
            else
                $('.editor-nav [data-tab="' + id + '"]')?.click();
        };
        const selectEditorGroup = id => {
            const group = editorGroups.find(g => g.id === id);
            if (!group)
                return;
            requestedEditorGroup = group.id;
            navigateEditorTab(group.items[0]);
        };
        groupedEditorMenu.querySelector('[data-editor-group-picker]').addEventListener('change', e => selectEditorGroup(e.target.value));
        groupedEditorMenu.addEventListener('click', e => {
            const main = e.target.closest('[data-editor-main]');
            if (main) {
                selectEditorGroup(main.dataset.editorMain);
                return;
            }
            const organTile = e.target.closest('[data-editor-organ]');
            if (organTile) {
                editorKnowledgeOrgan = organTile.dataset.editorOrgan;
                groupedEditorMenu.querySelectorAll('[data-editor-organ]').forEach(tile => {
                    const active = tile.dataset.editorOrgan === editorKnowledgeOrgan;
                    tile.classList.toggle('active', active);
                    tile.setAttribute('aria-pressed', String(active));
                });
                if (editorKnowledgeOrganSetter) editorKnowledgeOrganSetter(editorKnowledgeOrgan);
                return;
            }
            const sub = e.target.closest('[data-editor-subtab]');
            if (sub)
                navigateEditorTab(sub.dataset.editorSubtab);
        });
        const mobilePick = document.createElement('div');
        mobilePick.className = 'editor-mobile-picker';
        mobilePick.innerHTML = `<label for="editor-mobile-select">Redaktionsbereich</label><select id="editor-mobile-select">${tabs.map(t => `<option value="${t[0]}">${t[1]}</option>`).join('')}</select>`;
        $('.editor-dashboard').insertBefore(mobilePick, $('.editor-content'));
        mobilePick.hidden = true;
        mobilePick.querySelector('select').onchange = e => $('.editor-nav [data-tab="' + e.target.value + '"]')?.click();
        $('.editor-nav').onclick = e => { const b = e.target.closest('[data-tab]'); if (!b)
            return; if (currentEditorState && currentEditorState.view !== 'attendance') {
            readAll(currentEditorState.name, currentEditorState.d, currentEditorState.box);
            editorDrafts.set(currentEditorState.name, currentEditorState.d);
        } editorKnowledgeOrganSetter = null;
        $$('.editor-nav-btn').forEach(x => x.classList.toggle('active', x === b)); if (mobilePick)
            mobilePick.querySelector('select').value = b.dataset.tab; syncGroupedEditorMenu(b.dataset.tab); draw(b.dataset.tab); };
        const hash = location.hash.replace('#', '');
        const initialTab = hash === 'literatur' ? 'articles' : hash && tabs.some(t => t[0] === hash) ? hash : 'differential';
        syncGroupedEditorMenu(initialTab);
        draw(initialTab);
    }
    async function administrationPage(){
      const root=$('[data-main]');
      const pin=sessionStorage.getItem('ost1020-editor-pin')||'';
      if(!ost576IsEditing() || !await verifyEditorPin(pin)){
        root.innerHTML='<section class="ost588-admin"><h1>Verwaltung</h1><p>Bitte die Bearbeitung auf der Startseite mit dem PIN freigeben.</p><a class="btn" href="index.html">Zur Startseite</a></section>';return;
      }
      root.innerHTML=`<section class="ost588-admin"><header><h1>Verwaltung</h1><a class="btn" href="index.html">Zur Startseite</a></header><p>Versionsverlauf, Datensicherungen, Fehlermeldungen und fachliche Prüffristen.</p>
        <nav class="ost588-admin-actions"><button class="btn" data-a="history">Versionsverlauf</button><button class="btn" data-a="backup">Backup erstellen</button><button class="btn" data-a="status">Backups ansehen</button><button class="btn" data-a="feedback">Fehlermeldungen</button><button class="btn" data-a="review">Prüffristen</button></nav><div class="ost588-admin-output" data-result role="status">Wähle eine Funktion.</div></section>`;
      const result=$('[data-result]',root);
      const request=async(path,options={})=>{
        const pin=sessionStorage.getItem('ost1020-editor-pin')||'';
        if(!ost576IsEditing()||!await verifyEditorPin(pin))throw Error('PIN-Freigabe abgelaufen.');
        if(!API)throw Error('Cloudflare-Worker nicht konfiguriert');
        const response=await fetch(API+path,{...options,headers:{'X-Admin-Pin':pin,'Content-Type':'application/json',...(options.headers||{})}});
        const data=await response.json();if(!response.ok)throw Error(data.error||'HTTP '+response.status);return data;
      };
      const failure=e=>result.textContent='Fehler: '+e.message;
      root.querySelectorAll('[data-a]').forEach(button=>button.onclick=async()=>{
        result.textContent='Lade …';
        try{
          const action=button.dataset.a;
          if(action==='backup'){
            if(!confirm('Jetzt eine Datensicherung erstellen?')){result.textContent='Abgebrochen.';return;}
            const d=await request('/admin/backup',{method:'POST'});result.textContent='Backup erstellt: '+d.key;
          }else if(action==='status'){
            const d=await request('/admin/backup-status');result.textContent=d.configured?(d.items||[]).map(x=>x.key+' ('+x.size+' Bytes)').join('\n')||'Keine Backups vorhanden.':'R2-Backup nicht konfiguriert.';
          }else if(action==='history'){
            result.innerHTML=`<h2>Versionsverlauf</h2><label>Sammlung <select data-collection>${['algorithms','events','changes','differential','knowledgeModules','skills','articles','news','meetings','site'].map(x=>`<option value="${x}">${x}</option>`).join('')}</select></label><button class="btn" data-load>Versionsverlauf laden</button><div data-versions></div>`;
            $('[data-load]',result).onclick=async()=>{
              try{const name=$('[data-collection]',result).value,d=await request('/admin/history?name='+encodeURIComponent(name));
                $('[data-versions]',result).innerHTML=(d.items||[]).map(v=>`<div class="admin-version-row"><span><strong>${esc(v.date)}</strong><small>${esc(v.message)}</small></span><button data-restore="${esc(v.sha)}">Wiederherstellen</button></div>`).join('')||'<p>Keine Versionen.</p>';
                result.querySelectorAll('[data-restore]').forEach(b=>b.onclick=async()=>{if(!confirm('Frühere Version wiederherstellen?'))return;try{await request('/admin/restore',{method:'POST',body:JSON.stringify({sha:b.dataset.restore,name})});result.textContent='Version wiederhergestellt.'}catch(e){failure(e)}});
              }catch(e){failure(e)}
            };
          }else if(action==='feedback'){
            const d=await request('/admin/feedback');result.innerHTML='<h2>Fehlermeldungen</h2>'+(d.items||[]).map(x=>`<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.createdAt)} · ${esc(x.status)}</small><p>${esc(x.message)}</p><button class="btn" data-complete="${esc(x.id)}">Erledigt</button></div>`).join('');
            result.querySelectorAll('[data-complete]').forEach(b=>b.onclick=async()=>{try{await request('/admin/feedback/'+encodeURIComponent(b.dataset.complete),{method:'PATCH',body:JSON.stringify({status:'erledigt'})});b.disabled=true;b.textContent='Abgeschlossen'}catch(e){failure(e)}});
          }else if(action==='review'){
            const d=await request('/admin/review'),today=new Date().toISOString().slice(0,10);
            result.innerHTML='<h2>Fachliche Prüffristen</h2>'+(d.items||[]).filter(x=>!x.reviewDue||x.reviewDue<=today).map(x=>`<div class="admin-report"><strong>${esc(x.title)}</strong><small>${esc(x.type)} · Fällig: ${esc(x.reviewDue||'Nicht festgelegt')} · ${esc(x.reviewOwner||'Keine Zuständigkeit')}</small></div>`).join('')||'<p>Keine fälligen Prüffristen.</p>';
          }
        }catch(e){failure(e)}
      });
    }
    // ------------------------------------------------------------------------
    // Anwendungsstart und Routing
    // ------------------------------------------------------------------------
    async function init() {
        ost576SyncEdit();
        chrome();
        syncHeaderTitle();
        rememberPage();
        if (['guide', 'faq'].includes(page)) {
            location.replace('training.html');
            return;
        }
        if (page === 'home')
            await home();
        else if (page === 'wissen')
            await wissenPage();
        else if (page === 'topics')
            await topicHub();
        else if (page === 'modules') {
            if (new URLSearchParams(location.search).get('bereich') === 'pharm') {
                location.replace('themen-uebersicht.html');
                return;
            }
            await modulePage();
        }
        else if (page === 'training')
            await trainingPage();
        else if (page === 'guidelines')
            await guidelinesPage();
        else if (page === 'faq')
            await faqPage();
        else if (page === 'news')
            await newsPage();
        else if (page === 'literature')
            await literature();
        else if (page === 'abcde')
            await abcdePage();
        else if (page === 'differential') {
            location.replace('themen-uebersicht.html');
            return;
        }
        else if (page === 'skills')
            await skills();
        else if (page === 'algorithms') {
            location.replace('materialien.html');
            return;
        }
        else if (page === 'changes')
            await changesPage();
        else if (page === 'events')
            await eventsPage();
        else if (page === 'guide')
            await guidePage();
        else if (page === 'materials')
            await materialHub();
        else if (page === 'meetings')
            await meetingsPage();
        else if (page === 'admin')
            await administrationPage();
        else if (page === 'editor')
            location.replace('administration.html');
        cleanupDuplicatePageHeading();
    }
    window.addEventListener('DOMContentLoaded', init);
})();