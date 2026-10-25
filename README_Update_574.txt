OST 1020 – Update 574 | Installations- und Testhinweise

Grundlage: das bereitgestellte vollständige Projekt, weiterentwickelt aus Update 573.

ÄNDERUNGEN
- Organsysteme und Leitsymptome: einspaltige, niedrigere weiße Kacheln mit roter Seitenmarkierung. Legacy-Gridregeln werden gezielt überschrieben.
- Leitsymptomartikel: Titel wird an ursprünglicher Stelle bearbeitet; Überblick, Red Flags, Anamnese und Merksätze haben direkt an der jeweiligen Stelle einen Editor mit Listen, Schriftarten, Schriftgrößen, Links, Bild-URLs und Fensterfarben.
- Krankheitsbilder bleiben aufklappbar. Ihre Spezialfelder werden weiterhin im jeweils geöffneten Krankheitsbild bearbeitet.
- Wiederverwendbare PIN-geschützte In-situ-Bearbeitung bei zahlreichen Einträgen in Aktuelles, Literatur, Lehrmeinungen, Besprechungen, Terminen, Training, Materialien. Eigene Bearbeitung für Skillgruppen inklusive Unterpunkte.
- Bestehender Worker, Datensätze und Redaktionsansicht bleiben erhalten.

EINSCHRÄNKUNGEN / BEKANNTES
- Noch nicht jeder Untertyp hat eine vollständig identische Rich-Text-Oberfläche; etwa strukturierte Krankheitsbildfelder, Tabellen, Anhänge, Teilnehmerlisten und Materialdateien besitzen eigene Bearbeitungsmodelle.
- Bild-Einfügung über HTTPS-URL, kein integrierter lokaler Upload in allen Editoren.
- Bei In-situ-Bearbeitung von generischen Datensätzen werden Inhalte nach erfolgreicher Speicherung durch einen Reload aktualisiert.
- Der Browser-Editor nutzt document.execCommand. Dieses API gilt als veraltet; für eine langfristig stabile Redaktionslösung sollte ein dedizierter strukturierter Rich-Text-Editor folgen.
- Die workerseitige PIN-Prüfung wird weiterhin wie bisher verwendet. Eine produktive Ende-zu-Ende-Verifikation ist hier nicht erfolgt.
- Redaktion bitte nicht löschen, da unter anderem Neuanlage, Löschung und komplexe Anlagen noch dort erfolgen können.

INSTALLATION
1. Vorhandene GitHub-Version sowie Cloudflare-Worker/KV-Daten sichern.
2. Projektdateien aus diesem ZIP deployen; Worker-Konfiguration prüfen.
3. Browsercache leeren und zunächst auf Test-URL prüfen.
4. Insbesondere Titel, Red Flags, Listen, Farben, Skills, Termine, Literatur, Materialien und Speichern/Neu-Laden testen.

SYNTAXPRÜFUNG: portal.js und worker/worker.js mit node --check.
