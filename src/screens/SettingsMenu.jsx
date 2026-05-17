import React, { useRef } from 'react';
import { Settings, ChevronRight, Monitor, Bell, Layers, FileSpreadsheet, Download, Upload, Edit3, Trash2, AlertTriangle, AlertCircle } from 'lucide-react';
import { Header } from '../atoms/Header.jsx';
import { SKIN_PRESETS, FONT_PRESETS, DICE_ICONS, skinVarsCss } from '../constants/skins.js';

function SkinSelector({ selectedSkin, onSkinChange }) {
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
                {active ? '✦ AKTÍVNY' : 'Náhľad'}
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
}

function FontSelector({ selectedFont, onFontChange }) {
  const fonts = Object.values(FONT_PRESETS);
  return (
    <div className="grid grid-cols-2 gap-3">
      {fonts.map((font) => {
        const active = font.id === selectedFont;
        return (
          <button
            key={font.id}
            onClick={() => onFontChange(font.id)}
            className={`ks-press rounded-sm p-3 border-2 transition-all flex flex-col items-center text-center ks-card ${active ? 'ks-card-prom ks-border-accent' : 'ks-border-sub hover:shadow-md'}`}
          >
            {active && <div className="ks-mono ks-gold text-[9px] tracking-[0.18em] mb-1">✦ AKTÍVNE</div>}
            <div className="ks-cream text-base font-semibold leading-tight" style={{ fontFamily: font.stack }}>
              {font.name}
            </div>
            <div className="ks-muted text-xs mt-1.5" style={{ fontFamily: font.stack }}>
              Ukážka · Abc 123
            </div>
          </button>
        );
      })}
    </div>
  );
}


// ─── Vizuál, Zvuky a Skiny submenu ───────────────────────────────────────────────

function VisualAndSkinScreen({ onBack, selectedSkin, onSkinChange, selectedFont, onFontChange, tournamentViewMode, onTournamentViewModeChange, onViewModes }) {
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Vizuál, Zvuky a Skiny" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-5">

        {/* Skiny */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">SKINY</div>
        <SkinSelector selectedSkin={selectedSkin} onSkinChange={onSkinChange} />

        {/* Písma */}
        <div className="ks-mono ks-gold text-xs px-1 pt-2">PÍSMO</div>
        <FontSelector selectedFont={selectedFont} onFontChange={onFontChange} />

      </div>
    </div>
  );
}

