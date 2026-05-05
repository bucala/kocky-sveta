import { useState, useRef, useEffect } from 'react';
import { POPUP_CONFIG } from '../constants.js';

/**
 * useFunnyQueue — queue pre funny popupy.
 *
 * Logika:
 *   • aktívny popup sa zobrazí min POPUP_CONFIG.POPUP_DISPLAY_DURATION ms
 *   • čakajúca pozícia: kapacita POPUP_CONFIG.QUEUE_SIZE (default 1, newer-wins)
 *   • dismiss() — okamžité ukončenie aktívneho, rešpektuje minDuration pre next
 *   • clear() — vyčistí všetko (pri odchode z turnaja)
 *
 * API: { active, enqueue, dismiss, clear }
 */
export default function useFunnyQueue() {
  const [active, setActive] = useState(null);
  const queueRef    = useRef([]);
  const lockUntilRef = useRef(0);
  const timerRef    = useRef(null);
  const minDuration = POPUP_CONFIG.POPUP_DISPLAY_DURATION;
  const maxQueue    = POPUP_CONFIG.QUEUE_SIZE;

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function popNext() {
    clearTimer();
    if (queueRef.current.length === 0) {
      setActive(null);
      return;
    }
    const next = queueRef.current.shift();
    lockUntilRef.current = Date.now() + minDuration;
    setActive(next);
    timerRef.current = setTimeout(popNext, next.duration ?? minDuration);
  }

  function enqueue(data) {
    if (!data) return;
    if (!active) {
      lockUntilRef.current = Date.now() + minDuration;
      setActive(data);
      clearTimer();
      timerRef.current = setTimeout(popNext, data.duration ?? minDuration);
      return;
    }
    // Aktívny existuje — zaraď do queue (newer-wins ak je plná)
    if (queueRef.current.length >= maxQueue) {
      queueRef.current[queueRef.current.length - 1] = data;
    } else {
      queueRef.current.push(data);
    }
  }

  function dismiss() {
    clearTimer();
    const remaining = Math.max(0, lockUntilRef.current - Date.now());
    setActive(null);
    if (queueRef.current.length > 0) {
      timerRef.current = setTimeout(popNext, remaining);
    }
  }

  function clear() {
    queueRef.current = [];
    clearTimer();
    setActive(null);
    lockUntilRef.current = 0;
  }

  // Cleanup pri unmounte
  useEffect(() => clearTimer, []);

  return { active, enqueue, dismiss, clear };
}
