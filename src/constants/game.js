// ─── Herné konštanty — rýchle hodnoty, penalizácie, ciele, funny hlášky ─
// Tieto hodnoty sa nemenia za behu — sú to compile-time konštanty.
//
// POZOR NA IMPORT CYKLY:
//   Tento modul neimportuje nič z App.jsx ani iných lokálnych modulov.

// Rýchle tlačidlá na pridávanie bodov
export const QUICK_VALUES = [50, 100, 300, 400, 500, 600, 1000, 1500, 2000];

// Penalizácia za ničnehodenie
export const PENALTY_VALUE = -1000;

// Možnosti cieľového skóre
export const TARGET_OPTIONS = [
  { value: 5000,  label: 'Krátka hra',   sub: 'do 5 000 bodov' },
  { value: 10000, label: 'Klasická hra', sub: 'do 10 000 bodov' },
];

// Funny hlášky — { msg, emoji, variant }
// variant: 'doubt' | 'fight' | 'doom'
export const FUNNY_MESSAGES = [
  { msg: 'Čo ti to rieši?!',              emoji: '🤨', variant: 'doubt' },
  { msg: 'Čo ti to rieši?!',              emoji: '🤨', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',             emoji: '😤', variant: 'doubt' },
  { msg: 'Tak bojuj nééé?!?',             emoji: '😤', variant: 'fight' },
  { msg: 'Také mrviny? Vážne?',           emoji: '🙄', variant: 'doubt' },
  { msg: 'Toto ťa nezachráni…',           emoji: '💀', variant: 'doom'  },
  { msg: 'Tak takto sa hra nevyhráva!',   emoji: '🎲', variant: 'fight' },
  { msg: 'Hej majster… si si istý?',      emoji: '😏', variant: 'doubt' },
  { msg: 'Riskni to konečne!',            emoji: '🔥', variant: 'fight' },
];

// ─── Popup / notifikačný systém — globálna konfigurácia ──────────────────
// Centralizované konštanty pre časovanie, vizuál a layout popupov.
// Zmenou týchto hodnôt sa správanie popupov zmení v celej appke naraz.
export const POPUP_CONFIG = {
  // Minimálny čas zobrazenia jedného funny popupu, kým môže prísť ďalší (ms).
  // Týka sa LEN nepriebehových popupov; interaktívne dialógy (Confirm/Cancel)
  // a fullscreen výsledky (Víťaz/Remíza) tento limit obchádzajú.
  POPUP_DISPLAY_DURATION: 2000,

  // Maximálna veľkosť fronty čakajúcich funny popupov (okrem aktívneho).
  // Pri prekročení sa najnovší prepíše posledný čakajúci (newer-wins).
  QUEUE_SIZE: 1,

  // Vertikálny posun všetkých neoverlay popupov (toast-y, simplified karty).
  // Fullscreen popupy (winner celebration, win-pending, full FunnyOverlay)
  // sú riešené cez `inset-0 flex items-center justify-center` a tento offset
  // ich neovplyvní. Hodnotu možno prepísať CSS premennou --ks-popup-offset.
  VERTICAL_OFFSET: '0px',

  // Globálna opacity pre pozadie/karty popupov (0..1). Default 0.92
  // odráža súčasný "mierne priesvitný" stav.
  OPACITY: 0.92,
};
