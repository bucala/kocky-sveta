import React, { useState } from 'react';
import { Play, Target } from 'lucide-react';
import { GoldButton, Ornament } from '../atoms/GoldButton.jsx';
import { Header } from '../atoms/Header.jsx';
import { TARGET_OPTIONS } from '../constants/game.js';

export function NewTournament({ onBack, onStart }) {
  const [count, setCount] = useState(3);
  const [target, setTarget] = useState(10000);
  const [names, setNames] = useState(['', '', '', '', '', '']);

  const set = (i, v) => setNames(prev => prev.map((n, idx) => idx === i ? v : n));

  function handleStart() {
    const playerNames = names.slice(0, count).map((n, i) => n.trim() || `Hráč ${i + 1}`);
    onStart(playerNames, target);
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nový turnaj" onBack={onBack} />
      <div className="p-5 max-w-md mx-auto space-y-6">
        <div>
          <div className="ks-mono ks-gold text-xs mb-3 flex items-center gap-2"><Target size={12} /> CIEĽ HRY</div>
          <div className="grid grid-cols-2 gap-2">
            {TARGET_OPTIONS.map(opt => (
              <button key={opt.value} onClick={() => setTarget(opt.value)}
                className={`ks-press py-3 px-3 rounded-sm text-left ${target === opt.value ? 'ks-gold-bg' : 'ks-card ks-cream'}`}>
                <div className="ks-display text-2xl font-semibold leading-tight">{opt.value.toLocaleString('sk-SK')}</div>
                <div className={`text-xs ${target === opt.value ? 'opacity-80' : 'ks-muted'}`}>{opt.label}</div>
              </button>
            ))}
          </div>
        </div>
        <Ornament />
        <div>
          <div className="ks-mono ks-gold text-xs mb-3">POČET HRÁČOV</div>
          <div className="grid grid-cols-5 gap-2">
            {[2,3,4,5,6].map(n => (
              <button key={n} onClick={() => setCount(n)}
                className={`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${count === n ? 'ks-gold-bg' : 'ks-card ks-cream'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="ks-mono ks-gold text-xs mb-3">MENÁ HRÁČOV</div>
          <div className="space-y-2">
            {Array.from({ length: count }).map((_, i) => (
              <div key={i} className="ks-card flex items-center gap-3 p-2 rounded-sm">
                <div className="w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold">
                  {i + 1}
                </div>
                <input
                  value={names[i]}
                  onChange={(e) => set(i, e.target.value)}
                  placeholder={`Hráč ${i + 1}`}
                  maxLength={18}
                  className="flex-1 bg-transparent ks-cream ks-body text-lg outline-none placeholder:text-stone-600"
                />
              </div>
            ))}
          </div>
        </div>
        <GoldButton onClick={handleStart} icon={Play} className="w-full text-lg">
          Začať turnaj
        </GoldButton>
      </div>
    </div>
  );
}
