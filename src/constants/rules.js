// Predvolené pravidlá hry a pomocné funkcie nad nimi (bez Reactu).

export const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',         ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',        ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',      ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých', ruleIds: ['r11', 'r12', 'r13'] },
];

export const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];

export const DEFAULT_RULES = [
  { id: 'r1',  name: 'Jednotka',         description: 'Samostatná kocka s hodnotou 1',                         points: 100,   type: 'numeric', dice: [1] },
  { id: 'r2',  name: 'Päťka',            description: 'Samostatná kocka s hodnotou 5',                         points: 50,    type: 'numeric', dice: [5] },
  { id: 'r3',  name: 'Tri jednotky',     description: 'Trojica jednotiek',                                     points: 1000,  type: 'numeric', dice: [1,1,1] },
  { id: 'r4',  name: 'Tri dvojky',       description: 'Trojica dvojok',                                        points: 200,   type: 'numeric', dice: [2,2,2] },
  { id: 'r5',  name: 'Tri trojky',       description: 'Trojica trojok',                                        points: 300,   type: 'numeric', dice: [3,3,3] },
  { id: 'r6',  name: 'Tri štvorky',      description: 'Trojica štvoriek',                                      points: 400,   type: 'numeric', dice: [4,4,4] },
  { id: 'r7',  name: 'Tri päťky',        description: 'Trojica päťok',                                         points: 500,   type: 'numeric', dice: [5,5,5] },
  { id: 'r8',  name: 'Tri šestky',       description: 'Trojica šestiek',                                       points: 600,   type: 'numeric', dice: [6,6,6] },
  { id: 'r9',  name: 'Postupka 1–6',     description: 'Šesť kociek za sebou: 1·2·3·4·5·6',                     points: 2000,  type: 'numeric', dice: [1,2,3,4,5,6] },
  { id: 'r10', name: 'Tri páry',         description: 'Tri rôzne páry kociek',                                 points: 1000,  type: 'numeric', dice: [2,2,4,4,6,6] },
  { id: 'r11', name: 'Štyri rovnaké',    description: 'Štyri rovnaké kocky',                                   points: 0,     type: 'select', options: ['Dvojnásobok trojice', 'Pevná hodnota'], selected: 'Dvojnásobok trojice', dice: [3,3,3,3] },
  { id: 'r12', name: 'Päť rovnakých',    description: 'Päť rovnakých kociek',                                  points: 0,     type: 'select', options: ['Štvornásobok trojice', 'Pevná hodnota'], selected: 'Štvornásobok trojice', dice: [4,4,4,4,4] },
  { id: 'r13', name: 'Šesť rovnakých',   description: 'Všetkých šesť kociek rovnakých',                        points: 0,     type: 'select', options: ['Automatická výhra', 'Pevná hodnota 3000'], selected: 'Automatická výhra', dice: [5,5,5,5,5,5] },
  { id: 'r14', name: 'Minimálny zápis', description: 'Každý zápis bodov musí byť aspoň 300 bodov. Namiesto bodov sa dá vždy zapísať čiarka (—).', points: 300, type: 'numeric', dice: [] },
  { id: 'r15', name: 'Cieľové skóre',    description: 'Predvolený cieľ pri zakladaní turnaja. Klasická hra do 10 000, krátka do 5 000; iná hodnota (najmenej 2 000) sa ponúkne ako vlastný cieľ.', points: 10000, type: 'numeric', dice: [] },
  { id: 'r16', name: 'Nič nehodené',     description: 'Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta penalizácia (predvolene 1 000 bodov).', points: -1000, type: 'numeric', dice: [2,3,4,6] },
  { id: 'r17', name: 'Prekročenie cieľa', description: 'Ak by hod prekročil cieľové skóre, body sa nezapíšu. „Automatická čiarka“ zapíše čiarku (—) a ťah prejde ďalej; „Hod sa neuznáva“ nič nezapíše a ten istý hráč hádže znova.', points: 0, type: 'select', options: ['Automatická čiarka', 'Hod sa neuznáva'], selected: 'Automatická čiarka', dice: [] },
  { id: 'r18', name: 'Režim potvrdenia víťazstva', description: 'Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.', points: 0, type: 'select', options: ['Áno', 'Nie'], selected: 'Áno', dice: [] },
];

