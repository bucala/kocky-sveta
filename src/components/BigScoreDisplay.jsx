import React from 'react';
import { Crown } from 'lucide-react';
import { PLAYER_COLORS, getInitials } from '../lib/extensions.js';

// Statické veľké zobrazenie skóre — bez riadkov jednotlivých kôl, iba mená
// hráčov a ich aktuálne skóre vo veľkom fonte. Používané v zjednodušených
// zobrazovacích režimoch (Klasický zjednodušený / Pozorovateľ zjednodušený).
// Layout sa nehýbe, menia sa iba hodnoty. Mená aj hodnoty sú vždy farebne
// odlíšené presne podľa farieb hráčov v grafe priebehu hry (ProgressChart),
// aby bolo možné hráča identifikovať bez legendy.
export function BigScoreDisplay({ players, totals, highlightPlayer, target, extensions = {}, size = 'lg', showRank = false }) {
  const maxTotal = Math.max(...totals, 0);
  const leaderIdx = totals.indexOf(maxTotal);
  const sortedDesc = [...totals].sort((a, b) => b - a);

  const isXl = size === 'xl';
  // Počet stĺpcov: na výšku orientovaných zariadeniach (telefón) zostáva max 3,
  // na širokých displejoch (TV/landscape) môže ísť viac hráčov do 4 stĺpcov.
  const isPortrait = typeof window !== 'undefined' && window.innerHeight > window.innerWidth;
  const cols = players.length <= 2 ? 1
    : players.length <= 4 ? 2
    : (players.length <= 6 || isPortrait) ? 3
    : 4;
  const rows = Math.ceil(players.length / cols);

  // Veľkosti písma sa škálajú podľa ŠÍRKY aj VÝŠKY zariadenia (min(vw, vh)).
  // Pri viacerých riadkoch kariet sa výškový limit príslušne zmenší (delenie
  // počtom riadkov), aby mriečka vždy zaplnila dostupný priestor bez
  // orezávania — kľúčové pre televízory s 16:9 pomerom strán.
  const vhPerRow = (vh) => rows > 1 ? `calc(${vh} / ${rows})` : `${vh}`;
  const nameSize = isXl
    ? `clamp(20px, min(4.5vw, ${vhPerRow('6.5vh')}), 56px)`
    : 'clamp(16px, 2.6vw, 30px)';
  const scoreSize = isXl
    ? `clamp(36px, min(9vw, ${vhPerRow('13vh')}), 120px)`
    : 'clamp(28px, 5vw, 60px)';
  const crownSize = isXl ? 34 : 20;
  const cardPad = isXl ? 'p-4 sm:p-8' : 'p-4 sm:p-6';

  return (
    <div
      className={`grid gap-3 sm:gap-4 w-full ${isXl ? 'h-full' : ''}`}
      style={{ gridTemplateColumns: `repeat(${Math.min(cols, players.length)}, minmax(0, 1fr))` }}
    >
      {players.map((p, i) => {
        const isLeader = extensions.leaderCrown && i === leaderIdx && maxTotal > 0;
        const isCurrent = i === highlightPlayer;
        const t = totals[i];
        const color = PLAYER_COLORS[i % PLAYER_COLORS.length];
        const rank = sortedDesc.indexOf(t) + 1;
        return (
          <div
            key={i}
            className={`relative ks-card rounded-sm ${cardPad} flex flex-col items-center justify-center text-center gap-2 transition-colors ${
              isCurrent ? 'ks-border-accent border bg-amber-900/10' : 'border ks-border-sub'
            }`}
          >
            {showRank && (
              <div className="absolute top-2 right-2 flex items-center justify-center rounded-full ks-gold-bg"
                   style={{ width: crownSize * 1.1, height: crownSize * 1.1 }}>
                {rank === 1 ? (
                  <Crown size={crownSize * 0.6} className="text-black" fill="currentColor" />
                ) : (
                  <span className="ks-display font-bold text-black" style={{ fontSize: crownSize * 0.5 }}>{rank}</span>
                )}
              </div>
            )}
            <div className="flex items-center gap-2 min-w-0 max-w-full">
              {isLeader && <Crown size={crownSize} className="ks-gold shrink-0" fill="currentColor" />}
              {extensions.coloredAvatars && (
                <span
                  className="rounded-full shrink-0 flex items-center justify-center font-bold"
                  style={{ width: crownSize, height: crownSize, fontSize: crownSize * 0.42, background: color, color: '#1a1410' }}
                >
                  {getInitials(p)}
                </span>
              )}
              <span
                className="ks-display font-semibold truncate"
                style={{ fontSize: nameSize, lineHeight: 1.1, color }}
              >
                {p}
              </span>
            </div>
            <div
              className="ks-display font-bold leading-none"
              style={{ fontSize: scoreSize, color }}
            >
              {t.toLocaleString('sk-SK')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
