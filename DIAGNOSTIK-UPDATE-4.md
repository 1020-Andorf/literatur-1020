# Diagnostik – UI-Feinschliff

- Alle Fachbereiche bleiben zunächst zugeklappt und sind farblich differenziert.
- Symptomauswahl ohne störende Anzahl-Badges.
- Krankheitsbild-Karten kompakter: Titel, einheitliches indikatives Icon und gekürzte physiologische Erklärung. Detaillierte Befunde, CAVE und Quellen erst auf der Krankheitsbild-Detailseite.
- Suchergebnisse im selben kompakten Stil.
- Fieber und Purpura dem Bereich Infektion & Allgemein zugeordnet.
- Bestehende Redaktionsfelder und Cloudflare-Worker-Endpunkte bleiben unverändert.

## Update / Datensicherung

Vorher vollständiges GitHub-Backup sowie Sicherung der Diagnostik-JSON durchführen. Der Upload einer neuen `data/differential.json` überschreibt die bisherige Version im Repository; Daten im anderen Inhaltsbereich werden durch die Code-Änderung nicht aktiv gelöscht. Die clientseitige Merge-Funktion erhält grundsätzlich ältere bearbeitete Einträge, kann aber ältere Beschreibungen gegenüber neuen Basistexten priorisieren.

Medizinische Angaben dienen der Ausbildung und bedürfen einer abschließenden fachlichen Prüfung. Recherchelinks führen großteils zu PubMed-Suchen, nicht zu einzeln geprüften Leitlinien.
