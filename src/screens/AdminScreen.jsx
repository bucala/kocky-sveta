// src/screens/AdminScreen.jsx
import React, { useState, useCallback } from 'react';
import { ChevronLeft, Shield, Bug, Wifi, Copy, Check, Zap, Terminal, Wrench, BarChart2, RefreshCw, Plus } from 'lucide-react';
import { Header } from '../atoms/Header.jsx';

// ─── Sekcia ──────────────────────────────────────────────────────────────────
function Section({ label }) {
  return <div className="ks-mono ks-gold text-xs px-1 pt-4 pb-1">{label}</div>;
}

// ─── Toggle riadok ────────────────────────────────────────────────────────────
function ToggleRow({ icon: Icon, title, subtitle, value, onChange }) {
  return (
    <div className="ks-card w-full p-4 rounded-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0">
        <Icon size={22} className="ks-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="ks-display ks-cream text-lg font-semibold">{title}</div>
        <div className="ks-muted text-xs leading-relaxed">{subtitle}</div>
      </div>
      <button
        onClick={() => onChange(!value)}
        style={{ width: 44, height: 24, borderRadius: 12, flexShrink: 0, position: 'relative', transition: 'background 0.2s', background: value ? 'var(--ks-accent, #d4b86a)' : '#52525b' }}
        aria-checked={value}
        role="switch"
      >
        <span style={{
          position: 'absolute', top: 2, left: value ? 22 : 2,
          width: 20, height: 20, borderRadius: '50%', background: '#fff',
          transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.4)'
        }} />
      </button>
    </div>
  );
}

// ─── Input riadok ─────────────────────────────────────────────────────────────
function InputRow({ icon: Icon, title, subtitle, value, onChange, placeholder, maxLength = 30 }) {
  return (
    <div className="ks-card w-full p-4 rounded-sm flex flex-col gap-3">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0">
          <Icon size={22} className="ks-gold" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="ks-display ks-cream text-lg font-semibold">{title}</div>
          <div className="ks-muted text-xs">{subtitle}</div>
        </div>
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxLength))}
        placeholder={placeholder}
        className="w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"
      />
    </div>
  );
}

// ─── Number input riadok ──────────────────────────────────────────────────────
function NumberRow({ icon: Icon, title, subtitle, value, onChange, min, max, step = 50 }) {
  return (
    <div className="ks-card w-full p-4 rounded-sm flex items-center gap-4">
      <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center flex-shrink-0">
        <Icon size={22} className="ks-gold" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="ks-display ks-cream text-lg font-semibold">{title}</div>
        <div className="ks-muted text-xs">{subtitle}</div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button onClick={() => onChange(Math.max(min, value - step))}
          className="w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none">−</button>
        <span className="ks-mono ks-cream text-sm w-12 text-center">{value}</span>
        <button onClick={() => onChange(Math.min(max, value + step))}
          className="w-8 h-8 rounded-sm border ks-border-sub ks-card ks-cream ks-press flex items-center justify-center text-lg leading-none">+</button>
      </div>
    </div>
  );
}

// ─── Akcia riadok ─────────────────────────────────────────────────────────────
function ActionRow({ icon: Icon, title, subtitle, label, onClick, danger }) {
  return (
    <div className="ks-card w-full p-4 rounded-sm flex items-center gap-4">
      <div className={`w-12 h-12 rounded-sm border flex items-center justify-center flex-shrink-0 ${danger ? 'border-red-700/50' : 'ks-border-sub'}`}>
        <Icon size={22} className={danger ? 'text-red-400' : 'ks-gold'} />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`ks-display text-lg font-semibold ${danger ? 'text-red-300' : 'ks-cream'}`}>{title}</div>
        <div className="ks-muted text-xs">{subtitle}</div>
      </div>
      <button onClick={onClick}
        className={`ks-press px-3 py-1.5 rounded-sm ks-mono text-xs flex-shrink-0 ${danger ? 'border border-red-700/50 text-red-400' : 'ks-gold-bg'}`}>
        {label}
      </button>
    </div>
  );
}

