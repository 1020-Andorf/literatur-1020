# Wissensportal Rettungsdienst – GitHub Pages

Dieses Paket ist die überarbeitete mobile Wissensplattform für das Trainingsnetzwerk OST Andorf.

## Bereiche
- Literatursammlung
- ABCDE-Schema
- Differentialdiagnostik / Leitsymptome
- Skilltraining
- Redaktionsseite für ABCDE, Leitsymptome und Skill-Checklisten

## Bedienkonzept
Alle Ansichten verwenden ein gemeinsames Hamburger-Menü. ABCDE, Leitsymptome und Skills werden als große touchfreundliche Kacheln dargestellt; Detailinhalte öffnen sich in einem abgedunkelten Overlay. Die Literatursammlung wurde für Smartphones verdichtet.

## Checklisten und Inhalte bearbeiten
`editor.html` öffnet die Redaktionsansicht. Sie nutzt dieselbe PIN und denselben Worker wie die Literatursammlung. Damit Änderungen dauerhaft in GitHub gespeichert werden, muss der mitgelieferte `worker/worker.js` beim bestehenden Cloudflare Worker aktualisiert werden.

Der Worker unterstützt zusätzlich:
- `GET /content/abcde`
- `PUT /content/abcde`
- `GET /content/differential`
- `PUT /content/differential`
- `GET /content/skilltraining`
- `PUT /content/skilltraining`

Schreibzugriffe sind weiterhin über `X-Admin-Pin` geschützt.

## GitHub Pages
Den Inhalt dieses Ordners in die Wurzel des bestehenden GitHub-Pages-Repositories kopieren. Die bestehende Literaturkonfiguration in `literatur/config.js` bleibt erhalten.

Nach einem Commit kann GitHub Pages Änderungen an JSON-Dateien kurz zwischenspeichern. Die Wissensseiten fragen bei konfiguriertem Worker deshalb bevorzugt die aktuelle Worker-Version ab und fallen sonst auf die statischen JSON-Dateien zurück.
