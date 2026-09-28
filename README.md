# Wissensportal Rettungsdienst – GitHub Pages

Dieses Paket kombiniert die bestehende Literatursammlung mit drei aus VitaSim ausgelagerten Nachschlagebereichen:

- Literatursammlung (`/literatur/`)
- ABCDE-Schema
- Differentialdiagnostik / Leitsymptome
- Skilltraining

## Veröffentlichung
Alle Dateien in die Wurzel des bestehenden GitHub-Pages-Repositories kopieren und committen. Die Startseite ist `index.html`.

## Bestehende Literatur-Redaktion
Die Literaturseite und ihr Redaktionsbereich bleiben erhalten. `config.js` liegt nun unter `literatur/config.js`. Der bestehende Cloudflare Worker kann weiterverwendet werden, weil die Literaturdaten weiterhin in `/data/articles.json` und `/data/site.json` liegen.

## Inhalte der drei Nachschlagebereiche
Die statischen Inhalte liegen in:
- `data/abcde.json`
- `data/differential.json`
- `data/skilltraining.json`

Diese Bereiche sind bewusst reine Nachschlageansichten. Änderungen erfolgen aktuell direkt an den JSON-Dateien im Repository.
