from pathlib import Path
import re
root=Path('/mnt/data/ost_revision')
p=root/'portal.js'; s=p.read_text()
# Keep the topbar in normal flow on all pages. Remove the code that marks pages for floating header.
s=s.replace("if(topbar&&page!=='home'){document.body.classList.add('subpage-topbar')}","if(topbar&&page!=='home'){document.body.classList.add('ost-compact-header')}")
# Add semantic identifiers to dynamically generated content containers to share consistent rules.
s=s.replace('class="ost-link-directory"','class="ost-link-directory ost-tonal-directory"')
s=s.replace('class="list"','class="list ost-tonal-list"')
s=s.replace('class="skill-grid"','class="skill-grid ost-tonal-grid"')
s=s.replace('class="scheme-grid"','class="scheme-grid ost-tonal-grid"')
s=s.replace('class="diag-sections"','class="diag-sections ost-tonal-grid"')
s=s.replace('class="meeting-grid"','class="meeting-grid ost-tonal-grid"')
s=s.replace('class="editor-subgroup-tiles"','class="editor-subgroup-tiles ost-tonal-grid"')
# Prevent the header title from taking room on the home screen; home uses own title.
# Avoid lost semantic page headings: only remove the large decorative title card for directory-style pages,
# and replace with compact accessible heading. Other content pages keep their heading for orientation.
s=s.replace('<section class="page-banner"><h1>Wissen</h1></section><div class="ost-link-directory', '<h1 class="ost-visually-hidden">Wissen</h1><div class="ost-link-directory')
s=s.replace('<section class="page-banner"><h1>Training</h1></section><div class="ost-link-directory', '<h1 class="ost-visually-hidden">Training</h1><div class="ost-link-directory')
# Wording
s=s.replace("['algorithms','Algorithmen & Schemata']","['algorithms','Algorithmen & Merkhilfen']")
s=s.replace("['algorithms','Algorithmen & Schemata'", "['algorithms','Algorithmen & Merkhilfen'")
# Ensure icon selectors work consistently on client-side generated cards (no incorrect selectors).
p.write_text(s)

