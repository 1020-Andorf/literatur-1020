OST 1020 – Update 583
====================
Basis: bereits getestete Version 582 (inkl. PIN-/Speicherfehlerkorrektur).

AUSTAUSCH
- portal.js, portal.css: im Web-Root ersetzen.
- Alle beigefügten HTML-Dateien: im Web-Root ersetzen (laden ?v=583 gegen alten Browsercache).
- worker/worker.js: Cloudflare Worker aktualisieren/deployen; zwingend für neue Organsysteme.
- data/organSystems.json: nur NEU hinzufügen, wenn die Datei noch nicht existiert. Eine vorhandene Datei mit Organsystem-Einstellungen NICHT überschreiben!
- Alle anderen Datenbestände unberührt lassen und vorab sichern.

NEU IN DIESER VERSION
- Organsystemnamen bearbeiten, sortieren, neue Organsysteme anlegen, leere Organsysteme ausblenden.
- Leitsymptomtitel und Systemzuordnung direkt an Auswahlkacheln bearbeiten; Einträge anlegen/löschen.
- Krankheitsbilder mit einem Rich-Text-Feld, Einträge hinzufügen/löschen.
- Skills einzeln bearbeiten, Abschnitte hinzufügen/verschieben/löschen.
- Gemeinsame PDF-/Linkverwaltung für Checklisten, Leitlinien, Literatur und Besprechungsanhänge mit Titel, Untertitel und Reihenfolge.
- Startseite: Inline-Bearbeitung für Aktuelles und Lesetipps. Bestehende 30-Tage-Regel für Lesetipps bleibt erhalten.
- Erweiterte Rich-Text-Formatierung mit Listen, Schriften, Größen, Farbauswahl und Bild-Upload.
- Speichern/Abbrechen und Bearbeitungsfreigabe wurden in einer simulierten Browserumgebung überprüft.

EINSCHRÄNKUNGEN
- Die Tests erfolgten mit simulierten Worker-Antworten, nicht mit der produktiven Cloudflare-Umgebung.
- Die alte Redaktion bleibt als Rückfalloption erhalten, bis der Livebetrieb geprüft ist.
- Bei bestehender Datenmigration / eigenen lokalen Anpassungen die Dateien vor dem Ersetzen vergleichen.
- Die neue Organsystem-Datei wird für echte Speicherung vom Worker benötigt; reines GitHub-Pages-Deployment allein reicht nicht.
