import React from 'react';
import { Rating } from './Rating.jsx';
import { PriceTag } from './PriceTag.jsx';
import { Button } from '../core/Button.jsx';
import { Badge } from '../core/Badge.jsx';

const heartPath = 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z';
const sparklePath = 'M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z';

/**
 * Product card — image, name, theme, sizes, rating, price, primary "Comprar"
 * and secondary "Experimentar com IA", plus a favorite heart. The commercial
 * workhorse of the storefront.
 */
export function ProductCard({
  name, theme, price, original, installments, image, sizes = [], rating, reviews,
  badge, favorite = false, onFavorite, onBuy, onTryOn, style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const [fav, setFav] = React.useState(favorite);

  return (
    <div
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', background: 'var(--surface-card)',
        border: '1px solid var(--line-200)', borderRadius: 'var(--radius-md)', overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-5px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        fontFamily: 'var(--font-body)', ...style,
      }}>
      {/* media */}
      <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'var(--surface-sunken)', overflow: 'hidden' }}>
        {image && <img src={image} alt={name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)',
        }} />}
        {badge && <div style={{ position: 'absolute', top: 12, left: 12 }}><Badge tone={badge.tone || 'pink'}>{badge.label}</Badge></div>}
        <button aria-label="Favoritar" onClick={() => { setFav(!fav); onFavorite && onFavorite(!fav); }}
          style={{
            position: 'absolute', top: 10, right: 10, width: 38, height: 38, borderRadius: 999,
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'color-mix(in oklab, var(--surface-card) 88%, transparent)', backdropFilter: 'blur(4px)', boxShadow: 'var(--shadow-sm)',
            color: fav ? 'var(--rosa-500)' : 'var(--ink-400)', transition: 'color var(--dur-fast), transform var(--dur-fast)',
            transform: fav ? 'scale(1.08)' : 'scale(1)',
          }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill={fav ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={heartPath}/></svg>
        </button>
      </div>
      {/* body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: 16 }}>
        {theme && <span style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--accent-ink)' }}>{theme}</span>}
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, lineHeight: 1.2, color: 'var(--text-strong)' }}>{name}</h3>
        {rating != null && <Rating value={rating} count={reviews} />}
        {sizes.length > 0 && (
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
            {sizes.map((s) => (
              <span key={s} style={{
                minWidth: 26, padding: '2px 7px', textAlign: 'center', fontSize: 12, fontWeight: 700,
                color: 'var(--text-muted)', background: 'var(--surface-sunken)',
                border: '1px solid var(--line-200)', borderRadius: 'var(--radius-sm)',
              }}>{s}</span>
            ))}
          </div>
        )}
        <div style={{ marginTop: 2 }}><PriceTag price={price} original={original} installments={installments} size="sm" /></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 6 }}>
          <Button variant="primary" fullWidth onClick={onBuy}>Comprar</Button>
          <Button variant="secondary" fullWidth onClick={onTryOn}
            iconLeft={<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={sparklePath}/></svg>}>
            Experimentar com IA
          </Button>
        </div>
      </div>
    </div>
  );
}
