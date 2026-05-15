console.log('[TS] TournamentScreen mounted');
import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Plus, Minus, Trash2, X, ChevronLeft,
  AlertTriangle, Check, RotateCcw, Crown,
  TrendingUp, ScrollText, Skull, Layers, Sigma, Target
} from 'lucide-react';
import { SKIN_PRESETS } from '../constants/skins.js';
import { QUICK_VALUES, PENALTY_VALUE, FUNNY_MESSAGES, POPUP_CONFIG } from '../constants/gameConfig.js';
import { GoldButton, Header, Toast, FunnyOverlay, SimplifiedResult, StatusBanner } from '../atoms/index.js';
import ScoreTable from '../components/ScoreTable.jsx';
import { ProgressChart } from '../components/ProgressChart.jsx';
import { RulesContent } from '../components/RulesContent.jsx';
import { Modal } from '../components/Modal.jsx';
import { isStrictMode, computeTotals, computeWinners } from '../lib/gameEngine.js';

export function SafeTournamentFallback({ title = 'Dáta sa nepodarilo načítať' }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ks-cream">
      <div className="ks-card rounded-sm p-5 text-center max-w-md">
        <div className="ks-display text-2xl ks-gold mb-2">{title}</div>
        <div className="ks-muted text-sm">Skús sa vrátiť späť alebo otvoriť turnaj znova.</div>
      </div>
    </div>
  );
}

