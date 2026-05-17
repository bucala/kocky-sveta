import React from 'react';
import { Volume2, VolumeX, Zap, ZapOff } from 'lucide-react';
import { Header, SkinSelector, FontSelector } from '../components/ui.jsx';

function Toggle({ enabled, onToggle, labelOn, labelOff, iconOn: IconOn, iconOff: IconOff }) {
  return (
    <button
      onClick={onToggle}
      className={`ks-press flex items-center gap-3 w-full px-4 py-3 rounded-sm border transition-colors ${
        enabled ? 'ks-border-accent border bg-amber-950/20' : 'ks-border-sub border'
      }`}
    >
      <div className={`flex-shrink-0 ${enabled ? 'ks-gold' : 'ks-muted'}`}>
        {enabled ? <IconOn size={20} /> : <IconOff size={20} />}
      </div>
      <div className="flex-1 text-left">
        <div className={`text-sm font-semibold ${enabled ? 'ks-cream' : 'ks-muted'}`}>
          {enabled ? labelOn : labelOff}
        </div>
      </div>
      <div className={`w-10 h-5 rounded-full transition-colors flex-shrink-0 ${enabled ? 'ks-gold-bg' : 'bg-stone-700'}`}>
        <div className={`w-5 h-5 rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
      </div>
    </button>
  );
}

export function VisualAndSkinScreen({
  onBack, selectedSkin, onSkinChange, selectedFont, onFontChange,
  tournamentViewMode, onTournamentViewModeChange, onViewModes,
  soundsEnabled, onSoundsToggle, animationsEnabled, onAnimationsToggle,
}) {
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Vizuál, Zvuky a Skiny" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-5">

        {/* Zvuky */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">ZVUKOVÉ EFEKTY</div>
        <Toggle
          enabled={soundsEnabled}
          onToggle={onSoundsToggle}
          labelOn="Zvuky zapnuté"
          labelOff="Zvuky vypnuté"
          iconOn={Volume2}
          iconOff={VolumeX}
        />

        {/* Animácie */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">ANIMÁCIE</div>
        <Toggle
          enabled={animationsEnabled}
          onToggle={onAnimationsToggle}
          labelOn="Animácie zapnuté"
          labelOff="Animácie vypnuté"
          iconOn={Zap}
          iconOff={ZapOff}
        />

        {/* Skiny */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">SKINY</div>
        <SkinSelector selectedSkin={selectedSkin} onSkinChange={onSkinChange} />

        {/* Písma */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">PÍSMO</div>
        <FontSelector selectedFont={selectedFont} onFontChange={onFontChange} />

      </div>
    </div>
  );
}
