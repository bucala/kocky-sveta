import React, { useState } from 'react';
import { ChevronLeft, Plus, Trash2, RotateCcw, AlertCircle } from 'lucide-react';
import { Header, GoldButton } from '../atoms/index.js';
import { SKIN_PRESETS, DICE_ICONS } from '../constants/skins.js';
import { DEFAULT_RULES, RULE_CATEGORIES, SETTING_RULE_IDS } from '../constants/gameConfig.js';
export function RulesView({ rules, onBack }) {
  // Získať aktuálne hodnoty pre popis
  const minWO     = Number(rules.find(r => r.id === 'r14')?.points) || 300;
  const target    = Number(rules.find(r => r.id === 'r15')?.points) || 10000;
  const penalty   = Number(rules.find(r => r.id === 'r16')?.points) || -1000;
  const koncovka  = minWO;

  // Všetky bodové kombinácie zlúčené (poradie z RULE_CATEGORIES)
  const combinationrules = RULE_CATEGORIES
    .flatMap(cat => cat.ruleIds)
    .map(id => rules.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Pravidlá hry" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        {/* Informačný úvodný popis (nie editovateľný — len text) */}
        <div className="ks-card rounded-sm p-5">
          <p className="ks-body ks-cream leading-relaxed">
            Cieľom hry <em className="ks-gold">Kocky</em> je byť prvým hráčom, ktorý dosiahne cieľové skóre —
            <strong className="ks-gold"> {target.toLocaleString('sk-SK')}</strong> v klasickej hre alebo
            <strong className="ks-gold"> 5 000</strong> v krátkej. Hráči sa striedajú v hodoch šesťkociek.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Každý zápis musí byť aspoň <strong className="ks-gold">{minWO} bodov</strong> (minimálny odpis) — alebo daj <em>čiarku</em>.
            Hru sa dá <em>začať</em> aj čiarkou bez bodov. Ak v hode nepadla žiadna bodujúca kocka,
            z aktuálneho skóre sa odpočíta <strong className="ks-text-accent">{Math.abs(penalty).toLocaleString('sk-SK')} bodov</strong>.
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            Ak hod prekročí cieľ, body sa nezapočítajú a podľa nastavenia sa zapíše neplatný ťah, spravidla <em>čiarka</em>.
            V závere hry treba dohrať na <em className="ks-gold">presný cieľ</em>; ak sa zapne potvrdenie víťazstva, po presnom zásahu
            nasleduje ešte overovací ťah, v ktorom musí padnúť ničnehodenie.
          </p>
          <p className="ks-muted ks-body text-xs italic mt-3">
            Hodnoty cieľa, prípisu a penalizácie sa dajú upraviť v <em>Nastavenia → Úprava pravidiel → Hodnoty hry</em>.
          </p>
        </div>

        <div className="ks-mono ks-gold text-xs px-1 pt-2">BODOVÉ KOMBINÁCIE</div>

        <RulesContent rules={combinationrules} />
      </div>
    </div>
  );
}

