document.querySelectorAll('.tab-nav button').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.tab-nav button').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    document.getElementById('p-' + b.dataset.p).classList.add('active');
  });
});

const QUIZ = [
  { q: "Ihr steht bereit, die Gruppe soll zur ersten Station marschieren. Was ist dein erster Befehl?",
    a: "„Gruppe, stillgestanden!"\ndann „Rechts/Links um!"\ndann „Ohne Tritt – Marsch!" (oder „Im Gleichschritt – Marsch!")",
    key: ["gruppe stillgestanden", "rechts um", "marsch"] },
  { q: "Ihr seid an der Station angekommen, die Gruppe läuft noch. Was befiehlst du?",
    a: "„Gruppe, Halt!"\n„Rechts/Links um!"\n„Gruppe OSL …, in einer Reihe zu ein oder zwei Gliedern angetreten!"",
    key: ["gruppe halt", "rechts um", "in einer reihe", "angetreten"] },
  { q: "Die Gruppe steht ordentlich vor dem Wertungsrichter zur Disziplin Staffellauf. Meldung?",
    a: "„Gruppe OSL …, bereit zur Abnahme der Disziplin Staffellauf!"",
    key: ["bereit zur abnahme", "staffellauf"] },
  { q: "Die Disziplin Kugelstoßen ist beendet, ihr steht wieder ordentlich. Was meldest du?",
    a: "„Gruppe OSL … hat die Disziplin Kugelstoßen beendet!"",
    key: ["hat die disziplin", "kugelstoßen", "beendet"] },
  { q: "Bei der Fragenbeantwortung: die Gruppe soll sich hinsetzen und die Helme absetzen. Was befiehlst du?",
    a: "„Gruppe OSL …, am vorgegebenen Ort Platz nehmen und selbstständig die Helme absetzen!"",
    key: ["platz nehmen", "helme absetzen"] },
  { q: "Der Löschangriff beginnt. Wie schilderst du die Lage?",
    a: "„Zur Lage: es brennt …"\n„Wasserentnahmestelle: offenes Gewässer" (zeigen)\n„Lage des Verteilers: eine B-Länge in diese Richtung" (zeigen)\n„Angriffstrupp verlegt B- und C-Leitung selbst"\n„Melder: zu mir!"",
    key: ["zur lage", "es brennt", "wasserentnahmestelle", "offenes gewässer", "verteiler", "melder zu mir"] },
  { q: "Befehl an den Angriffstrupp: er soll mit dem 1. C-Strahlrohr zum linken Brandabschnitt über die Wiese vor.",
    a: "„Angriffstrupp – zur Brandbekämpfung – mit 1. C-Strahlrohr – zum linken Brandabschnitt – über die Wiese – VOR!!!"",
    key: ["angriffstrupp", "zur brandbekämpfung", "1 c strahlrohr", "linken brandabschnitt", "über die wiese", "vor"] },
  { q: "Befehl an den Wassertrupp: mit dem 2. C-Strahlrohr zum rechten Brandabschnitt über die Wiese.",
    a: "„Wassertrupp – zur Brandbekämpfung – mit 2. C-Strahlrohr – zum rechten Brandabschnitt – über die Wiese – VOR!!!"",
    key: ["wassertrupp", "zur brandbekämpfung", "2 c strahlrohr", "rechten brandabschnitt", "über die wiese", "vor"] },
  { q: "Befehl an den Schlauchtrupp: mit dem 3. C-Strahlrohr auf direktem Weg über die Wiese.",
    a: "„Schlauchtrupp – zur Brandbekämpfung – mit 3. C-Strahlrohr – auf direktem Weg – über die Wiese – VOR!!!"",
    key: ["schlauchtrupp", "zur brandbekämpfung", "3 c strahlrohr", "auf direktem weg", "über die wiese", "vor"] },
  { q: "Das Feuer ist aus, alle sind zurück. Wie schließt du die Übung ab?",
    a: "„Ist das Feuer aus?"\n„Die Gruppe … hat die Übung nach Feuerwehrdienstvorschrift 3 beendet!"\n„Zum Abmarsch fertig!!"",
    key: ["ist das feuer aus", "hat die übung", "feuerwehrdienstvorschrift 3", "zum abmarsch fertig"] },
  { q: "Was ist die generelle Formel für jeden Trupp-Befehl?",
    a: "EINHEIT → AUFTRAG (zur Brandbekämpfung) → MITTEL (Strahlrohr-Nr.) → ZIEL (Brandabschnitt) → WEG (über die Wiese) → „VOR!!!"",
    key: ["einheit", "auftrag", "mittel", "ziel", "weg", "vor"] },
  { q: "Der Staffellauf-Durchgang wird freigegeben. Wie schickst du die Gruppe los?",
    a: "„Gruppe, in einer Reihe hintereinander am Start – angetreten!"\n„Gruppe, ohne Tritt mit selbstständigem Austreten an den Übergabepunkten – Marsch!"",
    key: ["hintereinander am start", "angetreten", "ohne tritt", "austreten", "marsch"] },
];

let order = QUIZ.map((_, i) => i);
let qi = 0;
let score = 0;
document.getElementById('scoreTotal').textContent = QUIZ.length;

function normalize(str) {
  return str
    .toLowerCase()
    .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss')
    .replace(/[„""'`.,!?;:\-–—()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function showQ() {
  const item = QUIZ[order[qi]];
  document.getElementById('quizProgress').textContent = `${qi + 1} / ${QUIZ.length}`;
  document.getElementById('quizQ').textContent = item.q;
  document.getElementById('quizAnswer').value = '';
  document.getElementById('quizSolution').classList.remove('show');
  document.getElementById('quizSolution').textContent = item.a;
  const cr = document.getElementById('checkResult');
  cr.classList.remove('show', 'good', 'partial', 'bad');
  cr.innerHTML = '';
}
showQ();

document.getElementById('btnCheck').addEventListener('click', () => {
  const item = QUIZ[order[qi]];
  const userNorm = normalize(document.getElementById('quizAnswer').value);
  const cr = document.getElementById('checkResult');

  if (!userNorm) {
    cr.className = 'result-box show bad';
    cr.innerHTML = 'Noch nichts eingetragen.';
    return;
  }

  const missing = [];
  item.key.forEach(k => {
    const words = normalize(k).split(' ').filter(Boolean);
    if (!words.every(w => userNorm.includes(w))) missing.push(k);
  });

  const ratio = (item.key.length - missing.length) / item.key.length;

  if (ratio === 1) {
    cr.className = 'result-box show good';
    cr.innerHTML = 'Alle Kernpunkte vorhanden.';
    score++;
    document.getElementById('scoreVal').textContent = score;
  } else if (ratio >= 0.6) {
    cr.className = 'result-box show partial';
    cr.innerHTML = 'Fast vollständig. Fehlt noch:<span class="miss">' + missing.join(', ') + '</span>';
  } else {
    cr.className = 'result-box show bad';
    cr.innerHTML = 'Noch unvollständig.<span class="miss">Fehlt: ' + missing.join(', ') + '</span>';
  }
});

document.getElementById('btnReveal').addEventListener('click', () => {
  document.getElementById('quizSolution').classList.add('show');
});

document.getElementById('btnNext').addEventListener('click', () => {
  qi = (qi + 1) % QUIZ.length;
  showQ();
});

document.getElementById('btnShuffle').addEventListener('click', () => {
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  qi = 0;
  showQ();
});

document.getElementById('btnResetScore').addEventListener('click', () => {
  score = 0;
  document.getElementById('scoreVal').textContent = 0;
});
