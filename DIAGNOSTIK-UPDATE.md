# Diagnostik – Update und Datensicherung

## Installation

1. **Vor dem Upload** das bestehende GitHub-Repository (insbesondere `data/differential.json`) als Backup sichern und gegebenenfalls einen Commit/Tag erstellen.
2. ZIP entpacken und Dateien in die **Wurzel** des vorhandenen GitHub-Pages-Repositories kopieren, dabei die Projektstruktur erhalten.
3. Geänderte Dateien committen / GitHub Pages veröffentlichen.
4. Im Browser `differential.html` öffnen; einmal hart neu laden, falls alte Dateien zwischengespeichert sind.
5. In `editor.html` die Redaktion entsperren, Tab **Diagnostik** auswählen, neue Inhalte prüfen und bei Bedarf über **Speichern** synchronisieren.

## Worker

**Kein Worker-Update erforderlich.** Der aktuelle Worker hat bereits `GET /content/differential` und `PUT /content/differential` und schreibt die Daten in `data/differential.json` im Repository. Es wurden keine neuen Endpunkte, Secrets oder Umgebungsvariablen eingeführt. Die bestehende Worker-URL in `config.js` wurde nicht verändert.

## Daten

- **Alle anderen Datenbereiche bleiben unangetastet** (Termine/Anmeldungen, Literatur, Skills, News, Algorithmen usw.). Das `localStorage`-Namenspräfix bleibt gleich.
- **Achtung bei der Diagnostik:** `data/differential.json` im ZIP enthält eine umfangreiche neue Ausgangsbefüllung. Wer diese Datei im Repository überschreibt, ersetzt die bisherige Datei! Deshalb vorher unbedingt sichern. Der Browser kann ältere von der Worker-API geladene Diagnostikdaten mit der neuen mitgelieferten Basis zusammenführen; dies schützt aber nicht vor einem zuvor bereits überschriebenen GitHub-Datensatz.
- Bestehende Leitsymptome mit übereinstimmender ID sowie eigene zusätzliche Einträge werden im Client berücksichtigt; alte Platzhalterinformationen werden bei der Anzeige durch strukturierte Angaben ergänzt. Wenn Redaktionsdaten im alten Schema vorliegen, werden sie beim nächsten Speichern in der erweiterten Struktur gespeichert.
- Für die **dauerhafte Übernahme** aller neuen Diagnostikdatensätze `data/differential.json` deployen oder bei laufender alter Worker-Datei die Diagnostik in der Redaktion nach Prüfung speichern. Sicherste Praxis: Backups/Commits vor jedem Datenimport.

## Benutzung

Diagnostik → Bereich (z. B. Atmung) → Leitsymptom (Dyspnoe) → Krankheitsbild (Asthma) → Physiologie, Befunde und CAVE. Außerdem gibt es eine Suche nach Symptomen und Krankheitsbildern.

Die Beschreibung ist ein rettungsdienstliches Lernmittel. Vor produktivem Einsatz Inhalte ärztlich/fachlich prüfen und an lokale SOPs und aktuelle Leitlinien anpassen. Es werden keine automatischen Diagnosen gestellt.
