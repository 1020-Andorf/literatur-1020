# OST 1020 – Querverlinkungen, globale Suche und Redaktions-Dashboard

## Umfang

- **Medizinische Querverlinkungen:** Redaktionsfelder zum Verknüpfen bestehender Einträge. Referenzen werden optional unter `related: [{"type":"algorithms","id":"..."}]` im jeweiligen JSON-Datensatz gespeichert. Beim Anzeigen werden Referenzen gegen einen dynamisch geladenen Katalog geprüft; unbekannte Verknüpfungen erscheinen nicht. Anzeige zunächst in den Detailseiten der Algorithmen und Lehrmeinungsänderungen.
- **Globale Suche:** Suche der Startseite über bestehende Einträge aus Algorithmen, Diagnostik, Literatur, Skilltraining und Lehrmeinung, inkl. Synonymbehandlung, Trefferbewertung und Gruppierung. Suchdaten werden im Browser aus veröffentlichten Inhaltsendpunkten gebildet.
- **Redaktions-Dashboard:** Zusammenfassung von Inhaltszahlen, fälligen Prüfungen, als `draft` markierten Einträgen und fehlenden Prüfverantwortlichen; direkte Zugänge zu den vorhandenen Admin-Funktionen.
- **Keine Simulationsfall-Datenbank** oder -Verwaltung.

## Worker

Für diese Erweiterungen sind keine neuen Endpunkte erforderlich, sofern der bereits verwendete Worker `/content/{name}`, `/articles` und die vorhandenen Admin-Endpunkte unterstützt. Ein erneutes Worker-Deployment ist hierfür **nicht erforderlich**. Unveröffentlichte Entwürfe werden weiterhin NICHT serverseitig verborgen. Die Dashboard-Zahl `Entwürfe` ist nur eine Kennzeichnung, kein Zugriffsschutz.

## Vorsicht bei der Migration

1. Vor dem Upload die produktiven JSON-Daten und den Worker-Konfigurationsstand sichern.
2. Im GitHub-Repository nur `portal.js`, `portal.css` und die mit Versionsparametern geänderten `.html`-Dateien übernehmen, sofern im Repository neuere produktive JSON-Werte liegen.
3. Es gibt keine automatische Umschreibung des Datenbestands; `related` bleibt für alte Datensätze optional.
4. Für Querverlinkungen die Redaktion öffnen, einen Eintrag bearbeiten, passende bestehende Inhalte auswählen und normal speichern. Der bisherige Mechanismus speichert die Einträge zusammen mit den neuen `related`-Referenzen.
5. Die Suche verweist bei Skilltraining und Literatur auf die zugehörige Übersichtsseite; Direktanker können später ergänzt werden.
6. Die Dashboard-Werte basieren auf vorhandenen veröffentlichten Daten sowie vorhandenen Prüfmetadaten; Fehlermeldungen und Versionshistorie werden erst bei Klick über die bestehenden geschützten Admin-Endpunkte abgerufen.

## Zugriffssicherheit

Die Anwendung erweitert öffentliche Endpunkte nicht um private Inhalte und erzeugt keine Benutzerkonten. Die Redaktion verwendet die bestehende PIN-Verifikation; deren Sicherheit und die Freigabe unveröffentlichter Inhalte hängen weiterhin vom eingesetzten Worker ab. Keine Patientendaten in die Fachinhalte oder Fehlermeldungen eintragen.

## Prüfungen

Vor Deployment sollten Suche nach einem Symptom-Synonym, Speichern einer Querverlinkung, fehlende Zielreferenz, redaktionelles Neuladen, Zurück-Navigation und Worker-Synchronisierung im eigenen Staging geprüft werden.
