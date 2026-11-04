import React from 'react';

/** Star rating display (filled brand stars) with optional review count. */
export function Rating({ value = 5, count, size = 15, style = {} }) {
  const full = Math.round(value);
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'var(--font-body)', ...style }}>
      <span style={{ display: 'inline-flex', gap: 1, color: 'var(--yellow-400)', fontSize: size, lineHeight: 1 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ color: i < full ? 'var(--yellow-400)' : 'var(--line-200)' }}>★</span>
        ))}
      </span>
      {count != null && <span style={{ fontSize: 12.5, color: 'var(--text-muted)', fontWeight: 600 }}>({count})</span>}
    </span>
  );
}
