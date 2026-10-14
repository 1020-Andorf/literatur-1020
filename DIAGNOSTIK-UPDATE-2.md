# Diagnostik-Update 2 – OST 1020

## Änderungen
- Flachere Startansicht: Themengruppen als aufklappbare Bereiche, Leitsymptome unmittelbar erreichbar.
- Volltextsuche nach Leitsymptomen und Krankheitsbildern.
- Direkter Zurück-Button: Krankheitsbild → Leitsymptom → Diagnostik → Startseite (keine Browser-History-Falle).
- Allergische Reaktion bereinigt: Fremdkörperaspiration, Epiglottitis und Pseudokrupp gehören jetzt zu einem eigenen Leitsymptom „Stridor / akute Atemwegsverlegung“.
- Einzelne häufige Diagnosen fachlich ausführlicher beschrieben (Pathophysiologie, Befunde, Warnzeichen). Andere Einträge enthalten konservative Basisinformationen und sollten redaktionell geprüft und ergänzt werden.
- Zu jedem Krankheitsbild ein editierbarer Link für Literaturrecherche auf PubMed. **Dies sind Suchlinks, keine geprüften konkreten Fachquellen.**
- Redaktion: Quelle (URL + Text) wird pro Krankheitsbild mitgespeichert.

## Bereitstellung
1. Vor dem Deployment Repository und Worker-Daten exportieren/sichern.
2. Neue Dateien ins GitHub-Repository übernehmen und veröffentlichen.
3. Worker-Update: **nicht erforderlich** (Datenformat erweitert, `/content/differential` bleibt bestehen).
4. Persistente Worker-Daten bleiben unverändert. Neue Standardinhalte werden in der Leseansicht mit Worker-Daten kombiniert. Neue redaktionelle Änderungen erst nach bewusster Speicherung in der Redaktion persistent.
5. Bei vorhandenen älteren Diagnostik-Daten kann die alte inhaltliche Bearbeitung einzelner bestehender Krankheitsbilder Vorrang vor neuen Standardtexten haben; ein vollständiges Überschreiben wurde absichtlich vermieden.

## Qualität / Hinweise
- Keine klinische Freigabe und kein Live-End-to-End-Test gegen den produktiven Worker.
- Der Bereich Allergische Reaktion wird beim Zusammenführen bewusst auf sachlich zugehörige Standardkrankheitsbilder begrenzt. Eigene zuvor ergänzte Diagnosen in diesem einen Bereich sollten gegebenenfalls aus dem Backup übernommen werden.
- Externe Literaturrecherche-Links sind kein Beleg für konkrete Aussagen. Fachliche Redaktion und Leitlinienprüfung sind weiter nötig.