// ─── Diagnostický panel ───────────────────────────────────────────────────────
function DiagnosticsPanel({ adminSettings, tournaments, active, appVersion }) {
  const storageUsed = (() => {
    try {
      let total = 0;
      for (const k of Object.keys(localStorage)) {
        total += (localStorage.getItem(k) || '').length;
      }
      return (total / 1024).toFixed(1) + ' KB';
    } catch { return '—'; }
  })();

  const rows = [
    ['Verzia app',        appVersion || '1.5.3'],
    ['Turnaje v archíve', `${tournaments?.length ?? 0}`],
    ['Aktívna hra',       active ? `${active.players.length} hráčov, kolo ${active.currentRound + 1}` : 'žiadna'],
    ['localStorage',      storageUsed],
    ['Debug mód',         adminSettings.debugMode ? 'zapnutý' : 'vypnutý'],
    ['Custom room name',  adminSettings.roomName || '(predvolené)'],
    ['Min. zápis override', adminSettings.minWriteOffOverride ? `${adminSettings.minWriteOffOverride} b.` : 'vypnutý'],
  ];

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono">
        <BarChart2 size={13} />
        DIAGNOSTIKA
      </div>
      <div className="divide-y ks-border-sub">
        {rows.map(([label, val]) => (
          <div key={label} className="flex items-center justify-between px-4 py-2.5">
            <span className="ks-muted text-xs">{label}</span>
            <span className="ks-cream ks-mono text-xs">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── AdminScreen ──────────────────────────────────────────────────────────────
export function AdminScreen({ onBack, adminSettings, onAdminChange, tournaments, active, appVersion, onSimulateTurn, onExportState, onOpenOnline }) {
  const [copied, setCopied] = useState(false);

  const update = useCallback((key, val) => {
    onAdminChange({ ...adminSettings, [key]: val });
  }, [adminSettings, onAdminChange]);

  const handleExport = () => {
    if (onExportState) onExportState();
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Admin nastavenia" onBack={onBack} />

      {/* Warning badge */}
      <div className="mx-4 mt-3 mb-1 flex items-center gap-2 px-3 py-2 rounded-sm border border-amber-700/40 bg-amber-950/20">
        <Shield size={14} className="ks-gold flex-shrink-0" />
        <span className="ks-muted text-xs">Interné nastavenia — zmeny ovplyvňujú správanie aplikácie</span>
      </div>

      <div className="p-4 max-w-2xl mx-auto space-y-3">

        {/* ONLINE */}
        <Section label="ONLINE MIESTNOSŤ" />
        <InputRow
          icon={Wifi}
          title="Vlastný názov miestnosti"
          subtitle="Zobrazí sa ostatným hráčom ako meno zariadenia. Predvolené: 'hráč'."
          value={adminSettings.roomName || ''}
          onChange={(v) => update('roomName', v)}
          placeholder="napr. Telefón Marcel, Tablet..."
          maxLength={24}
        />
        <ActionRow
          icon={Plus}
          title="Vytvoriť online miestnosť"
          subtitle={adminSettings.roomName ? `Otvorí miestnosť ako „${adminSettings.roomName}"` : 'Najprv nastav vlastný názov miestnosti'}
          label="Otvoriť"
          onClick={onOpenOnline}
        />

        {/* DEBUG */}
        <Section label="DEBUG A TESTOVANIE" />
        <ToggleRow
          icon={Bug}
          title="Debug mód"
          subtitle="Zobrazí overlay s interným stavom hry (currentPlayer, currentRound, pendingDecision, winner)."
          value={!!adminSettings.debugMode}
          onChange={(v) => update('debugMode', v)}
        />
        <ActionRow
          icon={Zap}
          title="Simulovať ťah"
          subtitle="Automaticky zapíše náhodné skóre (násobok 50) pre aktuálneho hráča. Len pri aktívnej hre."
          label="Simuluj"
          onClick={onSimulateTurn}
        />
        <ActionRow
          icon={Copy}
          title="Export stavu do schránky"
          subtitle="Skopíruje celý stav aplikácie (tournaments, active, adminSettings) ako JSON."
          label={copied ? '✓ Skopírované' : 'Kopírovať'}
          onClick={handleExport}
        />

        {/* GAMEPLAY OVERRIDE */}
        <Section label="OVERRIDE HERNÝCH HODNÔT" />
        <ToggleRow
          icon={Wrench}
          title="Override min. zápis"
          subtitle="Ak zapnuté, prepisuje pravidlo minWriteOff pre všetky turnaje v tejto session."
          value={!!adminSettings.minWriteOffOverride}
          onChange={(v) => update('minWriteOffOverride', v ? 50 : null)}
        />
        {adminSettings.minWriteOffOverride != null && (
          <NumberRow
            icon={Wrench}
            title="Hodnota min. zápisu"
            subtitle="Aktuálna override hodnota (predvolená v pravidlách je 300 b.)"
            value={adminSettings.minWriteOffOverride || 50}
            onChange={(v) => update('minWriteOffOverride', v)}
            min={50}
            max={1000}
            step={50}
          />
        )}
        <ToggleRow
          icon={Terminal}
          title="Verbose Firebase logy"
          subtitle="Zapne podrobné logy Firebase operácií do konzoly prehliadača."
          value={!!adminSettings.verboseFirebase}
          onChange={(v) => update('verboseFirebase', v)}
        />

        {/* DIAGNOSTICS */}
        <Section label="SYSTÉM" />
        <DiagnosticsPanel
          adminSettings={adminSettings}
          tournaments={tournaments}
          active={active}
          appVersion={appVersion}
        />
        <ActionRow
          icon={RefreshCw}
          title="Resetovať admin nastavenia"
          subtitle="Vráti všetky admin nastavenia na predvolené hodnoty. Dáta turnajov ostanú nedotknuté."
          label="Reset"
          onClick={() => onAdminChange(DEFAULT_ADMIN_SETTINGS)}
          danger
        />
      </div>
    </div>
  );
}

// ─── PIN dialog ───────────────────────────────────────────────────────────────
const ADMIN_PIN = '58290347';

export function AdminPinDialog({ onSuccess, onCancel }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (pin === ADMIN_PIN) {
      onSuccess();
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
      <div className="ks-card border ks-border-sub rounded-sm w-full max-w-xs p-6 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <Shield size={18} className="ks-gold" />
          <h3 className="ks-display ks-gold text-xl font-semibold">Admin prístup</h3>
        </div>
        <p className="ks-muted text-xs leading-relaxed">
          Zadaj prístupový kód pre admin nastavenia.
        </p>
        <input
          type="password"
          inputMode="numeric"
          maxLength={8}
          value={pin}
          onChange={(e) => { setPin(e.target.value.replace(/\D/g, '').slice(0, 8)); setError(false); }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          placeholder="••••••••"
          autoFocus
          className={`w-full ks-card px-3 py-3 rounded-sm bg-transparent border outline-none ks-mono text-center text-xl tracking-[0.4em] transition-colors ${error ? 'border-red-500 text-red-400' : 'ks-border-sub ks-cream'}`}
        />
        {error && <p className="text-red-400 text-xs text-center">Nesprávny kód</p>}
        <div className="flex gap-3">
          <button onClick={onCancel}
            className="flex-1 py-2.5 border ks-border-sub rounded-sm ks-muted text-sm ks-press">
            Zrušiť
          </button>
          <button onClick={handleSubmit}
            className="flex-1 py-2.5 ks-gold-bg rounded-sm ks-mono text-sm font-bold ks-press">
            Potvrdiť
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Default state ────────────────────────────────────────────────────────────
export const DEFAULT_ADMIN_SETTINGS = {
  roomName: '',
  debugMode: false,
  minWriteOffOverride: null,
  verboseFirebase: false,
};
