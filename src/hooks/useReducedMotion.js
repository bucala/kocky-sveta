import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(callback) {
  const media = window.matchMedia?.(QUERY);
  if (!media) return () => {};
  if (media.addEventListener) {
    media.addEventListener('change', callback);
    return () => media.removeEventListener('change', callback);
  }
  media.addListener(callback);
  return () => media.removeListener(callback);
}

const getSnapshot = () => window.matchMedia?.(QUERY).matches ?? false;

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
