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
          "physiology": "Chronisch entzündliche Atemwegserkrankung mit variabler, meist reversibler bronchialer Obstruktion und erhöhter bronchialer Reagibilität. Bronchospasmus, Schleimhautschwellung und Sekretion erschweren die Exspiration.",
          "findings": "Anfallsweise Dyspnoe, exspiratorisches Giemen, verlängertes Exspirium, erhöhte Atemarbeit und Tachypnoe. Oft bekannte Trigger oder Vorerkrankung.",
          "cave": "Eine „stille Lunge“, Erschöpfung, Verwirrtheit oder sinkende Atemfrequenz sind Warnzeichen eines lebensbedrohlichen Anfalls.",
          "info": "Reversible bronchiale Obstruktion durch Entzündung und Bronchospasmus exspiratorisches Giemen, verlängertes Exspirium, erhöhte Atemfrequenz CAVE: stille Lunge, Erschöpfung und Bewusstseinsstörung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Asthma%20bronchiale%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "COPD-Exazerbation",
          "physiology": "Akute Verschlechterung einer chronischen, überwiegend nicht vollständig reversiblen Atemwegsobstruktion – häufig infektiös getriggert. Die CO₂-Elimination kann deutlich eingeschränkt sein.",
          "findings": "Mehr Dyspnoe, Husten und/oder Sputum, verlängertes Exspirium, Giemen, reduzierte Belastbarkeit. Hyperkapnie und Azidose können sich in Somnolenz oder Flapping tremor äußern.",
          "cave": "Normale oder mäßig erniedrigte SpO₂ schließt Hyperkapnie nicht aus. Mentale Veränderungen und Atemerschöpfung sind kritisch.",
          "info": "Akute Verschlechterung chronischer Atemwegsobstruktion Giemen, vermehrtes Sputum, Hyperkapnie möglich CAVE: Normale SpO₂ schließt Hyperkapnie nicht aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=COPD-Exazerbation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kardiales Lungenödem",
          "physiology": "Erhöhter hydrostatischer Druck im Lungenkreislauf führt zu Flüssigkeitsaustritt in Interstitium und Alveolen. Die Compliance sinkt, der Gasaustausch verschlechtert sich rasch.",
          "findings": "Orthopnoe, Tachypnoe, feuchte Rasselgeräusche, Hypoxämie und ggf. schaumiger Auswurf. Häufig bestehen Hypertonie, Thoraxschmerz oder bekannte Herzinsuffizienz.",
          "cave": "Kann innerhalb kurzer Zeit in respiratorisches Versagen übergehen. ACS oder schwere Rhythmusstörung als Auslöser bedenken.",
          "info": "Erhöhter pulmonaler Kapillardruck führt zu Flüssigkeit in Alveolen Rasselgeräusche, Orthopnoe, Hypoxämie, oft Hypertonie CAVE: rasches respiratorisches Versagen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kardiales%20Lungen%C3%B6dem%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Lungenembolie",
          "physiology": "Verschluss einer Lungenarterie durch thromboembolisches Material mit Perfusionsstörung und möglicher akuter Rechtsherzbelastung. Die Ventilation kann erhalten sein, der Gasaustausch aber deutlich gestört sein.",
          "findings": "Akute Dyspnoe, Tachypnoe, Tachykardie, pleuritischer Thoraxschmerz, manchmal Synkope oder Hämoptyse. Die SpO₂ kann trotz relevanter Embolie anfangs normal sein.",
          "cave": "Hypotonie, Synkope und Zeichen des Schocks sprechen für eine Hochrisiko-Embolie. Immobilisation, OP, Tumor oder TVT-Anamnese gezielt erfragen.",
          "info": "Thrombotischer Verschluss einer Pulmonalarterie mit gestörtem Gasaustausch Tachypnoe, Tachykardie, pleuritischer Schmerz, eventuell Hypoxämie CAVE: normale SpO₂ schließt LAE nicht aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Lungenembolie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumonie",
          "physiology": "Infektiöse Entzündung des Lungenparenchyms mit alveolärer Füllung und eingeschränktem Gasaustausch. Dadurch steigen Atemarbeit und Sauerstoffbedarf.",
          "findings": "Häufig Fieber, Husten, Tachypnoe, fokale Auskultationsbefunde und reduzierte Belastbarkeit. Bei schwerem Verlauf Hypoxämie, Verwirrtheit oder Sepsiszeichen.",
          "cave": "Ältere oder immunsupprimierte Patient:innen können atypisch präsentieren. Sepsis und respiratorische Erschöpfung früh erkennen.",
          "info": "Infektiöse Entzündung des Lungenparenchyms Fieber, Husten, fokale Rasselgeräusche, Tachypnoe CAVE: ältere Menschen teils ohne Fieber.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumothorax",
          "physiology": "Luft im Pleuraspalt hebt den negativen intrapleuralen Druck auf und verursacht einen partiellen oder kompletten Lungenkollaps. Bei Spannungskomponente sinkt der venöse Rückstrom zusätzlich.",
          "findings": "Plötzlicher einseitiger Thoraxschmerz, Dyspnoe, abgeschwächtes Atemgeräusch, oft Tachykardie. Bei größerem Pneumothorax auch Hypoxämie.",
          "cave": "Bei zunehmender Atemnot, Schock oder einseitig fehlendem Atemgeräusch Spannungspneumothorax klinisch sofort mitdenken.",
          "info": "Luft im Pleuraspalt führt zum Lungenkollaps plötzliche einseitige Schmerzen, abgeschwächtes Atemgeräusch CAVE: Schockzeichen bei Spannungspneumothorax.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumothorax%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Koronarsyndrom",
          "physiology": "Akute Myokardischämie durch Plaqueruptur und thrombotische Koronarobstruktion. Dadurch sinken myokardiale Sauerstoffversorgung und Pumpfunktion, was arrhythmische und hämodynamische Folgen haben kann.",
          "findings": "Typisch sind retrosternaler Druck oder Enge, Ausstrahlung, Dyspnoe, Übelkeit und Kaltschweißigkeit. Ein 12-Kanal-EKG kann ST-Veränderungen zeigen, initial aber auch unauffällig sein.",
          "cave": "Atypische oder schmerzfreie Verläufe kommen vor. Bei Dyspnoe, Oberbauchbeschwerden oder Schwäche ACS mitdenken.",
          "info": "Myokardischämie durch Koronarverschluss/-verengung Dyspnoe, Brustdruck, Kaltschweißigkeit, EKG-Veränderungen möglich CAVE: auch ohne Thoraxschmerz.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Koronarsyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Anaphylaxie",
          "physiology": "Akute systemische Mediatorfreisetzung – meist IgE-vermittelt – mit Vasodilatation, Kapillarleck, Bronchospasmus und Schleimhautödem. Atemweg und Kreislauf können innerhalb von Minuten bedroht sein.",
          "findings": "Plötzlicher Beginn nach möglichem Trigger mit Urtikaria, Flush, Schleimhautschwellung, Giemen, Stridor, Erbrechen oder Blutdruckabfall. Hautzeichen sind häufig, aber nicht obligat.",
          "cave": "Schwere Verläufe sind auch ohne Exanthem möglich. Progrediente Atemnot, Heiserkeit, Zungenschwellung oder Hypotonie sind Notfallzeichen.",
          "info": "Systemische allergische Reaktion mit Bronchospasmus und Gefäßweitstellung Dyspnoe, Schwellung, Hypotonie, ggf. Urtikaria CAVE: rascher Kreislaufkollaps.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Anaphylaxie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Asthma / COPD-Exazerbation",
          "physiology": "Akute Verschlechterung einer chronischen, überwiegend nicht vollständig reversiblen Atemwegsobstruktion – häufig infektiös getriggert. Die CO₂-Elimination kann deutlich eingeschränkt sein.",
          "findings": "Mehr Dyspnoe, Husten und/oder Sputum, verlängertes Exspirium, Giemen, reduzierte Belastbarkeit. Hyperkapnie und Azidose können sich in Somnolenz oder Flapping tremor äußern.",
          "cave": "Normale oder mäßig erniedrigte SpO₂ schließt Hyperkapnie nicht aus. Mentale Veränderungen und Atemerschöpfung sind kritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Asthma%20/%20COPD%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
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
          "physiology": "Akute Myokardischämie durch Plaqueruptur und thrombotische Koronarobstruktion. Dadurch sinken myokardiale Sauerstoffversorgung und Pumpfunktion, was arrhythmische und hämodynamische Folgen haben kann.",
          "findings": "Typisch sind retrosternaler Druck oder Enge, Ausstrahlung, Dyspnoe, Übelkeit und Kaltschweißigkeit. Ein 12-Kanal-EKG kann ST-Veränderungen zeigen, initial aber auch unauffällig sein.",
          "cave": "Atypische oder schmerzfreie Verläufe kommen vor. Bei Dyspnoe, Oberbauchbeschwerden oder Schwäche ACS mitdenken.",
          "info": "Myokardischämie meist durch Plaqueruptur und Thrombus Druck/Enge, Ausstrahlung, Übelkeit, EKG kann initial unauffällig sein CAVE: 12-Kanal-EKG und serieller Verlauf, atypische Symptome.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Koronarsyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Aortensyndrom",
          "physiology": "Einriss der Aortenintima oder intramurales Hämatom mit Gefahr der Organmalperfusion und Ruptur. Je nach Ausdehnung können Herz, Gehirn oder Extremitäten mitbetroffen sein.",
          "findings": "Typisch sind plötzlich stärkste thorakale oder dorsale Schmerzen, eventuell Puls- oder Blutdruckdifferenzen, Synkope oder neurologische Ausfälle.",
          "cave": "Schmerzqualität alleine ist unzuverlässig. Hypotonie, neue Neurologie oder Zeichen der Minderperfusion sind hochgefährlich.",
          "info": "Einriss der Aortenintima oder intramurales Hämatom plötzlich starker thorakaler/Rückenschmerz, Puls-/RR-Differenzen möglich CAVE: Schock und Organischämie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Aortensyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Lungenembolie",
          "physiology": "Verschluss einer Lungenarterie durch thromboembolisches Material mit Perfusionsstörung und möglicher akuter Rechtsherzbelastung. Die Ventilation kann erhalten sein, der Gasaustausch aber deutlich gestört sein.",
          "findings": "Akute Dyspnoe, Tachypnoe, Tachykardie, pleuritischer Thoraxschmerz, manchmal Synkope oder Hämoptyse. Die SpO₂ kann trotz relevanter Embolie anfangs normal sein.",
          "cave": "Hypotonie, Synkope und Zeichen des Schocks sprechen für eine Hochrisiko-Embolie. Immobilisation, OP, Tumor oder TVT-Anamnese gezielt erfragen.",
          "info": "Pulmonalarterieller Gefäßverschluss atemabhängiger Schmerz, Tachykardie, Dyspnoe CAVE: Synkope und Hypotonie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Lungenembolie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumothorax",
          "physiology": "Luft im Pleuraspalt hebt den negativen intrapleuralen Druck auf und verursacht einen partiellen oder kompletten Lungenkollaps. Bei Spannungskomponente sinkt der venöse Rückstrom zusätzlich.",
          "findings": "Plötzlicher einseitiger Thoraxschmerz, Dyspnoe, abgeschwächtes Atemgeräusch, oft Tachykardie. Bei größerem Pneumothorax auch Hypoxämie.",
          "cave": "Bei zunehmender Atemnot, Schock oder einseitig fehlendem Atemgeräusch Spannungspneumothorax klinisch sofort mitdenken.",
          "info": "Luft im Pleuraspalt abrupt einsetzender einseitiger pleuritischer Schmerz und Dyspnoe CAVE: Spannungskomponente.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumothorax%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Perikarditis",
          "physiology": "Entzündung des Herzbeutels mit Reizung der perikardialen Schmerzfasern. Bei Ergussentwicklung kann die diastolische Füllung des Herzens beeinträchtigt sein.",
          "findings": "Häufig lage- und atemabhängiger Thoraxschmerz, Besserung im Sitzen, ggf. Fieber oder diffuse EKG-Veränderungen.",
          "cave": "Bei Hypotonie, Halsvenenstauung oder deutlicher Dyspnoe an Perikardtamponade denken.",
          "info": "Entzündung des Herzbeutels lage- und atemabhängiger Schmerz, Besserung im Sitzen, ggf. diffuse ST-Hebungen CAVE: Tamponadezeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Perikarditis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Muskuloskelettaler Thoraxschmerz",
          "physiology": "Muskuloskelettaler Thoraxschmerz: Entscheidend ist die Auswirkung auf Herzzeitvolumen, Blutdruck und Organperfusion.",
          "findings": "oft bewegungs-/druckabhängig. Vitalparameter, Hautperfusion, EKG und Begleitsymptome zusammen bewerten.",
          "cave": "Druckschmerz schließt ACS nicht sicher aus. Hypotonie, Synkope oder akute Instabilität bedeuten präklinisch hohe Dringlichkeit.",
          "info": "Reizung von Muskeln, Rippen oder Gelenken oft bewegungs-/druckabhängig CAVE: Druckschmerz schließt ACS nicht sicher aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Muskuloskelettaler%20Thoraxschmerz%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ösophagealer Reflux",
          "physiology": "Ösophagealer Reflux: Entscheidend ist die Auswirkung auf Herzzeitvolumen, Blutdruck und Organperfusion.",
          "findings": "brennender retrosternaler Schmerz, nach Essen/Liegen. Vitalparameter, Hautperfusion, EKG und Begleitsymptome zusammen bewerten.",
          "cave": "ACS nicht allein anhand Sodbrennen ausschließen. Hypotonie, Synkope oder akute Instabilität bedeuten präklinisch hohe Dringlichkeit.",
          "info": "Rückfluss von Magensäure in die Speiseröhre brennender retrosternaler Schmerz, nach Essen/Liegen CAVE: ACS nicht allein anhand Sodbrennen ausschließen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=%C3%96sophagealer%20Reflux%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Koronarsyndrom",
          "physiology": "Akute Myokardischämie durch Plaqueruptur und thrombotische Koronarobstruktion. Dadurch sinken myokardiale Sauerstoffversorgung und Pumpfunktion, was arrhythmische und hämodynamische Folgen haben kann.",
          "findings": "Typisch sind retrosternaler Druck oder Enge, Ausstrahlung, Dyspnoe, Übelkeit und Kaltschweißigkeit. Ein 12-Kanal-EKG kann ST-Veränderungen zeigen, initial aber auch unauffällig sein.",
          "cave": "Atypische oder schmerzfreie Verläufe kommen vor. Bei Dyspnoe, Oberbauchbeschwerden oder Schwäche ACS mitdenken.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=ACS%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
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
          "physiology": "Zu niedrige Glukoseverfügbarkeit im Gehirn verursacht zunächst adrenerge und später neuroglykopenische Symptome. Bei fortschreitender Entgleisung sind Krampf und Koma möglich.",
          "findings": "Schwitzen, Tremor, Hunger, Tachykardie, Verwirrtheit, fokale Ausfälle, Krampf oder Bewusstlosigkeit. Klinisch relevant häufig bei BZ <70 mg/dl (3,9 mmol/l).",
          "cave": "Kann einen Schlaganfall imitieren. Nach initialer Korrektur sind Rebound-Verläufe unter lang wirksamen Antidiabetika möglich.",
          "info": "Glukosemangel im Gehirn BZ typischerweise unter 70 mg/dl (3,9 mmol/l), neuroglykopenische Zeichen CAVE: sofort BZ messen, Schwellen individuell.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Intoxikation",
          "physiology": "Substanzen können ZNS, Atmung, Kreislauf und Stoffwechsel direkt beeinflussen; Mischintoxikationen sind häufig.",
          "findings": "Bewusstseinsstörung, Pupillenauffälligkeiten, Atemdepression oder Agitation, je nach Toxidrom sehr unterschiedliche Vitalparameter.",
          "cave": "Hypoglykämie, Trauma und Hypoxie können zusätzlich oder alternativ vorliegen.",
          "info": "Stoffwirkung auf ZNS oder Atmung Pupillen-/Atemauffälligkeiten, unterschiedliche Vitalwerte CAVE: Mischintoxikation und Hypoglykämie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Intoxikation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Schlaganfall",
          "physiology": "Akute fokale zerebrale Funktionsstörung durch ischämischen Gefäßverschluss oder intrakranielle Blutung. Das betroffene Hirnareal bestimmt die Symptomatik.",
          "findings": "Plötzliche Sprachstörung, Fazialisparese, Arm-/Beinschwäche, Sehstörung, Sensibilitätsstörung oder Ataxie. BZ und Zeitpunkt „last known well“ sind zentral.",
          "cave": "Auch fluktuierende oder rasch regrediente Symptome sind zeitkritisch. Große Gefäßverschlüsse können mit schwerer Dysarthrie oder Blickdeviation imponieren.",
          "info": "Zerebrale Minderperfusion oder Blutung fokale Defizite, Vigilanzstörung bei großer Läsion CAVE: Zeitpunkt zuletzt gesund erheben.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Schlaganfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Postiktaler Zustand",
          "physiology": "Vorübergehende neuronale Erschöpfung nach einem epileptischen Anfall mit globalen oder fokalen Ausfallerscheinungen.",
          "findings": "Somnolenz, Verwirrtheit, Muskelkater, ggf. temporäre Lähmungen oder Sprachstörung.",
          "cave": "Lange anhaltende Bewusstseinsstörung oder neue Defizite sprechen gegen einen reinen postiktalen Zustand.",
          "info": "Vorübergehende neuronale Erschöpfung nach epileptischem Anfall Somnolenz, Verwirrtheit, ggf. Todd-Parese CAVE: persistierende Ausfälle auch auf Schlaganfall prüfen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Postiktaler%20Zustand%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Sepsis",
          "physiology": "Lebensbedrohliche Organdysfunktion durch dysregulierte Wirtsreaktion auf eine Infektion. Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "Mögliche Zeichen: veränderte Vigilanz, Tachypnoe, Tachykardie, Hypotonie, Fieber oder Hypothermie, verminderte Urinmenge.",
          "cave": "Fieber ist nicht obligat. Normale Blutdruckwerte schließen frühe Organdysfunktion nicht aus.",
          "info": "Infektionsbedingte systemische Dysregulation mit Organversagen Verwirrtheit, Tachypnoe, mögliche Hypotonie CAVE: Fieber kann fehlen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Sepsis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hyperkapnie / Hypoxie",
          "physiology": "Unzureichende Oxygenierung oder CO₂-Elimination führt zu zerebraler und kardiorespiratorischer Dysfunktion.",
          "findings": "Dyspnoe, Tachypnoe oder Bradypnoe, Zyanose, Somnolenz, Kopfschmerz; SpO₂ erfasst keine CO₂-Retention.",
          "cave": "Besonders bei COPD, neuromuskulären Ursachen oder Sedativa an Hyperkapnie denken.",
          "info": "Störung der Oxygenierung oder CO₂-Elimination pathologische SpO₂/AF, ggf. Somnolenz CAVE: SpO₂ allein misst kein CO₂.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hyperkapnie%20/%20Hypoxie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Krampfanfall",
          "physiology": "Krampfanfall: Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "Leitsymptom, Vitalparameter, Begleitbeschwerden und situationsbezogene Diagnostik gemeinsam beurteilen; kein einzelner Wert beweist die Diagnose.",
          "cave": "Instabile Vitalparameter oder rasche Verschlechterung erfordern prioritäre ABCDE-Beurteilung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Krampfanfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Trauma",
          "physiology": "Trauma: Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "Leitsymptom, Vitalparameter, Begleitbeschwerden und situationsbezogene Diagnostik gemeinsam beurteilen; kein einzelner Wert beweist die Diagnose.",
          "cave": "Instabile Vitalparameter oder rasche Verschlechterung erfordern prioritäre ABCDE-Beurteilung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Trauma%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
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
          "physiology": "Reflexbedingte Vasodilatation und/oder Bradykardie führen vorübergehend zu verminderter zerebraler Perfusion.",
          "findings": "Häufig Prodromi wie Übelkeit, Wärmegefühl, Schwitzen oder Schwarzwerden vor Augen mit rascher Erholung nach Hinlegen.",
          "cave": "Sturzfolgen beachten. Bei fehlenden Prodromi oder belastungsabhängigen Ereignissen an gefährlichere Ursachen denken.",
          "info": "Reflexbedingte Bradykardie und Vasodilatation Prodromi mit Schwitzen, Übelkeit, rasche Erholung CAVE: Sturzfolgen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Vasovagale%20Synkope%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Orthostatische Hypotonie",
          "physiology": "Unzureichende Kreislaufanpassung beim Aufstehen führt zu Blutdruckabfall und zerebraler Minderperfusion. Häufig spielen Volumenmangel oder Medikamente mit.",
          "findings": "Schwindel, Benommenheit oder Synkope kurz nach Lagewechsel; niedriger RR, oft kompensatorische Tachykardie.",
          "cave": "Blutverlust, Dehydratation oder autonome Dysfunktion mitdenken.",
          "info": "Unzureichende Blutdruckregulation beim Aufstehen Schwindel nach Lagewechsel, niedriger RR CAVE: Dehydratation oder Blutverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Orthostatische%20Hypotonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Arrhythmogene Synkope",
          "physiology": "Vorübergehendes Absinken des Herzzeitvolumens durch schnelle oder langsame Rhythmusstörung.",
          "findings": "Plötzlicher Bewusstseinsverlust, oft ohne längere Prodromi; Palpitationen, Thoraxschmerz oder pathologisches EKG können hinweisend sein.",
          "cave": "Belastungssynkope, bekannte Herzerkrankung oder Familienanamnese plötzlicher Herztod erhöhen das Risiko deutlich.",
          "info": "Vorübergehend zu geringes Herzzeitvolumen durch Rhythmusstörung plötzlich ohne Vorzeichen, Palpitationen, pathologisches EKG möglich CAVE: hohe Gefährdung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Arrhythmogene%20Synkope%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Lungenembolie",
          "physiology": "Verschluss einer Lungenarterie durch thromboembolisches Material mit Perfusionsstörung und möglicher akuter Rechtsherzbelastung. Die Ventilation kann erhalten sein, der Gasaustausch aber deutlich gestört sein.",
          "findings": "Akute Dyspnoe, Tachypnoe, Tachykardie, pleuritischer Thoraxschmerz, manchmal Synkope oder Hämoptyse. Die SpO₂ kann trotz relevanter Embolie anfangs normal sein.",
          "cave": "Hypotonie, Synkope und Zeichen des Schocks sprechen für eine Hochrisiko-Embolie. Immobilisation, OP, Tumor oder TVT-Anamnese gezielt erfragen.",
          "info": "Große Embolie beeinträchtigt rechten Ventrikel und Kreislauf Dyspnoe, Tachykardie, Synkope CAVE: hypotensiver Schock.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Lungenembolie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akuter Blutverlust",
          "physiology": "Akuter Blutverlust: Entscheidend ist die Auswirkung auf Herzzeitvolumen, Blutdruck und Organperfusion.",
          "findings": "Tachykardie, Blässe, Schweiß. Vitalparameter, Hautperfusion, EKG und Begleitsymptome zusammen bewerten.",
          "cave": "okkulte Blutung. Hypotonie, Synkope oder akute Instabilität bedeuten präklinisch hohe Dringlichkeit.",
          "info": "Hypovolämie senkt zerebrale Perfusion Tachykardie, Blässe, Schweiß CAVE: okkulte Blutung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akuter%20Blutverlust%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Arrhythmogene Synkope",
          "physiology": "Vorübergehendes Absinken des Herzzeitvolumens durch schnelle oder langsame Rhythmusstörung.",
          "findings": "Plötzlicher Bewusstseinsverlust, oft ohne längere Prodromi; Palpitationen, Thoraxschmerz oder pathologisches EKG können hinweisend sein.",
          "cave": "Belastungssynkope, bekannte Herzerkrankung oder Familienanamnese plötzlicher Herztod erhöhen das Risiko deutlich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kardial%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Hypovolämischer Schock",
          "physiology": "Verlust von intravasalem Volumen durch Blutung oder Flüssigkeitsdefizit vermindert Vorlast, Schlagvolumen und Organperfusion.",
          "findings": "Tachykardie, Blässe, kalte Haut, verlängerte Rekapillarisierung, Hypotonie und reduzierte Urinproduktion sind typisch.",
          "cave": "Normotonie schließt den kompensierten Schock nicht aus. Blutungsquellen aktiv suchen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypovol%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Metabolische Ursache",
          "physiology": "Zu niedrige Glukoseverfügbarkeit im Gehirn verursacht zunächst adrenerge und später neuroglykopenische Symptome. Bei fortschreitender Entgleisung sind Krampf und Koma möglich.",
          "findings": "Schwitzen, Tremor, Hunger, Tachykardie, Verwirrtheit, fokale Ausfälle, Krampf oder Bewusstlosigkeit. Klinisch relevant häufig bei BZ <70 mg/dl (3,9 mmol/l).",
          "cave": "Kann einen Schlaganfall imitieren. Nach initialer Korrektur sind Rebound-Verläufe unter lang wirksamen Antidiabetika möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Metabolisch%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
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
          "physiology": "Entzündung von Magen und Darm mit Sekretionsstörung und Flüssigkeitsverlust. Hauptproblem präklinisch ist häufig die Dehydratation.",
          "findings": "Übelkeit, Erbrechen, Diarrhö, diffuse Bauchkrämpfe und abgeschlagener Allgemeinzustand. Trockene Schleimhäute und Tachykardie sprechen für Volumenmangel.",
          "cave": "Bei hohem Fieber, Blut im Stuhl, starken Schmerzen oder Schock an alternative schwere Ursachen denken.",
          "info": "Infektiöse Entzündung von Magen und Darm diffuse Krämpfe, Erbrechen, Diarrhö CAVE: Dehydratation und atypische schwere Ursache.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Gastroenteritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Appendizitis",
          "physiology": "Entzündung des Wurmfortsatzes, häufig nach luminaler Obstruktion. Fortschreitende Entzündung kann zu Perforation und Peritonitis führen.",
          "findings": "Typisch beginnend diffus/periumbilikal, später lokalisierter Schmerz im rechten Unterbauch, Appetitverlust, Übelkeit und ggf. Fieber.",
          "cave": "Atypische Verläufe bei Kindern, Älteren und Schwangeren; Peritonismus oder Sepsiszeichen sind Warnsignale.",
          "info": "Entzündung der Appendix periumbilikaler Schmerz mit Wanderung nach rechts unten, Fieber möglich CAVE: atypische Lokalisation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Appendizitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Cholezystitis / Gallenkolik",
          "physiology": "Steinbedingte Abflussstörung der Gallenblase verursacht kolikartige Schmerzen; bei längerer Obstruktion kann eine Entzündung folgen.",
          "findings": "Rechter Oberbauchschmerz, Ausstrahlung in Schulter/Rücken, Übelkeit; bei Cholezystitis zusätzlich Fieber und lokaler Druckschmerz.",
          "cave": "Fieber, Ikterus oder Sepsiszeichen lassen an Cholangitis denken.",
          "info": "Gallensteinbedingte Obstruktion und ggf. Entzündung rechter Oberbauch, Übelkeit, Murphy-Zeichen CAVE: Cholangitis bei Fieber/Ikterus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Cholezystitis%20/%20Gallenkolik%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pankreatitis",
          "physiology": "Aktivierte Pankreasenzyme führen zu autodigestiver Entzündung, teils mit ausgeprägter systemischer Inflammation und Volumenverschiebung.",
          "findings": "Starker epigastrischer Schmerz mit Ausstrahlung in den Rücken, Übelkeit, Erbrechen, geblähter Bauch, Tachykardie.",
          "cave": "Schwere Verläufe können früh hämodynamisch instabil werden; Alkohol- oder Gallensteinanamnese erfragen.",
          "info": "Entzündung des Pankreas durch Enzymaktivierung gürtelförmiger Oberbauchschmerz, Erbrechen CAVE: Organversagen bei schwerem Verlauf.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pankreatitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Nierenkolik",
          "physiology": "Meist steinbedingte Harnleiterobstruktion führt zu akutem Druckanstieg im Harntrakt und spastischen Schmerzen.",
          "findings": "Wellenförmiger Flanken- oder Unterbauchschmerz, Ausstrahlung in Leiste/Genitale, Unruhe, Übelkeit, ggf. Hämaturie.",
          "cave": "Fieber oder Schüttelfrost bei Harnstau sprechen für einen urologischen Notfall.",
          "info": "Harnleiterobstruktion meist durch Stein kolikartiger Flankenschmerz, Ausstrahlung Leiste, Hämaturie CAVE: Fieber + Harnstau ist urologischer Notfall.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Nierenkolik%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ileus",
          "physiology": "Mechanische oder funktionelle Darmpassagestörung. Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "kolikartige Schmerzen, Erbrechen, Distension, fehlender Wind. Schmerzanamnese, Übelkeit/Erbrechen, Bauchbefund und Kreislaufstatus zusammen interpretieren.",
          "cave": "Strangulation/Perforation. Peritonismus, Schock oder „pain out of proportion“ sind Warnsignale.",
          "info": "Mechanische oder funktionelle Darmpassagestörung kolikartige Schmerzen, Erbrechen, Distension, fehlender Wind CAVE: Strangulation/Perforation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ileus%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Mesenterialischämie",
          "physiology": "Akute Minderdurchblutung des Darms durch Embolie, Thrombose oder Minderperfusion. Früh ist der Bauchbefund oft diskret trotz starker Ischämie.",
          "findings": "Plötzlich starke Bauchschmerzen, häufig „pain out of proportion“, Übelkeit, Erbrechen, später ggf. blutiger Stuhl und Schock.",
          "cave": "Hochzeitkritisch wegen Nekrose- und Perforationsgefahr; Gefäßrisiken und Vorhofflimmern beachten.",
          "info": "Akute Minderdurchblutung des Darms starker Schmerz oft bei zunächst wenig Befund CAVE: rasche Nekrose.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Mesenterialisch%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Rupturiertes Aortenaneurysma",
          "physiology": "Ruptur eines Aneurysmas – meist der Bauchaorta – mit innerer Blutung und rasch zunehmender Kreislaufdekompensation.",
          "findings": "Plötzlicher Bauch-, Flanken- oder Rückenschmerz, Synkope, Hypotonie, Blässe; manchmal tastbare pulsierende Resistenz.",
          "cave": "Häufig initial noch kurz kompensiert. Ältere Patient:innen mit Schock und Bauch-/Rückenschmerz besonders verdächtig.",
          "info": "Gefäßwandruptur mit innerer Blutung Abdomen-/Rückenschmerz, Synkope, Hypotonie CAVE: Schockgefahr.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Rupturiertes%20Aortenaneurysma%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Extrauteringravidität",
          "physiology": "Einnistung einer Schwangerschaft außerhalb des Uterus, meist tubar. Mit Wachstum drohen Blutung und Ruptur.",
          "findings": "Unterbauchschmerz, vaginale Blutung, Schwindel oder Synkope; Schwangerschaftstest bzw. Schwangerschaftsanamnese ist essenziell.",
          "cave": "Bis zum Beweis des Gegenteils bei gebärfähigen Patientinnen mit Unterbauchschmerz mitdenken – innere Blutung möglich.",
          "info": "Schwangerschaft außerhalb des Uterus Unterbauchschmerz, vaginale Blutung, Synkope CAVE: bei gebärfähigen Patientinnen Schwangerschaft erfragen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Extrauteringravidit%C3%A4t%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Koronarsyndrom",
          "physiology": "Akute Myokardischämie durch Plaqueruptur und thrombotische Koronarobstruktion. Dadurch sinken myokardiale Sauerstoffversorgung und Pumpfunktion, was arrhythmische und hämodynamische Folgen haben kann.",
          "findings": "Typisch sind retrosternaler Druck oder Enge, Ausstrahlung, Dyspnoe, Übelkeit und Kaltschweißigkeit. Ein 12-Kanal-EKG kann ST-Veränderungen zeigen, initial aber auch unauffällig sein.",
          "cave": "Atypische oder schmerzfreie Verläufe kommen vor. Bei Dyspnoe, Oberbauchbeschwerden oder Schwäche ACS mitdenken.",
          "info": "Myokardischämie kann Oberbauchbeschwerden auslösen Übelkeit, Druck, Kaltschweißigkeit CAVE: atypischer Infarkt.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Koronarsyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Abdomen",
          "physiology": "Akutes Abdomen: Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "Leitsymptom, Vitalparameter, Begleitbeschwerden und situationsbezogene Diagnostik gemeinsam beurteilen; kein einzelner Wert beweist die Diagnose.",
          "cave": "Instabile Vitalparameter oder rasche Verschlechterung erfordern prioritäre ABCDE-Beurteilung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Abdomen%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Gastrointestinale Blutung",
          "physiology": "Obere gastrointestinale Blutung: Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "Leitsymptom, Vitalparameter, Begleitbeschwerden und situationsbezogene Diagnostik gemeinsam beurteilen; kein einzelner Wert beweist die Diagnose.",
          "cave": "Instabile Vitalparameter oder rasche Verschlechterung erfordern prioritäre ABCDE-Beurteilung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=GI-Blutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Rupturiertes Aortenaneurysma",
          "physiology": "Ruptur eines Aneurysmas – meist der Bauchaorta – mit innerer Blutung und rasch zunehmender Kreislaufdekompensation.",
          "findings": "Plötzlicher Bauch-, Flanken- oder Rückenschmerz, Synkope, Hypotonie, Blässe; manchmal tastbare pulsierende Resistenz.",
          "cave": "Häufig initial noch kurz kompensiert. Ältere Patient:innen mit Schock und Bauch-/Rückenschmerz besonders verdächtig.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=AAA%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Nierenkolik",
          "physiology": "Meist steinbedingte Harnleiterobstruktion führt zu akutem Druckanstieg im Harntrakt und spastischen Schmerzen.",
          "findings": "Wellenförmiger Flanken- oder Unterbauchschmerz, Ausstrahlung in Leiste/Genitale, Unruhe, Übelkeit, ggf. Hämaturie.",
          "cave": "Fieber oder Schüttelfrost bei Harnstau sprechen für einen urologischen Notfall.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Renale%20Kolik%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
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
          "name": "Lokale allergische Reaktion",
          "physiology": "Lokal begrenzte Mastzellaktivierung nach Kontakt mit einem Allergen. Histamin führt zu Rötung, Juckreiz und lokaler Schwellung.",
          "findings": "Umschriebene Quaddel, Rötung oder Juckreiz; Atmung und Hämodynamik bleiben in der Regel stabil.",
          "cave": "Wiederholte Untersuchung: lokale Zeichen können einer systemischen Reaktion vorausgehen.",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Lokale%20allergische%20Reaktion%20review%20diagnosis",
          "sourceLabel": "PubMed-Suche öffnen"
        },
        {
          "name": "Urtikaria (Nesselsucht)",
          "physiology": "Oberflächliche mastzellvermittelte Quaddelbildung mit lokalem Ödem und Juckreiz.",
          "findings": "Flüchtige, juckende Quaddeln; sonst meist stabile Vitalparameter.",
          "cave": "Bei Atemnot, Kreislaufzeichen oder Schleimhautschwellung Anaphylaxie mitdenken.",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Urtikaria%20review%20diagnosis",
          "sourceLabel": "PubMed-Suche öffnen"
        },
        {
          "name": "Anaphylaxie",
          "physiology": "Akute systemische Mediatorfreisetzung – meist IgE-vermittelt – mit Vasodilatation, Kapillarleck, Bronchospasmus und Schleimhautödem. Atemweg und Kreislauf können innerhalb von Minuten bedroht sein.",
          "findings": "Plötzlicher Beginn nach möglichem Trigger mit Urtikaria, Flush, Schleimhautschwellung, Giemen, Stridor, Erbrechen oder Blutdruckabfall. Hautzeichen sind häufig, aber nicht obligat.",
          "cave": "Schwere Verläufe sind auch ohne Exanthem möglich. Progrediente Atemnot, Heiserkeit, Zungenschwellung oder Hypotonie sind Notfallzeichen.",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Anaphylaxie%20review%20diagnosis",
          "sourceLabel": "PubMed-Suche öffnen"
        },
        {
          "name": "Angioödem (histamin- oder bradykininvermittelt)",
          "physiology": "Ödem tiefer Haut- und Schleimhautschichten durch Histamin oder Bradykinin mit potenzieller Atemwegsbeteiligung.",
          "findings": "Lippen-, Zungen-, Mundboden- oder Kehlkopfschwellung, teils Dysphagie oder Stridor.",
          "cave": "ACE-Hemmer-assoziierte Formen oft ohne Urtikaria und mit schlechtem Ansprechen auf Standardmedikation.",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Angio%C3%B6dem%20review%20diagnosis",
          "sourceLabel": "PubMed-Suche öffnen"
        },
        {
          "name": "Arzneimittelreaktion",
          "physiology": "Immunologische oder nichtimmunologische Unverträglichkeit nach Medikamenteneinnahme; das Spektrum reicht vom milden Exanthem bis zur schweren systemischen Reaktion.",
          "findings": "Zeitlicher Bezug zu neuem oder geänderter Medikation, Juckreiz, Exanthem, Quaddeln, eventuell Atemwegs- oder Kreislaufbeteiligung.",
          "cave": "Schleimhauterosionen, Blasenbildung, Fieber oder Kreislaufinstabilität sprechen für einen schweren Verlauf.",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Arzneimittelreaktion%20review%20diagnosis",
          "sourceLabel": "PubMed-Suche öffnen"
        }
      ],
      "questions": [
        "Möglicher Auslöser: Nahrungsmittel, Stich, Medikament, Latex?",
        "Nur Hautsymptome oder auch Atemwegs-, Kreislauf- oder GI-Beteiligung?",
        "Rasche Zunahme der Beschwerden?",
        "ACE-Hemmer, bekannte Allergien oder frühere Anaphylaxie?"
      ],
      "redflags": [
        "Stridor, Heiserkeit oder Zungenschwellung",
        "Hypotonie, Synkope oder Schockzeichen",
        "Bronchospasmus / zunehmende Atemnot",
        "Rasch progredienter Verlauf auch ohne Hautbefund"
      ],
      "group": "Allgemein / Allergie"
    },
    {
      "id": "diag-stridor",
      "title": "Stridor / akute Atemwegsverlegung",
      "group": "Atemweg",
      "icon": "lungs",
      "questions": [
        "Plötzlicher Beginn beim Essen oder Spielen?",
        "Schluckstörung, Fieber, Speichelfluss?",
        "Schwellung nach Allergen- oder Medikamentenkontakt?"
      ],
      "redflags": [
        "Ruhe-Stridor, Sprechunfähigkeit",
        "Zunehmende Erschöpfung, Zyanose",
        "Bewusstseinsstörung oder völliges Verstummen der Atmung"
      ],
      "causes": [
        {
          "name": "Fremdkörperaspiration",
          "physiology": "Ein aspiriertes Material verlegt die Atemwege teilweise oder vollständig. Dadurch drohen akute Ventilationsstörung und Erstickung.",
          "findings": "Plötzlicher Hustenanfall, Stridor, Dyspnoe, Sprechunfähigkeit oder einseitig abgeschwächtes Atemgeräusch je nach Lokalisation.",
          "cave": "Bei vollständiger Verlegung sind fehlendes Sprechen/Husten und rasche Zyanose hochkritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fremdk%C3%B6rperaspiration%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Epiglottitis",
          "physiology": "Schwellung der supraglottischen Strukturen mit rasch drohender Atemwegsverengung.",
          "findings": "Fieber, starke Schluckschmerzen, Speichelfluss, kloßige Sprache, sitzende Schonhaltung, inspiratorischer Stridor.",
          "cave": "Agitation und unnötige Rachenmanipulation vermeiden; Atemweg kann plötzlich kollabieren.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Epiglottitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Pseudokrupp",
          "physiology": "Virale subglottische Schleimhautschwellung, meist bei Kleinkindern, mit inspiratorischer Behinderung.",
          "findings": "Bellender Husten, Heiserkeit, inspiratorischer Stridor – häufig nachts.",
          "cave": "Ruhe-Stridor, Einziehungen oder Erschöpfung deuten auf schwereren Verlauf hin.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pseudokrupp%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Anaphylaxie",
          "physiology": "Akute systemische Mediatorfreisetzung – meist IgE-vermittelt – mit Vasodilatation, Kapillarleck, Bronchospasmus und Schleimhautödem. Atemweg und Kreislauf können innerhalb von Minuten bedroht sein.",
          "findings": "Plötzlicher Beginn nach möglichem Trigger mit Urtikaria, Flush, Schleimhautschwellung, Giemen, Stridor, Erbrechen oder Blutdruckabfall. Hautzeichen sind häufig, aber nicht obligat.",
          "cave": "Schwere Verläufe sind auch ohne Exanthem möglich. Progrediente Atemnot, Heiserkeit, Zungenschwellung oder Hypotonie sind Notfallzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Anaphylaxie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Angioödem",
          "physiology": "Ödem tiefer Haut- und Schleimhautschichten durch Histamin oder Bradykinin mit potenzieller Atemwegsbeteiligung.",
          "findings": "Lippen-, Zungen-, Mundboden- oder Kehlkopfschwellung, teils Dysphagie oder Stridor.",
          "cave": "ACE-Hemmer-assoziierte Formen oft ohne Urtikaria und mit schlechtem Ansprechen auf Standardmedikation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Angio%C3%B6dem%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        }
      ]
    },
    {
      "id": "stroke",
      "icon": "clock",
      "title": "Fokale Lähmung / Sprachstörung",
      "causes": [
        {
          "name": "Ischämischer Schlaganfall",
          "physiology": "Akuter Gefäßverschluss mit umschriebener Hirnischämie. Um das Infarktzentrum liegt oft penumbrales, potenziell rettbares Gewebe.",
          "findings": "Plötzliche FAST-Defizite, Aphasie, Hemiparese, Neglect oder Hemianopsie; je nach Stromgebiet weitere fokale Zeichen.",
          "cave": "Zeitfenster und letzte Symptomfreiheit dokumentieren. Antikoagulation und Schlaganfall-Mimics erfragen.",
          "info": "Akuter Gefäßverschluss mit Hirnischämie FAST-Defizite, Aphasie, Hemiparese CAVE: Zeitkritik, ggf. große Gefäßokklusion.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Isch%C3%A4mischer%20Schlaganfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Intrazerebrale Blutung",
          "physiology": "Blutung in das Hirnparenchym mit Masseneffekt und potenziellem intrakraniellem Druckanstieg. Klinisch oft nicht sicher von einer Ischämie zu unterscheiden.",
          "findings": "Fokale Defizite, Kopfschmerz, Erbrechen, Vigilanzminderung oder Blutdruckspitzen können vorkommen.",
          "cave": "Antikoagulation, Trauma und rasche Verschlechterung sind relevante Warnzeichen.",
          "info": "Blutung in Hirngewebe fokale Defizite, Kopfschmerz, Vigilanzabfall möglich CAVE: klinisch nicht sicher von Ischämie unterscheidbar.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Intrazerebrale%20Blutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hypoglykämie",
          "physiology": "Zu niedrige Glukoseverfügbarkeit im Gehirn verursacht zunächst adrenerge und später neuroglykopenische Symptome. Bei fortschreitender Entgleisung sind Krampf und Koma möglich.",
          "findings": "Schwitzen, Tremor, Hunger, Tachykardie, Verwirrtheit, fokale Ausfälle, Krampf oder Bewusstlosigkeit. Klinisch relevant häufig bei BZ <70 mg/dl (3,9 mmol/l).",
          "cave": "Kann einen Schlaganfall imitieren. Nach initialer Korrektur sind Rebound-Verläufe unter lang wirksamen Antidiabetika möglich.",
          "info": "Glukosemangel kann fokale Ausfälle imitieren niedriger BZ, neurologische Symptome CAVE: rasche Messung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Todd-Parese",
          "physiology": "Vorübergehende fokale Schwäche nach epileptischem Anfall infolge postiktaler neuronaler Erschöpfung.",
          "findings": "Vorangegangener Krampfanfall oder postiktale Phase, danach reversibles fokales Defizit.",
          "cave": "Ein echter Schlaganfall kann parallel vorliegen oder den Anfall ausgelöst haben – nicht vorschnell festlegen.",
          "info": "Vorübergehende fokale Schwäche nach Anfall postiktale Anamnese CAVE: paralleler Schlaganfall möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Todd-Parese%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ischämischer Schlaganfall",
          "physiology": "Akuter Gefäßverschluss mit umschriebener Hirnischämie. Um das Infarktzentrum liegt oft penumbrales, potenziell rettbares Gewebe.",
          "findings": "Plötzliche FAST-Defizite, Aphasie, Hemiparese, Neglect oder Hemianopsie; je nach Stromgebiet weitere fokale Zeichen.",
          "cave": "Zeitfenster und letzte Symptomfreiheit dokumentieren. Antikoagulation und Schlaganfall-Mimics erfragen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Isch%C3%A4mischer%20Insult%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Intrazerebrale Blutung",
          "physiology": "Blutung in das Hirnparenchym mit Masseneffekt und potenziellem intrakraniellem Druckanstieg. Klinisch oft nicht sicher von einer Ischämie zu unterscheiden.",
          "findings": "Fokale Defizite, Kopfschmerz, Erbrechen, Vigilanzminderung oder Blutdruckspitzen können vorkommen.",
          "cave": "Antikoagulation, Trauma und rasche Verschlechterung sind relevante Warnzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=H%C3%A4morrhagie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Schlaganfall-Mimic",
          "physiology": "Akute fokale zerebrale Funktionsstörung durch ischämischen Gefäßverschluss oder intrakranielle Blutung. Das betroffene Hirnareal bestimmt die Symptomatik.",
          "findings": "Plötzliche Sprachstörung, Fazialisparese, Arm-/Beinschwäche, Sehstörung, Sensibilitätsstörung oder Ataxie. BZ und Zeitpunkt „last known well“ sind zentral.",
          "cave": "Auch fluktuierende oder rasch regrediente Symptome sind zeitkritisch. Große Gefäßverschlüsse können mit schwerer Dysarthrie oder Blickdeviation imponieren.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Stroke%20Mimic%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        }
      ],
      "questions": [
        "Wann zuletzt sicher symptomfrei / unauffällig?",
        "Plötzlicher Beginn? Welche Defizite: Sprache, Arm, Bein, Gesicht, Sehen?",
        "Antikoagulation, Sturz oder Kopfschmerz?",
        "BZ gemessen? Krampfanfall oder Migräneanamnese?"
      ],
      "redflags": [
        "Plötzliches fokal-neurologisches Defizit",
        "Bewusstseinsstörung oder schwere Dysarthrie/Aphasie",
        "Begleitender Vernichtungskopfschmerz oder Antikoagulation",
        "Neue Lähmung mit Atem- oder Schluckstörung"
      ],
      "group": "Neurologie"
    },
    {
      "id": "trauma",
      "icon": "bandage",
      "title": "Verletzung nach Trauma",
      "causes": [
        {
          "name": "Commotio cerebri",
          "physiology": "Vorübergehende traumatische Funktionsstörung des Gehirns ohne makroskopisch fassbaren Strukturschaden.",
          "findings": "Kopfschmerz, Amnesie, Übelkeit, Schwindel, ggf. kurze Bewusstlosigkeit.",
          "cave": "Zunehmende Vigilanzstörung oder Erbrechen erfordern Re-Evaluation.",
          "info": "Traumatisch bedingte vorübergehende Hirnfunktionsstörung Kopfschmerz, Amnesie, Übelkeit CAVE: zunehmende Bewusstseinsstörung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Commotio%20cerebri%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Subduralhämatom",
          "physiology": "Blutung zwischen Dura und Arachnoidea, oft venös, mit potenziell verzögertem Masseneffekt.",
          "findings": "Kopfschmerz, Vigilanzabfall, fokale Defizite, ggf. nach Bagatelltrauma.",
          "cave": "Antikoagulation und verzögerte Verschlechterung sind typische Gefahren.",
          "info": "Blutung zwischen Dura und Arachnoidea Kopfschmerz, Vigilanzabfall, fokale Zeichen CAVE: verzögerte Verschlechterung, Antikoagulation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Subduralh%C3%A4matom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Epiduralhämatom",
          "physiology": "Blutung zwischen Schädel und Dura, häufig arteriell, mit raschem Druckanstieg.",
          "findings": "Bewusstseinsstörung, Kopfschmerz, evtl. freies Intervall, fokale Neurologie.",
          "cave": "Zeitkritischer Verlauf mit Einklemmungsgefahr.",
          "info": "Arterielle/venöse Blutung zwischen Schädel und Dura Bewusstseinsstörung, eventuell freies Intervall CAVE: rasche Einklemmung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Epiduralh%C3%A4matom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "SHT",
          "physiology": "Sammelbegriff für traumatische Schädigungen des Kopfes bzw. Gehirns mit Spektrum von Commotio bis intrakranieller Blutung.",
          "findings": "Kopfschmerz, Amnesie, Bewusstseinsstörung, Übelkeit/Erbrechen, neurologische Auffälligkeiten.",
          "cave": "Antikoagulation, fokale Ausfälle oder Vigilanzverschlechterung sind Warnzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=SHT%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Thoraxtrauma",
          "physiology": "Traumatische Gewalteinwirkung auf den Thorax kann Rippen, Lunge, Pleura, Herz und große Gefäße betreffen.",
          "findings": "Schmerzen, Dyspnoe, Prellmarken, paradoxe Atembewegungen, abgeschwächtes Atemgeräusch oder Hämatome.",
          "cave": "Pneumothorax, Hämatothorax oder kardiale Beteiligung nicht übersehen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Thoraxtrauma%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Abdominaltrauma",
          "physiology": "Trauma des Abdomens kann zu Organverletzungen und okkulter innerer Blutung führen.",
          "findings": "Bauchschmerz, Druckdolenz, Prellmarken, Übelkeit, Kreislaufinstabilität oder Abwehrspannung.",
          "cave": "Normale Anfangsuntersuchung schließt intraabdominelle Blutung nicht sicher aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Abdominaltrauma%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Fraktur",
          "physiology": "Unterbrechung der Knochenkontinuität mit lokaler Weichteilschädigung und je nach Lokalisation potenzieller Blutung oder neurovaskulärer Gefährdung.",
          "findings": "Schmerz, Schwellung, Fehlstellung, Funktionsverlust, Krepitationen; bei proximalen Frakturen relevante Blutverluste möglich.",
          "cave": "Durchblutung, Motorik und Sensibilität distal prüfen; offene Frakturen und Beckenfrakturen besonders kritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fraktur%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        },
        {
          "name": "Starke Blutung",
          "physiology": "Akuter Blutverlust reduziert die zirkulierende Blutmenge und verschlechtert die Sauerstoffversorgung der Organe.",
          "findings": "Sichtbare Blutung, Tachykardie, Blässe, Kaltschweißigkeit, verlängerte Rekapillarisierung und später Hypotonie.",
          "cave": "Äußere Blutung priorisiert stillen. Okkulte innere Blutungen aktiv mitdenken.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Starke%20Blutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen",
          "info": "Präklinisch sind Anamnese, Verlauf, Vitalparameter, BZ bzw. EKG nach Symptomatik und die wiederholte Re-Evaluation besonders relevant."
        }
      ],
      "questions": [
        "Unfallmechanismus und Energie des Traumas?",
        "Kopfaufprall, Bewusstlosigkeit, Antikoagulation?",
        "Wo bestehen die stärksten Schmerzen oder Funktionsausfälle?",
        "Atemnot, Bauchschmerz oder relevante Blutung?"
      ],
      "redflags": [
        "Instabiler Kreislauf oder relevante Blutung",
        "Bewusstseinsstörung oder fokale Neurologie",
        "Atemnot / Thoraxverletzung",
        "Bauchschmerz, Beckenstabilität oder starke Schmerzen bei Fehlstellung"
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
          "physiology": "Ödem tiefer Haut- und Schleimhautschichten durch Histamin oder Bradykinin mit potenzieller Atemwegsbeteiligung.",
          "findings": "Lippen-, Zungen-, Mundboden- oder Kehlkopfschwellung, teils Dysphagie oder Stridor.",
          "cave": "ACE-Hemmer-assoziierte Formen oft ohne Urtikaria und mit schlechtem Ansprechen auf Standardmedikation.",
          "info": "Tiefes Ödem von Haut oder Schleimhaut, histamin- oder bradykininvermittelt Zungen-/Lippenschwellung, Dysphagie, ggf. Stridor CAVE: ACE-Hemmer-Angioödem oft ohne Urtikaria.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Angio%C3%B6dem%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Peritonsillarabszess",
          "physiology": "Peritonsillarabszess: Die physiologische Folge ist meist eine Störung von Ventilation, Oxygenierung und Atemarbeit.",
          "findings": "einseitige Halsschmerzen, kloßige Sprache, Trismus. Atemgeräusch, Sprechfähigkeit, Stridor und sichtbare Einziehungen sind präklinisch besonders wichtig.",
          "cave": "Atemweg und tiefe Ausbreitung. Jede drohende Atemwegsverlegung hat Priorität; Verschlechterungen können abrupt auftreten.",
          "info": "Eitrige Infektion im Tonsillenumfeld einseitige Halsschmerzen, kloßige Sprache, Trismus CAVE: Atemweg und tiefe Ausbreitung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Peritonsillarabszess%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Schlaganfall",
          "physiology": "Akute fokale zerebrale Funktionsstörung durch ischämischen Gefäßverschluss oder intrakranielle Blutung. Das betroffene Hirnareal bestimmt die Symptomatik.",
          "findings": "Plötzliche Sprachstörung, Fazialisparese, Arm-/Beinschwäche, Sehstörung, Sensibilitätsstörung oder Ataxie. BZ und Zeitpunkt „last known well“ sind zentral.",
          "cave": "Auch fluktuierende oder rasch regrediente Symptome sind zeitkritisch. Große Gefäßverschlüsse können mit schwerer Dysarthrie oder Blickdeviation imponieren.",
          "info": "Zentrale Schluckstörung durch zerebrale Ischämie/Blutung Dysarthrie, Fazialisparese, Aspirationsgefahr CAVE: plötzlicher Beginn ist zeitkritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Schlaganfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Meist virale Entzündung der Bronchialschleimhaut mit vermehrter Schleimproduktion und Hustenreiz.",
          "findings": "Husten, Auswurf, leichtes Krankheitsgefühl, meist stabile Vitalparameter und normale Oxygenierung.",
          "cave": "Dyspnoe, fokale Auskultationsbefunde oder schlechte Vitalparameter sprechen eher für andere Ursachen.",
          "info": "Meist virale Entzündung der Bronchialschleimhaut Husten, Auswurf, oft normale SpO₂ CAVE: Dyspnoe oder schlechte Vitalwerte sprechen für schwere Ursache.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akute%20Bronchitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumonie",
          "physiology": "Infektiöse Entzündung des Lungenparenchyms mit alveolärer Füllung und eingeschränktem Gasaustausch. Dadurch steigen Atemarbeit und Sauerstoffbedarf.",
          "findings": "Häufig Fieber, Husten, Tachypnoe, fokale Auskultationsbefunde und reduzierte Belastbarkeit. Bei schwerem Verlauf Hypoxämie, Verwirrtheit oder Sepsiszeichen.",
          "cave": "Ältere oder immunsupprimierte Patient:innen können atypisch präsentieren. Sepsis und respiratorische Erschöpfung früh erkennen.",
          "info": "Infektion von Alveolen und Interstitium Fieber, produktiver Husten, Tachypnoe, fokale Auskultation CAVE: Sepsisgefahr.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "COPD-Exazerbation",
          "physiology": "Akute Verschlechterung einer chronischen, überwiegend nicht vollständig reversiblen Atemwegsobstruktion – häufig infektiös getriggert. Die CO₂-Elimination kann deutlich eingeschränkt sein.",
          "findings": "Mehr Dyspnoe, Husten und/oder Sputum, verlängertes Exspirium, Giemen, reduzierte Belastbarkeit. Hyperkapnie und Azidose können sich in Somnolenz oder Flapping tremor äußern.",
          "cave": "Normale oder mäßig erniedrigte SpO₂ schließt Hyperkapnie nicht aus. Mentale Veränderungen und Atemerschöpfung sind kritisch.",
          "info": "Akute Verschlechterung bestehender COPD mehr Husten, Dyspnoe und/oder Sputum CAVE: Hyperkapnie und Atemerschöpfung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=COPD-Exazerbation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kardiales Lungenödem",
          "physiology": "Erhöhter hydrostatischer Druck im Lungenkreislauf führt zu Flüssigkeitsaustritt in Interstitium und Alveolen. Die Compliance sinkt, der Gasaustausch verschlechtert sich rasch.",
          "findings": "Orthopnoe, Tachypnoe, feuchte Rasselgeräusche, Hypoxämie und ggf. schaumiger Auswurf. Häufig bestehen Hypertonie, Thoraxschmerz oder bekannte Herzinsuffizienz.",
          "cave": "Kann innerhalb kurzer Zeit in respiratorisches Versagen übergehen. ACS oder schwere Rhythmusstörung als Auslöser bedenken.",
          "info": "Flüssigkeitsübertritt in Lungengewebe Husten, Orthopnoe, feuchte Rasselgeräusche, teils schaumiger Auswurf CAVE: schwere Hypoxämie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kardiales%20Lungen%C3%B6dem%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Entzündete oder strukturell veränderte Bronchien können zu vermehrter Sekretion und Blutbeimengung führen.",
          "findings": "Chronischer Husten, Auswurf, gelegentlich Hämoptysen und Infektanfälligkeit.",
          "cave": "Größere Blutmengen oder respiratorische Verschlechterung sind nicht harmlos.",
          "info": "Entzündliche oder strukturelle Bronchialschäden mit Schleimhautblutung blutiger Auswurf, Husten CAVE: echte Hämoptyse von Hämatemesis unterscheiden.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Bronchitis%20/%20Bronchiektasen%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Lungenembolie",
          "physiology": "Verschluss einer Lungenarterie durch thromboembolisches Material mit Perfusionsstörung und möglicher akuter Rechtsherzbelastung. Die Ventilation kann erhalten sein, der Gasaustausch aber deutlich gestört sein.",
          "findings": "Akute Dyspnoe, Tachypnoe, Tachykardie, pleuritischer Thoraxschmerz, manchmal Synkope oder Hämoptyse. Die SpO₂ kann trotz relevanter Embolie anfangs normal sein.",
          "cave": "Hypotonie, Synkope und Zeichen des Schocks sprechen für eine Hochrisiko-Embolie. Immobilisation, OP, Tumor oder TVT-Anamnese gezielt erfragen.",
          "info": "Gefäßverschluss mit möglichem Lungeninfarkt Dyspnoe, pleuritischer Schmerz, Hämoptyse CAVE: Synkope/Hypotonie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Lungenembolie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumonie",
          "physiology": "Infektiöse Entzündung des Lungenparenchyms mit alveolärer Füllung und eingeschränktem Gasaustausch. Dadurch steigen Atemarbeit und Sauerstoffbedarf.",
          "findings": "Häufig Fieber, Husten, Tachypnoe, fokale Auskultationsbefunde und reduzierte Belastbarkeit. Bei schwerem Verlauf Hypoxämie, Verwirrtheit oder Sepsiszeichen.",
          "cave": "Ältere oder immunsupprimierte Patient:innen können atypisch präsentieren. Sepsis und respiratorische Erschöpfung früh erkennen.",
          "info": "Entzündungsbedingte Gefäßschädigung Fieber, Husten, blutiges Sputum CAVE: schwere Infektion.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pulmonale Blutung",
          "physiology": "Blutung in Alveolen oder Bronchien verschlechtert den Gasaustausch und kann die Atemwege mit Blut fluten.",
          "findings": "Hämoptysen, Dyspnoe, Hypoxämie, Husten und rasche respiratorische Verschlechterung.",
          "cave": "Erstickungsgefahr kann vor dem Volumenverlust im Vordergrund stehen.",
          "info": "Blut tritt in die Atemwege ein größere Blutmengen, Hypoxämie CAVE: Erstickungsgefahr auch ohne erheblichen Blutverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pulmonale%20Blutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Unkoordinierte Vorhoferregung mit unregelmäßiger Überleitung auf die Kammern. Je nach Frequenz sinkt die diastolische Füllung und das Herzzeitvolumen.",
          "findings": "Absolut arrhythmischer Puls, Palpitationen, Dyspnoe, Schwäche oder Thoraxdruck.",
          "cave": "Instabilität, kardiale Vorerkrankung und Embolierisiko beachten.",
          "info": "Ungeordnete atriale Erregung mit unregelmäßiger Kammeraktion absolut arrhythmischer Puls, variable HF CAVE: Instabilität und thromboembolisches Risiko.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Vorhofflimmern%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Supraventrikuläre Tachykardie",
          "physiology": "Meist Reentry-bedingte Tachykardie oberhalb der Ventrikel mit abruptem Beginn und Ende.",
          "findings": "Regelmäßiges Herzrasen, häufig schmale QRS-Komplexe, Palpitationen, Schwindel oder Druckgefühl.",
          "cave": "Hypotonie, Synkope oder Thoraxschmerz kennzeichnen einen instabilen Verlauf.",
          "info": "Reentry oder fokale atriale Tachykardie meist regelmäßige schmale Tachykardie, plötzlich einsetzend CAVE: Hypotonie, Thoraxschmerz, Synkope.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Supraventrikul%C3%A4re%20Tachykardie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ventrikuläre Tachykardie",
          "physiology": "Tachykarder Rhythmus aus den Ventrikeln mit oft deutlich reduziertem Herzzeitvolumen.",
          "findings": "Schneller Puls, Schwindel, Synkope, Hypotonie oder Thoraxschmerz; EKG häufig breitkomplexig.",
          "cave": "Breitkomplexige Tachykardie bis zum Beweis des Gegenteils als VT behandeln.",
          "info": "Tachykarder Ursprung aus den Kammern breite regelmäßige QRS-Komplexe häufig, Schock/Synkope CAVE: breite Tachykardie zunächst als VT bewerten.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ventrikul%C3%A4re%20Tachykardie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Sinustachykardie",
          "physiology": "Physiologische Reaktion auf Stressoren wie Schmerz, Fieber, Hypovolämie oder Angst.",
          "findings": "Regelmäßiger schneller Puls mit P-Wellen, meist erklärbarer Auslöser.",
          "cave": "Nicht den Auslöser übersehen: Blutung, Sepsis, Lungenembolie oder ACS können dahinterstehen.",
          "info": "Physiologische Reaktion auf Stressoren regelmäßiger Rhythmus mit P-Wellen CAVE: Ursache wie Sepsis, Blutung oder LAE suchen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Sinustachykardie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Störung der Erregungsleitung zwischen Vorhof und Kammer mit potenziell relevantem Frequenzabfall.",
          "findings": "Bradykardie, Schwindel, Schwäche, Synkope; im EKG Überleitungsstörung.",
          "cave": "Höhergradige AV-Blöcke können rasch instabil werden und sind besonders kritisch.",
          "info": "Gestörte atrioventrikuläre Überleitung langsame HF, EKG mit Überleitungsstörung CAVE: höhergradige Blöcke können instabil werden.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=AV-Block%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hyperkaliämie",
          "physiology": "Erhöhtes Serumkalium beeinträchtigt die kardiale Reizbildung und -leitung.",
          "findings": "Bradykardie, Muskelschwäche, ggf. spitze T-Wellen, verbreiterter QRS oder Rhythmusstörungen.",
          "cave": "Schwere Hyperkaliämie kann trotz unscheinbarem EKG vorliegen und rasch lebensbedrohlich werden.",
          "info": "Erhöhtes Serumkalium beeinträchtigt kardiale Erregung Bradykardie, Leitungsstörungen, teils spitze T-Wellen CAVE: EKG kann trotz schwerer Hyperkaliämie wenig auffällig sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hyperkali%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Medikamentenwirkung",
          "physiology": "Medikamente wie Betablocker, Calciumantagonisten, Opioide oder Sedativa können Herzfrequenz, Kreislauf oder Bewusstsein beeinflussen.",
          "findings": "Bradykardie, Hypotonie, Müdigkeit, Atemdepression oder Mischbilder je nach Substanz.",
          "cave": "Auch Überdosierung oder Interaktion bedenken; Medikamentenanamnese gezielt erheben.",
          "info": "Betablocker, Calciumantagonisten oder Digitalis reduzieren Frequenz/Überleitung Bradykardie, Hypotonie CAVE: Intoxikation beachten.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Medikamentenwirkung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Vagale Reaktion",
          "physiology": "Reflektorische Aktivierung des Parasympathikus mit Frequenz- und Blutdruckabfall.",
          "findings": "Übelkeit, Blässe, Schwitzen, Bradykardie, kurzzeitige Benommenheit bis Synkope.",
          "cave": "Kann harmlos sein, andere kardiale Ursachen müssen aber zum Kontext passen.",
          "info": "Reflektorische Frequenz- und Blutdrucksenkung Übelkeit, Schwitzen, kurzzeitige Bradykardie CAVE: kardiale Ursachen ausschließen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Vagale%20Reaktion%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Verlust von intravasalem Volumen durch Blutung oder Flüssigkeitsdefizit vermindert Vorlast, Schlagvolumen und Organperfusion.",
          "findings": "Tachykardie, Blässe, kalte Haut, verlängerte Rekapillarisierung, Hypotonie und reduzierte Urinproduktion sind typisch.",
          "cave": "Normotonie schließt den kompensierten Schock nicht aus. Blutungsquellen aktiv suchen.",
          "info": "Verminderte zirkulierende Blutmenge Tachykardie, kalte Haut, verlängerte Rekapillarisierung CAVE: Normotonie schließt kompensierten Schock nicht aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypovol%C3%A4mischer%20Schock%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kardiogener Schock",
          "physiology": "Schweres Pumpversagen des Herzens führt zu unzureichendem Herzzeitvolumen trotz ausreichend oder erhöhtem Füllungszustand.",
          "findings": "Hypotonie, kalte Extremitäten, Dyspnoe, Stauungszeichen, oft Thoraxschmerz oder Rhythmusstörung.",
          "cave": "ACS, mechanische Komplikationen und Rhythmusstörungen sind häufige Auslöser und hochkritisch.",
          "info": "Pumpversagen des Herzens Hypotonie, kalte Extremitäten, Stauungszeichen möglich CAVE: ACS und Rhythmusstörungen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kardiogener%20Schock%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Septischer Schock",
          "physiology": "Dysregulierte Wirtsreaktion auf eine Infektion mit Vasodilatation, Kapillarleck und Organminderperfusion.",
          "findings": "Tachypnoe, veränderte Vigilanz, Fieber oder Hypothermie, warme Haut anfangs möglich, später Hypotonie und Minderperfusion.",
          "cave": "Fieber kann fehlen. Rasch fortschreitender Verlauf bis Multiorganversagen ist möglich.",
          "info": "Infektionsbedingte Vasodilatation, Kapillarleck und Organminderperfusion veränderte Vigilanz, Tachypnoe, ggf. warme Haut initial CAVE: Fieber kann fehlen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Septischer%20Schock%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Anaphylaktischer Schock",
          "physiology": "Systemische Mediatorfreisetzung mit massiver Vasodilatation, Kapillarleck und oft zusätzlichem Bronchospasmus.",
          "findings": "Hypotonie, Tachykardie, Hautsymptome, Atemnot, Giemen oder GI-Symptome nach Allergenexposition.",
          "cave": "Ohne Hautmanifestation kann die Diagnose übersehen werden. Progrediente Atemwegsbeteiligung sofort erkennen.",
          "info": "Systemische Mediatorfreisetzung mit Vasodilatation und Kapillarleck Hypotonie, Bronchospasmus, Hautsymptome möglich CAVE: ohne Exanthem möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Anaphylaktischer%20Schock%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Obstruktiver Schock",
          "physiology": "Mechanische Behinderung von Füllung oder Auswurf des Herzens, z. B. bei Lungenembolie, Tamponade oder Spannungspneumothorax.",
          "findings": "Hypotonie, Tachykardie, Dyspnoe und je nach Ursache Halsvenenstauung, einseitig fehlendes Atemgeräusch oder Thoraxschmerz.",
          "cave": "Wichtig sind potenziell unmittelbar reversible Ursachen. Klinische Kontextzeichen aktiv suchen.",
          "info": "Mechanische Füllungs-/Auswurfbehinderung des Herzens Hypotonie bei LAE, Tamponade oder Spannungspneumothorax CAVE: unmittelbar reversible Ursachen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Obstruktiver%20Schock%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Stark erhöhter Blutdruck mit akuter Endorganschädigung, z. B. neurologisch, kardial, pulmonal oder renal.",
          "findings": "Kopfschmerz, Visusstörung, Neurologie, Dyspnoe, Thoraxschmerz, Lungenödem oder Krampf können hinweisend sein.",
          "cave": "Entscheidend ist die Organschädigung, nicht nur die Höhe des RR. Schwangerschaftsbezug mitdenken.",
          "info": "Akut stark erhöhter RR mit Endorganschaden neurologische Defizite, Dyspnoe, Thoraxschmerz oder Nierenfunktionsstörung CAVE: Endorganschaden ist entscheidend, nicht nur RR-Zahl.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypertensiver%20Notfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hypertensive Entgleisung ohne akuten Organschaden",
          "physiology": "Hypertensive Entgleisung ohne akuten Organschaden: Entscheidend ist die Auswirkung auf Herzzeitvolumen, Blutdruck und Organperfusion.",
          "findings": "oft wenige oder keine Beschwerden. Vitalparameter, Hautperfusion, EKG und Begleitsymptome zusammen bewerten.",
          "cave": "keine rasche RR-Senkung ohne Indikation. Hypotonie, Synkope oder akute Instabilität bedeuten präklinisch hohe Dringlichkeit.",
          "info": "Erhöhter arterieller Widerstand oft wenige oder keine Beschwerden CAVE: keine rasche RR-Senkung ohne Indikation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypertensive%20Entgleisung%20ohne%20akuten%20Organschaden%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Präeklampsie",
          "physiology": "Schwangerschaftsassoziierte Endotheldysfunktion mit Hypertonie und Organbeteiligung, teils mit Leber-, ZNS- oder Gerinnungsbeteiligung.",
          "findings": "Kopfschmerz, Sehstörung, Oberbauchschmerz, Hypertonie, Ödeme oder Übelkeit; nach der Geburt ebenfalls möglich.",
          "cave": "Krampfanfälle, Dyspnoe, schwere Hypertonie oder neurologische Symptome sprechen für schwere Präeklampsie/Eklampsie.",
          "info": "Schwangerschaftsassoziierte Endotheldysfunktion mit Hypertonie Kopfschmerz, Sehstörung, Oberbauchschmerz CAVE: Eklampsie/HELLP.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pr%C3%A4eklampsie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Primäre neurovaskuläre Kopfschmerzerkrankung mit trigemino-vaskulärer Aktivierung. Vegetative Begleitsymptome und Aura sind möglich.",
          "findings": "Meist pulsierender Kopfschmerz, Übelkeit, Licht-/Lärmempfindlichkeit, teils reversible neurologische Aura.",
          "cave": "Erstmanifestation, ungewöhnlicher Verlauf oder persistierende fokale Defizite erfordern differenzialdiagnostisches Umdenken.",
          "info": "Neurovaskuläre Kopfschmerzerkrankung pulsierend, Übelkeit, Lichtempfindlichkeit, ggf. Aura CAVE: erstmaliger/atypischer Kopfschmerz.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Migr%C3%A4ne%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Spannungskopfschmerz",
          "physiology": "Primärer Kopfschmerz mit muskulärer und zentraler Schmerzverarbeitung. Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "bilateral drückend. BZ, Pupillen, fokal-neurologischer Status und Verlauf der Symptomatik sind richtungsweisend.",
          "cave": "neue Red Flags hinterfragen. Zeitkritische Ursachen und rasche Progredienz nie unterschätzen.",
          "info": "Primärer Kopfschmerz mit muskulärer und zentraler Schmerzverarbeitung bilateral drückend CAVE: neue Red Flags hinterfragen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Spannungskopfschmerz%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Subarachnoidalblutung",
          "physiology": "Blutung in den Subarachnoidalraum, oft nach Aneurysmaruptur, mit meningealer Reizung und möglichem Druckanstieg.",
          "findings": "Plötzlicher stärkster Kopfschmerz, oft Vernichtungskopfschmerz, Übelkeit, Nackensteife oder Bewusstseinsstörung.",
          "cave": "Der neurologische Status kann anfangs noch relativ unauffällig sein. Zeitkritischer Notfall.",
          "info": "Blutung in Subarachnoidalraum, häufig Aneurysmaruptur schlagartiger Vernichtungskopfschmerz CAVE: neurologischer Status kann anfangs normal sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Subarachnoidalblutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Meningitis",
          "physiology": "Entzündung der Meningen durch infektiöse Erreger oder selten andere Ursachen. Die Blut-Hirn-Schranke ist gestört, systemische Entzündung häufig.",
          "findings": "Fieber, Kopfschmerz, Nackensteife, Lichtscheu, Übelkeit und Vigilanzveränderung; die klassische Trias ist nicht immer komplett.",
          "cave": "Petechien/Purpura, Kreislaufbeeinträchtigung oder Verwirrtheit sprechen für schweren Verlauf / Sepsis.",
          "info": "Entzündung der Hirnhäute Fieber, Kopfschmerz, Meningismus möglich CAVE: klassische Trias kann fehlen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Meningitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Clusterkopfschmerz",
          "physiology": "Clusterkopfschmerz: Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "stärkster einseitiger orbitaler Schmerz, Tränenfluss, Unruhe. BZ, Pupillen, fokal-neurologischer Status und Verlauf der Symptomatik sind richtungsweisend.",
          "cave": "neue Ausfälle abklären. Zeitkritische Ursachen und rasche Progredienz nie unterschätzen.",
          "info": "Trigeminus-autonome Kopfschmerzerkrankung stärkster einseitiger orbitaler Schmerz, Tränenfluss, Unruhe CAVE: neue Ausfälle abklären.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Clusterkopfschmerz%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Otolithen in einem Bogengang lösen bei Lagewechsel kurze Fehlreize des Vestibularorgans aus.",
          "findings": "Sekundenlange Drehschwindelattacken bei Lagewechsel, zwischen den Attacken oft beschwerdearm; kein persistierender neurologischer Ausfall.",
          "cave": "Anhaltender Schwindel, neue Ataxie oder Doppelbilder passen nicht gut dazu und erfordern weitere Abklärung.",
          "info": "Otolithen im Bogengang lösen lageabhängigen Drehschwindel aus Sekunden dauernde Attacken bei Lagewechsel CAVE: persistierende neurologische Symptome sprechen dagegen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Benigner%20Lagerungsschwindel%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Vestibularisneuritis",
          "physiology": "Akuter einseitiger Funktionsausfall des Vestibularorgans oder -nerven, meist postinfektiös.",
          "findings": "Anhaltender Drehschwindel, Übelkeit, Fallneigung, Nystagmus; typischerweise kein Hörverlust.",
          "cave": "Posteriorer Schlaganfall kann sehr ähnlich aussehen. Zentrale Warnzeichen aktiv suchen.",
          "info": "Akuter einseitiger Vestibularisausfall anhaltender Schwindel, Nystagmus, Übelkeit CAVE: posteriorer Schlaganfall kann ähnlich sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Vestibularisneuritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kleinhirn-/Hirnstamminfarkt",
          "physiology": "Ischämie im vertebrobasilären Stromgebiet mit potenziell schwerer Störung von Gleichgewicht, Hirnnerven und Bewusstsein.",
          "findings": "Akute Ataxie, Dysarthrie, Doppelbilder, Nystagmus, massiver Schwindel, ggf. Übelkeit oder Vigilanzstörung.",
          "cave": "FAST kann unauffällig sein. Neurologie im Posteriorstromgebiet nicht übersehen.",
          "info": "Unterbrechung der zerebellären/vertebrobasilären Durchblutung akute Ataxie, Dysarthrie, Doppelbilder, teils isolierter Schwindel CAVE: FAST kann negativ sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kleinhirn-/Hirnstamminfarkt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Orthostatische Hypotonie",
          "physiology": "Unzureichende Kreislaufanpassung beim Aufstehen führt zu Blutdruckabfall und zerebraler Minderperfusion. Häufig spielen Volumenmangel oder Medikamente mit.",
          "findings": "Schwindel, Benommenheit oder Synkope kurz nach Lagewechsel; niedriger RR, oft kompensatorische Tachykardie.",
          "cave": "Blutverlust, Dehydratation oder autonome Dysfunktion mitdenken.",
          "info": "Abfall der zerebralen Perfusion beim Aufstehen präsynkopaler Schwindel CAVE: Blutverlust und Arrhythmie ausschließen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Orthostatische%20Hypotonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Vorübergehende synchronisierte neuronale Übererregung. Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "tonisch-klonische Bewegung, postiktale Phase möglich. BZ, Pupillen, fokal-neurologischer Status und Verlauf der Symptomatik sind richtungsweisend.",
          "cave": "Atemwegsgefährdung. Zeitkritische Ursachen und rasche Progredienz nie unterschätzen.",
          "info": "Vorübergehende synchronisierte neuronale Übererregung tonisch-klonische Bewegung, postiktale Phase möglich CAVE: Atemwegsgefährdung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Epileptischer%20Anfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Status epilepticus",
          "physiology": "Anhaltender epileptischer Anfall oder Serienanfälle ohne ausreichende Erholung; dies gefährdet Atmung, Kreislauf und Gehirn.",
          "findings": "Konvulsiver Anfall über mehrere Minuten, wiederholte Anfälle ohne Wachwerden, Hypoxie, Azidose und Hyperthermie möglich.",
          "cave": "Zeitkritischer Notfall. Atemweg, BZ und auslösende Ursachen parallel beachten.",
          "info": "Anhaltende oder rasch wiederholte Anfälle ohne Erholung konvulsiver Anfall ab ca. 5 Minuten behandlungsbedürftig CAVE: Hypoxie und Folgeschäden.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Status%20epilepticus%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Fieberkrampf",
          "physiology": "Krampfanfall im Säuglings- oder Kleinkindalter im Zusammenhang mit Fieber ohne primäre ZNS-Infektion.",
          "findings": "Generalisierter Anfall bei fieberhaftem Infekt, danach oft rasche Erholung.",
          "cave": "Komplexe, fokale, prolongierte oder wiederholte Anfälle erfordern besondere Aufmerksamkeit; Meningitis differenzialdiagnostisch bedenken.",
          "info": "Anfall im Zusammenhang mit Fieber im Kindesalter generalisierte Krämpfe möglich CAVE: Meningitis und komplexe Verläufe.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fieberkrampf%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hypoglykämie",
          "physiology": "Zu niedrige Glukoseverfügbarkeit im Gehirn verursacht zunächst adrenerge und später neuroglykopenische Symptome. Bei fortschreitender Entgleisung sind Krampf und Koma möglich.",
          "findings": "Schwitzen, Tremor, Hunger, Tachykardie, Verwirrtheit, fokale Ausfälle, Krampf oder Bewusstlosigkeit. Klinisch relevant häufig bei BZ <70 mg/dl (3,9 mmol/l).",
          "cave": "Kann einen Schlaganfall imitieren. Nach initialer Korrektur sind Rebound-Verläufe unter lang wirksamen Antidiabetika möglich.",
          "info": "Schwere neuroglykopenische Störung niedriger BZ, Krämpfe CAVE: rasch reversible Ursache.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Akuter Gefäßverschluss der Retina mit schlagartiger Ischämie und drohendem bleibendem Visusverlust.",
          "findings": "Plötzlicher schmerzloser monokularer Sehverlust oder ausgeprägte Visusminderung.",
          "cave": "Als vaskulären Zeitnotfall betrachten und Emboliequellen mitdenken.",
          "info": "Akute Netzhautischämie plötzlicher schmerzloser monokularer Visusverlust CAVE: vaskulärer Zeitnotfall.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Retinaler%20Arterienverschluss%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Migräne mit Aura",
          "physiology": "Migräne mit Aura: Die Störung führt klinisch zu fokalen Defiziten, Vigilanzänderung oder Zeichen des erhöhten intrakraniellen Drucks.",
          "findings": "flimmernde Skotome, meist graduelle Ausbreitung. BZ, Pupillen, fokal-neurologischer Status und Verlauf der Symptomatik sind richtungsweisend.",
          "cave": "erstmalige Aura/TIA abgrenzen. Zeitkritische Ursachen und rasche Progredienz nie unterschätzen.",
          "info": "Vorübergehende kortikale Funktionsstörung flimmernde Skotome, meist graduelle Ausbreitung CAVE: erstmalige Aura/TIA abgrenzen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Migr%C3%A4ne%20mit%20Aura%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akutes Winkelblockglaukom",
          "physiology": "Plötzlicher Abflussstau des Kammerwassers führt zu stark erhöhtem Augeninnendruck und Schädigung des Sehnervs.",
          "findings": "Rotes schmerzhaftes Auge, Visusminderung, Halos, Übelkeit/Erbrechen.",
          "cave": "Dauerhafter Sehverlust droht – nicht mit Konjunktivitis verwechseln.",
          "info": "Plötzlicher Abflussstau des Kammerwassers rotes schmerzhaftes Auge, Visusminderung, Übelkeit CAVE: Sehverlust droht.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akutes%20Winkelblockglaukom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Schlaganfall",
          "physiology": "Akute fokale zerebrale Funktionsstörung durch ischämischen Gefäßverschluss oder intrakranielle Blutung. Das betroffene Hirnareal bestimmt die Symptomatik.",
          "findings": "Plötzliche Sprachstörung, Fazialisparese, Arm-/Beinschwäche, Sehstörung, Sensibilitätsstörung oder Ataxie. BZ und Zeitpunkt „last known well“ sind zentral.",
          "cave": "Auch fluktuierende oder rasch regrediente Symptome sind zeitkritisch. Große Gefäßverschlüsse können mit schwerer Dysarthrie oder Blickdeviation imponieren.",
          "info": "Okzipitale oder Hirnstammischämie homonyme Gesichtsfeldausfälle, Doppelbilder CAVE: begleitende Hirnstammzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Schlaganfall%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Entzündung von Magen und Darm mit Sekretionsstörung und Flüssigkeitsverlust. Hauptproblem präklinisch ist häufig die Dehydratation.",
          "findings": "Übelkeit, Erbrechen, Diarrhö, diffuse Bauchkrämpfe und abgeschlagener Allgemeinzustand. Trockene Schleimhäute und Tachykardie sprechen für Volumenmangel.",
          "cave": "Bei hohem Fieber, Blut im Stuhl, starken Schmerzen oder Schock an alternative schwere Ursachen denken.",
          "info": "Magen-Darm-Infekt führt zu Schleimhautreizung Erbrechen und Durchfall CAVE: Volumenmangel.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Gastroenteritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ileus",
          "physiology": "Ileus: Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "Erbrechen, zunehmende Distension, Stuhlverhalt. Schmerzanamnese, Übelkeit/Erbrechen, Bauchbefund und Kreislaufstatus zusammen interpretieren.",
          "cave": "Aspirations- und Ischämiegefahr. Peritonismus, Schock oder „pain out of proportion“ sind Warnsignale.",
          "info": "Blockierte Darmpassage Erbrechen, zunehmende Distension, Stuhlverhalt CAVE: Aspirations- und Ischämiegefahr.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ileus%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Migräne",
          "physiology": "Primäre neurovaskuläre Kopfschmerzerkrankung mit trigemino-vaskulärer Aktivierung. Vegetative Begleitsymptome und Aura sind möglich.",
          "findings": "Meist pulsierender Kopfschmerz, Übelkeit, Licht-/Lärmempfindlichkeit, teils reversible neurologische Aura.",
          "cave": "Erstmanifestation, ungewöhnlicher Verlauf oder persistierende fokale Defizite erfordern differenzialdiagnostisches Umdenken.",
          "info": "Neurovaskuläre Störung mit vegetativer Aktivierung Übelkeit, Lichtscheu, Kopfschmerz CAVE: atypische neurologische Zeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Migr%C3%A4ne%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Diabetische Ketoazidose",
          "physiology": "Absoluter oder relativer Insulinmangel führt zu Hyperglykämie, Ketonkörperbildung und metabolischer Azidose mit deutlichem Flüssigkeitsverlust.",
          "findings": "Polydipsie, Polyurie, Exsikkose, Übelkeit, Bauchschmerz, Erbrechen, tiefe Kussmaul-Atmung; BZ oft >250 mg/dl (13,9 mmol/l).",
          "cave": "Euglykämische Verläufe sind möglich. Vigilanzminderung und Schockzeichen weisen auf schweren Verlauf hin.",
          "info": "Insulinmangel verursacht Ketogenese und metabolische Azidose Bauchschmerz, Erbrechen, vertiefte Atmung, hoher BZ oft >250 mg/dl CAVE: euglykämische DKA möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Diabetische%20Ketoazidose%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Myokardinfarkt",
          "physiology": "Nekrose von Herzmuskelgewebe als Teil des ACS-Spektrums durch anhaltende Ischämie.",
          "findings": "Thoraxdruck, Dyspnoe, Übelkeit, Oberbauchbeschwerden, Kaltschweißigkeit, Schwäche.",
          "cave": "Auch atypische oder schmerzfreie Verläufe kommen vor.",
          "info": "Akute Myokardischämie mit vegetativen Symptomen Übelkeit, Kaltschweißigkeit, ggf. Oberbauchdruck CAVE: ohne Brustschmerz möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Myokardinfarkt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Gefäßarrosion bei Magen- oder Duodenalulkus führt zu oberer gastrointestinaler Blutung.",
          "findings": "Hämatemesis, Kaffeesatzerbrechen, Meläna, Tachykardie oder Schockzeichen.",
          "cave": "Bei älteren Menschen oder Antikoagulation rasch relevant werden.",
          "info": "Arrosion eines Gefäßes in Magen/Duodenum frisches Blut oder Kaffeesatzerbrechen CAVE: hämorrhagischer Schock.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ulkusblutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ösophagusvarizenblutung",
          "physiology": "Ruptur portal-hypertensiver Varizen, meist bei Leberzirrhose, mit hohem Blutverlust.",
          "findings": "Massive Hämatemesis, Kreislaufdepression, bekannte Lebererkrankung oder Aszites möglich.",
          "cave": "Aspirations- und Schockgefahr sehr hoch.",
          "info": "Ruptur portaler Kollateralen meist bei Leberzirrhose starke Hämatemesis CAVE: rascher Blutverlust und Aspirationsrisiko.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=%C3%96sophagusvarizenblutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Mallory-Weiss-Läsion",
          "physiology": "Mukosariss im gastroösophagealen Übergang nach starkem Würgen oder Erbrechen.",
          "findings": "Blut im Erbrochenen nach vorausgegangenem Erbrechen oder Alkoholabusus.",
          "cave": "Auch hier Blutungsstärke und Kreislaufzustand ernst nehmen.",
          "info": "Schleimhautriss nach starkem Würgen Blut nach Erbrechensattacke CAVE: Ausmaß der Blutung beachten.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Mallory-Weiss-L%C3%A4sion%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Blutung proximal des Treitz-Bands führt häufig zu Teerstuhl. Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "schwarze klebrige Stühle, ggf. Schock. Schmerzanamnese, Übelkeit/Erbrechen, Bauchbefund und Kreislaufstatus zusammen interpretieren.",
          "cave": "massive Blutung kann auch rot erscheinen. Peritonismus, Schock oder „pain out of proportion“ sind Warnsignale.",
          "info": "Blutung proximal des Treitz-Bands führt häufig zu Teerstuhl schwarze klebrige Stühle, ggf. Schock CAVE: massive Blutung kann auch rot erscheinen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Obere%20gastrointestinale%20Blutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Divertikelblutung",
          "physiology": "Blutung aus Kolondivertikeln, oft arterielle Quelle.",
          "findings": "Meist schmerzlose Hämatochezie, bei starker Blutung Tachykardie oder Schwäche.",
          "cave": "Erheblicher Volumenverlust ist möglich – auch ohne Schmerzen.",
          "info": "Blutung aus Dickdarmdivertikel meist schmerzlose Hämatochezie CAVE: erheblicher Volumenverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Divertikelblutung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ischämische Kolitis",
          "physiology": "Ischämische Kolitis: Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "Bauchschmerzen und blutiger Stuhl. Schmerzanamnese, Übelkeit/Erbrechen, Bauchbefund und Kreislaufstatus zusammen interpretieren.",
          "cave": "Mesenterialischämie ausschließen. Peritonismus, Schock oder „pain out of proportion“ sind Warnsignale.",
          "info": "Darmwand-Minderperfusion Bauchschmerzen und blutiger Stuhl CAVE: Mesenterialischämie ausschließen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Isch%C3%A4mische%20Kolitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hämorrhoiden",
          "physiology": "Gefäßpolster im Analkanal können bei Reizung hellrote Blutungen verursachen.",
          "findings": "Typisch hellrotes Blut am Papier oder auf dem Stuhl, oft ohne systemische Beeinträchtigung.",
          "cave": "Nicht vorschnell als harmlose Ursache werten, wenn Kreislaufzeichen oder Bauchschmerz vorliegen.",
          "info": "Blutung erweiterter Gefäßpolster hellrotes Blut am Papier CAVE: nicht vorschnell als harmlose Ursache werten.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=H%C3%A4morrhoiden%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Akute infektiöse Reizung von Magen und Darm mit Flüssigkeits- und Elektrolytverlust.",
          "findings": "Diarrhö, Erbrechen, Bauchkrämpfe, Durst, trockene Schleimhäute und Tachykardie bei Dehydratation.",
          "cave": "Kinder und ältere Menschen dekompensieren oft rascher.",
          "info": "Infektiöse Flüssigkeitssekretion oder Malabsorption Diarrhö, Erbrechen, trockene Schleimhäute CAVE: Hypovolämie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akute%20Gastroenteritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Clostridioides-difficile-Kolitis",
          "physiology": "Toxinvermittelte Darmentzündung, meist nach Antibiotikatherapie, mit potenziell fulminantem Verlauf.",
          "findings": "Wässrige Diarrhö, Bauchschmerz, Fieber, reduzierter AZ; schwere Verläufe mit Kreislaufbeeinträchtigung möglich.",
          "cave": "An toxisches Megakolon oder Sepsis denken.",
          "info": "Toxinvermittelte Darmentzündung oft nach Antibiotika wässrige Diarrhö, Fieber CAVE: toxisches Megakolon/Sepsis.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Clostridioides-difficile-Kolitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ischämische Kolitis",
          "physiology": "Ischämische Kolitis: Je nach Ursache dominieren Entzündung, Obstruktion, Ischämie oder Blutung mit vegetativer Begleitsymptomatik.",
          "findings": "krampfartiger Schmerz, ggf. blutige Diarrhö. Schmerzanamnese, Übelkeit/Erbrechen, Bauchbefund und Kreislaufstatus zusammen interpretieren.",
          "cave": "vaskuläre Ursache. Peritonismus, Schock oder „pain out of proportion“ sind Warnsignale.",
          "info": "Minderdurchblutung der Kolonschleimhaut krampfartiger Schmerz, ggf. blutige Diarrhö CAVE: vaskuläre Ursache.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Isch%C3%A4mische%20Kolitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Insulin oder Sulfonylharnstoffe senken Glukose. Präklinisch relevant sind vor allem Bewusstseinsveränderung, Kreislaufeffekte und Flüssigkeits-/Elektrolytverschiebungen.",
          "findings": "Schwitzen, Tremor, Verwirrtheit, BZ <70 mg/dl. BZ, Hydratation, Atemmuster und neurologischer Zustand sind präklinisch oft besonders auffällig.",
          "cave": "Rezidiv insbesondere bei Sulfonylharnstoffen. Bewusstseinsstörung, Schock oder schwere Dehydratation sprechen für einen kritischen Verlauf.",
          "info": "Insulin oder Sulfonylharnstoffe senken Glukose Schwitzen, Tremor, Verwirrtheit, BZ <70 mg/dl CAVE: Rezidiv insbesondere bei Sulfonylharnstoffen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Medikamentenbedingte%20Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Sepsisassoziierte Hypoglykämie",
          "physiology": "Erhöhter Glukoseverbrauch und gestörte Glukosebereitstellung bei schwerem Infekt können zur Hypoglykämie führen.",
          "findings": "Verwirrtheit, Schwäche, Tachypnoe, niedriger BZ bei Hinweisen auf Infektion oder Schock.",
          "cave": "Marker einer schweren Erkrankung; Sepsis konsequent mitdenken.",
          "info": "Erhöhter Verbrauch/gestörte Glukosebereitstellung Verwirrtheit, niedriger BZ CAVE: schwerer Infekt.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Sepsisassoziierte%20Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Alkoholassoziierte Hypoglykämie",
          "physiology": "Alkohol hemmt die hepatische Glukoneogenese und kann bei leeren Glykogenspeichern zu relevanter Hypoglykämie führen.",
          "findings": "Verwirrtheit, Gangunsicherheit, Bewusstseinsstörung bei erniedrigtem BZ; Alkoholgeruch kann irreführen.",
          "cave": "Nicht jede „Alkoholisierung“ erklärt die Symptomatik. BZ immer messen.",
          "info": "Hemmung der Glukoneogenese bei eingeschränkten Reserven Bewusstseinsstörung, erniedrigter BZ CAVE: Intoxikation überdeckt Hypoglykämie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Alkoholassoziierte%20Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Absoluter oder relativer Insulinmangel führt zu Hyperglykämie, Ketonkörperbildung und metabolischer Azidose mit deutlichem Flüssigkeitsverlust.",
          "findings": "Polydipsie, Polyurie, Exsikkose, Übelkeit, Bauchschmerz, Erbrechen, tiefe Kussmaul-Atmung; BZ oft >250 mg/dl (13,9 mmol/l).",
          "cave": "Euglykämische Verläufe sind möglich. Vigilanzminderung und Schockzeichen weisen auf schweren Verlauf hin.",
          "info": "Insulinmangel führt zu Ketonkörperbildung und Azidose hoher BZ, Kussmaul-Atmung, Dehydratation, Ketone CAVE: auch bei geringer BZ-Erhöhung möglich.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Diabetische%20Ketoazidose%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hyperosmolares hyperglykämisches Syndrom",
          "physiology": "Extreme Hyperglykämie erzeugt eine hohe Plasmaosmolalität und ausgeprägte Dehydratation, meist ohne relevante Ketoazidose.",
          "findings": "Starke Exsikkose, Schwäche, Polyurie, Verwirrtheit bis Koma; BZ häufig >600 mg/dl (33,3 mmol/l).",
          "cave": "Hohe Thrombose- und Schockgefahr, oft bei älteren Menschen mit Infekt oder Exsikkose.",
          "info": "Ausgeprägte Hyperglykämie und Hyperosmolarität ohne ausgeprägte Ketose oft BZ >600 mg/dl (33,3 mmol/l), Exsikkose, Vigilanzminderung CAVE: Thrombose-/Schockrisiko.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hyperosmolares%20hyperglyk%C3%A4misches%20Syndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Stresshyperglykämie",
          "physiology": "Akute Erkrankungen erhöhen über Katecholamine und Kortisol den Blutzucker auch ohne primäre diabetische Krise.",
          "findings": "Erhöhter BZ im Rahmen von Schmerz, Infekt, Trauma oder Myokardischämie.",
          "cave": "BZ allein unterscheidet eine Stressreaktion nicht sicher von DKA/HHS.",
          "info": "Katecholamin-/Kortisolanstieg bei akuter Erkrankung erhöhter BZ ohne zwingende DKA CAVE: BZ allein unterscheidet Krisen nicht.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Stresshyperglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Vermindertes ionisiertes Kalzium erhöht die neuromuskuläre Erregbarkeit und kann die kardiale Reizleitung beeinflussen.",
          "findings": "Parästhesien, Tetanie, Pfötchenstellung, Muskelkrämpfe, ggf. QT-Verlängerung.",
          "cave": "Schwere Verläufe können Laryngospasmus oder Arrhythmien verursachen.",
          "info": "Niedriges ionisiertes Calcium erhöht neuromuskuläre Erregbarkeit Pfötchenstellung, Parästhesien, QT-Verlängerung CAVE: Laryngospasmus/Arrhythmie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypokalz%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hyperventilation",
          "physiology": "Respiratorische Alkalose senkt ionisiertes Calcium vorübergehend. Präklinisch relevant sind vor allem Bewusstseinsveränderung, Kreislaufeffekte und Flüssigkeits-/Elektrolytverschiebungen.",
          "findings": "periorales Kribbeln, Tetanie. BZ, Hydratation, Atemmuster und neurologischer Zustand sind präklinisch oft besonders auffällig.",
          "cave": "somatische Ursache der Tachypnoe ausschließen. Bewusstseinsstörung, Schock oder schwere Dehydratation sprechen für einen kritischen Verlauf.",
          "info": "Respiratorische Alkalose senkt ionisiertes Calcium vorübergehend periorales Kribbeln, Tetanie CAVE: somatische Ursache der Tachypnoe ausschließen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hyperventilation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Elektrolytverlust",
          "physiology": "Verlust von Kalium, Magnesium oder Calcium – z. B. durch Diarrhö, Erbrechen oder Diuretika – verändert die neuromuskuläre Erregbarkeit.",
          "findings": "Muskelkrämpfe, Schwäche, Parästhesien oder Herzrhythmusstörungen.",
          "cave": "Bei Palpitationen, Tetanie oder Synkope an relevante Elektrolytstörung denken.",
          "info": "Verlust von Magnesium/Kalium etwa durch Diarrhö oder Diuretika Krämpfe, Schwäche CAVE: Arrhythmiegefahr.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Elektrolytverlust%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Systemische Immunreaktion auf einen viralen Erreger mit Sollwerterhöhung der Körpertemperatur.",
          "findings": "Fieber, Myalgien, Müdigkeit, respiratorische oder gastrointestinale Beschwerden.",
          "cave": "Verschlechterung, Dyspnoe oder Zeichen der Sepsis erfordern differenzialdiagnostisches Umdenken.",
          "info": "Immunreaktion mit pyrogener Sollwerterhöhung Fieber, Abgeschlagenheit, respiratorische Beschwerden CAVE: klinische Verschlechterung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Virusinfekt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pneumonie",
          "physiology": "Infektiöse Entzündung des Lungenparenchyms mit alveolärer Füllung und eingeschränktem Gasaustausch. Dadurch steigen Atemarbeit und Sauerstoffbedarf.",
          "findings": "Häufig Fieber, Husten, Tachypnoe, fokale Auskultationsbefunde und reduzierte Belastbarkeit. Bei schwerem Verlauf Hypoxämie, Verwirrtheit oder Sepsiszeichen.",
          "cave": "Ältere oder immunsupprimierte Patient:innen können atypisch präsentieren. Sepsis und respiratorische Erschöpfung früh erkennen.",
          "info": "Alveoläre Infektion Fieber, Husten, Tachypnoe, Hypoxämie CAVE: Sepsis.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pneumonie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pyelonephritis",
          "physiology": "Aufsteigende bakterielle Infektion des Nierenbeckens und Nierenparenchyms.",
          "findings": "Fieber, Flankenschmerz, Dysurie, reduzierter Allgemeinzustand, Klopfschmerz über dem Nierenlager.",
          "cave": "In Kombination mit Harnabflussstörung drohen Urosepsis und rasche Verschlechterung.",
          "info": "Aufsteigende bakterielle Nierenbeckeninfektion Fieber, Flankenschmerz, Dysurie CAVE: infizierter Harnstau.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pyelonephritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Sepsis",
          "physiology": "Lebensbedrohliche Organdysfunktion durch dysregulierte Wirtsreaktion auf eine Infektion. Systemische Inflammationszeichen und Organdysfunktion entscheiden über die Dringlichkeit.",
          "findings": "Mögliche Zeichen: veränderte Vigilanz, Tachypnoe, Tachykardie, Hypotonie, Fieber oder Hypothermie, verminderte Urinmenge.",
          "cave": "Fieber ist nicht obligat. Normale Blutdruckwerte schließen frühe Organdysfunktion nicht aus.",
          "info": "Lebensbedrohliche Organdysfunktion infolge fehlregulierter Infektionsantwort veränderte Vigilanz, Tachypnoe, Hypotonie möglich CAVE: fehlendes Fieber schließt nicht aus.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Sepsis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Meningitis",
          "physiology": "Entzündung der Meningen durch infektiöse Erreger oder selten andere Ursachen. Die Blut-Hirn-Schranke ist gestört, systemische Entzündung häufig.",
          "findings": "Fieber, Kopfschmerz, Nackensteife, Lichtscheu, Übelkeit und Vigilanzveränderung; die klassische Trias ist nicht immer komplett.",
          "cave": "Petechien/Purpura, Kreislaufbeeinträchtigung oder Verwirrtheit sprechen für schweren Verlauf / Sepsis.",
          "info": "Hirnhautentzündung Fieber, Kopfschmerz, Nackensteife möglich CAVE: rascher Verlauf.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Meningitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Oberflächliche mastzellvermittelte Quaddelbildung mit lokalem Ödem und Juckreiz.",
          "findings": "Flüchtige, juckende Quaddeln; sonst meist stabile Vitalparameter.",
          "cave": "Bei Atemnot, Kreislaufzeichen oder Schleimhautschwellung Anaphylaxie mitdenken.",
          "info": "Mastzellvermittelte oberflächliche Quaddelbildung juckende flüchtige Quaddeln CAVE: Atemwegs- oder Kreislaufbeteiligung weist auf Anaphylaxie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Urtikaria%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Arzneimittelexanthem",
          "physiology": "Arzneimittelexanthem: Systemische Inflammationszeichen und Organdysfunktion entscheiden über die Dringlichkeit.",
          "findings": "makulopapulöse Hautveränderungen. Temperatur, Kreislauf, Atmung und Allgemeinzustand gemeinsam betrachten.",
          "cave": "Schleimhautbeteiligung/Blasen als Warnzeichen. Sepsis ist auch ohne hohes Fieber möglich.",
          "info": "Immunreaktion auf Medikament makulopapulöse Hautveränderungen CAVE: Schleimhautbeteiligung/Blasen als Warnzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Arzneimittelexanthem%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Meningokokkensepsis",
          "physiology": "Invasive bakterielle Infektion mit fulminanter systemischer Entzündungsreaktion und Mikrothrombosierung.",
          "findings": "Fieber, schwer reduzierter AZ, Petechien/Purpura, Tachykardie, Hypotonie und rascher Verlauf.",
          "cave": "Zeitkritischer septischer Notfall; Hautbefunde können anfangs diskret sein.",
          "info": "Invasive bakterielle Infektion mit Gerinnungsaktivierung Petechien/Purpura, Fieber, rascher Schock CAVE: zeitkritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Meningokokkensepsis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Erysipel",
          "physiology": "Akute bakterielle Hautinfektion, meist durch Streptokokken, mit ausgeprägter lokaler Entzündung.",
          "findings": "Scharf begrenzte Rötung, Überwärmung, Schmerzen und Fieber.",
          "cave": "Bei rascher Ausbreitung oder Sepsiszeichen schwerer Verlauf möglich.",
          "info": "Akute bakterielle Hautinfektion scharf begrenzte Rötung, Wärme, Fieber CAVE: systemische Sepsiszeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Erysipel%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Ureterstein: Je nach Ursache stehen Harnabflussstörung, Infektion, Blutung oder Organischämie im Vordergrund.",
          "findings": "wellenförmiger Schmerz, Unruhe, ggf. Hämaturie. Schmerzlokalisation, Miktion, Blutung und Infektzeichen sind wichtige Leitsäulen.",
          "cave": "infizierte Obstruktion. Fieber plus Harnstau bzw. Blutung plus Instabilität sind Notfallkonstellationen.",
          "info": "Obstruktion mit Harnstau und Dehnung wellenförmiger Schmerz, Unruhe, ggf. Hämaturie CAVE: infizierte Obstruktion.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ureterstein%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Pyelonephritis",
          "physiology": "Aufsteigende bakterielle Infektion des Nierenbeckens und Nierenparenchyms.",
          "findings": "Fieber, Flankenschmerz, Dysurie, reduzierter Allgemeinzustand, Klopfschmerz über dem Nierenlager.",
          "cave": "In Kombination mit Harnabflussstörung drohen Urosepsis und rasche Verschlechterung.",
          "info": "Bakterielle Entzündung des Nierenbeckens Flankenschmerz, Fieber, Klopfschmerz CAVE: Urosepsis.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pyelonephritis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Niereninfarkt",
          "physiology": "Akuter Verschluss einer Nierenarterie mit ischämischer Nierenparenchymschädigung.",
          "findings": "Plötzlicher Flankenschmerz, Übelkeit, ggf. Hämaturie oder Hypertonie.",
          "cave": "Bei Emboliequellen oder Vorhofflimmern mitdenken; nicht mit Kolik verwechseln.",
          "info": "Akuter Verschluss einer Nierenarterie plötzlicher Flankenschmerz, Hämaturie möglich CAVE: bei Emboliequellen bedenken.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Niereninfarkt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Bakterielle Entzündung der Harnblase.",
          "findings": "Dysurie, Pollakisurie, Drang, suprapubischer Schmerz; meist kein Fieber.",
          "cave": "Fieber, Flankenschmerz oder reduzierter AZ sprechen eher für komplizierten Infekt / Pyelonephritis.",
          "info": "Infektion der Harnblase Dysurie, Pollakisurie, suprapubischer Schmerz CAVE: systemische Infektzeichen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Zystitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akuter Harnverhalt",
          "physiology": "Störung des Harnabflusses – häufig durch Prostataobstruktion, Medikamente oder neurologische Ursachen – führt zu Überdehnung der Harnblase.",
          "findings": "Schmerzhafte suprapubische Fülle, fehlende Miktion, Unruhe, manchmal paradoxer Harnverlust.",
          "cave": "Cauda-equina-Syndrom oder Sepsiszeichen nicht übersehen.",
          "info": "Gestörter Harnabfluss, häufig Prostataobstruktion oder Medikamente schmerzhafte volle Blase, fehlende Miktion CAVE: Nierenstau.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akuter%20Harnverhalt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Cauda-equina-Syndrom",
          "physiology": "Kompression der lumbosakralen Nervenwurzeln mit sensomotorischen Ausfällen und Störung der Blasen-/Mastdarmfunktion.",
          "findings": "Rückenschmerz, Harnverhalt oder Inkontinenz, Sattelanästhesie, Beinschwäche oder radikuläre Schmerzen.",
          "cave": "Zeitkritisch wegen möglicher bleibender neurologischer Schäden.",
          "info": "Kompression lumbosakraler Nervenwurzeln Harnverhalt, Sattelanästhesie, Beinschwäche CAVE: dringende neurochirurgische Abklärung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Cauda-equina-Syndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Einnistung einer Schwangerschaft außerhalb des Uterus, meist tubar. Mit Wachstum drohen Blutung und Ruptur.",
          "findings": "Unterbauchschmerz, vaginale Blutung, Schwindel oder Synkope; Schwangerschaftstest bzw. Schwangerschaftsanamnese ist essenziell.",
          "cave": "Bis zum Beweis des Gegenteils bei gebärfähigen Patientinnen mit Unterbauchschmerz mitdenken – innere Blutung möglich.",
          "info": "Implantation außerhalb des Uterus einseitiger Unterbauchschmerz, vaginale Blutung, Synkope CAVE: innere Blutung nach Ruptur.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Extrauteringravidit%C3%A4t%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Abort / Fehlgeburt",
          "physiology": "Vorzeitige Beendigung einer Schwangerschaft mit uteriner Blutung und Krämpfen.",
          "findings": "Vaginale Blutung, Unterbauchschmerz, Gewebeabgang möglich, je nach Ausmaß Kreislaufsymptome.",
          "cave": "Starke Blutung, Infektzeichen oder Synkope sind Red Flags.",
          "info": "Vorzeitiges Schwangerschaftsende Blutung, Unterbauchkrämpfe CAVE: hoher Blutverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Abort%20/%20Fehlgeburt%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Vorzeitige Plazentalösung",
          "physiology": "Vorzeitige Lösung der Plazenta verursacht maternale Blutung und akute fetomaternale Gefährdung.",
          "findings": "Bauchschmerz, harter Uterus, vaginale Blutung – die Blutung kann teilweise verborgen sein –, Kreislaufbeeinträchtigung.",
          "cave": "Zeitkritischer geburtshilflicher Notfall auch bei scheinbar geringer äußerer Blutung.",
          "info": "Plazenta trennt sich vor Geburt Bauchschmerz, harter Uterus, teils vaginale Blutung CAVE: Blutung kann verborgen sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Vorzeitige%20Plazental%C3%B6sung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Ovarialtorsion",
          "physiology": "Verdrehung des Ovars bzw. Adnexes mit venöser Abflussstörung und später arterieller Ischämie.",
          "findings": "Akuter meist einseitiger Unterbauchschmerz, Übelkeit, Erbrechen.",
          "cave": "Zeitkritisch wegen drohendem Gewebeverlust.",
          "info": "Verdrehung des Ovars beeinträchtigt Durchblutung abrupt einseitiger Unterbauchschmerz, Übelkeit CAVE: Organverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Ovarialtorsion%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Schwangerschaftsassoziierte Endotheldysfunktion mit Hypertonie und Organbeteiligung, teils mit Leber-, ZNS- oder Gerinnungsbeteiligung.",
          "findings": "Kopfschmerz, Sehstörung, Oberbauchschmerz, Hypertonie, Ödeme oder Übelkeit; nach der Geburt ebenfalls möglich.",
          "cave": "Krampfanfälle, Dyspnoe, schwere Hypertonie oder neurologische Symptome sprechen für schwere Präeklampsie/Eklampsie.",
          "info": "Schwangerschaftsassoziierte Gefäß-/Plazentadysfunktion Hypertonie ab 140/90 mmHg nach 20. SSW, Kopfschmerz, Sehstörung CAVE: Organschaden und Eklampsie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pr%C3%A4eklampsie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "HELLP-Syndrom",
          "physiology": "Hämolyse, erhöhte Leberenzyme und Thrombozytopenie. Besonders relevant sind Blutverlust, maternale Kreislaufbeeinträchtigung und die Schwangerschaftsdauer.",
          "findings": "rechter Oberbauchschmerz, Übelkeit, Krankheitsgefühl. Blutung, Unterbauch-/Oberbauchschmerz, RR und Schwangerschaftsanamnese sind zentral.",
          "cave": "auch ohne ausgeprägte Hypertonie. Bei Blutung oder starken Schmerzen Schwangerschaft immer mitdenken.",
          "info": "Hämolyse, erhöhte Leberenzyme und Thrombozytopenie rechter Oberbauchschmerz, Übelkeit, Krankheitsgefühl CAVE: auch ohne ausgeprägte Hypertonie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=HELLP-Syndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Eklampsie",
          "physiology": "Krampfanfall im Rahmen einer hypertensiven Schwangerschaftserkrankung. Besonders relevant sind Blutverlust, maternale Kreislaufbeeinträchtigung und die Schwangerschaftsdauer.",
          "findings": "tonisch-klonische Krämpfe. Blutung, Unterbauch-/Oberbauchschmerz, RR und Schwangerschaftsanamnese sind zentral.",
          "cave": "auch postpartal. Bei Blutung oder starken Schmerzen Schwangerschaft immer mitdenken.",
          "info": "Krampfanfall im Rahmen einer hypertensiven Schwangerschaftserkrankung tonisch-klonische Krämpfe CAVE: auch postpartal.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Eklampsie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Bandscheibenbedingte Radikulopathie: Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "dermatomale Schmerzen, Parästhesien. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "progrediente Paresen. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Nervenwurzelreizung durch Bandscheibe dermatomale Schmerzen, Parästhesien CAVE: progrediente Paresen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Bandscheibenbedingte%20Radikulopathie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Cauda-equina-Syndrom",
          "physiology": "Kompression der lumbosakralen Nervenwurzeln mit sensomotorischen Ausfällen und Störung der Blasen-/Mastdarmfunktion.",
          "findings": "Rückenschmerz, Harnverhalt oder Inkontinenz, Sattelanästhesie, Beinschwäche oder radikuläre Schmerzen.",
          "cave": "Zeitkritisch wegen möglicher bleibender neurologischer Schäden.",
          "info": "Druck auf sakrale Nervenwurzeln Blasen-/Mastdarmstörung, Sattelanästhesie CAVE: zeitkritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Cauda-equina-Syndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Wirbelsäulenfraktur",
          "physiology": "Wirbelsäulenfraktur: Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "fokaler Schmerz, evtl. Neurologie. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "Instabilität. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Knochenverletzung nach Trauma/Osteoporose fokaler Schmerz, evtl. Neurologie CAVE: Instabilität.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Wirbels%C3%A4ulenfraktur%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Aortensyndrom",
          "physiology": "Aortensyndrom: Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "starker Rücken-/Brustschmerz. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "Gefäß-/neurologische Komplikationen. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Akute Aortenwandpathologie starker Rücken-/Brustschmerz CAVE: Gefäß-/neurologische Komplikationen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Aortensyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Unterbrechung der Knochenkontinuität mit lokaler Weichteilschädigung und je nach Lokalisation potenzieller Blutung oder neurovaskulärer Gefährdung.",
          "findings": "Schmerz, Schwellung, Fehlstellung, Funktionsverlust, Krepitationen; bei proximalen Frakturen relevante Blutverluste möglich.",
          "cave": "Durchblutung, Motorik und Sensibilität distal prüfen; offene Frakturen und Beckenfrakturen besonders kritisch.",
          "info": "Unterbrechung der Knochenkontinuität Fehlstellung, Schwellung, Schmerz CAVE: distal DMS prüfen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fraktur%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Tiefe Venenthrombose",
          "physiology": "Tiefe Venenthrombose: Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "einseitige Schwellung, Schmerz, Überwärmung. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "Lungenembolie. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Thrombus im tiefen Venensystem einseitige Schwellung, Schmerz, Überwärmung CAVE: Lungenembolie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Tiefe%20Venenthrombose%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Akuter arterieller Verschluss",
          "physiology": "Akuter arterieller Verschluss: Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "Schmerz, Blässe, Pulslosigkeit, Parästhesie, Parese, Kälte. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "drohender Extremitätenverlust. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Akute Ischämie der Extremität Schmerz, Blässe, Pulslosigkeit, Parästhesie, Parese, Kälte CAVE: drohender Extremitätenverlust.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Akuter%20arterieller%20Verschluss%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kompartmentsyndrom",
          "physiology": "Erhöhter Druck in Muskelloge senkt Gewebeperfusion. Neben Schmerz sind Blutverlust, Organverletzung und neurovaskuläre Begleitverletzungen zu bedenken.",
          "findings": "disproportionaler Schmerz, Schmerz bei passiver Dehnung. Mechanismus, sichtbare Verletzungen und neurovaskulärer Status entscheiden wesentlich mit.",
          "cave": "Pulse können erhalten bleiben. Okkulte Blutung und sekundäre Verschlechterung sind häufige Fallen.",
          "info": "Erhöhter Druck in Muskelloge senkt Gewebeperfusion disproportionaler Schmerz, Schmerz bei passiver Dehnung CAVE: Pulse können erhalten bleiben.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kompartmentsyndrom%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Akute Angstreaktion mit vegetativer Aktivierung. Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Herzrasen, Atemnot, Kribbeln. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Ausschluss gefährlicher somatischer Ursachen. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "Akute Angstreaktion mit vegetativer Aktivierung Herzrasen, Atemnot, Kribbeln CAVE: Ausschluss gefährlicher somatischer Ursachen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Panikattacke%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hypoglykämie",
          "physiology": "Zu niedrige Glukoseverfügbarkeit im Gehirn verursacht zunächst adrenerge und später neuroglykopenische Symptome. Bei fortschreitender Entgleisung sind Krampf und Koma möglich.",
          "findings": "Schwitzen, Tremor, Hunger, Tachykardie, Verwirrtheit, fokale Ausfälle, Krampf oder Bewusstlosigkeit. Klinisch relevant häufig bei BZ <70 mg/dl (3,9 mmol/l).",
          "cave": "Kann einen Schlaganfall imitieren. Nach initialer Korrektur sind Rebound-Verläufe unter lang wirksamen Antidiabetika möglich.",
          "info": "Adrenerge Aktivierung durch Glukosemangel Unruhe, Schwitzen, Tremor CAVE: BZ messen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypoglyk%C3%A4mie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Stimulanzienintoxikation",
          "physiology": "Stimulanzienintoxikation: Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Mydriasis, Tachykardie, Hypertonie, Hyperthermie. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Arrhythmie/Hyperthermie. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "Sympathomimetische Überaktivierung Mydriasis, Tachykardie, Hypertonie, Hyperthermie CAVE: Arrhythmie/Hyperthermie.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Stimulanzienintoxikation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Delir",
          "physiology": "Delir: Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Aufmerksamkeitsstörung, Desorientierung, Unruhe. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Infekt, Hypoxie, Entzug. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "Akute fluktuierende Hirnfunktionsstörung Aufmerksamkeitsstörung, Desorientierung, Unruhe CAVE: Infekt, Hypoxie, Entzug.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Delir%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Opioidrezeptorwirkung unterdrückt Atemantrieb. Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Miosis, Bradypnoe, Vigilanzminderung. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Atemdepression und Rezidiv nach Antagonisierung. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "Opioidrezeptorwirkung unterdrückt Atemantrieb Miosis, Bradypnoe, Vigilanzminderung CAVE: Atemdepression und Rezidiv nach Antagonisierung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Opioidintoxikation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Alkoholintoxikation",
          "physiology": "Alkoholintoxikation: Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Ataxie, Erbrechen, Somnolenz. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Trauma, Hypoglykämie und Mischintoxikation. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "Ethanol wirkt ZNS-dämpfend Ataxie, Erbrechen, Somnolenz CAVE: Trauma, Hypoglykämie und Mischintoxikation.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Alkoholintoxikation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Benzodiazepinintoxikation",
          "physiology": "Benzodiazepinintoxikation: Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Müdigkeit, Ataxie, verwaschene Sprache. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "Mischintoxikation/Atemwegsrisiko. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "GABA-vermittelte ZNS-Depression Müdigkeit, Ataxie, verwaschene Sprache CAVE: Mischintoxikation/Atemwegsrisiko.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Benzodiazepinintoxikation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Kohlenmonoxidvergiftung",
          "physiology": "CO blockiert Hämoglobin und beeinträchtigt zelluläre Atmung. Organische Ursachen und respiratorische bzw. hämodynamische Auswirkungen müssen mitbeurteilt werden.",
          "findings": "Kopfschmerz, Übelkeit, Verwirrtheit. Pupillen, Vigilanz, BZ und Toxidrom-Zeichen können entscheidende Hinweise geben.",
          "cave": "gewöhnliche Pulsoxymetrie kann unauffällig sein. Eine scheinbar psychische Symptomatik kann organisch oder toxisch bedingt sein.",
          "info": "CO blockiert Hämoglobin und beeinträchtigt zelluläre Atmung Kopfschmerz, Übelkeit, Verwirrtheit CAVE: gewöhnliche Pulsoxymetrie kann unauffällig sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Kohlenmonoxidvergiftung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Virale subglottische Schleimhautschwellung, meist bei Kleinkindern, mit inspiratorischer Behinderung.",
          "findings": "Bellender Husten, Heiserkeit, inspiratorischer Stridor – häufig nachts.",
          "cave": "Ruhe-Stridor, Einziehungen oder Erschöpfung deuten auf schwereren Verlauf hin.",
          "info": "Virale subglottische Schwellung bellender Husten, Stridor, Heiserkeit CAVE: Stridor in Ruhe.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Pseudokrupp%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Bronchiolitis",
          "physiology": "Virale Entzündung kleiner Atemwege vor allem im Säuglingsalter. Kinder kompensieren oft lange und können dann abrupt dekompensieren.",
          "findings": "Tachypnoe, Einziehungen, Giemen, Trinkschwäche. Warnzeichen sind Trinkschwäche, Einziehungen, schlechte Rekapillarisierung und Apathie.",
          "cave": "Apnoe bei jungen Säuglingen. Kinder können trotz anfangs unauffälliger Werte rasch dekompensieren.",
          "info": "Virale Entzündung kleiner Atemwege vor allem im Säuglingsalter Tachypnoe, Einziehungen, Giemen, Trinkschwäche CAVE: Apnoe bei jungen Säuglingen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Bronchiolitis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Fremdkörperaspiration",
          "physiology": "Ein aspiriertes Material verlegt die Atemwege teilweise oder vollständig. Dadurch drohen akute Ventilationsstörung und Erstickung.",
          "findings": "Plötzlicher Hustenanfall, Stridor, Dyspnoe, Sprechunfähigkeit oder einseitig abgeschwächtes Atemgeräusch je nach Lokalisation.",
          "cave": "Bei vollständiger Verlegung sind fehlendes Sprechen/Husten und rasche Zyanose hochkritisch.",
          "info": "Mechanische Bronchus- oder Kehlkopfverlegung plötzlicher Husten, einseitiges Giemen oder Stridor CAVE: vollständige Verlegung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fremdk%C3%B6rperaspiration%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Asthma",
          "physiology": "Asthma: Kinder kompensieren oft lange und können dann abrupt dekompensieren.",
          "findings": "Giemen, verlängertes Exspirium. Warnzeichen sind Trinkschwäche, Einziehungen, schlechte Rekapillarisierung und Apathie.",
          "cave": "Erschöpfung/stille Lunge. Kinder können trotz anfangs unauffälliger Werte rasch dekompensieren.",
          "info": "Bronchospasmus und Schleimhautschwellung Giemen, verlängertes Exspirium CAVE: Erschöpfung/stille Lunge.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Asthma%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Virale Infektion: Kinder kompensieren oft lange und können dann abrupt dekompensieren.",
          "findings": "Fieber, Husten, Rhinorrhö. Warnzeichen sind Trinkschwäche, Einziehungen, schlechte Rekapillarisierung und Apathie.",
          "cave": "Trinkmangel. Kinder können trotz anfangs unauffälliger Werte rasch dekompensieren.",
          "info": "Immunreaktion auf viralen Erreger Fieber, Husten, Rhinorrhö CAVE: Trinkmangel.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Virale%20Infektion%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Meningitis / Sepsis",
          "physiology": "Invasive Infektion mit systemischer Organstörung. Kinder kompensieren oft lange und können dann abrupt dekompensieren.",
          "findings": "Apathie, Rekapillarisierungsstörung, Fieber oder Hypothermie. Warnzeichen sind Trinkschwäche, Einziehungen, schlechte Rekapillarisierung und Apathie.",
          "cave": "junge Säuglinge können unspezifisch sein. Kinder können trotz anfangs unauffälliger Werte rasch dekompensieren.",
          "info": "Invasive Infektion mit systemischer Organstörung Apathie, Rekapillarisierungsstörung, Fieber oder Hypothermie CAVE: junge Säuglinge können unspezifisch sein.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Meningitis%20/%20Sepsis%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Fieberkrampf",
          "physiology": "Krampfanfall im Säuglings- oder Kleinkindalter im Zusammenhang mit Fieber ohne primäre ZNS-Infektion.",
          "findings": "Generalisierter Anfall bei fieberhaftem Infekt, danach oft rasche Erholung.",
          "cave": "Komplexe, fokale, prolongierte oder wiederholte Anfälle erfordern besondere Aufmerksamkeit; Meningitis differenzialdiagnostisch bedenken.",
          "info": "Anfall bei fieberhafter Erkrankung im typischen Kindesalter generalisierter Krampfanfall CAVE: prolongierte oder fokale Anfälle.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Fieberkrampf%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Dehydratation",
          "physiology": "Dehydratation: Kinder kompensieren oft lange und können dann abrupt dekompensieren.",
          "findings": "trockene Schleimhäute, reduzierte Diurese. Warnzeichen sind Trinkschwäche, Einziehungen, schlechte Rekapillarisierung und Apathie.",
          "cave": "Kreislaufversagen. Kinder können trotz anfangs unauffälliger Werte rasch dekompensieren.",
          "info": "Flüssigkeitsdefizit nach Diarrhö/Erbrechen trockene Schleimhäute, reduzierte Diurese CAVE: Kreislaufversagen.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Dehydratation%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
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
          "physiology": "Überwärmung mit Versagen der Thermoregulation und ZNS-Beteiligung.",
          "findings": "Sehr hohe Körpertemperatur, Verwirrtheit, Tachykardie, trockene oder stark verschwitzte Haut – je nach Form.",
          "cave": "Bewusstseinsstörung macht die Situation hochkritisch.",
          "info": "Thermoregulatorisches Versagen mit ZNS-Dysfunktion schwere Hyperthermie, Verwirrtheit, Kollaps CAVE: sofortige Kühlung ist zeitkritisch.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hitzschlag%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hitzeerschöpfung",
          "physiology": "Hitzeerschöpfung: Temperatur, Toxine und Expositionsdauer bestimmen die physiologischen Folgen.",
          "findings": "Schwäche, Schwindel, Schwitzen. Exposition, Temperatur und Bewusstseinslage miterheben.",
          "cave": "ZNS-Störung weist auf Hitzschlag. Bewusstseinsstörung oder instabile Vitalparameter sind Alarmzeichen.",
          "info": "Volumen-/Salzverlust bei Hitze Schwäche, Schwindel, Schwitzen CAVE: ZNS-Störung weist auf Hitzschlag.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hitzeersch%C3%B6pfung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "Hypothermie",
          "physiology": "Abfall der Körperkerntemperatur verlangsamt Stoffwechsel, Reizleitung und Kreislauffunktion.",
          "findings": "Kälte, Zittern bis Apathie, Bradykardie, Koagulopathie, Bewusstseinsstörung.",
          "cave": "Schonender Umgang; schwere Hypothermie kann vitale Zeichen schwer erkennbar machen.",
          "info": "Körperkerntemperatur unter 35 °C Zittern, später Bewusstseinseintrübung und Bradykardie CAVE: schonend bewegen, Arrhythmiegefahr.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=Hypothermie%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        },
        {
          "name": "CO-Vergiftung",
          "physiology": "CO-Vergiftung: Temperatur, Toxine und Expositionsdauer bestimmen die physiologischen Folgen.",
          "findings": "Kopfschmerz, Übelkeit, Synkope. Exposition, Temperatur und Bewusstseinslage miterheben.",
          "cave": "Eigenschutz und normale SpO₂ trotz Vergiftung. Bewusstseinsstörung oder instabile Vitalparameter sind Alarmzeichen.",
          "info": "Exposition durch Abgase/Heizgeräte Kopfschmerz, Übelkeit, Synkope CAVE: Eigenschutz und normale SpO₂ trotz Vergiftung.",
          "sourceUrl": "https://pubmed.ncbi.nlm.nih.gov/?term=CO-Vergiftung%20review%20diagnosis",
          "sourceLabel": "Fachliteratur auf PubMed suchen"
        }
      ]
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
