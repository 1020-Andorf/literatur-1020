# OST 1020 – Dienstbesprechungen und Schemata

## Neu

- Neuer Menüpunkt `dienstbesprechungen.html` mit Datum, Thema, Referent:in, Kurztext und beliebig vielen Materiallinks.
- Redaktion → Dienstbesprechungen: Einträge, Links, Bild-, PDF- und Präsentationsuploads bearbeiten. Wie bei bisherigen Medien werden Dateien via `/media` in `assets/uploads` abgelegt.
- `data/meetings.json` als neue Datendatei, initial leer. Die Datei muss mit hochgeladen werden.
- **Worker-Update erforderlich**: `worker/worker.js` (alternativ `worker.js`, entsprechend dem tatsächlich eingesetzten Worker) enthält jetzt `/content/meetings` GET/PUT. Unveränderte Secrets/Umgebungsvariablen.
- Diagnostik und Algorithmen im Menü umbenannt.
- TICLS, pädiatrisches Beurteilungsdreieck (PAT), OPQRST, SAMPLER, XABCDE, BE-FAST als strukturierte Schemata integriert; Bearbeitung unter Redaktion → Algorithmen.
- Neue Typographie mit klareren Überschriften, Kontrast und Hervorhebung.
- Gleiche Diagnostikdiagnosen innerhalb eines Leitsymptoms werden in der Datengrundlage und beim Zusammenführen mit älteren Worker-Daten dedupliziert. Krankheiten dürfen unter mehreren *verschiedenen* Symptomen weiter vorkommen.

## Sichere Aktualisierung

1. **Backup des kompletten GitHub-Repositories** und separat von `data/differential.json`, `data/algorithms.json`, `data/meetings.json` anfertigen.
2. Neue Frontend-Dateien und Datendateien in das Repository übernehmen.
3. Den Worker-Code aktualisieren und neu deployen. Nur die neue Route `/content/meetings` wird ergänzt, bestehende Routen bleiben erhalten.
4. GitHub Pages neu laden (Cache ggf. leeren).
5. Neue Dienstbesprechung unter Redaktion → Dienstbesprechungen anlegen und speichern.
6. Auf der Live-Seite Link und optional einen Datei-Upload testen. Bei einem neuen `/content/meetings`-Eintrag muss `data/meetings.json` im Repository vorhanden sein.

## Datenbestand

Kein automatisches Löschen vorhandener Inhalte ist vorgesehen. **Achtung:** Werden mitgelieferte `data/*.json` über bereits online bearbeitete Dateien kopiert, können Änderungen überschrieben werden. Vorhandene Datensätze der Algorithmen müssen ggf. mit den sechs neuen Schemata zusammengeführt werden, statt die vorhandene JSON-Datei blind zu ersetzen.

## Medizinischer Hinweis

Die Schemata sind didaktische Kurzfassungen und keine Behandlungsalgorithmen. Bei Reanimation, Akuterkrankungen und bei Kindern haben aktuelle Leitlinien und lokale SOPs Vorrang. Die Inhalte sind nicht ärztlich fachfreigegeben.

## Technik

Syntaxvalidierung mit Node.js und JSON-Parsing ausgeführt. Keine erfolgreiche vollständige Browser-End-to-End-Prüfung oder Live-Prüfung gegen den produktiven Worker erfolgt.
