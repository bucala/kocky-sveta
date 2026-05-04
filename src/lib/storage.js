// ─── storage.js — persistence layer ─────────────────────────────────────
// All local storage reads/writes go through here.
// No game logic. No rendering. Just data in / data out.
//
// Uses window.storage (polyfill in main.jsx that wraps localStorage).
// On Android, Capacitor WebView's localStorage is equivalent; if
// @capacitor/preferences is added later, swap the implementation here only.

const KEYS = {
  TOURNAMENTS:              'tournaments',
  ACTIVE:                   'active',
  RULES:                    'rules',
  SCORE_DISPLAY_MODE:       'scoreDisplayMode',
  TOURNAMENT_VIEW_MODE:     'tournamentViewMode',
  FUNNY_WINDOWS_MODE:       'funnyWindowsDisplayMode',
  SELECTED_SKIN:            'selectedSkin',
};

// ── Low-level helpers ────────────────────────────────────────────────────

async function read(key) {
  try {
    const r = await window.storage.get(key);
    if (r?.value == null) return null;
    return JSON.parse(r.value);
  } catch {
    return null;
  }
}

async function write(key, value) {
  try {
    await window.storage.set(key, JSON.stringify(value));
  } catch {}
}

async function remove(key) {
  try {
    await window.storage.delete(key);
  } catch {}
}

// ── Public API ───────────────────────────────────────────────────────────

export async function loadAllAppState() {
  const [
    rules,
    scoreDisplayMode,
    tournamentViewMode,
    funnyWindowsDisplayMode,
    rawSkin,
    tournaments,
    active,
  ] = await Promise.all([
    read(KEYS.RULES),
    read(KEYS.SCORE_DISPLAY_MODE),
    read(KEYS.TOURNAMENT_VIEW_MODE),
    read(KEYS.FUNNY_WINDOWS_MODE),
    read(KEYS.SELECTED_SKIN),
    read(KEYS.TOURNAMENTS),
    read(KEYS.ACTIVE),
  ]);

  // Legacy skin fallback (was stored directly in localStorage before storage polyfill)
  let selectedSkin = rawSkin;
  if (!selectedSkin) {
    try { selectedSkin = localStorage.getItem('ks-skin') || null; } catch {}
  }

  return {
    rules:                   rules                   ?? null,
    scoreDisplayMode:        scoreDisplayMode        ?? 'delta',
    tournamentViewMode:      tournamentViewMode      ?? 'basic',
    funnyWindowsDisplayMode: funnyWindowsDisplayMode ?? 'standard',
    selectedSkin:            selectedSkin            ?? 'classic',
    tournaments:             Array.isArray(tournaments) ? tournaments : [],
    active:                  active                  ?? null,
  };
}

export async function saveTournaments(value) {
  await write(KEYS.TOURNAMENTS, value);
}

export async function saveActive(value) {
  if (value === null || value === undefined) {
    await remove(KEYS.ACTIVE);
  } else {
    await write(KEYS.ACTIVE, value);
  }
}

export async function saveRules(value) {
  await write(KEYS.RULES, value);
}

export async function saveScoreDisplayMode(value) {
  await write(KEYS.SCORE_DISPLAY_MODE, value);
}

export async function saveTournamentViewMode(value) {
  await write(KEYS.TOURNAMENT_VIEW_MODE, value);
}

export async function saveFunnyWindowsMode(value) {
  await write(KEYS.FUNNY_WINDOWS_MODE, value);
}

export async function saveSelectedSkin(value) {
  await write(KEYS.SELECTED_SKIN, value);
  // Keep legacy localStorage entry for compatibility with older builds on device
  try { localStorage.setItem('ks-skin', value); } catch {}
}

export async function clearAllData() {
  await Promise.all([
    remove(KEYS.TOURNAMENTS),
    remove(KEYS.ACTIVE),
    remove(KEYS.RULES),
    remove(KEYS.SELECTED_SKIN),
  ]);
}

export const STORAGE_KEYS = KEYS;
