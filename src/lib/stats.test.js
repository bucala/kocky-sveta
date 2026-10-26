import { describe, it, expect } from 'vitest';
import { getWinners, isCompletedGame, computeAllStats } from './stats.js';

const game = (extra) => ({
  players: ['Ana', 'Bo'],
  rounds: [[10000, 1000]],
  targetScore: 10000,
  status: 'finished',
  winner: 0,
  date: '2026-01-01T10:00:00Z',
  finishedAt: '2026-01-01T11:00:00Z',
  ...extra,
});

describe('getWinners', () => {
  it('číslo z hry', () => expect(getWinners(game())).toEqual([0]));
  it('pole pri remíze', () => expect(getWinners(game({ winner: [0, 1] }))).toEqual([0, 1]));
  it('OCR import s winners', () => expect(getWinners(game({ winner: undefined, winners: [1] }))).toEqual([1]));
  it('bez víťaza', () => expect(getWinners(game({ winner: null }))).toEqual([]));
  it('ignoruje neplatné indexy', () => expect(getWinners(game({ winner: [0, 7] }))).toEqual([0]));
});

describe('isCompletedGame', () => {
  it('dohraná hra', () => expect(isCompletedGame(game())).toBe(true));
  it('zrušená hra', () => expect(isCompletedGame(game({ status: 'aborted', winner: null }))).toBe(false));
  it('OCR bez statusu, s víťazom', () => expect(isCompletedGame(game({ status: undefined, winner: undefined, winners: [0] }))).toBe(true));
});

describe('computeAllStats', () => {
  it('započíta výhru z hry odohranej v aplikácii', () => {
    const [ana, bo] = computeAllStats([game()]);
    expect(ana).toMatchObject({ name: 'Ana', games: 1, wins: 1, winRate: 100 });
    expect(ana.recentGames[0].win).toBe(true);
    expect(bo).toMatchObject({ name: 'Bo', games: 1, wins: 0 });
  });

  it('remíza sa ráta ako pol výhry', () => {
    const s = computeAllStats([game({ rounds: [[10000, 10000]], winner: [0, 1] })]);
    expect(s.every(p => p.draws === 1 && p.winRate === 50)).toBe(true);
  });

  it('zrušené hry sa nerátajú', () => {
    const s = computeAllStats([game(), game({ status: 'aborted', winner: null, rounds: [[300, 300]] })]);
    expect(s.find(p => p.name === 'Ana').games).toBe(1);
  });

  it('posledné hry sú od najnovšej', () => {
    const s = computeAllStats([
      game({ finishedAt: '2026-01-01T00:00:00Z' }),
      game({ finishedAt: '2026-03-01T00:00:00Z', winner: 1, rounds: [[1000, 10000]] }),
    ]);
    const ana = s.find(p => p.name === 'Ana');
    expect(ana.recentGames.map(g => g.date)).toEqual(['2026-03-01T00:00:00Z', '2026-01-01T00:00:00Z']);
  });

  it('mená nezáleží na veľkosti písmen', () => {
    const s = computeAllStats([game(), game({ players: ['ana ', 'Bo'] })]);
    expect(s.find(p => p.name === 'Ana').games).toBe(2);
  });

  it('nespadne na mene, ktoré nie je text', () => {
    expect(() => computeAllStats([game({ players: [42, 'Bo'] })])).not.toThrow();
  });
});
