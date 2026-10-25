OST 1020 – Update 572 (erste technisch integrierte Umbaustufe)

Basis: hochgeladenes vollständiges Projekt literatur-1020-main(5).zip.

Umgesetzt:
- Organsystem-Auswahl und Leitsymptom-Auswahl mit responsiven, farbigen Karten.
- Zähler bei Organsystemen aus den aktuell geladenen Leitsymptom-Daten.
- Krankheitsbilder wieder als einzeln einklappbare Elemente.
- Ausklappbares Artikel-Inhaltsmenü mit Abschnittslinks.
- Stift-Editor für Artikelabschnitte wird DIREKT im bearbeiteten Kasten angezeigt (nicht mehr am Seitenende).
- PIN-Check sowie bestehende Worker-POST/PUT-Speicherung bleiben unverändert.
- Bestehende Daten sind nicht gelöscht; Anatomie und Fachbegriffe werden nicht als eigene Tabs im Leitsymptom-Hub angeboten.

Noch NICHT umgesetzt:
- Vollwertiger Rich-Text-Editor für JEDES Datenfeld: bisher formatierbarer Editor für Merksätze/Zusatzinhalte, übrige Felder einfache Eingaben direkt in der Karte.
- Frei wählbare Farben und Offen/Geschlossen-Status je Datenkarte mit persistenter Datenspeicherung.
- Bild-Upload direkt aus jeder Fachkarte: bisher URL im Rich-Text-Editor; Medien-API im Worker ist vorhanden.
- Inline-Editieren in Training, Materialien und anderen Modulen.
- Entfernung der bisherigen Redaktion (bewusst beibehalten als Rückfalloption).
- Browser-End-to-End-Tests / Cloudflare-Livetest.

Sicherheit:
- Bearbeitung prüft PIN über /auth und Speichern über PIN-geschützte PUT-Routen des Cloudflare Workers.
- Vor Deployment ein Backup von GitHub/Daten erstellen.
- Auf einer Staging-Version testen; medizinische Texte redaktionell prüfen.

Installation: Dateien aus diesem vollständigen Projekt-Archiv übernehmen, insbesondere portal.js und portal.css. Cloudflare-Worker wurde in dieser Stufe NICHT geändert.
