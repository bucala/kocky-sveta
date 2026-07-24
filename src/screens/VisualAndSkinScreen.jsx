import React from 'react';
import { Volume2, Zap, Sparkles, Users, Crown, BarChart2, Smartphone, Trophy, Hash, Layers, Bell } from 'lucide-react';
import { Header, SkinSelector, FontSelector } from '../components/ui.jsx';
import { ToggleRow } from '../atoms/ToggleRow.jsx';
import { useT } from '../lib/i18n.js';

const LANG_OPTIONS = [
  { value: 'sk', flag: '🇸🇰', label: 'Slovenčina' },
  { value: 'en', flag: '🇬🇧', label: 'English' },
];

export function VisualAndSkinScreen({
  onBack, selectedSkin, onSkinChange, selectedFont, onFontChange,
  tournamentViewMode, onTournamentViewModeChange, onViewModes,
  soundsEnabled, onSoundsToggle, animationsEnabled, onAnimationsToggle,
  hapticEnabled, onHapticToggle,
  extensions = {}, onExtensionsChange,
  lang = 'sk', onLangChange,
}) {
  const t = useT();
  const toggle = (key) => onExtensionsChange?.({ ...extensions, [key]: !extensions[key] });

  const EXTENSIONS_CONFIG = [
    { key: 'confetti',       icon: Sparkles,   label: t('ext.confetti'),       sub: t('ext.confetti.sub') },
    { key: 'dramaticWinner', icon: Trophy,     label: t('ext.dramaticWinner'), sub: t('ext.dramaticWinner.sub') },
    { key: 'coloredAvatars', icon: Users,      label: t('ext.coloredAvatars'), sub: t('ext.coloredAvatars.sub') },
    { key: 'leaderCrown',    icon: Crown,      label: t('ext.leaderCrown'),    sub: t('ext.leaderCrown.sub') },
    { key: 'progressBar',    icon: BarChart2,  label: t('ext.progressBar'),    sub: t('ext.progressBar.sub') },
    { key: 'animatedScore',  icon: Hash,       label: t('ext.animatedScore'),  sub: t('ext.animatedScore.sub') },
    { key: 'milestoneFlash', icon: Zap,        label: t('ext.milestoneFlash'), sub: t('ext.milestoneFlash.sub') },
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
        <div className="space-y-2">
          <ToggleRow
            icon={Volume2}
            title={t('visual.sound.title')}
            subtitle={soundsEnabled ? t('visual.sound.on') : t('visual.sound.off')}
            enabled={soundsEnabled}
            onToggle={onSoundsToggle}
          />
          <ToggleRow
            icon={Smartphone}
            title={t('visual.haptic.title')}
            subtitle={hapticEnabled ? t('visual.haptic.on') : t('visual.haptic.off')}
            enabled={hapticEnabled}
            onToggle={onHapticToggle}
          />
        </div>

        {/* Animácie */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('visual.anim.section')}</div>
        <ToggleRow
          icon={Zap}
          title={t('visual.anim.title')}
          subtitle={animationsEnabled ? t('visual.anim.on') : t('visual.anim.off')}
          enabled={animationsEnabled}
          onToggle={onAnimationsToggle}
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
            <ToggleRow
              key={key}
              compact
              enabled={!!extensions[key]}
              onToggle={() => toggle(key)}
              icon={icon}
              title={label}
              subtitle={sub}
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