export function RulesContent({ rules, compact = false }) {
  return (
    <div className="space-y-2">
      {rules.map(rule => (
        <div key={rule.id}
             className={`ks-card rounded-sm ${compact ? 'p-3' : 'p-4'} flex items-start gap-3`}>
          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h4 className="ks-display ks-cream text-lg font-semibold">{rule.name}</h4>
              <div className={`ks-display text-xl font-bold whitespace-nowrap ${Number(rule.points) < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                {rule.type === 'select'
                  ? <span className="text-sm italic">{rule.selected}</span>
                  : `${Number(rule.points).toLocaleString('sk-SK')} b.`}
              </div>
            </div>
            <p className="ks-muted text-sm leading-snug mb-2">{rule.description}</p>
            <DiceRow dice={rule.dice} size={compact ? 20 : 24} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function RulesEditor({ rules, onSave, onBack, onReset, selectedSkin }) {
  const [draft, setDraft] = useState(rules);
  const [activeCategory, setActiveCategory] = useState(null);
  const [editingId, setEditingId] = useState(null);

  function update(id, patch) { setDraft(prev => prev.map(r => r.id === id ? { ...r, ...patch } : r)); }
  function remove(id) { if (window.confirm('Vymazať toto pravidlo?')) setDraft(prev => prev.filter(r => r.id !== id)); }
  function add() {
    const id = 'r' + Date.now();
    const newRule = { id, name: 'Nové pravidlo', description: 'Popis pravidla', points: 100, type: 'numeric', dice: [] };
    setDraft(prev => [...prev, newRule]);
    setEditingId(id);
  }
  function save() { onSave(draft); onBack(); }

  // Spočítať pravidlá v kategórii
  function rulesInCategory(catId) {
    const cat = RULE_CATEGORIES.find(c => c.id === catId);
    if (!cat) return [];
    return cat.ruleIds.map(id => draft.find(r => r.id === id)).filter(Boolean);
  }

  // Nastavenia hry (flow rules: r14-r18)
  const settingrules = useMemo(() =>
    SETTING_RULE_IDS.map(id => draft.find(r => r.id === id)).filter(Boolean),
    [draft]);

  // Pravidlá ktoré nepatria do žiadnej kategórie (vlastné pridané)
  const customrules = useMemo(() => {
    const knownIds = new Set([...RULE_CATEGORIES.flatMap(c => c.ruleIds), ...SETTING_RULE_IDS]);
    return draft.filter(r => !knownIds.has(r.id));
  }, [draft]);

  // ─── Detail: Nastavenia hry ──────────────────────────────────────────
  if (activeCategory === 'cat-settings') {
    return (
      <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
        <Header title="Hodnoty hry" onBack={() => setActiveCategory(null)} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            Hodnoty cieľa, prvého zápisu, penalizácie za ničnehodenie, správania pri prekročení cieľa a potvrdenia výhry. Tieto sa premietnu aj do popisu v Pravidlách hry.
          </div>

          {settingrules.map(rule => (
            <SettingEditCard
              key={rule.id}
              rule={rule}
              onUpdate={(patch) => update(rule.id, patch)}
            />
          ))}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => setActiveCategory(null)} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  // ─── Detail kategórie ────────────────────────────────────────────────
  if (activeCategory) {
    const cat = activeCategory === 'cat-custom'
      ? { id: 'cat-custom', title: 'Vlastné pravidlá', subtitle: 'Tebou pridané pravidlá' }
      : RULE_CATEGORIES.find(c => c.id === activeCategory);

    const categoryrules = activeCategory === 'cat-custom' ? customrules : rulesInCategory(activeCategory);

    return (
      <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
        <Header title={cat.title} onBack={() => { setActiveCategory(null); setEditingId(null); }} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            {cat.subtitle}. Klepni na pravidlo pre úpravu hodnôt.
          </div>

          {categoryrules.length === 0 && (
            <div className="ks-card rounded-sm p-6 text-center ks-muted italic ks-body">
              Žiadne pravidlá v tejto kategórii.
            </div>
          )}

          {categoryrules.map(rule => (
            <RuleEditCard
              key={rule.id}
              rule={rule}
              isEditing={editingId === rule.id}
              onEdit={() => setEditingId(editingId === rule.id ? null : rule.id)}
              onUpdate={(patch) => update(rule.id, patch)}
              onRemove={() => remove(rule.id)}
            />
          ))}

          {activeCategory === 'cat-custom' && (
            <button onClick={add}
              className="ks-press ks-card w-full p-3 rounded-sm flex items-center justify-center gap-2 border-dashed">
              <ListPlus size={18} className="ks-gold" />
              <span className="ks-display ks-gold">Pridať vlastné pravidlo</span>
            </button>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'rgba(14,12,10,0.95)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => { setActiveCategory(null); setEditingId(null); }} variant="outline" icon={ChevronLeft}>Späť</GoldButton>
            <GoldButton onClick={save} icon={Save}>Uložiť všetko</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  // ─── Hlavné menu kategórií ──────────────────────────────────────────
  return (
    <div className="min-h-screen ks-fade pb-32" style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}>
      <Header title="Úprava pravidiel" onBack={onBack} />

      <div className="p-4 max-w-2xl mx-auto space-y-2">
        <div className="ks-mono ks-gold text-xs px-1 pt-2">BODOVÉ KOMBINÁCIE</div>

        {RULE_CATEGORIES.map(cat => {
          const catrules = rulesInCategory(cat.id);
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
              <div className="w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold">
                {catrules.length}
              </div>
              <div className="flex-1">
                <div className="ks-display ks-cream text-lg font-semibold">{cat.title}</div>
                <div className="ks-muted text-sm">{cat.subtitle}</div>
              </div>
              <ChevronRight className="ks-muted" size={20} />
            </button>
          );
        })}

        <button onClick={() => setActiveCategory('cat-custom')}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-dashed">
          <div className="w-10 h-10 rounded-sm border ks-border-accent ks-gold flex items-center justify-center">
            <ListPlus size={18} />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-lg font-semibold">Vlastné pravidlá</div>
            <div className="ks-muted text-sm">{customrules.length} pridaných pravidiel</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">NASTAVENIA HRY</div>

        <button onClick={() => setActiveCategory('cat-settings')}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4"
          style={{ borderLeftColor: '#d4b86a' }}>
          <div className="w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center">
            <Settings size={18} />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-lg font-semibold">Hodnoty hry</div>
            <div className="ks-muted text-sm">Cieľ · prvý zápis · koncovka · potvrdenie výhry · penalizácia</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
           style={{ background: 'rgba(14,12,10,0.95)' }}>
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-2">
          <GoldButton onClick={onReset} variant="danger" icon={RotateCcw}>Reset</GoldButton>
          <GoldButton onClick={onBack} variant="outline" icon={X}>Zrušiť</GoldButton>
          <GoldButton onClick={save} icon={Save}>Uložiť</GoldButton>
        </div>
      </div>
    </div>
  );
}

export function SettingEditCard({ rule, onUpdate }) {
  const isNumeric = rule.type === 'numeric';
  const isNeg = Number(rule.points) < 0;

  return (
    <div className="ks-card rounded-sm p-4">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div className="ks-display ks-cream text-lg font-semibold">{rule.name}</div>
      </div>
      <p className="ks-muted text-sm leading-snug mb-3">{rule.description}</p>

      {isNumeric ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={rule.points}
            onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
            className={`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`}
          />
          <div className="ks-mono ks-muted text-xs">BODOV</div>
        </div>
      ) : (
        <select
          value={rule.selected}
          onChange={(e) => onUpdate({ selected: e.target.value })}
          className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700"
        >
          {(rule.options || []).map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
    </div>
  );
}

export function RuleEditCard({ rule, isEditing, onEdit, onUpdate, onRemove }) {
  const isNeg = Number(rule.points) < 0;
  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3" onClick={onEdit}>
        <div className="flex-1 cursor-pointer">
          <div className="ks-display ks-cream text-lg font-semibold">{rule.name}</div>
          <div className={`text-xs italic ${isNeg ? 'ks-text-accent' : 'ks-muted'}`}>
            {rule.type === 'select' ? rule.selected : `${rule.points} bodov`}
          </div>
        </div>
        <DiceRow dice={rule.dice?.slice(0, 6)} size={18} />
        <button onClick={(e) => { e.stopPropagation(); onEdit(); }} className="ks-press ks-gold p-1">
          <Pencil size={16} />
        </button>
      </div>

      {isEditing && (
        <div className="border-t ks-border-sub p-3 space-y-3 ks-fade">
          <Field label="Názov">
            <input value={rule.name} onChange={(e) => onUpdate({ name: e.target.value })}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
          </Field>
          <Field label="Popis">
            <textarea value={rule.description} onChange={(e) => onUpdate({ description: e.target.value })} rows={2}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none" />
          </Field>

          <Field label="Typ pravidla">
            <select value={rule.type}
              onChange={(e) => {
                const newType = e.target.value;
                if (newType === 'select') {
                  onUpdate({ type: 'select', options: rule.options || ['Možnosť 1', 'Možnosť 2'], selected: rule.selected || (rule.options?.[0] || 'Možnosť 1') });
                } else onUpdate({ type: 'numeric' });
              }}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
              <option value="numeric">Číselné (pevný počet bodov)</option>
              <option value="select">Výber zo zoznamu</option>
            </select>
          </Field>

          {rule.type === 'numeric' ? (
            <Field label="Body (môže byť aj záporné)">
              <input type="number" value={rule.points}
                onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
                className={`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`} />
            </Field>
          ) : (
            <>
              <Field label="Aktívna možnosť">
                <select value={rule.selected} onChange={(e) => onUpdate({ selected: e.target.value })}
                  className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
                  {(rule.options || []).map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>
              <Field label="Možnosti (oddelené čiarkou)">
                <input value={(rule.options || []).join(', ')}
                  onChange={(e) => {
                    const opts = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                    const sel = opts.includes(rule.selected) ? rule.selected : (opts[0] || '');
                    onUpdate({ options: opts, selected: sel });
                  }}
                  className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              </Field>
            </>
          )}

          <Field label="Kocky (piktogramy)">
            <DicePicker dice={rule.dice || []} onChange={(d) => onUpdate({ dice: d })} />
          </Field>

          <button onClick={onRemove} className="ks-press ks-text-accent ks-mono text-xs flex items-center gap-1">
            <Trash2 size={14} /> Vymazať pravidlo
          </button>
        </div>
      )}
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <div>
      <div className="ks-mono ks-gold text-xs mb-1.5">{label.toUpperCase()}</div>
      {children}
    </div>
  );
}

export function DicePicker({ dice, onChange }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40">
        {dice.length === 0 && <span className="ks-muted text-sm italic">Žiadne kocky</span>}
        {dice.map((d, i) => (
          <button key={i} onClick={() => onChange(dice.filter((_, idx) => idx !== i))}
            className="ks-press ks-gold relative">
            <DiceIcon value={d} size={26} />
          </button>
        ))}
      </div>
      <div className="flex gap-1.5">
        {[1,2,3,4,5,6].map(v => (
          <button key={v} onClick={() => dice.length < 6 && onChange([...dice, v])}
            className="ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm">
            <DiceIcon value={v} size={22} />
          </button>
        ))}
        {dice.length > 0 && (
          <button onClick={() => onChange([])}
            className="ks-press ml-auto ks-text-accent ks-mono text-xs px-2">
            VYMAZAŤ
          </button>
        )}
      </div>
    </div>
  );
}
