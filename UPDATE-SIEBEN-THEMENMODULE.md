# Sieben optionale Themenmodule

Pilotbereiche: Pharmakologie, Anatomie & Physiologie, EKG & Befundinterpretation, Gerätekunde, Kommunikation & Human Factors, Besondere Einsatzlagen, Wissenschaft & Evidenz.

## Installation
1. Produktive Dateien und Worker-Daten sichern. Insbesondere `data/*.json` nicht ungeprüft überschreiben.
2. Frontend hochladen, `themen.html`, `portal.js`, `portal.css` ergänzen.
3. Neue `data/knowledgeModules.json` nur anlegen, falls noch nicht vorhanden (Anfangswert `[]`). Bestehende Datendateien erhalten!
4. `worker.js` bzw. `worker/worker.js` (je nach Deployment) neu deployen; sie akzeptieren jetzt `knowledgeModules` im Content-Endpoint und in Backups.
5. In Redaktion > Neue Themenbereiche können Einträge mit Titel, Fachinhalt, Quellen, Review-Datum und Status angelegt werden.
6. Ohne erfolgreiches Worker-Speichern bleiben Änderungen nur im jeweiligen Browser-LocalStorage (nicht global verfügbar).

## Rückbau
Nicht gewollte Bereiche in Wissen/Training aus den Linklisten entfernen; Datensätze bleiben dabei unverändert. Ein kompletter Rückbau erfolgt nach Backup durch Entfernen der Navigationslinks, des JS-Modulcodes und optional der eigenen Sammlung.

## Sicherheit
Die Module starten leer: Keine ungeprüften medizinischen Dosierungen, Interpretationen oder Geräteanleitungen. Entwurfsstatus ist nur ein Darstellungsfilter – nicht für vertrauliche Inhalte geeignet. Prüfen und freigeben lassen, bevor klinisch genutzt.
