import { useState, useRef, useEffect, useCallback } from 'react';
import { POPUP_CONFIG } from '../constants.js';

/**
 * useFunnyQueue — queue pre funny popupy
 *
 * Garantuje min. POPUP_DISPLAY_DURATION ms zobrazenia aktívneho popupu
 * pred tým, než ho môže vystriedať ďalší (ochrana proti preblikávaniu).
 * Queue kapacita = QUEUE_SIZE (default 1), newer-wins pri plnej fronte.
 */
export default function useFunnyQueue() {
  const [active, setActive] = useState(null);
  const activeRef    = useRef(null);       // stale-closure guard
  const queueRef     = useRef([]);
  const lockUntilRef = useRef(0);
  const timerRef     = useRef(null);
  const minDuration  = POPUP_CONFIG.POPUP_DISPLAY_DURATION;
  const maxQueue     = POPUP_CONFIG.QUEUE_SIZE;

  function clearTimer() {
    if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
  }

  const popNext = useCallback(() => {
    clearTimer();
    if (queueRef.current.length === 0) { setActive(null); return; }
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
    if (queueRef.current.length > 0) timerRef.current = setTimeout(popNext, remaining);
  }

  const clear = useCallback(() => {
    queueRef.current = [];
    clearTimer();
    setActive(null);
    lockUntilRef.current = 0;
  }, [clearTimer]);

  useEffect(() => clearTimer, []);

  return { active, enqueue, dismiss, clear };
}
