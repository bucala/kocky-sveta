import React, { useEffect, useRef } from 'react';

const COLORS = ['#d4b86a', '#60a5fa', '#86efac', '#fb923c', '#c084fc', '#f87171', '#ffffff'];
const COUNT = 90;

export function Confetti({ active, skin = 'classic' }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = window.innerWidth;
    let height = window.innerHeight;
    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);
    const themed = skin !== 'classic';
    const palette = skin === 'brawlstars' ? ['#d6b7ff', '#ffdc91', '#f8e8ff']
      : skin === 'brawlblue' ? ['#a1f4ff', '#60a5fa', '#ffffff']
      : skin === 'harrypotter' ? ['#ffdc91', '#ffd6a0', '#ffffff'] : COLORS;
    const shape = skin === 'brawlstars' || skin === 'harrypotter' ? 'star'
      : skin === 'brawlblue' ? 'diamond' : 'dice';

    const particles = Array.from({ length: COUNT }, (_, i) => ({
      x: Math.random() * width,
      y: -20 - Math.random() * 300,
      vx: (Math.random() - 0.5) * 5,
      vy: 1.5 + Math.random() * 4,
      color: palette[i % palette.length],
      size: 5 + Math.random() * 9,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.15,
      isRect: Math.random() > 0.4,
    }));

    let start = null;
    let previous = null;
    const DURATION = 3200;

    function draw(ts) {
      if (start === null) start = ts;
      const step = previous === null ? 1 : Math.min((ts - previous) / (1000 / 60), 2);
      previous = ts;
      const elapsed = ts - start;
      const fade = Math.max(0, 1 - Math.max(0, (elapsed - DURATION * 0.6) / (DURATION * 0.4)));

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx * step;
        p.y += p.vy * step;
        p.vy += 0.08 * step;
        p.angle += p.spin * step;
        ctx.globalAlpha = fade;
        ctx.fillStyle = p.color;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        if (themed && shape === 'star') {
          ctx.beginPath();
          for (let point = 0; point < 10; point++) {
            const angle = point * Math.PI / 5 - Math.PI / 2;
            const radius = p.size * (point % 2 ? 0.24 : 0.55);
            if (point === 0) ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
            else ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          }
          ctx.closePath();
          ctx.fill();
        } else if (themed && shape === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.65);
          ctx.lineTo(p.size * 0.4, 0);
          ctx.lineTo(0, p.size * 0.65);
          ctx.lineTo(-p.size * 0.4, 0);
          ctx.closePath();
          ctx.fill();
        } else if (themed) {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.fillStyle = '#19101f';
          for (const position of [-0.25, 0, 0.25]) {
            ctx.beginPath();
            ctx.arc(p.size * position, p.size * position, Math.max(0.7, p.size * 0.09), 0, Math.PI * 2);
            ctx.fill();
          }
        } else if (p.isRect) {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      if (elapsed < DURATION) {
        rafRef.current = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [active, skin]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 999, width: '100%', height: '100%' }}
    />
  );
}
