# OST 1020 – Startseite, Fachlisten und Feedback (Oktober 2026)

## Änderungen
- Startseite zeigt nach dem Titel nur noch globale Suche, **Aktuelles** und **Diese Woche**. Wissens- und Trainingsbereiche werden über die feste untere Navigation und ihre eigenen Übersichtsseiten geöffnet. „Zuletzt angesehen“ und Themenkacheln werden nicht auf der Startseite angezeigt.
- „Mehr“ ist ein Bottom-Sheet mit Pfeilsymbol nach oben; Dienstbesprechungen, Lehrmeinungsänderungen, Redaktion und Fehler melden sind dort zu finden. Aktuelles ist direkt auf der Startseite sowie auf `aktuelles.html` erreichbar.
- Responsive bottom navigation: zusätzlicher unterer Seitenabstand einschließlich `safe-area-inset-bottom`, damit insbesondere die Wochenübersicht nicht durch das Menü verdeckt wird. Die Kalenderseite erhält ebenfalls mehr Platz unter dem Inhalt.
- Fachübersichten Diagnostik und Algorithmen/Schemata werden als kompakte Zeilen mit weniger Abständen dargestellt. Inhalte der Detailansichten bleiben unverändert.
- Kontextbezogener Zurück-Button: Detailansicht → Liste, Fachseite → Wissen/Training, ergänzende Bereiche → Start/Aktuelles. Der Button öffnet **nicht** pauschal die Startseite. Navigation über die untere Leiste bleibt verfügbar.
- In der Redaktion können bestehende Einträge aus Algorithmen, Diagnostik, Literatur, Lehrmeinungen, Skills, Simulation und Dienstbesprechungen mit **„Unter Aktuelles veröffentlichen“** in eine verknüpfte Meldung übernommen werden. Auslieferung erfolgt über die bereits bestehende `news`-JSON-Sammlung. Veröffentlichung erfolgt nur auf explizite Bestätigung, nicht bei jeder Inhaltsänderung.
- Startseiten-Meldungen zeigen einen „Inhalt öffnen“-Link, sofern `link` hinterlegt ist.

## Feedback-Speicher / Worker

**Der Fehler „Feedback-Speicher nicht konfiguriert“ bedeutet, dass die bestehende Worker-Version `FEEDBACK_KV` erwartet und das Cloudflare-Binding aktuell fehlt.**

Die neue Worker-Datei (`worker/worker.js`, außerdem `worker.js`) verwendet:
1. `FEEDBACK_KV`, sofern verbunden.
2. Alternativ das bereits für automatische Backups vorgesehene **private R2-Binding `BACKUPS`**, sofern verbunden. In R2 liegen Meldungen unter `private-feedback/feedback:...json` und Drosselungsdaten unter `private-feedback/limit:...json`. R2-Drosselung ist eine Best-Effort-Regel, keine atomare Abuse-Sperre.
3. Ist weder `FEEDBACK_KV` noch `BACKUPS` verbunden, wird eine klare HTTP-503-Fehlermeldung zurückgegeben. **Ohne persistenten Cloudflare-Speicher ist zuverlässige zentrale Meldungsspeicherung nicht möglich.**

Der Eintrag bleibt privat im Worker-Speicher; es gibt keine öffentliche Route zum Lesen der Fehlermeldungen. Die Administration bleibt per Admin-PIN geschützt. Cloudflare WAF/Turnstile ist für öffentliche Feedback-Formulare weiterhin empfehlenswert.

**Worker-Aktualisierung ist erforderlich**, wenn du R2 als KV-freie Alternative nutzen möchtest. Die bestehende KV-Version funktioniert weiterhin ohne neue Konfiguration, sofern du `FEEDBACK_KV` korrekt bindest. Für R2 müssen das Backup-Binding `BACKUPS` und die zugehörige Berechtigung in deinem Cloudflare-Worker vorhanden sein; der Worker erstellt keine Buckets automatisch. Anleitungen für R2/Cron/KV stehen zusätzlich in `UPDATE-WORKER-FUNKTIONEN-2026.md`.

## Vorsicht beim Deployment

1. Zuerst produktive JSON-Dateien, insbesondere `data/events.json`, separat sichern.
2. Aktualisierten Worker deployen, vorhandene Secrets/Binds und CORS-Einstellungen beibehalten.
3. Website-Dateien veröffentlichen und Cache neu laden. Aktuelle produktive `data/*.json` NICHT blind mit ZIP-Inhalten ersetzen.
4. Prüfen: mobiles Menü inkl. Safe Area, Termin am Seitenende, Feedback-Meldung und Admin-Ansicht, Redaktion → Meldung veröffentlichen und Link öffnen, Zurück von Detailseiten.

Die Änderung ist überwiegend Frontend. **Nur die Feedback-Speicher-Alternative erfordert neue Worker-Logik.** Automatische Backups benötigen weiterhin ihren vorhandenen R2-Bucket und Cron Trigger. Die bestehende Speicherung von Teilnehmerdaten in öffentlichem GitHub-JSON ist nicht vertraulich und sollte vor produktiver Nutzung mit Klarnamen gesondert abgesichert/migriert werden.
