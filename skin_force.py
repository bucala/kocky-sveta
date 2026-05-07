c = open('src/screens/SettingsMenu.jsx', encoding='utf-8').read()

start = c.index('function SkinSelector({ selectedSkin, onSkinChange })')
end = c.index('\n\nfunction FontSelector(')

new_fn = """function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skins.map((skin) => {
        const active = skin.id === selectedSkin;
        const accent  = skin.vars['--ks-accent'];
        const accent2 = skin.vars['--ks-accent-2'];
        const bgMain  = skin.vars['--ks-bg-main'];
        const bgSoft  = skin.vars['--ks-bg-soft'];
        const text    = skin.vars['--ks-text'];
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            className="ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110"
            style={{ minHeight: '120px', background: bgMain, borderColor: active ? accent : 'rgba(255,255,255,0.12)' }}
          >
            <div className="flex items-start w-full">
              <div className="ks-display text-base font-semibold leading-tight" style={{ color: text }}>
                {skin.name}
              </div>
            </div>
            <div className="mt-auto w-full grid items-end" style={{ gridTemplateColumns: '1fr auto', columnGap: '12px', rowGap: '4px' }}>
              <div className="ks-mono text-[10px] tracking-wider" style={{ color: accent2 }}>
                {active ? '\\u2726 AKT\\u00CDVNY' : 'N\\u00e1h\\u013ead'}
              </div>
              <div className="rounded-[4px] shrink-0" style={{ width: 38, height: 38, background: accent, gridColumn: '2', gridRow: '1 / 3' }} />
              <div className="flex items-center gap-1.5 w-full">
                <div className="rounded-[3px] border border-white/10 flex-1" style={{ height: 15, background: bgSoft }} />
                <div className="rounded-[3px] flex-1" style={{ height: 15, background: accent2 }} />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}"""

result = c[:start] + new_fn + c[end:]
open('src/screens/SettingsMenu.jsx', 'w', encoding='utf-8').write(result)
print(f'Done! New block size: {len(new_fn)} chars')
print('Verify first 80 chars:')
print(repr(result[start:start+80]))
