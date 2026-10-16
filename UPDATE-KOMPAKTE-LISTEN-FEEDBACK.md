# OST 1020 – Kompakte Listen und Feedback-Einrichtung

## Frontend
- Beschreibende Untertitel/Zusatzlabels in Wissen-, Trainings- und Diagnostiklisten entfernt.
- Algorithmen und Schemata ohne Kategorie-/Stand-Untertitel und ohne zusätzliches Typ-Badge.
- Skilltraining zeigt keine Anzahl der Skills in Gruppen und keine Anzahl der Bereiche je Skill.
- Medizinische Angaben in den eigentlichen Detailseiten, Quellenhinweise und sicherheitsrelevante Warnungen bleiben erhalten.
- Layout auf Mobilgeräten kompakter; Cacheversion 426.

## Cloudflare Worker: Feedback-Speicher aktivieren

**Achtung:** Nur GitHub Pages oder das Hochladen der Website-Dateien reicht nicht aus. Das Binding muss im Cloudflare-Worker hinzugefügt und dieser mit dem aktuellen `worker.js` aus der ZIP bereitgestellt werden. Vor dem Austausch vorhandene Worker-Konfiguration und Secrets sichern.

### Option A: Cloudflare KV (empfohlen, falls noch kein privates R2 für OST 1020 existiert)
1. Im Cloudflare Dashboard unter Storage & Databases → KV eine Namespace anlegen, z. B. `ost1020-feedback`.
2. Workers & Pages → deinen bestehenden OST-1020-Worker → Settings → Bindings → Add Binding → KV Namespace.
3. Variablenname **genau** `FEEDBACK_KV` eingeben, Namespace `ost1020-feedback` auswählen, speichern und bei Bedarf deployen.
4. Sicherstellen, dass der Worker-Code die `FEEDBACK_KV`-Variante unterstützt (Dateien `worker.js` und `worker/worker.js` in dieser ZIP).
5. Testmeldung über die Website absenden; anschließend die Meldung in Redaktion → Fehlermeldungen aufrufen. Nur redaktionell angemeldete Personen dürfen Meldungen lesen/bearbeiten.

### Option B: Bereits vorhandenes privates Cloudflare R2
1. In Cloudflare ein privates R2-Bucket anlegen bzw. vorhandenes Bucket für OST 1020 verwenden (z. B. `ost1020-backups`). **Nicht öffentlich zugänglich machen**.
2. Unter Workers & Pages → OST-1020-Worker → Settings → Bindings → Add Binding → R2 Bucket.
3. Binding-Name **genau** `BACKUPS`, das passende Bucket auswählen und speichern.
4. Worker-Code aus der ZIP deployen. Wird `FEEDBACK_KV` nicht gefunden, verwendet der Worker das `BACKUPS`-Binding für Feedback-Daten in `private-feedback/`.
5. Testmeldung absenden und in der Redaktion prüfen.

### Wrangler-Beispiele
```
[[kv_namespaces]]
binding = "FEEDBACK_KV"
id = "DEINE_KV_NAMESPACE_ID"
```
ODER
```
[[r2_buckets]]
binding = "BACKUPS"
bucket_name = "ost1020-backups"
```
Diese Abschnitte **in die bestehende** Wrangler-Konfiguration übernehmen, nicht die gesamte Konfiguration blind ersetzen. Vorhandene Bindings, GitHub-Token, Secrets, Admin-PIN und CORS-Domain müssen erhalten bleiben.

### Fehlersuche
- `Feedback-Speicher nicht konfiguriert` / HTTP 503: weder `FEEDBACK_KV` noch `BACKUPS` ist in der **laufenden** Worker-Umgebung gebunden, oder es läuft noch alter Code.
- Worker-Route/Domain prüfen: `config.js` muss auf den tatsächlich aktualisierten Worker zeigen.
- Nach Änderung Bindings speichern/deployen und Website neu laden.
- Falls Speicherung weiterhin fehlschlägt, Worker-Logs prüfen; keine Zugangstokens/PINs öffentlich teilen.
- Bei R2 ist die Rate-Begrenzung nur Best Effort. Für öffentliche Feedback-Formulare sind WAF/Turnstile und restriktive Admin-Rechte empfehlenswert.

## Wichtiger Datenschutzhinweis
Feedback kann personenbezogene Daten enthalten. Nur private Speicher verwenden, Zugriffsrechte und Aufbewahrung beachten; die vorhandene Feedback-Funktion ersetzt keine Datenschutzprüfung. Produktive `data/*.json` nicht blind durch die ZIP-Dateien überschreiben.
