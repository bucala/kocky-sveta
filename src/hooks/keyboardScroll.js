// Scroll only the focused region, leaving the surrounding TV layout in place.
// At a boundary, return control to spatial navigation (e.g. Up to the header).
export function scrollFocusedRegion(active, direction) {
  if (!active?.matches('[data-keyboard-scroll]')) return false;
  const horizontal = direction === 'left' || direction === 'right';
  const position = horizontal ? 'scrollLeft' : 'scrollTop';
  const extent = horizontal ? 'scrollWidth' : 'scrollHeight';
  const viewport = horizontal ? 'clientWidth' : 'clientHeight';
  const overflow = horizontal ? 'overflowX' : 'overflowY';
  const sign = direction === 'up' || direction === 'left' ? -1 : 1;
  const regions = [active, ...active.querySelectorAll('*')];
  for (const region of regions) {
    const max = region[extent] - region[viewport];
    if (max <= 1 || !/(auto|scroll)/.test(getComputedStyle(region)[overflow])) continue;
    const current = region[position];
    const next = Math.max(0, Math.min(max, current + sign * Math.max(64, Math.min(320, region[viewport] * 0.65))));
    if (Math.abs(next - current) > 1) {
      region[position] = next;
      return true;
    }
  }
  return false;
}
