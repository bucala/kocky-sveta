import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Trash2, Save, X, Archive as ArchiveIcon, Trophy, Users, AlertTriangle, Check, Play, Crown, Calendar, ChevronRight, Target, Edit3, Clock, Sigma, Layers } from 'lucide-react';
import { useBackHandler } from '../hooks/useBackHandler.js';
import ScoreTable from '../components/ScoreTable.jsx';
import { showConfirm } from '../components/Dialogs.jsx';
import { GoldButton, Header, SafeTournamentFallback, Standings } from '../components/ui.jsx';
import { TARGET_OPTIONS } from '../constants/game.js';
import { formatDateTime, formatDuration } from '../lib/format.js';
import { computeWinners, computePlayerTotals as computeTotals } from '../lib/tournamentEngine.js';
import { parseScoreCell, formatScoreCell } from '../lib/scoreInput.js';
import { useT, useLang, numberLocale } from '../lib/i18n.js';

// ─── Archív turnajov: zoznam, detail a úprava ───────────────────────────

export function ArchiveScreen({ tournaments, onBack, onView, onDelete, readOnly }) {
  const t = useT();
  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title={readOnly ? t('archive.title') : t('archive.title.edit')} onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto">
        {!readOnly && (
          <div className="ks-card rounded-sm p-3 mb-3 ks-body text-xs ks-muted italic flex items-start gap-2">
            <Edit3 size={14} className="ks-gold shrink-0 mt-0.5" />
            <div>{t('archive.edit.hint')}</div>
          </div>
        )}
        {tournaments.length === 0 ? (
          <div className="ks-card rounded-sm p-8 text-center">
            <ArchiveIcon className="ks-gold mx-auto opacity-40" size={48} />
            <p className="ks-muted ks-body mt-3 italic">{t('archive.empty')}</p>
          </div>
        ) : (
          <div className="space-y-2">
            {tournaments.map(item => <ArchiveItem key={item.id} t={item} onView={() => onView(item)} onDelete={() => onDelete(item.id)} readOnly={readOnly} />)}
          </div>
        )}
      </div>
    </div>
  );
}

export function ArchiveItem({ t: tour, onView, onDelete, readOnly }) {
  const t = useT();
  const loc = numberLocale(useLang());
  if (!tour || !Array.isArray(tour.players) || !Array.isArray(tour.rounds) || tour.players.length === 0) return <SafeTournamentFallback title={t('archive.corrupt')} />;
  const totals = computeTotals(tour.rounds, tour.players.length);
  const winnerArr = tour.winner === null || tour.winner === undefined
    ? []
    : (Array.isArray(tour.winner) ? tour.winner : [tour.winner]);
  const winnerLabel = winnerArr.length === 0
    ? null
    : (winnerArr.length === 1
        ? tour.players[winnerArr[0]]
        : t('archive.drawList', { names: winnerArr.map(i => tour.players[i]).join(', ') }));
  const target = tour.targetScore || 10000;
  const duration = formatDuration(tour.date, tour.finishedAt);

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <button onClick={onView} className="ks-press w-full p-4 text-left flex items-center gap-3">
        <div className={`w-12 h-12 rounded-sm flex items-center justify-center
          ${tour.status === 'finished' ? 'ks-gold-bg' : 'border ks-border-sub ks-muted'}`}>
          {tour.status === 'finished' ? <Trophy size={22} /> : <X size={22} />}
        </div>
        <div className="flex-1 min-w-0">
          <div className="ks-display ks-cream text-lg font-semibold truncate">
            {winnerLabel
              ? <>{winnerArr.length > 1 ? '' : t('archive.winnerPrefix')}<span className="ks-gold">{winnerLabel}</span></>
              : <span className="italic ks-muted">{t('archive.unfinished')}</span>}
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <Calendar size={11} className="ks-muted" />
            <div className="ks-mono ks-muted text-xs truncate">
              {formatDateTime(tour.date, loc)}{duration ? ` · ${duration}` : ''}
            </div>
          </div>
          <div className="ks-muted text-xs truncate mt-0.5">
            {t('archive.item.meta', { n: tour.players.length, target: target.toLocaleString(loc) })} · {tour.players.join(' · ')}
          </div>
        </div>
        <ChevronRight className="ks-muted" size={20} />
      </button>
      <div className="border-t border-amber-900/20 px-4 py-2 flex items-center justify-between">
        <div className="ks-mono ks-gold text-sm">
          {t('archive.points', { n: Math.max(...totals).toLocaleString(loc) })}
        </div>
        {!readOnly && (
          <button onClick={onDelete} className="ks-press ks-text-accent text-xs ks-mono flex items-center gap-1">
            <Trash2 size={12} /> {t('archive.delete')}
          </button>
        )}
      </div>
    </div>
  );
}

