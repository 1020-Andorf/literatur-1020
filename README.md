# OST 1020 - Wissenssammlung v2.3

Änderungen gegenüber v2.2:
- Menü immer links, Home immer rechts.
- ABCDE, Differentialdiagnostik und Skilltraining besitzen eingebettete Fallback-Daten und bleiben daher nicht leer, wenn JSON/Worker nicht erreichbar sind.
- Inhalts-Symbole wieder als Emojis statt Linienicons.
- Literatursammlung einspaltig, mit Suchfeld und Themenfilter.
- Themenkacheln öffnen per delegiertem Klickhandler zuverlässig das Overlay.
- Editor vollständig formularbasiert und PIN-geschützt.
- Cache-Busting auf v23.

## Bearbeitungscode
Standard-PIN: `1020`

Wenn `config.js` auf einen Worker zeigt, kann dessen Admin-PIN abweichend konfiguriert sein. Fällt der Worker aus, akzeptiert die lokale Redaktionsansicht weiterhin `1020`.