// Anglické texty predvolených pravidiel, kategórií a volieb. Používajú sa len
// na zobrazenie a len keď používateľ text pravidla neupravil; uložené hodnoty
// (napr. selected: 'Áno') zostávajú slovenské, lebo s nimi pracuje herná logika.
const RULE_TEXT_EN = {
  r1:  ['One', 'A single die showing 1'],
  r2:  ['Five', 'A single die showing 5'],
  r3:  ['Three ones', 'Three of a kind: ones'],
  r4:  ['Three twos', 'Three of a kind: twos'],
  r5:  ['Three threes', 'Three of a kind: threes'],
  r6:  ['Three fours', 'Three of a kind: fours'],
  r7:  ['Three fives', 'Three of a kind: fives'],
  r8:  ['Three sixes', 'Three of a kind: sixes'],
  r9:  ['Straight 1–6', 'Six dice in a row: 1·2·3·4·5·6'],
  r10: ['Three pairs', 'Three different pairs of dice'],
  r11: ['Four of a kind', 'Four identical dice'],
  r12: ['Five of a kind', 'Five identical dice'],
  r13: ['Six of a kind', 'All six dice the same'],
  r14: ['Minimum entry', 'Every score entry must be at least 300 points. A pass (—) can always be recorded instead.'],
  r15: ['Target score', 'Default target when creating a tournament. Classic game to 10,000, short game to 5,000; any other value (at least 2,000) is offered as a custom target.'],
  r16: ['Nothing thrown', 'A throw with no scoring combination – no one, no five, no three of a kind, no straight. The penalty is subtracted from the current score (1,000 points by default).'],
  r17: ['Overshooting the target', 'If a throw would exceed the target score, the points are not recorded. "Automatic pass" records a pass (—) and the turn moves on; "Throw does not count" records nothing and the same player throws again.'],
  r18: ['Win confirmation mode', 'Whether reaching the target exactly still needs the win to be verified by a nothing-thrown pass on the next turn, or the win counts as soon as the round is finished.'],
};
const CATEGORY_TEXT_EN = {
  'cat-basic':   ['Single dice values', 'Single dice'],
  'cat-trio':    ['Three of a kind', 'Three identical dice'],
  'cat-special': ['Special combinations', 'Straight and three pairs'],
  'cat-multi':   ['Multiples', 'Four, five, six of a kind'],
};
const OPTION_TEXT_EN = {
  'Dvojnásobok trojice': 'Double the three of a kind',
  'Štvornásobok trojice': 'Four times the three of a kind',
  'Pevná hodnota': 'Fixed value',
  'Automatická výhra': 'Instant win',
  'Pevná hodnota 3000': 'Fixed value 3,000',
  'Automatická čiarka': 'Automatic pass',
  'Hod sa neuznáva': 'Throw does not count',
  'Áno': 'Yes',
  'Nie': 'No',
};

export function ruleText(rule, lang) {
  const def = DEFAULT_RULES.find(r => r.id === rule?.id);
  const en = lang === 'en' && def && RULE_TEXT_EN[rule.id];
  return {
    name: en && rule.name === def.name ? en[0] : rule?.name,
    description: en && rule.description === def.description ? en[1] : rule?.description,
  };
}

export function categoryText(cat, lang) {
  const en = lang === 'en' && CATEGORY_TEXT_EN[cat?.id];
  return { title: en ? en[0] : cat?.title, subtitle: en ? en[1] : cat?.subtitle };
}

export function optionText(option, lang) {
  return (lang === 'en' && OPTION_TEXT_EN[option]) || option;
}

export function mergeRulesWithDefaults(saved) {
  if (!Array.isArray(saved)) return DEFAULT_RULES;
  const byId = new Map(saved.filter(r => r && r.id).map(r => [r.id, r]));
  const merged = DEFAULT_RULES.map(def => {
    const own = byId.get(def.id);
    if (!own) return def;
    const selected = def.options && def.options.includes(own.selected) ? own.selected : def.selected;
    return { ...def, points: own.points ?? def.points, ...(def.options ? { selected } : {}) };
  });
  const defaultIds = new Set(DEFAULT_RULES.map(r => r.id));
  return [...merged, ...saved.filter(r => r && r.id && !defaultIds.has(r.id))];
}

export function ruleFrom(rules, id) {
  return (rules || []).find(r => r.id === id);
}

export function isStrictMode(rules) {
  const r18 = (rules || []).find(r => r.id === 'r18');
  return !r18 || r18.selected !== 'Áno';
}
