# OST 1020 – Drei Wissensmodule

- Pharmakologie: Überblick über Medikamentengruppen mit typischen Wirkstoffen und grundlegender Wirkung (keine Dosis-/Behandlungsanweisungen).
- Anatomie und Physiologie: sieben zentrale Systeme, lokale schematische SVG-Lernabbildungen.
- Befundwörterbuch: häufige Abkürzungen und Fachbegriffe in Arztbriefen.
- Vier nicht gewünschte Pilotbereiche aus Navigation und Redaktion entfernt; ihre Beispiel-Datensätze befinden sich zur Dokumentation in `data/knowledgeModules-pilot-archiv.json` und werden nicht mehr öffentlich angezeigt.
- Mobile Redaktion: kompakte Bereichsauswahl statt langer Liste. Wartung, Versionen & Meldungen am Seitenende.

## Deployment
Frontend aktualisieren. Die vorhandene `knowledgeModules`-Schnittstelle im Worker bleibt unverändert. Wichtig: Die produktiven Einträge im Worker können von den gelieferten JSON-Demodaten abweichen. Vor Deployment unbedingt aktuelle Worker-Daten sichern und bei Bedarf gezielt migrieren. Das neue Beispiel-JSON nicht blind über produktive Daten überschreiben. Bilder unter `assets/anatomie/` hochladen. Fachinhalte vor praktischer Anwendung prüfen und lokale SOP berücksichtigen.