export function ArchiveDetail({ tournament, onBack, onUpdate, readOnly, scoreDisplayMode, onToggleScoreMode, selectedSkin }) {
  const t = useT();
  const loc = numberLocale(useLang());
  if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) return <SafeTournamentFallback title={t('archive.corrupt')} />;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(null);
  // Späť počas úprav najprv zruší úpravy (rovnako ako tlačidlo Späť v hlavičke).
  useBackHandler(() => { setDraft(null); setEditing(false); }, editing);

  function startEdit() {
    setDraft({
      players: [...tournament.players],
      rounds: (tournament.rounds || []).map(r => [...r]),
      winner: tournament.winner,
      targetScore: tournament.targetScore || 10000,
      winnerTouched: false,
    });
    setEditing(true);
  }

  function cancelEdit() {
    setDraft(null);
    setEditing(false);
  }

  function saveEdit() {
    const edited = {
      ...tournament,
      players: draft.players,
      rounds: draft.rounds,
      targetScore: draft.targetScore,
      pendingDecision: null,
      // potvrdenia viazané na kolá, ktoré už neexistujú, sa zahodia
      _confirmedDetailed: Array.isArray(tournament._confirmedDetailed)
        ? tournament._confirmedDetailed.filter(c => c.round < draft.rounds.length)
        : tournament._confirmedDetailed,
    };
    const computed = computeWinners(edited);
    // Ručne zvolený víťaz má prednosť; inak sa víťaz prepočíta zo súčtov.
    const winners = draft.winnerTouched
      ? (draft.winner === null || draft.winner === undefined ? [] : (Array.isArray(draft.winner) ? draft.winner : [draft.winner]))
      : (computed.valid ? computed.winners : []);
    const winner = winners.length === 0 ? null : (winners.length === 1 ? winners[0] : [...winners].sort((a, b) => a - b));
    const status = winner !== null ? 'finished' : (tournament.status === 'finished' ? 'aborted' : tournament.status);
    onUpdate({
      players: edited.players,
      rounds: edited.rounds,
      targetScore: edited.targetScore,
      _confirmedDetailed: edited._confirmedDetailed,
      _validatedTotals: computeTotals(edited.rounds, edited.players.length),
      winner,
      status,
      finishedAt: tournament.finishedAt || (status !== 'active' ? new Date().toISOString() : undefined),
    });
    setEditing(false);
    setDraft(null);
  }

  function updateCell(roundIdx, playerIdx, newValue) {
    setDraft(prev => {
      const rounds = prev.rounds.map(r => [...r]);
      while (rounds.length <= roundIdx) {
        rounds.push(new Array(prev.players.length).fill(null));
      }
      rounds[roundIdx][playerIdx] = newValue;
      return { ...prev, rounds };
    });
  }

  function addRound() {
    setDraft(prev => ({
      ...prev,
      rounds: [...prev.rounds, new Array(prev.players.length).fill(null)],
    }));
  }

  async function removeRound(idx) {
    if (!(await showConfirm(t('archive.removeRound.msg', { n: idx + 1 }), { title: t('archive.removeRound.title'), confirmLabel: t('archive.removeRound.confirm'), danger: true }))) return;
    setDraft(prev => ({
      ...prev,
      rounds: prev.rounds.filter((_, i) => i !== idx),
    }));
  }

  function setWinner(playerIdx) {
    setDraft(prev => {
      const cur = prev.winner;
      const arr = cur === null || cur === undefined
        ? []
        : (Array.isArray(cur) ? [...cur] : [cur]);
      const idx = arr.indexOf(playerIdx);
      if (idx >= 0) arr.splice(idx, 1);
      else arr.push(playerIdx);
      const newWinner = arr.length === 0 ? null : (arr.length === 1 ? arr[0] : arr.sort((a,b)=>a-b));
      return { ...prev, winner: newWinner, winnerTouched: true };
    });
  }

  const display = editing && draft ? draft : tournament;
  const totals = computeTotals(display.rounds, display.players.length);
  const target = display.targetScore || 10000;
  const duration = formatDuration(tournament.date, tournament.finishedAt);

  const winnerComputation = useMemo(() => {
    if (tournament.status !== 'finished') return null;
    return computeWinners({
      ...display,
      _confirmedDetailed: tournament._confirmedDetailed,
      rules: tournament.rules,
    });
  }, [display, tournament]);

  const declaredWinners = display.winner === null || display.winner === undefined
    ? []
    : (Array.isArray(display.winner) ? [...display.winner] : [display.winner]);

  const hasDiscrepancy = winnerComputation && (() => {
    if (winnerComputation.winners.length !== declaredWinners.length) return true;
    const a = [...winnerComputation.winners].sort();
    const b = [...declaredWinners].sort();
    return !a.every((v, i) => v === b[i]);
  })();

  return (
    <div className="min-h-screen ks-fade ks-bg pb-32">
      <Header title={t('archive.detail.title')} onBack={editing ? cancelEdit : onBack}
        right={
          <div className="flex items-center gap-2">
            {!editing && (
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? t('game.toggle.toCumulative') : t('game.toggle.toDelta')}
                aria-label={scoreDisplayMode === 'delta' ? t('game.toggle.toCumulative') : t('game.toggle.toDelta')}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>
            )}
            {editing || readOnly ? null : (
              <button onClick={startEdit} className="ks-press ks-gold flex items-center gap-1 text-xs ks-mono">
                <Edit3 size={14} /> {t('archive.edit')}
              </button>
            )}
          </div>
        }
      />
      <div className="p-4 max-w-2xl mx-auto space-y-4">
        <div className="ks-card rounded-sm p-5 text-center">
          {tournament.status === 'finished' && display.winner !== null && display.winner !== undefined ? (() => {
            const winnerArr = Array.isArray(display.winner) ? display.winner : [display.winner];
            const isDraw = winnerArr.length > 1;
            return (
              <>
                <Crown className="ks-gold mx-auto" size={40} />
                <div className="ks-mono ks-gold text-xs mt-2">{isDraw ? t('archive.drawN', { n: winnerArr.length }) : t('archive.winner')}</div>
                <div className="space-y-1.5 mt-1">
                  {winnerArr.map(idx => (
                    <div key={idx}>
                      <div className="ks-display ks-cream text-2xl font-bold">{display.players[idx]}</div>
                      <div className="ks-display ks-gold text-xl">{totals[idx].toLocaleString(loc)}</div>
                    </div>
                  ))}
                </div>
              </>
            );
          })() : (
            <div className="ks-muted italic">{tournament.status === 'aborted' ? t('archive.aborted') : t('archive.unfinished')}</div>
          )}

          <div className="mt-4 pt-4 border-t ks-border-sub grid grid-cols-2 gap-3 text-left">
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Play size={10} /> {t('archive.start')}</div>
              <div className="ks-body ks-cream text-sm mt-0.5">{formatDateTime(tournament.date, loc)}</div>
            </div>
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Check size={10} /> {t('archive.end')}</div>
              <div className="ks-body ks-cream text-sm mt-0.5">
                {tournament.finishedAt ? formatDateTime(tournament.finishedAt, loc) : '—'}
              </div>
            </div>
            {duration && (
              <div className="col-span-2">
                <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Clock size={10} /> {t('archive.duration')}</div>
                <div className="ks-body ks-cream text-sm mt-0.5">{duration}</div>
              </div>
            )}
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Target size={10} /> {t('archive.target')}</div>
              {editing ? (
                <select
                  value={draft.targetScore}
                  onChange={(e) => setDraft(prev => ({ ...prev, targetScore: Number(e.target.value) }))}
                  aria-label={t('archive.target.aria')}
                  className="ks-body ks-cream text-sm mt-0.5 bg-transparent border ks-border-sub rounded-sm px-1 py-0.5"
                >
                  {[...new Set([...TARGET_OPTIONS.map(o => o.value), draft.targetScore])].map(v => (
                    <option key={v} value={v} style={{ color: '#111' }}>{t('archive.pts', { n: v.toLocaleString(loc) })}</option>
                  ))}
                </select>
              ) : (
                <div className="ks-body ks-cream text-sm mt-0.5">{t('archive.pts', { n: target.toLocaleString(loc) })}</div>
              )}
            </div>
            <div>
              <div className="ks-mono ks-muted text-xs flex items-center gap-1"><Users size={10} /> {t('archive.players')}</div>
              <div className="ks-body ks-cream text-sm mt-0.5">{display.players.length}</div>
            </div>
          </div>
        </div>

        {hasDiscrepancy && winnerComputation && (
          <div className="ks-card rounded-sm p-3 border-2 border-red-700/60 bg-red-950/30">
            <div className="flex items-start gap-2">
              <AlertTriangle size={20} className="ks-text-accent shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="ks-mono ks-text-accent text-xs tracking-widest mb-1">{t('archive.mismatch.title')}</div>
                <div className="ks-body ks-cream text-sm leading-snug">
                  {t('archive.mismatch.declared')}{' '}
                  <strong className="ks-gold">
                    {declaredWinners.length === 0 ? '—' : declaredWinners.map(i => display.players[i]).join(', ')}
                  </strong>
                  <br/>
                  {t('archive.mismatch.computed')}{' '}
                  <strong className="ks-gold">
                    {winnerComputation.winners.length === 0
                      ? t('archive.mismatch.none')
                      : winnerComputation.winners.map(i => `${display.players[i]} (${(totals[i] || 0).toLocaleString(loc)})`).join(', ')}
                  </strong>
                </div>
                {winnerComputation.errors.length > 0 && (
                  <div className="ks-body ks-text-accent text-xs mt-2">
                    {winnerComputation.errors.join(' · ')}
                  </div>
                )}
                {!readOnly && (
                  <div className="ks-body ks-text-accent text-xs mt-2 italic">
                    {t('archive.mismatch.fix')}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {!editing && (
          <div>
            <div className="ks-mono ks-gold text-xs mb-2">{t('archive.finalTable')}</div>
            <Standings players={display.players} totals={totals} target={target} />
          </div>
        )}

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="ks-mono ks-gold text-xs">{editing ? t('archive.editTable') : t('archive.history')}</div>
            {editing && (
              <button onClick={addRound} className="ks-press ks-gold ks-mono text-xs flex items-center gap-1">
                <Plus size={12} /> {t('archive.addRound')}
              </button>
            )}
          </div>
          {editing ? (
            <EditableScoreTable
              players={draft.players}
              rounds={draft.rounds}
              totals={totals}
              target={target}
              winner={draft.winner}
              onChangeCell={updateCell}
              onRemoveRound={removeRound}
              onSetWinner={setWinner}
            />
          ) : (
            <ScoreTable
              tournament={{ ...display, currentRound: -1 }}
              totals={totals}
              highlightPlayer={display.winner ?? -1}
              highlightVariant="winner"
              target={target}
              displayMode={scoreDisplayMode}
              onToggleMode={onToggleScoreMode}
              hideModeToolbar={true}
            />
          )}
        </div>
      </div>

      {editing && (
        <div className="fixed bottom-0 left-0 right-0 p-3 border-t ks-border-sub backdrop-blur"
             style={{ background: 'color-mix(in srgb, var(--ks-bg-main, #0e0c0a) 95%, transparent)' }}>
          <div className="max-w-2xl mx-auto grid grid-cols-2 gap-2">
            <GoldButton onClick={cancelEdit} variant="outline" icon={X}>{t('cancel')}</GoldButton>
            <GoldButton onClick={saveEdit} icon={Save}>{t('archive.saveChanges')}</GoldButton>
          </div>
        </div>
      )}
    </div>
  );
}

export function ScoreCellInput({ value, onCommit, className }) {
  const t = useT();
  const [text, setText] = useState(formatScoreCell(value));
  const [invalid, setInvalid] = useState(false);
  useEffect(() => { setText(formatScoreCell(value)); setInvalid(false); }, [value]);
  function commit() {
    const res = parseScoreCell(text);
    if (!res.ok) { setInvalid(true); setText(formatScoreCell(value)); return; }
    setInvalid(false);
    if (res.value !== value) onCommit(res.value);
    else setText(formatScoreCell(value));
  }
  return (
    <input
      value={text}
      inputMode="text"
      onChange={(e) => { setText(e.target.value); setInvalid(false); }}
      onBlur={commit}
      onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); commit(); } }}
      placeholder="·"
      aria-invalid={invalid}
      title={t('archive.cell.title')}
      className={`${className} ${invalid ? 'border-red-700' : ''}`}
    />
  );
}

