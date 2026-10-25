OST 1020 – Update 576 (Teilumsetzung)
Ausgangsbasis: Update 575. Vollständiges Projekt, bestehende Cloudflare-Worker-API unverändert.

In diesem Paket:
- Globaler Bearbeitungsmodus am Kopf der Seite. PIN einmal prüfen; Bearbeitungsbuttons werden ein-/ausgeblendet. Beim Sperren werden lokaler Modus und PIN aus der Sitzung gelöscht.
- Neuer Eintrag über eine appinterne, responsive Maske statt prompt() – u.a. für Termine, Lehrmeinungen, Literatur, Meldungen, Besprechungen, Wissenseinträge. Terminfelder Datum, Zeit, Ort, Kategorie, Beschreibung direkt in der Maske.
- Plus-Button wird am Ende des jeweiligen Bereichs eingesetzt.
- Titelspeicherung und Abbrechen im Leitsymptomartikel unterhalb der Titel-Eingabe, mit kompaktem Layout.
- Skill-Bearbeitungsbutton pro Skill mit Formular für den Skillnamen und seine vorhandenen Abschnitte.
- Dokumentlink-Editor: Links lassen sich zusätzlich nach oben/unten verschieben.
- Leitsymptom-Detailnavigation: Zurück zu Symptomen desselben Organsystems, von dort zu allen Organsystemen.
- Lesetipps verschwinden nach 30 Tagen seit activeSince/added von der Startseite und bleiben im Literatur-Archiv sichtbar; keine Änderung an den Archivdatensätzen.
- Überarbeitung der Bearbeitungscontrols und Cache-Busting der HTML-Seiten.

WICHTIGE NOCH OFFENE WÜNSCHE:
- Eigenständige Bearbeitung und Persistenz von Organsystem-Namen benötigt eine neue redaktionell editierbare Organsystem-Datenquelle (CF_TOPICS ist derzeit im JavaScript fest kodiert).
- Frei editierbare Unterüberschriften der einzelnen Krankheitsbild-Felder und individuelle Farbwerte über alle Komponenten.
- Datei-Upload von PDFs/Bildern aus jedem Link-Editor (aktuell Link per URL; Server-Medienworkflow noch nicht angepasst).
- Ein vollständig feldspezifischer Editor und Plus-/Löschfunktionen in ausnahmslos allen Untermodulen; Training und Material-Links haben verschiedene Datenmodelle.
- Bearbeitungsbuttons an Lesetipp-Karten direkt auf der Startseite.
- Funktionale End-to-End-Tests im Browser mit dem echten Cloudflare-Worker und Authentifizierung.

Die bestehende Redaktion bleibt zur Sicherheit erhalten. Keine produktive Installation ohne Sicherung und Funktionstests.
Test: JavaScript-Syntax mit node --check, Archivprüfung mit zipfile.testzip.
