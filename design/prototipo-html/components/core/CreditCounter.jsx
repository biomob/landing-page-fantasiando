import React from 'react';

/**
 * Virtual try-on credit counter. Shows "{used} de {total} provas disponíveis"
 * with a row of pips. Empty state turns coral.
 */
export function CreditCounter({ remaining = 3, total = 3, compact = false, style = {} }) {
  const empty = remaining <= 0;
  const accent = empty ? 'var(--coral-400)' : 'var(--rosa-600)';
  const pips = Array.from({ length: total }, (_, i) => i < remaining);

  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: compact ? 8 : 10,
      padding: compact ? '6px 12px' : '9px 14px',
      background: empty ? 'var(--coral-100)' : 'var(--violet-50)',
      border: `1px solid ${empty ? 'var(--coral-200)' : 'var(--violet-100)'}`,
      borderRadius: 'var(--radius-pill)', fontFamily: 'var(--font-body)', ...style,
    }}>
      <div style={{ display: 'flex', gap: 4 }}>
        {pips.map((on, i) => (
          <span key={i} style={{
            width: compact ? 8 : 10, height: compact ? 8 : 10, borderRadius: 999,
            background: on ? accent : 'transparent',
            border: `1.5px solid ${on ? accent : 'var(--violet-200)'}`,
            transition: 'background var(--dur-base)',
          }} />
        ))}
      </div>
      <span style={{ fontWeight: 800, fontSize: compact ? 13 : 14, color: empty ? 'var(--coral-500)' : 'var(--violet-700)' }}>
        {remaining} de {total}
      </span>
      {!compact && (
        <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
          {empty ? 'sem provas' : 'provas disponíveis'}
        </span>
      )}
    </div>
  );
}
