OST 1020 – Update 571 (aufbauend auf Update 570)

DATEIEN: portal.js, portal.css, editor.html.

NEU:
- Organsysteme und Leitsymptome als robuste responsive Kartenlisten; lange Titel laufen nicht mehr in benachbarte Elemente.
- Krankheitsbilder eines Leitsymptoms als sichtbare, farblich gegliederte Karten statt Klappmenüs.
- Kein automatischer Anatomie-/Fachbegriffe-Einschub mehr im Leitsymptom-Artikel; vorhandene Daten werden NICHT gelöscht.
- Individuelle Stifte für Überblick, Red Flags, Anamnese, einzelne Krankheitsbilder und Merksätze.
- Bearbeitung nach verifizierter Redaktions-PIN, Speicherung in bestehendem differential-Datensatz.
- Zusätzlicher Rich-Text-Bereich erlaubt Textformatierung und HTTPS-Bilder via URL.

NICHT IN DIESEM UPDATE:
- Die klassische Redaktion ist weiterhin erforderlich für Training, Materialien und alle sonstigen Module.
- Kein direkter Handy-Bildupload; es werden öffentliche HTTPS-Bild-URLs unterstützt.
- Es wurden keine Backend- oder Worker-Dateien verändert. Ein echter Worker-/PIN-/Browser-End-to-End-Test steht aus.

INSTALLATION:
1. Vollständiges Backup / Versionierung der bestehenden App und Daten erstellen.
2. Dateien im Repository am jeweils vorhandenen Ort ersetzen.
3. Deployment und Cloudflare-Worker mit Redaktion-PIN testen.
4. Lange Titel, mobile Ansicht und Speichern einzelner Krankheitsbilder gezielt kontrollieren.
5. Vor Live-Publikation KI-Texte ärztlich/fachlich prüfen.
