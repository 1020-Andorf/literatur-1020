# OST 1020 – Design- und Theorie-Update 530

## Gestaltung

- Einheitliche Schrift, fünf sehr dezente Farbtöne, gleichartige Kontur-Symbole sowie Abstände und Rahmen in Haupt- und Untermenüs, Algorithmus-/Merkhilfe-Listen, Skilltraining, Diagnostik und Redaktion.
- Mobile Kopfzeile: Titel mit größerer Zeilenhöhe, sodass Unterlängen (g, p, q usw.) sichtbar bleiben.
- Detailansichten: lesefreundlicher Fachtext, gegliederte Abschnitte, responsive vorhandene SVG-Anatomie- und Pharmakologie-Abbildungen.
- Startseite: Aktuelles farblich akzentuiert; im Nachrichten-Overlay nur Beschreibung, Link und Schließen, kein Titel/Kategorie/Datum.
- Redaktion: Literatur und Lehrmeinung als eigenständige Hauptbereiche, nicht länger bei Wissen.
- Lehrmeinung: dokumentähnliches Änderungssymbol passend zur Kontur-Symbolsprache.

## Inhalt

- 12 Pharmakologiegruppen und 7 Anatomie-/Physiologie-Kapitel mit zusätzlichen themenspezifischen Hintergrund- und Sicherheitshinweisen erweitert.
- Alle 40 Diagnostik-Leitsymptome haben eine kurze physiologische Einordnung (`theory`); das Feld ist unter Redaktion → Wissen → Diagnostik bearbeitbar.
- Bestehende Fachtexte, Abbildungen, IDs, Datensätze, Redaktionsfunktionen und Worker wurden beibehalten.

## WICHTIG: Migration und produktiver Worker

Vor dem Deployment produktive Daten (insbesondere `knowledgeModules`, `differential`, `articles`) sichern. Die enthaltenen JSON-Dateien stammen aus dem hochgeladenen Projekt und dürfen angepasste Worker-Inhalte nicht unbesehen überschreiben.

Die neuen Anatomie-/Pharmakologie-Texte liegen auch in `knowledge-seed.js`. Bestehende redaktionell **unveränderte** Standardtexte werden im Frontend ergänzt; individuell bearbeitete Texte werden nicht ersetzt. Für dauerhafte Übernahme in die produktive Worker-Datenbank die betreffenden Einträge nach redaktioneller Prüfung speichern. Bei Diagnostik werden Hintergrundabschnitte auch über `diagnostic-theory.js` ergänzt und können im Editor übernommen werden.

Neue Theorieabschnitte sind Lernmaterial und keine freigegebenen SOPs oder Therapieanweisungen. Medizinisch-fachliche Quellen, Aktualität und Freigaben müssen vor produktiver Verwendung geprüft werden.

Kein Worker-Code-Update nötig. Nach Deployment Browsercache/PWA-Cache prüfen, damit `portal.js?v=530` und `portal.css?v=530` geladen werden.

## Prüfungen

JS-Syntax, alle JSON-Dateien, Asset-Referenzen und ZIP-Integrität statisch geprüft. Ein echter Browsertest war wegen einer Laufzeitumgebungs-Sperre nicht möglich.
