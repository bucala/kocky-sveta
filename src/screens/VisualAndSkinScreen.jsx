import React from 'react';
import { Header, SkinSelector, FontSelector } from '../App.jsx';

export function VisualAndSkinScreen({ onBack, selectedSkin, onSkinChange, selectedFont, onFontChange, tournamentViewMode, onTournamentViewModeChange, onViewModes }) {
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Vizuál a Skiny" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-5">

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

