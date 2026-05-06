import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Dice1, Dice2, Dice3, Dice4, Dice5, Dice6,
  Plus, Minus, Trash2, Save, X, ChevronLeft,
  BookOpen, Archive as ArchiveIcon, Settings, Trophy, Users,
  AlertCircle, AlertTriangle, Check, Play, RotateCcw, ScrollText, Crown,
  Calendar, ChevronRight, ListPlus, Pencil, Zap, Skull, Target,
  Download, Upload, Edit3, Clock, FileSpreadsheet, ChevronDown, TrendingUp,
  Sigma, Layers, Monitor, Bell
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { Capacitor } from '@capacitor/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import ScoreTable from './components/ScoreTable.jsx';

import {
  POPUP_CONFIG, QUICK_VALUES, PENALTY_VALUE, FUNNY_MESSAGES,
  RULE_CATEGORIES, SETTING_RULE_IDS, TARGET_OPTIONS, DEFAULT_RULES,
  formatDateTime, formatDuration, computeTotals, isStrictMode,
  computeWinners
} from './constants.js';
import { SKIN_PRESETS, skinVarsCss, STYLES } from './styles/appStyles.js';
import DiceIcon from './atoms/DiceIcon.jsx';
import DiceRow from './atoms/DiceRow.jsx';
import GoldButton from './atoms/GoldButton.jsx';
import Ornament from './atoms/Ornament.jsx';
import Header from './atoms/Header.jsx';
import Toast from './atoms/Toast.jsx';
import StrikethroughCrown from './atoms/StrikethroughCrown.jsx';
import SimplifiedResult from './atoms/SimplifiedResult.jsx';
import FunnyOverlay from './atoms/FunnyOverlay.jsx';
import StatusBanner from './atoms/StatusBanner.jsx';
import PendingChips from './atoms/PendingChips.jsx';
import useFunnyQueue from './hooks/useFunnyQueue.js';

