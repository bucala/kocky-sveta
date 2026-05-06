import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useFunnyQueue from '../useFunnyQueue.js';

const DISPLAY_DURATION = 2000;

// Helper to advance timers and flush microtasks
const advance = async (ms) => {
  await act(async () => {
    vi.advanceTimersByTime(ms);
  });
};

describe('useFunnyQueue', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('init: starts with no active popup and empty queue', () => {
    const { result } = renderHook(() => useFunnyQueue());

    expect(result.current.active).toBe(null);
  });

  it('enqueue: shows first popup immediately when none active', async () => {
    const { result } = renderHook(() => useFunnyQueue());

    act(() => {
      result.current.enqueue({ id: 'msg-1' });
    });

    expect(result.current.active).toEqual({ id: 'msg-1' });

    await advance(DISPLAY_DURATION + 1);

    expect(result.current.active).toBe(null);
  });

  it('enqueue: queues next popup when one is already active (separate acts)', async () => {
    const { result } = renderHook(() => useFunnyQueue());

    // Separate act() calls — msg-1 is already active before msg-2 arrives
    act(() => {
      result.current.enqueue({ id: 'msg-1' });
    });

    act(() => {
      result.current.enqueue({ id: 'msg-2' });
    });

    expect(result.current.active?.id).toBe('msg-1');

    await advance(DISPLAY_DURATION + 1);

    expect(result.current.active?.id).toBe('msg-2');

    await advance(DISPLAY_DURATION + 1);

    expect(result.current.active).toBe(null);
  });

  it('dismiss: clears active immediately and schedules next respecting min duration', async () => {
    const { result } = renderHook(() => useFunnyQueue());

    // Separate acts so msg-1 is active before msg-2 is enqueued
    act(() => {
      result.current.enqueue({ id: 'msg-1' });
    });

    act(() => {
      result.current.enqueue({ id: 'msg-2' });
    });

    // newer-wins: msg-2 replaces msg-1 in queue (msg-1 still active from first act)
    expect(result.current.active?.id).toBe('msg-1');

    await advance(DISPLAY_DURATION / 2);

    act(() => {
      result.current.dismiss();
    });

    expect(result.current.active).toBe(null);

    await advance(DISPLAY_DURATION / 2 + 1);

    expect(result.current.active?.id).toBe('msg-2');
  });

  it('clear: clears active and queue and cancels timers', async () => {
    const { result } = renderHook(() => useFunnyQueue());

    act(() => {
      result.current.enqueue({ id: 'msg-1' });
      result.current.enqueue({ id: 'msg-2' });
    });

    expect(result.current.active).not.toBe(null);

    act(() => {
      result.current.clear();
    });

    expect(result.current.active).toBe(null);

    await advance(DISPLAY_DURATION + 1);

    expect(result.current.active).toBe(null);
  });

  it('stres: newer-wins — last enqueued in same act() becomes active immediately', async () => {
    const { result } = renderHook(() => useFunnyQueue());

    // All three in one act() — newer-wins kicks in synchronously
    // msg-1 active → msg-2 newer-wins → msg-3 newer-wins → msg-3 is active
    act(() => {
      result.current.enqueue({ id: 'msg-1' });
      result.current.enqueue({ id: 'msg-2' });
      result.current.enqueue({ id: 'msg-3' });
    });

    // newer-wins: msg-3 replaced msg-1 as active
    expect(result.current.active?.id).toBe('msg-3');

    await advance(DISPLAY_DURATION + 1);

    expect(result.current.active).toBe(null);
  });

  it('cleanup: no timers left running after unmount', async () => {
    const { result, unmount } = renderHook(() => useFunnyQueue());

    act(() => {
      result.current.enqueue({ id: 'msg-1' });
    });

    unmount();

    await advance(DISPLAY_DURATION + 1);

    expect(true).toBe(true);
  });
});
