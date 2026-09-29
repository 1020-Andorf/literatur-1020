
window.PORTAL_DEFAULTS = {
  abcde: {
    title: 'ABCDE-Schema',
    sections: [
      {
        key: 'A', title: 'Airway', accent: '#ef4444', subtitle: 'Atemweg beurteilen und sichern',
        intro: 'Atemweg prüfen, Verlegung erkennen und rasch sichern.',
        assessment: ['Spricht der Patient frei?', 'Stridor, Schnarchen, Gurgeln?', 'Atemweg frei oder verlegt?', 'HWS-Schutz falls Trauma?'],
        measures: ['Atemweg freimachen / absaugen', 'Kopf überstrecken bzw. Esmarch-Handgriff', 'Guedel / Wendl nach Indikation', 'Frühzeitig Hilfe und Material vorbereiten'],
        redflags: ['Keine Spontanatmung', 'Massive Schwellung / Anaphylaxie', 'Erbrochenes / Aspiration', 'Bewusstseinsstörung mit Schutzreflexverlust'],
        remember: 'A kommt zuerst: Ohne freien Atemweg hilft der Rest des Schemas nicht.'
      },
      {
        key: 'B', title: 'Breathing', accent: '#2d8cff', subtitle: 'Atmung und Oxygenierung einschätzen',
        intro: 'Atmung beurteilen, Oxygenierung verbessern und ventilatorische Probleme erkennen.',
        assessment: ['AF, Atemtiefe, Atemmuster', 'SpO₂ und Hautkolorit', 'Auskultation / Thoraxbewegung', 'Atemnot, Zyanose, Einsatz Atemhilfsmuskulatur'],
        measures: ['Sauerstoffgabe nach Bedarf', 'Beutel-Masken-Beatmung vorbereiten', 'Lagerung optimieren', 'Atemwegserweiterung / Bronchodilatation nach SOP'],
        redflags: ['Silent chest', 'SpO₂ trotz O₂ weiter niedrig', 'Thoraxasymmetrie', 'Erschöpfung / respiratorische Insuffizienz'],
        remember: 'B fragt: Reicht die Atmung für Oxygenierung und Ventilation?'
      },
      {
        key: 'C', title: 'Circulation', accent: '#12b76a', subtitle: 'Kreislaufstatus und Perfusion',
        intro: 'Perfusion, Blutung und hämodynamische Stabilität beurteilen.',
        assessment: ['HF, RR, Haut, Rekap-Zeit', 'starke Blutung?', 'Schockzeichen?', '12-Kanal / Monitoring nach Lage'],
        measures: ['Blutstillung', 'i.v./i.o. Zugang vorbereiten', 'Schocklagerung / Wärmeerhalt', 'Volumentherapie / Medikamente nach SOP'],
        redflags: ['Massive Blutung', 'Hypotonie', 'Tachykardie mit schlechter Perfusion', 'kaltschweißige Haut / Vigilanzabfall'],
        remember: 'C entscheidet häufig über Zeitdruck und Transportpriorität.'
      },
      {
        key: 'D', title: 'Disability', accent: '#8b5cf6', subtitle: 'Neurologie, GCS, BZ',
        intro: 'Neurologischen Status rasch einschätzen und reversible Ursachen suchen.',
        assessment: ['AVPU / GCS', 'Pupillen', 'BZ messen', 'Krampf, Fokus, FAST?'],
        measures: ['BZ-Korrektur nach SOP', 'Anfallsmanagement', 'Schneller Transport bei neurologischem Defizit', 'Reevaluation nach Intervention'],
        redflags: ['Hypoglykämie', 'neurologische Ausfälle', 'Krampfanfall', 'rasche Vigilanzverschlechterung'],
        remember: 'D = Denken: ZNS, Glukose und Bewusstsein.'
      },
      {
        key: 'E', title: 'Exposure', accent: '#f59e0b', subtitle: 'Ganzkörpercheck und Umfeld',
        intro: 'Patient komplett beurteilen, Umfeld einbeziehen und Wärmeerhalt beachten.',
        assessment: ['Ganzkörperinspektion', 'SAMPLE(R) / OPQRST', 'Temperatur / Umweltfaktoren', 'Schmerz, Haut, Verletzungen'],
        measures: ['Entkleiden soweit nötig', 'Wärmeerhalt', 'sekundärer Survey', 'gezielte Dokumentation und Reevaluation'],
        redflags: ['versteckte Blutung / Verletzung', 'Hypothermie', 'kritische Schmerzen', 'toxikologische Hinweise'],
        remember: 'E ergänzt das Gesamtbild – ohne den Patienten auszukühlen.'
      }
    ]
  },
  differential: {
    title: 'Differentialdiagnostik',
    groups: [
      {
        title: 'Dyspnoe', icon: '🫁', accent: '#2d8cff',
        items: [
          {name:'Asthma / COPD', questions:['pfeifende Atmung?', 'bekannte Vorerkrankung?', 'Medikation vorhanden?'], redFlags:['silent chest', 'Sprechdyspnoe', 'Zyanose']},
          {name:'Anaphylaxie', questions:['Allergenexposition?', 'Urtikaria / Schwellung?', 'Autoinjektor?'], redFlags:['Stridor', 'Hypotonie', 'rasche Progression']},
          {name:'Lungenödem', questions:['orthopnoe?', 'kardiale Anamnese?', 'Schaumiger Auswurf?'], redFlags:['schwere Hypoxie', 'kaltschweißig', 'RR hoch/niedrig mit Erschöpfung']},
          {name:'Pneumothorax', questions:['plötzlicher Beginn?', 'Trauma?', 'einseitige Thoraxschmerzen?'], redFlags:['Thoraxasymmetrie', 'gestaute Halsvenen', 'rasche Dekompensation']}
        ]
      },
      {
        title: 'Brustschmerz', icon: '❤️', accent: '#ef4444',
        items: [
          {name:'ACS / STEMI', questions:['Druck / Enge?', 'Ausstrahlung?', 'Risikofaktoren?'], redFlags:['kaltschweißig', 'Hypotonie', 'Rhythmusstörung']},
          {name:'Aortendissektion', questions:['plötzlich maximaler Schmerz?', 'wandernd?', 'Blutdruckseitenvergleich?'], redFlags:['neurologische Defizite', 'Synkope', 'Schock']},
          {name:'Lungenembolie', questions:['Dyspnoe?', 'Immobilisation / TVT?', 'pleuritische Schmerzen?'], redFlags:['Tachykardie', 'Hypoxie', 'Kollaps']},
          {name:'Pneumothorax', questions:['einseitig stechend?', 'Trauma?', 'Dyspnoe?'], redFlags:['Spannungspneumothorax-Zeichen']}
        ]
      },
      {
        title: 'Bewusstseinsstörung', icon: '🧠', accent: '#8b5cf6',
        items: [
          {name:'Hypoglykämie', questions:['BZ?', 'Diabetes?', 'letzte Mahlzeit?'], redFlags:['Krampf', 'Bewusstlosigkeit']},
          {name:'Schlaganfall', questions:['FAST?', 'last seen well?', 'Antikoagulation?'], redFlags:['plötzlicher Beginn', 'Pupillendifferenz', 'Aspirationsrisiko']},
          {name:'Intoxikation', questions:['Tabletten / Drogen?', 'Geruch?', 'Umfeld?'], redFlags:['Atemdepression', 'unklare Substanz', 'Suizidversuch']},
          {name:'Krampfanfall / postiktal', questions:['Zeugenbericht?', 'bekannte Epilepsie?', 'Verletzungen?'], redFlags:['Status epilepticus', 'anhaltende Bewusstlosigkeit']}
        ]
      },
      {
        title: 'Bauchschmerz', icon: '🩺', accent: '#14b8a6',
        items: [
          {name:'Akutes Abdomen', questions:['Lokalisation?', 'Peritonismus?', 'Erbrechen?'], redFlags:['Abwehrspannung', 'Schock']},
          {name:'GI-Blutung', questions:['Meläna / Hämatemesis?', 'Antikoagulation?'], redFlags:['Hypotonie', 'Tachykardie', 'Blässe']},
          {name:'AAA', questions:['Rückenschmerz?', 'plötzlich?', 'bekannte Gefäßerkrankung?'], redFlags:['Kollaps', 'Schock', 'pulsierende Resistenz']},
          {name:'Renale Kolik', questions:['kolikartig?', 'Ausstrahlung?', 'Mikrohämaturie?'], redFlags:['Fieber', 'Anurie', 'starke Unruhe']}
        ]
      }
    ]
  },
  skilltraining: {
    title: 'Skilltraining',
    skills: [
      {name:'Sauerstoffgabe', category:'Atmung', accent:'#2d8cff', indication:['SpO₂ niedrig', 'Dyspnoe', 'Schock / ACS nach SOP'], steps:['Patientenlage optimieren', 'Ziel und Flow festlegen', 'passendes System wählen', 'Wirkung reevaluieren'], pitfalls:['zu spät begonnen', 'Flow nicht angepasst', 'keine Reevaluation']},
      {name:'Beutel-Masken-Beatmung', category:'Airway', accent:'#2d8cff', indication:['unzureichende Spontanatmung', 'Apnoe', 'präoxygenieren'], steps:['Material vorbereiten', 'Maske dicht halten', 'adäquate Frequenz / Volumen', 'Thoraxhub kontrollieren'], pitfalls:['Leckage', 'zu hohe Frequenz', 'Mageninsufflation']},
      {name:'Adrenalin i.m. bei Anaphylaxie', category:'NFS', accent:'#ef4444', indication:['schwere Anaphylaxie', 'Atemwegsbeteiligung', 'Hypotonie'], steps:['Indikation prüfen', 'Dosis nach SOP', 'i.m. Gabe lateral am Oberschenkel', 'Wirkung und RR reevaluieren'], pitfalls:['zu zögerlich', 'falscher Applikationsweg', 'keine Wiederholung erwogen']},
      {name:'Blutzuckermessung', category:'Diagnostik', accent:'#8b5cf6', indication:['Bewusstseinsstörung', 'Krampfanfall', 'Diabetesverdacht'], steps:['Material vorbereiten', 'Hygiene', 'Kapillarblut gewinnen', 'Wert interpretieren und dokumentieren'], pitfalls:['keine Hygiene', 'Messfehler', 'Wert nicht in Kontext gesetzt']},
      {name:'Helmabnahme', category:'Trauma', accent:'#f59e0b', indication:['Atemweg gefährdet', 'Reanimation', 'Erbrechen / Monitoring nötig'], steps:['2-Helfer-Technik', 'HWS-Schutz', 'Visier / Kinnriemen lösen', 'Helm achsengerecht entfernen'], pitfalls:['HWS-Schutz verloren', 'unklare Rollenverteilung', 'zu hastig']},
      {name:'Defibrillation', category:'Reanimation', accent:'#12b76a', indication:['VF/pVT', 'Algorithmus fordert Schock'], steps:['Pads korrekt platzieren', 'Rhythmus analysieren', 'Umfeld sichern', 'Schock auslösen und sofort weiter CPR'], pitfalls:['Sicherheitsansage fehlt', 'Unterbrechung zu lang', 'Pads schlecht positioniert']}
    ]
  }
};