// ─── App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState('menu');
  const [tournaments, setTournaments] = useState([]);
  const [active, setActive] = useState(null);
  const [rules, setrules] = useState(DEFAULT_RULES);
  const [viewingTournament, setViewingTournament] = useState(null);
  const [archiveReturnTo, setArchiveReturnTo] = useState('menu');
  const [loaded, setLoaded] = useState(false);
  const [selectedSkin, setSelectedSkin] = useState('classic');

  const [scoreDisplayMode, setScoreDisplayMode] = useState('delta');
  const [tournamentViewMode, setTournamentViewMode] = useState('basic');
  const [funnyWindowsDisplayMode, setFunnyWindowsDisplayMode] = useState('standard');

  useEffect(() => {
    (async () => {
      try { const r = await window.storage.get('rules');       if (r?.value) setrules(JSON.parse(r.value)); }       catch {}
      try { const dm = await window.storage.get('scoreDisplayMode'); if (dm?.value) setScoreDisplayMode(JSON.parse(dm.value)); } catch {}
      try { const tvm = await window.storage.get('tournamentViewMode'); if (tvm?.value) setTournamentViewMode(JSON.parse(tvm.value)); } catch {}
      try { const fwdm = await window.storage.get('funnyWindowsDisplayMode'); if (fwdm?.value) setFunnyWindowsDisplayMode(JSON.parse(fwdm.value)); } catch {}
      try { const skin = await window.storage.get('selectedSkin'); if (skin?.value) { const s = JSON.parse(skin.value); setSelectedSkin(SKIN_PRESETS[s] ? s : 'classic'); } } catch {
        try { const legacySkin = localStorage.getItem('ks-skin'); if (legacySkin) setSelectedSkin(legacySkin); } catch {}
      }
      try { const t = await window.storage.get('tournaments'); if (t?.value) setTournaments(JSON.parse(t.value)); } catch {}
      try { const a = await window.storage.get('active');      if (a?.value) setActive(JSON.parse(a.value)); }      catch {}
      setLoaded(true);
    })();
  }, []);

  useEffect(() => { if (loaded) window.storage.set('scoreDisplayMode', JSON.stringify(scoreDisplayMode)).catch(() => {}); }, [scoreDisplayMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('tournamentViewMode', JSON.stringify(tournamentViewMode)).catch(() => {}); }, [tournamentViewMode, loaded]);
  useEffect(() => { if (loaded) window.storage.set('funnyWindowsDisplayMode', JSON.stringify(funnyWindowsDisplayMode)).catch(() => {}); }, [funnyWindowsDisplayMode, loaded]);
  useEffect(() => {
    if (!loaded) return;
    window.storage.set('selectedSkin', JSON.stringify(selectedSkin)).catch(() => {});
    try { localStorage.setItem('ks-skin', selectedSkin); } catch {}
  }, [selectedSkin, loaded]);

  useEffect(() => { if (loaded) window.storage.set('rules', JSON.stringify(rules)).catch(() => {}); }, [rules, loaded]);
  useEffect(() => {
    if (!loaded) return;
    window.storage.set('tournaments', JSON.stringify(tournaments)).catch(() => {});
  }, [tournaments, loaded]);
  useEffect(() => {
    if (!loaded) return;
    if (active) window.storage.set('active', JSON.stringify(active)).catch(() => {});
    else window.storage.delete('active').catch(() => {});
  }, [active, loaded]);

  const minWriteOff = useMemo(() => {
    const r = rules.find(x => x.id === 'r14');
    return r ? Number(r.points) || 300 : 300;
  }, [rules]);

  function startTournament(players, targetScore) {
    setActive({
      id: Date.now(),
      date: new Date().toISOString(),
      players, rounds: [],
      currentPlayer: 0, currentRound: 0,
      status: 'active',
      winner: null,
      winPending: null,
      winCandidates: [],
      winRoundComplete: false,
      targetScore, minWriteOff,
    });
    setView('tournament');
  }

  function updateActive(updater) {
    setActive(prev => prev ? (typeof updater === 'function' ? updater(prev) : updater) : prev);
  }

  function finishTournament(winnerIdxOrArray) {
    if (!active) return;

    const validation = computeWinners({
      ...active,
    });

    if (!validation.valid) {
      const msg = 'Turnaj nemôže byť uzatvorený — nájdené nezhody:\n\n' +
        validation.errors.join('\n') +
        '\n\nReason: ' + validation.reason;
      window.alert(msg);
      console.error('[finishTournament] Validation failed:', validation);
      return;
    }

    const declaredWinners = Array.isArray(winnerIdxOrArray) ? [...winnerIdxOrArray] : [winnerIdxOrArray];
    const computedWinners = [...validation.winners];
    declaredWinners.sort();
    computedWinners.sort();
    const match = declaredWinners.length === computedWinners.length
      && declaredWinners.every((v, i) => v === computedWinners[i]);
    if (!match) {
      const msg = 'Diskrepancia v určení víťaza:\n\n' +
        `Hra deklaruje víťazov: ${declaredWinners.map(i => active.players[i]).join(', ')}\n` +
        `Validácia podľa súčtov: ${computedWinners.map(i => active.players[i]).join(', ')}\n\n` +
        'Turnaj sa neuzatvorí — kontaktuj vývojára (alebo skús presný stav v archíve).';
      window.alert(msg);
      console.error('[finishTournament] Winner mismatch:', { declaredWinners, computedWinners, totals: validation.totals });
      return;
    }

    const finished = {
      ...active,
      status: 'finished',
      winner: computedWinners.length === 1 ? computedWinners[0] : computedWinners,
      finishedAt: new Date().toISOString(),
      _validatedTotals: validation.totals,
    };
    setTournaments(prev => [finished, ...prev]);
    setActive(null);
    setViewingTournament(finished);
    setView('archiveDetail');
  }

  function abortTournament() {
    if (!active) return;
    if (!window.confirm('Naozaj chceš zrušiť rozohraný turnaj? Bude uložený do archívu ako nedokončený.')) return;
    setTournaments(prev => [{ ...active, status: 'aborted', finishedAt: new Date().toISOString() }, ...prev]);
    setActive(null);
    setView('menu');
  }

  function updateTournamentInArchive(id, patch) {
    setTournaments(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t));
    if (viewingTournament?.id === id) {
      setViewingTournament(prev => ({ ...prev, ...patch }));
    }
  }

  async function exportToExcel() {
    if (tournaments.length === 0) {
      window.alert('Archív je prázdny — nie je čo exportovať.');
      return;
    }

    function getWinnerNames(t) {
      if (t.winner === null || t.winner === undefined) return [];
      const arr = Array.isArray(t.winner) ? t.winner : [t.winner];
      return arr.map(i => t.players[i]);
    }
    function winnerDisplay(t) {
      const names = getWinnerNames(t);
      if (names.length === 0) return '—';
      if (names.length === 1) return names[0];
      return `Remíza: ${names.join(', ')}`;
    }

    const wb = XLSX.utils.book_new();
    const summaryRows = tournaments.map((t, idx) => ({
      '#': idx + 1,
      'Začiatok': formatDateTime(t.date),
      'Koniec': t.finishedAt ? formatDateTime(t.finishedAt) : '—',
      'Cieľ': t.targetScore || 10000,
      'Počet hráčov': t.players.length,
      'Hráči': t.players.join(', '),
      'Víťaz': winnerDisplay(t),
      'Stav': t.status === 'finished' ? 'Dokončený' : t.status === 'aborted' ? 'Nedokončený' : 'Aktívny'
    }));
    const summaryWs = XLSX.utils.json_to_sheet(summaryRows);
    summaryWs['!cols'] = [{ wch: 5 }, { wch: 20 }, { wch: 20 }, { wch: 8 }, { wch: 12 }, { wch: 30 }, { wch: 20 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Prehľad');

    tournaments.forEach((t, i) => {
      const aoa = [];
      const startedAt = new Date(t.date);
      const finishedAt = t.finishedAt ? new Date(t.finishedAt) : null;
      const datePart = startedAt.toLocaleDateString('sk-SK', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\s/g, '');
      const startTime = startedAt.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' });
      const endTime = finishedAt ? finishedAt.toLocaleTimeString('sk-SK', { hour: '2-digit', minute: '2-digit' }) : '';
      const timePart = endTime ? `${startTime}-${endTime}` : startTime;
      aoa.push([`Hra ${datePart} ${timePart} — ${t.players.join(', ')}`]);
      aoa.push([]);
      aoa.push(['Kolo', ...t.players]);

      const cumulative = new Array(t.players.length).fill(0);
      (t.rounds || []).forEach((round, roundIndex) => {
        const row = [roundIndex + 1];
        for (let p = 0; p < t.players.length; p++) {
          const val = round[p];
          if (typeof val === 'number') {
            cumulative[p] += val;
            row.push(cumulative[p]);
          } else if (val === 'dash') {
            row.push('—');
          } else {
            row.push(null);
          }
        }
        aoa.push(row);
      });

      aoa.push(['MAX', ...cumulative]);
      let winnerLine = '— Nedokončený turnaj';
      const winnerNames = getWinnerNames(t);
      if (winnerNames.length === 1) {
        const idx = Array.isArray(t.winner) ? t.winner[0] : t.winner;
        winnerLine = `🏆 Víťaz: ${winnerNames[0]} (${cumulative[idx]})`;
      } else if (winnerNames.length > 1) {
        const winnerArr = Array.isArray(t.winner) ? t.winner : [t.winner];
        const parts = winnerArr.map(idx => `${t.players[idx]} (${cumulative[idx]})`);
        winnerLine = `🏆 Remíza: ${parts.join(', ')}`;
      }
      aoa.push([winnerLine]);
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      ws['!cols'] = [{ wch: 6 }, ...t.players.map(() => ({ wch: 14 }))];
      XLSX.utils.book_append_sheet(wb, ws, `Hra ${i + 1}`.substring(0, 31));
    });

    const fileName = `kocky-sveta-${new Date().toISOString().slice(0, 10)}.xlsx`;
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'base64' });

    try {
      if (Capacitor.isNativePlatform()) {
        const result = await Filesystem.writeFile({
          path: fileName,
          data: wbout,
          directory: Directory.Documents,
          recursive: true
        });
        const canShare = await Share.canShare();
        if (canShare?.value) {
          await Share.share({
            title: 'Export Kocky sveta',
            text: 'Exportované dáta z aplikácie Kocky sveta',
            url: result.uri,
            dialogTitle: 'Uložiť alebo zdieľať export'
          });
        } else {
          window.alert('Export uložený do Documents: ' + fileName);
        }
        return;
      }
    } catch (e) {
      console.error('Native Android export failed:', e);
      window.alert('Natívny export zlyhal: ' + (e?.message || 'neznáma chyba') + '\n\nSkontroluj, či si po npm install spustil aj npx cap sync android.');
    }

    try {
      XLSX.writeFile(wb, fileName);
    } catch (e) {
      const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 4000);
    }
  }

  async function importFromExcel(file) {
    try {
      const data = await file.arrayBuffer();
      const wb = XLSX.read(data, { type: 'array' });

      const imported = [];
      const skipped = [];

      for (const sheetName of wb.SheetNames) {
        if (/prehľad|prehlad|summary/i.test(sheetName)) continue;

        const ws = wb.Sheets[sheetName];
        const aoa = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
        if (!aoa || aoa.length < 4) {
          skipped.push(`${sheetName}: príliš krátky list`);
          continue;
        }

        const headerRow = aoa[0];
        const headerText = (headerRow && headerRow[0] ? String(headerRow[0]) : '').trim();

        const dateMatch = headerText.match(/(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/);
        const timeMatch = headerText.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/);
        const namesMatch = headerText.match(/[—–-]\s*(.+)$/);

        let columnsRowIdx = -1;
        for (let i = 0; i < Math.min(aoa.length, 6); i++) {
          const row = aoa[i] || [];
          if (row[0] && /^kolo$/i.test(String(row[0]).trim())) {
            columnsRowIdx = i;
            break;
          }
        }
        if (columnsRowIdx < 0) {
          skipped.push(`${sheetName}: nenájdený riadok "Kolo"`);
          continue;
        }

        const columnsRow = aoa[columnsRowIdx];
        const players = [];
        for (let c = 1; c < columnsRow.length; c++) {
          const v = columnsRow[c];
          if (v && String(v).trim()) players.push(String(v).trim());
          else break;
        }
        if (players.length < 2) {
          skipped.push(`${sheetName}: nenájdené mená hráčov`);
          continue;
        }

        const cumulativeRows = [];
        for (let i = columnsRowIdx + 1; i < aoa.length; i++) {
          const row = aoa[i] || [];
          if (!row[0]) break;
          const firstCell = String(row[0]).trim();
          if (/^max$/i.test(firstCell) || /^σ$/i.test(firstCell) || /^suma$/i.test(firstCell)) break;
          if (/víťaz|vitaz|🏆/i.test(firstCell)) break;
          const roundNum = parseInt(firstCell, 10);
          if (!Number.isFinite(roundNum)) break;
          cumulativeRows.push(row.slice(1, 1 + players.length));
        }
        if (cumulativeRows.length === 0) {
          skipped.push(`${sheetName}: žiadne dátové riadky`);
          continue;
        }

        function isDash(v) {
          if (v === null || v === undefined) return false;
          const s = String(v).trim();
          return s === '—' || s === '-' || s === '–' || s === '−';
        }
        function isEmpty(v) {
          if (v === null || v === undefined) return true;
          const s = String(v).trim();
          return s === '';
        }
        function asNumber(v) {
          if (typeof v === 'number') return v;
          if (typeof v === 'string') {
            const s = v.replace(/\s/g, '').replace(',', '.');
            const n = parseFloat(s);
            return Number.isFinite(n) ? n : null;
          }
          return null;
        }

        const rounds = cumulativeRows.map(() => new Array(players.length).fill(null));

        for (let pIdx = 0; pIdx < players.length; pIdx++) {
          let prevCum = 0;
          let prevWasNumber = false;
          for (let rIdx = 0; rIdx < cumulativeRows.length; rIdx++) {
            const cell = cumulativeRows[rIdx][pIdx];
            if (isDash(cell)) {
              rounds[rIdx][pIdx] = 'dash';
            } else if (isEmpty(cell)) {
              rounds[rIdx][pIdx] = null;
            } else {
              const n = asNumber(cell);
              if (n === null) {
                rounds[rIdx][pIdx] = null;
              } else {
                const delta = prevWasNumber ? (n - prevCum) : n;
                rounds[rIdx][pIdx] = delta;
                prevCum = n;
                prevWasNumber = true;
              }
            }
          }
        }

        let winner = null;
        for (let i = 0; i < aoa.length; i++) {
          const row = aoa[i] || [];
          const cell = row[0] ? String(row[0]) : '';
          const m = cell.match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);
          if (m) {
            const winnerName = m[1].trim();
            const idx = players.findIndex(p => p.toLowerCase() === winnerName.toLowerCase());
            if (idx >= 0) winner = idx;
            break;
          }
        }

        if (winner === null) {
          const totals = players.map((_, pIdx) =>
            rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
          );
          const maxIdx = totals.indexOf(Math.max(...totals));
          if (totals[maxIdx] >= 5000) winner = maxIdx;
        }

        let startDate = new Date();
        let endDate = null;
        if (dateMatch) {
          const day = parseInt(dateMatch[1], 10);
          const month = parseInt(dateMatch[2], 10) - 1;
          const year = parseInt(dateMatch[3], 10);
          let startH = 12, startM = 0, endH = null, endM = null;
          if (timeMatch) {
            startH = parseInt(timeMatch[1], 10);
            startM = parseInt(timeMatch[2], 10);
            if (timeMatch[3]) {
              endH = parseInt(timeMatch[3], 10);
              endM = parseInt(timeMatch[4], 10);
            }
          }
          startDate = new Date(year, month, day, startH, startM);
          if (endH !== null) endDate = new Date(year, month, day, endH, endM);
        }

        const totals = players.map((_, pIdx) =>
          rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
        );
        const maxTotal = Math.max(...totals);
        const targetScore = maxTotal >= 7500 ? 10000 : (maxTotal >= 3500 ? 5000 : 10000);

        const tournament = {
          id: Date.now() + Math.floor(Math.random() * 1000) + imported.length,
          date: startDate.toISOString(),
          finishedAt: endDate ? endDate.toISOString() : startDate.toISOString(),
          players,
          rounds,
          currentPlayer: 0,
          currentRound: rounds.length,
          status: winner !== null ? 'finished' : 'aborted',
          winner,
          winPending: null,
          targetScore,
          minWriteOff: 300,
          imported: true,
          importedFrom: sheetName,
        };
        imported.push(tournament);
      }

      if (imported.length === 0) {
        window.alert(`Žiadne turnaje neboli importované.${skipped.length ? '\n\nPreskočené listy:\n' + skipped.join('\n') : ''}`);
        return;
      }

      const nextTournaments = [...imported, ...tournaments];
      setTournaments(nextTournaments);

      let msg = `Úspešne importované: ${imported.length} ${imported.length === 1 ? 'turnaj' : (imported.length < 5 ? 'turnaje' : 'turnajov')}.`;
      if (skipped.length) msg += `\n\nPreskočené:\n${skipped.join('\n')}`;
      window.alert(msg);
    } catch (err) {
      console.error(err);
      window.alert('Chyba pri importe: ' + (err.message || 'neznáma chyba'));
    }
  }

  async function clearAllData() {
    const step1 = window.confirm(
      '⚠️ POZOR: Toto vymaže VŠETKY turnaje z archívu, rozohranú hru aj uložené pravidlá z tohto zariadenia.\n\n' +
      'Odporúčame najprv vytvoriť zálohu cez Export do Excelu.\n\n' +
      'Chceš pokračovať?'
    );
    if (!step1) return;

    const step2 = window.prompt(
      'Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).'
    );
    if (step2 !== 'VYMAZAŤ') {
      window.alert('Vymazanie zrušené.');
      return;
    }

    setTournaments([]);
    setActive(null);
    setViewingTournament(null);
    setrules(DEFAULT_RULES);
    setSelectedSkin('classic');

    await window.storage.delete('tournaments').catch(() => {});
    await window.storage.delete('active').catch(() => {});
    await window.storage.set('rules', JSON.stringify(DEFAULT_RULES)).catch(() => {});
    await window.storage.set('selectedSkin', JSON.stringify('classic')).catch(() => {});

    window.alert('Všetky dáta boli vymazané.');
  }

  return (
    <div className="ks-bg min-h-screen ks-cream ks-body" style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      <style>{skinVarsCss(selectedSkin)}</style>
      <style>{STYLES}</style>
      <style>{`:root { --ks-popup-offset: ${POPUP_CONFIG.VERTICAL_OFFSET}; --ks-popup-opacity: ${POPUP_CONFIG.OPACITY}; }`}</style>

      {view === 'menu' && (
        <MainMenu
          onNew={() => setView('newTournament')}
          onArchive={() => { setArchiveReturnTo('menu'); setView('archive'); }}
          onrules={() => setView('rules')}
          onSettings={() => setView('settings')}
          onResume={active ? () => setView('tournament') : null}
          active={active}
          tournamentCount={tournaments.length}
        />
      )}
      {view === 'settings' && (
        <SettingsMenu
          onBack={() => setView('menu')}
          onRulesEditor={() => setView('rulesEditor')}
          onExport={exportToExcel}
          onImport={importFromExcel}
          onClearAll={clearAllData}
          onArchive={() => { setArchiveReturnTo('settings'); setView('archive'); }}
          tournamentCount={tournaments.length}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          tournamentViewMode={tournamentViewMode}
          onTournamentViewModeChange={setTournamentViewMode}
          onViewModes={() => setView('viewModes')}
          funnyWindowsDisplayMode={funnyWindowsDisplayMode}
          onFunnyWindowsDisplayModeChange={setFunnyWindowsDisplayMode}
        />
      )}
      {view === 'viewModes' && (
        <GameViewModesScreen
          onBack={() => setView('settings')}
          selectedMode={tournamentViewMode}
          onChangeMode={setTournamentViewMode}
          selectedSkin={selectedSkin}
        />
      )}
      {view === 'newTournament' && <NewTournament onBack={() => setView('menu')} onStart={startTournament} />}
      {view === 'tournament' && (active ? (
        <TournamentScreen
          tournament={active} rules={rules}
          onUpdate={updateActive}
          onFinish={finishTournament}
          onAbort={abortTournament}
          onMenu={() => setView('menu')}
          scoreDisplayMode={scoreDisplayMode}
          onToggleScoreMode={() => setScoreDisplayMode(m => m === 'delta' ? 'cumulative' : 'delta')}
          selectedSkin={selectedSkin}
          onSkinChange={setSelectedSkin}
          tournamentViewMode={tournamentViewMode}
          funnyWindowsDisplayMode={funnyWindowsDisplayMode}
        />
      ) : (
        <SafeTournamentFallback title="Turnaj sa nepodarilo načítať" />
      ))}
      {view === 'archive' && (
        <ArchiveScreen tournaments={Array.isArray(tournaments) ? tournaments : []}
          onBack={() => setView(archiveReturnTo)}
          onView={(t) => { setViewingTournament(t); setView('archiveDetail'); }}
          onDelete={(id) => { if (window.confirm('Vymazať tento turnaj z archívu?')) setTournaments(prev => prev.filter(x => x.id !== id)); }}
          readOnly={archiveReturnTo === 'menu'}
        />
      )}
      {view === 'archiveDetail' && (viewingTournament ? (
        <ArchiveDetail
          tournament={viewingTournament}
          onBack={() => setView('archive')}
          onUpdate={(patch) => updateTournamentInArchive(viewingTournament.id, patch)}
          readOnly={archiveReturnTo === 'menu'}
          scoreDisplayMode={scoreDisplayMode}
          onToggleScoreMode={() => setScoreDisplayMode(m => m === 'delta' ? 'cumulative' : 'delta')}
          selectedSkin={selectedSkin}
        />
      ) : (
        <SafeTournamentFallback title="Dáta turnaja sa nepodarilo načítať" />
      ))}
      {view === 'rules' && <RulesView rules={rules} onBack={() => setView('menu')} />}
      {view === 'rulesEditor' && (
        <RulesEditor rules={rules} onSave={setrules} onBack={() => setView('settings')}
          onReset={() => { if (window.confirm('Obnoviť všetky pravidlá na pôvodné nastavenia?')) setrules(DEFAULT_RULES); }}
          selectedSkin={selectedSkin}
        />
      )}
    </div>
  );
}

