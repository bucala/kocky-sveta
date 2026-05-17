let _ctx = null;
let _enabled = true;

function ctx() {
  if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
  return _ctx;
}

export const sounds = {
  setEnabled(v) { _enabled = v; },
  playClick() {
    if (!_enabled) return;
    try {
      const c = ctx();
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.frequency.value = 880; o.type = 'sine';
      g.gain.setValueAtTime(0.12, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.06);
      o.start(); o.stop(c.currentTime + 0.06);
    } catch {}
  },
  playWin() {
    if (!_enabled) return;
    try {
      const c = ctx();
      [523, 659, 784, 1047].forEach((freq, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value = freq; o.type = 'triangle';
        const t = c.currentTime + i * 0.14;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.18, t + 0.04);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        o.start(t); o.stop(t + 0.35);
      });
    } catch {}
  },
  playStart() {
    if (!_enabled) return;
    try {
      const c = ctx();
      [330, 392, 494].forEach((freq, i) => {
        const o = c.createOscillator(), g = c.createGain();
        o.connect(g); g.connect(c.destination);
        o.frequency.value = freq; o.type = 'square';
        const t = c.currentTime + i * 0.08;
        g.gain.setValueAtTime(0.08, t);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
        o.start(t); o.stop(t + 0.15);
      });
    } catch {}
  },
  playPenalty() {
    if (!_enabled) return;
    try {
      const c = ctx();
      const o = c.createOscillator(), g = c.createGain();
      o.connect(g); g.connect(c.destination);
      o.frequency.value = 180; o.type = 'sawtooth';
      g.gain.setValueAtTime(0.15, c.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.25);
      o.start(); o.stop(c.currentTime + 0.25);
    } catch {}
  },
};
