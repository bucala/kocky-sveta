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
            className={`ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-2 ${active ? 'ks-border-accent' : 'ks-border-sub hover:brightness-110'}`}
            style={{ minHeight: '120px', background: bgMain }}
          >
            <div className="flex items-start justify-between w-full gap-1">
              <div className="ks-display text-sm font-semibold leading-tight" style={{ color: skin.vars['--ks-text'] }}>
                {skin.name}
              </div>
              {active && (
                <div className="ks-mono text-[8px] tracking-[0.18em] shrink-0" style={{ color: accent }}>✦ AKTÍVNY</div>
              )}
            </div>
            <div className="flex items-center gap-2 mt-auto w-full">
              <div className="rounded-[4px] shrink-0" style={{ width: 38, height: 38, background: accent }} />
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="rounded-[3px]" style={{ height: 15, background: accent2 }} />
                <div className="rounded-[3px] border border-white/10" style={{ height: 15, background: skin.vars['--ks-bg-soft'] || bgMain }} />
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
