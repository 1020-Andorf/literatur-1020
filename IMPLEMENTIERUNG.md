# Implementierte Erweiterungen – 08.09.2026

## Neue öffentliche Filter
- Level: RS / RS–NFS / NFS
- Sprache: Deutsch / Englisch
- Evidenz-/Dokumenttyp
- Zugriff: Open Access / freie Version / Paywall
- Themenfilter und Volltextsuche bleiben bestehen
- Alle Filter lassen sich kombinieren und gemeinsam zurücksetzen

## Erweiterte Artikelkarten
- Level
- Sprache
- Evidenz-/Dokumenttyp
- Zugriff
- Lizenz / Open-Access-Hinweis
- DOI, Originalquelle und ggf. separate freie Version

## Redaktion
Im Artikel-Editor wurden Felder für Level, Sprache und Lizenz ergänzt. Die bestehenden Worker-Endpunkte benötigen dafür keine Änderung, weil vollständige Artikelobjekte gespeichert werden.

## Startbestand
Die bestehende Sammlung wurde erhalten und um die im Chat zusammengestellte Open-Access-Liste zu Rettungsdienst und Notfallmedizin erweitert. Der Datenbestand umfasst beim Stand dieser ZIP 44 Einträge.

Hinweis: Lizenzangaben wurden nur konkret benannt, wenn sie eindeutig zuordenbar waren. Bei anderen Open-Access-Artikeln verweist die Kennzeichnung bewusst auf den Originalartikel.

## Archivfunktion (Version 4)
- Öffentliche Umschaltung zwischen **Aktuell** und **Archiv**.
- Artikel werden nach mehr als 30 Tagen automatisch in der Archivansicht geführt. Maßgeblich ist `activeSince`, ersatzweise `added`.
- In der Redaktion kann ein Artikel jederzeit manuell mit **Ins Archiv verschieben** archiviert werden.
- Archivierte Artikel können mit **Aus Archiv auf Startseite** zurückgeholt werden. Dabei wird `activeSince` auf den aktuellen Tag gesetzt und der 30-Tage-Timer beginnt neu.
- Initial bleiben zwei kuratierte Beiträge auf der Startseite; alle übrigen vorhandenen Beiträge befinden sich im frei zugänglichen Archiv.
- Die Redaktions-PIN wird jetzt beim Öffnen der Redaktion in einem vorgeschalteten Dialog abgefragt und nicht mehr in den Formularen wiederholt.
- Der Worker stellt dafür `POST /auth` zur PIN-Prüfung bereit.
