OST 1020 – Änderungen dieser Version

- Handy: keine horizontal wischbare Kopf-Navigation mehr; Hauptbereiche als kompakte Kacheln auf der Startseite.
- Kopfzeile: nicht sticky, damit beim Seitenwechsel kein springender Menüblock erscheint.
- Redaktion über separaten Button in der Kopfzeile (Handy) / Seitenleiste (PC).
- PC-Seitenleiste: schmalere Symbole ohne hellblaue Symbolhintergründe, mehr Platz zum Umbruch längerer Titel.
- Reduzierte Schriftgewichte für Listen und Algorithmen; Algorithmen & Merkhilfen im Wissen-Menü.
- Training: MPG-Informationen als zusätzlicher Bereich; Redaktion > Training > MPG-Informationen.
- MPG-Daten werden als knowledgeModules mit module='mpg' gespeichert. Der neue Entwurfs-Mustereintrag ist im öffentlichen Bereich nicht sichtbar. Bei Bedarf in der Redaktion ausfüllen und veröffentlichen.
- Vor Deployment produktive data/*.json und Worker-Daten sichern; neue Beispiel-JSON nicht über neuere produktive Inhalte kopieren.
- Die Worker-Schnittstelle knowledgeModules ist bereits vorhanden; kein Worker-Code geändert. Für öffentliche MPG-Inhalte braucht es korrekte Speicherung im Worker.
- Syntax, JSON und ZIP wurden geprüft; kein Live-Gerätetest oder produktiver Worker-Test.
