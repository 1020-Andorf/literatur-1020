# OST 1020 – konsolidierter Code-Stand 592

Ausgangsbasis: vom Nutzer bereitgestellte Main-Version, bereinigt in 591.

## Durchgeführt
- 7 CSS-Teildateien in die bestehende portal.css zusammengeführt, in exakt derselben Lade- und Kaskadenreihenfolge. Keine Selektoren, Eigenschaften, Werte oder Media Queries gelöscht.
- Alte @import-Abhängigkeiten entfernt; Browser braucht nur noch portal.css.
- CSS/JS-Cacheversion aller HTML-Einstiege einheitlich auf 592 gesetzt.
- Alte Update-README-Dateien entfernt, die nicht zur Laufzeit benötigt werden.
- Ausschließlich überflüssige Leerzeilen in portal.js und portal-data.js bereinigt; Verhalten bleibt unverändert.
- Datendateien, Cloudflare-Worker, Assets, App-Routing und Verwaltungsfunktionen unverändert.

## Bewusst nicht blind entfernt
- Historische CSS-Selektoren, auch wenn sie nach alten Versionsnummern benannt sind: Sie können noch im laufenden DOM verwendet werden.
- Alte editor()-Funktion und editorbezogene JS-Helfer: Eine statische Referenzsuche beweist nicht, dass alle Export-/Sicherungsworkflows ersetzt sind.
- knowledge-seed.js, diagnostic-theory.js und portal-data.js: Werden in den HTML-Seiten explizit geladen.
- Sonstige dynamisch referenzierte Dateien und Endpunkte.

## Prüfhinweise
- Syntaxchecks und lokale Datenprüfungen ersetzen keine Browsertests mit Cloudflare.
- Nach Deployment: Startseite, Leitsymptome, Bearbeitungs-PIN, Skills, Literatur, Terminexport, Administration, Backup und Restore testen.
- Archiv 591 bis zur Freigabe als Rückfallstand behalten.
