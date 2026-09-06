# Wissen für den Dienst – Version 2

## Was neu ist
- Literaturdaten liegen separat in `data/articles.json`
- Suche nach Titel, Autor:innen, Journal, Themen und Freitext
- mehrere Themen pro Artikel
- DOI, Autor:innen, Journal, Jahr
- Kennzeichnung `Neu` für Einträge der letzten 30 Tage
- zufälliger Lesetipp
- integrierter Redaktions-Editor
- aktueller Lesetipp kann direkt im Editor gesetzt werden
- Open Access / freie Version / Paywall
- optionaler sicherer Schreibweg über Cloudflare Worker + GitHub API

## Wichtig zur PIN-Lösung
Ein PIN direkt in `index.html` oder JavaScript wäre NICHT sicher, weil jeder Besucher den Quelltext lesen kann.

Deshalb ist der Editor zweigeteilt:
1. GitHub Pages zeigt das Formular.
2. Ein Cloudflare Worker prüft den PIN serverseitig.
3. Der Worker besitzt als Secret einen GitHub-Token.
4. Bei gültigem PIN aktualisiert er `data/articles.json` im Repository.
5. GitHub Pages veröffentlicht die Änderung automatisch.

Ohne Worker funktioniert die Website ganz normal; der Editor kann bereits eine Vorschau erzeugen, speichert aber noch nicht gemeinsam.

## 1. GitHub Pages veröffentlichen
Alle Dateien außer dem Ordner `worker` in dein GitHub-Repository hochladen.
Dann: Settings → Pages → Deploy from a branch → `main` + `/root`.

## 2. Cloudflare Worker anlegen
In Cloudflare einen Worker erstellen und den Inhalt aus `worker/worker.js` einfügen.

Folgende Variablen/Secrets setzen:
- `GITHUB_TOKEN` = Fine-grained GitHub Token mit Schreibrecht nur auf dieses Repository
- `GITHUB_OWNER` = dein GitHub-Benutzername oder Organisation
- `GITHUB_REPO` = Repository-Name, z.B. `wissen`
- `GITHUB_BRANCH` = `main`
- `ADMIN_PIN_SHA256` = SHA-256-Hash deines PINs
- `ALLOWED_ORIGIN` = deine GitHub-Pages-Adresse, z.B. `https://deinname.github.io`

Den PIN-Hash kannst du lokal erzeugen:
- macOS/Linux: `printf 'DEINPIN' | shasum -a 256`
- Windows PowerShell: `[Convert]::ToHexString([Security.Cryptography.SHA256]::HashData([Text.Encoding]::UTF8.GetBytes("DEINPIN"))).ToLower()`

## 3. API in der Website aktivieren
In `config.js`:
`window.WISSEN_API_URL = "https://DEIN-WORKER.workers.dev";`

Danach `config.js` wieder ins Repository committen.

## 4. Neue Artikel eintragen
Auf der Website unten auf `🔐 Redaktion` klicken.
Daten + PIN eingeben → Speichern.
Der Worker aktualisiert `articles.json`.
Die Website lädt danach die neue Liste.

## Sicherheit
- GitHub Token niemals in `config.js`, HTML oder JavaScript eintragen.
- Nur als Worker-Secret speichern.
- Fine-grained Token nur für dieses eine Repository und Contents Read/Write.
- Die Website ist öffentlich; keine vertraulichen Daten oder nicht freigegebene PDFs hochladen.
- Der PIN schützt nur die Redaktion, nicht die Leseseite.

## Literaturdaten
Ein Eintrag sieht so aus:
```json
{
  "id": "beispiel-123",
  "title": "Titel",
  "authors": "Autor:innen",
  "journal": "Journal",
  "year": 2026,
  "doi": "10.xxxx/...",
  "topics": ["Trauma", "CRM"],
  "type": "Review",
  "read": "12 min",
  "access": "paywall",
  "why": "Warum lesenswert?",
  "publisherUrl": "https://...",
  "freeUrl": "",
  "featured": false,
  "added": "2026-09-06"
}
```


## Version 3 – Beispieldaten
Die Datei `data/articles.json` enthält jetzt ein kuratiertes Startset realer Quellen aus ERC, WHO und PubMed. Bitte bibliografische Details vor einer offiziellen Veröffentlichung bei Bedarf nochmals gegen die Originalquelle prüfen.
