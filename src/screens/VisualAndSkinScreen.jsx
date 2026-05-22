import React from 'react';
import { Volume2, VolumeX, Zap, ZapOff, Sparkles, Users, Star, BarChart2, Smartphone, Trophy, Hash, Layers, Bell } from 'lucide-react';
import { Header, SkinSelector, FontSelector } from '../components/ui.jsx';
import { useT } from '../lib/i18n.js';

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

const LANG_OPTIONS = [
  { value: 'sk', flag: '🇸🇰', label: 'Slovenčina' },
  { value: 'en', flag: '🇬🇧', label: 'English' },
];

export function VisualAndSkinScreen({
  onBack, selectedSkin, onSkinChange, selectedFont, onFontChange,
  tournamentViewMode, onTournamentViewModeChange, onViewModes,
  soundsEnabled, onSoundsToggle, animationsEnabled, onAnimationsToggle,
  extensions = {}, onExtensionsChange,
  lang = 'sk', onLangChange,
}) {
  const t = useT();
  const toggle = (key) => onExtensionsChange?.({ ...extensions, [key]: !extensions[key] });

  const EXTENSIONS_CONFIG = [
    { key: 'confetti',       icon: Sparkles,   label: t('ext.confetti'),       sub: t('ext.confetti.sub') },
    { key: 'dramaticWinner', icon: Trophy,     label: t('ext.dramaticWinner'), sub: t('ext.dramaticWinner.sub') },
    { key: 'coloredAvatars', icon: Users,      label: t('ext.coloredAvatars'), sub: t('ext.coloredAvatars.sub') },
    { key: 'leaderGlow',     icon: Star,       label: t('ext.leaderGlow'),     sub: t('ext.leaderGlow.sub') },
    { key: 'progressBar',    icon: BarChart2,  label: t('ext.progressBar'),    sub: t('ext.progressBar.sub') },
    { key: 'animatedScore',  icon: Hash,       label: t('ext.animatedScore'),  sub: t('ext.animatedScore.sub') },
    { key: 'milestoneFlash', icon: Zap,        label: t('ext.milestoneFlash'), sub: t('ext.milestoneFlash.sub') },
    { key: 'haptic',         icon: Smartphone, label: t('ext.haptic'),         sub: t('ext.haptic.sub') },
    { key: 'turnNotification', icon: Bell,      label: t('ext.turnNotification'), sub: t('ext.turnNotification.sub') },
  ];

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={t('visual.title')} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-5">

        {/* Jazyk / Language */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.lang.section')}</div>
        <div className="grid grid-cols-2 gap-2">
          {LANG_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => onLangChange?.(opt.value)}
              className={`ks-press flex items-center gap-2 px-4 py-3 rounded-sm border transition-colors ${
                lang === opt.value ? 'ks-border-accent border bg-amber-950/20' : 'ks-border-sub border'
              }`}
            >
              <span className="text-xl">{opt.flag}</span>
              <span className={`ks-body text-sm font-semibold ${lang === opt.value ? 'ks-cream' : 'ks-muted'}`}>{opt.label}</span>
              {lang === opt.value && <span className="ml-auto ks-gold text-xs">✓</span>}
            </button>
          ))}
        </div>

        {/* Zvuky */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.sound.section')}</div>
        <Toggle
          enabled={soundsEnabled}
          onToggle={onSoundsToggle}
          labelOn={t('visual.sound.on')}
          labelOff={t('visual.sound.off')}
          iconOn={Volume2}
          iconOff={VolumeX}
        />

        {/* Animácie */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.anim.section')}</div>
        <Toggle
          enabled={animationsEnabled}
          onToggle={onAnimationsToggle}
          labelOn={t('visual.anim.on')}
          labelOff={t('visual.anim.off')}
          iconOn={Zap}
          iconOff={ZapOff}
        />

        {/* Rozšírenia / Extensions */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2 flex items-center gap-2">
          <Layers size={11} /> {t('visual.ext.section')}
          <span className="ks-muted normal-case font-normal" style={{ fontFamily: 'inherit', letterSpacing: 'normal' }}>
            {t('visual.ext.hint')}
          </span>
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
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.skins.section')}</div>
        <SkinSelector selectedSkin={selectedSkin} onSkinChange={onSkinChange} />

        {/* Písmo / Font */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.font.section')}</div>
        <FontSelector selectedFont={selectedFont} onFontChange={onFontChange} />

      </div>
    </div>
  );
}
