content = open('src/App.jsx', encoding='utf-8').read()

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
            className={`ks-press rounded-sm border-2 transition-all flex flex-col items-center pt-4 pb-3 px-2 ks-card ${active ? 'ks-card-prom ks-border-accent' : 'ks-border-sub hover:shadow-lg'}`}
            style={{ minHeight: '140px' }}
          >
            {active && (
              <div className="ks-mono ks-gold text-[9px] tracking-[0.22em] mb-1 opacity-80">âś¦ AKTĂŤVNY</div>
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
        const accent  = skin.vars[\'--ks-accent\'];
        const accent2 = skin.vars[\'--ks-accent-2\'];
        const bgMain  = skin.vars[\'--ks-bg-main\'];
        const bgSoft  = skin.vars[\'--ks-bg-soft\'];
        const text    = skin.vars[\'--ks-text\'];
        return (
          <button
            key={skin.id}
            onClick={() => onSkinChange(skin.id)}
            className="ks-press rounded-sm border-2 transition-all flex flex-col pt-3 pb-3 px-3 gap-1 hover:brightness-110"
            style={{ minHeight: \'120px\', background: bgMain, borderColor: active ? accent : \'rgba(255,255,255,0.12)\' }}
          >
            <div className="flex items-start w-full">
              <div className="ks-display text-base font-semibold leading-tight" style={{ color: text }}>
                {skin.name}
              </div>
            </div>
            <div className="mt-auto w-full grid items-end" style={{ gridTemplateColumns: \'1fr auto\', columnGap: \'12px\', rowGap: \'4px\' }}>
              <div className="ks-mono text-[10px] tracking-wider" style={{ color: accent2 }}>
                {active ? \'✦ AKTÍVNY\' : \'Náhľad\'}
              </div>
              <div className="rounded-[4px] shrink-0" style={{ width: 38, height: 38, background: accent, gridColumn: \'2\', gridRow: \'1 / 3\' }} />
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
}'''

if old in content:
    content = content.replace(old, new)
    open('src/App.jsx', 'w', encoding='utf-8').write(content)
    print('OK - replaced')
else:
    print('ERROR - old string not found')
