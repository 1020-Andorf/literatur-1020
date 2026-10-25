OST 1020 – Update 577 (gezielter Stabilisierungspatch auf 576)

Behoben:
- Globale Bearbeitungsfreigabe nur auf der Startseite, unter dem Menü statt in body/topbar.
- Vorhandene Menükacheln bleiben unverändert.
- Keine doppelten Stifte durch den generischen Decorator in Training und Materialien.
- Einzel-Skill-Stift statt zusätzlichem Gruppen-Stift.
- CSS-Schutz gegen schmale Rich-Text-Editor-Spalten.

NICHT ALS FERTIG AUSGEBEN: Die übrigen gewünschten Funktionen (neue Dokumentenliste statt Klappmenüs, Organsystemtitel, PDF-Upload, Spezialformulare, Lesetipps, zusätzliche Feldtypen, umfassende Speichertests) sind nicht vollständig umgesetzt.

Test: node --check portal.js und ZIP-Integrität. Kein Cloudflare-Livetest.
Vor Installation Repository und Worker-Daten sichern.
