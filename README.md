# OST 1020 – Wissenssammlung v3.4.2

Fehlerbehebung für PDF-/Bild-Uploads:

- Hochgeladene Dateien werden nach erfolgreichem Upload jetzt **sofort in der jeweiligen Algorithmus-Materialsektion gespeichert und synchronisiert**. Ein zusätzlicher Klick auf „Speichern“ ist dafür nicht mehr nötig.
- Uploadstatus zeigt klar an, ob Upload + Worker-Synchronisation erfolgreich waren.
- Uploadlimit auf ca. 20 MB pro Datei angehoben.
- Optional kann im Cloudflare Worker `PUBLIC_BASE_URL` gesetzt werden (z. B. `https://1020-andorf.github.io`), damit gespeicherte Dateien über die GitHub-Pages-URL statt `raw.githubusercontent.com` geöffnet werden.
- Ohne `PUBLIC_BASE_URL` wird weiterhin die Raw-GitHub-URL verwendet.

# OST 1020 – Wissenssammlung v3.4.1

Kleine UI-Anpassung auf Basis von v3.4:
- neues ABCDE-Symbol im Schnellzugriff
- neues Skilltraining-Symbol im Schnellzugriff
- Untertitel in allen Schnellzugriff-Kacheln entfernt

# OST 1020 – Wissenssammlung v3.4

UX-/Redaktionsupdate.

Neu: kompakterer Kalender, farbig markierte Termintage, größere Skill-Unterpunkte, vollständig strukturierte Skill-Redaktion, bearbeitbare Krankheitsbilder mit Kurzinfos, Algorithmen inklusive Flowchart/Leitlinie und eigener Materialsektion mit Hintergrundinfos/Checklisten.

Für Uploads und zentrale Speicherung den enthaltenen `worker/worker.js` deployen.
