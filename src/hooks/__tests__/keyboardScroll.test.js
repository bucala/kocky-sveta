import { afterEach, describe, expect, it } from 'vitest';
import { scrollFocusedRegion } from '../keyboardScroll.js';

function region({ width = 300, height = 400, fullWidth = width, fullHeight = 2000 } = {}) {
  const el = document.createElement('div');
  el.setAttribute('data-keyboard-scroll', '');
  el.style.overflowX = el.style.overflowY = 'auto';
  Object.defineProperties(el, {
    clientWidth: { value: width }, clientHeight: { value: height },
    scrollWidth: { value: fullWidth }, scrollHeight: { value: fullHeight },
  });
  document.body.append(el);
  return el;
}

afterEach(() => { document.body.innerHTML = ''; });

describe('keyboard scrolling of observer/chart regions', () => {
  it('scrolls only the focused viewport and clamps to the last round', () => {
    const el = region();
    expect(scrollFocusedRegion(el, 'down')).toBe(true);
    expect(el.scrollTop).toBe(260);
    el.scrollTop = 1590;
    scrollFocusedRegion(el, 'down');
    expect(el.scrollTop).toBe(1600);
    expect(scrollFocusedRegion(el, 'down')).toBe(false);
  });

  it('returns control to header navigation at the top boundary', () => {
    const el = region();
    expect(scrollFocusedRegion(el, 'up')).toBe(false);
    el.scrollTop = 50;
    expect(scrollFocusedRegion(el, 'up')).toBe(true);
    expect(el.scrollTop).toBe(0);
  });

  it('reaches players/rounds offscreen horizontally without moving the page', () => {
    const el = region({ fullWidth: 1000 });
    scrollFocusedRegion(el, 'right');
    expect(el.scrollLeft).toBe(195);
    expect(el.scrollTop).toBe(0);
    scrollFocusedRegion(el, 'left');
    expect(el.scrollLeft).toBe(0);
  });

  it('finds a nested wide chart when its containing region only scrolls vertically', () => {
    const outer = region();
    const chart = region({ fullWidth: 2200, fullHeight: 400 });
    outer.append(chart);
    expect(scrollFocusedRegion(outer, 'right')).toBe(true);
    expect(chart.scrollLeft).toBe(195);
    expect(outer.scrollLeft).toBe(0);
  });

  it('leaves normal controls and editable inputs to the existing navigation', () => {
    const input = document.createElement('input');
    document.body.append(input);
    expect(scrollFocusedRegion(input, 'right')).toBe(false);
    expect(scrollFocusedRegion(null, 'down')).toBe(false);
  });
});
