# OST 1020 – Bereinigter Main-Stand 591

Basis: vom Nutzer hochgeladenes `literatur-1020-main(6).zip` (aktueller Main-Stand).

## Durchgeführte risikoarme Bereinigung

- Statisch nicht referenzierte Assets aus dem Deploy-Ordner ausgelagert. Sie liegen unverändert in der separaten Rücksicherung.
- Nicht referenziertes Pilot-Archiv aus `data/` ausgelagert.
- Cache-Versionen der bestehenden Skripte/Styles auf `591` vereinheitlicht; CSS-Importe entsprechend aktualisiert.
- Keine produktiven medizinischen Datensammlungen verändert, keine bestehenden API-Routen oder Worker-Funktionen entfernt.
- Kein aggressives Entfernen einzelner alter CSS- oder JavaScript-Regeln: Die teils mehrfach überlagerten Versionsblöcke benötigen Browser-Regressionstests.

## Bewusst beibehalten

- `portal.js`, `portal.css` und alle sieben importierten CSS-Teildateien: Hier liegen aktive Abhängigkeiten und Alt-Regeln.
- `portal-data.js`, `knowledge-seed.js`, `diagnostic-theory.js`: werden auf den HTML-Seiten weiterhin geladen.
- `editor.html` und dessen zugehöriger Code: Übergangs-/Rückfallpfad; vollständige Entfernung erst nach belegtem Funktionstest der neuen Administration.
- Alle aktiven `data/*.json`, insbesondere `organSystems.json`, sowie `worker/worker.js`.
- Auf aktuell bereitgestellte Datensätze verlinkte PDFs/Bilder, selbst wenn identische Dateikopien existieren.

## Was als Nächstes mit Tests aufgeräumt werden kann

1. `portal.css` in geordnete, modulare Komponenten überführen; alte `ost56x/57x/58x`-Overrides nur nach visuellen Vergleichstests entfernen.
2. Die alte `editor()`-Implementierung samt Redaktion-CSS und `editor.html` nach erfolgreichem Test von Verwaltung, Backup/Wiederherstellung, Upload und Export entfernen.
3. Überflüssige Legacy-Seiten (`wissen.html`, `themen.html`, `simulation.html`, `simulation-faq.html`, `leitlinien.html`) erst nach Prüfung externer Links und Navigation durch Redirects ersetzen.
4. Pharma-/Anatomie-Seed und Medien nur entfernen, wenn keine dynamischen Inhalte oder Backups mehr darauf verweisen.
5. Assets in Cloudflare/externen Links auf Referenzen prüfen; lokale statische Suche findet keine zur Laufzeit gespeicherten Datensätze.

## Prüfumfang

Datei- und statische Referenzprüfung, JavaScript-Syntaxprüfung, JSON-Parsing, ZIP-Integrität. Keine echten Browser- oder Cloudflare-Speichertests. Bitte zuerst als Testdeployment veröffentlichen.

## Ausgelagerte Dateien

- `assets/atmung.svg`
- `assets/bauch.svg`
- `assets/gehirn.svg`
- `assets/herz.svg`
- `assets/koerpermodell-533.svg`
- `assets/niere.svg`
- `assets/uploads/1790797665839-akutes-Abdomen-Training.pptx.pdf`
- `assets/uploads/1792275553286-Halas-Simon.PNG`
- `assets/uploads/1792275640950-Nicht-benannt---August-19-2026-at-21.27.25.PNG`
- `assets/uploads/1792276723685-Halas-Simon.PNG`
- `assets/uploads/1792278838662-akutes-Abdomen-Training.pptx.pdf`
- `assets/uploads/1792278857165-Myokardinfarkt-Training.pptx.pdf`
- `assets/uploads/koerpermodell-536.svg`
- `data/knowledgeModules-pilot-archiv.json`