css = root/'portal.css'
c=css.read_text()
c += r'''

/* OST 1020 – cohesive design system, Oct 2026. Final overrides to retire old floating header styles. */
:root{
 --ost-ink:#173550;--ost-border:#dce6ed;
 --ost-blue:#f0f7fc;--ost-mint:#f0f9f5;--ost-lilac:#f7f3fb;
 --ost-sand:#fdf8f0;--ost-rose:#fdf3f4;
}
.ost-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}
/* Navigation is a real, slim row in the layout, not a floating overlay. */
@media(max-width:1099px){
 body.app-shell:not(.page-home) .topbar,
 body.app-shell:not(.page-home).subpage-topbar .topbar{
  position:relative!important;top:auto!important;left:auto!important;right:auto!important;
  width:100%!important;min-width:0!important;height:64px!important;
  background:rgba(255,255,255,.96)!important;border:0!important;border-bottom:1px solid var(--ost-border)!important;
  box-shadow:none!important;backdrop-filter:none!important;pointer-events:auto!important;z-index:30!important;
 }
 body.app-shell:not(.page-home) .topbar-inner,
 body.app-shell:not(.page-home).subpage-topbar .topbar-inner{
  display:flex!important;justify-content:flex-start!important;align-items:center!important;
  width:100%!important;min-height:64px!important;height:64px!important;
  padding:8px 15px!important;gap:10px!important;margin:0!important;
 }
 body.app-shell:not(.page-home) .topbar .top-action{
  display:grid!important;place-items:center!important;position:static!important;
  width:43px!important;height:43px!important;min-width:43px!important;
  border:1px solid #dae6ef!important;background:#f5f9fc!important;border-radius:13px!important;
  box-shadow:none!important;backdrop-filter:none!important;pointer-events:auto!important;
 }
 body.app-shell:not(.page-home) .topbar .brand,body.app-shell:not(.page-home) .topbar .header-editor-link{display:none!important}
 body.app-shell:not(.page-home) .main,
 body.app-shell:not(.page-home).subpage-topbar .main{padding-top:16px!important;scroll-padding-top:12px!important}
}
/* Contrast-conscious muted 5-color palette, applied to *every* public menu/list type. */
body.app-shell .ost-main-destinations>a,
body.app-shell .ost-link-directory>a,
body.app-shell .ost-tonal-list>.row-card,
body.app-shell .scheme-grid>.scheme-tile,
body.app-shell .skill-grid>.skill-card,
body.app-shell .meeting-grid>.meeting-tile,
body.app-shell .diag-sections>.diag-group,
body.app-shell .ost-checklist-list>.ost-checklist-card,
body.app-shell .editor-primary-groups>button,
body.app-shell .editor-subgroup-tiles>button{
 border:1px solid var(--ost-border)!important;border-radius:16px!important;
 box-shadow:none!important;color:var(--ost-ink)!important;
 transition:background .15s ease,border-color .15s ease!important;
}
body.app-shell .ost-main-destinations>a:nth-child(5n+1),body.app-shell .ost-link-directory>a:nth-child(5n+1),body.app-shell .ost-tonal-list>.row-card:nth-child(5n+1),body.app-shell .scheme-tile:nth-child(5n+1),body.app-shell .skill-card:nth-child(5n+1),body.app-shell .meeting-tile:nth-child(5n+1),body.app-shell .diag-group:nth-child(5n+1),body.app-shell .ost-checklist-card:nth-child(5n+1),body.app-shell .editor-primary-groups>button:nth-child(5n+1),body.app-shell .editor-subgroup-tiles>button:nth-child(5n+1){background:var(--ost-blue)!important}
body.app-shell .ost-main-destinations>a:nth-child(5n+2),body.app-shell .ost-link-directory>a:nth-child(5n+2),body.app-shell .ost-tonal-list>.row-card:nth-child(5n+2),body.app-shell .scheme-tile:nth-child(5n+2),body.app-shell .skill-card:nth-child(5n+2),body.app-shell .meeting-tile:nth-child(5n+2),body.app-shell .diag-group:nth-child(5n+2),body.app-shell .ost-checklist-card:nth-child(5n+2),body.app-shell .editor-primary-groups>button:nth-child(5n+2),body.app-shell .editor-subgroup-tiles>button:nth-child(5n+2){background:var(--ost-mint)!important}
body.app-shell .ost-main-destinations>a:nth-child(5n+3),body.app-shell .ost-link-directory>a:nth-child(5n+3),body.app-shell .ost-tonal-list>.row-card:nth-child(5n+3),body.app-shell .scheme-tile:nth-child(5n+3),body.app-shell .skill-card:nth-child(5n+3),body.app-shell .meeting-tile:nth-child(5n+3),body.app-shell .diag-group:nth-child(5n+3),body.app-shell .ost-checklist-card:nth-child(5n+3),body.app-shell .editor-primary-groups>button:nth-child(5n+3),body.app-shell .editor-subgroup-tiles>button:nth-child(5n+3){background:var(--ost-lilac)!important}
body.app-shell .ost-main-destinations>a:nth-child(5n+4),body.app-shell .ost-link-directory>a:nth-child(5n+4),body.app-shell .ost-tonal-list>.row-card:nth-child(5n+4),body.app-shell .scheme-tile:nth-child(5n+4),body.app-shell .skill-card:nth-child(5n+4),body.app-shell .meeting-tile:nth-child(5n+4),body.app-shell .diag-group:nth-child(5n+4),body.app-shell .ost-checklist-card:nth-child(5n+4),body.app-shell .editor-primary-groups>button:nth-child(5n+4),body.app-shell .editor-subgroup-tiles>button:nth-child(5n+4){background:var(--ost-sand)!important}
body.app-shell .ost-main-destinations>a:nth-child(5n),body.app-shell .ost-link-directory>a:nth-child(5n),body.app-shell .ost-tonal-list>.row-card:nth-child(5n),body.app-shell .scheme-tile:nth-child(5n),body.app-shell .skill-card:nth-child(5n),body.app-shell .meeting-tile:nth-child(5n),body.app-shell .diag-group:nth-child(5n),body.app-shell .ost-checklist-card:nth-child(5n),body.app-shell .editor-primary-groups>button:nth-child(5n),body.app-shell .editor-subgroup-tiles>button:nth-child(5n){background:var(--ost-rose)!important}
body.app-shell .editor-primary-groups>button.active,body.app-shell .editor-subgroup-tiles>button.active{background:#e9f2f9!important;border-color:#a6c9dd!important;box-shadow:inset 0 0 0 1px #c2dbea!important}
/* Uniform icon tiles; never a background behind the text itself. */
body.app-shell .ost-link-directory>a>span:first-child,body.app-shell .row-card>.row-icon,body.app-shell .skill-card>.skill-icon,
body.app-shell .editor-subgroup-tile>span:first-child,body.app-shell .editor-primary-groups button>span:first-child{
 display:grid!important;place-items:center!important;border-radius:11px!important;
 background:rgba(255,255,255,.65)!important;border:1px solid rgba(191,208,221,.30)!important;
 flex-shrink:0!important;color:#315d7c!important;
}
body.app-shell .ost-link-directory>a .directory-item-name,body.app-shell .ost-link-directory>a strong,
body.app-shell .row-card strong,body.app-shell .skill-card strong,body.app-shell .scheme-tile strong,
body.app-shell .scheme-tile h2,body.app-shell .diag-group-copy strong,
body.app-shell .editor-primary-groups button strong,body.app-shell .editor-subgroup-tiles button strong{
 font-weight:450!important;line-height:1.38!important;letter-spacing:0!important;
}
body.app-shell .ost-link-directory>a .directory-item-name{background:none!important;border:0!important;border-radius:0!important;padding:0!important}
/* Simple consistent secondary/detail presentation. Don't alter medical meaning colours in old/new or red-flag blocks. */
body.app-shell .page-banner{box-shadow:none!important;border:1px solid var(--ost-border)!important;border-radius:17px!important;background:rgba(255,255,255,.8)!important}
body.app-shell .page-banner h1{font-size:clamp(1.35rem,3.2vw,1.85rem)!important;line-height:1.2!important;letter-spacing:-.025em!important}
body.app-shell .diag-group>summary{background:transparent!important}
body.app-shell .diag-group .diag-group-badge{background:rgba(255,255,255,.72)!important}
body.app-shell .skill-icon svg,body.app-shell .row-icon svg,body.app-shell .ost-outline-icon{width:24px;height:24px;max-width:100%}
body.app-shell .ost-tonal-list,body.app-shell .ost-tonal-grid,body.app-shell .ost-link-directory{gap:9px!important}
body.app-shell .editor-subgroup-tile,body.app-shell .editor-primary-groups button{overflow:hidden!important}
body.app-shell .editor-subgroup-tile>span:first-child,body.app-shell .editor-primary-groups button>span:first-child{width:38px!important;height:38px!important;min-width:38px!important}
body.app-shell .editor-subgroup-tile strong{overflow-wrap:normal!important;word-break:normal!important;hyphens:auto!important}
@media(max-width:650px){
 body.app-shell .editor-subgroup-tile{padding:10px!important;gap:8px!important;min-height:64px!important}
 body.app-shell .editor-subgroup-tile strong{font-size:.84rem!important}
 body.app-shell .page-banner{padding:14px!important}
}
'''
css.write_text(c)
# Update cache busting to make changes visible despite previous stale CSS.
for f in root.glob('*.html'):
 s=f.read_text()
 s=re.sub(r'portal\.css\?v=\d+','portal.css?v=501',s)
 s=re.sub(r'portal\.js\?v=\d+','portal.js?v=501',s)
 f.write_text(s)
(root/'UPDATE-DESIGN-501.md').write_text('''# OST 1020 – Vereinheitlichung 501

- Zurück/Home auf kleinen Bildschirmen in einer schmalen **nicht schwebenden** Kopfzeile; kein Überdecken von iOS-Statusleiste oder Seiteninhalten.
- Die gleiche dezente Farbpalette für Hauptnavigation, Wissen/Training, Diagnosekategorien, Algorithmus-, Skill- und weitere Listen sowie Redaktionsmenüs.
- Schriften, Kachelradien, Kontursymbole und Abstände vereinheitlicht.
- Medizinische Warn- und Alt/Neu-Farbcodierungen bleiben unterscheidbar.
- Keine Änderungen an Datensammlungen, Worker, APIs oder Uploads.

Deployment: Produktivdaten vor Austausch sichern. Alte CSS-Caches werden über ?v=501 umgangen. Auf iOS die Website ggf. schließen und erneut öffnen.
''')
