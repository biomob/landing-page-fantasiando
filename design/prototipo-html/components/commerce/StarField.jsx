import React from 'react';

const PRESET = [
  { x: 6, y: 18, s: 18, c: 'var(--yellow-300)', d: 0 },
  { x: 22, y: 70, s: 11, c: 'var(--pink-300)', d: 0.8 },
  { x: 40, y: 10, s: 13, c: 'var(--violet-300)', d: 1.6 },
  { x: 64, y: 64, s: 16, c: 'var(--sky-300)', d: 0.4 },
  { x: 82, y: 22, s: 12, c: 'var(--yellow-300)', d: 1.2 },
  { x: 92, y: 58, s: 15, c: 'var(--pink-200)', d: 2.0 },
  { x: 52, y: 84, s: 10, c: 'var(--violet-200)', d: 0.6 },
];

/**
 * Decorative scattered stars/sparkles for section & hero backdrops.
 * Purely ornamental (aria-hidden); sits behind content, never over CTAs.
 */
export function StarField({ density = 7, twinkle = true, style = {} }) {
  const stars = PRESET.slice(0, Math.max(0, Math.min(density, PRESET.length)));
  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', ...style }}>
      {stars.map((st, i) => (
        <span key={i} style={{
          position: 'absolute', left: st.x + '%', top: st.y + '%',
          color: st.c, fontSize: st.s, lineHeight: 1,
          animation: twinkle ? `fz-twinkle ${3 + (i % 3)}s var(--ease-soft) ${st.d}s infinite` : 'none',
        }}>★</span>
      ))}
    </div>
  );
}
