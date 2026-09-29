# Wissensportal Rettungsdienst – V3

Überarbeiteter GitHub-Pages-Entwurf im einheitlichen VitaSim-nahen Design.

## Seiten
- `index.html` – Startseite
- `literatur.html` – mobile Literatursammlung
- `abcde.html` – ABCDE-Schema mit Overlay-Details
- `differential.html` – Differentialdiagnostik mit Overlay-Details
- `skilltraining.html` – Skilltraining mit Overlay-Checklisten
- `editor.html` – lokale Bearbeitung der Checklisten

## Bearbeitung
Die Checklisten werden in `localStorage` gespeichert. Damit kann direkt auf GitHub Pages ohne Backend gearbeitet werden.

### Backup / Gerätewechsel
- Im Editor den gewünschten Bereich exportieren.
- Auf einem anderen Gerät den Bereich importieren.

## Dateien
- `portal.css` / `portal.js` / `portal-content.js`
- `data/articles.json` für die Literatursammlung
