// ─── Globálne konštanty — Kocky sveta ────────────────────────────────────
// Centralizované konštanty pre celú appku.
// Import: import { POPUP_CONFIG, QUICK_VALUES, ... } from './constants.js';

// ─── Popup / notifikačný systém ───────────────────────────────────────────
export const POPUP_CONFIG = {
  // Minimálny čas zobrazenia jedného funny popupu (ms).
  POPUP_DISPLAY_DURATION: 2000,
  // Maximálna veľkosť fronty čakajúcich funny popupov.
  QUEUE_SIZE: 1,
  // Vertikálny posun pre toast-y a simplified karty.
  VERTICAL_OFFSET: '0px',
  // Globálna opacity pre pozadie/karty popupov.
  OPACITY: 0.92,
};

// ─── Herné hodnoty ────────────────────────────────────────────────────────
export const QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];
export const PENALTY_VALUE = -1000;

// ─── Funny hlášky ─────────────────────────────────────────────────────────
export const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',            emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',           emoji: '😤', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',         emoji: '🙄', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni…',         emoji: '💀', variant: 'doom'  },
  { msg: 'Tak takto sa hra nevyhráva!', emoji: '🎲', variant: 'fight' },
  { msg: 'Hej majster… si si istý?',    emoji: '😏', variant: 'doubt' },
  { msg: 'Riskni to konečne!',          emoji: '🔥', variant: 'fight' },
];
