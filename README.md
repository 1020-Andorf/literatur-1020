# Wissen für den Dienst – finale Editor-Version

## Funktionen
- DOI-Abfrage über die öffentliche Crossref REST API
- Artikel neu anlegen
- bestehende Artikel bearbeiten
- Artikel löschen
- mehrere Kategorien/Themen je Artikel
- Kategorien entstehen automatisch aus allen verwendeten Themen
- Open Access / freie Version / Paywall
- Lesetipp markieren
- Suche und Filter nach Thema, Level (RS / RS–NFS / NFS), Sprache, Evidenz-/Dokumenttyp und Zugriff
- Lizenzkennzeichnung direkt an jedem Artikel
- Startbestand mit deutsch- und englischsprachigen Open-Access-Artikeln zu Rettungsdienst und Notfallmedizin
- Titel, Untertitel, Kopfzeile, Footer und Akzentfarbe im Redaktionsbereich ändern
- gemeinsames Speichern mit PIN über Cloudflare Worker
- GitHub Pages bleibt die öffentliche Leseseite

## Ordner
- `index.html` – Seitenstruktur
- `styles.css` – Design
- `app.js` – Funktionen
- `config.js` – URL zum Worker
- `data/articles.json` – Literatur
- `data/site.json` – Titel/Untertitel/Farbe/Footer
- `worker/worker.js` – geschütztes Backend

## Kategorien ändern
Es gibt keine separate Kategorienliste. Kategorien werden automatisch aus `topics` aller Artikel erzeugt.
Im Editor einen Artikel auswählen und im Feld „Themen / Kategorien“ z.B.
`Reanimation, Kardiologie, Ausbildung`
eintragen. Eine Kategorie verschwindet automatisch, sobald kein Artikel sie mehr verwendet.

## Design ohne Editor ändern
- Texte/Farbe: `data/site.json`
- Layout, Schriftgrößen, Abstände usw.: `styles.css`
- Struktur/Elemente: `index.html`

## GitHub Pages
Bei Organisationswebsite muss das Repository exakt `ORGANISATION.github.io` heißen.
Alle Dateien aus diesem ZIP in die Wurzel des Repositorys hochladen.
Settings → Pages → Deploy from a branch → main / root.

## Worker
Cloudflare Worker mit `worker/worker.js` erstellen.
Variablen:
- `GITHUB_OWNER` = Organisationsname
- `GITHUB_REPO` = z.B. `wissenspunkt-rd.github.io`
- `GITHUB_BRANCH` = `main`
- `ALLOWED_ORIGIN` = `https://wissenspunkt-rd.github.io`

Secrets:
- `GITHUB_TOKEN` = Fine-grained GitHub Token, nur dieses Repository, Contents Read/Write
- `ADMIN_PIN_SHA256` = SHA-256-Hash deines gewünschten PINs

Danach in `config.js` die Worker-URL eintragen:
`window.WISSEN_API_URL = "https://DEIN-WORKER.workers.dev";`

## Sicherheit
PIN und GitHub-Token niemals in HTML, JavaScript oder config.js eintragen.
Sie gehören ausschließlich als Secrets in den Worker.


## Neue Artikelfelder
Jeder Artikel kann zusätzlich enthalten:
- `level`: `rs`, `rs-nfs` oder `nfs`
- `language`: `de` oder `en`
- `license`: z. B. `CC BY 4.0`

Bestehende Datensätze ohne diese Felder bleiben kompatibel; die Oberfläche verwendet dafür neutrale Standardwerte.
