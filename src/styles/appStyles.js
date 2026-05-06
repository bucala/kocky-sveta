// ─── Globálny CSS string injektovaný cez <style> tag v App.jsx ───────────
// Dôvod pre JS-in-CSS (nie .css súbor):
//   • Skin premenné (--ks-*) sú dynamicky generované z SKIN_PRESETS
//     a musia byť v :root pri každej zmene skinu.
//   • STYLES obsahuje len statické časti (fonty, animácie, layout helpery)
//     ktoré sa nemenia. Dynamická časť je v skinVarsCss() v constants/skins.js.
//
// POZOR NA IMPORT CYKLY:
//   Tento modul neimportuje nič z App.jsx ani iných lokálnych modulov.

export const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Crimson+Pro:wght@300;400;500;600&family=Bebas+Neue&display=swap');

  /* ─── Popup / notifikačný systém — globálne premenné ─────────────────
     Tieto hodnoty driví aj POPUP_CONFIG v JS, ale CSS premenné umožňujú
     override z konkrétneho komponentu alebo skinu, ak by bolo treba.    */
  :root {
    --ks-popup-offset: 0px;       /* vertikálny posun pre toast-y a simplified karty */
    --ks-popup-opacity: 0.92;     /* default opacity pozadia popupov */
    --ks-popup-safe-bottom: env(safe-area-inset-bottom, 0px);
  }
  /* Pomocná trieda pre nepriebehové popupy (toast, simplified result).
     Posúva ich smerom dolu o --ks-popup-offset + safe-area-inset-bottom.
     Fullscreen popupy ju NEPOUŽÍVAJÚ — zostávajú vystredené cez inset-0. */
  .ks-popup-anchor {
    transform: translateY(calc(var(--ks-popup-offset) + var(--ks-popup-safe-bottom)));
  }

  .ks-display { font-family: 'Cormorant Garamond', serif; letter-spacing: 0.02em; }
  .ks-mono    { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.08em; }
  .ks-body    { font-family: 'Crimson Pro', serif; }
  .ks-bg      { background:
                  radial-gradient(ellipse at top, color-mix(in srgb, var(--ks-accent) 12%, transparent), transparent 60%),
                  radial-gradient(ellipse at bottom, color-mix(in srgb, var(--ks-accent-2) 18%, transparent), transparent 60%),
                  var(--ks-bg-main); }
  .ks-card    { background: linear-gradient(180deg, var(--ks-bg-soft), var(--ks-bg-soft-2));
                border: 1px solid var(--ks-border); }
  .ks-card-prom { background: linear-gradient(180deg, color-mix(in srgb, var(--ks-accent) 10%, var(--ks-bg-soft)), var(--ks-bg-soft-2));
                  border: 2px solid var(--ks-border-strong);
                  box-shadow: 0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 color-mix(in srgb, var(--ks-accent) 20%, transparent); }
  .ks-card-sub  { background: var(--ks-card-sub);
                  border: 1px solid color-mix(in srgb, var(--ks-border) 72%, transparent); }
  .ks-gold      { color: var(--ks-accent); }
  .ks-gold-bg   { background: linear-gradient(180deg, color-mix(in srgb, var(--ks-accent) 70%, white), var(--ks-accent-2)); color: var(--ks-button-text); }
  .ks-cream     { color: var(--ks-text); }
  .ks-muted     { color: var(--ks-text-muted); }
  .ks-divider   { background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--ks-accent) 40%, transparent), transparent); height: 1px; }
  .ks-border-accent { border-color: color-mix(in srgb, var(--ks-accent) 40%, transparent); }
  .ks-bg-danger     { background: color-mix(in srgb, var(--ks-danger) 15%, var(--ks-bg-soft)); }
  .ks-text-danger    { color: var(--ks-danger); }
  .ks-bg-overlay     { background: color-mix(in srgb, var(--ks-bg-main) 92%, transparent); }
  .ks-border-sub     { border-color: color-mix(in srgb, var(--ks-border) 60%, transparent); }
  .ks-text-on-accent  { color: var(--ks-button-text); }
  .ks-bg-card         { background: var(--ks-bg-soft); }
  .ks-text-accent      { color: var(--ks-accent); }
  .ks-press     { transition: all 0.15s ease; }
  .ks-press:active { transform: scale(0.97); }
  .ks-scroll{-ms-overflow-style:none;scrollbar-width:none;scrollbar-gutter:stable both-edges;}
  .ks-scroll::-webkit-scrollbar { width: 0; height: 0; display:none; }
  @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
  .ks-fade { animation: fadeIn 0.3s ease-out; }
  @keyframes pulseGold { 0%,100% { box-shadow: 0 0 0 0 rgba(212,184,106,0.4); } 50% { box-shadow: 0 0 0 8px rgba(212,184,106,0); } }
  .ks-pulse { animation: pulseGold 2s ease-in-out infinite; }
  @keyframes slideDown { from { opacity: 0; transform: translateY(-100%); } to { opacity: 1; transform: translateY(0); } }
  .ks-slide-down { animation: slideDown 0.3s ease-out; }
  @keyframes funnyIn {
    0%   { opacity: 0; transform: scale(0.5) rotate(-8deg); }
    60%  { opacity: 1; transform: scale(1.08) rotate(2deg); }
    100% { opacity: 1; transform: scale(1) rotate(-2deg); }
  }
  .ks-funny { animation: funnyIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
  @keyframes funnyOrbPulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.2); }
  }
  .ks-funny-orb { animation: funnyOrbPulse 3s ease-in-out infinite; }
  @keyframes funnyEmojiBob {
    0%, 100% { transform: translateY(0) rotate(-3deg); }
    50% { transform: translateY(-8px) rotate(3deg); }
  }
  .ks-funny-emoji { animation: funnyEmojiBob 2s ease-in-out infinite; }
  @keyframes overlayFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .ks-overlay-bg { animation: overlayFadeIn 0.3s ease-out forwards; }

  /* ── FIX5 Responsive ────────────────────────── */
  html,body,#root{width:100%;max-width:100vw;overflow-x:hidden;}
  body{padding-top:0;padding-bottom:env(safe-area-inset-bottom,0);}
  @media(min-width:900px){.ks-game-container{max-width:860px;margin:0 auto}}
  @media(min-width:1400px){.ks-game-container{max-width:1180px}}
  @media(max-height:520px) and (orientation:landscape){.ks-score-table-wrap{max-height:40vh;overflow-y:auto}}
  .ks-quick-btn,button{min-height:44px}
  input,select,textarea{font-size:16px!important}
  table{display:block;overflow-x:auto;width:100%}
  .ks-app-scroll{min-height:100vh;overflow-y:auto;-webkit-overflow-scrolling:touch;touch-action:pan-y;overscroll-behavior-y:auto;}

`;
