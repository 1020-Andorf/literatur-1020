# OST 1020 - Wissenssammlung v2.2

Änderungen:
- Hamburger links, Home rechts
- Untertitel/Infotexte entfernt
- mobile Kacheln ohne horizontales Überlaufen
- einheitliche Overlays
- Literatursammlung: klickbare Themenkacheln
- Fehler behoben: `authors` war in articles.json ein String und wurde fälschlich mit `.join()` behandelt
- benutzerfreundliche PIN-geschützte Redaktion ohne JSON/HTML
- Skillliste entspricht der bisherigen VitaSim-Skillliste

## Worker
Das Öffnen der Literaturkacheln benötigt keinen Worker. Der Fehler lag im JavaScript der Artikelansicht.

Für dauerhaftes Speichern der Redaktion in GitHub den enthaltenen `worker/worker.js` im bestehenden Cloudflare Worker aktualisieren. Ohne Worker-Update werden Änderungen lokal im Browser gespeichert.
