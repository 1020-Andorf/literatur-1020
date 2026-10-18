from pathlib import Path
p=Path('/mnt/data/ost_revision/portal.js');s=p.read_text()
s=s.replace(" question:'<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-1.3 1-1.9 1.5-1.9 3M12 17.5v.5\"/>'", " question:'<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.5 9a2.7 2.7 0 1 1 4.4 2.1c-1.3 1-1.9 1.5-1.9 3M12 17.5v.5\"/>',\n changes:'<rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"/><path d=\"M9 8h6M9 12h5M9 16h3\"/><path d=\"m15 15 2 2 4-4\"/>',\n anatomy:'<path d=\"M12 21s-8-4.8-9-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-1 5.2-9 10-9 10Z\"/><path d=\"M3 12h5l2-3 3 6 2-3h6\"/>',\n edit:'<path d=\"M12 4H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-7\"/><path d=\"m16 5 3-3 3 3-9 9-4 1 1-4 9-9\"/>',\n news:'<path d=\"M3 10v4h3l9 5V5L6 10H3Z\"/><path d=\"M7 14l2 6h3M19 9a5 5 0 0 1 0 6\"/>',\n folder:'<path d=\"M3 7a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9H3Z\"/>',\n check:'<path d=\"m4 12 5 5L20 6\"/>',\n group:'<path d=\"M4 20v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>'")
# replace specific home and main sidebar symbols
s=s.replace("${ostIcon('refresh')}<span>Lehrmeinung", "${ostIcon('changes')}<span>Lehrmeinung")
s=s.replace("{id:'changes',label:'Lehrmeinungsänderungen',href:'lehrmeinung.html',emoji:'🔄'", "{id:'changes',label:'Lehrmeinungsänderungen',href:'lehrmeinung.html',icon:ostIcon('changes')")
s=s.replace("{id:'meetings',label:'Dienstbesprechungen',href:'dienstbesprechungen.html',emoji:'🗣️'", "{id:'meetings',label:'Dienstbesprechungen',href:'dienstbesprechungen.html',icon:ostIcon('users')")
# editor group icons & tab icons are SVG rather than emoji, no new server changes
s=s.replace("const tabIcons={abcde:'🩺',algorithms:'📋',news:'📣',meetings:'🗣️',differential:'🔎',articles:'📚',changes:'🔄',guide:'🖥️',skills:'🎓',attendance:'👥',events:'📅',modules:'🧩'};", "const tabIcons={abcde:ostIcon('notes'),algorithms:ostIcon('notes'),news:ostIcon('news'),meetings:ostIcon('users'),differential:ostIcon('search'),articles:ostIcon('book'),changes:ostIcon('changes'),guide:ostIcon('screen'),skills:ostIcon('training'),attendance:ostIcon('group'),events:ostIcon('calendar'),modules:ostIcon('book')};")
for old,new in [( "title:'Aktuelles',icon:'📣'", "title:'Aktuelles',icon:ostIcon('news')"),("title:'Organisation',icon:'🗣️'", "title:'Organisation',icon:ostIcon('users')"),("title:'Termine',icon:'📅'", "title:'Termine',icon:ostIcon('calendar')"),("title:'Training',icon:'🎓'", "title:'Training',icon:ostIcon('training')"),("title:'Wissen',icon:'📚'", "title:'Wissen',icon:ostIcon('book')")]:s=s.replace(old,new)
for a,b in [("['Anatomie & Physiologie','🫀']","['Anatomie & Physiologie',ostIcon('anatomy')]"),("['Befundwörterbuch','📖']","['Befundwörterbuch',ostIcon('dictionary')]"),("['Pharmakologie','💊']","['Pharmakologie',ostIcon('pill')]"),("['MPG-Informationen','🩺']","['MPG-Informationen',ostIcon('device')]"),("['Checklisten','📄']","['Checklisten',ostIcon('checklist')]")]:s=s.replace(a,b)
# fix module headings / page-nav simple
s=s.replace("<span class=\"row-icon\">🔄</span>","<span class=\"row-icon\">${ostIcon('changes')}</span>")
# only icons in menu; keep data content unchanged
p.write_text(s)
css=Path('/mnt/data/ost_revision/portal.css')
css.write_text(css.read_text()+'''\n\n/* OCT 2026 – unified sections, minimal icon language, muted accents */
body.page-wissen .main>.page-banner,body.page-training .main>.page-banner,body.page-events .main>.page-banner{display:none!important}
body.page-wissen .main,body.page-training .main,body.page-events .main{padding-top:22px!important}
.ost-link-directory>a{transition:background .16s,border-color .16s;box-shadow:none!important}
.ost-link-directory>a:nth-child(5n+1){background:#f8fbfe!important;border-color:#e1eaf4!important}
.ost-link-directory>a:nth-child(5n+2){background:#f9fcfa!important;border-color:#e3ece5!important}
.ost-link-directory>a:nth-child(5n+3){background:#fdfbfe!important;border-color:#eae5f0!important}
.ost-link-directory>a:nth-child(5n+4){background:#fcfbf8!important;border-color:#eee9e0!important}
.ost-link-directory>a:nth-child(5n){background:#fffafa!important;border-color:#f0e5e5!important}
.ost-link-directory>a:hover{background:#f0f6fc!important}
.ost-link-directory .ost-outline-icon{width:25px!important;height:25px!important;flex-shrink:0}
.ost-link-directory .directory-item-name{font-weight:450!important}
/* consistent no-emoji editorial navigation */
.editor-primary-groups button,.editor-subgroup-tile{min-width:0;box-shadow:none!important;border:1px solid #e0e8ef!important;border-radius:16px!important;background:#fcfdff!important;color:#1d3a56!important}
.editor-primary-groups button:nth-child(5n+1),.editor-subgroup-tile:nth-child(5n+1){background:#f5f9fe!important}
.editor-primary-groups button:nth-child(5n+2),.editor-subgroup-tile:nth-child(5n+2){background:#f6faf8!important}
.editor-primary-groups button:nth-child(5n+3),.editor-subgroup-tile:nth-child(5n+3){background:#faf8fe!important}
.editor-primary-groups button:nth-child(5n+4),.editor-subgroup-tile:nth-child(5n+4){background:#fcfaf6!important}
.editor-primary-groups button.active,.editor-subgroup-tile.active{background:#edf5fc!important;border-color:#aac9df!important;box-shadow:inset 0 0 0 1px #d4e2ed!important}
.editor-primary-groups button span,.editor-subgroup-tile>span:first-child,.editor-nav-btn>span:first-child{display:flex;align-items:center;justify-content:center;flex:0 0 28px;color:#426b89}
.editor-primary-groups svg,.editor-subgroup-tile svg,.editor-nav-btn svg{display:block;width:23px;height:23px;max-width:100%}
.editor-primary-groups button strong,.editor-subgroup-tile strong,.editor-nav-btn strong{font-weight:450!important;line-height:1.36!important;min-width:0;overflow-wrap:anywhere}
.editor-primary-groups button{gap:8px!important}
.editor-subgroup-tile{gap:10px!important;padding:12px!important}
.editor-primary-groups button:focus-visible,.editor-subgroup-tile:focus-visible{outline:2px solid #477eac;outline-offset:2px}
.editor-group-subtitle{font-weight:600!important;color:#58738a!important}
.desktop-nav-group .simple-menu-icon svg,.desktop-nav-group .ds-icon svg{width:22px;height:22px}
body.page-changes .row-icon .ost-outline-icon{width:29px;height:29px}
@media(max-width:640px){
 body.page-wissen .main,body.page-training .main,body.page-events .main{padding-top:15px!important}
 .editor-primary-groups{gap:8px!important}
 .editor-primary-groups button{min-height:64px!important}
 .editor-subgroup-tile{min-height:56px!important}
 .editor-subgroup-tile strong{font-size:.88rem!important}
 .ost-link-directory>a{min-height:60px!important;padding:13px!important}
}
''')
# cache bump
for f in Path('/mnt/data/ost_revision').glob('*.html'):
 s=f.read_text();s=s.replace('portal.css?v=474','portal.css?v=475').replace('portal.js?v=474','portal.js?v=475');f.write_text(s)
