import React, { useState, useRef } from 'react';
import {
  ChevronLeft, Camera, Upload, Loader2, AlertCircle,
  Check, Pencil, Trash2, Plus, RefreshCw
} from 'lucide-react';

// ─── helpers ─────────────────────────────────────────────────────────────────

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function callScanAPI(base64, mimeType) {
  const res = await fetch('/api/scan', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: base64, mimeType }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
  return json;
}

function buildTournament(scanResult) {
  const { players, rounds, targetScore = 10000 } = scanResult;
  const n = players.length;
  const now = Date.now();

  // Normalize rounds — ensure each round has exactly n values
  const normalizedRounds = rounds.map(row => {
    const out = [];
    for (let i = 0; i < n; i++) {
      const v = row[i];
      if (v === null || v === undefined) out.push(null);
      else if (typeof v === 'number' && Number.isFinite(v)) out.push(v);
      else out.push(null);
    }
    return out;
  });

  // Compute totals
  const totals = players.map((_, pi) =>
    normalizedRounds.reduce((sum, r) => sum + (typeof r[pi] === 'number' ? r[pi] : 0), 0)
  );
  const maxTotal = Math.max(...totals);
  const winnerIdx = totals.indexOf(maxTotal);

  return {
    id: `scan_${now}`,
    players,
    rounds: normalizedRounds,
    targetScore,
    currentPlayer: 0,
    currentRound: normalizedRounds.length,
    winners: maxTotal >= targetScore ? [winnerIdx] : [],
    finishedAt: now,
    startedAt: now,
    _source: 'scan',
    _notes: scanResult.notes || '',
  };
}

// ─── sub-components ──────────────────────────────────────────────────────────

