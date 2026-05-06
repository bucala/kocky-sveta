// ─── Herné pravidlá — defaultné hodnoty a kategórie ─────────────────────
// DEFAULT_RULES: plný zoznam pravidiel s bodmi a metadátami.
// RULE_CATEGORIES: skupiny pravidiel pre zobrazenie v UI (RulesView).
// SETTING_RULE_IDS: ID pravidiel ktoré sú nastavenia hry (nie bodové kombinácie).
//
// POZOR NA IMPORT CYKLY:
//   Tento modul neimportuje nič z App.jsx ani iných lokálnych modulov.

export const DEFAULT_RULES = [
  { id: 'r1',  name: 'Jednotka',         description: 'Samostatná kocka s hodnotou 1',                        points: 100,   type: 'numeric', dice: [1] },
  { id: 'r2',  name: 'Päťka',            description: 'Samostatná kocka s hodnotou 5',                        points: 50,    type: 'numeric', dice: [5] },
  { id: 'r3',  name: 'Tri jednotky',     description: 'Trojica jednotiek',                                    points: 1000,  type: 'numeric', dice: [1,1,1] },
  { id: 'r4',  name: 'Tri dvojky',       description: 'Trojica dvojok',                                       points: 200,   type: 'numeric', dice: [2,2,2] },
  { id: 'r5',  name: 'Tri trojky',       description: 'Trojica trojok',                                       points: 300,   type: 'numeric', dice: [3,3,3] },
  { id: 'r6',  name: 'Tri štvorky',      description: 'Trojica štvoriek',                                     points: 400,   type: 'numeric', dice: [4,4,4] },
  { id: 'r7',  name: 'Tri päťky',        description: 'Trojica päťok',                                        points: 500,   type: 'numeric', dice: [5,5,5] },
  { id: 'r8',  name: 'Tri šestky',       description: 'Trojica šestiek',                                      points: 600,   type: 'numeric', dice: [6,6,6] },
  { id: 'r9',  name: 'Postupka 1–6',     description: 'Šesť kociek za sebou: 1·2·3·4·5·6',                    points: 2000,  type: 'numeric', dice: [1,2,3,4,5,6] },
  { id: 'r10', name: 'Tri páry',         description: 'Tri rôzne páry kociek',                                points: 1000,  type: 'numeric', dice: [2,2,4,4,6,6] },
  { id: 'r11', name: 'Štyri rovnaké',    description: 'Štyri rovnaké kocky',                                  points: 0,     type: 'select', options: ['Dvojnásobok trojice', 'Pevná hodnota'], selected: 'Dvojnásobok trojice', dice: [3,3,3,3] },
  { id: 'r12', name: 'Päť rovnakých',    description: 'Päť rovnakých kociek',                                 points: 0,     type: 'select', options: ['Štvornásobok trojice', 'Pevná hodnota'], selected: 'Štvornásobok trojice', dice: [4,4,4,4,4] },
  { id: 'r13', name: 'Šesť rovnakých',   description: 'Všetkých šesť kociek rovnakých',                       points: 0,     type: 'select', options: ['Automatická výhra', 'Pevná hodnota 3000'], selected: 'Automatická výhra', dice: [5,5,5,5,5,5] },
  { id: 'r14', name: 'Minimálny odpis (prvý zápis)', description: 'Prvý zápis hráča v turnaji musí byť aspoň 300 bodov. Hru sa dá začať aj čiarkou (—) bez bodov.', points: 300, type: 'numeric', dice: [] },
  { id: 'r15', name: 'Cieľové skóre',    description: 'Body potrebné na výhru turnaja. Klasická hra do 10 000 alebo krátka hra do 5 000.', points: 10000, type: 'numeric', dice: [] },
  { id: 'r16', name: 'Nič nehodené',     description: 'Hod, pri ktorom nepadla žiadna bodujúca kombinácia – ani jednotka, ani päťka, ani trojica, ani postupka. Z aktuálneho skóre sa odpočíta 1 000 bodov.', points: -1000, type: 'numeric', dice: [2,3,4,6] },
  { id: 'r17', name: 'Prekročenie cieľa', description: 'Ak by hod prekročil cieľové skóre, body sa nezapíšu a zapíše sa automaticky čiarka (—).', points: 0, type: 'select', options: ['Automatická čiarka', 'Hod sa neuznáva'], selected: 'Automatická čiarka', dice: [] },
  { id: 'r18', name: 'Režim potvrdenia víťazstva', description: 'Určuje, či sa po presnom dosiahnutí cieľa ešte vyžaduje overenie víťazstva v ďalšom ťahu ničnehodením (čiarkou), alebo sa výhra uzná okamžite po dokončení kola.', points: 0, type: 'select', options: ['Áno', 'Nie'], selected: 'Áno', dice: [] },
];

// Skupiny pravidiel pre RulesView — len bodovanie kociek
export const RULE_CATEGORIES = [
  { id: 'cat-basic',   title: 'Bodové hodnoty kociek', subtitle: 'Samostatné kocky',            ruleIds: ['r1', 'r2'] },
  { id: 'cat-trio',    title: 'Trojice rovnakých',     subtitle: 'Tri rovnaké kocky',           ruleIds: ['r3', 'r4', 'r5', 'r6', 'r7', 'r8'] },
  { id: 'cat-special', title: 'Špeciálne kombinácie',  subtitle: 'Postupka a tri páry',         ruleIds: ['r9', 'r10'] },
  { id: 'cat-multi',   title: 'Násobky kociek',        subtitle: 'Štyri, päť, šesť rovnakých', ruleIds: ['r11', 'r12', 'r13'] },
];

// ID pravidiel ktoré sú v skutočnosti nastavenia hry (nie bodové kombinácie)
export const SETTING_RULE_IDS = ['r14', 'r15', 'r16', 'r17', 'r18'];
