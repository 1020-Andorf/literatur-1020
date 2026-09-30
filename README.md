# OST 1020 – Wissenssammlung v3.2

UX-/Stabilitätsupdate.

## Neu
- Redaktion wird vor dem Laden per PIN über `/auth` entsperrt; Schreibzugriffe des Workers sind ebenfalls PIN-geschützt.
- Menü flach und alphabetisch; Redaktion als kleiner separater Button unten.
- Skilltraining mobil einspaltig, Tablet zweispaltig.
- Algorithmen mit Top-to-Bottom-Flowchart und optionalem Leitlinien-Weblink/Embed.
- Dashboard: globale Suche, Favoriten und zuletzt angesehene Bereiche.
- Startseite endet direkt nach dem Inhalt; kein unnötiger Leerraum.

## Cloudflare Worker
`ADMIN_PIN_SHA256` muss gesetzt sein. Für PIN `1020`:

`f296867839c8befafed32b55a7c11ab4ad14387d2434b970a55237d537bc9353`

Den enthaltenen `worker/worker.js` neu deployen.
