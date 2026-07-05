// src/hooks/useBackHandler.js
// LIFO zásobník handlerov pre hardware/diaľkový "Späť" tlačidlo (Android
// back button, Android TV remote, Escape na klávesnici). Vrchný
// registrovaný handler (najbližší otvorený modal/podobrazovka) má prioritu
// pred základným handlerom obrazovky pod ním — presne "o 1 úroveň späť".
import { useEffect, useRef } from 'react';

const stack = [];

export function triggerBack() {
  if (stack.length === 0) return false;
  const handler = stack[stack.length - 1];
  handler();
  return true;
}

/**
 * Zaregistruje handler pre hardware "Späť", pokiaľ je enabled === true.
 * Pri zmene handlera/enabled alebo unmounte sa automaticky odregistruje.
 */
export function useBackHandler(handler, enabled = true) {
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    if (!enabled) return undefined;
    const wrapped = () => handlerRef.current();
    stack.push(wrapped);
    return () => {
      const idx = stack.lastIndexOf(wrapped);
      if (idx !== -1) stack.splice(idx, 1);
    };
  }, [enabled]);
}
