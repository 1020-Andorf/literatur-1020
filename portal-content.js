
window.OST_DEFAULT_CONTENT = {
  abcde: [
    { id:'a', icon:'A', title:'Airway', subtitle:'Atemweg sichern und beurteilen', checks:['Spricht der Patient?','Atemwegsverlegung?','Stridor, Fremdkörper, Schwellung?'], actions:['Atemweg freimachen','Absaugen vorbereiten','Atemwegshilfen / LTS-D nach Standard'], pitfalls:['Atemweg nicht früh genug priorisiert','Zervikale Stabilisierung bei Trauma vergessen'] },
    { id:'b', icon:'B', title:'Breathing', subtitle:'Atmung und Oxygenierung', checks:['AF, Atemmuster, Thoraxexkursion','SpO₂, Hautkolorit, Auskultation','Dyspnoe, Zyanose, Atemgeräusche'], actions:['Sauerstoffgabe','Beutel-Maskenbeatmung','Lagerung / Thorax beurteilen'], pitfalls:['Zu späte O₂-Gabe','Unzureichende Reevaluation'] },
    { id:'c', icon:'C', title:'Circulation', subtitle:'Kreislauf und Perfusion', checks:['Puls, RR, Rekap-Zeit','starke Blutung?','Haut, Temperatur, Schockzeichen'], actions:['Blutstillung','Lagerung','i.v./i.o.-Zugang nach Standard'], pitfalls:['Blutung übersehen','Schockzeichen nicht erkannt'] },
    { id:'d', icon:'D', title:'Disability', subtitle:'Neurologischer Status', checks:['Bewusstsein (AVPU/GCS)','Pupillen, BZ, FAST','Krampfaktivität / neurologische Defizite'], actions:['BZ kontrollieren','FAST / Stroke-Screening','Ursachen für Bewusstseinsstörung bedenken'], pitfalls:['Hypoglykämie nicht ausgeschlossen','Neurologie zu spät erhoben'] },
    { id:'e', icon:'E', title:'Exposure', subtitle:'Gesamtkörper und Umfeld', checks:['Inspektion, Temperatur, Verletzungen','SAMPLE(R), OPQRST','Umgebung / Wärmeerhalt'], actions:['Ganzkörperuntersuchung','Wärmeerhalt','gezielte Anamnese'], pitfalls:['Wärmeerhalt vergessen','Relevante Verletzungen übersehen'] }
  ],
  differential: [
    { id:'dyspnoe', icon:'🫁', title:'Dyspnoe', causes:['Asthma/COPD','Anaphylaxie','Lungenödem','Pneumothorax','LE'], questions:['Seit wann? Auslöser?','Thoraxschmerz? Allergie? Fieber?','Bekannte Vorerkrankungen?'], redflags:['stille Lunge','Zyanose','SpO₂-Abfall','Erschöpfung'] },
    { id:'chest', icon:'❤', title:'Thoraxschmerz', causes:['ACS','Aortensyndrom','LE','Pneumothorax','Muskuloskeletal'], questions:['Druck/Stechen? Ausstrahlung?','Belastungsabhängig?','Begleitsymptome?'], redflags:['Hypotonie','kaltschweißig','Dyspnoe','neurologische Defizite'] },
    { id:'neuro', icon:'🧠', title:'Bewusstseinsstörung', causes:['Hypoglykämie','Intoxikation','Krampfanfall','Schlaganfall','Sepsis'], questions:['Letzter normaler Zustand?','BZ? Trauma? Medikamente?','Krampf beobachtet?'], redflags:['GCS sinkt','unilaterale Zeichen','Ateminsuffizienz'] },
    { id:'synkope', icon:'⚡', title:'Synkope', causes:['vasovagal','kardial','orthostatisch','Hypovolämie'], questions:['Belastung? Prodromi?','Palpitationen?','Verletzungen?'], redflags:['plötzlich ohne Vorwarnung','bei Belastung','Brustschmerz'] },
    { id:'abdomen', icon:'🩺', title:'Bauchschmerz', causes:['GI','AAA','Sepsis','Galle','Appendizitis'], questions:['Lokalisation? OPQRST?','Erbrechen/Diarrhoe?','Schwangerschaft?'], redflags:['Abwehrspannung','Schock','teerstuhl/blutig'] },
    { id:'allergy', icon:'💉', title:'Allergische Reaktion', causes:['Anaphylaxie','lokale Reaktion','Medikamentenreaktion'], questions:['Auslöser? Stich? Essen?','Dyspnoe? Haut? Kreislauf?','Autoinjektor vorhanden?'], redflags:['Stridor','Hypotonie','progrediente Urtikaria'] },
    { id:'stroke', icon:'🕒', title:'Schlaganfall', causes:['ischämisch','hämorrhagisch','Stroke mimics'], questions:['Last seen well?','FAST positiv?','Antikoagulation?'], redflags:['neurologische Defizite','Kopfschmerz','Krampfanfall'] },
    { id:'trauma', icon:'🩹', title:'Trauma', causes:['SHT','Thoraxtrauma','Abdomen','Fraktur','Blutung'], questions:['Mechanismus? Höhe? Geschwindigkeit?','Schutzhelm? Gurt?','Schmerzlokalisation?'], redflags:['instabiler Kreislauf','Atemnot','Bewusstseinsstörung'] }
  ],
  skills: [
    {name:'Blutstillung', group:'EE'}, {name:'MILS', group:'EE'}, {name:'Helmabnahme', group:'A'}, {name:'Atemwege freimachen', group:'A'}, {name:'Atemwege freihalten', group:'A'},
    {name:'Sauerstoffgabe', group:'B'}, {name:'Beutel-Maskenbeatmung', group:'B'}, {name:'LTS-D', group:'B'}, {name:'Herzdruckmassage', group:'C'}, {name:'Defibrillation', group:'C'},
    {name:'Lagerung', group:'C'}, {name:'Extremitätenschienung', group:'E'}, {name:'HWS-Schienung', group:'E'}, {name:'Ganzkörperimmobilisation', group:'E'}, {name:'Schaufeltrage / 5-Helfer-Methode', group:'E'},
    {name:'Wundversorgung', group:'E'}, {name:'EKG', group:'NFS'}, {name:'i.v. Zugang', group:'NFS'}, {name:'AML Vorbereitung', group:'NFS'}, {name:'AML Applikation', group:'NFS'}, {name:'BZ-Messung', group:'D'}
  ],
  skillDetails: {
    'Blutstillung': {indikation:['starke äußere Blutung','traumatischer Blutverlust'], material:['Handschuhe','Druckverband / Tourniquet'], ablauf:['Blutung lokalisieren','direkter Druck','Druckverband / TQ nach Standard','Kontrolle und Dokumentation']},
    'MILS': {indikation:['Traumapatient mit möglicher HWS-Beteiligung'], material:['Helfer/in','ggf. HWS-Schiene'], ablauf:['Kopf in Neutralposition sichern','manuelle Stabilisierung halten','weitere Maßnahmen ermöglichen']},
    'Sauerstoffgabe': {indikation:['Hypoxämie','Dyspnoe','Schock'], material:['O₂-Flasche','Maske / Nasensonde'], ablauf:['Indikation prüfen','passendes System wählen','Flow einstellen','Wirkung reevaluieren']}
  }
};
