# OST 1020 – Worker-Erweiterungen 2026

## Neuerungen

1. **Termine:** Server prüft Ende in Zeitzone `Europe/Vienna` (optional `event.timezone`), Teilnehmerlimits, Doppelanmeldungen und Warteliste. Bei Stornierung rückt die erste Person auf der Warteliste nach. Die Antwort enthält den Wartelistenstatus. GitHub-`sha` wird bei parallelen Schreibvorgängen bis zu dreimal neu geladen, um Datenverluste zu reduzieren (keine vollständige Transaktionsgarantie).
2. **Versionshistorie:** Redaktion > Wartung > Versionsverlauf; GitHub-Commits der betreffenden JSON-Datei werden angezeigt. Historische JSON-Versionen können nach PIN-Prüfung wiederhergestellt werden; Wiederherstellung wird erneut committet. Das bisherige aktuelle Dokument bleibt dadurch im GitHub-Verlauf erhalten.
3. **Backups:** Cloudflare R2-Bucket `BACKUPS`, `scheduled` Cron (Beispiel täglich 03:00 UTC) sowie manueller Backup-Button. Jeder Snapshot enthält alle `data/*.json`-Sammlungen der Worker-Inhalte. **Enthält Teilnehmerdaten** – Bucket privat halten, Zugriff beschränken und Aufbewahrungs-/Löschfristen festlegen. Automatik läuft erst nach Einrichtung des R2-Bindings UND Cron-Triggers. Kein automatischer Restore ganzer Snapshots in der Oberfläche; Einzeldateien über GitHub-Historie möglich.
4. **Fehler melden:** In mobilem Menü `Mehr` > `Fehler melden`. Speicherung in `FEEDBACK_KV`. Rate-Limit 1 Meldung pro IP in fünf Minuten; IP-Adresse wird nur gehasht, nicht im Meldedatensatz abgelegt. Redaktion zeigt die Meldungen und erlaubt Status „erledigt“. Für den öffentlichen Endpunkt sind zusätzliche Cloudflare-WAF-/Turnstile-Regeln empfehlenswert. Ohne KV-Binding gibt die API 503 zurück. KV-Listen zeigen zunächst bis zu 100 Meldungen.
5. **Leitlinien-Aktualität:** Neue optionale Felder `lastReviewed`, `reviewDue`, `reviewOwner` bei Algorithmen und Lehrmeinungsänderungen. In der Redaktion können fällige oder noch nicht datierte Datensätze angezeigt werden. Die Prüfung erfolgt anhand hinterlegter Metadaten; **keine automatische wissenschaftliche Verifikation externer Leitlinien**.

## Endpunkte

- `POST /events/rsvp/:id` (öffentlich, vorhanden – Warteliste ergänzt)
- `POST /feedback` (öffentlich, KV erforderlich)
- `GET /admin/feedback` und `PATCH /admin/feedback/:id` (PIN erforderlich)
- `GET /admin/history?name=algorithms`, `POST /admin/restore` (PIN erforderlich)
- `POST /admin/backup`, `GET /admin/backup-status` (PIN erforderlich, R2)
- `GET /admin/review` (PIN erforderlich)

## Deployment – Reihenfolge

