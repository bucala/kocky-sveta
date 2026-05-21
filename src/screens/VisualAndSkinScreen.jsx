import React from 'react';
import { Volume2, VolumeX, Zap, ZapOff, Sparkles, Users, Star, BarChart2, Smartphone, Trophy, Hash, Layers } from 'lucide-react';
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

function ExtToggle({ enabled, onToggle, icon: Icon, label, sub }) {
  return (
    <button
      onClick={onToggle}
      className={`ks-press flex items-center gap-3 w-full px-3 py-2.5 rounded-sm border transition-all ${
        enabled ? 'ks-border-accent border bg-amber-950/20' : 'ks-border-sub border opacity-60 hover:opacity-80'
      }`}
    >
      <div className={`flex-shrink-0 ${enabled ? 'ks-gold' : 'ks-muted'}`}>
        <Icon size={18} />
      </div>
      <div className="flex-1 text-left">
        <div className={`text-sm font-semibold ${enabled ? 'ks-cream' : 'ks-muted'}`}>{label}</div>
        {sub && <div className="text-xs ks-muted leading-tight">{sub}</div>}
      </div>
      <div className={`w-8 h-4 rounded-full transition-colors flex-shrink-0 ${enabled ? 'ks-gold-bg' : 'bg-stone-700'}`}>
        <div className={`w-4 h-4 rounded-full bg-white shadow transition-transform ${enabled ? 'translate-x-4' : 'translate-x-0'}`} />
      </div>
    </button>
  );
}

const EXTENSIONS_CONFIG = [
  { key: 'confetti',       icon: Sparkles,   label: 'Konfety pri výhre',       sub: 'Farebná sprcha konfiet po víťazstve' },
  { key: 'dramaticWinner', icon: Trophy,     label: 'Dramatický výsledok',      sub: 'Animovaný nástup víťaza s efektom' },
  { key: 'coloredAvatars', icon: Users,      label: 'Farebné avatary',          sub: 'Každý hráč má farbu a iniciálky' },
  { key: 'leaderGlow',     icon: Star,       label: 'Pulzujúci líder',          sub: 'Zlatý glow pre hráča na 1. mieste' },
  { key: 'progressBar',    icon: BarChart2,  label: 'Progress bar k cieľu',     sub: 'Vizuálna lišta napĺňajúca sa k cieľu' },
  { key: 'animatedScore',  icon: Hash,       label: 'Animované skóre',          sub: 'Čísla sa rozbehajú pri každom zápise' },
  { key: 'milestoneFlash', icon: Zap,        label: 'Záblesk míľnika',          sub: 'Flash pri prekročení 1 000, 2 000…' },
  { key: 'haptic',         icon: Smartphone, label: 'Haptická odozva',          sub: 'Vibrácia pri zápise skóre (mobile)' },
];

export function VisualAndSkinScreen({
  onBack, selectedSkin, onSkinChange, selectedFont, onFontChange,
  tournamentViewMode, onTournamentViewModeChange, onViewModes,
  soundsEnabled, onSoundsToggle, animationsEnabled, onAnimationsToggle,
  extensions = {}, onExtensionsChange,
}) {
  const toggle = (key) => onExtensionsChange?.({ ...extensions, [key]: !extensions[key] });

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

        {/* Rozšírenia */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2 flex items-center gap-2">
          <Layers size={11} /> ROZŠÍRENIA
          <span className="ks-muted normal-case font-normal" style={{ fontFamily: 'inherit', letterSpacing: 'normal' }}>— defaultne vypnuté</span>
        </div>
        <div className="space-y-2">
          {EXTENSIONS_CONFIG.map(({ key, icon, label, sub }) => (
            <ExtToggle
              key={key}
              enabled={!!extensions[key]}
              onToggle={() => toggle(key)}
              icon={icon}
              label={label}
              sub={sub}
            />
          ))}
        </div>

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
