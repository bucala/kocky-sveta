import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Plus, Minus, Trash2, Save, X, ChevronLeft,
  BookOpen, Archive as ArchiveIcon, Settings, Trophy, Users,
  AlertCircle, AlertTriangle, Check, Play, RotateCcw, ScrollText, Crown,
  Calendar, ChevronRight, ListPlus, Pencil, Zap, Skull, Target,
  Download, Upload, Edit3, Clock, FileSpreadsheet, ChevronDown, TrendingUp,
  Sigma, Layers, Monitor, Bell
} from 'lucide-react';

function ScoreTable({ tournament, totals, highlightPlayer, pendingPreview = 0, target, displayMode = 'delta', onToggleMode, hideModeToolbar = false, hideModeToggle = false, compactObserver = false }) {
  if (!tournament || !Array.isArray(tournament.players)) return null;
  const { players, rounds } = tournament;
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef.current) tableRef.current.scrollTop = tableRef.current.scrollHeight;
  }, [rounds.length]);

  const numRounds = Math.max(rounds.length, tournament.currentRound ?? 1);

  // Predpočítané kumulatívne stavy pre každého hráča v každom kole.
  // V kumul. móde zobrazíme tieto namiesto delta hodnôt.
  const cumulative = useMemo(() => {
    const result = Array.from({ length: numRounds }, () => new Array(players.length).fill(null));
    const running = new Array(players.length).fill(0);
    const everScored = new Array(players.length).fill(false);
    for (let r = 0; r < rounds.length; r++) {
      for (let p = 0; p < players.length; p++) {
        const v = rounds[r][p];
        if (typeof v === 'number') {
          running[p] += v;
          everScored[p] = true;
          result[r][p] = running[p];
        } else if (v === 'dash') {
          // Čiarka: ak hráč už predtým bodoval, kumulatívne ostáva (zobrazíme ako predošlú hodnotu — alebo radšej '—')
          result[r][p] = 'dash';
        } else {
          result[r][p] = null;
        }
      }
    }
    return result;
  }, [rounds, numRounds, players.length]);

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      {/* Toolbar s prepínačom módu — skrytý ak je tlačidlo už v Headeri */}
      {onToggleMode && !hideModeToolbar && (
        <div className={`flex items-center justify-between border-b border-amber-900/30 bg-stone-950/60 ${compactObserver ? 'px-3 py-1' : 'px-3 py-1.5'}`}>
          <div className={`ks-display ks-gold text-center flex-1 ${compactObserver ? 'text-xs' : 'text-sm'}`}>POZOROVATEĽ · ŽIVÝ PREHĽAD SKÓRE</div>
          {!hideModeToggle && (
            <button onClick={onToggleMode} className={`ks-press ks-mono ks-gold flex items-center gap-1 rounded-sm hover:bg-amber-900/20 ${compactObserver ? 'text-[10px] px-2 py-0.5' : 'text-[10px] px-2 py-0.5'}`}>
              <RotateCcw size={10} />
              {displayMode === 'delta' ? 'Σ' : 'Δ'}
            </button>
          )}
        </div>
      )}
      <div className="overflow-x-auto ks-live-table-wrap">
        {/* inline style pre tableLayout a minWidth odstránený — riešené cez .ks-live-table v index.css */}
        <table className="border-collapse ks-live-table">
          <colgroup>
            <col style={{ width: 36 }} />
            {players.map((_, i) => (
              <col key={i} style={{ width: `${100 / (players.length + 0.15)}%`, minWidth: `${Math.max(72, 300 / Math.max(players.length, 1))}px` }} />
            ))}
          </colgroup>
          <thead>
            <tr className="border-b border-amber-900/40">
              <th className="ks-mono ks-muted text-xs font-normal py-3 px-2 text-center sticky left-0 backdrop-blur" style={{ width: 36, background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>K</th>
              {players.map((p, i) => (
                <th key={i}
                    className={`ks-display py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis ${i === highlightPlayer ? 'ks-gold' : 'ks-cream'}`}>
                  {p}
                </th>
              ))}
            </tr>
          </thead>
          <tbody ref={tableRef}>
            {Array.from({ length: numRounds }).map((_, rIdx) => (
              <tr key={rIdx} className="border-b border-amber-900/15 ks-live-row">
                <td className="ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>{rIdx + 1}</td>
                {players.map((_, pIdx) => {
                  const raw = rounds[rIdx]?.[pIdx];
                  const cum = cumulative[rIdx]?.[pIdx];
                  const value = displayMode === 'cumulative' ? cum : raw;
                  const isCurrent = pIdx === highlightPlayer && rIdx === tournament.currentRound;
                  return (
                    <td key={pIdx}
                        className={`text-center py-1.5 px-1 ks-display text-base align-middle ${isCurrent ? 'bg-amber-900/20' : ''}`}>
                      {value === 'dash' && <span className="ks-muted">—</span>}
                      {typeof value === 'number' && (
                        <span className={`font-medium ${value < 0 ? 'text-red-300' : 'ks-cream'}`}>
                          {value.toLocaleString('sk-SK')}
                        </span>
                      )}
                      {(value === null || value === undefined) && (
                        isCurrent && pendingPreview > 0
                          ? <span className="ks-gold italic opacity-70">+{pendingPreview}</span>
                          : <span className="ks-muted">·</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-amber-700/50">
              <td className="ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg2, rgba(10,8,6,0.98))' }}>Σ</td>
              {totals.map((t, i) => {
                const reached = target && t >= target;
                return (
                  <td key={i}
                      className={`text-center py-2 px-2 ks-display text-lg font-bold ${
                        t < 0 ? 'text-red-300' : reached ? 'ks-gold' : i === highlightPlayer ? 'ks-gold' : 'ks-cream'
                      }`}>
                    {t.toLocaleString('sk-SK')}
                  </td>
                );
              })}
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

// ─── Modal + tabuľka poradia ──────────────────────────────────────────────

export default React.memo(ScoreTable);
