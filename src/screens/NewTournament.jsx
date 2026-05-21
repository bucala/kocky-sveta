import React, { useState, useRef } from 'react';
import { Play, Target, Plus, X, UserPlus, Check } from 'lucide-react';
import { GoldButton, Ornament } from '../atoms/GoldButton.jsx';
import { Header } from '../atoms/Header.jsx';
import { TARGET_OPTIONS } from '../constants/game.js';

export function NewTournament({ onBack, onStart, knownPlayers = [], onKnownPlayersChange }) {
  const [count, setCount] = useState(3);
  const [target, setTarget] = useState(10000);
  const [selected, setSelected] = useState([]); // ordered list of selected names
  const [newName, setNewName] = useState('');
  const [showAddInput, setShowAddInput] = useState(false);
  const inputRef = useRef(null);

  const togglePlayer = (name) => {
    setSelected(prev => {
      if (prev.includes(name)) {
        return prev.filter(n => n !== name);
      }
      if (prev.length >= count) {
        // replace last slot
        return [...prev.slice(0, count - 1), name];
      }
      return [...prev, name];
    });
  };

  const removeSlot = (i) => {
    setSelected(prev => prev.filter((_, idx) => idx !== i));
  };

  const handleAddNew = () => {
    const trimmed = newName.trim();
    if (!trimmed) return;
    if (!knownPlayers.includes(trimmed)) {
      onKnownPlayersChange?.([...knownPlayers, trimmed]);
    }
    if (selected.length < count && !selected.includes(trimmed)) {
      setSelected(prev => [...prev, trimmed]);
    }
    setNewName('');
    setShowAddInput(false);
  };

  const removeKnown = (name) => {
    onKnownPlayersChange?.(knownPlayers.filter(n => n !== name));
    setSelected(prev => prev.filter(n => n !== name));
  };

  function handleStart() {
    const playerNames = Array.from({ length: count }, (_, i) =>
      selected[i]?.trim() || `Hráč ${i + 1}`
    );
    onStart(playerNames, target);
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nový turnaj" onBack={onBack} />
      <div className="p-5 max-w-md mx-auto space-y-6">

        {/* Target */}
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

        {/* Player count */}
        <div>
          <div className="ks-mono ks-gold text-xs mb-3">POČET HRÁČOV</div>
          <div className="grid grid-cols-5 gap-2">
            {[2,3,4,5,6].map(n => (
              <button key={n} onClick={() => { setCount(n); setSelected(prev => prev.slice(0, n)); }}
                className={`ks-press py-3 rounded-sm ks-display text-2xl font-semibold ${count === n ? 'ks-gold-bg' : 'ks-card ks-cream'}`}>
                {n}
              </button>
            ))}
          </div>
        </div>

        {/* Selected slots */}
        <div>
          <div className="ks-mono ks-gold text-xs mb-3">VYBRANÍ HRÁČI</div>
          <div className="space-y-2">
            {Array.from({ length: count }).map((_, i) => {
              const name = selected[i];
              return (
                <div key={i} className="ks-card flex items-center gap-3 p-2 rounded-sm">
                  <div className="w-9 h-9 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-semibold flex-shrink-0">
                    {i + 1}
                  </div>
                  {name ? (
                    <>
                      <span className="flex-1 ks-cream ks-body text-lg">{name}</span>
                      <button onClick={() => removeSlot(i)} className="ks-press opacity-50 hover:opacity-100 p-1">
                        <X size={16} />
                      </button>
                    </>
                  ) : (
                    <span className="flex-1 ks-muted ks-body text-base italic">Vyber hráča nižšie…</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Ornament />

        {/* Known players picker */}
        <div>
          <div className="ks-mono ks-gold text-xs mb-3 flex items-center justify-between">
            <span>ZOZNAM HRÁČOV</span>
            <button
              onClick={() => { setShowAddInput(v => !v); setTimeout(() => inputRef.current?.focus(), 50); }}
              className="ks-press flex items-center gap-1 text-xs opacity-70 hover:opacity-100"
            >
              <UserPlus size={12} /> Pridať
            </button>
          </div>

          {showAddInput && (
            <div className="ks-card flex items-center gap-2 p-2 rounded-sm mb-3">
              <input
                ref={inputRef}
                value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAddNew(); if (e.key === 'Escape') { setShowAddInput(false); setNewName(''); } }}
                placeholder="Meno nového hráča"
                maxLength={18}
                className="flex-1 bg-transparent ks-cream ks-body text-base outline-none placeholder:text-stone-600"
              />
              <button onClick={handleAddNew} className="ks-press ks-gold p-1"><Check size={16} /></button>
              <button onClick={() => { setShowAddInput(false); setNewName(''); }} className="ks-press opacity-50 p-1"><X size={16} /></button>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {knownPlayers.map(name => {
              const isSelected = selected.includes(name);
              const slotIndex = selected.indexOf(name);
              return (
                <div key={name} className="relative group">
                  <button
                    onClick={() => togglePlayer(name)}
                    className={`ks-press px-3 py-1.5 rounded-full ks-body text-sm flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? 'ks-gold-bg font-semibold'
                        : 'ks-card ks-cream border ks-border'
                    }`}
                  >
                    {isSelected && (
                      <span className="w-4 h-4 rounded-full bg-black/20 flex items-center justify-center text-xs font-bold leading-none">
                        {slotIndex + 1}
                      </span>
                    )}
                    {name}
                  </button>
                  {/* Remove from known list */}
                  <button
                    onClick={() => removeKnown(name)}
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-900 text-red-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ks-press"
                    title="Odstrániť zo zoznamu"
                  >
                    <X size={9} />
                  </button>
                </div>
              );
            })}
            {knownPlayers.length === 0 && (
              <span className="ks-muted text-sm italic">Žiadni hráči. Pridaj prvého hráča.</span>
            )}
          </div>
        </div>

        <GoldButton onClick={handleStart} icon={Play} className="w-full text-lg">
          Začať turnaj
        </GoldButton>
      </div>
    </div>
  );
}
