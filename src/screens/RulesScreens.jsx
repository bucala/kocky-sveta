import React, { useState, useMemo } from 'react';
import { Trash2, Save, X, ChevronLeft, Settings, RotateCcw, ChevronRight, ListPlus, Pencil } from 'lucide-react';
import { useBackHandler } from '../hooks/useBackHandler.js';
import { showConfirm } from '../components/Dialogs.jsx';
import { DiceIcon, DiceRow, GoldButton, Header } from '../components/ui.jsx';
import { RULE_CATEGORIES, SETTING_RULE_IDS, ruleText, categoryText, optionText } from '../constants/rules.js';
import { MIN_TARGET } from '../constants/game.js';
import { useT, useLang, numberLocale } from '../lib/i18n.js';

// ─── Pravidlá: prehľad a editor ─────────────────────────────────────────

export function RulesView({ rules, onBack }) {
  const t = useT();
  const loc = numberLocale(useLang());
  const minWO     = Number(rules.find(r => r.id === 'r14')?.points) || 300;
  const target    = Number(rules.find(r => r.id === 'r15')?.points) || 10000;
  const penalty   = Number(rules.find(r => r.id === 'r16')?.points) || -1000;
  const overshoot = rules.find(r => r.id === 'r17')?.selected;
  const confirm   = rules.find(r => r.id === 'r18')?.selected;
  const sixOfKind = rules.find(r => r.id === 'r13')?.selected;

  const combinationrules = RULE_CATEGORIES
    .flatMap(cat => cat.ruleIds)
    .map(id => rules.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={t('rules.title')} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">
        <div className="ks-card rounded-sm p-5">
          <p className="ks-body ks-cream leading-relaxed">
            {t('rules.intro.a')}<em className="ks-gold">Kocky</em>{t('rules.intro.b')}
            <strong className="ks-gold"> {target.toLocaleString(loc)}</strong>{t('rules.intro.c')}
            <strong className="ks-gold"> {t('rules.intro.short')}</strong>{t('rules.intro.d')}
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            {t('rules.minEntry.a')}<strong className="ks-gold">{t('rules.pointsN', { n: minWO })}</strong>{t('rules.minEntry.b')}<em>{t('rules.minEntry.dash')}</em>{t('rules.penalty.a')}
            <strong className="ks-text-accent"> −{t('rules.pointsN', { n: Math.abs(penalty).toLocaleString(loc) })}</strong>{t('rules.endgame.a')}<strong className="ks-gold">{t('rules.pointsN', { n: (target - minWO).toLocaleString(loc) })}</strong>
            {target !== 5000 && <>{t('rules.endgame.short')}<strong className="ks-gold">{(5000 - minWO).toLocaleString(loc)}</strong>)</>}{t('rules.endgame.b')}<em className="ks-gold">{t('rules.endgame.word')}</em>{t('rules.endgame.c')}
          </p>
          <p className="ks-body ks-cream leading-relaxed mt-2">
            {overshoot === 'Hod sa neuznáva'
              ? t('rules.overshoot.rethrow')
              : t('rules.overshoot.dash')}
            {' '}{t('rules.winRound')}
            {confirm === 'Áno' && t('rules.confirm')}
            {sixOfKind === 'Automatická výhra' && t('rules.sixOfKind')}
          </p>
          <p className="ks-muted ks-body text-xs italic mt-3">
            {t('rules.hint.a')}<em>{t('rules.hint.path')}</em>{t('rules.hint.b')}
          </p>
        </div>

        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('rules.combos')}</div>

        <RulesContent rules={combinationrules} />
      </div>
    </div>
  );
}

