# OST 1020 – Checklisten und Layout

## Änderungen
- Die Wortmarke „OST 1020“ wird rechts oben in der Kopfzeile ausgeblendet.
- Wissensmenü: feste Symbolspalte und flexible Textspalte; verhindert schmale, blau hinterlegte Textkästchen und Titelüberläufe.
- Algorithmen/Merkhilfen: reguläres statt fettes Schriftgewicht bei Einträgen.
- Training: neuer Unterpunkt **Checklisten**, erreichbar über `themen.html?bereich=checklists`.
- Redaktion → Training → Checklisten: neuen Eintrag erstellen, Titel, Kategorie, Kurzbeschreibung und Hinweise pflegen, PDF hochladen und Datensatz speichern.
- Öffentliche Checklistenübersicht: Suche, Beschreibung und direkter PDF-Link; Entwürfe erscheinen nicht in der regulären Übersicht.

## Cloudflare und Datensicherung
- Kein neuer Worker-Endpunkt nötig, **wenn** der vorhandene Worker `POST /media` für PDFs sowie `knowledgeModules` unterstützt. Das enthaltene `worker.js` besitzt diese Funktionen.
- PDFs landen über die bestehende Medienroute in `assets/uploads/` des GitHub-Repositories. Die hochgeladenen Dateien sind bei Veröffentlichung öffentlich abrufbar; keine personenbezogenen Daten hochladen.
- Die PDF-Datei wird nach dem Upload nicht automatisch mit dem Eintrag verknüpft, bevor der Eintrag gespeichert wurde.
- `data/knowledgeModules.json` vor dem Deployment mit dem produktiven Stand vergleichen; das Archiv ersetzt keine produktiven Backups.
- Medienlink ist im Feld `documentUrl` gespeichert; alte Datensätze bleiben unverändert.

## Prüfung
- JavaScript-Syntax, JSON-Validität und ZIP-Integrität geprüft. Ein realer Upload-Test mit Cloudflare und eine visuelle Geräteprüfung stehen aus.
