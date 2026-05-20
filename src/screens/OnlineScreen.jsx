// src/screens/OnlineScreen.jsx
import React, { useState } from 'react';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { Wifi, WifiOff, AlertCircle, ChevronLeft, Copy, Check, LogOut, Info, User, Users } from 'lucide-react';
import { useOnlineStore } from '../online/onlineStore.ts';
import { createRoom } from '../online/createRoom.ts';
import { joinRoom } from '../online/joinRoom.ts';
export function OnlineStatusIcon() {
  const status = useOnlineStore((s) => s.status);
  if (status === 'connected') return <Wifi size={18} className="text-green-400" />;
  if (status === 'error') return <AlertCircle size={18} className="text-red-400" />;
  return <WifiOff size={18} className="ks-muted" />;
}

function ActivePlayersPanel({ roomState, myUid }) {
  if (!roomState?.players) return null;
  const players = Object.entries(roomState.players);
  if (players.length === 0) return null;

  return (
    <div className="ks-card border ks-border-sub rounded-sm overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b ks-border-sub ks-muted text-xs ks-mono">
        <Users size={13} />
        HRÁČI V MIESTNOSTI ({players.length})
      </div>
      <div className="divide-y ks-border-sub">
        {players.map(([uid, player]) => (
          <div key={uid} className="flex items-center gap-3 px-4 py-3">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${player.online ? 'bg-green-400' : 'bg-zinc-600'}`} />
            <div className="flex-1 min-w-0">
              <div className="ks-cream text-sm font-medium truncate">
                {player.name || 'hráč'}
                {uid === myUid && <span className="ks-muted text-xs ml-1.5">(ty)</span>}
              </div>
              <div className="ks-muted text-xs">{player.online ? 'online' : 'offline'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function OnlineScreen({ onBack, activeSkin, activeRules, defaultRoomName }) {
  const { roomId, uid: myUid, roomState, status, setRoomId, setUid, setRoomState, setStatus, setIsRecorder, reset } = useOnlineStore();

  const [joinCode, setJoinCode] = useState('');
  const [joinErr, setJoinErr] = useState('');
  const [createErr, setCreateErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  const [useName, setUseName] = useState(!!defaultRoomName);
  const [name, setName] = useState(defaultRoomName || '');

  // Wait for Firebase to restore persisted auth before signing in anonymously.
  // auth.currentUser is null immediately after page load — authStateReady() waits
  // for the initial restore so we don't accidentally create a new anonymous user.
  const ensureAuth = async () => {
    const auth = getAuth();
    await auth.authStateReady();
    if (!auth.currentUser) await signInAnonymously(auth);
    return auth.currentUser.uid;
  };

  const playerName = useName && name.trim() ? name.trim() : 'hráč';

  const handleCreate = async () => {
    setBusy(true);
    setCreateErr('');
    try {
      const uid = await ensureAuth();
      const { roomId: rid } = await createRoom({
        hostName: playerName,
        selectedSkin: activeSkin || 'classic',
        rules: activeRules || [],
      });
      setRoomId(rid);
      setUid(uid);
      setIsRecorder(true);   // creator = recorder, writes game state
      setStatus('connected');
    } catch (e) {
      const msg = e?.message || String(e);
      setCreateErr(`Chyba: ${msg}`);
      console.error('[OnlineScreen] createRoom failed:', e);
    } finally {
      setBusy(false);
    }
  };

  const handleJoin = async () => {
    const rid = joinCode.toUpperCase().trim();
    if (!rid) {
      setJoinErr('Zadaj kód miestnosti');
      return;
    }

    setBusy(true);
    setJoinErr('');
    try {
      const uid = await ensureAuth();
      await joinRoom({ roomId: rid, playerName });
      setRoomId(rid);
      setUid(uid);
      setIsRecorder(false);  // joiner = observer, reads only
      setStatus('connected');
    } catch (e) {
      setJoinErr(e.message || 'Miestnosť neexistuje');
    } finally {
      setBusy(false);
    }
  };

  const handleBack = () => {
    onBack();
  };

  const handleDisconnect = () => {
    const ok = window.confirm('Naozaj sa chceš odhlásiť? Máš zapísaný kód miestnosti?');
    if (!ok) return;
    reset();
    onBack();
  };

  const copyCode = () => {
    navigator.clipboard.writeText(roomId || '').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen ks-bg ks-cream ks-body flex flex-col">
      <div className="flex items-center gap-3 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-4 border-b ks-border-sub">
        <button onClick={handleBack} className="ks-press p-2 rounded-sm ks-border-sub border">
          <ChevronLeft size={20} className="ks-gold" />
        </button>
        <h2 className="ks-display ks-gold text-2xl font-semibold flex-1">Online miestnosť</h2>
        <OnlineStatusIcon />
      </div>

      <div className="flex-1 px-4 py-5 max-w-md w-full mx-auto flex flex-col gap-4 overflow-y-auto">
        {!roomId && (
          <>
            <div className="ks-card border ks-border-sub rounded-sm overflow-hidden">
              <div className="px-4 py-4 space-y-4">
                <div>
                  <label className="ks-muted text-xs ks-mono block mb-1">KÓD MIESTNOSTI</label>
                  <input
                    value={joinCode}
                    onChange={(e) => {
                      setJoinCode(e.target.value.toUpperCase().slice(0, 8));
                      setJoinErr('');
                      setCreateErr('');
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
                    placeholder="Zadaj existujúci kód"
                    className="w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none ks-mono tracking-widest"
                  />
                </div>

                <div>
                  <button onClick={() => setUseName((v) => !v)} className="flex items-center gap-2 ks-press">
                    <div
                      className={`w-4 h-4 rounded-sm border flex items-center justify-center transition-colors ${
                        useName ? 'ks-gold-bg border-transparent' : 'ks-border-sub border'
                      }`}
                    >
                      {useName && <Check size={11} className="text-black" />}
                    </div>
                    <User size={13} className="ks-muted" />
                    <span className="ks-muted text-xs">Chcem zadať meno zariadenia</span>
                  </button>
                  <p className="ks-muted text-xs mt-1 ml-6 leading-relaxed opacity-70">
                    Meno sa zobrazí druhému zariadeniu. Je to len voliteľné označenie.
                  </p>

                  {useName && (
                    <div className="mt-3 ml-6">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value.slice(0, 20))}
                        placeholder="napr. Obývačka, Telefón..."
                        autoFocus
                        className="w-full ks-card px-3 py-2.5 rounded-sm ks-cream bg-transparent border ks-border-sub outline-none text-sm"
                      />
                    </div>
                  )}
                </div>

                {joinErr && <p className="text-red-400 text-xs">{joinErr}</p>}

                <button
                  onClick={handleJoin}
                  disabled={busy || !joinCode.trim()}
                  className="ks-gold-bg w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm"
                >
                  {busy ? 'Pripájam...' : 'PRIPOJIŤ SA'}
                </button>
              </div>
            </div>

            <div className="ks-card border ks-border-sub rounded-sm overflow-hidden">
              <div className="px-4 py-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Info size={16} className="ks-muted" />
                  <h3 className="ks-cream font-semibold">Vytvoriť novú miestnosť</h3>
                </div>
                <p className="ks-muted text-xs leading-relaxed">
                  Toto vytvorí nový kód miestnosti pre synchronizáciu aktuálnej hry, archívu a skinu.
                </p>
                {createErr && <p className="text-red-400 text-xs">{createErr}</p>}
                <button
                  onClick={handleCreate}
                  disabled={busy}
                  className="border ks-border-sub w-full py-2.5 rounded-sm ks-mono font-bold ks-press disabled:opacity-50 text-sm ks-gold"
                >
                  {busy ? 'Vytváram...' : 'VYTVORIŤ MIESTNOSŤ'}
                </button>
              </div>
            </div>
          </>
        )}

        {roomId && (
          <>
            <div className="ks-card border ks-border-sub rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b ks-border-sub">
                <div className="flex items-center gap-2 ks-muted text-xs ks-mono">
                  <Wifi size={13} />
                  AKTÍVNA MIESTNOSŤ
                </div>
                <div className={`flex items-center gap-1.5 text-xs ks-mono ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status === 'error' ? 'bg-red-400' : 'bg-green-400'}`} />
                  {status === 'error' ? 'CHYBA' : 'ONLINE'}
                </div>
              </div>

              <div className="px-4 py-6 text-center">
                <div className="ks-gold ks-mono text-5xl font-bold tracking-widest mb-2">{roomId}</div>
                <div className="ks-muted text-xs">Zdieľaj tento kód s druhým zariadením</div>
                {useName && name.trim() && (
                  <div className="mt-3 flex items-center justify-center gap-1.5 ks-muted text-xs">
                    <User size={12} />
                    <span>Toto zariadenie: <span className="ks-cream font-semibold">{name.trim()}</span></span>
                  </div>
                )}
              </div>

              <div className="border-t ks-border-sub">
                <button
                  onClick={copyCode}
                  className="w-full flex items-center justify-center gap-2 py-3 ks-press ks-muted text-sm border-b ks-border-sub"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copied ? 'Skopírované!' : 'Kopírovať kód'}
                </button>
                <button
                  onClick={handleDisconnect}
                  className="w-full flex items-center justify-center gap-2 py-2.5 ks-press ks-muted text-xs"
                >
                  <LogOut size={14} />
                  Odhlásiť sa
                </button>
              </div>
            </div>

            <ActivePlayersPanel roomState={roomState} myUid={myUid} />
          </>
        )}

        <div className="mt-auto ks-card border ks-border-sub rounded-sm px-4 py-4 flex gap-3">
          <Info size={18} className="ks-muted flex-shrink-0 mt-0.5" />
          <p className="ks-muted text-sm leading-relaxed">
            Synchronizuje sa aktuálna hra, archív hier a aktívny skin v reálnom čase cez Firebase.
            Každé zariadenie hrá lokálne.
          </p>
        </div>
      </div>
    </div>
  );
}
