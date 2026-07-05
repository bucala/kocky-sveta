// src/hooks/useInputModality.js
// Rozlišuje, či používateľ práve ovláda appku klávesnicou/D-padom (TV) alebo
// dotykom/myšou, a pridáva zodpovedajúcu triedu na <html>:
//   .is-tv-mode    — posledný vstup bol šípka/Tab/Enter → zobraz focus ring
//   .is-touch-mode — posledný vstup bol dotyk/klik → focus ring nerušiť
// app.css podľa tejto triedy rozhoduje, kedy zobraziť viditeľný focus outline,
// aby nebol rušivý pre bežných mobilných/tablet používateľov.
import { useEffect } from 'react';

const TV_KEYS = new Set(['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Tab']);

export function useInputModality() {
  useEffect(() => {
    const root = document.documentElement;

    function markTV(e) {
      if (!TV_KEYS.has(e.key)) return;
      root.classList.add('is-tv-mode');
      root.classList.remove('is-touch-mode');
    }
    function markTouch() {
      root.classList.add('is-touch-mode');
      root.classList.remove('is-tv-mode');
    }

    window.addEventListener('keydown', markTV);
    window.addEventListener('pointerdown', markTouch);
    window.addEventListener('touchstart', markTouch, { passive: true });
    return () => {
      window.removeEventListener('keydown', markTV);
      window.removeEventListener('pointerdown', markTouch);
      window.removeEventListener('touchstart', markTouch);
    };
  }, []);
}
