import React from 'react';
import { Crown } from 'lucide-react';
import { PLAYER_COLORS, getInitials } from '../lib/extensions.js';

// Statické veľké zobrazenie skóre — bez riadkov jednotlivých kôl, iba mená
// hráčov a ich aktuálne skóre vo veľkom fonte. Používané v zjednodušených
// zobrazovacích režimoch (Klasický zjednodušený / Pozorovateľ zjednodušený).
// Layout sa nehýbe, menia sa iba hodnoty. Mená aj hodnoty sú vždy farebne
// odlíšené presne podľa farieb hráčov v grafe priebehu hry (ProgressChart),
// aby bolo možné hráča identifikovať bez legendy.
export function BigScoreDisplay({ players, totals, highlightPlayer, target, extensions = {}, size = 'lg', showRank = false, showTarget = false }) {
  const maxTotal = Math.max(...totals, 0);
  const leaderIdx = totals.indexOf(maxTotal);
  const sortedDesc = [...totals].sort((a, b) => b - a);

  // Font veľkosti sú capnuté aj cez vh (nielen vw) — pri landscape orientácii
  // (široký, ale nízky viewport) by čisto vw-based clamp() vyprodukoval text
  // vyšší než dostupná výška karty, ktorý by potom pretiekol do sekcie pod ňou.
  const nameSize = size === 'xl' ? 'clamp(20px, min(4.5vw, 7vh), 56px)' : 'clamp(15px, min(2.6vw, 4.2vh), 30px)';
  const scoreSize = size === 'xl' ? 'clamp(36px, min(9vw, 13vh), 120px)' : 'clamp(24px, min(5vw, 7.5vh), 60px)';
  const crownSize = size === 'xl' ? 34 : 20;
  const cardPad = size === 'xl' ? 'p-4 sm:p-8' : 'p-3 sm:p-5';
  // Voľba počtu stĺpcov cieli na čo najmenej prázdnych buniek (3 hráči → 3
  // stĺpce v 1 riadku namiesto 2×2 mriežky s prázdnou 4. bunkou).
  const cols = players.length === 3 ? 3 : players.length <= 2 ? players.length : players.length === 4 ? 2 : 3;

  return (
    <div
      className="grid gap-2 sm:gap-3 w-full h-full"
      style={{ gridTemplateColumns: `repeat(${Math.min(cols, players.length)}, minmax(0, 1fr))`, gridAutoRows: 'minmax(0, 1fr)' }}
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
            className={`relative ks-card rounded-sm ${cardPad} h-full flex flex-col items-center justify-center text-center gap-1 overflow-hidden transition-colors ${
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
              className={`ks-display font-bold leading-none ${t < 0 ? 'text-red-300' : ''}`}
              style={{ fontSize: scoreSize, color: t < 0 ? undefined : color }}
            >
              {t.toLocaleString('sk-SK')}
            </div>
            {showTarget && (
              <div className="ks-mono ks-muted" style={{ fontSize: size === 'xl' ? 'clamp(10px, 1.4vw, 16px)' : 'clamp(9px, 1.1vw, 13px)' }}>
                / {target.toLocaleString('sk-SK')}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
