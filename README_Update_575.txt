OST 1020 – Update 575 | Layout und In-situ-Bearbeitung

ÄNDERUNGEN
- Navigationskacheln: eine Spalte über volle verfügbare Inhaltsbreite, kompakte Höhe, keine Symptom-Nummern.
- Titel: kompakte Speichern/Abbrechen-Schaltflächen direkt neben der bearbeiteten Überschrift.
- Artikel: Überblick ohne zusätzliches weißes Inhaltsfeld; Abschnittstitel von Überblick, Red Flags, Fragen und Merksätzen am Ort der Anzeige editierbar.
- Abschnittsfarben: Blau, Rot, Gelb, Hellblau, Grün, Weiß; Styles ausdrücklich definiert.
- Krankheitsbilder: Klappkarten mit Inline-Bearbeitung des Titels und einzelner formatierbarer Fachfelder.
- Material-Checklisten, Leitlinien und Trainings-Checklisten: Link-/PDF-Editor je Eintrag mit Titel, URL und Untertitel; weitere Links hinzufügen und entfernen.
- Training: In-situ-Bearbeitung für Skillgruppen und deren vorhandene Abschnitte sowie überarbeitete Verknüpfung der Bearbeiten-Buttons.
- Neue Einträge: PIN-geschützter Plus-Button in Hauptmodulen (inkl. Leitsymptomen, Terminen, Lehrmeinungen, Aktuelles, Literatur und Besprechungen). Neue Datensätze werden zunächst mit Grundwerten angelegt und sind danach bearbeitbar.
- Formulare bei Terminen und Lehrmeinung: neue Breitenregeln verhindern seitlich zusammengeschobene Bearbeitungsdialoge.

ACHTUNG / EINSCHRÄNKUNGEN
- Technisch gegen JavaScript-Syntax geprüft, nicht live gegen deinen Cloudflare-Worker oder im produktiven Browser Ende-zu-Ende getestet.
- Neuanlage verwendet minimale Datensätze. Bitte im jeweiligen Modul nach dem Erstellen vervollständigen.
- Links und PDFs sind URLs; direkter Datei-Upload ist noch nicht in allen In-situ-Dialogen vorhanden.
- Die Rich-Text-Werkzeuge basieren noch auf dem browserseitigen document.execCommand und sind nicht in jedem Spezialfeld ein vollständiger moderner WYSIWYG-Editor.
- Bestehende Redaktion als Rückfalloption unbedingt behalten; die Neuanlage komplexer Datensätze und Anhänge erfordert nach wie vor weitere Entwicklung.
- Vor dem Deployment GitHub-Version und Worker-Daten sichern. Zuerst mit einer Testinstanz ausprobieren.
- Bei älteren, strukturierten Trainings-Skills und Algorithmen gelten weiterhin die jeweiligen Schemafelder.

TESTEMPFEHLUNG
Organsysteme und Leitsymptome an Desktop und Handy öffnen. Titel- und Abschnittsbearbeitung inkl. Farben testen. Krankheitsbild verändern und erneut öffnen. PDF-Links, Skillgruppe, Lehrmeinung und Termin anlegen/bearbeiten und prüfen, ob Änderungen nach Reload korrekt bleiben. Teste besonders die Teilnehmerlisten: sie müssen bei Terminänderungen erhalten bleiben.
