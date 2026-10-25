OST 1020 – Update 569 – Leitsymptom-Zentrale
Basis: Update 568.

ÖFFENTLICH
- Hauptnavigation: Wissen -> Leitsymptome
- Anzeige: Organsystem wählen -> Leitsymptom öffnen -> umfassender Fachartikel
- Die bisherigen Tabs Anatomie/Krankheitsbilder/Fachbegriffe/Materialien entfallen nur im öffentlichen Themen-Hub.
- Artikel integrieren bestehende Warnzeichen, Anamnese, Ursachen/Krankheitsbilder mit Befunden und Medikamenten und passende Hintergrundmodule zur Organgruppe.
- Datenmodell und redaktionelle Bereiche bleiben erhalten. Inhalte werden nicht automatisch in einen einzigen JSON-Datensatz migriert.
- Bisherige URL-Parameter mit ansicht=anatomy etc. zeigen jetzt das Leitsymptomportal.

REDAKTION
Bestehende Redaktionsansichten und JSON-Importer bleiben bestehen. Neue Einzel-Eingabefelder und ein neuer Leitsymptom-JSON-Import sind noch NICHT enthalten.

INSTALLATION
Sicherung erstellen. portal.js, portal.css, editor.html austauschen. Sonstige Dateien unverändert lassen. Cache leeren.

PRÜFUNG
JavaScript-Syntaxprüfung durchgeführt. Kein E2E-Test gegen produktiven Cloudflare-Worker möglich. Bitte mit Testdaten prüfen.
Medizinische Inhalte vor Veröffentlichung ärztlich/fachlich prüfen; Anwendung gemäß österreichischen Kompetenzen und Dienstanweisungen.
