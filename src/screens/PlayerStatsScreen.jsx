import React, { useMemo, useState } from 'react';
import { ChevronLeft, Trophy, Target, TrendingUp, Hash, Award, Percent, Calendar } from 'lucide-react';
import { computeAllStats } from '../lib/stats.js';

const PLAYER_COLORS = ['#d4b86a','#e07070','#7eb8e0','#7ede9a','#e0a870','#b07ee0','#e0d870','#70e0d4'];

function StatCard({ icon: Icon, label, value, sub, color = 'ks-gold' }) {
  return (
    <div className="ks-card rounded-sm p-3 flex flex-col gap-1">
      <div className="flex items-center gap-1.5 ks-muted text-xs ks-mono">
        <Icon size={11} />
        {label}
      </div>
      <div className={`ks-display text-2xl font-bold ${color}`}>{value}</div>
      {sub && <div className="ks-muted text-xs">{sub}</div>}
    </div>
  );
}

function MiniBar({ value, max, color }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div className="h-1.5 rounded-full bg-stone-800 overflow-hidden">
      <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

export function PlayerStatsScreen({ tournaments, onBack }) {
  const stats = useMemo(() => computeAllStats(tournaments), [tournaments]);
  const [selected, setSelected] = useState(0);

  if (stats.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-3 border-b ks-border-sub">
          <button onClick={onBack} className="ks-press p-1"><ChevronLeft size={22} className="ks-gold" /></button>
          <h1 className="ks-display ks-gold text-2xl font-bold flex-1">Štatistiky hráčov</h1>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center px-8">
            <Trophy size={40} className="ks-muted mx-auto mb-3" />
            <div className="ks-display ks-cream text-lg">Žiadne hry v archíve</div>
            <div className="ks-muted text-sm mt-1">Odohraj aspoň jednu hru a vráť sa sem.</div>
          </div>
        </div>
      </div>
    );
  }

  const s = stats[selected];
  const maxGames = Math.max(...stats.map(x => x.games));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-3 border-b ks-border-sub">
        <button onClick={onBack} className="ks-press p-1"><ChevronLeft size={22} className="ks-gold" /></button>
        <h1 className="ks-display ks-gold text-2xl font-bold flex-1">Štatistiky hráčov</h1>
        <div className="ks-mono ks-muted text-xs">{stats.length} hráčov</div>
      </div>

      {/* Player chips */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto border-b ks-border-sub">
        {stats.map((p, i) => (
          <button
            key={p.name}
            onClick={() => setSelected(i)}
            className={`ks-press shrink-0 px-3 py-1.5 rounded-sm ks-mono text-xs font-semibold border transition-colors ${
              i === selected
                ? 'border-amber-600 bg-amber-900/30 ks-gold'
                : 'ks-border-sub ks-muted hover:ks-cream'
            }`}
            style={i === selected ? { borderColor: PLAYER_COLORS[i % PLAYER_COLORS.length] } : {}}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-lg mx-auto w-full">

        {/* Hero */}
        <div className="ks-card rounded-sm p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ks-display"
            style={{ background: PLAYER_COLORS[selected % PLAYER_COLORS.length] + '33', color: PLAYER_COLORS[selected % PLAYER_COLORS.length], border: `2px solid ${PLAYER_COLORS[selected % PLAYER_COLORS.length]}` }}>
            {s.name[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-2xl font-bold">{s.name}</div>
            <div className="ks-muted text-xs mt-0.5">
              {s.games} {s.games === 1 ? 'hra' : s.games < 5 ? 'hry' : 'hier'} · {s.wins}× víťaz{s.draws > 0 ? ` · ${s.draws}× remíza` : ''}
            </div>
          </div>
          {s.winRate >= 50 && <Trophy size={24} className="ks-gold" />}
        </div>

        {/* Stat grid */}
        <div className="grid grid-cols-2 gap-2">
          <StatCard icon={Percent}    label="ÚSPEŠNOSŤ"     value={`${s.winRate}%`}
            sub={`${s.wins} výhier, ${s.draws} remíz`}
            color={s.winRate >= 50 ? 'ks-gold' : 'ks-muted'} />
          <StatCard icon={TrendingUp} label="PRIEM. SKÓRE"  value={s.avgScore.toLocaleString('sk-SK')}
            sub="bodov za hru" />
          <StatCard icon={Target}     label="PRIEM. HOD"    value={s.avgRound > 0 ? s.avgRound.toLocaleString('sk-SK') : '—'}
            sub="bodov za kolo" />
          <StatCard icon={Award}      label="REKORD"        value={s.bestGame.toLocaleString('sk-SK')}
            sub="bodov v jednej hre" />
          <StatCard icon={Hash}       label="ODOHRATÉ KOLÁ" value={s.roundsPlayed.toLocaleString('sk-SK')}
            sub={`~${s.games > 0 ? Math.round(s.roundsPlayed / s.games) : 0} kôl / hra`} />
          <StatCard icon={Calendar}   label="HRY CELKOM"    value={s.games}
            sub={`s: ${s.topOpponent}`} />
        </div>

        {/* Ranking bar */}
        <div className="ks-card rounded-sm p-3 space-y-2">
          <div className="ks-mono ks-muted text-xs mb-3">POROVNANIE HRÁČOV — POČET HIER</div>
          {stats.map((p, i) => (
            <div key={p.name} className="space-y-1">
              <div className="flex items-center gap-2">
                <div className={`ks-mono text-xs w-28 truncate ${i === selected ? 'ks-gold font-semibold' : 'ks-muted'}`}>{p.name}</div>
                <div className="flex-1">
                  <MiniBar value={p.games} max={maxGames} color={PLAYER_COLORS[i % PLAYER_COLORS.length]} />
                </div>
                <div className="ks-mono ks-muted text-xs w-8 text-right">{p.games}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Win rate ranking */}
        <div className="ks-card rounded-sm p-3 space-y-2">
          <div className="ks-mono ks-muted text-xs mb-3">ÚSPEŠNOSŤ HRÁČOV</div>
          {[...stats].sort((a, b) => b.winRate - a.winRate).map((p, i) => (
            <div key={p.name} className="flex items-center gap-2">
              <div className="ks-mono ks-muted text-xs w-5 text-right">{i + 1}.</div>
              <div className={`ks-mono text-xs flex-1 truncate ${p.name === s.name ? 'ks-gold font-semibold' : 'ks-muted'}`}>{p.name}</div>
              <div className="flex-1">
                <MiniBar value={p.winRate} max={100} color={PLAYER_COLORS[stats.indexOf(p) % PLAYER_COLORS.length]} />
              </div>
              <div className="ks-mono ks-muted text-xs w-10 text-right">{p.winRate}%</div>
            </div>
          ))}
        </div>

        {/* Recent games */}
        {s.recentGames.length > 0 && (
          <div className="ks-card rounded-sm p-3">
            <div className="ks-mono ks-muted text-xs mb-3">POSLEDNÉ HRY</div>
            <div className="space-y-2">
              {s.recentGames.map((g, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <div className={`w-14 text-center ks-mono font-semibold px-1.5 py-0.5 rounded-sm ${
                    g.win && !g.draw ? 'bg-green-900/40 text-green-400' :
                    g.draw ? 'bg-amber-900/40 ks-gold' :
                    'bg-stone-800 ks-muted'
                  }`}>
                    {g.win && !g.draw ? 'VÝHRA' : g.draw ? 'REMÍZA' : 'PREHRA'}
                  </div>
                  <div className="ks-display ks-cream font-semibold">{g.score.toLocaleString('sk-SK')}</div>
                  <div className="ks-muted flex-1 truncate">vs {g.players.filter(p => p !== s.name).join(', ')}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
