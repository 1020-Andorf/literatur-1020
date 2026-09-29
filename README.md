# OST 1020 – Wissenssammlung v2.9

Design- und UX-Version auf Basis des freigegebenen Mockups.

## Neu
- Modernes helles Dashboard mit einheitlichen Vektor-Symbolen
- Die Simulationssoftware wird im Portal einheitlich **Simulationstraining** genannt
- Literatursammlung vollständig im neuen Karten-/Accordion-Design
- ABCDE mit A–E-Navigation und interaktiven Unter-Overlays
- Skilltraining mit funktionalen Tabs im Overlay
- Kalender mit Monatsnavigation vor/zurück
- Teilnahmefunktion mit Teilnehmerzahl und Kapazität
- Redaktion kann Termin-Kapazität pflegen
- Menü ohne sichtbare Scrollbar

## Redaktion
PIN-Fallback: `1020`. Bei aktivem Worker wird dessen `ADMIN_PIN_SHA256` verwendet.

## RSVP / Teilnahme
Der mitgelieferte Worker unterstützt `/events/rsvp/:id`. Teilnehmer werden anhand einer anonymen Browser-ID gezählt.
