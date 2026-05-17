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
import { X } from 'lucide-react';

function Modal({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-0 sm:p-4"
         style={{ background: 'var(--ks-modal-overlay, rgba(0,0,0,0.7))' }} onClick={onClose}>
      <div className="ks-card w-full max-w-lg max-h-[85vh] flex flex-col rounded-t-lg sm:rounded-sm ks-fade"
           onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b ks-border-sub">
          <h3 className="ks-display ks-gold text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="ks-press ks-cream p-1"><X size={22} /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4" style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-y" }}>{children}</div>
      </div>
    </div>
  );
}

function Standings({ players, totals, target }) {
  const ranked = players
    .map((name, i) => ({ name, total: totals[i], i }))
    .sort((a, b) => b.total - a.total);

  return (
    <div className="space-y-2">
      {ranked.map((p, idx) => {
        const pct = target ? Math.min(100, Math.max(0, (p.total / target) * 100)) : 0;
        return (
          <div key={p.i} className="flex items-center gap-3 p-3 rounded-sm border border-amber-900/30">
            <div className={`w-10 h-10 rounded-sm flex items-center justify-center ks-display text-xl font-bold
              ${idx === 0 ? 'ks-gold-bg' : 'border border-amber-900/40 ks-gold'}`}>
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="ks-display ks-cream text-lg font-semibold truncate">{p.name}</div>
              {target && (
                <div className="h-1 bg-stone-900 rounded-full overflow-hidden mt-1">
                  <div className="h-full ks-gold-bg" style={{ width: `${pct}%` }} />
                </div>
              )}
            </div>
            <div className={`ks-display text-2xl font-bold ${p.total < 0 ? 'text-red-300' : 'ks-gold'}`}>
              {p.total.toLocaleString('sk-SK')}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Pravidlá ─────────────────────────────────────────────────────────────

// ─── Graf priebehu hry ────────────────────────────────────────────────────

const PLAYER_COLORS = ['#d4b86a', '#e08854', '#7ba88a', '#c47880', '#80a8c4', '#b89580'];


function ProgressChart({ tournament, totals, target }) {
  const { players, rounds } = tournament;

  // Dáta pre graf — kumulatívne skóre po každom kole, vrátane 0 na začiatku
  const data = useMemo(() => {
    const series = [];
    const cumulative = players.map(() => 0);
    series.push({ kolo: 0, ...players.reduce((acc, p, i) => ({ ...acc, [`p${i}`]: 0 }), {}) });
    rounds.forEach((round, rIdx) => {
      round.forEach((v, pIdx) => {
        if (typeof v === 'number') cumulative[pIdx] += v;
        // 'dash' alebo null = nezmena
      });
      const point = { kolo: rIdx + 1 };
      players.forEach((_, i) => { point[`p${i}`] = cumulative[i]; });
      series.push(point);
    });
    return series;
  }, [players, rounds]);

  // Aktuálne poradie pre legendu (zoradené podľa skóre)
  const ranked = players
    .map((name, i) => ({ name, total: totals[i], i, color: PLAYER_COLORS[i % PLAYER_COLORS.length] }))
    .sort((a, b) => b.total - a.total);

  const yMax = Math.max(target, ...totals) + 200;
  const yMin = Math.min(0, ...totals) - 100;

  // Zaobaľený tooltip v štýle aplikácie
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;
    return (
      <div className="ks-card rounded-sm p-2.5" style={{ background: 'rgba(20,16,12,0.97)' }}>
        <div className="ks-mono ks-gold text-xs mb-1.5">KOLO {label}</div>
        <div className="space-y-0.5">
          {payload
            .slice()
            .sort((a, b) => b.value - a.value)
            .map((entry) => {
              const idx = parseInt(entry.dataKey.slice(1), 10);
              return (
                <div key={entry.dataKey} className="flex items-center gap-2 text-xs ks-body">
                  <span style={{ width: 10, height: 2, background: entry.color, display: 'inline-block' }} />
                  <span className="ks-cream flex-1">{players[idx]}</span>
                  <span className="ks-display ks-gold font-semibold">{entry.value.toLocaleString('sk-SK')}</span>
                </div>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Legenda hráčov s aktuálnym skóre */}
      <div className="grid grid-cols-2 gap-1.5">
        {ranked.map((p, idx) => {
          const pct = target ? Math.min(100, Math.max(0, (p.total / target) * 100)) : 0;
          return (
            <div key={p.i} className="flex items-center gap-2 p-2 rounded-sm border border-amber-900/25 bg-stone-950/30">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: p.color }} />
              <div className="ks-display ks-cream text-sm font-semibold truncate flex-1">
                {idx === 0 && p.total > 0 && <Crown size={11} className="ks-gold inline mr-1 -mt-0.5" />}
                {p.name}
              </div>
              <div className={`ks-display text-sm font-bold ${p.total < 0 ? 'text-red-300' : 'ks-gold'}`}>
                {p.total.toLocaleString('sk-SK')}
              </div>
            </div>
          );
        })}
      </div>

      {/* Graf */}
      <div className="ks-card rounded-sm p-3" style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 12, left: -10, bottom: 4 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="rgba(201,168,92,0.12)" />
            <XAxis
              dataKey="kolo"
              stroke="#a89679"
              tick={{ fontSize: 10, fill: '#a89679' }}
              tickLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              axisLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              label={{ value: 'Kolo', position: 'insideBottom', offset: -2, fill: '#a89679', fontSize: 10 }}
            />
            <YAxis
              stroke="#a89679"
              tick={{ fontSize: 10, fill: '#a89679' }}
              tickLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              axisLine={{ stroke: 'rgba(201,168,92,0.3)' }}
              domain={[yMin, yMax]}
              tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(v % 1000 === 0 ? 0 : 1)}k` : v}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine
              y={target}
              stroke="#d4b86a"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={{ value: `Cieľ ${target.toLocaleString('sk-SK')}`, fill: '#d4b86a', fontSize: 10, position: 'insideTopRight' }}
            />
            <ReferenceLine y={0} stroke="rgba(201,168,92,0.2)" />
            {players.map((_, i) => (
              <Line
                key={i}
                type="monotone"
                dataKey={`p${i}`}
                stroke={PLAYER_COLORS[i % PLAYER_COLORS.length]}
                strokeWidth={2}
                dot={{ r: 2.5, strokeWidth: 0 }}
                activeDot={{ r: 5, strokeWidth: 2, stroke: '#0e0c0a' }}
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {data.length <= 1 && (
        <div className="ks-muted text-xs italic text-center">
          Graf sa naplní po prvom kole.
        </div>
      )}
    </div>
  );
}

function rulesView({ rules, onBack }) {

export { Modal, Standings };
export { ProgressChart };
