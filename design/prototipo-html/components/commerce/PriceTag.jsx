import React from 'react';

const fmt = (n) => 'R$ ' + n.toFixed(2).replace('.', ',');

/**
 * Price display in BRL. Optional strikethrough original (sale) and an
 * installment line ("ou 3x de R$ 43,30").
 */
export function PriceTag({ price, original, installments, size = 'md', style = {} }) {
  const sizes = {
    sm: { main: 18, sub: 12 },
    md: { main: 24, sub: 13 },
    lg: { main: 32, sub: 14 },
  }[size] || { main: 24, sub: 13 };
  const onSale = original != null && original > price;

  return (
    <div style={{ fontFamily: 'var(--font-body)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
        {onSale && (
          <span style={{ fontSize: sizes.sub, color: 'var(--text-subtle)', textDecoration: 'line-through' }}>{fmt(original)}</span>
        )}
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: sizes.main, lineHeight: 1,
          color: onSale ? 'var(--sale)' : 'var(--price)',
        }}>{fmt(price)}</span>
      </div>
      {installments && (
        <div style={{ fontSize: sizes.sub, color: 'var(--text-muted)', marginTop: 3 }}>
          ou {installments}x de {fmt(price / installments)} sem juros
        </div>
      )}
    </div>
  );
}
