import React, { useState, useEffect, useMemo } from 'react';
import {
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

// ─── Importy z extrahovaných modulov ──────────────────────────────────────
import { SKIN_PRESETS, skinVarsCss } from './constants/skins.js';
import { DEFAULT_RULES, RULE_CATEGORIES, SETTING_RULE_IDS } from './constants/rules.js';
import { QUICK_VALUES, PENALTY_VALUE, TARGET_OPTIONS, FUNNY_MESSAGES, POPUP_CONFIG } from './constants/game.js';
import { STYLES } from './styles/appStyles.js';
import { formatDateTime, formatDuration, isStrictMode, computeTotals, computeWinners } from './lib/gameEngine.js';
import { DiceIcon, DiceRow } from './atoms/DiceRow.jsx';
import { GoldButton, Ornament } from './atoms/GoldButton.jsx';
import { Header } from './atoms/Header.jsx';
import { Toast } from './atoms/Toast.jsx';
import { StatusBanner } from './atoms/StatusBanner.jsx';
import { StrikethroughCrown } from './atoms/StrikethroughCrown.jsx';
import { FunnyOverlay, SimplifiedResult } from './atoms/FunnyOverlay.jsx';
import { SafeTournamentFallback } from './atoms/SafeFallback.jsx';
import { SkinSelector } from './atoms/SkinSelector.jsx';

// ─── Lokálne konštanty (iba čo App.jsx reálne potrebuje priamo) ───────────
const DICE_ICONS = { 1: null, 2: null, 3: null, 4: null, 5: null, 6: null }; // aliasované v DiceRow, nepoužíva sa priamo

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
      try {
        const skin = await window.storage.get('selectedSkin');
        if (skin?.value) {
          const s = JSON.parse(skin.value);
          setSelectedSkin(SKIN_PRESETS[s] ? s : 'classic');
        }
      } catch {
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

  // ─── Herné akcie ────────────────────────────────────────────────────────

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

    const validation = computeWinners({ ...active });

    if (!validation.valid) {
      const msg = 'Turnaj nemôže byť uzatvorený — nájdené nezhody:\n\n' +
        validation.errors.join('\n') + '\n\nReason: ' + validation.reason;
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
        'Turnaj sa neuzatvorí — kontaktuj vývojára.';
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

  // ─── Excel export / import ───────────────────────────────────────────────

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
          path: fileName, data: wbout,
          directory: Directory.Documents, recursive: true
        });
        const canShare = await Share.canShare();
        if (canShare?.value) {
          await Share.share({
            title: 'Export Kocky sveta',
            text: 'Exportované dáta z aplikácie Kocky sveta',
            url: result.uri, dialogTitle: 'Uložiť alebo zdieľať export'
          });
        } else {
          window.alert('Export uložený do Documents: ' + fileName);
        }
        return;
      }
    } catch (e) {
      console.error('Native Android export failed:', e);
      window.alert('Natívny export zlyhal: ' + (e?.message || 'neznáma chyba'));
    }

    try {
      XLSX.writeFile(wb, fileName);
    } catch {
      const blob = new Blob([XLSX.write(wb, { bookType: 'xlsx', type: 'array' })], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = fileName;
      document.body.appendChild(a); a.click(); a.remove();
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
        if (!aoa || aoa.length < 4) { skipped.push(`${sheetName}: príliš krátky list`); continue; }

        const headerRow = aoa[0];
        const headerText = (headerRow && headerRow[0] ? String(headerRow[0]) : '').trim();
        const dateMatch  = headerText.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
        const timeMatch  = headerText.match(/(\d{1,2}):(\d{2})(?:\s*[-–—]\s*(\d{1,2}):(\d{2}))?/);

        let columnsRowIdx = -1;
        for (let i = 0; i < Math.min(aoa.length, 6); i++) {
          if (aoa[i]?.[0] && /^kolo$/i.test(String(aoa[i][0]).trim())) { columnsRowIdx = i; break; }
        }
        if (columnsRowIdx < 0) { skipped.push(`${sheetName}: nenájdený riadok "Kolo"`); continue; }

        const players = [];
        for (let c = 1; c < aoa[columnsRowIdx].length; c++) {
          const v = aoa[columnsRowIdx][c];
          if (v && String(v).trim()) players.push(String(v).trim()); else break;
        }
        if (players.length < 2) { skipped.push(`${sheetName}: nenájdené mená hráčov`); continue; }

        const cumulativeRows = [];
        for (let i = columnsRowIdx + 1; i < aoa.length; i++) {
          const row = aoa[i] || [];
          if (!row[0]) break;
          const firstCell = String(row[0]).trim();
          if (/^max$/i.test(firstCell) || /víťaz|vitaz|🏆/i.test(firstCell)) break;
          if (!Number.isFinite(parseInt(firstCell, 10))) break;
          cumulativeRows.push(row.slice(1, 1 + players.length));
        }
        if (cumulativeRows.length === 0) { skipped.push(`${sheetName}: žiadne dátové riadky`); continue; }

        const isDash  = v => { const s = String(v ?? '').trim(); return ['—','-','–','−'].includes(s); };
        const isEmpty = v => v == null || String(v).trim() === '';
        const asNum   = v => { const n = parseFloat(String(v).replace(/\s/g,'').replace(',','.')); return Number.isFinite(n) ? n : null; };

        const rounds = cumulativeRows.map(() => new Array(players.length).fill(null));
        for (let pIdx = 0; pIdx < players.length; pIdx++) {
          let prevCum = 0; let prevWasNumber = false;
          for (let rIdx = 0; rIdx < cumulativeRows.length; rIdx++) {
            const cell = cumulativeRows[rIdx][pIdx];
            if (isDash(cell))       rounds[rIdx][pIdx] = 'dash';
            else if (isEmpty(cell)) rounds[rIdx][pIdx] = null;
            else {
              const n = asNum(cell);
              if (n === null) { rounds[rIdx][pIdx] = null; }
              else { rounds[rIdx][pIdx] = prevWasNumber ? n - prevCum : n; prevCum = n; prevWasNumber = true; }
            }
          }
        }

        let winner = null;
        for (const row of aoa) {
          const cell = row?.[0] ? String(row[0]) : '';
          const m = cell.match(/(?:🏆|víťaz|vitaz)[^:]*:\s*([^\s(]+)/i);
          if (m) { const idx = players.findIndex(p => p.toLowerCase() === m[1].trim().toLowerCase()); if (idx >= 0) { winner = idx; break; } }
        }

        const totals = players.map((_, pIdx) =>
          rounds.reduce((s, r) => s + (typeof r[pIdx] === 'number' ? r[pIdx] : 0), 0)
        );
        if (winner === null) { const maxIdx = totals.indexOf(Math.max(...totals)); if (totals[maxIdx] >= 5000) winner = maxIdx; }

        let startDate = new Date(); let endDate = null;
        if (dateMatch) {
          const [, d, mo, y] = dateMatch.map(Number);
          let sh = 12, sm = 0, eh = null, em = null;
          if (timeMatch) { sh = +timeMatch[1]; sm = +timeMatch[2]; if (timeMatch[3]) { eh = +timeMatch[3]; em = +timeMatch[4]; } }
          startDate = new Date(y, mo - 1, d, sh, sm);
          if (eh !== null) endDate = new Date(y, mo - 1, d, eh, em);
        }

        const maxTotal = Math.max(...totals);
        const targetScore = maxTotal >= 7500 ? 10000 : 5000;

        imported.push({
          id: Date.now() + Math.floor(Math.random() * 1000) + imported.length,
          date: startDate.toISOString(),
          finishedAt: (endDate ?? startDate).toISOString(),
          players, rounds,
          currentPlayer: 0, currentRound: rounds.length,
          status: winner !== null ? 'finished' : 'aborted',
          winner, winPending: null, targetScore, minWriteOff: 300,
          imported: true, importedFrom: sheetName,
        });
      }

      if (imported.length === 0) {
        window.alert(`Žiadne turnaje neboli importované.${skipped.length ? '\n\nPreskočené listy:\n' + skipped.join('\n') : ''}`);
        return;
      }
      setTournaments(prev => [...imported, ...prev]);
      let msg = `Úspešne importované: ${imported.length} ${imported.length === 1 ? 'turnaj' : imported.length < 5 ? 'turnaje' : 'turnajov'}.`;
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
      'Odporúčame najprv vytvoriť zálohu cez Export do Excelu.\n\nChceš pokračovať?'
    );
    if (!step1) return;
    const step2 = window.prompt('Pre potvrdenie napíš slovo VYMAZAŤ (veľkými písmenami).');
    if (step2 !== 'VYMAZAŤ') { window.alert('Vymazanie zrušené.'); return; }

    setTournaments([]); setActive(null); setViewingTournament(null);
    setrules(DEFAULT_RULES); setSelectedSkin('classic');
    await window.storage.delete('tournaments').catch(() => {});
    await window.storage.delete('active').catch(() => {});
    await window.storage.set('rules', JSON.stringify(DEFAULT_RULES)).catch(() => {});
    await window.storage.set('selectedSkin', JSON.stringify('classic')).catch(() => {});
    window.alert('Všetky dáta boli vymazané.');
  }

  // ─── Render ──────────────────────────────────────────────────────────────

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
        <ArchiveScreen
          tournaments={Array.isArray(tournaments) ? tournaments : []}
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
        <RulesEditor
          rules={rules}
          onBack={() => setView('settings')}
          onChange={setrules}
        />
      )}
    </div>
  );
}

// ─── Screen-level komponenty zostávajú tu (dočasne) ───────────────────────
// TODO next PR: presunúť do src/screens/*
// MainMenu, NewTournament, TournamentScreen, ArchiveScreen, ArchiveDetail,
// RulesView, RulesEditor, SettingsMenu, GameViewModesScreen
// Tieto komponenty sú dole v pôvodnom App.jsx a budú extrahované v Krok 4.
