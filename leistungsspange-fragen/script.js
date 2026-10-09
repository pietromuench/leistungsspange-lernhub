const CARDS = [
  { cat: "Gesellschaft/Politik", q: "Was heißt die Abkürzung „BRD"?", a: "Bundesrepublik Deutschland" },
  { cat: "Gesellschaft/Politik", q: "Wann wurde die Bundesrepublik Deutschland gegründet?", a: "Am 23. Mai 1949 auf Grundlage des Grundgesetzes" },
  { cat: "Gesellschaft/Politik", q: "Welcher andere deutsche Staat entstand im gleichen Jahr am 7. Oktober?", a: "Die Deutsche Demokratische Republik (DDR), am 7. Oktober 1949" },
  { cat: "Gesellschaft/Politik", q: "Welche Staatsform herrscht in der BRD?", a: "Parlamentarische Demokratie" },
  { cat: "Gesellschaft/Politik", q: "Erklärt den Begriff „parlamentarische Demokratie"!", a: "Demokratie = Volksherrschaft, alle Macht geht vom Volk aus. Parlamentarisch: das Volk wählt seine Vertreter in ein Parlament." },
  { cat: "Gesellschaft/Politik", q: "Wie heißt das Parlament der BRD und wo hat es seinen Sitz?", a: "Deutscher Bundestag, Sitz im Reichstag in Berlin" },
  { cat: "Gesellschaft/Politik", q: "Welche politische Funktion hat die Stadt Berlin?", a: "Berlin ist die Bundeshauptstadt" },
  { cat: "Gesellschaft/Politik", q: "Wer wählt das deutsche Parlament?", a: "Alle wahlberechtigten Bürgerinnen und Bürger der BRD" },
  { cat: "Gesellschaft/Politik", q: "Welchen Titel trägt das Staatsoberhaupt der BRD? Wie heißt die Person zurzeit?", a: "Bundespräsident – Frank-Walter Steinmeier" },
  { cat: "Gesellschaft/Politik", q: "Welchen Titel trägt der Regierungschef der BRD? Wie heißt die Person zurzeit?", a: "Bundeskanzler – Friedrich Merz" },
  { cat: "Gesellschaft/Politik", q: "Wie viele Bundesländer hat die BRD? Nennt mind. fünf mit Hauptstadt!", a: "16 Bundesländer, z. B. Bayern–München, Sachsen–Dresden, Brandenburg–Potsdam, Hessen–Wiesbaden, Thüringen–Erfurt" },
  { cat: "Gesellschaft/Politik", q: "Nennt die drei Stadtstaaten unter den Bundesländern!", a: "Berlin, Bremen, Hamburg" },
  { cat: "Gesellschaft/Politik", q: "Wie heißt das Bundesland, in dem wir leben? Landeshauptstadt?", a: "Brandenburg, Landeshauptstadt Potsdam" },
  { cat: "Gesellschaft/Politik", q: "Welchen Titel trägt der Regierungschef von Brandenburg? Name?", a: "Ministerpräsident – Dr. Dietmar Woidke" },
  { cat: "Gesellschaft/Politik", q: "Welchen Titel trägt der Minister für Brand- und Katastrophenschutz in Brandenburg? Name?", a: "Minister des Innern und für Kommunales – Dr. Jan Redmann" },
  { cat: "Gesellschaft/Politik", q: "In welchem Landkreis leben wir? Kreisstadt?", a: "Landkreis Oberspreewald-Lausitz (OSL), Kreisstadt Senftenberg" },
  { cat: "Gesellschaft/Politik", q: "Von welchen drei Nachbarlandkreisen ist unser Landkreis umgeben?", a: "Norden: Dahme-Spreewald (LDS); Westen: Elbe-Elster (EE); Osten: Spree-Neiße (SPN)" },
  { cat: "Gesellschaft/Politik", q: "In welches Land fährt man, wenn man Brandenburg Richtung Osten verlässt?", a: "In die Republik Polen" },
  { cat: "Gesellschaft/Politik", q: "Zu welchem Landkreis gehört die Stadt Cottbus?", a: "Zu keinem – Cottbus ist eine kreisfreie Stadt" },
  { cat: "Gesellschaft/Politik", q: "In welches Bundesland kommt man, wenn man unseren Landkreis Richtung Süden verlässt?", a: "Nach Sachsen" },
  { cat: "Gesellschaft/Politik", q: "Welches Gesetz regelt alle Fragen des Brandschutzes im Land Brandenburg?", a: "Brandenburgisches Brand- und Katastrophenschutzgesetz (BbgBKG)" },
  { cat: "Gesellschaft/Politik", q: "Von wem wurde dieses Gesetz beschlossen?", a: "Vom Landtag des Landes Brandenburg" },
  { cat: "Gesellschaft/Politik", q: "Welche drei Aufgaben hat die Feuerwehr laut Gesetz?", a: "Rettung (Abwenden von Lebensgefahr), Brandbekämpfung (bei Brandgefahren beistehen), Technische Hilfeleistung (bei sonstigen Notständen helfen)" },
  { cat: "Gesellschaft/Politik", q: "Welche Arten von Feuerwehren gibt es in Brandenburg?", a: "Öffentlich: Freiwillige Feuerwehren, Berufsfeuerwehren. Nichtöffentlich: Betriebsfeuerwehren, Werkfeuerwehren" },
  { cat: "Gesellschaft/Politik", q: "Wer ist der örtliche Aufgabenträger der Freiwilligen Feuerwehr in Brandenburg?", a: "Ämter, amtsfreie Gemeinden, Verbandsgemeinden und kreisfreie Städte" },
  { cat: "Gesellschaft/Politik", q: "Was ist eine Jugendfeuerwehr?", a: "Die Jugendgruppe innerhalb einer Freiwilligen Feuerwehr" },
  { cat: "Gesellschaft/Politik", q: "Wer führt die Jugendfeuerwehr?", a: "Der Jugendfeuerwehrwart" },
  { cat: "Gesellschaft/Politik", q: "In welchen Verband sind alle Feuerwehren der BRD zusammengeschlossen?", a: "Deutscher Feuerwehrverband (DFV)" },
  { cat: "Gesellschaft/Politik", q: "Ab welchem Alter kann man in Brandenburg Mitglied der Freiwilligen Feuerwehr werden?", a: "Ab vollendetem 16. Lebensjahr" },
  { cat: "Gesellschaft/Politik", q: "Welche Notrufnummern gibt es?", a: "Feuerwehr und Rettungsdienst: 112, Polizei: 110" },
  { cat: "Gesellschaft/Politik", q: "Welche Angaben soll eine Notrufmeldung mindestens enthalten?", a: "Was ist passiert? Wo? Wie viele Personen in Gefahr? Wer meldet? Auf Rückfragen warten!" },
  { cat: "Gesellschaft/Politik", q: "Wo befindet sich die für OSL zuständige Regionalleitstelle? Name?", a: "Bei der Berufsfeuerwehr Cottbus – Leitstelle Lausitz" },
  { cat: "Gesellschaft/Politik", q: "Wer kann die Leistungsspange der DJF erwerben?", a: "JF-Mitglieder mit mind. 1 Jahr Mitgliedschaft, gültigem Ausweis, 15 Jahre im Abnahmejahr, nicht 19 Jahre im Abnahmejahr" },

  { cat: "Organisation", q: "Welche Feuerwehrdienstvorschrift regelt das Vorgehen einer Löschgruppe im Einsatz?", a: "FwDV 3: „Einheiten im Lösch- und Hilfeleistungseinsatz"" },
  { cat: "Organisation", q: "Wie viele Feuerwehrleute bilden eine Löschgruppe?", a: "Neun (1/8/9)" },
  { cat: "Organisation", q: "Welche anderen Einheiten kennen wir? Bezeichnung und Anzahl?", a: "Selbstständiger Trupp (1/2/3), Löschstaffel (1/5/6), Löschzug (1/3/18/22)" },
  { cat: "Organisation", q: "Wie heißen die einzelnen Funktionen innerhalb einer Löschgruppe?", a: "Gruppenführer, Maschinist, Melder, Angriffstruppführer, Angriffstruppmann, Wassertruppführer, Wassertruppmann, Schlauchtruppführer, Schlauchtruppmann" },
  { cat: "Organisation", q: "Wie viele Einsatzkräfte gehören zu jedem Trupp?", a: "Zwei Einsatzkräfte" },

  { cat: "Fahrzeuge", q: "Nennt ein Beispiel für ein typisches Löschgruppenfahrzeug!", a: "z. B. LF 20/16, LF 16/12, LF 10, LF 10/6 oder LF 16-TS" },
  { cat: "Fahrzeuge", q: "Was bedeutet TLF 4000?", a: "Tanklöschfahrzeug, Pumpe 2000 l/min, 4000 l Wassertank, Truppbesatzung" },
  { cat: "Fahrzeuge", q: "Was bedeutet LF 20?", a: "Löschgruppenfahrzeug, Pumpe 2000 l/min, Gruppenbesatzung, einziges mit 3-teiliger Schiebleiter" },
  { cat: "Fahrzeuge", q: "Was bedeutet TSF?", a: "Tragkraftspritzenfahrzeug, herausnehmbare Pumpe 800 l/min, Staffelbesatzung" },
  { cat: "Fahrzeuge", q: "Was bedeutet DLA(K) 23-12?", a: "Drehleiter mit Korb, Nennrettungshöhe 23 m bei Nennausladung 12 m" },
  { cat: "Fahrzeuge", q: "Abkürzungen: VRW, ELW, GW-G, MTW, NEF, RTH?", a: "Vorausrüstwagen, Einsatzleitwagen, Gerätewagen-Gefahrgut, Mannschaftstransportwagen, Notarzteinsatzfahrzeug, Rettungshubschrauber" },
  { cat: "Fahrzeuge", q: "Woran erkennt man ein Feuerwehrfahrzeug auf Einsatzfahrt?", a: "Blaulicht und Signalhorn (Martinshorn)" },
  { cat: "Fahrzeuge", q: "Was verbirgt sich hinter PFPN 10-1000?", a: "Portable Feuerlöschkreiselpumpe Normaldruck, 1000 l/min bei 10 bar" },

  { cat: "Geräte", q: "Welche zwei Gruppen von Feuerwehrschläuchen unterscheiden wir?", a: "Saugschläuche und Druckschläuche" },
  { cat: "Geräte", q: "Welche Größen gibt es bei Schläuchen?", a: "A, B, C und D" },
  { cat: "Geräte", q: "Wie lang kann ein genormter C-Druckschlauch sein?", a: "15 m oder 20 m" },
  { cat: "Geräte", q: "Wie lang kann ein genormter B-Druckschlauch sein?", a: "5 m, 20 m oder 35 m" },
  { cat: "Geräte", q: "Wodurch unterscheiden sich Feuerwehrleinen von Arbeitsleinen?", a: "Farbgebung: weiß = Feuerwehrleine, rot = Arbeitsleine" },
  { cat: "Geräte", q: "Wozu wird eine Feuerwehrleine verwendet?", a: "Menschenrettung, Selbstretten, Hochziehen von Geräten, Sicherungsleine, Kennzeichnung Rückzugsweg" },
  { cat: "Geräte", q: "Welche genormten tragbaren Leitern gibt es?", a: "Klappleiter, Steckleiter, dreiteilige Schiebleiter, Hakenleiter, Multifunktionsleiter" },
  { cat: "Geräte", q: "Welche Kleinlöschgeräte werden unterschieden?", a: "Kübelspritze, Feuerlöscher, Löschdecke, Löscheimer, Brandklatsche" },
  { cat: "Geräte", q: "Was ist eine Kübelspritze?", a: "Tragbares Löschgerät mit Handkolbenpumpe, 5 m D-Schlauch, 10 Liter Wasser" },
  { cat: "Geräte", q: "Welche Arten von Feuerlöschern gibt es?", a: "Wasserlöscher, Schaumlöscher, Pulverlöscher ABC, Metallbrand-Pulverlöscher D, Kohlendioxidlöscher" },

  { cat: "Löschmittel", q: "Welche Voraussetzungen müssen vorliegen, damit etwas brennen kann?", a: "Brennbarer Stoff, Sauerstoff, Zündtemperatur, richtiges Mengenverhältnis (Verbrennungsdreieck)" },
  { cat: "Löschmittel", q: "Welche fünf Brandklassen gibt es?", a: "A: feste Stoffe. B: flüssige Stoffe. C: Gase. D: Metalle. F: Speiseöle/-fette" },
  { cat: "Löschmittel", q: "Welche beiden grundsätzlichen Löschwirkungen gibt es?", a: "Abkühlen und Ersticken" },
  { cat: "Löschmittel", q: "Welches ist das Hauptlöschmittel bei der Feuerwehr?", a: "Wasser" },
  { cat: "Löschmittel", q: "Welche Vorteile hat Wasser als Löschmittel?", a: "Fast überall vorhanden, preiswert, hohe Wärmeaufnahme, ungiftig, chemisch neutral, große Wurfweite" },
  { cat: "Löschmittel", q: "Bei welchen Bränden darf Wasser nicht eingesetzt werden?", a: "Nicht wassermischbare Flüssigkeiten, Fettbrände, Metallbrände, Schornsteinbrände" },
  { cat: "Löschmittel", q: "Bei welchen Bränden kann Schaum eingesetzt werden?", a: "Brandklasse B und Brandklasse F" },

  { cat: "Unfallverhütung", q: "In welcher Vorschrift ist der Unfallschutz im Feuerwehrdienst geregelt?", a: "DGUV Vorschrift 49 „Feuerwehren"" },
  { cat: "Unfallverhütung", q: "Nennt die persönliche Schutzausrüstung eines JF-Mitglieds!", a: "Übungsanzug DJF, Schutzhelm, Zweidornschnalle, Schutzhandschuhe, festes Schuhwerk" },
  { cat: "Unfallverhütung", q: "In welchen Situationen gelten die Richtlinien der UVV?", a: "Ausbildung, Übung, Lehrgang, Einsatz, Dienstsport, Kameradschaftspflege, Freizeitmaßnahmen, Weg zum/vom Gerätehaus" },
  { cat: "Unfallverhütung", q: "Wo sind JF-Mitglieder gegen Unfälle versichert?", a: "Feuerwehrunfallkasse Brandenburg (FUKBB)" },
  { cat: "Unfallverhütung", q: "Darf von der DGUV Vorschrift 49 abgewichen werden?", a: "Grundsätzlich nein. Ausnahme §15 Abs.1: zur Rettung aus Lebensgefahr im Einsatz, unter Beachtung des Eigenschutzes" },
  { cat: "Unfallverhütung", q: "Was ist bei einem Unfall im Dienst zu tun?", a: "Erste Hilfe, unverzüglich melden, im Verbandbuch dokumentieren, bei schweren Verletzungen Arzt aufsuchen, Unfallanzeige binnen 3 Tagen an FUKBB" },
  { cat: "Unfallverhütung", q: "Dürfen JF-Mitglieder an Einsätzen teilnehmen?", a: "Nein, gemäß §17 Abs.3 DGUV Vorschrift 49 nicht erlaubt" },
];

const categories = ['Alle', ...Array.from(new Set(CARDS.map(c => c.cat)))];
let activeCat = 'Alle';
let order = CARDS.map((_, i) => i);
let idx = 0;
let flipped = false;
let known = {};

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function filtered() {
  return activeCat === 'Alle' ? order : order.filter(i => CARDS[i].cat === activeCat);
}

function renderCats() {
  const el = document.getElementById('cats');
  el.innerHTML = '';
  categories.forEach(c => {
    const b = document.createElement('button');
    b.className = 'cat-btn' + (c === activeCat ? ' active' : '');
    b.textContent = c;
    b.addEventListener('click', () => {
      activeCat = c;
      idx = 0;
      flipped = false;
      renderCats();
      renderCard();
    });
    el.appendChild(b);
  });
}

function renderCard() {
  const fo = filtered();
  if (idx >= fo.length) idx = 0;
  const card = CARDS[fo[idx]];

  const knownVals = Object.values(known);
  document.getElementById('cardProgress').textContent = fo.length ? `${idx + 1} / ${fo.length}` : '0 / 0';
  document.getElementById('knownCount').textContent = knownVals.filter(v => v === true).length;
  document.getElementById('unknownCount').textContent = knownVals.filter(v => v === false).length;

  if (!card) {
    document.getElementById('cardLabel').textContent = '';
    document.getElementById('cardText').textContent = 'Keine Karten in dieser Kategorie.';
    return;
  }

  document.getElementById('cardLabel').textContent = card.cat + (flipped ? ' — Antwort' : ' — Frage');
  document.getElementById('cardText').textContent = flipped ? card.a : card.q;
}

document.getElementById('flashcard').addEventListener('click', () => {
  flipped = !flipped;
  renderCard();
});

function next() {
  flipped = false;
  const fo = filtered();
  idx = (idx + 1) % fo.length;
  renderCard();
}

function prev() {
  flipped = false;
  const fo = filtered();
  idx = (idx - 1 + fo.length) % fo.length;
  renderCard();
}

function markKnown(val) {
  const fo = filtered();
  known[fo[idx]] = val;
  next();
}

document.getElementById('btnNope').addEventListener('click', () => markKnown(false));
document.getElementById('btnYep').addEventListener('click', () => markKnown(true));
document.getElementById('btnPrev').addEventListener('click', prev);
document.getElementById('btnNextCard').addEventListener('click', next);
document.getElementById('btnShuffle').addEventListener('click', () => {
  order = shuffleArr(CARDS.map((_, i) => i));
  idx = 0;
  flipped = false;
  renderCard();
});
document.getElementById('btnReset').addEventListener('click', () => {
  order = CARDS.map((_, i) => i);
  activeCat = 'Alle';
  idx = 0;
  flipped = false;
  known = {};
  renderCats();
  renderCard();
});

renderCats();
renderCard();
