import React from 'react';

/**
 * Small status / promo label. Tones map to the support palette.
 * Use `dot` for a leading status dot, or `star` for a brand star.
 */
export function Badge({ children, tone = 'violet', dot = false, star = false, style = {}, ...rest }) {
  const tones = {
    violet: { bg: 'var(--violet-100)', fg: 'var(--violet-700)', d: 'var(--violet-500)' },
    pink: { bg: 'var(--pink-100)', fg: 'var(--pink-600)', d: 'var(--pink-400)' },
    yellow: { bg: 'var(--yellow-100)', fg: 'var(--yellow-500)', d: 'var(--yellow-400)' },
    sky: { bg: 'var(--sky-100)', fg: 'var(--sky-500)', d: 'var(--sky-400)' },
    coral: { bg: 'var(--coral-100)', fg: 'var(--coral-500)', d: 'var(--coral-400)' },
    success: { bg: 'var(--success-soft)', fg: 'var(--mint-500)', d: 'var(--success)' },
    neutral: { bg: 'var(--surface-sunken)', fg: 'var(--ink-600)', d: 'var(--ink-400)' },
    solid: { bg: 'var(--brand)', fg: 'var(--text-on-brand)', d: 'var(--text-on-brand)' },
  };
  const t = tones[tone] || tones.violet;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 11px', borderRadius: 'var(--radius-pill)',
      background: t.bg, color: t.fg, fontFamily: 'var(--font-body)',
      fontWeight: 700, fontSize: 12.5, lineHeight: 1.4, whiteSpace: 'nowrap', ...style,
    }} {...rest}>
      {star && <span style={{ color: t.d, fontSize: 13, lineHeight: 1 }}>★</span>}
      {dot && !star && <span style={{ width: 7, height: 7, borderRadius: 999, background: t.d }} />}
      {children}
    </span>
  );
}
