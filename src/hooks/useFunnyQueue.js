import { useState, useRef, useEffect, useCallback } from 'react';
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
  const activeRef    = useRef(null);       // stale-closure guard
  const queueRef     = useRef([]);
  const lockUntilRef = useRef(0);
  const timerRef     = useRef(null);
  const minDuration  = POPUP_CONFIG.POPUP_DISPLAY_DURATION;
  const maxQueue     = POPUP_CONFIG.QUEUE_SIZE;

  // Sync activeRef so callbacks never read stale state
  useEffect(() => { activeRef.current = active; }, [active]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const popNext = useCallback(() => {
    clearTimer();
    if (queueRef.current.length === 0) {
      setActive(null);
      return;
    }
    const next = queueRef.current.shift();
    lockUntilRef.current = Date.now() + minDuration;
    setActive(next);
    timerRef.current = setTimeout(popNext, next.duration ?? minDuration);
  }, [clearTimer, minDuration]);

  const enqueue = useCallback((data) => {
    if (!data) return;
    if (!activeRef.current) {
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
  }, [clearTimer, minDuration, maxQueue, popNext]);

  const dismiss = useCallback(() => {
    clearTimer();
    const remaining = Math.max(0, lockUntilRef.current - Date.now());
    setActive(null);
    if (queueRef.current.length > 0) {
      timerRef.current = setTimeout(popNext, remaining);
    }
  }, [clearTimer, popNext]);

  const clear = useCallback(() => {
    queueRef.current = [];
    clearTimer();
    setActive(null);
    lockUntilRef.current = 0;
  }, [clearTimer]);

  // Cleanup pri unmounte — správny pattern
  useEffect(() => () => clearTimer(), [clearTimer]);

  return { active, enqueue, dismiss, clear };
}