// ─── Hlavné menu ──────────────────────────────────────────────────────────

function MainMenu({ onNew, onArchive, onrules, onSettings, onResume, active, tournamentCount }) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 pt-[max(14px,env(safe-area-inset-top))] pb-4 text-center ks-fade">
        <div className="ks-gold text-xs ks-mono mb-2">★ ZALOŽENÉ 2026 by Marcel ★</div>
        <h1 className="ks-display ks-gold text-5xl sm:text-6xl font-bold leading-none">
          Kocky<br/><span className="italic font-medium">sveta</span>
        </h1>
        <Ornament />
      </div>

      <div className="flex-1 px-5 pb-8 max-w-md w-full mx-auto space-y-3 -mt-1">
        {onResume && (
          <button onClick={onResume}
            className="ks-card ks-pulse w-full p-4 rounded-sm flex items-center gap-3 ks-press border-l-4"
            style={{ borderLeftColor: '#d4b86a' }}>
            <Play className="ks-gold" size={24} />
            <div className="text-left flex-1">
              <div className="ks-mono ks-gold text-sm">POKRAČOVAŤ V TURNAJI</div>
              <div className="ks-body ks-cream text-sm opacity-80">
                {active.players.length} hráčov · do {(active.targetScore || 10000).toLocaleString('sk-SK')} · kolo {active.currentRound + 1}
              </div>
            </div>
            <ChevronRight className="ks-gold" size={20} />
          </button>
        )}

        <MenuButton icon={Play}        title="Nový turnaj"     subtitle="Začať novú hru až pre šesť hráčov"   onClick={onNew} primary />
        <MenuButton icon={ArchiveIcon} title="Archív turnajov" subtitle={`${tournamentCount || 0} uložených turnajov`} onClick={onArchive} />
        <MenuButton icon={ScrollText}  title="Pravidlá hry"    subtitle="Bodovanie a kombinácie kociek"       onClick={onrules} />
        <MenuButton icon={Settings}    title="Nastavenia"      subtitle="Pravidlá, export, editácia archívu"  onClick={onSettings} />
      </div>

      <div className="text-center ks-muted text-xs pb-6 ks-mono">
        <Ornament />
        KOCKY · SVETA · KOCKY
      </div>
    </div>
  );
}