export function RulesContent({ rules, compact = false }) {
  const t = useT();
  const lang = useLang();
  const loc = numberLocale(lang);
  return (
    <div className="space-y-2">
      {rules.map(rule => (
        <div key={rule.id}
             className={`ks-card rounded-sm ${compact ? 'p-3' : 'p-4'} flex items-start gap-3`}>
          <div className="flex-1">
            <div className="flex items-baseline justify-between gap-2 mb-1">
              <h4 className="ks-display ks-cream text-lg font-semibold">{ruleText(rule, lang).name}</h4>
              <div className={`ks-display text-xl font-bold whitespace-nowrap ${Number(rule.points) < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                {rule.type === 'select'
                  ? <span className="text-sm italic">{optionText(rule.selected, lang)}</span>
                  : t('rules.pts', { n: Number(rule.points).toLocaleString(loc) })}
              </div>
            </div>
            <p className="ks-muted text-sm leading-snug mb-2">{ruleText(rule, lang).description}</p>
            <DiceRow dice={rule.dice} size={compact ? 20 : 24} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function RulesEditor({ rules, onSave, onBack, onReset, selectedSkin }) {
  const t = useT();
  const lang = useLang();
  const [draft, setDraft] = useState(rules);
  const [activeCategory, setActiveCategory] = useState(null);
  const [editingId, setEditingId] = useState(null);
  // Späť vo vnútri editora ide o úroveň vyššie: úprava pravidla → kategória → zoznam kategórií.
  useBackHandler(() => {
    if (editingId) { setEditingId(null); return; }
    setActiveCategory(null);
  }, !!(activeCategory || editingId));

  function update(id, patch) { setDraft(prev => prev.map(r => r.id === id ? { ...r, ...patch } : r)); }
  async function remove(id) { if (await showConfirm(t('rules.remove.msg'), { title: t('rules.remove.title'), confirmLabel: t('rules.remove.confirm'), danger: true })) setDraft(prev => prev.filter(r => r.id !== id)); }
  function add() {
    const id = 'r' + Date.now();
    const newRule = { id, name: 'Nové pravidlo', description: 'Popis pravidla', points: 100, type: 'numeric', dice: [] };
    setDraft(prev => [...prev, newRule]);
    setEditingId(id);
  }
  function save() { onSave(draft); onBack(); }

  function rulesInCategory(catId) {
    const cat = RULE_CATEGORIES.find(c => c.id === catId);
    if (!cat) return [];
    return cat.ruleIds.map(id => draft.find(r => r.id === id)).filter(Boolean);
  }

  const settingrules = useMemo(() =>
    SETTING_RULE_IDS.map(id => draft.find(r => r.id === id)).filter(Boolean),
    [draft]);

  const customrules = useMemo(() => {
    const knownIds = new Set([...RULE_CATEGORIES.flatMap(c => c.ruleIds), ...SETTING_RULE_IDS]);
    return draft.filter(r => !knownIds.has(r.id));
  }, [draft]);

  if (activeCategory === 'cat-settings') {
    return (
      <div className="min-h-screen ks-fade ks-bg pb-32">
        <Header title={t('rules.values.title')} onBack={() => setActiveCategory(null)} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            {t('rules.values.hint')}
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
             style={{ background: 'color-mix(in srgb, var(--ks-bg-main, #0e0c0a) 95%, transparent)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => setActiveCategory(null)} variant="outline" icon={ChevronLeft}>{t('back')}</GoldButton>
            <GoldButton onClick={save} icon={Save}>{t('rules.saveAll')}</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  if (activeCategory) {
    const cat = activeCategory === 'cat-custom'
      ? { id: 'cat-custom', title: t('rules.custom.title'), subtitle: t('rules.custom.subtitle') }
      : categoryText(RULE_CATEGORIES.find(c => c.id === activeCategory), lang);

    const categoryrules = activeCategory === 'cat-custom' ? customrules : rulesInCategory(activeCategory);

    return (
      <div className="min-h-screen ks-fade ks-bg pb-32">
        <Header title={cat.title} onBack={() => { setActiveCategory(null); setEditingId(null); }} />

        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="ks-card rounded-sm p-3 ks-body text-sm ks-muted">
            {cat.subtitle}{t('rules.cat.hint')}
          </div>

          {categoryrules.length === 0 && (
            <div className="ks-card rounded-sm p-6 text-center ks-muted italic ks-body">
              {t('rules.cat.empty')}
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
              <span className="ks-display ks-gold">{t('rules.custom.add')}</span>
            </button>
          )}
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'color-mix(in srgb, var(--ks-bg-main, #0e0c0a) 95%, transparent)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={() => { setActiveCategory(null); setEditingId(null); }} variant="outline" icon={ChevronLeft}>{t('back')}</GoldButton>
            <GoldButton onClick={save} icon={Save}>{t('rules.saveAll')}</GoldButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen ks-fade ks-bg pb-32">
      <Header title={t('rules.editor.title')} onBack={onBack} />

      <div className="p-4 max-w-2xl mx-auto space-y-2">
        <div className="ks-mono ks-gold text-xs px-1 pt-2">{t('rules.combos')}</div>

        {RULE_CATEGORIES.map(cat => {
          const catrules = rulesInCategory(cat.id);
          return (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left">
              <div className="w-10 h-10 rounded-sm border ks-border-accent ks-gold ks-display flex items-center justify-center text-lg font-bold">
                {catrules.length}
              </div>
              <div className="flex-1">
                <div className="ks-display ks-cream text-lg font-semibold">{categoryText(cat, lang).title}</div>
                <div className="ks-muted text-sm">{categoryText(cat, lang).subtitle}</div>
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
            <div className="ks-display ks-cream text-lg font-semibold">{t('rules.custom.title')}</div>
            <div className="ks-muted text-sm">{t('rules.custom.count', { n: customrules.length })}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>

        <div className="ks-mono ks-gold text-xs px-1 pt-3">{t('rules.settings.section')}</div>

        <button onClick={() => setActiveCategory('cat-settings')}
          className="ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left border-l-4"
          style={{ borderLeftColor: '#d4b86a' }}>
          <div className="w-10 h-10 rounded-sm ks-gold-bg flex items-center justify-center">
            <Settings size={18} />
          </div>
          <div className="flex-1">
            <div className="ks-display ks-cream text-lg font-semibold">{t('rules.values.title')}</div>
            <div className="ks-muted text-sm">{t('rules.values.sub')}</div>
          </div>
          <ChevronRight className="ks-muted" size={20} />
        </button>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
           style={{ background: 'color-mix(in srgb, var(--ks-bg-main, #0e0c0a) 95%, transparent)' }}>
        <div className="max-w-2xl mx-auto grid grid-cols-3 gap-2">
          <GoldButton onClick={onReset} variant="danger" icon={RotateCcw}>{t('rules.reset')}</GoldButton>
          <GoldButton onClick={onBack} variant="outline" icon={X}>{t('cancel')}</GoldButton>
          <GoldButton onClick={save} icon={Save}>{t('save')}</GoldButton>
        </div>
      </div>
    </div>
  );
}

export function SettingEditCard({ rule, onUpdate }) {
  const t = useT();
  const lang = useLang();
  const isNumeric = rule.type === 'numeric';
  const isNeg = Number(rule.points) < 0;

  return (
    <div className="ks-card rounded-sm p-4">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <div className="ks-display ks-cream text-lg font-semibold">{ruleText(rule, lang).name}</div>
      </div>
      <p className="ks-muted text-sm leading-snug mb-3">{ruleText(rule, lang).description}</p>

      {isNumeric ? (
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={rule.points}
            onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
            onBlur={() => { if (rule.id === 'r15' && Number(rule.points) < MIN_TARGET) onUpdate({ points: MIN_TARGET }); }}
            min={rule.id === 'r15' ? MIN_TARGET : undefined}
            className={`flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-2xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`}
          />
          <div className="ks-mono ks-muted text-xs">{t('rules.pointsUnit')}</div>
        </div>
      ) : (
        <select
          value={rule.selected}
          onChange={(e) => onUpdate({ selected: e.target.value })}
          className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body text-base outline-none focus:border-amber-700"
        >
          {(rule.options || []).map(o => <option key={o} value={o}>{optionText(o, lang)}</option>)}
        </select>
      )}
    </div>
  );
}

export function RuleEditCard({ rule, isEditing, onEdit, onUpdate, onRemove }) {
  const t = useT();
  const lang = useLang();
  const isNeg = Number(rule.points) < 0;
  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="flex items-center gap-3 p-3" onClick={onEdit}>
        <div className="flex-1 cursor-pointer">
          <div className="ks-display ks-cream text-lg font-semibold">{ruleText(rule, lang).name}</div>
          <div className={`text-xs italic ${isNeg ? 'ks-text-accent' : 'ks-muted'}`}>
            {rule.type === 'select' ? optionText(rule.selected, lang) : t('rules.pointsN', { n: rule.points })}
          </div>
        </div>
        <DiceRow dice={rule.dice?.slice(0, 6)} size={18} />
        <button aria-label={t('edit')} onClick={(e) => { e.stopPropagation(); onEdit(); }} className="ks-press ks-gold p-1">
          <Pencil size={16} />
        </button>
      </div>

      {isEditing && (
        <div className="border-t ks-border-sub p-3 space-y-3 ks-fade">
          <Field label={t('rules.field.name')}>
            <input value={rule.name} onChange={(e) => onUpdate({ name: e.target.value })}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
          </Field>
          <Field label={t('rules.field.desc')}>
            <textarea value={rule.description} onChange={(e) => onUpdate({ description: e.target.value })} rows={2}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700 resize-none" />
          </Field>

          <Field label={t('rules.field.type')}>
            <select value={rule.type}
              onChange={(e) => {
                const newType = e.target.value;
                if (newType === 'select') {
                  onUpdate({ type: 'select', options: rule.options || ['Možnosť 1', 'Možnosť 2'], selected: rule.selected || (rule.options?.[0] || 'Možnosť 1') });
                } else onUpdate({ type: 'numeric' });
              }}
              className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
              <option value="numeric">{t('rules.type.numeric')}</option>
              <option value="select">{t('rules.type.select')}</option>
            </select>
          </Field>

          {rule.type === 'numeric' ? (
            <Field label={t('rules.field.points')}>
              <input type="number" value={rule.points}
                onChange={(e) => onUpdate({ points: parseInt(e.target.value, 10) || 0 })}
                className={`w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-display text-xl font-semibold outline-none focus:border-amber-700 ${isNeg ? 'ks-text-accent' : 'ks-gold'}`} />
            </Field>
          ) : (
            <>
              <Field label={t('rules.field.selected')}>
                <select value={rule.selected} onChange={(e) => onUpdate({ selected: e.target.value })}
                  className="w-full bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700">
                  {(rule.options || []).map(o => <option key={o} value={o}>{optionText(o, lang)}</option>)}
                </select>
              </Field>
              <Field label={t('rules.field.options')}>
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

          <Field label={t('rules.field.dice')}>
            <DicePicker dice={rule.dice || []} onChange={(d) => onUpdate({ dice: d })} />
          </Field>

          <button onClick={onRemove} className="ks-press ks-text-accent ks-mono text-xs flex items-center gap-1">
            <Trash2 size={14} /> {t('rules.remove.btn')}
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
  const t = useT();
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2 min-h-[36px] p-2 rounded-sm border ks-border-sub bg-stone-950/40">
        {dice.length === 0 && <span className="ks-muted text-sm italic">{t('rules.dice.none')}</span>}
        {dice.map((d, i) => (
          <button key={i} aria-label={t('rules.dice.remove', { n: d })} onClick={() => onChange(dice.filter((_, idx) => idx !== i))}
            className="ks-press ks-gold relative">
            <DiceIcon value={d} size={26} />
          </button>
        ))}
      </div>
      <div className="flex gap-1.5">
        {[1,2,3,4,5,6].map(v => (
          <button key={v} aria-label={t('rules.dice.add', { n: v })} onClick={() => dice.length < 6 && onChange([...dice, v])}
            className="ks-press ks-cream hover:text-amber-300 p-1.5 border ks-border-sub rounded-sm">
            <DiceIcon value={v} size={22} />
          </button>
        ))}
        {dice.length > 0 && (
          <button onClick={() => onChange([])}
            className="ks-press ml-auto ks-text-accent ks-mono text-xs px-2">
            {t('rules.dice.clear')}
          </button>
        )}
      </div>
    </div>
  );
}