function RoundEditor({ players, rounds, onChange }) {
  const addRow = () => onChange([...rounds, new Array(players.length).fill(null)]);
  const removeRow = (ri) => onChange(rounds.filter((_, i) => i !== ri));
  const setCell = (ri, pi, val) => {
    const next = rounds.map((r, i) => i === ri ? r.map((v, j) => j === pi ? val : v) : r);
    onChange(next);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="ks-mono ks-muted px-2 py-1 text-left w-10">#</th>
            {players.map((p, i) => (
              <th key={i} className="ks-mono ks-gold px-2 py-1 text-center min-w-[72px]">{p}</th>
            ))}
            <th className="w-8" />
          </tr>
        </thead>
        <tbody>
          {rounds.map((row, ri) => (
            <tr key={ri} className="border-t ks-border-sub">
              <td className="ks-muted px-2 py-1 text-center">{ri + 1}</td>
              {row.map((val, pi) => (
                <td key={pi} className="px-1 py-0.5">
                  <input
                    type="number"
                    value={val === null ? '' : val}
                    onChange={e => {
                      const n = e.target.value === '' ? null : parseInt(e.target.value, 10);
                      setCell(ri, pi, isNaN(n) ? null : n);
                    }}
                    className="w-full bg-transparent border ks-border-sub rounded-sm px-1 py-0.5 ks-cream text-center outline-none focus:border-amber-600 text-xs"
                    placeholder="—"
                  />
                </td>
              ))}
              <td className="px-1 py-0.5">
                <button onClick={() => removeRow(ri)} className="ks-press p-0.5 ks-muted hover:text-red-400">
                  <Trash2 size={11} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="ks-press mt-2 flex items-center gap-1 ks-muted text-xs px-2 py-1 border ks-border-sub rounded-sm"
      >
        <Plus size={11} /> Pridaj kolo
      </button>
    </div>
  );
}

function PlayerNameEditor({ players, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {players.map((p, i) => (
        <div key={i} className="flex items-center gap-1">
          <input
            value={p}
            onChange={e => onChange(players.map((v, j) => j === i ? e.target.value : v))}
            className="bg-transparent border ks-border-sub rounded-sm px-2 py-1 ks-cream text-sm outline-none focus:border-amber-600 w-28"
          />
        </div>
      ))}
    </div>
  );
}

// ─── main screen ─────────────────────────────────────────────────────────────

export function ScanImportScreen({ onBack, onImport }) {
  const fileRef = useRef(null);
  const cameraRef = useRef(null);

  const [phase, setPhase] = useState('pick');   // pick | scanning | preview | done
  const [preview, setPreview] = useState(null); // objectURL for display
  const [error, setError] = useState('');
  const [scanResult, setScanResult] = useState(null);
  const [players, setPlayers] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [targetScore, setTargetScore] = useState(10000);

  const processFile = async (file) => {
    if (!file) return;
    setError('');
    setPreview(URL.createObjectURL(file));
    setPhase('scanning');

    try {
      const base64 = await fileToBase64(file);
      const mimeType = file.type || 'image/jpeg';
      const result = await callScanAPI(base64, mimeType);
      setScanResult(result);
      setPlayers(result.players || []);
      setRounds(result.rounds || []);
      setTargetScore(result.targetScore || 10000);
      setPhase('preview');
    } catch (e) {
      setError(e.message || 'Neznáma chyba pri skenovaní');
      setPhase('pick');
    }
  };

  const handleImport = () => {
    const tournament = buildTournament({ players, rounds, targetScore, notes: scanResult?.notes });
    onImport(tournament);
    setPhase('done');
  };

  const reset = () => {
    setPhase('pick');
    setPreview(null);
    setError('');
    setScanResult(null);
    setPlayers([]);
    setRounds([]);
  };

  // ── pick ──
  if (phase === 'pick' || phase === 'error') {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-3 border-b ks-border-sub">
          <button onClick={onBack} className="ks-press p-1"><ChevronLeft size={22} className="ks-gold" /></button>
          <h1 className="ks-display ks-gold text-2xl font-bold flex-1">Import z fotky</h1>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          <div className="text-center space-y-2">
            <Camera size={48} className="ks-gold mx-auto" />
            <div className="ks-display ks-cream text-xl font-bold">Odfot tabuľku</div>
            <div className="ks-muted text-sm leading-relaxed max-w-xs">
              Odfotografuj ručne písanú skóre-tabuľku. AI ju prečíta a importuje priamo do archívu.
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 bg-red-950/50 border border-red-800/60 rounded-sm px-4 py-3 max-w-sm text-sm text-red-300">
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex flex-col gap-3 w-full max-w-xs">
            {/* Camera — mobile */}
            <input ref={cameraRef} type="file" accept="image/*" capture="environment"
              className="hidden" onChange={e => processFile(e.target.files?.[0])} />
            <button
              onClick={() => cameraRef.current?.click()}
              className="ks-gold-bg w-full py-3.5 rounded-sm ks-mono font-bold text-black ks-press flex items-center justify-center gap-2 text-sm"
            >
              <Camera size={18} /> ODFOTIŤ TABUĽKU
            </button>

            {/* File picker */}
            <input ref={fileRef} type="file" accept="image/*"
              className="hidden" onChange={e => processFile(e.target.files?.[0])} />
            <button
              onClick={() => fileRef.current?.click()}
              className="border ks-border-sub w-full py-3 rounded-sm ks-mono font-bold ks-gold ks-press flex items-center justify-center gap-2 text-sm"
            >
              <Upload size={16} /> VYBRAŤ ZO ZARIADENIA
            </button>
          </div>

          <div className="ks-muted text-xs text-center max-w-xs leading-relaxed">
            Fotka sa spracuje cez AI (Anthropic Claude Vision).
            Pred importom budeš mať možnosť opraviť chyby.
          </div>
        </div>
      </div>
    );
  }

  // ── scanning ──
  if (phase === 'scanning') {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-3 border-b ks-border-sub">
          <button onClick={reset} className="ks-press p-1"><ChevronLeft size={22} className="ks-gold" /></button>
          <h1 className="ks-display ks-gold text-2xl font-bold flex-1">Skenujem…</h1>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          {preview && (
            <img src={preview} alt="náhľad" className="max-h-64 max-w-full rounded-sm object-contain border ks-border-sub opacity-60" />
          )}
          <div className="flex flex-col items-center gap-3">
            <Loader2 size={36} className="ks-gold animate-spin" />
            <div className="ks-display ks-cream text-lg">AI číta tabuľku…</div>
            <div className="ks-muted text-sm">Zvyčajne 5–15 sekúnd</div>
          </div>
        </div>
      </div>
    );
  }

  // ── preview ──
  if (phase === 'preview') {
    const totals = players.map((_, pi) =>
      rounds.reduce((s, r) => s + (typeof r[pi] === 'number' ? r[pi] : 0), 0)
    );

    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-3 border-b ks-border-sub">
          <button onClick={reset} className="ks-press p-1"><ChevronLeft size={22} className="ks-gold" /></button>
          <h1 className="ks-display ks-gold text-2xl font-bold flex-1">Skontroluj výsledok</h1>
          <button onClick={reset} className="ks-press p-1.5 border ks-border-sub rounded-sm">
            <RefreshCw size={14} className="ks-muted" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 max-w-2xl mx-auto w-full">
          {/* Photo thumb */}
          {preview && (
            <img src={preview} alt="sken" className="max-h-40 max-w-full rounded-sm object-contain border ks-border-sub mx-auto" />
          )}

          {/* Notes from Claude */}
          {scanResult?.notes && (
            <div className="flex items-start gap-2 bg-amber-950/30 border border-amber-800/40 rounded-sm px-3 py-2 text-xs ks-muted">
              <AlertCircle size={13} className="ks-gold shrink-0 mt-0.5" />
              <span>{scanResult.notes}</span>
            </div>
          )}

          {/* Player names */}
          <div className="ks-card rounded-sm p-3 space-y-2">
            <div className="flex items-center gap-2">
              <Pencil size={13} className="ks-muted" />
              <span className="ks-mono ks-muted text-xs">HRÁČI — uprav ak treba</span>
            </div>
            <PlayerNameEditor players={players} onChange={setPlayers} />
          </div>

          {/* Target score */}
          <div className="ks-card rounded-sm p-3 flex items-center gap-3">
            <span className="ks-mono ks-muted text-xs flex-1">CIEĽOVÉ SKÓRE</span>
            <input
              type="number"
              value={targetScore}
              onChange={e => setTargetScore(parseInt(e.target.value, 10) || 10000)}
              className="bg-transparent border ks-border-sub rounded-sm px-2 py-1 ks-gold ks-mono text-sm outline-none focus:border-amber-600 w-24 text-right"
            />
          </div>

          {/* Totals preview */}
          <div className="ks-card rounded-sm p-3">
            <div className="ks-mono ks-muted text-xs mb-2">VÝSLEDNÉ SKÓRE</div>
            <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${players.length}, 1fr)` }}>
              {players.map((p, i) => (
                <div key={i} className="text-center">
                  <div className="ks-muted text-xs truncate">{p}</div>
                  <div className={`ks-display text-xl font-bold ${totals[i] >= targetScore ? 'ks-gold' : 'ks-cream'}`}>
                    {totals[i].toLocaleString('sk-SK')}
                  </div>
                </div>
              ))}
            </div>
            <div className="ks-muted text-xs mt-2 text-center">{rounds.length} kôl · cieľ {targetScore.toLocaleString('sk-SK')}</div>
          </div>

          {/* Rounds editor */}
          <div className="ks-card rounded-sm p-3">
            <div className="ks-mono ks-muted text-xs mb-3">KOLÁ — oprav chybné hodnoty</div>
            <RoundEditor players={players} rounds={rounds} onChange={setRounds} />
          </div>

          {/* Import button */}
          <button
            onClick={handleImport}
            disabled={players.length < 2 || rounds.length === 0}
            className="ks-gold-bg w-full py-3.5 rounded-sm ks-mono font-bold text-black ks-press flex items-center justify-center gap-2 disabled:opacity-40"
          >
            <Check size={18} /> IMPORTOVAŤ DO ARCHÍVU
          </button>
        </div>
      </div>
    );
  }

  // ── done ──
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <div className="text-center space-y-3">
        <div className="w-16 h-16 rounded-full ks-gold-bg flex items-center justify-center mx-auto">
          <Check size={32} className="text-black" />
        </div>
        <div className="ks-display ks-gold text-2xl font-bold">Importované!</div>
        <div className="ks-muted text-sm">Hra bola pridaná do archívu.</div>
      </div>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <button onClick={reset} className="border ks-border-sub w-full py-3 rounded-sm ks-mono ks-gold ks-press text-sm">
          SKENOVAŤ ĎALŠIU
        </button>
        <button onClick={onBack} className="ks-muted text-sm text-center ks-press py-2">
          Späť do archívu
        </button>
      </div>
    </div>
  );
}
