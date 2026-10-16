# OST 1020 – Startseite und Navigation

- Startseite: Aktuelles direkt unter der globalen Suche, danach Wissen, Training, Termine und Aktuelles & Mehr mit direkten Unterlinks. Wochenübersicht am Seitenende. Keine Liste „Zuletzt angesehen“.
- Wissen: Algorithmen & Schemata, Leitlinien / Guidelines, Literatursammlung, Diagnostik. Leitlinien aggregieren vorhandene externe Quellenlinks aus den Algorithmen. Fehlende Links können in der Redaktion ergänzt werden.
- Training: Skilltraining, Simulations Guide, FAQ zu Simulationstrainings. FAQ enthält zunächst redaktionell noch nicht editierbare allgemeine Hinweise.
- Redaktion: über „Mehr“, kein separater schwebender Button.
- Vergangene Termine: im Frontend ist die Teilnahmefunktion gesperrt. Zusätzlich blockiert die mitgelieferte Worker-Version die RSVP-API nach Ablauf des Termins. Für serverseitigen Schutz Worker aktualisieren. Die Aktualisierung ändert nicht die bestehenden gespeicherten Daten.

## Installation
1. Vorher Backup des Repositories und der produktiven Inhalte anlegen.
2. Dateien ins Repository übernehmen und committen.
3. Den aktuellen `worker.js` deployen, damit auch direkte API-Anfragen nach dem Termin zurückgewiesen werden.
4. Browsercache neu laden und Kalender mit vergangenem und zukünftigem Termin testen.

Falls Termine keine gültige HH:MM-Uhrzeit haben, werden sie erst nach 23:59 am Termindatum als abgelaufen betrachtet. Der Server benutzt seine aktuelle Uhr, die Browseransicht die Gerätezeit. Alle Zeitangaben werden als lokale Zeit interpretiert.
