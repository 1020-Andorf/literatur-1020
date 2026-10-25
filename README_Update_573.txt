OST 1020 – Update 573 (Teilumsetzung)

- Organsysteme und Leitsymptome: Einspaltige Kacheln, klare Textumbrüche, an bestehendes dunkelblau/rot/weißes Design angeglichen.
- Oberer Stift im Leitsymptomartikel bearbeitet den Titel, nicht mehr den gesamten Artikel.
- Überblick: Rich-Text-Editor direkt im Abschnitt mit Fett, Kursiv, Unterstreichen, Aufzählung, nummerierter Liste, Überschriften, Schriftfamilie, Schriftgrößen, HTTPS-Link und HTTPS-Bild.
- Bestehende PIN-Verifikation und Worker-Speicherung beibehalten.
- Bereits bestehende Abschnittsstifte für Red Flags, Anamnese, Krankheitsbilder und Merksätze bleiben vorhanden.

EINSCHRÄNKUNGEN:
- Noch nicht alle Trainings-, Material- und sonstigen Inhaltsmodule verfügen über Stift-/Rich-Text-Bearbeitung. Ihre Datenmodelle sind unterschiedlich; der bestehende Redaktionseditor bleibt als Sicherheitsreserve erhalten.
- Eigene Bilddateien direkt hochladen wurde mit dieser Teilumsetzung nicht ergänzt; unterstützt werden HTTPS-Bild-URLs.
- Aus Sicherheitsgründen wird HTML bereinigt. Beliebige CSS-Schriftfarben oder frei importierte Fonts werden nicht gespeichert.
- Die JavaScript-Syntax wurde geprüft; keine Live-Prüfung mit dem produktiven Cloudflare-Worker.

Vor Deployment: Bestandsdaten und Worker-Daten sichern, unter Test-URL ausprobieren.

Ergänzung: Training → Geräte und Übungschecklisten sowie Materialien → Leitlinien, Checklisten und Merkhilfen besitzen außerdem PIN-geschützte In-situ-Bearbeitung von Titel und Haupt-Freitextfeld. Skill-Übungen mit verschachtelten Fragen sowie Literaturdatensätze und andere Spezialmodule sind noch nicht vollständig umgestellt.
