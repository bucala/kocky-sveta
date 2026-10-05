import { afterEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, renderHook } from '@testing-library/react';
import { useReducedMotion } from '../useReducedMotion.js';

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe('useReducedMotion', () => {
  it('reacts to a system preference change and removes its listener', () => {
    const listeners = new Set();
    const media = {
      matches: false,
      addEventListener: vi.fn((_, listener) => listeners.add(listener)),
      removeEventListener: vi.fn((_, listener) => listeners.delete(listener)),
    };
    vi.stubGlobal('matchMedia', vi.fn(() => media));
    const { result, unmount } = renderHook(useReducedMotion);
    expect(result.current).toBe(false);
    act(() => { media.matches = true; listeners.forEach(listener => listener()); });
    expect(result.current).toBe(true);
    unmount();
    expect(listeners.size).toBe(0);
  });

  it('supports older WebViews with addListener', () => {
    const media = { matches: true, addListener: vi.fn(), removeListener: vi.fn() };
    vi.stubGlobal('matchMedia', () => media);
    const { result, unmount } = renderHook(useReducedMotion);
    expect(result.current).toBe(true);
    unmount();
    expect(media.removeListener).toHaveBeenCalledWith(media.addListener.mock.calls[0][0]);
  });

  it('falls back when media queries are unavailable', () => {
    vi.stubGlobal('matchMedia', undefined);
    expect(renderHook(useReducedMotion).result.current).toBe(false);
  });
});
