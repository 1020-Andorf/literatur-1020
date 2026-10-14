window.OST1020_DATA = {
  "abcde": [
    {
      "id": "a",
      "key": "A",
      "title": "Airway",
      "checks": [
        "Spricht der Patient frei?",
        "Atemweg frei oder verlegt?",
        "Stridor, Schnarchen, Gurgeln oder Fremdkörper?",
        "Bei Trauma HWS-Schutz berücksichtigen"
      ],
      "actions": [
        "Atemweg freimachen und absaugen",
        "Kopfposition / Esmarch-Handgriff nach Situation",
        "Guedel/Wendl nach Indikation",
        "Erweiterte Atemwegshilfe vorbereiten"
      ],
      "pitfalls": [
        "Atemweg nicht früh genug priorisiert",
        "Absaugung oder Hilfsmittel nicht vorbereitet"
      ]
    },
    {
      "id": "b",
      "key": "B",
      "title": "Breathing",
      "checks": [
        "Atemfrequenz und Atemmuster",
        "Thoraxexkursion und Atemarbeit",
        "SpO₂ und Hautkolorit",
        "Auskultation / Atemgeräusche"
      ],
      "actions": [
        "Sauerstoffgabe nach Indikation",
        "Beutel-Maskenbeatmung vorbereiten",
        "Lagerung optimieren",
        "Ventilation und Oxygenierung reevaluieren"
      ],
      "pitfalls": [
        "Sauerstoffgabe nicht angepasst",
        "Erschöpfung oder stille Lunge übersehen"
      ]
    },
    {
      "id": "c",
      "key": "C",
      "title": "Circulation",
      "checks": [
        "Puls, Blutdruck und Rekap-Zeit",
        "Starke Blutung?",
        "Hauttemperatur und Perfusion",
        "Schockzeichen / Rhythmus"
      ],
      "actions": [
        "Blutstillung",
        "Wärmeerhalt und Lagerung",
        "i.v./i.o.-Zugang nach Standard",
        "Monitoring und Reevaluation"
      ],
      "pitfalls": [
        "Blutung übersehen",
        "Schockzeichen nicht erkannt"
      ]
    },
    {
      "id": "d",
      "key": "D",
      "title": "Disability",
      "checks": [
        "AVPU / GCS",
        "Pupillen",
        "Blutzucker",
        "FAST / neurologische Defizite / Krampfaktivität"
      ],
      "actions": [
        "Blutzucker korrigieren nach Standard",
        "Stroke-Screening",
        "Krampfmanagement",
        "Neurologischen Verlauf reevaluieren"
      ],
      "pitfalls": [
        "Hypoglykämie nicht ausgeschlossen",
        "Neurologische Verschlechterung zu spät erkannt"
      ]
    },
    {
      "id": "e",
      "key": "E",
      "title": "Exposure",
      "checks": [
        "Ganzkörperinspektion",
        "SAMPLE(R) / OPQRST",
        "Temperatur und Umfeld",
        "Verletzungen, Haut und Schmerz"
      ],
      "actions": [
        "Ganzkörperuntersuchung",
        "Wärmeerhalt",
        "Gezielte Anamnese",
        "Befunde dokumentieren und reevaluieren"
      ],
      "pitfalls": [
        "Wärmeerhalt vergessen",
        "Verdeckte Verletzungen übersehen"
      ]
    }
  ],
  "algorithms": [
    {
      "id": "reanimation",
      "icon": "❤️",
      "title": "Reanimation Erwachsene",
      "category": "Reanimation",
      "stand": "ERC 2025",
      "steps": [
        "Kreislaufstillstand erkennen und Hilfe rufen",
        "CPR 30:2 beginnen / Defibrillator anschließen",
        "Rhythmus analysieren",
        "Schockbarer Rhythmus: Defibrillieren und sofort CPR fortsetzen",
        "Nicht schockbarer Rhythmus: CPR fortsetzen, Ursachen behandeln",
        "Alle 2 Minuten Rhythmus und ROSC prüfen"
      ],
      "source": "ERC Guidelines / lokale SOP beachten",
      "sourceUrl": "",
      "embedUrl": "",
      "materials": {
        "background": [],
        "checklists": []
      }
    },
    {
      "id": "anaphylaxie",
      "icon": "💉",
      "title": "Anaphylaxie",
      "category": "Internistisch",
      "stand": "lokale SOP",
      "steps": [
        "ABCDE und Trigger entfernen",
        "Adrenalin i.m. nach Standard",
        "Sauerstoff / Atemwegsmanagement",
        "i.v. Zugang und Volumen nach Standard",
        "Reevaluation und frühzeitiger Transport"
      ],
      "source": "Lokale SOP / Leitlinie",
      "sourceUrl": "",
      "embedUrl": "",
      "materials": {
        "background": [],
        "checklists": []
      }
    },
    {
      "id": "stroke",
      "icon": "🧠",
      "title": "Schlaganfall",
      "category": "Neurologie",
      "stand": "aktuell",
      "steps": [
        "FAST / neurologisches Defizit erkennen",
        "Last seen well erheben",
        "BZ ausschließen",
        "Monitoring und Transportpriorität",
        "Stroke Unit voranmelden"
      ],
      "source": "Lokale SOP / aktuelle Schlaganfall-Leitlinie",
      "sourceUrl": "",
      "embedUrl": "",
      "materials": {
        "background": [],
        "checklists": []
      }
    },
    {
      "id": "trauma",
      "icon": "🩹",
      "title": "Trauma",
      "category": "Trauma",
      "stand": "aktuell",
      "steps": [
        "kritische Blutung stoppen",
        "ABCDE mit Trauma-Fokus",
        "MILS / Immobilisation indikationsbezogen",
        "Wärmeerhalt und Analgesie",
        "Transportziel und Zeitkritik festlegen"
      ],
      "source": "Lokale SOP / Trauma-Leitlinie",
      "sourceUrl": "",
      "embedUrl": "",
      "materials": {
        "background": [],
        "checklists": []
      }
    }
  ],
  "articles": [
    {
      "id": "de-stroke-diagnostik-2024",
      "title": "Prähospitale Diagnostik und Therapie des akuten Schlaganfalls",
      "authors": "Berberich A, Podasca C, Urbanek C, Nagel S, Purrucker J et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-023-01273-3",
      "topics": [
        "Neurologie",
        "Schlaganfall",
        "Diagnostik"
      ],
      "type": "CME / Übersicht",
      "read": "15–20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "CC BY 4.0",
      "why": "Praxisnaher Open-Access-CME-Beitrag zu Schlaganfallerkennung, ABC-Problemen, Schweregradeinschätzung und zielgerichteter Klinikzuweisung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-023-01273-3",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-023-01273-3",
      "featured": true,
      "added": "2026-09-08",
      "archived": false,
      "archiveDate": "",
      "activeSince": "2026-09-08"
    },
    {
      "id": "erc-guidelines-2025",
      "title": "European Resuscitation Council Guidelines 2025",
      "authors": "European Resuscitation Council",
      "journal": "ERC Guidelines / Resuscitation",
      "year": 2025,
      "doi": "",
      "topics": [
        "Reanimation",
        "Notfallmedizin",
        "Ausbildung"
      ],
      "type": "Leitlinie",
      "read": "30+ min",
      "access": "oa",
      "why": "Zentrale europäische Referenz für Reanimation. Besonders praktisch sind die frei verfügbaren Kapitel, Algorithmen, Pocket Cards und Ausbildungsunterlagen.",
      "publisherUrl": "https://www.erc.edu/science-research/guidelines/guidelines-2025/",
      "freeUrl": "https://www.erc.edu/download-centre/",
      "featured": false,
      "added": "2026-09-06",
      "level": "rs-nfs",
      "language": "en",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-06"
    },
    {
      "id": "who-prehospital-emergency-care-2025",
      "title": "Prehospital emergency care – operational guidance for ambulance systems",
      "authors": "World Health Organization",
      "journal": "WHO Guidance",
      "year": 2025,
      "doi": "",
      "topics": [
        "Rettungsdienstsystem",
        "Organisation",
        "Qualität"
      ],
      "type": "Guidance",
      "read": "Nachschlagewerk",
      "access": "oa",
      "why": "Sehr umfangreiche WHO-Handreichung zu präklinischen Systemen, Leitstelle, Medical Control, Übergabe, Ausstattung, Infektionsprävention und klinischen Protokollen.",
      "publisherUrl": "https://www.who.int/publications/i/item/9789240114067",
      "freeUrl": "https://www.who.int/publications/i/item/9789240114067",
      "featured": false,
      "added": "2026-09-05",
      "level": "rs-nfs",
      "language": "en",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-05"
    },
    {
      "id": "ems-sepsis-systematic-review",
      "title": "Prehospital management and identification of sepsis by emergency medical services: a systematic review",
      "authors": "Lane et al.",
      "journal": "Emergency Medicine Journal",
      "year": 2016,
      "doi": "10.1136/emermed-2015-205261",
      "topics": [
        "Sepsis",
        "Notfallmedizin",
        "Rettungsdienst"
      ],
      "type": "Systematic Review",
      "read": "15–20 min",
      "access": "paywall",
      "why": "Guter Überblick über die präklinische Erkennung und Versorgung von Sepsis und damit ein interessanter Ausgangspunkt für Fortbildungen zur frühen Identifikation.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/26864327/",
      "freeUrl": "",
      "featured": false,
      "added": "2026-09-04",
      "level": "rs-nfs",
      "language": "en",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-04"
    },
    {
      "id": "emergency-team-competencies",
      "title": "Emergency team competencies: scoping review for briefing and debriefing",
      "authors": "Emergency healthcare research group",
      "journal": "Scoping Review",
      "year": 2023,
      "doi": "",
      "topics": [
        "CRM",
        "Human Factors",
        "Ausbildung",
        "Debriefing"
      ],
      "type": "Scoping Review",
      "read": "15 min",
      "access": "free",
      "why": "Leitet acht zentrale Kompetenzbereiche für Notfallteams ab: Kommunikation, Entscheidungsfindung, klinische Fertigkeiten, Situationsbewusstsein, Führung, Aufgabenmanagement, Zusammenarbeit sowie Stress- und Fatigue-Management.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/37507807/",
      "freeUrl": "https://pubmed.ncbi.nlm.nih.gov/37507807/",
      "featured": false,
      "added": "2026-09-03",
      "level": "rs-nfs",
      "language": "en",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-03"
    },
    {
      "id": "hems-simulation-program",
      "title": "Simulation-based medical education for Ambulance Jet and Helicopter Emergency Medical Services",
      "authors": "Nabecker et al.",
      "journal": "Simulation-based EMS education",
      "year": 2021,
      "doi": "",
      "topics": [
        "Simulation",
        "CRM",
        "HEMS",
        "Ausbildung"
      ],
      "type": "Programmbeschreibung",
      "read": "12–15 min",
      "access": "oa",
      "why": "Praxisnahes Beispiel für wiederkehrendes High-Fidelity-Simulationstraining mit CRM und videounterstütztem Debriefing im luftgebundenen Rettungsdienst.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/PMC10939555/",
      "freeUrl": "https://pubmed.ncbi.nlm.nih.gov/PMC10939555/",
      "featured": false,
      "added": "2026-09-02",
      "level": "rs-nfs",
      "language": "en",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-02"
    },
    {
      "id": "learning-simulation-prehospital",
      "title": "Learning by simulation in prehospital emergency care – an integrative literature review",
      "authors": "Abelsson et al.",
      "journal": "Scandinavian Journal of Caring Sciences",
      "year": 2015,
      "doi": "",
      "topics": [
        "Simulation",
        "Ausbildung",
        "Rettungsdienst"
      ],
      "type": "Literaturreview",
      "read": "12–15 min",
      "access": "paywall",
      "why": "Speziell auf präklinisches Lernen durch Simulation ausgerichtet. Betont unter anderem Kommunikation mit Patient:innen und den Stellenwert des Debriefings.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/26333061/",
      "freeUrl": "",
      "featured": false,
      "added": "2026-09-01",
      "level": "rs-nfs",
      "language": "de",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-01"
    },
    {
      "id": "debriefing-systematic-review-2024",
      "title": "Debriefing Methods for Simulation in Healthcare: A Systematic Review",
      "authors": "Simulation in Healthcare",
      "journal": "Simulation in Healthcare",
      "year": 2024,
      "doi": "10.1097/SIH.0000000000000765",
      "topics": [
        "Debriefing",
        "Simulation",
        "Ausbildung"
      ],
      "type": "Systematic Review",
      "read": "15–20 min",
      "access": "paywall",
      "why": "Aktueller systematischer Überblick über Debriefing-Ansätze. Besonders interessant für Ausbilder:innen, weil die Evidenz hinter verschiedenen Methoden kritisch eingeordnet wird.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/38240623/",
      "freeUrl": "",
      "featured": false,
      "added": "2026-08-30",
      "level": "rs-nfs",
      "language": "de",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-08-30"
    },
    {
      "id": "human-factors-simulation-em",
      "title": "Human Factors and Simulation in Emergency Medicine",
      "authors": "Academic Emergency Medicine Consensus Group",
      "journal": "Academic Emergency Medicine",
      "year": 2017,
      "doi": "",
      "topics": [
        "Human Factors",
        "CRM",
        "Simulation"
      ],
      "type": "Consensus Statement",
      "read": "15 min",
      "access": "paywall",
      "why": "Grundlagenartikel dazu, wie Human Factors und Simulation zur Verbesserung von Sicherheit, Teamarbeit und Systemgestaltung in der Notfallmedizin genutzt werden können.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/28925571/",
      "freeUrl": "",
      "featured": false,
      "added": "2026-08-28",
      "level": "rs-nfs",
      "language": "de",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-08-28"
    },
    {
      "id": "abcde-debriefing",
      "title": "The ABCDE Approach: A Simplified Model for Debriefing During Simulation in Emergency Medicine",
      "authors": "Rajendran et al.",
      "journal": "Emergency Medicine / Simulation Education",
      "year": 2023,
      "doi": "",
      "topics": [
        "Debriefing",
        "Simulation",
        "Ausbildung"
      ],
      "type": "Review / Praxisartikel",
      "read": "8–10 min",
      "access": "free",
      "why": "Ein leicht merkbares Debriefing-Modell mit Fokus auf psychologische Sicherheit, Beziehung, Kommunikationsansatz, Inhalt und Rahmenbedingungen.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/36883075/",
      "freeUrl": "https://pubmed.ncbi.nlm.nih.gov/36883075/",
      "featured": false,
      "added": "2026-08-27",
      "level": "rs-nfs",
      "language": "de",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-08-27"
    },
    {
      "id": "ai-debriefing-2026",
      "title": "Artificial intelligence to support debriefing in simulation-based healthcare education: a scoping review",
      "authors": "Alnazawi & Almarhabi",
      "journal": "Advances in Simulation",
      "year": 2026,
      "doi": "10.1186/s41077-026-00447-6",
      "topics": [
        "Simulation",
        "Debriefing",
        "KI",
        "Ausbildung"
      ],
      "type": "Scoping Review",
      "read": "15 min",
      "access": "oa",
      "why": "Aktueller Überblick darüber, wie KI zur Unterstützung von Debriefings eingesetzt wird. Interessant für die Weiterentwicklung moderner Ausbildungskonzepte.",
      "publisherUrl": "https://pubmed.ncbi.nlm.nih.gov/42351276/",
      "freeUrl": "https://pubmed.ncbi.nlm.nih.gov/42351276/",
      "featured": false,
      "added": "2026-08-26",
      "level": "rs-nfs",
      "language": "de",
      "license": "",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-08-26"
    },
    {
      "id": "de-stroke-praxis-dach-2024",
      "title": "Praxis der präklinischen Schlaganfallversorgung im deutschsprachigen Raum",
      "authors": "",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-022-01112-x",
      "topics": [
        "Neurologie",
        "Schlaganfall",
        "Versorgungsforschung",
        "DACH"
      ],
      "type": "Originalarbeit / Umfrage",
      "read": "12–15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Bestandsaufnahme zur Organisation der präklinischen Schlaganfallversorgung in Deutschland, Österreich und der Schweiz – gut geeignet, um Praxis und Leitlinien abzugleichen.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-022-01112-x",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-022-01112-x",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-ueberlebensnetz-2026",
      "title": "Das Überlebensnetz – adaptiv und evidenzbasiert",
      "authors": "Schnaubelt S, Veigl C, Baubin M et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2026,
      "doi": "10.1007/s10049-026-01758-x",
      "topics": [
        "Reanimation",
        "System",
        "Österreich"
      ],
      "type": "Stellungnahme / Konzept",
      "read": "10–15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Aktuelle Stellungnahme des Österreichischen Rats für Wiederbelebung zur Weiterentwicklung der klassischen Überlebenskette zu einem adaptiven Überlebensnetz.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-026-01758-x",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-026-01758-x",
      "featured": false,
      "added": "2026-09-08",
      "archived": false,
      "archiveDate": "",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-eckpunktepapier-2025",
      "title": "Eckpunktepapier 2025 zur notfallmedizinischen Versorgung der Bevölkerung in der Prähospitalphase und in der Klinik",
      "authors": "Trentzsch H, Fischer M et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2025,
      "doi": "10.1007/s10049-025-01612-6",
      "topics": [
        "Versorgung",
        "System",
        "Leitlinien",
        "Qualität"
      ],
      "type": "Konsensuspapier",
      "read": "30–40 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "CC BY 4.0",
      "why": "Umfassendes Konsensuspapier zur strukturierten notfallmedizinischen Versorgung mit zahlreichen Anknüpfungspunkten für rettungsdienstliche Praxis und Ausbildung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-025-01612-6",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-025-01612-6",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-medikamente-rettungsmittel-2024",
      "title": "Medikamentöse Ausstattung arztbesetzter Rettungsmittel – ist eine präklinische Therapie nach aktuellen Leitlinien möglich?",
      "authors": "Carstens E, Eismann H, Flentje M, Albers T, Sieg L et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-022-01036-6",
      "topics": [
        "Pharmakologie",
        "Leitlinien",
        "Ausstattung",
        "Qualität"
      ],
      "type": "Originalarbeit",
      "read": "15–20 min",
      "access": "oa",
      "level": "nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Vergleicht leitlinienbasierte Medikamentenanforderungen mit der realen Ausstattung arztbesetzter Rettungsmittel und lädt zur Reflexion eigener Standards ein.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-022-01036-6",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-022-01036-6",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-integrierte-versorgung-rd-2024",
      "title": "Integrierte Versorgung von Rettungsdienstpatienten. Konsentierte Empfehlungen für optimale Prozesse und Strukturen",
      "authors": "Rothhardt J, Piedmont S, Swart E, Robra B-P et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-022-00995-0",
      "topics": [
        "Versorgung",
        "System",
        "Patientensteuerung",
        "Qualität"
      ],
      "type": "Originalarbeit / Konsensus",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Konsentierte Empfehlungen zu Leitstelle, Patientenversorgung, Dokumentation und Evaluation – besonders interessant für Systemverständnis und Versorgungssteuerung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-022-00995-0",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-022-00995-0",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-notfallleitsystem-2024",
      "title": "Quo vadis, gemeinsames Notfallleitsystem?",
      "authors": "Breuer F, Brettschneider P, Poloczek S, Pommerenke C, Wolff J, Dahmen J",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-022-01073-1",
      "topics": [
        "Leitstelle",
        "Notruf",
        "Qualität",
        "System"
      ],
      "type": "Originalarbeit",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "CC BY 4.0",
      "why": "Untersucht standardisierte Notrufabfrage und deren Bedeutung für Qualität und Steuerung in der präklinischen Versorgung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-022-01073-1",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-022-01073-1",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-rettungsdienststrukturen-neu-denken-2026",
      "title": "Rettungsdienststrukturen neu denken – Ergebnisse der Expertenworkshops „Logistik in der präklinischen Notfallversorgung“",
      "authors": "Wnent J, Bandlow S, Renner H-J, Gräsner J-T et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2026,
      "doi": "10.1007/s10049-023-01248-4",
      "topics": [
        "System",
        "Logistik",
        "Versorgungsforschung"
      ],
      "type": "Konzept / Expertenworkshop",
      "read": "10–15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Diskussionsstarker Beitrag zu zukünftigen Rettungsdienststrukturen, Logistik und Operations Research – gut für einen Blick über den einzelnen Einsatz hinaus.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-023-01248-4",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-023-01248-4",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-digitale-rettungskette-2026",
      "title": "Die digitale Rettungskette – von Schnittstellen zu belastbaren Nahtstellen",
      "authors": "Bienzeisler J, Blaschke S, Koster J, Reng M, Röhrig R, Walcher F et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2026,
      "doi": "10.1007/s10049-026-01774-x",
      "topics": [
        "Digitalisierung",
        "Dokumentation",
        "System",
        "Patientensicherheit"
      ],
      "type": "Leitthema / Übersicht",
      "read": "12–15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Sehr aktueller Beitrag zu interoperabler Datenweitergabe von Leitstelle über Rettungsdienst und Notaufnahme bis zur Weiterbehandlung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-026-01774-x",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-026-01774-x",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-be-prepared-2025",
      "title": "„Be prepared“ – zur Notwendigkeit robuster Strukturen in der Notfall- und Katastrophenversorgung",
      "authors": "",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2025,
      "doi": "10.1007/s10049-025-01581-w",
      "topics": [
        "MANV",
        "Katastrophenmedizin",
        "System"
      ],
      "type": "Editorial / Einführung",
      "read": "5 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "Open Access",
      "why": "Kurzer Impuls zu resilienter Notfall- und Katastrophenversorgung – geeignet als Einstieg in MANV-, Krisen- und Strukturthemen.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-025-01581-w",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-025-01581-w",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-bridging-kritisch-2024",
      "title": "Grundlagen des notfallmedizinischen „Bridgings“ von kritisch kranken Patienten in der Notaufnahme bis zur Intensivstationsverlegung",
      "authors": "Kemper JJ, Michael M, Kümpers P, Reindl M, Kumle B, Pin M, Bernhard M et al.",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2024,
      "doi": "10.1007/s10049-023-01276-0",
      "topics": [
        "Critical Care",
        "ABCDE",
        "Beatmung",
        "Kreislauf"
      ],
      "type": "Übersicht",
      "read": "20 min",
      "access": "oa",
      "level": "nfs",
      "language": "de",
      "license": "CC BY 4.0",
      "why": "Vertiefender Critical-Care-Beitrag zu Beatmung, Analgosedierung, Katecholaminen, Reevaluation und Therapieplanung; teilweise gut auf die präklinische Versorgung übertragbar.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-023-01276-0",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-023-01276-0",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "de-gruende-praeklinische-notfallversorgung-2021",
      "title": "Welche gesundheitlichen Gründe führen zur präklinischen Notfallversorgung und in welcher Verbindung steht die subjektive Notfalleinschätzung mit der sich anschließenden Versorgung?",
      "authors": "Piedmont S, Reinhold AK, Bock J-O, Swart E, Robra B-P",
      "journal": "Notfall + Rettungsmedizin",
      "year": 2021,
      "doi": "10.1007/s10049-020-00832-2",
      "topics": [
        "Versorgungsforschung",
        "Patientenperspektive",
        "Leitstelle",
        "System"
      ],
      "type": "Originalarbeit / Befragung",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "de",
      "license": "CC BY 4.0",
      "why": "Verbindet die subjektive Notfallwahrnehmung von Rettungsdienstpatient:innen mit nachfolgender Versorgung und Diagnosen – spannend für Triage und Patientensteuerung.",
      "publisherUrl": "https://link.springer.com/article/10.1007/s10049-020-00832-2",
      "freeUrl": "https://link.springer.com/article/10.1007/s10049-020-00832-2",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "stroke-missed-ems-2021",
      "title": "Characteristics of patients who had a stroke not initially identified during emergency prehospital assessment: a systematic review",
      "authors": "Jones SP, Bray JE, Gibson JME, McClelland G et al.",
      "journal": "Emergency Medicine Journal",
      "year": 2021,
      "doi": "10.1136/emermed-2020-209607",
      "topics": [
        "Neurologie",
        "Schlaganfall",
        "Diagnostik"
      ],
      "type": "Systematic Review",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Zeigt, welche Schlaganfallpräsentationen präklinisch besonders häufig übersehen werden – darunter Schwindel, Sehstörungen, Übelkeit/Erbrechen und veränderter Mentalstatus.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8077214/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8077214/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "stroke-recognition-first-aid-2020",
      "title": "Stroke Recognition for First Aid Providers: A Systematic Review and Meta-Analysis",
      "authors": "Meyran D et al.",
      "journal": "",
      "year": 2020,
      "doi": "",
      "topics": [
        "Neurologie",
        "Schlaganfall",
        "Ersthelfer"
      ],
      "type": "Systematic Review / Meta-Analyse",
      "read": "15 min",
      "access": "oa",
      "level": "rs",
      "language": "en",
      "license": "CC BY",
      "why": "Vergleicht präklinische Stroke-Scores und deren diagnostische Leistungsfähigkeit; FAST und CPSS sind aufgrund ihrer Einfachheit besonders relevant.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7725197/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7725197/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "clinical-reasoning-ems-2019",
      "title": "Clinical reasoning in the emergency medical services: an integrative review",
      "authors": "Andersson U, Maurin Söderholm H, Wireklint Sundström B",
      "journal": "Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine",
      "year": 2019,
      "doi": "10.1186/s13049-019-0646-y",
      "topics": [
        "Clinical Reasoning",
        "Entscheidungsfindung",
        "Human Factors"
      ],
      "type": "Integrative Review",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Beschreibt, wie präklinische Teams Informationen sammeln, Unsicherheit verarbeiten und Entscheidungen in dynamischen Situationen treffen.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6700770/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6700770/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "pain-experiences-prehospital-2023",
      "title": "Patient, family member, and ambulance staff experiences of prehospital acute pain management in adults: A systematic review and meta-synthesis",
      "authors": "Whitley GA, Wijegoonewardene N, Nelson D et al.",
      "journal": "Journal of the American College of Emergency Physicians Open",
      "year": 2023,
      "doi": "10.1002/emp2.12940",
      "topics": [
        "Schmerz",
        "Kommunikation",
        "Patientenperspektive"
      ],
      "type": "Systematic Review / Meta-Synthese",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Betont neben Analgesie auch Vertrauen, Erwartungen, Empowerment und Kommunikation als zentrale Elemente guter präklinischer Schmerzversorgung.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10086522/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10086522/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "paediatric-prehospital-pain-2021",
      "title": "The effectiveness and safety of paediatric prehospital pain management: a systematic review",
      "authors": "",
      "journal": "",
      "year": 2021,
      "doi": "",
      "topics": [
        "Pädiatrie",
        "Schmerz",
        "Pharmakologie"
      ],
      "type": "Systematic Review",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Übersicht zur Wirksamkeit und Sicherheit präklinischer Analgetika bei Kindern, inklusive Fentanyl, Morphin, Methoxyfluran und Ketamin.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8665507/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8665507/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "patient-safety-paramedics-review-2024",
      "title": "An Integrative Systematic Review of Promoting Patient Safety Within Prehospital Emergency Medical Services by Paramedics",
      "authors": "",
      "journal": "",
      "year": 2024,
      "doi": "",
      "topics": [
        "Patientensicherheit",
        "Qualität",
        "Human Factors"
      ],
      "type": "Systematic Review",
      "read": "15–20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Bündelt Faktoren, mit denen Paramedics Patientensicherheit in präklinischen Systemen fördern können – gut für Sicherheitskultur und Qualitätsarbeit.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10981423/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10981423/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "non-conveyance-safety-2017",
      "title": "A patient-safety and professional perspective on non-conveyance in ambulance care: a systematic review",
      "authors": "Ebben RHA, Vloet LCM, Speijers RF et al.",
      "journal": "Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine",
      "year": 2017,
      "doi": "10.1186/s13049-017-0409-6",
      "topics": [
        "Nichttransport",
        "Patientensicherheit",
        "Entscheidungsfindung"
      ],
      "type": "Systematic Review",
      "read": "20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Zeigt die Komplexität von Nichttransportentscheidungen, Follow-up-Risiken und die begrenzte Verfügbarkeit unterstützender Tools.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5513207/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5513207/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "sepsis-identification-prehospital-2016",
      "title": "Identification of adults with sepsis in the prehospital environment: a systematic review",
      "authors": "",
      "journal": "",
      "year": 2016,
      "doi": "",
      "topics": [
        "Sepsis",
        "Diagnostik",
        "Internistische Notfälle"
      ],
      "type": "Systematic Review",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "CC BY 4.0",
      "why": "Untersucht präklinische Sepsiserkennung und Screeningtools; zeigt zugleich die Grenzen der diagnostischen Sicherheit im Rettungsdienst.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4985978/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4985978/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "death-dying-prehospital-2020",
      "title": "Death and dying in prehospital care: what are the experiences and issues for prehospital practitioners, families and bystanders? A scoping review",
      "authors": "",
      "journal": "",
      "year": 2020,
      "doi": "",
      "topics": [
        "Ethik",
        "Sterben",
        "Kommunikation"
      ],
      "type": "Scoping Review",
      "read": "15–20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Beleuchtet Erfahrungen von Einsatzkräften, Angehörigen und Umstehenden bei Sterben und Tod außerhalb des Krankenhauses.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7511644/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7511644/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "ems-work-wellbeing-2020",
      "title": "The effects of emergency medical service work on the psychological, physical, and social well-being of ambulance personnel: a systematic review of qualitative research",
      "authors": "",
      "journal": "",
      "year": 2020,
      "doi": "",
      "topics": [
        "Mental Health",
        "Arbeitsmedizin",
        "Personal"
      ],
      "type": "Systematic Review",
      "read": "20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Qualitative Evidenz dazu, wie Rettungsdienstarbeit psychisches, körperliches und soziales Wohlbefinden beeinflusst.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7332532/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7332532/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "ptsd-paramedics-2023",
      "title": "Work-related posttraumatic stress disorder in paramedics in comparison to data from the general population of working age. A systematic review and meta-analysis",
      "authors": "Hoell A, Kourmpeli E, Dressing H et al.",
      "journal": "Frontiers in Public Health",
      "year": 2023,
      "doi": "10.3389/fpubh.2023.1151248",
      "topics": [
        "Mental Health",
        "PTBS",
        "Arbeitsmedizin"
      ],
      "type": "Systematic Review / Meta-Analyse",
      "read": "20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "CC BY",
      "why": "Meta-Analyse zur 12-Monats-Prävalenz arbeitsbezogener PTBS bei Paramedics im Vergleich zu verschiedenen Bevölkerungsgruppen.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10035789/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10035789/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "pre-ems-first-responders-review-2021",
      "title": "A review on initiatives for the management of daily medical emergencies prior to the arrival of emergency medical services",
      "authors": "Matinrad N, Reuter-Oppermann M",
      "journal": "Central European Journal of Operations Research",
      "year": 2021,
      "doi": "10.1007/s10100-021-00769-y",
      "topics": [
        "First Responder",
        "AED",
        "Drohnen",
        "System"
      ],
      "type": "Review",
      "read": "25 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Breiter Überblick über First-Responder-Systeme, Freiwillige, AED-Netzwerke und Drohnen vor Eintreffen des regulären Rettungsdienstes.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8449697/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8449697/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "urban-rural-prehospital-times-2022",
      "title": "Prehospital Time Interval for Urban and Rural Emergency Medical Services: A Systematic Literature Review",
      "authors": "",
      "journal": "",
      "year": 2022,
      "doi": "",
      "topics": [
        "System",
        "Stadt-Land",
        "Zeitintervalle"
      ],
      "type": "Systematic Review",
      "read": "15 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "CC BY 4.0",
      "why": "Vergleicht präklinische Zeitintervalle zwischen urbanen und ländlichen Regionen und bietet Diskussionsstoff zu Geografie und Versorgungsgerechtigkeit.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9778378/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9778378/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "als-vs-bls-2010",
      "title": "Is advanced life support better than basic life support in prehospital care? A systematic review",
      "authors": "Ryynänen O-P, Iirola T, Reitala J et al.",
      "journal": "Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine",
      "year": 2010,
      "doi": "10.1186/1757-7241-18-62",
      "topics": [
        "BLS",
        "ALS",
        "Versorgung",
        "Kontroversen"
      ],
      "type": "Systematic Review",
      "read": "20 min",
      "access": "oa",
      "level": "rs-nfs",
      "language": "en",
      "license": "CC BY 2.0",
      "why": "Älterer, aber didaktisch interessanter Review zur Frage, ob mehr invasive präklinische Maßnahmen automatisch bessere Outcomes bedeuten.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3001418/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3001418/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "prehospital-airway-management-2022",
      "title": "Prehospital Airway Management",
      "authors": "Bell S, Pennington B, Hill J, Harrison J",
      "journal": "",
      "year": 2022,
      "doi": "",
      "topics": [
        "Atemweg",
        "Airway",
        "Critical Care"
      ],
      "type": "Critical Appraisal / Kommentar",
      "read": "10 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Kritische Einordnung der Evidenz zu BVM, supraglottischen Atemwegen und endotrachealer Intubation in verschiedenen präklinischen Szenarien.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7616021/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7616021/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "prehospital-pocus-2018",
      "title": "The role of point of care ultrasound in prehospital critical care: a systematic review",
      "authors": "Bøtker MT, Jacobsen L, Rudolph SS et al.",
      "journal": "Scandinavian Journal of Trauma, Resuscitation and Emergency Medicine",
      "year": 2018,
      "doi": "10.1186/s13049-018-0518-x",
      "topics": [
        "POCUS",
        "Ultraschall",
        "Critical Care",
        "Diagnostik"
      ],
      "type": "Systematic Review",
      "read": "20 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "CC BY 4.0",
      "why": "Systematischer Überblick zu Machbarkeit, Einfluss auf Entscheidungen und Ausbildungsanforderungen von präklinischem POCUS.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6019293/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6019293/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "post-rosc-targets-2024",
      "title": "Pre-hospital care after return of spontaneous circulation: Are we achieving our targets?",
      "authors": "",
      "journal": "Resuscitation Plus",
      "year": 2024,
      "doi": "10.1016/j.resplu.2024.100691",
      "topics": [
        "Reanimation",
        "ROSC",
        "Critical Care"
      ],
      "type": "Prospektive Kohortenstudie",
      "read": "15 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Creative Commons (siehe Artikel)",
      "why": "Untersucht, wie häufig physiologische Zielwerte nach ROSC präklinisch erreicht werden und wo Standard-EMS-Teams an Grenzen stoßen.",
      "publisherUrl": "https://www.sciencedirect.com/science/article/pii/S2666520424001425",
      "freeUrl": "https://www.sciencedirect.com/science/article/pii/S2666520424001425",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "stop-the-bleed-2025",
      "title": "“Stop the bleed” – Prehospital bleeding control in patients with multiple and/or severe injuries – A systematic review and clinical practice guideline",
      "authors": "Trentzsch H, Goossen K, Prediger B, Schweigkofler U et al.",
      "journal": "",
      "year": 2025,
      "doi": "10.1007/s00068-024-02726-1",
      "topics": [
        "Trauma",
        "Blutung",
        "Tourniquet",
        "Beckenschlinge"
      ],
      "type": "Systematic Review / Leitlinie",
      "read": "25 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Open Access",
      "why": "Evidenzbasierte und konsensbasierte Empfehlungen zu manueller Kompression, Hämostyptika, Tourniquets, Beckenstabilisierung und weiteren Blutungskontrollmaßnahmen.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11799122/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11799122/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "adult-prehospital-pain-scoping-2026",
      "title": "Pain management of adults in the prehospital setting: a scoping review",
      "authors": "Burgert JM, Vadas D, Heneghan CJ et al.",
      "journal": "BMC Emergency Medicine",
      "year": 2026,
      "doi": "10.1186/s12873-026-01491-1",
      "topics": [
        "Schmerz",
        "Pharmakologie",
        "Analgesie"
      ],
      "type": "Scoping Review",
      "read": "25 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "CC BY-NC-ND 4.0",
      "why": "Sehr aktueller Überblick über Reviews zu 24 präklinischen Schmerzinterventionen und die weiterhin erheblichen Evidenzlücken.",
      "publisherUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13015054/",
      "freeUrl": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13015054/",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "grey-areas-ohca-2026",
      "title": "Journal club: Grey areas in paramedic decision-making for out-of-hospital cardiac arrest",
      "authors": "",
      "journal": "Resuscitation Plus",
      "year": 2026,
      "doi": "10.1016/j.resplu.2026.101225",
      "topics": [
        "Reanimation",
        "Entscheidungsfindung",
        "Ethik"
      ],
      "type": "Journal Club / Young ERC",
      "read": "8–10 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Creative Commons (siehe Artikel)",
      "why": "Aktueller Diskussionsbeitrag zu Grauzonen rettungsdienstlicher Entscheidungen bei außerklinischem Herz-Kreislauf-Stillstand.",
      "publisherUrl": "https://www.sciencedirect.com/science/article/pii/S266652042600010X",
      "freeUrl": "https://www.sciencedirect.com/science/article/pii/S266652042600010X",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "austria-hems-ohca-2024",
      "title": "Resuscitation of out-of-hospital cardiac arrest victims in Austria’s largest helicopter emergency medical service: A retrospective cohort study",
      "authors": "",
      "journal": "Resuscitation Plus",
      "year": 2024,
      "doi": "10.1016/j.resplu.2024.100678",
      "topics": [
        "Reanimation",
        "HEMS",
        "Österreich"
      ],
      "type": "Retrospektive Kohortenstudie",
      "read": "15–20 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Creative Commons (siehe Artikel)",
      "why": "Große österreichische HEMS-Kohorte mit Daten zu Versorgung, ROSC sowie 30-Tage- und Einjahresüberleben – besonders relevant für die österreichische Zielgruppe.",
      "publisherUrl": "https://www.sciencedirect.com/science/article/pii/S2666520424001292",
      "freeUrl": "https://www.sciencedirect.com/science/article/pii/S2666520424001292",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    },
    {
      "id": "austria-alpine-urban-ohca-2025",
      "title": "Out-of-hospital cardiac arrest in alpine and urban terrain: a five-year retrospective analysis of 11,315 Austrian HEMS missions",
      "authors": "",
      "journal": "Resuscitation Plus",
      "year": 2025,
      "doi": "10.1016/j.resplu.2025.101157",
      "topics": [
        "Reanimation",
        "HEMS",
        "Alpinmedizin",
        "Österreich"
      ],
      "type": "Retrospektive Analyse",
      "read": "15–20 min",
      "access": "oa",
      "level": "nfs",
      "language": "en",
      "license": "Creative Commons (siehe Artikel)",
      "why": "Vergleicht OHCA-Versorgung in alpinem und urbanem Gelände anhand von 11.315 österreichischen HEMS-Einsätzen und zeigt terrainabhängige Unterschiede.",
      "publisherUrl": "https://www.sciencedirect.com/science/article/pii/S2666520425002942",
      "freeUrl": "https://www.sciencedirect.com/science/article/pii/S2666520425002942",
      "featured": false,
      "added": "2026-09-08",
      "archived": true,
      "archiveDate": "2026-09-08",
      "activeSince": "2026-09-08"
    }
  ],
  "changes": [
    {
      "id": "oxygen-acs",
      "category": "Internistisch",
      "title": "Sauerstoff bei ACS",
      "date": "2026-09-01",
      "old": "Routinemäßige Sauerstoffgabe bei ACS.",
      "new": "Sauerstoffgabe gezielt bei Hypoxämie bzw. nach lokaler SOP.",
      "source": "Leitlinie / lokale Lehrmeinung",
      "active": true
    },
    {
      "id": "cpr-feedback",
      "category": "Reanimation",
      "title": "CPR-Qualität stärker fokussieren",
      "date": "2026-08-15",
      "old": "Fokus primär auf Algorithmusschritte.",
      "new": "Unterbrechungsarme HDM, Frequenz, Tiefe und vollständige Entlastung werden explizit mitbewertet.",
      "source": "ERC / Ausbildungskonzept",
      "active": true
    }
  ],
  "differential": [
    {
    "id": "dyspnoe",
    "icon": "lungs",
    "title": "Dyspnoe",
    "causes": [
      {
        "name": "Asthma bronchiale",
        "physiology": "Reversible bronchiale Obstruktion durch Entzündung und Bronchospasmus",
        "findings": "exspiratorisches Giemen, verlängertes Exspirium, erhöhte Atemfrequenz",
        "cave": "stille Lunge, Erschöpfung und Bewusstseinsstörung",
        "info": "Reversible bronchiale Obstruktion durch Entzündung und Bronchospasmus exspiratorisches Giemen, verlängertes Exspirium, erhöhte Atemfrequenz CAVE: stille Lunge, Erschöpfung und Bewusstseinsstörung"
      },
      {
        "name": "COPD-Exazerbation",
        "physiology": "Akute Verschlechterung chronischer Atemwegsobstruktion",
        "findings": "Giemen, vermehrtes Sputum, Hyperkapnie möglich",
        "cave": "Normale SpO₂ schließt Hyperkapnie nicht aus",
        "info": "Akute Verschlechterung chronischer Atemwegsobstruktion Giemen, vermehrtes Sputum, Hyperkapnie möglich CAVE: Normale SpO₂ schließt Hyperkapnie nicht aus"
      },
      {
        "name": "Kardiales Lungenödem",
        "physiology": "Erhöhter pulmonaler Kapillardruck führt zu Flüssigkeit in Alveolen",
        "findings": "Rasselgeräusche, Orthopnoe, Hypoxämie, oft Hypertonie",
        "cave": "rasches respiratorisches Versagen",
        "info": "Erhöhter pulmonaler Kapillardruck führt zu Flüssigkeit in Alveolen Rasselgeräusche, Orthopnoe, Hypoxämie, oft Hypertonie CAVE: rasches respiratorisches Versagen"
      },
      {
        "name": "Lungenembolie",
        "physiology": "Thrombotischer Verschluss einer Pulmonalarterie mit gestörtem Gasaustausch",
        "findings": "Tachypnoe, Tachykardie, pleuritischer Schmerz, eventuell Hypoxämie",
        "cave": "normale SpO₂ schließt LAE nicht aus",
        "info": "Thrombotischer Verschluss einer Pulmonalarterie mit gestörtem Gasaustausch Tachypnoe, Tachykardie, pleuritischer Schmerz, eventuell Hypoxämie CAVE: normale SpO₂ schließt LAE nicht aus"
      },
      {
        "name": "Pneumonie",
        "physiology": "Infektiöse Entzündung des Lungenparenchyms",
        "findings": "Fieber, Husten, fokale Rasselgeräusche, Tachypnoe",
        "cave": "ältere Menschen teils ohne Fieber",
        "info": "Infektiöse Entzündung des Lungenparenchyms Fieber, Husten, fokale Rasselgeräusche, Tachypnoe CAVE: ältere Menschen teils ohne Fieber"
      },
      {
        "name": "Pneumothorax",
        "physiology": "Luft im Pleuraspalt führt zum Lungenkollaps",
        "findings": "plötzliche einseitige Schmerzen, abgeschwächtes Atemgeräusch",
        "cave": "Schockzeichen bei Spannungspneumothorax",
        "info": "Luft im Pleuraspalt führt zum Lungenkollaps plötzliche einseitige Schmerzen, abgeschwächtes Atemgeräusch CAVE: Schockzeichen bei Spannungspneumothorax"
      },
      {
        "name": "Akutes Koronarsyndrom",
        "physiology": "Myokardischämie durch Koronarverschluss/-verengung",
        "findings": "Dyspnoe, Brustdruck, Kaltschweißigkeit, EKG-Veränderungen möglich",
        "cave": "auch ohne Thoraxschmerz",
        "info": "Myokardischämie durch Koronarverschluss/-verengung Dyspnoe, Brustdruck, Kaltschweißigkeit, EKG-Veränderungen möglich CAVE: auch ohne Thoraxschmerz"
      },
      {
        "name": "Anaphylaxie",
        "physiology": "Systemische allergische Reaktion mit Bronchospasmus und Gefäßweitstellung",
        "findings": "Dyspnoe, Schwellung, Hypotonie, ggf. Urtikaria",
        "cave": "rascher Kreislaufkollaps",
        "info": "Systemische allergische Reaktion mit Bronchospasmus und Gefäßweitstellung Dyspnoe, Schwellung, Hypotonie, ggf. Urtikaria CAVE: rascher Kreislaufkollaps"
      },
      {
        "name": "Asthma / COPD",
        "info": "Bei Dyspnoe als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Seit wann bestehen die Beschwerden?",
      "Plötzlicher oder schleichender Beginn?",
      "Thoraxschmerz, Allergie oder Fieber?",
      "Bekannte kardiale oder pulmonale Vorerkrankungen?"
    ],
    "redflags": [
      "Stille Lunge",
      "Zyanose",
      "SpO₂-Abfall trotz Sauerstoff",
      "Erschöpfung / Vigilanzminderung"
    ],
    "group": "Atmung"
  },
  {
    "id": "thorax",
    "icon": "heart",
    "title": "Thoraxschmerz",
    "causes": [
      {
        "name": "Akutes Koronarsyndrom",
        "physiology": "Myokardischämie meist durch Plaqueruptur und Thrombus",
        "findings": "Druck/Enge, Ausstrahlung, Übelkeit, EKG kann initial unauffällig sein",
        "cave": "12-Kanal-EKG und serieller Verlauf, atypische Symptome",
        "info": "Myokardischämie meist durch Plaqueruptur und Thrombus Druck/Enge, Ausstrahlung, Übelkeit, EKG kann initial unauffällig sein CAVE: 12-Kanal-EKG und serieller Verlauf, atypische Symptome"
      },
      {
        "name": "Akutes Aortensyndrom",
        "physiology": "Einriss der Aortenintima oder intramurales Hämatom",
        "findings": "plötzlich starker thorakaler/Rückenschmerz, Puls-/RR-Differenzen möglich",
        "cave": "Schock und Organischämie",
        "info": "Einriss der Aortenintima oder intramurales Hämatom plötzlich starker thorakaler/Rückenschmerz, Puls-/RR-Differenzen möglich CAVE: Schock und Organischämie"
      },
      {
        "name": "Lungenembolie",
        "physiology": "Pulmonalarterieller Gefäßverschluss",
        "findings": "atemabhängiger Schmerz, Tachykardie, Dyspnoe",
        "cave": "Synkope und Hypotonie",
        "info": "Pulmonalarterieller Gefäßverschluss atemabhängiger Schmerz, Tachykardie, Dyspnoe CAVE: Synkope und Hypotonie"
      },
      {
        "name": "Pneumothorax",
        "physiology": "Luft im Pleuraspalt",
        "findings": "abrupt einsetzender einseitiger pleuritischer Schmerz und Dyspnoe",
        "cave": "Spannungskomponente",
        "info": "Luft im Pleuraspalt abrupt einsetzender einseitiger pleuritischer Schmerz und Dyspnoe CAVE: Spannungskomponente"
      },
      {
        "name": "Perikarditis",
        "physiology": "Entzündung des Herzbeutels",
        "findings": "lage- und atemabhängiger Schmerz, Besserung im Sitzen, ggf. diffuse ST-Hebungen",
        "cave": "Tamponadezeichen",
        "info": "Entzündung des Herzbeutels lage- und atemabhängiger Schmerz, Besserung im Sitzen, ggf. diffuse ST-Hebungen CAVE: Tamponadezeichen"
      },
      {
        "name": "Muskuloskelettaler Thoraxschmerz",
        "physiology": "Reizung von Muskeln, Rippen oder Gelenken",
        "findings": "oft bewegungs-/druckabhängig",
        "cave": "Druckschmerz schließt ACS nicht sicher aus",
        "info": "Reizung von Muskeln, Rippen oder Gelenken oft bewegungs-/druckabhängig CAVE: Druckschmerz schließt ACS nicht sicher aus"
      },
      {
        "name": "Ösophagealer Reflux",
        "physiology": "Rückfluss von Magensäure in die Speiseröhre",
        "findings": "brennender retrosternaler Schmerz, nach Essen/Liegen",
        "cave": "ACS nicht allein anhand Sodbrennen ausschließen",
        "info": "Rückfluss von Magensäure in die Speiseröhre brennender retrosternaler Schmerz, nach Essen/Liegen CAVE: ACS nicht allein anhand Sodbrennen ausschließen"
      },
      {
        "name": "ACS",
        "info": "Bei Thoraxschmerz als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Druck, Enge oder Stechen?",
      "Ausstrahlung?",
      "Belastungsabhängig?",
      "Dyspnoe, Übelkeit oder Synkope?"
    ],
    "redflags": [
      "Hypotonie",
      "Kaltschweißigkeit",
      "Neurologische Defizite",
      "Schwere Dyspnoe"
    ],
    "group": "Kreislauf"
  },
  {
    "id": "bewusstsein",
    "icon": "brain",
    "title": "Bewusstseinsstörung",
    "causes": [
      {
        "name": "Hypoglykämie",
        "physiology": "Glukosemangel im Gehirn",
        "findings": "BZ typischerweise unter 70 mg/dl (3,9 mmol/l), neuroglykopenische Zeichen",
        "cave": "sofort BZ messen, Schwellen individuell",
        "info": "Glukosemangel im Gehirn BZ typischerweise unter 70 mg/dl (3,9 mmol/l), neuroglykopenische Zeichen CAVE: sofort BZ messen, Schwellen individuell"
      },
      {
        "name": "Intoxikation",
        "physiology": "Stoffwirkung auf ZNS oder Atmung",
        "findings": "Pupillen-/Atemauffälligkeiten, unterschiedliche Vitalwerte",
        "cave": "Mischintoxikation und Hypoglykämie",
        "info": "Stoffwirkung auf ZNS oder Atmung Pupillen-/Atemauffälligkeiten, unterschiedliche Vitalwerte CAVE: Mischintoxikation und Hypoglykämie"
      },
      {
        "name": "Schlaganfall",
        "physiology": "Zerebrale Minderperfusion oder Blutung",
        "findings": "fokale Defizite, Vigilanzstörung bei großer Läsion",
        "cave": "Zeitpunkt zuletzt gesund erheben",
        "info": "Zerebrale Minderperfusion oder Blutung fokale Defizite, Vigilanzstörung bei großer Läsion CAVE: Zeitpunkt zuletzt gesund erheben"
      },
      {
        "name": "Postiktaler Zustand",
        "physiology": "Vorübergehende neuronale Erschöpfung nach epileptischem Anfall",
        "findings": "Somnolenz, Verwirrtheit, ggf. Todd-Parese",
        "cave": "persistierende Ausfälle auch auf Schlaganfall prüfen",
        "info": "Vorübergehende neuronale Erschöpfung nach epileptischem Anfall Somnolenz, Verwirrtheit, ggf. Todd-Parese CAVE: persistierende Ausfälle auch auf Schlaganfall prüfen"
      },
      {
        "name": "Sepsis",
        "physiology": "Infektionsbedingte systemische Dysregulation mit Organversagen",
        "findings": "Verwirrtheit, Tachypnoe, mögliche Hypotonie",
        "cave": "Fieber kann fehlen",
        "info": "Infektionsbedingte systemische Dysregulation mit Organversagen Verwirrtheit, Tachypnoe, mögliche Hypotonie CAVE: Fieber kann fehlen"
      },
      {
        "name": "Hyperkapnie / Hypoxie",
        "physiology": "Störung der Oxygenierung oder CO₂-Elimination",
        "findings": "pathologische SpO₂/AF, ggf. Somnolenz",
        "cave": "SpO₂ allein misst kein CO₂",
        "info": "Störung der Oxygenierung oder CO₂-Elimination pathologische SpO₂/AF, ggf. Somnolenz CAVE: SpO₂ allein misst kein CO₂"
      },
      {
        "name": "Krampfanfall",
        "info": "Bei Bewusstseinsstörung als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Trauma",
        "info": "Bei Bewusstseinsstörung als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Letzter normaler Zustand?",
      "Blutzucker?",
      "Medikamente oder Substanzen?",
      "Krampf oder Trauma beobachtet?"
    ],
    "redflags": [
      "GCS sinkt",
      "Ateminsuffizienz",
      "Pupillendifferenz",
      "Neurologische Herdzeichen"
    ],
    "group": "Neurologie"
  },
  {
    "id": "synkope",
    "icon": "bolt",
    "title": "Synkope",
    "causes": [
      {
        "name": "Vasovagale Synkope",
        "physiology": "Reflexbedingte Bradykardie und Vasodilatation",
        "findings": "Prodromi mit Schwitzen, Übelkeit, rasche Erholung",
        "cave": "Sturzfolgen",
        "info": "Reflexbedingte Bradykardie und Vasodilatation Prodromi mit Schwitzen, Übelkeit, rasche Erholung CAVE: Sturzfolgen"
      },
      {
        "name": "Orthostatische Hypotonie",
        "physiology": "Unzureichende Blutdruckregulation beim Aufstehen",
        "findings": "Schwindel nach Lagewechsel, niedriger RR",
        "cave": "Dehydratation oder Blutverlust",
        "info": "Unzureichende Blutdruckregulation beim Aufstehen Schwindel nach Lagewechsel, niedriger RR CAVE: Dehydratation oder Blutverlust"
      },
      {
        "name": "Arrhythmogene Synkope",
        "physiology": "Vorübergehend zu geringes Herzzeitvolumen durch Rhythmusstörung",
        "findings": "plötzlich ohne Vorzeichen, Palpitationen, pathologisches EKG möglich",
        "cave": "hohe Gefährdung",
        "info": "Vorübergehend zu geringes Herzzeitvolumen durch Rhythmusstörung plötzlich ohne Vorzeichen, Palpitationen, pathologisches EKG möglich CAVE: hohe Gefährdung"
      },
      {
        "name": "Lungenembolie",
        "physiology": "Große Embolie beeinträchtigt rechten Ventrikel und Kreislauf",
        "findings": "Dyspnoe, Tachykardie, Synkope",
        "cave": "hypotensiver Schock",
        "info": "Große Embolie beeinträchtigt rechten Ventrikel und Kreislauf Dyspnoe, Tachykardie, Synkope CAVE: hypotensiver Schock"
      },
      {
        "name": "Akuter Blutverlust",
        "physiology": "Hypovolämie senkt zerebrale Perfusion",
        "findings": "Tachykardie, Blässe, Schweiß",
        "cave": "okkulte Blutung",
        "info": "Hypovolämie senkt zerebrale Perfusion Tachykardie, Blässe, Schweiß CAVE: okkulte Blutung"
      },
      {
        "name": "Kardial",
        "info": "Bei Synkope als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Hypovolämie",
        "info": "Bei Synkope als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Metabolisch",
        "info": "Bei Synkope als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Belastungsabhängig?",
      "Prodromi?",
      "Palpitationen?",
      "Verletzungen durch Sturz?"
    ],
    "redflags": [
      "Ohne Vorwarnung",
      "Bei Belastung",
      "Thoraxschmerz",
      "Pathologisches EKG"
    ],
    "group": "Kreislauf"
  },
  {
    "id": "bauch",
    "icon": "stethoscope",
    "title": "Bauchschmerz",
    "causes": [
      {
        "name": "Gastroenteritis",
        "physiology": "Infektiöse Entzündung von Magen und Darm",
        "findings": "diffuse Krämpfe, Erbrechen, Diarrhö",
        "cave": "Dehydratation und atypische schwere Ursache",
        "info": "Infektiöse Entzündung von Magen und Darm diffuse Krämpfe, Erbrechen, Diarrhö CAVE: Dehydratation und atypische schwere Ursache"
      },
      {
        "name": "Appendizitis",
        "physiology": "Entzündung der Appendix",
        "findings": "periumbilikaler Schmerz mit Wanderung nach rechts unten, Fieber möglich",
        "cave": "atypische Lokalisation",
        "info": "Entzündung der Appendix periumbilikaler Schmerz mit Wanderung nach rechts unten, Fieber möglich CAVE: atypische Lokalisation"
      },
      {
        "name": "Cholezystitis / Gallenkolik",
        "physiology": "Gallensteinbedingte Obstruktion und ggf. Entzündung",
        "findings": "rechter Oberbauch, Übelkeit, Murphy-Zeichen",
        "cave": "Cholangitis bei Fieber/Ikterus",
        "info": "Gallensteinbedingte Obstruktion und ggf. Entzündung rechter Oberbauch, Übelkeit, Murphy-Zeichen CAVE: Cholangitis bei Fieber/Ikterus"
      },
      {
        "name": "Pankreatitis",
        "physiology": "Entzündung des Pankreas durch Enzymaktivierung",
        "findings": "gürtelförmiger Oberbauchschmerz, Erbrechen",
        "cave": "Organversagen bei schwerem Verlauf",
        "info": "Entzündung des Pankreas durch Enzymaktivierung gürtelförmiger Oberbauchschmerz, Erbrechen CAVE: Organversagen bei schwerem Verlauf"
      },
      {
        "name": "Nierenkolik",
        "physiology": "Harnleiterobstruktion meist durch Stein",
        "findings": "kolikartiger Flankenschmerz, Ausstrahlung Leiste, Hämaturie",
        "cave": "Fieber + Harnstau ist urologischer Notfall",
        "info": "Harnleiterobstruktion meist durch Stein kolikartiger Flankenschmerz, Ausstrahlung Leiste, Hämaturie CAVE: Fieber + Harnstau ist urologischer Notfall"
      },
      {
        "name": "Ileus",
        "physiology": "Mechanische oder funktionelle Darmpassagestörung",
        "findings": "kolikartige Schmerzen, Erbrechen, Distension, fehlender Wind",
        "cave": "Strangulation/Perforation",
        "info": "Mechanische oder funktionelle Darmpassagestörung kolikartige Schmerzen, Erbrechen, Distension, fehlender Wind CAVE: Strangulation/Perforation"
      },
      {
        "name": "Mesenterialischämie",
        "physiology": "Akute Minderdurchblutung des Darms",
        "findings": "starker Schmerz oft bei zunächst wenig Befund",
        "cave": "rasche Nekrose",
        "info": "Akute Minderdurchblutung des Darms starker Schmerz oft bei zunächst wenig Befund CAVE: rasche Nekrose"
      },
      {
        "name": "Rupturiertes Aortenaneurysma",
        "physiology": "Gefäßwandruptur mit innerer Blutung",
        "findings": "Abdomen-/Rückenschmerz, Synkope, Hypotonie",
        "cave": "Schockgefahr",
        "info": "Gefäßwandruptur mit innerer Blutung Abdomen-/Rückenschmerz, Synkope, Hypotonie CAVE: Schockgefahr"
      },
      {
        "name": "Extrauteringravidität",
        "physiology": "Schwangerschaft außerhalb des Uterus",
        "findings": "Unterbauchschmerz, vaginale Blutung, Synkope",
        "cave": "bei gebärfähigen Patientinnen Schwangerschaft erfragen",
        "info": "Schwangerschaft außerhalb des Uterus Unterbauchschmerz, vaginale Blutung, Synkope CAVE: bei gebärfähigen Patientinnen Schwangerschaft erfragen"
      },
      {
        "name": "Akutes Koronarsyndrom",
        "physiology": "Myokardischämie kann Oberbauchbeschwerden auslösen",
        "findings": "Übelkeit, Druck, Kaltschweißigkeit",
        "cave": "atypischer Infarkt",
        "info": "Myokardischämie kann Oberbauchbeschwerden auslösen Übelkeit, Druck, Kaltschweißigkeit CAVE: atypischer Infarkt"
      },
      {
        "name": "Akutes Abdomen",
        "info": "Bei Bauchschmerz als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "GI-Blutung",
        "info": "Bei Bauchschmerz als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "AAA",
        "info": "Bei Bauchschmerz als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Renale Kolik",
        "info": "Bei Bauchschmerz als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Lokalisation und OPQRST?",
      "Erbrechen oder Diarrhoe?",
      "Blutung?",
      "Schwangerschaft möglich?"
    ],
    "redflags": [
      "Abwehrspannung",
      "Schockzeichen",
      "Blutiges Erbrechen / Teerstuhl",
      "Synkope"
    ],
    "group": "Abdomen"
  },
  {
    "id": "allergie",
    "icon": "syringe",
    "title": "Allergische Reaktion",
    "causes": [
      {
        "name": "Fremdkörperaspiration",
        "physiology": "Mechanische Obstruktion der Atemwege",
        "findings": "plötzlicher Husten, Stridor, Sprechunfähigkeit",
        "cave": "stille vollständige Verlegung ist unmittelbar lebensbedrohlich",
        "info": "Mechanische Obstruktion der Atemwege plötzlicher Husten, Stridor, Sprechunfähigkeit CAVE: stille vollständige Verlegung ist unmittelbar lebensbedrohlich"
      },
      {
        "name": "Anaphylaxie",
        "physiology": "Akute systemische Mastzellaktivierung mit Schleimhautödem und Bronchospasmus",
        "findings": "Stridor, Urtikaria, Hypotonie",
        "cave": "Hauterscheinungen können fehlen",
        "info": "Akute systemische Mastzellaktivierung mit Schleimhautödem und Bronchospasmus Stridor, Urtikaria, Hypotonie CAVE: Hauterscheinungen können fehlen"
      },
      {
        "name": "Epiglottitis",
        "physiology": "Akute Entzündung der Epiglottis mit Ödem",
        "findings": "Fieber, Dysphagie, Speichelfluss, inspiratorischer Stridor",
        "cave": "Racheninspektion oder Agitation kann die Atemwegsverlegung verstärken",
        "info": "Akute Entzündung der Epiglottis mit Ödem Fieber, Dysphagie, Speichelfluss, inspiratorischer Stridor CAVE: Racheninspektion oder Agitation kann die Atemwegsverlegung verstärken"
      },
      {
        "name": "Pseudokrupp",
        "physiology": "Virale subglottische Schleimhautschwellung bei Kleinkindern",
        "findings": "bellender Husten, Heiserkeit, inspiratorischer Stridor",
        "cave": "Ruhedyspnoe und Erschöpfung",
        "info": "Virale subglottische Schleimhautschwellung bei Kleinkindern bellender Husten, Heiserkeit, inspiratorischer Stridor CAVE: Ruhedyspnoe und Erschöpfung"
      },
      {
        "name": "Lokale Reaktion",
        "info": "Bei Allergische Reaktion als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Medikamentenreaktion",
        "info": "Bei Allergische Reaktion als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Möglicher Auslöser?",
      "Haut, Atmung oder Kreislauf betroffen?",
      "Autoinjektor vorhanden?"
    ],
    "redflags": [
      "Stridor",
      "Hypotonie",
      "Rasche Progression",
      "Bewusstseinsstörung"
    ],
    "group": "Atemweg"
  },
  {
    "id": "stroke",
    "icon": "clock",
    "title": "Schlaganfall",
    "causes": [
      {
        "name": "Ischämischer Schlaganfall",
        "physiology": "Akuter Gefäßverschluss mit Hirnischämie",
        "findings": "FAST-Defizite, Aphasie, Hemiparese",
        "cave": "Zeitkritik, ggf. große Gefäßokklusion",
        "info": "Akuter Gefäßverschluss mit Hirnischämie FAST-Defizite, Aphasie, Hemiparese CAVE: Zeitkritik, ggf. große Gefäßokklusion"
      },
      {
        "name": "Intrazerebrale Blutung",
        "physiology": "Blutung in Hirngewebe",
        "findings": "fokale Defizite, Kopfschmerz, Vigilanzabfall möglich",
        "cave": "klinisch nicht sicher von Ischämie unterscheidbar",
        "info": "Blutung in Hirngewebe fokale Defizite, Kopfschmerz, Vigilanzabfall möglich CAVE: klinisch nicht sicher von Ischämie unterscheidbar"
      },
      {
        "name": "Hypoglykämie",
        "physiology": "Glukosemangel kann fokale Ausfälle imitieren",
        "findings": "niedriger BZ, neurologische Symptome",
        "cave": "rasche Messung",
        "info": "Glukosemangel kann fokale Ausfälle imitieren niedriger BZ, neurologische Symptome CAVE: rasche Messung"
      },
      {
        "name": "Todd-Parese",
        "physiology": "Vorübergehende fokale Schwäche nach Anfall",
        "findings": "postiktale Anamnese",
        "cave": "paralleler Schlaganfall möglich",
        "info": "Vorübergehende fokale Schwäche nach Anfall postiktale Anamnese CAVE: paralleler Schlaganfall möglich"
      },
      {
        "name": "Ischämischer Insult",
        "info": "Bei Schlaganfall als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Hämorrhagie",
        "info": "Bei Schlaganfall als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Stroke Mimic",
        "info": "Bei Schlaganfall als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Last seen well?",
      "FAST positiv?",
      "Antikoagulation?",
      "Krampfanfall?"
    ],
    "redflags": [
      "Progrediente Defizite",
      "Bewusstseinsstörung",
      "Starker Kopfschmerz",
      "Aspirationsgefahr"
    ],
    "group": "Neurologie"
  },
  {
    "id": "trauma",
    "icon": "bandage",
    "title": "Trauma",
    "causes": [
      {
        "name": "Commotio cerebri",
        "physiology": "Traumatisch bedingte vorübergehende Hirnfunktionsstörung",
        "findings": "Kopfschmerz, Amnesie, Übelkeit",
        "cave": "zunehmende Bewusstseinsstörung",
        "info": "Traumatisch bedingte vorübergehende Hirnfunktionsstörung Kopfschmerz, Amnesie, Übelkeit CAVE: zunehmende Bewusstseinsstörung"
      },
      {
        "name": "Subduralhämatom",
        "physiology": "Blutung zwischen Dura und Arachnoidea",
        "findings": "Kopfschmerz, Vigilanzabfall, fokale Zeichen",
        "cave": "verzögerte Verschlechterung, Antikoagulation",
        "info": "Blutung zwischen Dura und Arachnoidea Kopfschmerz, Vigilanzabfall, fokale Zeichen CAVE: verzögerte Verschlechterung, Antikoagulation"
      },
      {
        "name": "Epiduralhämatom",
        "physiology": "Arterielle/venöse Blutung zwischen Schädel und Dura",
        "findings": "Bewusstseinsstörung, eventuell freies Intervall",
        "cave": "rasche Einklemmung",
        "info": "Arterielle/venöse Blutung zwischen Schädel und Dura Bewusstseinsstörung, eventuell freies Intervall CAVE: rasche Einklemmung"
      },
      {
        "name": "SHT",
        "info": "Bei Trauma als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Thoraxtrauma",
        "info": "Bei Trauma als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Abdominaltrauma",
        "info": "Bei Trauma als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Fraktur",
        "info": "Bei Trauma als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      },
      {
        "name": "Starke Blutung",
        "info": "Bei Trauma als Differenzialdiagnose berücksichtigen; gezielte Anamnese und ABCDE-Befunde entscheiden über die weitere Abklärung."
      }
    ],
    "questions": [
      "Unfallmechanismus?",
      "Höhe / Geschwindigkeit?",
      "Schutzsysteme?",
      "Schmerzlokalisation?"
    ],
    "redflags": [
      "Instabiler Kreislauf",
      "Atemnot",
      "Bewusstseinsstörung",
      "Starke Blutung"
    ],
    "group": "Trauma"
  },
  {
    "id": "diag-schluckstoerung-halsanschwellung",
    "group": "Atemweg",
    "icon": "🗣️",
    "title": "Schluckstörung / Halsanschwellung",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Angioödem",
        "physiology": "Tiefes Ödem von Haut oder Schleimhaut, histamin- oder bradykininvermittelt",
        "findings": "Zungen-/Lippenschwellung, Dysphagie, ggf. Stridor",
        "cave": "ACE-Hemmer-Angioödem oft ohne Urtikaria",
        "info": "Tiefes Ödem von Haut oder Schleimhaut, histamin- oder bradykininvermittelt Zungen-/Lippenschwellung, Dysphagie, ggf. Stridor CAVE: ACE-Hemmer-Angioödem oft ohne Urtikaria"
      },
      {
        "name": "Peritonsillarabszess",
        "physiology": "Eitrige Infektion im Tonsillenumfeld",
        "findings": "einseitige Halsschmerzen, kloßige Sprache, Trismus",
        "cave": "Atemweg und tiefe Ausbreitung",
        "info": "Eitrige Infektion im Tonsillenumfeld einseitige Halsschmerzen, kloßige Sprache, Trismus CAVE: Atemweg und tiefe Ausbreitung"
      },
      {
        "name": "Schlaganfall",
        "physiology": "Zentrale Schluckstörung durch zerebrale Ischämie/Blutung",
        "findings": "Dysarthrie, Fazialisparese, Aspirationsgefahr",
        "cave": "plötzlicher Beginn ist zeitkritisch",
        "info": "Zentrale Schluckstörung durch zerebrale Ischämie/Blutung Dysarthrie, Fazialisparese, Aspirationsgefahr CAVE: plötzlicher Beginn ist zeitkritisch"
      }
    ]
  },
  {
    "id": "diag-husten-produktiver-husten",
    "group": "Atmung",
    "icon": "🫁",
    "title": "Husten / produktiver Husten",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Akute Bronchitis",
        "physiology": "Meist virale Entzündung der Bronchialschleimhaut",
        "findings": "Husten, Auswurf, oft normale SpO₂",
        "cave": "Dyspnoe oder schlechte Vitalwerte sprechen für schwere Ursache",
        "info": "Meist virale Entzündung der Bronchialschleimhaut Husten, Auswurf, oft normale SpO₂ CAVE: Dyspnoe oder schlechte Vitalwerte sprechen für schwere Ursache"
      },
      {
        "name": "Pneumonie",
        "physiology": "Infektion von Alveolen und Interstitium",
        "findings": "Fieber, produktiver Husten, Tachypnoe, fokale Auskultation",
        "cave": "Sepsisgefahr",
        "info": "Infektion von Alveolen und Interstitium Fieber, produktiver Husten, Tachypnoe, fokale Auskultation CAVE: Sepsisgefahr"
      },
      {
        "name": "COPD-Exazerbation",
        "physiology": "Akute Verschlechterung bestehender COPD",
        "findings": "mehr Husten, Dyspnoe und/oder Sputum",
        "cave": "Hyperkapnie und Atemerschöpfung",
        "info": "Akute Verschlechterung bestehender COPD mehr Husten, Dyspnoe und/oder Sputum CAVE: Hyperkapnie und Atemerschöpfung"
      },
      {
        "name": "Kardiales Lungenödem",
        "physiology": "Flüssigkeitsübertritt in Lungengewebe",
        "findings": "Husten, Orthopnoe, feuchte Rasselgeräusche, teils schaumiger Auswurf",
        "cave": "schwere Hypoxämie",
        "info": "Flüssigkeitsübertritt in Lungengewebe Husten, Orthopnoe, feuchte Rasselgeräusche, teils schaumiger Auswurf CAVE: schwere Hypoxämie"
      }
    ]
  },
  {
    "id": "diag-bluthusten-haemoptyse",
    "group": "Atmung",
    "icon": "🫁",
    "title": "Bluthusten / Hämoptyse",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Bronchitis / Bronchiektasen",
        "physiology": "Entzündliche oder strukturelle Bronchialschäden mit Schleimhautblutung",
        "findings": "blutiger Auswurf, Husten",
        "cave": "echte Hämoptyse von Hämatemesis unterscheiden",
        "info": "Entzündliche oder strukturelle Bronchialschäden mit Schleimhautblutung blutiger Auswurf, Husten CAVE: echte Hämoptyse von Hämatemesis unterscheiden"
      },
      {
        "name": "Lungenembolie",
        "physiology": "Gefäßverschluss mit möglichem Lungeninfarkt",
        "findings": "Dyspnoe, pleuritischer Schmerz, Hämoptyse",
        "cave": "Synkope/Hypotonie",
        "info": "Gefäßverschluss mit möglichem Lungeninfarkt Dyspnoe, pleuritischer Schmerz, Hämoptyse CAVE: Synkope/Hypotonie"
      },
      {
        "name": "Pneumonie",
        "physiology": "Entzündungsbedingte Gefäßschädigung",
        "findings": "Fieber, Husten, blutiges Sputum",
        "cave": "schwere Infektion",
        "info": "Entzündungsbedingte Gefäßschädigung Fieber, Husten, blutiges Sputum CAVE: schwere Infektion"
      },
      {
        "name": "Pulmonale Blutung",
        "physiology": "Blut tritt in die Atemwege ein",
        "findings": "größere Blutmengen, Hypoxämie",
        "cave": "Erstickungsgefahr auch ohne erheblichen Blutverlust",
        "info": "Blut tritt in die Atemwege ein größere Blutmengen, Hypoxämie CAVE: Erstickungsgefahr auch ohne erheblichen Blutverlust"
      }
    ]
  },
  {
    "id": "diag-palpitationen-herzrasen",
    "group": "Kreislauf",
    "icon": "❤️",
    "title": "Palpitationen / Herzrasen",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Vorhofflimmern",
        "physiology": "Ungeordnete atriale Erregung mit unregelmäßiger Kammeraktion",
        "findings": "absolut arrhythmischer Puls, variable HF",
        "cave": "Instabilität und thromboembolisches Risiko",
        "info": "Ungeordnete atriale Erregung mit unregelmäßiger Kammeraktion absolut arrhythmischer Puls, variable HF CAVE: Instabilität und thromboembolisches Risiko"
      },
      {
        "name": "Supraventrikuläre Tachykardie",
        "physiology": "Reentry oder fokale atriale Tachykardie",
        "findings": "meist regelmäßige schmale Tachykardie, plötzlich einsetzend",
        "cave": "Hypotonie, Thoraxschmerz, Synkope",
        "info": "Reentry oder fokale atriale Tachykardie meist regelmäßige schmale Tachykardie, plötzlich einsetzend CAVE: Hypotonie, Thoraxschmerz, Synkope"
      },
      {
        "name": "Ventrikuläre Tachykardie",
        "physiology": "Tachykarder Ursprung aus den Kammern",
        "findings": "breite regelmäßige QRS-Komplexe häufig, Schock/Synkope",
        "cave": "breite Tachykardie zunächst als VT bewerten",
        "info": "Tachykarder Ursprung aus den Kammern breite regelmäßige QRS-Komplexe häufig, Schock/Synkope CAVE: breite Tachykardie zunächst als VT bewerten"
      },
      {
        "name": "Sinustachykardie",
        "physiology": "Physiologische Reaktion auf Stressoren",
        "findings": "regelmäßiger Rhythmus mit P-Wellen",
        "cave": "Ursache wie Sepsis, Blutung oder LAE suchen",
        "info": "Physiologische Reaktion auf Stressoren regelmäßiger Rhythmus mit P-Wellen CAVE: Ursache wie Sepsis, Blutung oder LAE suchen"
      }
    ]
  },
  {
    "id": "diag-bradykardie",
    "group": "Kreislauf",
    "icon": "❤️",
    "title": "Bradykardie",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "AV-Block",
        "physiology": "Gestörte atrioventrikuläre Überleitung",
        "findings": "langsame HF, EKG mit Überleitungsstörung",
        "cave": "höhergradige Blöcke können instabil werden",
        "info": "Gestörte atrioventrikuläre Überleitung langsame HF, EKG mit Überleitungsstörung CAVE: höhergradige Blöcke können instabil werden"
      },
      {
        "name": "Hyperkaliämie",
        "physiology": "Erhöhtes Serumkalium beeinträchtigt kardiale Erregung",
        "findings": "Bradykardie, Leitungsstörungen, teils spitze T-Wellen",
        "cave": "EKG kann trotz schwerer Hyperkaliämie wenig auffällig sein",
        "info": "Erhöhtes Serumkalium beeinträchtigt kardiale Erregung Bradykardie, Leitungsstörungen, teils spitze T-Wellen CAVE: EKG kann trotz schwerer Hyperkaliämie wenig auffällig sein"
      },
      {
        "name": "Medikamentenwirkung",
        "physiology": "Betablocker, Calciumantagonisten oder Digitalis reduzieren Frequenz/Überleitung",
        "findings": "Bradykardie, Hypotonie",
        "cave": "Intoxikation beachten",
        "info": "Betablocker, Calciumantagonisten oder Digitalis reduzieren Frequenz/Überleitung Bradykardie, Hypotonie CAVE: Intoxikation beachten"
      },
      {
        "name": "Vagale Reaktion",
        "physiology": "Reflektorische Frequenz- und Blutdrucksenkung",
        "findings": "Übelkeit, Schwitzen, kurzzeitige Bradykardie",
        "cave": "kardiale Ursachen ausschließen",
        "info": "Reflektorische Frequenz- und Blutdrucksenkung Übelkeit, Schwitzen, kurzzeitige Bradykardie CAVE: kardiale Ursachen ausschließen"
      }
    ]
  },
  {
    "id": "diag-hypotonie-schock",
    "group": "Kreislauf",
    "icon": "❤️",
    "title": "Hypotonie / Schock",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Hypovolämischer Schock",
        "physiology": "Verminderte zirkulierende Blutmenge",
        "findings": "Tachykardie, kalte Haut, verlängerte Rekapillarisierung",
        "cave": "Normotonie schließt kompensierten Schock nicht aus",
        "info": "Verminderte zirkulierende Blutmenge Tachykardie, kalte Haut, verlängerte Rekapillarisierung CAVE: Normotonie schließt kompensierten Schock nicht aus"
      },
      {
        "name": "Kardiogener Schock",
        "physiology": "Pumpversagen des Herzens",
        "findings": "Hypotonie, kalte Extremitäten, Stauungszeichen möglich",
        "cave": "ACS und Rhythmusstörungen",
        "info": "Pumpversagen des Herzens Hypotonie, kalte Extremitäten, Stauungszeichen möglich CAVE: ACS und Rhythmusstörungen"
      },
      {
        "name": "Septischer Schock",
        "physiology": "Infektionsbedingte Vasodilatation, Kapillarleck und Organminderperfusion",
        "findings": "veränderte Vigilanz, Tachypnoe, ggf. warme Haut initial",
        "cave": "Fieber kann fehlen",
        "info": "Infektionsbedingte Vasodilatation, Kapillarleck und Organminderperfusion veränderte Vigilanz, Tachypnoe, ggf. warme Haut initial CAVE: Fieber kann fehlen"
      },
      {
        "name": "Anaphylaktischer Schock",
        "physiology": "Systemische Mediatorfreisetzung mit Vasodilatation und Kapillarleck",
        "findings": "Hypotonie, Bronchospasmus, Hautsymptome möglich",
        "cave": "ohne Exanthem möglich",
        "info": "Systemische Mediatorfreisetzung mit Vasodilatation und Kapillarleck Hypotonie, Bronchospasmus, Hautsymptome möglich CAVE: ohne Exanthem möglich"
      },
      {
        "name": "Obstruktiver Schock",
        "physiology": "Mechanische Füllungs-/Auswurfbehinderung des Herzens",
        "findings": "Hypotonie bei LAE, Tamponade oder Spannungspneumothorax",
        "cave": "unmittelbar reversible Ursachen",
        "info": "Mechanische Füllungs-/Auswurfbehinderung des Herzens Hypotonie bei LAE, Tamponade oder Spannungspneumothorax CAVE: unmittelbar reversible Ursachen"
      }
    ]
  },
  {
    "id": "diag-bluthochdruck-hypertensiver-notfall",
    "group": "Kreislauf",
    "icon": "❤️",
    "title": "Bluthochdruck / hypertensiver Notfall",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Hypertensiver Notfall",
        "physiology": "Akut stark erhöhter RR mit Endorganschaden",
        "findings": "neurologische Defizite, Dyspnoe, Thoraxschmerz oder Nierenfunktionsstörung",
        "cave": "Endorganschaden ist entscheidend, nicht nur RR-Zahl",
        "info": "Akut stark erhöhter RR mit Endorganschaden neurologische Defizite, Dyspnoe, Thoraxschmerz oder Nierenfunktionsstörung CAVE: Endorganschaden ist entscheidend, nicht nur RR-Zahl"
      },
      {
        "name": "Hypertensive Entgleisung ohne akuten Organschaden",
        "physiology": "Erhöhter arterieller Widerstand",
        "findings": "oft wenige oder keine Beschwerden",
        "cave": "keine rasche RR-Senkung ohne Indikation",
        "info": "Erhöhter arterieller Widerstand oft wenige oder keine Beschwerden CAVE: keine rasche RR-Senkung ohne Indikation"
      },
      {
        "name": "Präeklampsie",
        "physiology": "Schwangerschaftsassoziierte Endotheldysfunktion mit Hypertonie",
        "findings": "Kopfschmerz, Sehstörung, Oberbauchschmerz",
        "cave": "Eklampsie/HELLP",
        "info": "Schwangerschaftsassoziierte Endotheldysfunktion mit Hypertonie Kopfschmerz, Sehstörung, Oberbauchschmerz CAVE: Eklampsie/HELLP"
      }
    ]
  },
  {
    "id": "diag-kopfschmerz",
    "group": "Neurologie",
    "icon": "🧠",
    "title": "Kopfschmerz",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Migräne",
        "physiology": "Neurovaskuläre Kopfschmerzerkrankung",
        "findings": "pulsierend, Übelkeit, Lichtempfindlichkeit, ggf. Aura",
        "cave": "erstmaliger/atypischer Kopfschmerz",
        "info": "Neurovaskuläre Kopfschmerzerkrankung pulsierend, Übelkeit, Lichtempfindlichkeit, ggf. Aura CAVE: erstmaliger/atypischer Kopfschmerz"
      },
      {
        "name": "Spannungskopfschmerz",
        "physiology": "Primärer Kopfschmerz mit muskulärer und zentraler Schmerzverarbeitung",
        "findings": "bilateral drückend",
        "cave": "neue Red Flags hinterfragen",
        "info": "Primärer Kopfschmerz mit muskulärer und zentraler Schmerzverarbeitung bilateral drückend CAVE: neue Red Flags hinterfragen"
      },
      {
        "name": "Subarachnoidalblutung",
        "physiology": "Blutung in Subarachnoidalraum, häufig Aneurysmaruptur",
        "findings": "schlagartiger Vernichtungskopfschmerz",
        "cave": "neurologischer Status kann anfangs normal sein",
        "info": "Blutung in Subarachnoidalraum, häufig Aneurysmaruptur schlagartiger Vernichtungskopfschmerz CAVE: neurologischer Status kann anfangs normal sein"
      },
      {
        "name": "Meningitis",
        "physiology": "Entzündung der Hirnhäute",
        "findings": "Fieber, Kopfschmerz, Meningismus möglich",
        "cave": "klassische Trias kann fehlen",
        "info": "Entzündung der Hirnhäute Fieber, Kopfschmerz, Meningismus möglich CAVE: klassische Trias kann fehlen"
      },
      {
        "name": "Clusterkopfschmerz",
        "physiology": "Trigeminus-autonome Kopfschmerzerkrankung",
        "findings": "stärkster einseitiger orbitaler Schmerz, Tränenfluss, Unruhe",
        "cave": "neue Ausfälle abklären",
        "info": "Trigeminus-autonome Kopfschmerzerkrankung stärkster einseitiger orbitaler Schmerz, Tränenfluss, Unruhe CAVE: neue Ausfälle abklären"
      }
    ]
  },
  {
    "id": "diag-schwindel-ataxie",
    "group": "Neurologie",
    "icon": "🧠",
    "title": "Schwindel / Ataxie",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Benigner Lagerungsschwindel",
        "physiology": "Otolithen im Bogengang lösen lageabhängigen Drehschwindel aus",
        "findings": "Sekunden dauernde Attacken bei Lagewechsel",
        "cave": "persistierende neurologische Symptome sprechen dagegen",
        "info": "Otolithen im Bogengang lösen lageabhängigen Drehschwindel aus Sekunden dauernde Attacken bei Lagewechsel CAVE: persistierende neurologische Symptome sprechen dagegen"
      },
      {
        "name": "Vestibularisneuritis",
        "physiology": "Akuter einseitiger Vestibularisausfall",
        "findings": "anhaltender Schwindel, Nystagmus, Übelkeit",
        "cave": "posteriorer Schlaganfall kann ähnlich sein",
        "info": "Akuter einseitiger Vestibularisausfall anhaltender Schwindel, Nystagmus, Übelkeit CAVE: posteriorer Schlaganfall kann ähnlich sein"
      },
      {
        "name": "Kleinhirn-/Hirnstamminfarkt",
        "physiology": "Unterbrechung der zerebellären/vertebrobasilären Durchblutung",
        "findings": "akute Ataxie, Dysarthrie, Doppelbilder, teils isolierter Schwindel",
        "cave": "FAST kann negativ sein",
        "info": "Unterbrechung der zerebellären/vertebrobasilären Durchblutung akute Ataxie, Dysarthrie, Doppelbilder, teils isolierter Schwindel CAVE: FAST kann negativ sein"
      },
      {
        "name": "Orthostatische Hypotonie",
        "physiology": "Abfall der zerebralen Perfusion beim Aufstehen",
        "findings": "präsynkopaler Schwindel",
        "cave": "Blutverlust und Arrhythmie ausschließen",
        "info": "Abfall der zerebralen Perfusion beim Aufstehen präsynkopaler Schwindel CAVE: Blutverlust und Arrhythmie ausschließen"
      }
    ]
  },
  {
    "id": "diag-krampfanfall",
    "group": "Neurologie",
    "icon": "🧠",
    "title": "Krampfanfall",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Epileptischer Anfall",
        "physiology": "Vorübergehende synchronisierte neuronale Übererregung",
        "findings": "tonisch-klonische Bewegung, postiktale Phase möglich",
        "cave": "Atemwegsgefährdung",
        "info": "Vorübergehende synchronisierte neuronale Übererregung tonisch-klonische Bewegung, postiktale Phase möglich CAVE: Atemwegsgefährdung"
      },
      {
        "name": "Status epilepticus",
        "physiology": "Anhaltende oder rasch wiederholte Anfälle ohne Erholung",
        "findings": "konvulsiver Anfall ab ca. 5 Minuten behandlungsbedürftig",
        "cave": "Hypoxie und Folgeschäden",
        "info": "Anhaltende oder rasch wiederholte Anfälle ohne Erholung konvulsiver Anfall ab ca. 5 Minuten behandlungsbedürftig CAVE: Hypoxie und Folgeschäden"
      },
      {
        "name": "Fieberkrampf",
        "physiology": "Anfall im Zusammenhang mit Fieber im Kindesalter",
        "findings": "generalisierte Krämpfe möglich",
        "cave": "Meningitis und komplexe Verläufe",
        "info": "Anfall im Zusammenhang mit Fieber im Kindesalter generalisierte Krämpfe möglich CAVE: Meningitis und komplexe Verläufe"
      },
      {
        "name": "Hypoglykämie",
        "physiology": "Schwere neuroglykopenische Störung",
        "findings": "niedriger BZ, Krämpfe",
        "cave": "rasch reversible Ursache",
        "info": "Schwere neuroglykopenische Störung niedriger BZ, Krämpfe CAVE: rasch reversible Ursache"
      }
    ]
  },
  {
    "id": "diag-sehstoerung-sehverlust",
    "group": "Neurologie",
    "icon": "🧠",
    "title": "Sehstörung / Sehverlust",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Retinaler Arterienverschluss",
        "physiology": "Akute Netzhautischämie",
        "findings": "plötzlicher schmerzloser monokularer Visusverlust",
        "cave": "vaskulärer Zeitnotfall",
        "info": "Akute Netzhautischämie plötzlicher schmerzloser monokularer Visusverlust CAVE: vaskulärer Zeitnotfall"
      },
      {
        "name": "Migräne mit Aura",
        "physiology": "Vorübergehende kortikale Funktionsstörung",
        "findings": "flimmernde Skotome, meist graduelle Ausbreitung",
        "cave": "erstmalige Aura/TIA abgrenzen",
        "info": "Vorübergehende kortikale Funktionsstörung flimmernde Skotome, meist graduelle Ausbreitung CAVE: erstmalige Aura/TIA abgrenzen"
      },
      {
        "name": "Akutes Winkelblockglaukom",
        "physiology": "Plötzlicher Abflussstau des Kammerwassers",
        "findings": "rotes schmerzhaftes Auge, Visusminderung, Übelkeit",
        "cave": "Sehverlust droht",
        "info": "Plötzlicher Abflussstau des Kammerwassers rotes schmerzhaftes Auge, Visusminderung, Übelkeit CAVE: Sehverlust droht"
      },
      {
        "name": "Schlaganfall",
        "physiology": "Okzipitale oder Hirnstammischämie",
        "findings": "homonyme Gesichtsfeldausfälle, Doppelbilder",
        "cave": "begleitende Hirnstammzeichen",
        "info": "Okzipitale oder Hirnstammischämie homonyme Gesichtsfeldausfälle, Doppelbilder CAVE: begleitende Hirnstammzeichen"
      }
    ]
  },
  {
    "id": "diag-uebelkeit-erbrechen",
    "group": "Abdomen",
    "icon": "🩺",
    "title": "Übelkeit / Erbrechen",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Gastroenteritis",
        "physiology": "Magen-Darm-Infekt führt zu Schleimhautreizung",
        "findings": "Erbrechen und Durchfall",
        "cave": "Volumenmangel",
        "info": "Magen-Darm-Infekt führt zu Schleimhautreizung Erbrechen und Durchfall CAVE: Volumenmangel"
      },
      {
        "name": "Ileus",
        "physiology": "Blockierte Darmpassage",
        "findings": "Erbrechen, zunehmende Distension, Stuhlverhalt",
        "cave": "Aspirations- und Ischämiegefahr",
        "info": "Blockierte Darmpassage Erbrechen, zunehmende Distension, Stuhlverhalt CAVE: Aspirations- und Ischämiegefahr"
      },
      {
        "name": "Migräne",
        "physiology": "Neurovaskuläre Störung mit vegetativer Aktivierung",
        "findings": "Übelkeit, Lichtscheu, Kopfschmerz",
        "cave": "atypische neurologische Zeichen",
        "info": "Neurovaskuläre Störung mit vegetativer Aktivierung Übelkeit, Lichtscheu, Kopfschmerz CAVE: atypische neurologische Zeichen"
      },
      {
        "name": "Diabetische Ketoazidose",
        "physiology": "Insulinmangel verursacht Ketogenese und metabolische Azidose",
        "findings": "Bauchschmerz, Erbrechen, vertiefte Atmung, hoher BZ oft >250 mg/dl",
        "cave": "euglykämische DKA möglich",
        "info": "Insulinmangel verursacht Ketogenese und metabolische Azidose Bauchschmerz, Erbrechen, vertiefte Atmung, hoher BZ oft >250 mg/dl CAVE: euglykämische DKA möglich"
      },
      {
        "name": "Myokardinfarkt",
        "physiology": "Akute Myokardischämie mit vegetativen Symptomen",
        "findings": "Übelkeit, Kaltschweißigkeit, ggf. Oberbauchdruck",
        "cave": "ohne Brustschmerz möglich",
        "info": "Akute Myokardischämie mit vegetativen Symptomen Übelkeit, Kaltschweißigkeit, ggf. Oberbauchdruck CAVE: ohne Brustschmerz möglich"
      }
    ]
  },
  {
    "id": "diag-bluterbrechen-haematemesis",
    "group": "Abdomen",
    "icon": "🩺",
    "title": "Bluterbrechen / Hämatemesis",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Ulkusblutung",
        "physiology": "Arrosion eines Gefäßes in Magen/Duodenum",
        "findings": "frisches Blut oder Kaffeesatzerbrechen",
        "cave": "hämorrhagischer Schock",
        "info": "Arrosion eines Gefäßes in Magen/Duodenum frisches Blut oder Kaffeesatzerbrechen CAVE: hämorrhagischer Schock"
      },
      {
        "name": "Ösophagusvarizenblutung",
        "physiology": "Ruptur portaler Kollateralen meist bei Leberzirrhose",
        "findings": "starke Hämatemesis",
        "cave": "rascher Blutverlust und Aspirationsrisiko",
        "info": "Ruptur portaler Kollateralen meist bei Leberzirrhose starke Hämatemesis CAVE: rascher Blutverlust und Aspirationsrisiko"
      },
      {
        "name": "Mallory-Weiss-Läsion",
        "physiology": "Schleimhautriss nach starkem Würgen",
        "findings": "Blut nach Erbrechensattacke",
        "cave": "Ausmaß der Blutung beachten",
        "info": "Schleimhautriss nach starkem Würgen Blut nach Erbrechensattacke CAVE: Ausmaß der Blutung beachten"
      }
    ]
  },
  {
    "id": "diag-blut-im-stuhl-melaena",
    "group": "Abdomen",
    "icon": "🩺",
    "title": "Blut im Stuhl / Meläna",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Obere gastrointestinale Blutung",
        "physiology": "Blutung proximal des Treitz-Bands führt häufig zu Teerstuhl",
        "findings": "schwarze klebrige Stühle, ggf. Schock",
        "cave": "massive Blutung kann auch rot erscheinen",
        "info": "Blutung proximal des Treitz-Bands führt häufig zu Teerstuhl schwarze klebrige Stühle, ggf. Schock CAVE: massive Blutung kann auch rot erscheinen"
      },
      {
        "name": "Divertikelblutung",
        "physiology": "Blutung aus Dickdarmdivertikel",
        "findings": "meist schmerzlose Hämatochezie",
        "cave": "erheblicher Volumenverlust",
        "info": "Blutung aus Dickdarmdivertikel meist schmerzlose Hämatochezie CAVE: erheblicher Volumenverlust"
      },
      {
        "name": "Ischämische Kolitis",
        "physiology": "Darmwand-Minderperfusion",
        "findings": "Bauchschmerzen und blutiger Stuhl",
        "cave": "Mesenterialischämie ausschließen",
        "info": "Darmwand-Minderperfusion Bauchschmerzen und blutiger Stuhl CAVE: Mesenterialischämie ausschließen"
      },
      {
        "name": "Hämorrhoiden",
        "physiology": "Blutung erweiterter Gefäßpolster",
        "findings": "hellrotes Blut am Papier",
        "cave": "nicht vorschnell als harmlose Ursache werten",
        "info": "Blutung erweiterter Gefäßpolster hellrotes Blut am Papier CAVE: nicht vorschnell als harmlose Ursache werten"
      }
    ]
  },
  {
    "id": "diag-durchfall-dehydratation",
    "group": "Abdomen",
    "icon": "🩺",
    "title": "Durchfall / Dehydratation",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Akute Gastroenteritis",
        "physiology": "Infektiöse Flüssigkeitssekretion oder Malabsorption",
        "findings": "Diarrhö, Erbrechen, trockene Schleimhäute",
        "cave": "Hypovolämie",
        "info": "Infektiöse Flüssigkeitssekretion oder Malabsorption Diarrhö, Erbrechen, trockene Schleimhäute CAVE: Hypovolämie"
      },
      {
        "name": "Clostridioides-difficile-Kolitis",
        "physiology": "Toxinvermittelte Darmentzündung oft nach Antibiotika",
        "findings": "wässrige Diarrhö, Fieber",
        "cave": "toxisches Megakolon/Sepsis",
        "info": "Toxinvermittelte Darmentzündung oft nach Antibiotika wässrige Diarrhö, Fieber CAVE: toxisches Megakolon/Sepsis"
      },
      {
        "name": "Ischämische Kolitis",
        "physiology": "Minderdurchblutung der Kolonschleimhaut",
        "findings": "krampfartiger Schmerz, ggf. blutige Diarrhö",
        "cave": "vaskuläre Ursache",
        "info": "Minderdurchblutung der Kolonschleimhaut krampfartiger Schmerz, ggf. blutige Diarrhö CAVE: vaskuläre Ursache"
      }
    ]
  },
  {
    "id": "diag-hypoglykaemiezeichen",
    "group": "Stoffwechsel",
    "icon": "🧪",
    "title": "Hypoglykämiezeichen",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Medikamentenbedingte Hypoglykämie",
        "physiology": "Insulin oder Sulfonylharnstoffe senken Glukose",
        "findings": "Schwitzen, Tremor, Verwirrtheit, BZ <70 mg/dl",
        "cave": "Rezidiv insbesondere bei Sulfonylharnstoffen",
        "info": "Insulin oder Sulfonylharnstoffe senken Glukose Schwitzen, Tremor, Verwirrtheit, BZ <70 mg/dl CAVE: Rezidiv insbesondere bei Sulfonylharnstoffen"
      },
      {
        "name": "Sepsisassoziierte Hypoglykämie",
        "physiology": "Erhöhter Verbrauch/gestörte Glukosebereitstellung",
        "findings": "Verwirrtheit, niedriger BZ",
        "cave": "schwerer Infekt",
        "info": "Erhöhter Verbrauch/gestörte Glukosebereitstellung Verwirrtheit, niedriger BZ CAVE: schwerer Infekt"
      },
      {
        "name": "Alkoholassoziierte Hypoglykämie",
        "physiology": "Hemmung der Glukoneogenese bei eingeschränkten Reserven",
        "findings": "Bewusstseinsstörung, erniedrigter BZ",
        "cave": "Intoxikation überdeckt Hypoglykämie",
        "info": "Hemmung der Glukoneogenese bei eingeschränkten Reserven Bewusstseinsstörung, erniedrigter BZ CAVE: Intoxikation überdeckt Hypoglykämie"
      }
    ]
  },
  {
    "id": "diag-hyperglykaemie-polyurie",
    "group": "Stoffwechsel",
    "icon": "🧪",
    "title": "Hyperglykämie / Polyurie",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Diabetische Ketoazidose",
        "physiology": "Insulinmangel führt zu Ketonkörperbildung und Azidose",
        "findings": "hoher BZ, Kussmaul-Atmung, Dehydratation, Ketone",
        "cave": "auch bei geringer BZ-Erhöhung möglich",
        "info": "Insulinmangel führt zu Ketonkörperbildung und Azidose hoher BZ, Kussmaul-Atmung, Dehydratation, Ketone CAVE: auch bei geringer BZ-Erhöhung möglich"
      },
      {
        "name": "Hyperosmolares hyperglykämisches Syndrom",
        "physiology": "Ausgeprägte Hyperglykämie und Hyperosmolarität ohne ausgeprägte Ketose",
        "findings": "oft BZ >600 mg/dl (33,3 mmol/l), Exsikkose, Vigilanzminderung",
        "cave": "Thrombose-/Schockrisiko",
        "info": "Ausgeprägte Hyperglykämie und Hyperosmolarität ohne ausgeprägte Ketose oft BZ >600 mg/dl (33,3 mmol/l), Exsikkose, Vigilanzminderung CAVE: Thrombose-/Schockrisiko"
      },
      {
        "name": "Stresshyperglykämie",
        "physiology": "Katecholamin-/Kortisolanstieg bei akuter Erkrankung",
        "findings": "erhöhter BZ ohne zwingende DKA",
        "cave": "BZ allein unterscheidet Krisen nicht",
        "info": "Katecholamin-/Kortisolanstieg bei akuter Erkrankung erhöhter BZ ohne zwingende DKA CAVE: BZ allein unterscheidet Krisen nicht"
      }
    ]
  },
  {
    "id": "diag-muskelkraempfe-tetanie",
    "group": "Stoffwechsel",
    "icon": "🧪",
    "title": "Muskelkrämpfe / Tetanie",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Hypokalzämie",
        "physiology": "Niedriges ionisiertes Calcium erhöht neuromuskuläre Erregbarkeit",
        "findings": "Pfötchenstellung, Parästhesien, QT-Verlängerung",
        "cave": "Laryngospasmus/Arrhythmie",
        "info": "Niedriges ionisiertes Calcium erhöht neuromuskuläre Erregbarkeit Pfötchenstellung, Parästhesien, QT-Verlängerung CAVE: Laryngospasmus/Arrhythmie"
      },
      {
        "name": "Hyperventilation",
        "physiology": "Respiratorische Alkalose senkt ionisiertes Calcium vorübergehend",
        "findings": "periorales Kribbeln, Tetanie",
        "cave": "somatische Ursache der Tachypnoe ausschließen",
        "info": "Respiratorische Alkalose senkt ionisiertes Calcium vorübergehend periorales Kribbeln, Tetanie CAVE: somatische Ursache der Tachypnoe ausschließen"
      },
      {
        "name": "Elektrolytverlust",
        "physiology": "Verlust von Magnesium/Kalium etwa durch Diarrhö oder Diuretika",
        "findings": "Krämpfe, Schwäche",
        "cave": "Arrhythmiegefahr",
        "info": "Verlust von Magnesium/Kalium etwa durch Diarrhö oder Diuretika Krämpfe, Schwäche CAVE: Arrhythmiegefahr"
      }
    ]
  },
  {
    "id": "diag-fieber-schuettelfrost",
    "group": "Infektion",
    "icon": "🌡️",
    "title": "Fieber / Schüttelfrost",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Virusinfekt",
        "physiology": "Immunreaktion mit pyrogener Sollwerterhöhung",
        "findings": "Fieber, Abgeschlagenheit, respiratorische Beschwerden",
        "cave": "klinische Verschlechterung",
        "info": "Immunreaktion mit pyrogener Sollwerterhöhung Fieber, Abgeschlagenheit, respiratorische Beschwerden CAVE: klinische Verschlechterung"
      },
      {
        "name": "Pneumonie",
        "physiology": "Alveoläre Infektion",
        "findings": "Fieber, Husten, Tachypnoe, Hypoxämie",
        "cave": "Sepsis",
        "info": "Alveoläre Infektion Fieber, Husten, Tachypnoe, Hypoxämie CAVE: Sepsis"
      },
      {
        "name": "Pyelonephritis",
        "physiology": "Aufsteigende bakterielle Nierenbeckeninfektion",
        "findings": "Fieber, Flankenschmerz, Dysurie",
        "cave": "infizierter Harnstau",
        "info": "Aufsteigende bakterielle Nierenbeckeninfektion Fieber, Flankenschmerz, Dysurie CAVE: infizierter Harnstau"
      },
      {
        "name": "Sepsis",
        "physiology": "Lebensbedrohliche Organdysfunktion infolge fehlregulierter Infektionsantwort",
        "findings": "veränderte Vigilanz, Tachypnoe, Hypotonie möglich",
        "cave": "fehlendes Fieber schließt nicht aus",
        "info": "Lebensbedrohliche Organdysfunktion infolge fehlregulierter Infektionsantwort veränderte Vigilanz, Tachypnoe, Hypotonie möglich CAVE: fehlendes Fieber schließt nicht aus"
      },
      {
        "name": "Meningitis",
        "physiology": "Hirnhautentzündung",
        "findings": "Fieber, Kopfschmerz, Nackensteife möglich",
        "cave": "rascher Verlauf",
        "info": "Hirnhautentzündung Fieber, Kopfschmerz, Nackensteife möglich CAVE: rascher Verlauf"
      }
    ]
  },
  {
    "id": "diag-hautausschlag-purpura",
    "group": "Infektion",
    "icon": "🌡️",
    "title": "Hautausschlag / Purpura",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Urtikaria",
        "physiology": "Mastzellvermittelte oberflächliche Quaddelbildung",
        "findings": "juckende flüchtige Quaddeln",
        "cave": "Atemwegs- oder Kreislaufbeteiligung weist auf Anaphylaxie",
        "info": "Mastzellvermittelte oberflächliche Quaddelbildung juckende flüchtige Quaddeln CAVE: Atemwegs- oder Kreislaufbeteiligung weist auf Anaphylaxie"
      },
      {
        "name": "Arzneimittelexanthem",
        "physiology": "Immunreaktion auf Medikament",
        "findings": "makulopapulöse Hautveränderungen",
        "cave": "Schleimhautbeteiligung/Blasen als Warnzeichen",
        "info": "Immunreaktion auf Medikament makulopapulöse Hautveränderungen CAVE: Schleimhautbeteiligung/Blasen als Warnzeichen"
      },
      {
        "name": "Meningokokkensepsis",
        "physiology": "Invasive bakterielle Infektion mit Gerinnungsaktivierung",
        "findings": "Petechien/Purpura, Fieber, rascher Schock",
        "cave": "zeitkritisch",
        "info": "Invasive bakterielle Infektion mit Gerinnungsaktivierung Petechien/Purpura, Fieber, rascher Schock CAVE: zeitkritisch"
      },
      {
        "name": "Erysipel",
        "physiology": "Akute bakterielle Hautinfektion",
        "findings": "scharf begrenzte Rötung, Wärme, Fieber",
        "cave": "systemische Sepsiszeichen",
        "info": "Akute bakterielle Hautinfektion scharf begrenzte Rötung, Wärme, Fieber CAVE: systemische Sepsiszeichen"
      }
    ]
  },
  {
    "id": "diag-flankenschmerz",
    "group": "Urologie",
    "icon": "🫘",
    "title": "Flankenschmerz",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Ureterstein",
        "physiology": "Obstruktion mit Harnstau und Dehnung",
        "findings": "wellenförmiger Schmerz, Unruhe, ggf. Hämaturie",
        "cave": "infizierte Obstruktion",
        "info": "Obstruktion mit Harnstau und Dehnung wellenförmiger Schmerz, Unruhe, ggf. Hämaturie CAVE: infizierte Obstruktion"
      },
      {
        "name": "Pyelonephritis",
        "physiology": "Bakterielle Entzündung des Nierenbeckens",
        "findings": "Flankenschmerz, Fieber, Klopfschmerz",
        "cave": "Urosepsis",
        "info": "Bakterielle Entzündung des Nierenbeckens Flankenschmerz, Fieber, Klopfschmerz CAVE: Urosepsis"
      },
      {
        "name": "Niereninfarkt",
        "physiology": "Akuter Verschluss einer Nierenarterie",
        "findings": "plötzlicher Flankenschmerz, Hämaturie möglich",
        "cave": "bei Emboliequellen bedenken",
        "info": "Akuter Verschluss einer Nierenarterie plötzlicher Flankenschmerz, Hämaturie möglich CAVE: bei Emboliequellen bedenken"
      }
    ]
  },
  {
    "id": "diag-dysurie-harnverhalt",
    "group": "Urologie",
    "icon": "🫘",
    "title": "Dysurie / Harnverhalt",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Zystitis",
        "physiology": "Infektion der Harnblase",
        "findings": "Dysurie, Pollakisurie, suprapubischer Schmerz",
        "cave": "systemische Infektzeichen",
        "info": "Infektion der Harnblase Dysurie, Pollakisurie, suprapubischer Schmerz CAVE: systemische Infektzeichen"
      },
      {
        "name": "Akuter Harnverhalt",
        "physiology": "Gestörter Harnabfluss, häufig Prostataobstruktion oder Medikamente",
        "findings": "schmerzhafte volle Blase, fehlende Miktion",
        "cave": "Nierenstau",
        "info": "Gestörter Harnabfluss, häufig Prostataobstruktion oder Medikamente schmerzhafte volle Blase, fehlende Miktion CAVE: Nierenstau"
      },
      {
        "name": "Cauda-equina-Syndrom",
        "physiology": "Kompression lumbosakraler Nervenwurzeln",
        "findings": "Harnverhalt, Sattelanästhesie, Beinschwäche",
        "cave": "dringende neurochirurgische Abklärung",
        "info": "Kompression lumbosakraler Nervenwurzeln Harnverhalt, Sattelanästhesie, Beinschwäche CAVE: dringende neurochirurgische Abklärung"
      }
    ]
  },
  {
    "id": "diag-vaginale-blutung-unterbauchschmerz",
    "group": "Geburtshilfe",
    "icon": "🤰",
    "title": "Vaginale Blutung / Unterbauchschmerz",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Extrauteringravidität",
        "physiology": "Implantation außerhalb des Uterus",
        "findings": "einseitiger Unterbauchschmerz, vaginale Blutung, Synkope",
        "cave": "innere Blutung nach Ruptur",
        "info": "Implantation außerhalb des Uterus einseitiger Unterbauchschmerz, vaginale Blutung, Synkope CAVE: innere Blutung nach Ruptur"
      },
      {
        "name": "Abort / Fehlgeburt",
        "physiology": "Vorzeitiges Schwangerschaftsende",
        "findings": "Blutung, Unterbauchkrämpfe",
        "cave": "hoher Blutverlust",
        "info": "Vorzeitiges Schwangerschaftsende Blutung, Unterbauchkrämpfe CAVE: hoher Blutverlust"
      },
      {
        "name": "Vorzeitige Plazentalösung",
        "physiology": "Plazenta trennt sich vor Geburt",
        "findings": "Bauchschmerz, harter Uterus, teils vaginale Blutung",
        "cave": "Blutung kann verborgen sein",
        "info": "Plazenta trennt sich vor Geburt Bauchschmerz, harter Uterus, teils vaginale Blutung CAVE: Blutung kann verborgen sein"
      },
      {
        "name": "Ovarialtorsion",
        "physiology": "Verdrehung des Ovars beeinträchtigt Durchblutung",
        "findings": "abrupt einseitiger Unterbauchschmerz, Übelkeit",
        "cave": "Organverlust",
        "info": "Verdrehung des Ovars beeinträchtigt Durchblutung abrupt einseitiger Unterbauchschmerz, Übelkeit CAVE: Organverlust"
      }
    ]
  },
  {
    "id": "diag-schwangerschaft-kopfschmerz-oberbauchschmerz",
    "group": "Geburtshilfe",
    "icon": "🤰",
    "title": "Schwangerschaft: Kopfschmerz / Oberbauchschmerz",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Präeklampsie",
        "physiology": "Schwangerschaftsassoziierte Gefäß-/Plazentadysfunktion",
        "findings": "Hypertonie ab 140/90 mmHg nach 20. SSW, Kopfschmerz, Sehstörung",
        "cave": "Organschaden und Eklampsie",
        "info": "Schwangerschaftsassoziierte Gefäß-/Plazentadysfunktion Hypertonie ab 140/90 mmHg nach 20. SSW, Kopfschmerz, Sehstörung CAVE: Organschaden und Eklampsie"
      },
      {
        "name": "HELLP-Syndrom",
        "physiology": "Hämolyse, erhöhte Leberenzyme und Thrombozytopenie",
        "findings": "rechter Oberbauchschmerz, Übelkeit, Krankheitsgefühl",
        "cave": "auch ohne ausgeprägte Hypertonie",
        "info": "Hämolyse, erhöhte Leberenzyme und Thrombozytopenie rechter Oberbauchschmerz, Übelkeit, Krankheitsgefühl CAVE: auch ohne ausgeprägte Hypertonie"
      },
      {
        "name": "Eklampsie",
        "physiology": "Krampfanfall im Rahmen einer hypertensiven Schwangerschaftserkrankung",
        "findings": "tonisch-klonische Krämpfe",
        "cave": "auch postpartal",
        "info": "Krampfanfall im Rahmen einer hypertensiven Schwangerschaftserkrankung tonisch-klonische Krämpfe CAVE: auch postpartal"
      }
    ]
  },
  {
    "id": "diag-rueckenschmerz-neurologische-ausfaelle",
    "group": "Trauma",
    "icon": "🩹",
    "title": "Rückenschmerz / neurologische Ausfälle",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Bandscheibenbedingte Radikulopathie",
        "physiology": "Nervenwurzelreizung durch Bandscheibe",
        "findings": "dermatomale Schmerzen, Parästhesien",
        "cave": "progrediente Paresen",
        "info": "Nervenwurzelreizung durch Bandscheibe dermatomale Schmerzen, Parästhesien CAVE: progrediente Paresen"
      },
      {
        "name": "Cauda-equina-Syndrom",
        "physiology": "Druck auf sakrale Nervenwurzeln",
        "findings": "Blasen-/Mastdarmstörung, Sattelanästhesie",
        "cave": "zeitkritisch",
        "info": "Druck auf sakrale Nervenwurzeln Blasen-/Mastdarmstörung, Sattelanästhesie CAVE: zeitkritisch"
      },
      {
        "name": "Wirbelsäulenfraktur",
        "physiology": "Knochenverletzung nach Trauma/Osteoporose",
        "findings": "fokaler Schmerz, evtl. Neurologie",
        "cave": "Instabilität",
        "info": "Knochenverletzung nach Trauma/Osteoporose fokaler Schmerz, evtl. Neurologie CAVE: Instabilität"
      },
      {
        "name": "Aortensyndrom",
        "physiology": "Akute Aortenwandpathologie",
        "findings": "starker Rücken-/Brustschmerz",
        "cave": "Gefäß-/neurologische Komplikationen",
        "info": "Akute Aortenwandpathologie starker Rücken-/Brustschmerz CAVE: Gefäß-/neurologische Komplikationen"
      }
    ]
  },
  {
    "id": "diag-extremitaetenschmerz-schwellung",
    "group": "Trauma",
    "icon": "🩹",
    "title": "Extremitätenschmerz / Schwellung",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Fraktur",
        "physiology": "Unterbrechung der Knochenkontinuität",
        "findings": "Fehlstellung, Schwellung, Schmerz",
        "cave": "distal DMS prüfen",
        "info": "Unterbrechung der Knochenkontinuität Fehlstellung, Schwellung, Schmerz CAVE: distal DMS prüfen"
      },
      {
        "name": "Tiefe Venenthrombose",
        "physiology": "Thrombus im tiefen Venensystem",
        "findings": "einseitige Schwellung, Schmerz, Überwärmung",
        "cave": "Lungenembolie",
        "info": "Thrombus im tiefen Venensystem einseitige Schwellung, Schmerz, Überwärmung CAVE: Lungenembolie"
      },
      {
        "name": "Akuter arterieller Verschluss",
        "physiology": "Akute Ischämie der Extremität",
        "findings": "Schmerz, Blässe, Pulslosigkeit, Parästhesie, Parese, Kälte",
        "cave": "drohender Extremitätenverlust",
        "info": "Akute Ischämie der Extremität Schmerz, Blässe, Pulslosigkeit, Parästhesie, Parese, Kälte CAVE: drohender Extremitätenverlust"
      },
      {
        "name": "Kompartmentsyndrom",
        "physiology": "Erhöhter Druck in Muskelloge senkt Gewebeperfusion",
        "findings": "disproportionaler Schmerz, Schmerz bei passiver Dehnung",
        "cave": "Pulse können erhalten bleiben",
        "info": "Erhöhter Druck in Muskelloge senkt Gewebeperfusion disproportionaler Schmerz, Schmerz bei passiver Dehnung CAVE: Pulse können erhalten bleiben"
      }
    ]
  },
  {
    "id": "diag-agitation-angst-hyperventilation",
    "group": "Psychiatrie / Toxikologie",
    "icon": "💊",
    "title": "Agitation / Angst / Hyperventilation",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Panikattacke",
        "physiology": "Akute Angstreaktion mit vegetativer Aktivierung",
        "findings": "Herzrasen, Atemnot, Kribbeln",
        "cave": "Ausschluss gefährlicher somatischer Ursachen",
        "info": "Akute Angstreaktion mit vegetativer Aktivierung Herzrasen, Atemnot, Kribbeln CAVE: Ausschluss gefährlicher somatischer Ursachen"
      },
      {
        "name": "Hypoglykämie",
        "physiology": "Adrenerge Aktivierung durch Glukosemangel",
        "findings": "Unruhe, Schwitzen, Tremor",
        "cave": "BZ messen",
        "info": "Adrenerge Aktivierung durch Glukosemangel Unruhe, Schwitzen, Tremor CAVE: BZ messen"
      },
      {
        "name": "Stimulanzienintoxikation",
        "physiology": "Sympathomimetische Überaktivierung",
        "findings": "Mydriasis, Tachykardie, Hypertonie, Hyperthermie",
        "cave": "Arrhythmie/Hyperthermie",
        "info": "Sympathomimetische Überaktivierung Mydriasis, Tachykardie, Hypertonie, Hyperthermie CAVE: Arrhythmie/Hyperthermie"
      },
      {
        "name": "Delir",
        "physiology": "Akute fluktuierende Hirnfunktionsstörung",
        "findings": "Aufmerksamkeitsstörung, Desorientierung, Unruhe",
        "cave": "Infekt, Hypoxie, Entzug",
        "info": "Akute fluktuierende Hirnfunktionsstörung Aufmerksamkeitsstörung, Desorientierung, Unruhe CAVE: Infekt, Hypoxie, Entzug"
      }
    ]
  },
  {
    "id": "diag-somnolenz-verdacht-auf-intoxikation",
    "group": "Psychiatrie / Toxikologie",
    "icon": "💊",
    "title": "Somnolenz / Verdacht auf Intoxikation",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Opioidintoxikation",
        "physiology": "Opioidrezeptorwirkung unterdrückt Atemantrieb",
        "findings": "Miosis, Bradypnoe, Vigilanzminderung",
        "cave": "Atemdepression und Rezidiv nach Antagonisierung",
        "info": "Opioidrezeptorwirkung unterdrückt Atemantrieb Miosis, Bradypnoe, Vigilanzminderung CAVE: Atemdepression und Rezidiv nach Antagonisierung"
      },
      {
        "name": "Alkoholintoxikation",
        "physiology": "Ethanol wirkt ZNS-dämpfend",
        "findings": "Ataxie, Erbrechen, Somnolenz",
        "cave": "Trauma, Hypoglykämie und Mischintoxikation",
        "info": "Ethanol wirkt ZNS-dämpfend Ataxie, Erbrechen, Somnolenz CAVE: Trauma, Hypoglykämie und Mischintoxikation"
      },
      {
        "name": "Benzodiazepinintoxikation",
        "physiology": "GABA-vermittelte ZNS-Depression",
        "findings": "Müdigkeit, Ataxie, verwaschene Sprache",
        "cave": "Mischintoxikation/Atemwegsrisiko",
        "info": "GABA-vermittelte ZNS-Depression Müdigkeit, Ataxie, verwaschene Sprache CAVE: Mischintoxikation/Atemwegsrisiko"
      },
      {
        "name": "Kohlenmonoxidvergiftung",
        "physiology": "CO blockiert Hämoglobin und beeinträchtigt zelluläre Atmung",
        "findings": "Kopfschmerz, Übelkeit, Verwirrtheit",
        "cave": "gewöhnliche Pulsoxymetrie kann unauffällig sein",
        "info": "CO blockiert Hämoglobin und beeinträchtigt zelluläre Atmung Kopfschmerz, Übelkeit, Verwirrtheit CAVE: gewöhnliche Pulsoxymetrie kann unauffällig sein"
      }
    ]
  },
  {
    "id": "diag-atemnot-beim-kind",
    "group": "Pädiatrie",
    "icon": "🧸",
    "title": "Atemnot beim Kind",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Pseudokrupp",
        "physiology": "Virale subglottische Schwellung",
        "findings": "bellender Husten, Stridor, Heiserkeit",
        "cave": "Stridor in Ruhe",
        "info": "Virale subglottische Schwellung bellender Husten, Stridor, Heiserkeit CAVE: Stridor in Ruhe"
      },
      {
        "name": "Bronchiolitis",
        "physiology": "Virale Entzündung kleiner Atemwege vor allem im Säuglingsalter",
        "findings": "Tachypnoe, Einziehungen, Giemen, Trinkschwäche",
        "cave": "Apnoe bei jungen Säuglingen",
        "info": "Virale Entzündung kleiner Atemwege vor allem im Säuglingsalter Tachypnoe, Einziehungen, Giemen, Trinkschwäche CAVE: Apnoe bei jungen Säuglingen"
      },
      {
        "name": "Fremdkörperaspiration",
        "physiology": "Mechanische Bronchus- oder Kehlkopfverlegung",
        "findings": "plötzlicher Husten, einseitiges Giemen oder Stridor",
        "cave": "vollständige Verlegung",
        "info": "Mechanische Bronchus- oder Kehlkopfverlegung plötzlicher Husten, einseitiges Giemen oder Stridor CAVE: vollständige Verlegung"
      },
      {
        "name": "Asthma",
        "physiology": "Bronchospasmus und Schleimhautschwellung",
        "findings": "Giemen, verlängertes Exspirium",
        "cave": "Erschöpfung/stille Lunge",
        "info": "Bronchospasmus und Schleimhautschwellung Giemen, verlängertes Exspirium CAVE: Erschöpfung/stille Lunge"
      }
    ]
  },
  {
    "id": "diag-fieber-apathie-beim-kind",
    "group": "Pädiatrie",
    "icon": "🧸",
    "title": "Fieber / Apathie beim Kind",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Virale Infektion",
        "physiology": "Immunreaktion auf viralen Erreger",
        "findings": "Fieber, Husten, Rhinorrhö",
        "cave": "Trinkmangel",
        "info": "Immunreaktion auf viralen Erreger Fieber, Husten, Rhinorrhö CAVE: Trinkmangel"
      },
      {
        "name": "Meningitis / Sepsis",
        "physiology": "Invasive Infektion mit systemischer Organstörung",
        "findings": "Apathie, Rekapillarisierungsstörung, Fieber oder Hypothermie",
        "cave": "junge Säuglinge können unspezifisch sein",
        "info": "Invasive Infektion mit systemischer Organstörung Apathie, Rekapillarisierungsstörung, Fieber oder Hypothermie CAVE: junge Säuglinge können unspezifisch sein"
      },
      {
        "name": "Fieberkrampf",
        "physiology": "Anfall bei fieberhafter Erkrankung im typischen Kindesalter",
        "findings": "generalisierter Krampfanfall",
        "cave": "prolongierte oder fokale Anfälle",
        "info": "Anfall bei fieberhafter Erkrankung im typischen Kindesalter generalisierter Krampfanfall CAVE: prolongierte oder fokale Anfälle"
      },
      {
        "name": "Dehydratation",
        "physiology": "Flüssigkeitsdefizit nach Diarrhö/Erbrechen",
        "findings": "trockene Schleimhäute, reduzierte Diurese",
        "cave": "Kreislaufversagen",
        "info": "Flüssigkeitsdefizit nach Diarrhö/Erbrechen trockene Schleimhäute, reduzierte Diurese CAVE: Kreislaufversagen"
      }
    ]
  },
  {
    "id": "diag-hitze-kaelteexposition",
    "group": "Umwelt",
    "icon": "🌡️",
    "title": "Hitze / Kälteexposition",
    "questions": [
      "Beginn, Verlauf und Auslöser?",
      "Relevante Vorerkrankungen, Medikamente, Risikofaktoren?",
      "Begleitsymptome und Vitalparameter?"
    ],
    "redflags": [
      "ABCDE-Instabilität oder Bewusstseinsstörung",
      "Neu aufgetretene schwere oder rasch zunehmende Beschwerden"
    ],
    "causes": [
      {
        "name": "Hitzschlag",
        "physiology": "Thermoregulatorisches Versagen mit ZNS-Dysfunktion",
        "findings": "schwere Hyperthermie, Verwirrtheit, Kollaps",
        "cave": "sofortige Kühlung ist zeitkritisch",
        "info": "Thermoregulatorisches Versagen mit ZNS-Dysfunktion schwere Hyperthermie, Verwirrtheit, Kollaps CAVE: sofortige Kühlung ist zeitkritisch"
      },
      {
        "name": "Hitzeerschöpfung",
        "physiology": "Volumen-/Salzverlust bei Hitze",
        "findings": "Schwäche, Schwindel, Schwitzen",
        "cave": "ZNS-Störung weist auf Hitzschlag",
        "info": "Volumen-/Salzverlust bei Hitze Schwäche, Schwindel, Schwitzen CAVE: ZNS-Störung weist auf Hitzschlag"
      },
      {
        "name": "Hypothermie",
        "physiology": "Körperkerntemperatur unter 35 °C",
        "findings": "Zittern, später Bewusstseinseintrübung und Bradykardie",
        "cave": "schonend bewegen, Arrhythmiegefahr",
        "info": "Körperkerntemperatur unter 35 °C Zittern, später Bewusstseinseintrübung und Bradykardie CAVE: schonend bewegen, Arrhythmiegefahr"
      },
      {
        "name": "CO-Vergiftung",
        "physiology": "Exposition durch Abgase/Heizgeräte",
        "findings": "Kopfschmerz, Übelkeit, Synkope",
        "cave": "Eigenschutz und normale SpO₂ trotz Vergiftung",
        "info": "Exposition durch Abgase/Heizgeräte Kopfschmerz, Übelkeit, Synkope CAVE: Eigenschutz und normale SpO₂ trotz Vergiftung"
      }
    ]
  }
],
  "events": [
    {
      "id": "e1",
      "title": "Monatsübung – Reanimation",
      "date": "2026-10-03",
      "time": "18:30",
      "location": "Schulungsraum Andorf",
      "category": "Übung",
      "description": "Szenarientraining Reanimation und Teamkommunikation.",
      "capacity": 10,
      "attendees": []
    },
    {
      "id": "e2",
      "title": "Traumatraining",
      "date": "2026-10-17",
      "time": "18:30",
      "location": "Schulungsraum Andorf",
      "category": "Übung",
      "description": "ABCDE, Immobilisation und Transportentscheidung.",
      "capacity": 12,
      "attendees": []
    },
    {
      "id": "e3",
      "title": "Simulationstraining-Ausbilderabend",
      "date": "2026-11-07",
      "time": "18:00",
      "location": "Andorf",
      "category": "Simulationstraining",
      "description": "Geräteprofile, Fallsteuerung und Debriefing.",
      "capacity": 10,
      "attendees": []
    }
  ],
  "guide": [
    {
      "id": "quick",
      "icon": "🚀",
      "title": "Schnellstart",
      "steps": [
        "Simulationstraining im Trainings-WLAN öffnen",
        "Szenariotraining wählen",
        "Fall aus der Bibliothek starten",
        "Monitor und Geräte prüfen",
        "Training starten"
      ]
    },
    {
      "id": "scenario",
      "icon": "🎮",
      "title": "Szenario starten",
      "steps": [
        "Fallbibliothek öffnen",
        "Fall auswählen",
        "Fernbedienung öffnen",
        "Ausgangswerte prüfen",
        "Start drücken"
      ]
    },
    {
      "id": "monitor",
      "icon": "🖥️",
      "title": "Monitor verwenden",
      "steps": [
        "Monitorseite auf Zielgerät öffnen",
        "RS/NFS/Bilder-Modus auswählen",
        "Vitalparameter über Master steuern",
        "Rhythmus und Anzeige kontrollieren"
      ]
    },
    {
      "id": "devices",
      "icon": "📱",
      "title": "Geräte verbinden",
      "steps": [
        "Simulationsgeräte öffnen",
        "Gerät koppeln",
        "Rolle zuweisen",
        "Verbindungsstatus prüfen"
      ]
    },
    {
      "id": "ble",
      "icon": "🩺",
      "title": "BLE-Simulatoren",
      "steps": [
        "Gerät einschalten",
        "Verbindung im Bereich Simulationsgeräte prüfen",
        "Messwerte testen",
        "Bei Abbruch neu verbinden"
      ]
    },
    {
      "id": "debrief",
      "icon": "📊",
      "title": "Debriefing & Bewertung",
      "steps": [
        "Training beenden",
        "Timeline prüfen",
        "Bewertung ergänzen",
        "Debriefing durchführen",
        "PDF bei Bedarf exportieren"
      ]
    }
  ],
  "materials": [
    {
      "id": "m1",
      "icon": "📄",
      "title": "Bewertungsbögen",
      "category": "Ausbildung",
      "note": "Ablage für PDF- oder Druckvorlagen."
    },
    {
      "id": "m2",
      "icon": "🧾",
      "title": "Checklisten",
      "category": "Praxis",
      "note": "Kurze Merkblätter und SOP-nahe Checklisten."
    },
    {
      "id": "m3",
      "icon": "🖼️",
      "title": "Präsentationen & Handouts",
      "category": "Ausbildung",
      "note": "Materialien für Unterricht und Übungsabende."
    }
  ],
  "news": [
    {
      "id": "willkommen",
      "title": "Willkommen in der OST 1020 Wissenssammlung",
      "date": "2026-09-29",
      "text": "Das Dashboard bündelt Literatur, Skills, ABCDE und Differentialdiagnostik als mobile Ergänzung zu Simulationstraining.",
      "link": "",
      "active": true,
      "category": "Ausbildung",
      "priority": "normal"
    },
    {
      "id": "redaktion",
      "title": "Inhalte gemeinsam aktuell halten",
      "date": "2026-09-29",
      "text": "Redakteur:innen können News, Literatur und Lerninhalte direkt über die geschützte Redaktion pflegen.",
      "link": "editor.html",
      "active": true,
      "category": "Organisation",
      "priority": "normal"
    }
  ],
  "skills": [
    {
      "name": "Basiskenntnisse Rettungsdienst",
      "skills": [
        {
          "name": "Fahrzeugcheck",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Umgang mit Tragsessel",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Umgang mit Fahrtrage",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Lagerungen (Grundlagerungen / Patientenorientiert)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Einsatzprotokoll",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Patientenbeurteilung",
      "skills": [
        {
          "name": "ABCDE / SAMPLE",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Patientenbetreuung",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Übergabe",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Sanitätshilfe Anwendungen",
      "skills": [
        {
          "name": "Blutdruck / Puls / Atemfrequenz / AVPU / ZOPS",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "O₂ (Anwendung, Berechnen, Flaschenwechsel), SpO₂",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Absaugen, Technik, Geräte (AkkuVac, AMBU Twin, Magillz.)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Aufbereitung aller Geräte lt. MPG (Desinfektion, etc.)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Extremitätenschienung u. Ruhigstellung / MDS",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Rettungstechniken (Rettungstuch, Rautengriff, Umheben, etc.)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Sturzhelmabnahme durch 2 Helfer (inkl. MILS oder HWS)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Traumaversorgung (MILS, Schaufeltrage, Vakuummatr., HWS)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Patiententransfer (Bett/Rollstuhl - Trage/Tragsessel, Rollboard ...)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Bewusstloser Patient (Esmarch, Wendl, stab. Seitenlage, BZ)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Wiederbelebung Säugling (inkl. Defi)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        },
        {
          "name": "Wiederbelebung Kind (inkl. Defi)",
          "sections": [
            {
              "title": "Ablauf",
              "items": [
                "Unterpunkt 1 – noch definieren",
                "Unterpunkt 2 – noch definieren",
                "Unterpunkt 3 – noch definieren"
              ]
            },
            {
              "title": "Material",
              "items": [
                "Material gemäß lokalem Ausbildungsstandard vorbereiten."
              ]
            },
            {
              "title": "Praxis-Tipps",
              "items": [
                "Strukturiert arbeiten, Teamkommunikation beachten und Ergebnis kontrollieren."
              ]
            }
          ]
        }
      ]
    }
  ]
};
