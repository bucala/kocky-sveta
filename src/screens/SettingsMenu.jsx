import React, { useState, useRef } from 'react';
import { Trash2, Settings, AlertCircle, AlertTriangle, ChevronRight, Download, Upload, Edit3, FileSpreadsheet, Layers, Monitor, Bell, Wifi, Info, Shield, ScanLine } from 'lucide-react';
import { Header } from '../components/ui.jsx';
import { useT } from '../lib/i18n.js';
import { version as APP_VERSION } from '../../package.json';

// ─── Nastavenia ─────────────────────────────────────────────────────────

const VIEW_MODE_KEYS = {
  basic: 'settings.viewmode.basic',
  basicSimplified: 'settings.viewmode.basicSimplified',
  observer: 'settings.viewmode.observer',
  observerSimplified: 'settings.viewmode.observerSimplified',
  recorder: 'settings.viewmode.recorder',
  combined: 'settings.viewmode.combined',
};

export function SettingsMenu({ onBack, onOnline, onRulesEditor, onExport, onImport, onClearAll, onArchive, onScan, tournamentCount, selectedSkin, onSkinChange, selectedFont, onFontChange, tournamentViewMode, onTournamentViewModeChange, onViewModes, onVisualAndSkins, funnyWindowsDisplayMode, onFunnyWindowsDisplayModeChange, onAdmin, onShowEgg, onPrivacy }) {
  const t = useT();
  const fileInputRef = useRef(null);
  const [eggClicks, setEggClicks] = useState(0);

  function handleEggClick() {
    const next = eggClicks + 1;
    setEggClicks(next);
    if (next >= 5) { onShowEgg?.(); setEggClicks(0); }
  }

  function handleFilePick(e) {
    const file = e.target.files?.[0];
    if (file && onImport) onImport(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={t('settings.title')} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.online.section')}</div>
        <button onClick={onOnline}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Wifi size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.online')}</div>
            <div className="ks-muted text-sm">{t('settings.online.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.rules.section')}</div>
        <button onClick={onRulesEditor}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Settings size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.rules')}</div>
            <div className="ks-muted text-sm">{t('settings.rules.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.visual.section')}</div>
        <button onClick={onViewModes}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Monitor size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.viewmode')}</div>
            <div className="ks-muted text-sm">{t(VIEW_MODE_KEYS[tournamentViewMode] || VIEW_MODE_KEYS.basic)}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-card w-full p-4 rounded-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
              <Bell size={22} className="ks-gold" />
            </div>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">{t('settings.funnymode')}</div>
              <div className="ks-muted text-sm">{t('settings.funnymode.sub')}</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['standard', t('settings.funnymode.standard')],
              ['simplified', t('settings.funnymode.simplified')],
              ['suppressed', t('settings.funnymode.suppressed')]
            ].map(([value,label]) => (
              <button key={value} onClick={() => onFunnyWindowsDisplayModeChange(value)}
                className={`ks-press px-3 py-2 rounded-sm text-sm ${funnyWindowsDisplayMode === value ? 'ks-gold-bg' : 'border ks-border-sub ks-card ks-cream'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={onVisualAndSkins}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Layers size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.visual')}</div>
            <div className="ks-muted text-sm">{t('settings.visual.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('settings.archive.section')}</div>

        <button onClick={onExport} disabled={!tournamentCount}
          className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${!tournamentCount ? 'opacity-40 cursor-not-allowed' : ''}`}>
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <FileSpreadsheet size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.export')}</div>
            <div className="ks-muted text-sm">
              {tournamentCount > 0
                ? t('settings.export.count', { n: tournamentCount })
                : t('settings.export.none')}
            </div>
          </div>
          <Download className="ks-muted" size={20} />
        </button>

        <button onClick={() => fileInputRef.current?.click()}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Upload size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.import')}</div>
            <div className="ks-muted text-sm">{t('settings.import.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>
        <input ref={fileInputRef} type="file"
          accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
          onChange={handleFilePick} className="hidden" />

        <button onClick={onArchive}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Edit3 size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.edit.archive')}</div>
            <div className="ks-muted text-sm">{t('settings.edit.archive.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <button onClick={onScan}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <ScanLine size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.scan')}</div>
            <div className="ks-muted text-sm">{t('settings.scan.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <button onClick={onAdmin}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Shield size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">{t('settings.admin')}</div>
            <div className="ks-muted text-sm">{t('settings.admin.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5">
          <AlertTriangle size={11} /> {t('settings.danger')}
        </div>

        <button onClick={onClearAll}
          className="ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125">
          <div className="w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center">
            <Trash2 size={22} className="ks-text-accent" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-text-accent text-xl font-semibold">{t('settings.clear')}</div>
            <div className="ks-text-accent/70 text-sm">{t('settings.clear.sub')}</div>
          </div>
          <ChevronRight className="ks-text-accent" size={20} />
        </button>

        <div className="ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2">
          <AlertCircle size={14} className="ks-gold shrink-0 mt-0.5" />
          <div>
            {t('settings.backup.a')}<strong className="ks-gold">{t('settings.backup.strong')}</strong>{t('settings.backup.b')}
          </div>
        </div>

        <div className="ks-mono ks-gold text-xs px-1 pt-4">{t('settings.about.section')}</div>
        <div className="ks-card w-full p-4 rounded-sm space-y-3">
          <div className="flex items-center gap-4">
            <button onClick={handleEggClick} className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center ks-press select-none">
              <Info size={22} className="ks-gold" />
            </button>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">Kocky sveta</div>
              <div className="ks-muted text-sm">React + Vite + Firebase + Capacitor</div>
            </div>
          </div>
          <div className="space-y-2 text-xs ks-muted leading-relaxed border-t ks-border-sub pt-3">
            <p><span className="ks-cream font-semibold">{t('settings.about.version')}</span> {APP_VERSION}</p>
            <p><span className="ks-cream font-semibold">{t('settings.about.tech')}</span> React 18, Vite, Tailwind CSS, Firebase Firestore, Capacitor (Android/iOS)</p>
            <p><span className="ks-cream font-semibold">{t('settings.about.data')}</span> {t('settings.about.data.text')}</p>
            <p><span className="ks-cream font-semibold">{t('settings.about.exports')}</span> {t('settings.about.exports.text')}</p>
            <p><span className="ks-cream font-semibold">{t('settings.about.dev')}</span> {t('settings.about.dev.text')}</p>
          </div>
          {onPrivacy && (
            <button onClick={onPrivacy} className="ks-press w-full flex items-center justify-between gap-2 border-t ks-border-sub pt-3 text-left">
              <span className="ks-cream text-sm">{t('settings.privacy')}</span>
              <ChevronRight className="ks-muted" size={18} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
