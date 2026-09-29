import React from 'react';

/**
 * "Escolha por ocasião" category tile. Photo (or accent fill) with a soft
 * gradient base, label and product count.
 */
export function CategoryCard({ label, count, image, tone = 'violet', href = '#', onClick, style = {} }) {
  const [hover, setHover] = React.useState(false);
  const tones = {
    violet: 'var(--violet-400)', pink: 'var(--pink-400)', yellow: 'var(--yellow-400)',
    sky: 'var(--sky-400)', coral: 'var(--coral-400)', mint: 'var(--mint-500)',
  };
  const accent = tones[tone] || tones.violet;

  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'block', overflow: 'hidden', textDecoration: 'none',
        borderRadius: 'var(--radius-md)', aspectRatio: '4 / 5',
        background: image ? 'var(--surface-sunken)' : accent,
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'var(--shadow-card)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)', ...style,
      }}>
      {image && (
        <img src={image} alt="" style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transform: hover ? 'scale(1.05)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)',
        }} />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(43,37,51,0.62) 0%, rgba(43,37,51,0.05) 52%, transparent 100%)',
      }} />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, color: '#fff' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, lineHeight: 1.15 }}>{label}</div>
        {count != null && <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>{count} modelos</div>}
      </div>
      <span style={{ position: 'absolute', top: 12, left: 12, width: 10, height: 10, borderRadius: 999, background: accent, boxShadow: '0 0 0 3px rgba(255,255,255,0.5)' }} />
    </a>
  );
}
