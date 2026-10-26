// src/online/deviceId.ts
// Stable identifier for this physical device, independent of Firebase auth UID.
// Persisted in localStorage so it survives auth resets and anonymous re-logins.

export function getDeviceId(): string {
  try {
    let id = localStorage.getItem('ks-device-id');
    if (!id) {
      id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      localStorage.setItem('ks-device-id', id);
    }
    return id;
  } catch {
    return 'unknown';
  }
}

// Identifikátor zariadenia pre konkrétnu miestnosť: rôzny v každej miestnosti,
// takže sa z neho nedá zistiť, že dve miestnosti používalo to isté zariadenie.
// V rámci jednej miestnosti je stály (rozpoznanie „ducha“ po novom prihlásení).
export async function getRoomDeviceId(roomId: string): Promise<string> {
  const raw = `${getDeviceId()}:${roomId}`;
  try {
    const bytes = new TextEncoder().encode(raw);
    const hash = await crypto.subtle.digest('SHA-256', bytes);
    return Array.from(new Uint8Array(hash)).slice(0, 8).map(b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    let h = 2166136261;
    for (let i = 0; i < raw.length; i++) { h ^= raw.charCodeAt(i); h = Math.imul(h, 16777619); }
    return (h >>> 0).toString(16);
  }
}
