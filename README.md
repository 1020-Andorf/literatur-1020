# OST 1020 – Wissenssammlung v2.6

Neues immersives Dashboard als Ergänzung zu VitaSim.

## Bereiche
- Dashboard / Aktuelles
- Literatursammlung
- ABCDE
- Differentialdiagnostik
- Skilltraining
- Algorithmen & Leitlinien
- Lehrmeinungsänderungen
- Termine mit Kalenderansicht
- VitaSim Anleitung
- Materialien
- PIN-geschützte Redaktion

## Redaktion
Fallback-PIN ohne Worker: `1020`. Bei Worker-Nutzung gilt `ADMIN_PIN_SHA256`.

## Upload
Den gesamten Inhalt dieses Ordners in die Wurzel des GitHub-Pages-Repositories kopieren. Den Worker für die neuen Datenbereiche ebenfalls aktualisieren.


## Redaktions-PIN
Die Weboberfläche erwartet PIN **1020**. Wenn ein Cloudflare Worker konfiguriert ist, muss dort `ADMIN_PIN_SHA256` exakt auf folgenden Wert gesetzt sein:

`f296867839c8befafed32b55a7c11ab4ad14387d2434b970a55237d537bc9353`

Ist der Worker-Hash anders, wird 1020 serverseitig abgelehnt.