// jednoduchý queue hook – ostáva tak ako v tvojom kóde
function useFunnyQueue(maxQueue = 3, minDuration = POPUP_CONFIG.POPUP_DISPLAY_DURATION) {
  const [active, setActive] = useState(null);
  const queueRef = useRef([]);
  const lockUntilRef = useRef(0);
  const timerRef = useRef(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const popNext = useCallback(() => {
    clearTimer();
    if (queueRef.current.length === 0) {
      setActive(null);
      lockUntilRef.current = 0;
      return;
    }
    const next = queueRef.current.shift();
    lockUntilRef.current = Date.now() + minDuration;
    setActive(next);
    timerRef.current = setTimeout(popNext, next.duration ?? minDuration);
  }, [clearTimer, minDuration]);

  function enqueue(data) {
    if (!data) return;
    if (!active) {
      lockUntilRef.current = Date.now() + minDuration;
      setActive(data);
      clearTimer();
      timerRef.current = setTimeout(popNext, data.duration ?? minDuration);
      return;
    }
    if (queueRef.current.length >= maxQueue) {
      queueRef.current[queueRef.current.length - 1] = data;
    } else {
      queueRef.current.push(data);
    }
  }

  function dismiss() {
    clearTimer();
    const now = Date.now();
    const remaining = Math.max(0, lockUntilRef.current - now);
    setActive(null);
    if (queueRef.current.length > 0) {
      timerRef.current = setTimeout(popNext, remaining);
    }
  }

  function clear() {
    queueRef.current = [];
    clearTimer();
    setActive(null);
    lockUntilRef.current = 0;
  }

  useEffect(() => clearTimer, [clearTimer]);

  return { active, enqueue, dismiss, clear };
}

export function TournamentScreen({
  tournament,
  rules,
  onUpdate,
  onFinish,
  onAbort,
  onMenu,
  scoreDisplayMode,
  onToggleScoreMode,
  selectedSkin,
  onSkinChange,
  tournamentViewMode = 'basic',
  funnyWindowsDisplayMode = 'standard',
}) {
  console.log('[TS] TournamentScreen mounted');
  console.log('[TS] view mode', tournamentViewMode);

  if (!tournament) return <SafeTournamentFallback />;

  const target = tournament.targetScore || 10000;
  const minWO = tournament.minWriteOff || 300;
  const players = Array.isArray(tournament.players) ? tournament.players : [];
  const rounds = Array.isArray(tournament.rounds) ? tournament.rounds : [];
  const { currentPlayer = 0, currentRound = 0 } = tournament;

  const [pending, setPending] = useState([]);
  const [customInput, setCustomInput] = useState('');
  const [showRules, setShowRules] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [toast, setToast] = useState(null);
  const funnyQueue = useFunnyQueue();
  const funny = funnyQueue.active;
  const [showWinPendingPopup, setShowWinPendingPopup] = useState(false);
  const [pendingWinScore, setPendingWinScore] = useState(null);
  const [pendingWinMeta, setPendingWinMeta] = useState(null);
  const [showTemporaryKingPopup, setShowTemporaryKingPopup] = useState(false);
  const [temporaryKingToken, setTemporaryKingToken] = useState(null);
  const [deferTemporaryKingUntilWinPopupCloses, setDeferTemporaryKingUntilWinPopupCloses] = useState(false);
  const [winnerCelebration, setWinnerCelebration] = useState(null);

  const funnyCountRef = useRef(players.map(() => 0));
  const endgameNoticedRef = useRef(new Set());
  const winPopupShownRef = useRef(new Set());

  const onUpdate = useCallback((updater) => {
    setData(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      return next;
    });
  }, []);

  const totals = useMemo(
    () => computeTotals(rounds, players.length),
    [rounds, players.length]
  );

  const hasFirstWrite = useMemo(
    () =>
      players.map((_, pIdx) =>
        rounds.some(r => typeof r[pIdx] === 'number' && r[pIdx] >= 0)
      ),
    [players, rounds]
  );

  const total = totals[currentPlayer];
  const isFirstWrite = !hasFirstWrite[currentPlayer];
  const isEndgame = total >= target - minWO && total < target;
  const strictMode = isStrictMode(rules);
  const winPendingPlayer = strictMode ? null : tournament.winPending;
  const isWinPendingTurn = winPendingPlayer === currentPlayer && winPendingPlayer !== null;
  const exactNeeded = target - total;
  const isLastPlayerInRound = currentPlayer === players.length - 1;

  const pendingSum = pending.reduce(
    (a, b) => a + (typeof b === 'number' ? b : 0),
    0
  );
  const newTotal = total + pendingSum;

  // RENDER SNAPSHOT – teraz už po všetkých definíciách
  console.log('[TS] render snapshot', {
    currentPlayer,
    currentRound,
    total,
    target,
    exactNeeded,
    isEndgame,
    strictMode,
    winPendingPlayer,
    isWinPendingTurn,
    showWinPendingPopup,
    pendingSum,
    newTotal,
  });

  function showToast(msg, kind = 'info') {
    setToast({ msg, kind });
    setTimeout(() => setToast(null), 3500);
  }

  function showFunny(customMsg, opts = {}) {
    const data = customMsg
      ? typeof customMsg === 'string'
        ? { msg: customMsg, emoji: '🎭', variant: 'fight' }
        : customMsg
      : FUNNY_MESSAGES[Math.floor(Math.random() * FUNNY_MESSAGES.length)];

    if (funnyWindowsDisplayMode === 'suppressed' && !opts.forceFullscreen) return;

    if (funnyWindowsDisplayMode === 'simplified' && !opts.forceFullscreen) {
      const dur = opts.duration ?? Math.max(POPUP_CONFIG.POPUP_DISPLAY_DURATION, 2600);
      setToast({ msg: data.msg, kind: 'info' });
      setTimeout(() => setToast(null), dur);
      return;
    }

    funnyQueue.enqueue({ ...data, duration: opts.duration ?? 3500 });
  }

  function maybeFunny() {
    if (pendingSum <= 0 || pendingSum >= 500) return;
    if (funnyCountRef.current[currentPlayer] >= 3) return;

    const max = Math.max(...totals);
    const min = Math.min(...totals);
    const isFarBehind = total < max - 1500;
    const isLastWithGap = total === min && totals.some(t => t > total + 800);

    if ((isFarBehind || isLastWithGap) && Math.random() < 0.55) {
      funnyCountRef.current[currentPlayer]++;
      showFunny();
    }
  }

  function addPoints(v) {
    if (!Number.isFinite(v) || v === 0) return;
    if (isWinPendingTurn) {
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    if (pending.some(p => p === 'dash' || p === PENALTY_VALUE)) {
      setPending([v]);
      return;
    }
    setPending(prev => [...prev, v]);
  }

  function addDash() {
    if (pending.length === 1 && pending[0] === 'dash') return;
    setPending(['dash']);
  }

  function addPenalty() {
    if (isWinPendingTurn) {
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }
    if (pending.length === 1 && pending[0] === PENALTY_VALUE) return;
    setPending([PENALTY_VALUE]);
  }

  function removePending(idx) {
    setPending(prev => prev.filter((_, i) => i !== idx));
  }
  function clearPending() {
    setPending([]);
  }

  // sem vlož tvoju existujúcu implementáciu advance – logika sa nemení
  function advance(value, opts = {}) {
    const val = value === 'dash' ? 'dash' : (typeof value === 'number' ? value : 0);
    
    onUpdate(t => {
      const newRounds = [...t.rounds];
      while (newRounds.length <= t.currentRound) {
        newRounds.push(Array(t.players.length).fill(null));
      }
      newRounds[t.currentRound][t.currentPlayer] = val;
      
      let nextPlayer = t.currentPlayer + 1;
      let nextRound = t.currentRound;
      
      if (nextPlayer >= t.players.length) {
        nextPlayer = 0;
        nextRound++;
      }
      
      const updatedT = {
        ...t,
        rounds: newRounds,
        currentPlayer: nextPlayer,
        currentRound: nextRound,
      };
      
      const winners = computeWinners(updatedT.rounds, updatedT.players.length, updatedT.targetScore);
      if (winners && winners.length > 0) {
        updatedT.winner = winners.length === 1 ? winners[0] : winners;
      }
      
      return updatedT;
    });
    
    setPending([]);
    setCustomInput('');
  }
      const player = players[currentPlayerIndex];
      
      // Zapíš body do rounds
      if (!rounds[currentRoundIndex]) {
        rounds[currentRoundIndex] = { scores: {} };
      }
      rounds[currentRoundIndex].scores[player.id] = value;
      
      // Posun na ďalšieho hráča
      draft.currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
      
      // Ak sme prešli všetkých hráčov, ukončíme kolo
      if (draft.currentPlayerIndex === 0) {
        draft.currentRoundIndex += 1;
        // Vyhodnoť víťazov pomocou computeWinners
        const winners = computeWinners(draft);
        if (winners.length > 0) {
          draft.winners = winners;
        }
      }
    });
    
    setPending(null);
    setCustomInput('');
  }

  // komplet tvoja commitPoints z paste.txt – tu sme len upratali koncovku / winPending
  function commitPoints() {
    if (pending.length === 0) return;

    if (pending[0] === 'dash') {
      if (isWinPendingTurn) {
        if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
          advance(pendingWinScore, {
            confirmWin: true,
            confirmedRound: pendingWinMeta?.round ?? currentRound,
            confirmedPlayer: currentPlayer,
          });
          setPendingWinScore(null);
          setPendingWinMeta(null);
          return;
        }
        advance('dash', {
          confirmWin: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      advance('dash');
      return;
    }

    if (isWinPendingTurn) {
      if (pendingSum === 0 && pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
        advance(pendingWinScore, {
          confirmWin: true,
          confirmedRound: pendingWinMeta?.round ?? currentRound,
          confirmedPlayer: currentPlayer,
        });
        setPendingWinScore(null);
        setPendingWinMeta(null);
        return;
      }
      showToast('Musíš potvrdiť ničnehodením (čiarka)!', 'warn');
      return;
    }

    if (pending.some(p => p < 0)) {
      if (pending.length > 1 || pending[0] !== PENALTY_VALUE) {
        showToast('Penalizácia −1 000 sa nedá kombinovať s inými bodmi.', 'warn');
        return;
      }
      advance(PENALTY_VALUE);
      return;
    }

    if (isEndgame) {
      if (pendingSum === exactNeeded) {
        if (strictMode) {
          maybeFunny();
          if (!isLastPlayerInRound) {
            showToast(
              `${players[currentPlayer]} dosiahol cieľ ${target.toLocaleString('sk-SK')}! Kolo sa dohrá a hra skončí.`,
              'info'
            );
          }
          advance(pendingSum, {
            addCandidate: currentPlayer,
            autoConfirm: true,
            confirmedRound: currentRound,
            confirmedPlayer: currentPlayer,
          });
          return;
        }
        setPendingWinScore(pendingSum);
        setPendingWinMeta({ player: currentPlayer, round: currentRound });
        setShowWinPendingPopup(true);
        if (!isLastPlayerInRound) {
          setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}-endgame`);
          setDeferTemporaryKingUntilWinPopupCloses(true);
        }
        return;
      }
      showToast(`Koncovka — treba presne ${exactNeeded} bodov. Automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    if (pendingSum > 0 && pendingSum < minWO) {
      showToast(`Každý zápis musí byť aspoň ${minWO} bodov, alebo daj čiarku.`, 'warn');
      return;
    }

    if (newTotal > target) {
      showToast(`Prekročenie ${target.toLocaleString('sk-SK')} – automatická čiarka!`, 'overshoot');
      advance('dash');
      return;
    }

    if (newTotal === target) {
      maybeFunny();
      if (strictMode) {
        if (!isLastPlayerInRound) {
          showToast(
            `${players[currentPlayer]} dosiahol cieľ ${target.toLocaleString('sk-SK')}! Kolo sa dohrá a hra skončí.`,
            'info'
          );
        }
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      if (isLastPlayerInRound) {
        maybeFunny();
        advance(pendingSum, {
          addCandidate: currentPlayer,
          autoConfirm: true,
          confirmedRound: currentRound,
          confirmedPlayer: currentPlayer,
        });
        return;
      }
      setTemporaryKingToken(`${currentPlayer}-${currentRound}-${pendingSum}`);
      setShowTemporaryKingPopup(true);
      advance(pendingSum, { addCandidate: currentPlayer });
      return;
    }

    maybeFunny();
    advance(pendingSum);
  }

  // WINNER efekt z tvojho kódu
  useEffect(() => {
    if (tournament.winner !== null && tournament.winner !== undefined) {
      funnyQueue.clear();
      setToast(null);
      const winnerArr = Array.isArray(tournament.winner)
        ? tournament.winner
        : [tournament.winner];
      setWinnerCelebration({ winnerArr, isDraw: winnerArr.length > 1 });
      const id = setTimeout(() => {
        setWinnerCelebration(null);
        onFinish(tournament.winner);
      }, 2200);
      return () => clearTimeout(id);
    }
  }, [tournament.winner, funnyQueue, onFinish]);

  // Auto-popup pri nástupe do koncovky
  useEffect(() => {
    if (!isEndgame) return;
    const key = `${currentPlayer}_${currentRound}`;
    if (endgameNoticedRef.current.has(key)) return;
    endgameNoticedRef.current.add(key);

    const t = setTimeout(() => {
      showFunny(
        {
          msg: `Hoď presne ${exactNeeded}! V koncovke potom treba potvrdenie. 😤`,
          emoji: '🤙',
          variant: 'fight',
        },
        { duration: 4500 }
      );
    }, 400);
    return () => clearTimeout(t);
  }, [currentPlayer, currentRound, isEndgame, exactNeeded]);

  // DEBUG efekt – sledujeme win‑pending závislosti
  useEffect(() => {
    console.log('[TS] winPending effect deps', {
      isWinPendingTurn,
      showWinPendingPopup,
      currentPlayer,
      currentRound,
      winPopupShownKeys: Array.from(winPopupShownRef.current),
    });
  }, [isWinPendingTurn, showWinPendingPopup, currentPlayer, currentRound]);

// Auto-popup pri winPending kole – iba v "basic" (live) režime
useEffect(() => {
  if (tournamentViewMode !== 'basic') return;
  if (!isWinPendingTurn) return;
  if (showWinPendingPopup) return;
  const key = `winpending_${currentPlayer}_${currentRound}`;
  if (winPopupShownRef.current.has(key)) return;
  winPopupShownRef.current.add(key);
  const t = setTimeout(() => {
    setShowWinPendingPopup(true);
  }, 300);
  return () => clearTimeout(t);
}, [tournamentViewMode, isWinPendingTurn, currentPlayer, currentRound, showWinPendingPopup]);

  const isObserverMode = tournamentViewMode === 'observer';
  const isRecorderMode = tournamentViewMode === 'recorder';
  const blockFollowupPopups = showTemporaryKingPopup && temporaryKingToken !== null;

  useEffect(() => {
    if (!(showTemporaryKingPopup && temporaryKingToken !== null)) return;
    const t = setTimeout(() => {
      setShowTemporaryKingPopup(false);
      setTemporaryKingToken(null);
      setDeferTemporaryKingUntilWinPopupCloses(false);
    }, 1700);
    return () => clearTimeout(t);
  }, [showTemporaryKingPopup, temporaryKingToken]);

function addCustom() {
  const n = parseInt(customInput, 10);
  if (!Number.isFinite(n) || n === 0) return;
  if (n % 50 !== 0) {
    showToast('Hodnota musí byť násobok 50 (50, 100, 150…)', 'warn');
    return;
  }
  addPoints(n);
  setCustomInput('');
}

if (!tournament || !Array.isArray(tournament.players) || !Array.isArray(tournament.rounds)) {
  return <SafeTournamentFallback />;
}

return (
  <div
    className={`min-h-screen ks-fade ${isRecorderMode ? 'pb-6' : 'pb-32'}`}
    style={{ background: (SKIN_PRESETS[selectedSkin] || SKIN_PRESETS.classic).bg }}
  >
      {!isRecorderMode && (
        <Header
          title={`Turnaj · do ${target.toLocaleString('sk-SK')}`}
          onBack={onMenu}
          right={
            <div className="flex items-center gap-2">
              <button
                onClick={onToggleScoreMode}
                className="ks-press ks-gold p-1.5 rounded-sm border border-amber-700/40 hover:bg-amber-900/20"
                title={scoreDisplayMode === 'delta' ? 'Prepnúť na kumulatívne' : 'Prepnúť na prípisy'}
              >
                {scoreDisplayMode === 'delta'
                  ? <Sigma size={16} />
                  : <Layers size={16} />}
              </button>
              <button onClick={onAbort} className="ks-press ks-text-accent px-2 py-1 text-xs ks-mono">ZRUŠIŤ</button>
            </div>
          }
        />
      )}

      {isObserverMode ? (
        <div className="px-2 pt-1 pb-3 h-[100dvh] flex flex-col">
          <div className="flex-1 min-h-0 ks-card rounded-sm p-1 overflow-hidden">
            <div className="h-full overflow-auto [font-size:clamp(18px,2.3vw,34px)]">
              <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                          pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                          displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={false} hideModeToggle={true} compactObserver={true} />
            </div>
          </div>
        </div>
      ) : isRecorderMode ? (
        <div className="min-h-[100dvh] flex flex-col px-3 pt-[max(10px,env(safe-area-inset-top))] pb-[max(10px,env(safe-area-inset-bottom))]">
          <div className="flex items-center justify-between gap-2 mb-2">
            <button onClick={onMenu} className="ks-press ks-cream flex items-center gap-1 px-2 py-1"><ChevronLeft size={20} /><span className="ks-body">Späť</span></button>
            <div className="ks-display ks-gold text-lg text-center">{players[currentPlayer]}</div>
            <button onClick={onAbort} className="ks-press ks-card px-3 py-2 rounded-sm ks-mono text-xs ks-text-accent">ZRUŠIŤ</button>
          </div>
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-baseline justify-between mb-2">
              <div className="ks-mono ks-gold text-xs">NA ŤAHU · KOLO {currentRound + 1}</div>
              <div className="ks-mono ks-muted text-xs">CIEĽ {target.toLocaleString('sk-SK')}</div>
            </div>
            <div className="flex items-end justify-between gap-3 mb-1">
              <div className="flex-1 min-w-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">HRÁČ</div>
                <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">{players[currentPlayer]}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="ks-mono ks-muted text-[10px] mb-0.5">AKTUÁLNE SKÓRE</div>
                <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`} style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                  {total.toLocaleString('sk-SK')}
                </div>
              </div>
            </div>
          </div>
          <div className="ks-card-prom rounded-sm p-4 mb-2">
            <div className="flex items-center justify-between mb-3">
              <div className="ks-mono ks-gold text-xs">PRÁVE PRIPISUJEŠ</div>
              <div className="flex items-baseline gap-2">
                {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                  <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString('sk-SK')}</span>
                )}
                {pending[0] === 'dash' ? (
                  <div className="ks-display text-6xl font-bold ks-muted">—</div>
                ) : (
                  <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                    {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString('sk-SK')}
                  </div>
                )}
              </div>
            </div>
            {pending.length > 0 ? (
              <div className="flex flex-wrap gap-2 mb-3">
                {pending.map((p, i) => (
                  <button key={i} onClick={() => removePending(i)} className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border ${p === 'dash' ? 'border-stone-600/60 bg-stone-800/40 ks-muted' : p < 0 ? 'border-red-800/60 bg-red-950/40 ks-text-accent' : 'ks-border-accent bg-stone-900/70 ks-cream'}`}>
                    <span className="ks-display font-semibold">{p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}</span>
                    <X size={14} className="opacity-60 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm">Pridaj body alebo čiarku z hodu nižšie…</div>
            )}
            <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">Zapísať</GoldButton>
          </div>
          <div className="ks-card-sub rounded-sm p-4 flex-1">
            <div className="ks-mono ks-muted text-xs mb-3">PRIDAJ BODY Z HODU</div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {QUICK_VALUES.map(v => (
                <button key={v} onClick={() => addPoints(v)} className="ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">+{v}</button>
              ))}
            </div>
            <div className="flex gap-2 mb-3">
              <input type="number" value={customInput} onChange={(e) => setCustomInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && addCustom()} placeholder="Vlastná hodnota" className="flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700" />
              <GoldButton onClick={addCustom} icon={Plus} variant="outline">Pridaj</GoldButton>
            </div>
            <div className="ks-divider my-3" />
            <div className="grid grid-cols-2 gap-2">
              <button onClick={addDash} className="ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2"><Minus size={20} className="ks-muted" /><span className="ks-mono ks-cream font-semibold">ČIARKA</span></button>
              <button onClick={addPenalty} className="ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2"><Skull size={20} className="ks-text-accent" /><span className="ks-mono ks-text-accent font-semibold">−1 000</span></button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
              <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">Pravidlá</GoldButton>
            </div>
          </div>
        </div>
      ) : (
      <>
      <div className="px-3 pt-3">
        <ScoreTable tournament={tournament} totals={totals} highlightPlayer={currentPlayer}
                    pendingPreview={pendingSum > 0 ? pendingSum : 0} target={target}
                    displayMode={scoreDisplayMode} onToggleMode={onToggleScoreMode} hideModeToolbar={true} />
      </div>

      <div className="px-4 mt-4">
        <div className="ks-card-prom rounded-sm p-4">
          <div className="flex items-baseline justify-between mb-2">
            <div className="ks-mono ks-gold text-xs">NA ŤAHU · KOLO {currentRound + 1}</div>
            <div className="ks-mono ks-muted text-xs">CIEĽ {target.toLocaleString('sk-SK')}</div>
          </div>
          <div className="flex items-end justify-between gap-3 mb-1">
            <div className="flex-1 min-w-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">HRÁČ</div>
              <div className="ks-display text-4xl ks-cream font-bold leading-tight truncate">
                {players[currentPlayer]}
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="ks-mono ks-muted text-[10px] mb-0.5">AKTUÁLNE SKÓRE</div>
              <div className={`ks-display text-5xl font-bold leading-none ${total < 0 ? 'ks-text-accent' : 'ks-gold'}`}
                   style={{ textShadow: total >= 0 ? '0 2px 12px rgba(212,184,106,0.3)' : 'none' }}>
                {total.toLocaleString('sk-SK')}
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            {isEndgame && (
              <StatusBanner kind="warn" icon={Target}>
                <strong>Koncovka!</strong> Treba presne <strong>{exactNeeded}</strong> bodov.
              </StatusBanner>
            )}
          </div>
        </div>
      </div>

      {/* PROMINENTNÁ KARTA — pripisované body + commit */}
      <div className="px-4 mt-4">
            <div className="ks-card-prom rounded-sm p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="ks-mono ks-gold text-xs">PRÁVE PRIPISUJEŠ</div>
                <div className="flex items-baseline gap-2">
                  {pending.length > 0 && pending[0] !== 'dash' && Number.isFinite(newTotal) && (
                    <span className="ks-muted text-xl ks-mono leading-none">→ {newTotal.toLocaleString('sk-SK')}</span>
                  )}
                  {pending[0] === 'dash' ? (
                    <div className="ks-display text-6xl font-bold ks-muted">—</div>
                  ) : (
                    <div className={`ks-display text-6xl font-bold ${pendingSum < 0 ? 'ks-text-accent' : 'ks-gold'}`}>
                      {pendingSum > 0 ? '+' : ''}{pendingSum.toLocaleString('sk-SK')}
                    </div>
                  )}
                </div>
              </div>

              {pending.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-3">
                  {pending.map((p, i) => (
                    <button key={i} onClick={() => removePending(i)}
                      className={`ks-press group flex items-center gap-1.5 px-3 py-1.5 rounded-sm border
                        ${p === 'dash' ? 'border-stone-600/60 bg-stone-800/40 ks-muted' :
                          p < 0 ? 'border-red-800/60 bg-red-950/40 ks-text-accent' :
                          'ks-border-accent bg-stone-900/70 ks-cream'}`}>
                      <span className="ks-display font-semibold">
                        {p === 'dash' ? '— čiarka' : (p > 0 ? `+${p}` : p)}
                      </span>
                      <X size={14} className="opacity-60 group-hover:opacity-100" />
                    </button>
                  ))}
                  {pending.length > 1 && (
                    <button onClick={clearPending} className="ks-press px-3 py-1.5 rounded-sm ks-text-accent text-xs ks-mono">
                      VYMAZAŤ VŠETKO
                    </button>
                  )}
                </div>
              ) : (
                <div className="ks-muted text-sm italic mb-3 py-2 text-center border border-dashed ks-border-sub rounded-sm">
                  Pridaj body alebo čiarku z hodu nižšie…
                </div>
              )}

              <GoldButton onClick={commitPoints} disabled={pending.length === 0} icon={Check} className="w-full text-lg">
                Zapísať
              </GoldButton>
            </div>
          </div>

          {/* SUBTÍLNA KARTA — predvolené hodnoty */}
          <div className="px-4 mt-4">
            <div className="ks-card-sub rounded-sm p-4">
              <div className="ks-mono ks-muted text-xs mb-3">PRIDAJ BODY Z HODU</div>

              <div className="grid grid-cols-3 gap-2 mb-3">
                {QUICK_VALUES.map(v => (
                  <button key={v} onClick={() => addPoints(v)}
                    className="ks-press border ks-border-sub bg-stone-950/40 hover:bg-stone-900/60 py-2.5 rounded-sm ks-display ks-cream text-lg font-semibold">
                    +{v}
                  </button>
                ))}
              </div>

              <div className="flex gap-2 mb-3">
                <input type="number" value={customInput}
                  onChange={(e) => setCustomInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addCustom()}
                  placeholder="Vlastná hodnota"
                  className="flex-1 bg-stone-950/60 border ks-border-sub rounded-sm px-3 py-2 ks-cream ks-body outline-none focus:border-amber-700"
                />
                <GoldButton onClick={addCustom} icon={Plus} variant="outline">Pridaj</GoldButton>
              </div>

              <div className="ks-divider my-3" />

              {/* Špeciálne tlačidlá: Čiarka + Penalizácia */}
              <div className="grid grid-cols-2 gap-2">
                <button onClick={addDash}
                  className="ks-press p-3 rounded-sm border-2 border-stone-600/50 bg-gradient-to-b from-stone-900/60 to-stone-950/80 hover:brightness-125 flex items-center justify-center gap-2">
                  <Minus size={20} className="ks-muted" />
                  <span className="ks-mono ks-cream font-semibold">ČIARKA</span>
                </button>
                <button onClick={addPenalty}
                  className="ks-press p-3 rounded-sm border-2 border-red-900/60 bg-gradient-to-b from-red-950/60 to-stone-950/60 hover:brightness-125 flex items-center justify-center gap-2">
                  <Skull size={20} className="ks-text-accent" />
                  <span className="ks-mono ks-text-accent font-semibold">−1 000</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="ks-muted text-[10px] italic text-center">Hod bez zápisu (— pomlčka)</div>
                <div className="ks-muted text-[10px] italic text-center">Nič nehodené (penalizácia)</div>
              </div>
            </div>
          </div>

      <div className="px-4 mt-4 grid grid-cols-2 gap-2">
        <GoldButton onClick={() => setShowStandings(true)} icon={TrendingUp} variant="ghost">Priebeh hry</GoldButton>
        <GoldButton onClick={() => setShowrules(true)} icon={ScrollText} variant="ghost">Pravidlá</GoldButton>
      </div>
      </>
      )}

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
      {!blockFollowupPopups && funny && !showWinPendingPopup && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay data={funny} onClose={funnyQueue.dismiss} />
      )}

      {showStandings && (
        <Modal onClose={() => setShowStandings(false)} title="Priebeh hry">
          <ProgressChart tournament={tournament} totals={totals} target={target} />
        </Modal>
      )}
      {showrules && (
        <Modal onClose={() => setShowrules(false)} title="Pravidlá hry">
          <RulesContent rules={rules} compact />
        </Modal>
      )}

      {/* DOČASNÝ KRÁĽ — varianta podľa režimu */}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'standard' && (
        <FunnyOverlay
          data={{
            // emoji nahradíme špeciálnym placeholderom; FunnyOverlay vie že
            // 'strikethrough-crown' znamená SVG namiesto unicode emoji.
            msg: 'Dočasný kráľ! Neteš sa predčasne, ešte ťa môžu zosadiť z trónu.',
            emoji: 'strikethrough-crown',
            variant: 'fight'
          }}
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'simplified' && (
        <SimplifiedResult
          kind="temporary-king"
          title="Dočasný kráľ"
          subtitle="Neteš sa predčasne, ešte ťa môžu zosadiť z trónu."
          actionLabel="KLIKNI PRE ZATVORENIE"
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}
      {blockFollowupPopups && funnyWindowsDisplayMode === 'suppressed' && (
        <SimplifiedResult
          kind="temporary-king"
          title="Dočasný kráľ"
          subtitle="Neteš sa predčasne, ešte ťa môžu zosadiť z trónu."
          actionLabel="KLIKNI PRE ZATVORENIE"
          onClose={() => {
            setShowTemporaryKingPopup(false);
            setTemporaryKingToken(null);
            setDeferTemporaryKingUntilWinPopupCloses(false);
          }}
        />
      )}

      {/* VÍŤAZSTVO / REMÍZA — celoobrazovkové, nezávisle na queue */}
      {winnerCelebration && funnyWindowsDisplayMode === 'standard' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-6 ks-overlay-bg" style={{ background: 'radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))' }}>
          <div className="ks-funny relative z-10 text-center max-w-md">
            <div className="text-7xl mb-3 ks-funny-emoji">{winnerCelebration.isDraw ? '👑👑' : '👑'}</div>
            <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">
              {winnerCelebration.isDraw
                ? `REMÍZA — ${winnerCelebration.winnerArr.length} VÍŤAZI`
                : 'VÍŤAZ'}
            </div>
            <div className="ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2">
              {winnerCelebration.isDraw ? 'Víťazi' : 'Víťaz'}
            </div>
            <div className="ks-body ks-cream text-base mb-1 leading-snug">
              {winnerCelebration.winnerArr.map(idx =>
                `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
              ).join(', ')}
            </div>
          </div>
        </div>
      )}
      {winnerCelebration && funnyWindowsDisplayMode === 'simplified' && (
        <SimplifiedResult
          kind={winnerCelebration.isDraw ? 'draw' : 'victory'}
          title={winnerCelebration.isDraw
            ? `Víťazi (${winnerCelebration.winnerArr.length})`
            : 'Víťaz'}
          subtitle={winnerCelebration.winnerArr.map(idx =>
            `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
          ).join(', ')}
          onClose={() => {}}
        />
      )}
      {winnerCelebration && funnyWindowsDisplayMode === 'suppressed' && (
        <SimplifiedResult
          kind={winnerCelebration.isDraw ? 'draw' : 'victory'}
          title={winnerCelebration.isDraw
            ? `Víťazi (${winnerCelebration.winnerArr.length})`
            : 'Víťaz'}
          subtitle={winnerCelebration.winnerArr.map(idx =>
            `${players[idx]} (${(totals[idx] || 0).toLocaleString('sk-SK')})`
          ).join(', ')}
          onClose={() => {}}
        />
      )}

      {/* WIN-PENDING POPUP */}
      {tournamentViewMode === "basic" && !blockFollowupPopups && showWinPendingPopup && funnyWindowsDisplayMode === 'standard' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-6 ks-overlay-bg"
             style={{ background: 'radial-gradient(circle at center, rgba(120,80,40,0.95), rgba(14,12,10,0.98))' }}>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full ks-funny-orb"
                 style={{ background: 'radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)' }} />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full ks-funny-orb"
                 style={{ background: 'radial-gradient(circle, rgba(212,184,106,0.5), transparent 70%)', animationDelay: '1s' }} />
          </div>
          <div className="ks-funny relative z-10 text-center max-w-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, transparent, #d4b86a)' }} />
              <Crown size={16} className="ks-gold" />
              <div className="h-px flex-1 max-w-[60px]" style={{ background: 'linear-gradient(90deg, #d4b86a, transparent)' }} />
            </div>
            <div className="text-7xl mb-3 ks-funny-emoji" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.6))' }}>
              😤
            </div>
            <div className="ks-mono ks-gold text-xs mb-3 tracking-widest">­🏁 DOSIAHOL {target.toLocaleString('sk-SK')} — POTVRD VÝHRU</div>
            <div className="ks-display text-4xl font-bold ks-cream leading-tight px-2 mb-2"
                 style={{ textShadow: '0 4px 24px rgba(212,184,106,0.4), 0 0 40px rgba(212,184,106,0.4)' }}>
              {players[currentPlayer]}
            </div>
            <div className="ks-body ks-cream text-base mb-5 leading-snug">
              Hráč <em className="ks-gold">{players[currentPlayer]}</em> dosiahol cieľ!<br/>Skupina potvrdzuje výhru — bola hra čistá?
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const shouldShowDeferredKing = deferTemporaryKingUntilWinPopupCloses && temporaryKingToken !== null;
                  setShowWinPendingPopup(false);
                  if (shouldShowDeferredKing) setShowTemporaryKingPopup(true);
                  if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
                    advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
                    setPendingWinScore(null);
                    setPendingWinMeta(null);
                  } else {
                    advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
                  }
                }}
                className="ks-press py-4 px-3 rounded-sm border-2 ks-border-accent bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125">
                <Crown size={20} className="ks-gold mx-auto mb-1" />
                <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
                <div className="ks-muted text-[10px] ks-mono mt-0.5">VÝHRA POTVRDENÁ</div>
              </button>
              <button
                onClick={() => {
                  setPendingWinScore(null);
                  setPendingWinMeta(null);
                  setShowWinPendingPopup(false);
                  setDeferTemporaryKingUntilWinPopupCloses(false);
                  setTemporaryKingToken(null);
                  advance('dash');
                }}
                className="ks-press py-4 px-3 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125">
                <X size={20} className="ks-text-accent mx-auto mb-1" />
                <div className="ks-display ks-text-accent text-base font-bold">Nepotvrdil</div>
                <div className="ks-text-accent/60 text-[10px] ks-mono mt-0.5">VÝHRA NEPOTVRDENÁ</div>
              </button>
            </div>
          </div>
        </div>
      )}
      {/* WIN-PENDING POPUP — zjednodušený / potlačený: karta bez click-outside */}
      {tournamentViewMode === "basic" && !blockFollowupPopups && showWinPendingPopup && (funnyWindowsDisplayMode === 'simplified' || funnyWindowsDisplayMode === 'suppressed') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
             style={{ background: 'rgba(10,8,6,0.92)' }}>
          {/* intentionally NO onClick on backdrop — user must click a button */}
          <div className="ks-card max-w-sm w-full rounded-sm border-2 p-5 text-center shadow-2xl"
               style={{ borderColor: '#d4b86a' }}>
            <div className="flex justify-center mb-3">
              <Crown size={48} className="ks-gold" style={{ filter: 'drop-shadow(0 4px 16px rgba(212,184,106,0.5))' }} />
            </div>
            <div className="ks-mono ks-gold text-xs tracking-widest mb-2">POTVRD VÝHRU</div>
            <div className="ks-display text-2xl font-bold ks-cream leading-tight px-2 mb-1">
              {players[currentPlayer]}
            </div>
            <div className="ks-body ks-cream text-sm opacity-90 leading-snug mb-5">
              Hráč <em className="ks-gold">{players[currentPlayer]}</em> dosiahol <strong>{target.toLocaleString('sk-SK')}</strong>.<br/>
              Potvrďte, že v overovom hode nič nepadlo.
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  const shouldShowDeferredKing = deferTemporaryKingUntilWinPopupCloses && temporaryKingToken !== null;
                  setShowWinPendingPopup(false);
                  if (shouldShowDeferredKing) setShowTemporaryKingPopup(true);
                  if (pendingWinScore !== null && pendingWinMeta?.player === currentPlayer) {
                    advance(pendingWinScore, { confirmWin: true, confirmedRound: pendingWinMeta?.round ?? currentRound, confirmedPlayer: currentPlayer });
                    setPendingWinScore(null);
                    setPendingWinMeta(null);
                  } else {
                    advance('dash', { confirmWin: true, confirmedRound: currentRound, confirmedPlayer: currentPlayer });
                  }
                }}
                className="ks-press py-3 px-2 rounded-sm border-2 ks-border-accent bg-gradient-to-b from-amber-900/40 to-amber-950/40 hover:brightness-125">
                <div className="ks-display ks-gold text-base font-bold">✓ Potvrdil</div>
              </button>
              <button
                onClick={() => {
                  setPendingWinScore(null);
                  setPendingWinMeta(null);
                  setShowWinPendingPopup(false);
                  setDeferTemporaryKingUntilWinPopupCloses(false);
          setTemporaryKingToken(null);
          advance('dash');
        }}
        className="ks-press py-3 px-2 rounded-sm border-2 border-red-900/50 bg-gradient-to-b from-red-950/40 to-stone-950/40 hover:brightness-125">
        <div className="ks-display ks-text-accent text-base font-bold">✗ Nepotvrdil</div>
      </button>
    </div>
  </div>
</div>
      )}
    </div>
  );
}
// ─── Modal + tabuľka poradia ──────────────────────────────────────────────

