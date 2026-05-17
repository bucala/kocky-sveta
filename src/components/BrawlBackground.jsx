import React, { useMemo } from 'react';

const SYMBOLS_BRAWL = ['🎲', '🎲', '🃏', '🪙', '🎰', '⭐', '💠', '🎲'];
const SYMBOLS_BLUE  = ['💠', '🌊', '⚡', '🔷', '❄️', '🌀', '💎', '⚡'];
const SYMBOLS_HP    = ['⚡', '🦉', '🪄', '✨', '🔮', '🐍', '⭐', '🪄'];

const FLOAT_CLASS = {
  brawlstars: 'ks-brawl-float',
  brawlblue:  'ks-brawl-float',
  harrypotter: 'ks-hp-float',
};

export function BrawlBackground({ skin }) {
  const symbols = skin === 'brawlblue' ? SYMBOLS_BLUE
    : skin === 'harrypotter' ? SYMBOLS_HP
    : SYMBOLS_BRAWL;

  const floatClass = FLOAT_CLASS[skin] || 'ks-brawl-float';

  const items = useMemo(() => symbols.map((sym, i) => ({
    sym,
    left: `${8 + (i * 12) % 84}%`,
    animationDelay: `${i * 1.4}s`,
    animationDuration: `${10 + (i % 4) * 2}s`,
    fontSize: `${1.5 + (i % 3) * 0.45}rem`,
  })), [skin]);

  return (
    <>
      {items.map((item, i) => (
        <span
          key={i}
          className={floatClass}
          style={{
            left: item.left,
            animationDelay: item.animationDelay,
            animationDuration: item.animationDuration,
            fontSize: item.fontSize,
          }}
        >
          {item.sym}
        </span>
      ))}
    </>
  );
}