function MenuButton({ icon: Icon, title, subtitle, onClick, primary, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}
      className={`ks-card w-full p-4 rounded-sm flex items-center gap-4 ks-press text-left ${primary ? 'border-amber-700/40' : ''} ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}>
      <div className={`w-12 h-12 rounded-sm flex items-center justify-center ${primary ? 'ks-gold-bg' : 'border ks-border-sub'}`}>
        <Icon size={22} className={primary ? '' : 'ks-gold'} />
      </div>
      <div className="flex-1">
        <div className="ks-display ks-cream text-xl font-semibold">{title}</div>
        <div className="ks-muted text-sm">{subtitle}</div>
      </div>
      <ChevronRight className="ks-muted" size={20} />
    </button>
  );
}

// ─── Fallback ─────────────────────────────────────────────────────────────

function SafeTournamentFallback({ title = 'Dáta sa nepodarilo načítať' }) {
  return <div className="min-h-screen flex items-center justify-center p-6 ks-cream"><div className="ks-card rounded-sm p-5 text-center max-w-md"><div className="ks-display text-2xl ks-gold mb-2">{title}</div><div className="ks-muted text-sm">Skús sa vrátiť späť alebo otvoriť turnaj znova.</div></div></div>;
}

// ─── Skin selector ────────────────────────────────────────────────────────

function SkinSelector({ selectedSkin, onSkinChange }) {
  const skins = Object.values(SKIN_PRESETS);
  return (
    <div className="ks-card rounded-sm p-4">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div>
          <div className="ks-display ks-cream text-xl font-semibold">Skiny</div>
          <div className="ks-muted text-sm">Vyber si vizuál aplikácie</div>
        </div>
        <div className="ks-mono ks-gold text-xs">ONE-PROMPT SKINNING</div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skins.map((skin) => {
          const active = skin.id === selectedSkin;
          return (
            <button
              key={skin.id}
              onClick={() => onSkinChange(skin.id)}
              className={`ks-press text-left rounded-sm p-3 border-2 transition-all ${active ? 'ks-border-accent shadow-[0_0_0_1px_rgba(212,184,106,0.25)]' : 'ks-border-sub'} ks-card`}
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <div className="ks-display ks-cream text-lg font-semibold leading-tight">{skin.name}</div>
                  <div className="ks-muted text-[11px] mt-0.5 uppercase tracking-[0.2em]">{skin.id}</div>
                </div>
                {active && <div className="ks-gold ks-mono text-[10px]">Aktívny</div>}
              </div>
              <div className="h-12 rounded-sm overflow-hidden border border-amber-900/25 flex">
                <div className="flex-1" style={{ background: skin.bg }} />
                <div className="w-10" style={{ background: 'var(--ks-accent)' }} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Nastavenia ───────────────────────────────────────────────────────────

function SettingsMenu({ onBack, onRulesEditor, onExport, onImport, onClearAll, onArchive, tournamentCount, selectedSkin, onSkinChange, tournamentViewMode, onTournamentViewModeChange, onViewModes, funnyWindowsDisplayMode, onFunnyWindowsDisplayModeChange }) {
  const fileInputRef = useRef(null);

  function handleFilePick(e) {
    const file = e.target.files?.[0];
    if (file && onImport) onImport(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  return (
    <div className="min-h-screen ks-fade pb-8">
      <Header title="Nastavenia" onBack={onBack} />
      <div className="p-4 max-w-2xl mx-auto space-y-3">

        <div className="ks-mono ks-gold text-xs px-1 pt-3">PRAVIDLÁ A HODNOTY HRY</div>
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

        <div className="ks-mono ks-gold text-xs px-1 pt-3">VIZUÁL A SKINY</div>
        <SkinSelector selectedSkin={selectedSkin} onSkinChange={onSkinChange} />

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
                </div>
              </div>
              {selectedMode === opt.id && (
                <Check size={20} className="ks-gold shrink-0" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
