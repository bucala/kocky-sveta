import re

f = open('src/screens/SettingsMenu.jsx', encoding='utf-8')
c = f.read()
f.close()

new_fn = """function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skins.map((skin) => {
        const active = skin.id === selectedSkin;
        const accent  = skin.vars['--ks-accent'];
        const accent2 = skin.vars['--ks-accent-2'];
        const bgMain  = skin.vars['--ks-bg-main'];
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            className={`ks-press rounded-sm border-2 transition-all flex flex-col items-center pt-4 pb-3 px-2 ks-card ${active ? 'ks-card-prom ks-border-accent' : 'ks-border-sub hover:shadow-lg'}`}
            style={{ minHeight: '140px' }}
          >
            {active && (
              <div className="ks-mono ks-gold text-[9px] tracking-[0.22em] mb-1 opacity-80">✦ AKTÍVNY</div>
            )}
            <div className="ks-display ks-cream text-base font-semibold text-center leading-tight mb-1 px-1">
              {skin.name}
            </div>
            <div className="w-full mt-auto pt-2 px-1 flex items-center gap-2">
              <div className="rounded-[4px] shrink-0" style={{ width: 36, height: 36, background: accent }} />
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="rounded-[3px]" style={{ height: 14, background: accent2 }} />
                <div className="rounded-[3px]" style={{ height: 14, background: bgMain }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}"""

c = re.sub(
    r'function SkinSelector\(\{ selectedSkin, onSkinChange \}\) \{.*?\n\}(?=\n\nfunction FontSelector)',
    new_fn,
    c,
    flags=re.DOTALL
)
open('src/screens/SettingsMenu.jsx', 'w', encoding='utf-8').write(c)
print('Done')
