// src/screens/MainMenu.jsx
import React from 'react';
import { Play, Archive as ArchiveIcon, ScrollText, Settings, ChevronRight, Wifi, WifiOff, AlertCircle } from 'lucide-react';
import { Ornament } from '../atoms/GoldButton.jsx';
import { useOnlineStore } from '../online/onlineStore.ts';

function OnlineStatusBadge({ onClick }) {
  const status = useOnlineStore((s) => s.status);
  const map = {
    connected: { Icon: Wifi,          color: 'text-green-400', label: 'Online' },
    error:     { Icon: AlertCircle,   color: 'text-red-400',   label: 'Chyba'  },
  };
  const { Icon, color, label } = map[status] || { Icon: WifiOff, color: 'ks-muted', label: 'Offline' };
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 border ks-border-sub rounded-sm px-2 py-1 mt-2 ks-press"
    >
      <Icon size={12} className={color} />
      <span className={`ks-mono text-xs ${color}`}>{label}</span>
    </button>
  );
}

export function MainMenu({ onNew, onArchive, onrules, onSettings, onResume, onOnline, active, tournamentCount }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade">
        <div className="ks-gold text-xs ks-mono mb-2">★ ZALOŽENÉ 2026 by Marcel ★</div>
        <h1 className="ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none">
          Kocky<br/><span className="italic font-medium">sveta</span>
        </h1>
        <Ornament />
        <OnlineStatusBadge onClick={onOnline} />
      </div>
      <div className="flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1">
        {onResume && (
          <button onClick={onResume}
            className="ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4"
            style={{ borderLeftColor: '#d4b86a' }}>
            <Play className="ks-gold" size={24} />
            <div className="text-left flex-1">
              <div className="ks-mono ks-gold text-sm">POKRAČOVAŤ V TURNAJI</div>
              <div className="ks-body ks-cream text-sm opacity-80">
                {active.players.length} hráčov · do {(active.targetScore || 10000).toLocaleString('sk-SK')} · kolo {active.currentRound + 1}
              </div>
            </div>
            <ChevronRight className="ks-gold" size={20} />
          </button>
        )}
        <MenuButton icon={Play}        title="Nový turnaj"
          subtitle={active ? 'Najprv ukonči prebiehajúci turnaj' : 'Začať novú hru až pre šesť hráčov'}
          onClick={onNew} primary disabled={!!active} />
        <MenuButton icon={ArchiveIcon} title="Archív turnajov" subtitle={`${tournamentCount || 0} uložených turnajov`} onClick={onArchive} />
        <MenuButton icon={ScrollText}  title="Pravidlá hry"    subtitle="Bodovanie a kombinácie kociek"       onClick={onrules} />
        <MenuButton icon={Settings}    title="Nastavenia"      subtitle="Pravidlá, export, editácia archívu"  onClick={onSettings} />
      </div>
      <div className="text-center ks-muted text-xs pb-6 ks-mono">
        <Ornament />
        KOCKY · SVETA · KOCKY
      </div>
    </div>
  );
}

export function MenuButton({ icon: Icon, title, subtitle, onClick, primary, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${primary ? 'border-amber-700/40' : ''} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${primary ? 'ks-gold-bg' : 'border ks-border-sub'}`}>
        <Icon size={22} className={primary ? '' : 'ks-gold'} />
      </div>
      <div className="flex-1">
        <div className="ks-display ks-cream text-xl font-semibold">{title}</div>
        <div className="ks-muted text-sm">{subtitle}</div>
      </div>
      <ChevronRight className="ks-muted" size={20} />
    </button>
  );
}
