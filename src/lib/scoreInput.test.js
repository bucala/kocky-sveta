import { describe, it, expect } from 'vitest';
import { parseScoreCell } from './scoreInput.js';

describe('parseScoreCell', () => {
  it.each([
    ['', null], ['  ', null], ['500', 500], ['-1000', -1000], ['−1000', -1000],
    ['1 000', 1000], ['1.000', 1000], ['1 000', 1000], ['—', 'dash'], ['-', 'dash'], ['dash', 'dash'],
  ])('%j → %j', (input, value) => expect(parseScoreCell(input)).toEqual({ ok: true, value }));

  it.each(['abc', '12a', '1,5', '--5'])('%j je neplatné', (input) => {
    expect(parseScoreCell(input).ok).toBe(false);
  });
});
