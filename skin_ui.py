import re

f = open('src/screens/SettingsMenu.jsx', encoding='utf-8')
c = f.read()
f.close()

old = '''function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skins.map((skin) => {
        const active = skin.id === selectedSkin;
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            className={`ks-press rounded-sm border-2 transition-all flex flex-col items-center pt-4 pb-3 px-2 ks-card ${active ? \'ks-card-prom ks-border-accent\' : \'ks-border-sub hover:shadow-lg\'}`}
            style={{ minHeight: \'140px\' }}
          >
            {active && (
              <div className="ks-mono ks-gold text-[9px] tracking-[0.22em] mb-1 opacity-80">✦ AKTÍVNY</div>
            )}
            <div className="ks-display ks-cream text-base font-semibold text-center leading-tight mb-1 px-1">
              {skin.name}
            </div>
            <div className="w-full mt-auto pt-2 px-1">
              <div className="w-full rounded-[3px] overflow-hidden border border-white/10" style={{ height: \'52px\', background: skin.bg }}>
                <div className="h-full flex flex-col justify-end pb-1 px-1.5 gap-0.5">
                  <div className="rounded-[2px] opacity-70" style={{ height: \'7px\', background: \'var(--ks-accent)\', width: \'55%\' }} />
                  <div className="rounded-[2px] opacity-40" style={{ height: \'5px\', background: \'var(--ks-text)\', width: \'80%\' }} />
                  <div className="rounded-[2px] opacity-30" style={{ height: \'5px\', background: \'var(--ks-text)\', width: \'60%\' }} />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}'''

new = '''function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skins.map((skin) => {
        const active = skin.id === selectedSkin;
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            className={`ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-2 ${active ? \'ks-card-prom ks-border-accent\' : \'ks-card ks-border-sub hover:shadow-lg\'}`}
            style={{ minHeight: \'120px\', background: skin.bg }}
          >
            {/* Nazov + aktivny badge */}
            <div className="flex items-center justify-between w-full">
              <div className="ks-display text-sm font-semibold leading-tight" style={{ color: skin.accent }}>
                {skin.name}
              </div>
              {active && (
                <div className="ks-mono text-[8px] tracking-[0.18em] opacity-90" style={{ color: skin.accent }}>✦ AKTÍVNY</div>
              )}
            </div>
            {/* Farebna ukazka */}
            <div className="flex items-end gap-2 mt-auto">
              {/* Hlavny farebny stvorec */}
              <div className="rounded-[4px] shrink-0" style={{ width: 36, height: 36, background: skin.accent }} />
              {/* Dva pill bloky - sekundarne farby */}
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="rounded-[3px]" style={{ height: 14, background: skin.accent, opacity: 0.45 }} />
                <div className="rounded-[3px]" style={{ height: 14, background: skin.text || \'#fff\', opacity: 0.18 }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}'''

if old.split('\n')[0] in c:
    c = c.replace(old, new)
    print('Replaced exact match')
else:
    # Fallback - nahrad cez regex blok funkcie
    c = re.sub(
        r'function SkinSelector\(\{ selectedSkin, onSkinChange \}\) \{.*?\n\}(?=\n\nfunction)',
        new,
        c,
        flags=re.DOTALL
    )
    print('Replaced via regex')

open('src/screens/SettingsMenu.jsx', 'w', encoding='utf-8').write(c)
print('Done')