1. **Vorher produktive Daten sichern:** Aktuelle `data/*.json`, insbesondere `events.json`, lokal sichern. Dabei berücksichtigen, dass im Repository gespeicherte Teilnehmernamen personenbezogene Daten sind.
2. Worker sichern (Quellcode und Cloudflare-Einstellungen). Sicherstellen, dass `GITHUB_TOKEN`, `GITHUB_OWNER`, `GITHUB_REPO`, `GITHUB_BRANCH` und `ADMIN_PIN_SHA256` korrekt gesetzt sind.
3. In Cloudflare **privaten R2-Bucket** `ost1020-backups` erstellen und als `BACKUPS` binden. KV-Namespace erstellen und als `FEEDBACK_KV` binden. Separates starkes Secret `FEEDBACK_SALT` hinterlegen. Beispieldatei `worker/wrangler.example.toml` als Ausgangspunkt verwenden, nicht blind bestehende Konfiguration überschreiben.
4. Für tägliche automatische R2-Backups einen **Cron Trigger** `0 3 * * *` einrichten. Cron-Ausführung mit Logs und einem manuellen Test überprüfen. R2-Aufbewahrungsregeln/Monitoring separat einrichten.
5. Den aktualisierten Worker aus `worker/worker.js` (identische Kopie in `worker.js`) deployen. Danach im Cloudflare-Dashboard R2/KV-Bindings und CORS prüfen. Als ersten Test in Redaktion > Wartung ein **manuelles Backup** ausführen, dann auf das R2-Objekt prüfen.
6. Frontend deployen. **Produktive, zwischenzeitlich redigierte `data/*.json` nicht durch die Version aus der ZIP überschreiben!** Übertrage primär Frontenddateien und Worker, danach Inhalte gezielt zusammenführen.
7. Prüfen: Anmeldung offener Termine, Wartelistenposition, Storno-Aufrücken, Sperre abgelaufener Termine, Verlauf, Backup, Feedback, Reviewfelder.

## Migration und Sicherheit

- Bestehende Daten bleiben im selben Format; neue Felder (`waitlist`, `lastReviewed`, `reviewDue`, `reviewOwner`) sind optional. Keine Datenbankmigration erforderlich.
- Es gibt **keine Konten-/Identitätsprüfung für Teilnehmer**. Eine lokal erzeugte `clientId` ist keine sichere Identität; das System eignet sich für informelle Anmeldungen, nicht für hochsichere Buchungsprozesse. Für verbindliche Personenzuordnung wären Login oder Einladungstoken notwendig.
- GitHub dient hier weiterhin als Datenspeicher. Bei sehr vielen gleichzeitigen Anmeldungen sind transaktionale Speicherung mit Cloudflare D1/Durable Objects und Authentifizierung sinnvoll; GitHub-Commits sind keine Datenbanktransaktionen.
- Die neue Fassung benötigt **zwingend Worker-Deployment** für alle serverseitigen Funktionen. Ohne neue R2-/KV-Bindings laufen nur die übrigen Worker-Endpunkte; automatische Backups und Rückmeldungen sind nicht aktiviert.
- Sicherheitsrelevante Empfehlungen: GitHub-Token mit minimalem Repository-Schreibzugriff, PIN/Secrets nie im Frontend, private R2-Backups, Cloudflare-WAF für öffentliche Endpunkte, Zugriff auf gespeicherte Teilnehmerlisten einschränken, regelmäßige Restore-Tests.

## Bestehende Datenschutzgrenze

**Achtung:** Der bisherige Aufbau veröffentlicht `events.json` einschließlich Teilnehmerdaten über GitHub und den öffentlichen Content-Endpunkt. Solange personenbezogene Registrierungsdaten in einem öffentlich zugänglichen GitHub-Repository oder öffentlichen GitHub-Pages-Dateien liegen, ist die Lösung **nicht vertraulich**. Diesen Zustand behebt das aktuelle rückwärtskompatible Update nicht. Vor einem produktiven Einsatz mit Klarnamen sollte eine gesonderte Migration der personenbezogenen Termin- und Wartelistendaten nach D1 (privat) samt authentifizierter Redaktionsansicht geplant werden. Bis dahin möglichst keine sensiblen persönlichen Daten sammeln, Teilnehmer informieren, Löschfristen prüfen und keine Vertraulichkeit behaupten. Die Freigabe weiterer personenbezogener Daten sollte erst nach dieser Migration erfolgen.

Fehlermeldungen sollten keine Patientendaten enthalten. Der Worker prüft bei konfiguriertem `ALLOWED_ORIGIN` zusätzlich die Browser-Origin, dies ersetzt jedoch keine Authentifizierung und schützt nicht vor direkten API-Anfragen.
