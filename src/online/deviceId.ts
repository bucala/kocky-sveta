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
