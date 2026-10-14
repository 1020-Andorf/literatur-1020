# Startseite, Algorithmen und Schemata – Update

- Startseite: Kalender **Diese Woche** unmittelbar unter der Suche und vor den vier großen Bereichskacheln.
- Kurze aktuelle Meldungen ohne Überschrift „Aktuelles“; Link „Alle Meldungen“ bleibt bestehen.
- Hinweis „Vier schnelle Einstiege in die Wissenssammlung“ entfernt; Einstiegskacheln kompakter gestaltet.
- Algorithmen erscheinen vor „Schemata & Merkhilfen“.
- In den Detailseiten stehen Hintergrundinformationen und Checklisten direkt als verlinkte Listen, nicht mehr in Untermenüs.
- Schema- und Algorithmuseinträge können optional ein Bild (`imageUrl`) und eine Bildunterschrift (`imageCaption`) enthalten. In **Redaktion → Algorithmen & Schemata** sind passende Eingabefelder und ein Bild-Upload ergänzt. Vorhandene Inhalte ohne Bild funktionieren unverändert.

## Betrieb und Datensicherheit

Für diese Änderungen sind keine neuen Worker-Endpunkte erforderlich. Der vorhandene Upload-Endpunkt `/media` und die bestehenden `/content/algorithms`-Routen werden genutzt. Der für die frühere Einführung der Dienstbesprechungen aktualisierte Worker wird weiterhin vorausgesetzt.

Das Hochladen eines Bildes über die Redaktion benötigt einen funktionierenden Media-Upload am Worker. Externe Bild-URLs können alternativ hinterlegt werden. Vorhandene Inhalte werden durch ein rein statisches Update nicht automatisch gelöscht; beim Überschreiben von JSON-Dateien können redaktionelle Änderungen im Repository jedoch verloren gehen. Vor dem Deploy ein Backup anlegen und ggf. Daten zusammenführen.

Syntax und JSON wurden geprüft; ein vollständiger Live-Test gegen den produktiven Worker wurde nicht ausgeführt.
