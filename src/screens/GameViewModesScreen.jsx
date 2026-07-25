import React from 'react';
import { Header } from '../components/ui.jsx';
import { SKIN_PRESETS } from '../constants/skins.js';

export function GameViewModesScreen({ onBack, selectedMode, onChangeMode, selectedSkin }) {
  const options = [
    { id: 'basic', title: 'Klasický', desc: 'Tabuľka hore a zapisovanie bodov pod ňou.' },
    { id: 'basicSimplified', title: 'Klasický zjednodušený', desc: 'Iba mená a aktuálne skóre vo veľkom, bez tabuľky kôl. Zapisovanie zostáva.' },
    { id: 'observer', title: 'Pozorovateľ', desc: 'Veľký živý prehľad skóre pre obrazovku alebo TV.' },
    { id: 'observerSimplified', title: 'Pozorovateľ zjednodušený', desc: 'Iba mená a skóre vo veľkom + graf priebehu hry. Bez tabuľky kôl.' },
    { id: 'recorder', title: 'Zapisovateľ', desc: 'Jednoduché veľké ovládanie pre rýchly zápis bodov.' },
    { id: 'combined', title: 'Kombinovaný', desc: 'Veľké skóre hore + rýchle zapisovanie bodov dole — všetko na jednej obrazovke.' },
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
                  ) : opt.id === 'basicSimplified' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'1fr 1fr', gap:'5px', padding:'6px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.10)', border:'1px solid rgba(212,184,106,0.3)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'60%', height:'8px', borderRadius:'2px', background:'rgba(212,184,106,0.7)'}} />
                      </div>
                      <div style={{borderRadius:'2px', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(212,184,106,0.15)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'50%', height:'8px', borderRadius:'2px', background:'rgba(255,255,255,0.3)'}} />
                      </div>
                    </div>
                  ) : opt.id === 'observerSimplified' ? (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'1fr 22px', gap:'4px', padding:'6px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.10)', border:'1px solid rgba(212,184,106,0.3)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'60%', height:'10px', borderRadius:'2px', background:'rgba(212,184,106,0.7)'}} />
                      </div>
                      <svg viewBox="0 0 40 20" style={{width:'100%', height:'100%'}}>
                        <polyline points="2,16 12,10 22,12 32,4" fill="none" stroke="rgba(212,184,106,0.7)" strokeWidth="1.5" />
                      </svg>
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
                  ) : opt.id === 'recorder' ? (
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
                  ) : (
                    <div style={{height:'100%', display:'grid', gridTemplateRows:'26px 20px 1fr', gap:'4px', padding:'5px'}}>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.10)', border:'1px solid rgba(212,184,106,0.3)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <div style={{width:'55%', height:'9px', borderRadius:'2px', background:'rgba(212,184,106,0.7)'}} />
                      </div>
                      <div style={{borderRadius:'2px', background:'rgba(212,184,106,0.18)', border:'1px solid rgba(212,184,106,0.22)'}} />
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
