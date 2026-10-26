import { describe, it, expect } from 'vitest';
import { translate, numberLocale } from './i18n.js';

describe('translate', () => {
  it('doplní premenné', () => {
    expect(translate('sk', 'toast.turn', { name: 'Jano' })).toBe('Na rade: Jano');
    expect(translate('en', 'toast.minEntry', { min: 300 })).toBe('Each entry must be at least 300 points, or record a pass.');
  });

  it('chýbajúcu premennú nechá v texte', () => {
    expect(translate('sk', 'toast.turn')).toBe('Na rade: {name}');
  });

  it('chýbajúci anglický kľúč padne na slovenský, neznámy vráti kľúč', () => {
    expect(translate('en', 'neexistuje')).toBe('neexistuje');
    expect(translate('xx', 'back')).toBe('Späť');
  });

  it('herná obrazovka a hlášky majú anglický preklad', () => {
    const sk = ['back', 'game.commit', 'toast.overDash', 'toast.reachedTarget', 'game.undo'];
    for (const k of sk) expect(translate('en', k)).not.toBe(translate('sk', k));
  });

  it('čísla podľa jazyka', () => {
    expect((10000).toLocaleString(numberLocale('en'))).toBe('10,000');
  });
});