export function EditableScoreTable({ players, rounds, totals, target, winner, onChangeCell, onRemoveRound, onSetWinner }) {
  const t = useT();
  const loc = numberLocale(useLang());

  return (
    <div className="ks-card rounded-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" style={{ tableLayout: 'fixed', minWidth: `${36 + Math.max(players.length, 1) * Math.max(80, 300 / Math.max(players.length, 1))}px` }}>
          <colgroup>
            <col style={{ width: 36 }} />
            {players.map((_, i) => (<col key={i} style={{ width: `${100 / (players.length + 0.25)}%`, minWidth: `${Math.max(80, 300 / Math.max(players.length, 1))}px` }} />))}
            <col style={{ width: 36 }} />
          </colgroup>
          <thead>
            <tr className="border-b ks-border-sub">
              <th className="ks-mono ks-muted text-xs font-normal py-2 px-2 text-center sticky left-0" style={{ width: 36, background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>{t('archive.table.round')}</th>
              {players.map((p, i) => (
                <th key={i} className="ks-display ks-cream py-2 px-1 text-sm font-semibold text-center whitespace-nowrap overflow-hidden text-ellipsis">{p}</th>
              ))}
              <th style={{ width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {rounds.map((round, rIdx) => (
              <tr key={rIdx} className="border-b border-amber-900/15">
                <td className="ks-mono ks-muted text-xs py-1.5 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg, rgba(14,12,10,0.97))' }}>{rIdx + 1}</td>
                {players.map((_, pIdx) => {
                  const v = round[pIdx];
                  return (
                    <td key={pIdx} className="p-0.5">
                      <ScoreCellInput
                        value={v}
                        onCommit={(nv) => onChangeCell(rIdx, pIdx, nv)}
                        className={`w-full bg-stone-950/40 border ks-border-sub rounded-sm px-2 py-1 ks-display text-center text-sm outline-none focus:border-amber-700 ${
                          v === 'dash' ? 'ks-muted' : (typeof v === 'number' && v < 0 ? 'ks-text-accent' : 'ks-cream')
                        }`}
                      />
                    </td>
                  );
                })}
                <td className="text-center">
                  <button aria-label={t('archive.removeRound.aria')} onClick={() => onRemoveRound(rIdx)}
                    className="ks-press ks-text-accent hover:ks-text-accent p-1">
                    <Trash2 size={12} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t-2 ks-border-accent">
              <td className="ks-mono ks-gold text-xs py-2 px-2 text-center sticky left-0" style={{ background: 'var(--ks-sticky-bg2, rgba(10,8,6,0.98))' }}>∑</td>
              {totals.map((total, i) => {
                const reached = total >= target;
                const winnerSet = winner === null || winner === undefined
                  ? new Set()
                  : (Array.isArray(winner) ? new Set(winner) : new Set([winner]));
                const isWinner = winnerSet.has(i);
                return (
                  <td key={i} className="text-center py-2 px-2">
                    <button onClick={() => onSetWinner(i)}
                      className={`ks-press w-full ks-display text-base font-bold rounded-sm py-1 px-2 ${
                        isWinner ? 'ks-gold-bg'
                        : reached ? 'ks-gold border border-amber-700/40'
                        : total < 0 ? 'ks-text-accent' : 'ks-cream'
                      }`}>
                      {isWinner && <Crown size={12} className="inline mr-1" />}
                      {total.toLocaleString(loc)}
                    </button>
                  </td>
                );
              })}
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="p-2 border-t border-amber-900/20 ks-muted text-xs italic text-center ks-body">
        {t('archive.table.hint')}
      </div>
    </div>
  );
}