function SettingsMenu({ onBack, onRulesEditor, onExport, onImport, onClearAll, onArchive, tournamentCount, selectedSkin, onSkinChange, selectedFont, onFontChange, tournamentViewMode, onTournamentViewModeChange, onViewModes, onVisualAndSkins, funnyWindowsDisplayMode, onFunnyWindowsDisplayModeChange }) {
  const fileInputRef = useRef(null);

  function handleFilePick(e) {
    const file = e.target.files?.[0];
    if (file && onImport) onImport(file);
    // Reset input aby sa dal vybrať ten istý súbor znova
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nastavenia" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">

        <div className="ks-mono ks-gold text-xs px-1 pt-3">PRAVIDLÁ A HODNOTY HRY</div>
        <button onClick={onRulesEditor}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Settings size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Úprava pravidiel</div>
            <div className="ks-muted text-sm">Bodové kombinácie · cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">VIZUÁL, ZVUKY A SKINY</div>
        <button onClick={onViewModes}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <Monitor size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Režim zobrazenia hry</div>
            <div className="ks-muted text-sm">{tournamentViewMode === 'observer' ? 'Pozorovateľ' : tournamentViewMode === 'recorder' ? 'Zapisovateľ' : 'Klasický'}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-card w-full p-4 rounded-sm">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
              <Bell size={22} className="ks-gold" />
            </div>
            <div className="flex-1">
              <div className="ks-display ks-cream text-xl font-semibold">Štýl oznámení</div>
              <div className="ks-muted text-sm">Fullscreen funny okná, malé popupy alebo potlačený režim</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['standard','Štandardný'],
              ['simplified','Zjednodušený'],
              ['suppressed','Potlačený']
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
            <div className="ks-display ks-cream text-xl font-semibold">Vizuál, Zvuky a Skiny</div>
            <div className="ks-muted text-sm">Farby, písmo a vzhľad aplikácie</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">SPRÁVA TURNAJOV</div>

        <button onClick={onExport} disabled={!tournamentCount}
          className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${!tournamentCount ? 'opacity-40 cursor-not-allowed' : ''}`}>
          <div className="w-12 h-12 rounded-sm border ks-border-sub flex items-center justify-center">
            <FileSpreadsheet size={22} className="ks-gold" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-xl font-semibold">Export do Excelu</div>
            <div className="ks-muted text-sm">
              {tournamentCount > 0
                ? `${tournamentCount} turnajov · súbor .xlsx s listami`
                : 'Žiadne turnaje na export'}
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
            <div className="ks-display ks-cream text-xl font-semibold">Import z Excelu</div>
            <div className="ks-muted text-sm">Pridá turnaje z .xlsx súboru do archívu</div>
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
            <div className="ks-display ks-cream text-xl font-semibold">Editácia archívu</div>
            <div className="ks-muted text-sm">Otvor turnaj a klepni „Upraviť" — body, víťaza, kolá</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-text-accent text-xs px-1 pt-4 flex items-center gap-1.5">
          <AlertTriangle size={11} /> NEBEZPEČNÁ ZÓNA
        </div>

        <button onClick={onClearAll}
          className="ks-press w-full p-4 rounded-sm flex items-center gap-4 text-left border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/60 hover:brightness-125">
          <div className="w-12 h-12 rounded-sm border border-red-700/60 bg-red-950/50 flex items-center justify-center">
            <Trash2 size={22} className="ks-text-accent" />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-text-accent text-xl font-semibold">Vymazať všetky dáta</div>
            <div className="ks-text-accent/70 text-sm">Archív, rozohraná hra, pravidlá — nenávratná akcia</div>
          </div>
          <ChevronRight className="ks-text-accent" size={20} />
        </button>

        <div className="ks-card rounded-sm p-3 ks-body text-xs ks-muted italic mt-2 flex items-start gap-2">
          <AlertCircle size={14} className="ks-gold shrink-0 mt-0.5" />
          <div>
            Pred vymazaním dát si <strong className="ks-gold">vytvor zálohu</strong> cez Export do Excelu.
            Súbor neskôr môžeš obnoviť cez Import. Každý dohraný turnaj si pamätá dátum a čas začiatku aj konca.
          </div>
        </div>
      </div>
    </div>
  );
}

function GameViewModesScreen({ onBack, selectedMode, onChangeMode, selectedSkin }) {
  const options = [
    { id: 'basic', title: 'Klasický', desc: 'Tabuľka hore a zapisovanie bodov pod ňou.' },
    { id: 'observer', title: 'Pozorovateľ', desc: 'Veľký živý prehľad skóre pre obrazovku alebo TV.' },
    { id: 'recorder', title: 'Zapisovateľ', desc: 'Jednoduché veľké ovládanie pre rýchly zápis bodov.' },
  ];
  const skin = SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic;

  return (
    <div className="min-h-screen ks-fade pb-8" style={{ background: skin.bg }}>
      <Header title="Zobrazenie hry" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        {options.map((opt) => (
          <button key={opt.id} onClick={() => onChangeMode(opt.id)} className={`ks-card w-full p-4 rounded-sm text-left ks-press border ${selectedMode === opt.id ? 'border-amber-500/70 bg-amber-900/10' : 'ks-border-sub'}`}>
            <div className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="ks-display ks-cream text-xl font-semibold">{opt.title}</div>
                <div className="ks-muted text-sm mt-1">{opt.desc}</div>
              </div>
              <div className="shrink-0 w-[62px]">
                <div className="h-[92px] rounded-sm border border-amber-900/25 overflow-hidden" style={{ background: skin.bg }}>
                  {opt.id === 'basic' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'18px 28px 1fr', gap:'4px', padding:'5px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,184,106,0.24)'}} />
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.22)'}} />
                      <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.78)'}} />
                      </div>
                    </div>
                  ) : opt.id === 'observer' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'14px 1fr', gap:'4px', padding:'5px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.2)'}} />
                      <div style={{display:'grid', gridTemplateColumns:'8px 1fr 1fr 1fr', gap:'3px'}}>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.08)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(212,184,106,0.14)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /></div>
                        <div style={{display:'grid', gridTemplateRows:'repeat(4, 1fr)', gap:'3px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} /></div>
                      </div>
                    </div>
                  ) : (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'14px 22px 1fr 12px', gap:'4px', padding:'5px'}}>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 18px', gap:'3px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)'}} />
                      </div>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.22)'}} />
                      <div style={{display:'grid', gridTemplateRows:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} />
                        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px'}}><div style={{borderRadius:'2px', background:'rgba(255,255,255,0.04)'}} /><div style={{borderRadius:'2px', background:'rgba(212,184,106,0.78)'}} /></div>
                      </div>
                      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px'}}>
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.06)'}} />
                        <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.06)'}} />
                      </div>
                    </div>
                  )}
                </div>
                {selectedMode === opt.id ? <div className="ks-gold ks-mono text-[10px] text-right mt-1">AKTÍVNE</div> : <div className="h-[14px] mt-1" />}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Nový turnaj (s voľbou cieľa) ─────────────────────────────────────────


export { SkinSelector, FontSelector, VisualAndSkinScreen, SettingsMenu, GameViewModesScreen };
