# OST 1020 – Kalender und Redaktion

- Kalenderansicht mit großzügigen, responsiven Tagesfeldern, ausgerichteten Wochentagen und Terminmarkierungen.
- „Alle Meldungen“ ohne Pfeil.
- „Quick Guide Simulation“ statt Simulationstraining in Startseite, Guide-Seite und Redaktion.
- Der zusätzliche Link „Materialien“ in der Training-Kachel wurde entfernt. Die bestehenden Materialien selbst sind unverändert.
- Lehrmeinungsänderungen: Kategorie und Datum auf den Darstellungskarten/der Detailseite ausgeblendet; zusätzliches Feld „Gültigkeit“ unter der Quelle.
- Redaktion: Menüpunkte alphabetisch sortiert, Symbole bleiben den Einträgen zugeordnet.

## Deployment und Bestandsschutz

Der Worker muss für diese Änderungen nicht erneut angepasst werden. Neue Felder sind optional und werden durch die bestehende Inhaltsdaten-Schnittstelle als JSON mitgespeichert. Bereits gespeicherte Daten bleiben erhalten, sofern beim Deployment keine JSON-Inhaltsdateien aus dem Repository überschrieben werden. Vor jeder Aktualisierung das Repository und die produktiven Inhalte sichern.

JavaScript-Syntax geprüft; keine produktive Worker-Verbindung getestet.
