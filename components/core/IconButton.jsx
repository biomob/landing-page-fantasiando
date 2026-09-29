import React from 'react';

/**
 * Round icon-only button — header actions (search, account, favorites, cart).
 * Pass a Lucide <svg> (or any node) as children. Optional count badge.
 */
export function IconButton({
  children,
  label,
  badge = null,
  variant = 'plain',
  size = 'md',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = { sm: 36, md: 44, lg: 48 }[size] || 44;

  const palettes = {
    plain: { background: hover ? 'var(--violet-50)' : 'transparent', color: 'var(--text-body)' },
    soft: { background: hover ? 'var(--violet-200)' : 'var(--violet-100)', color: 'var(--violet-700)' },
    solid: { background: hover ? 'var(--brand-strong)' : 'var(--brand)', color: 'var(--text-on-brand)' },
  };
  const p = palettes[variant] || palettes.plain;

  return (
    <button
      type="button" aria-label={label} onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', width: dims, height: dims, minWidth: dims,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-pill)', border: 'none', cursor: 'pointer',
        transition: 'background var(--dur-base)', ...p, ...style,
      }}
      {...rest}
    >
      {children}
      {badge != null && (
        <span style={{
          position: 'absolute', top: 2, right: 2, minWidth: 18, height: 18,
          padding: '0 5px', borderRadius: 999, background: 'var(--brand)',
          color: 'var(--text-on-brand)', fontFamily: 'var(--font-body)', fontWeight: 800,
          fontSize: 11, lineHeight: '18px', textAlign: 'center',
          boxShadow: '0 0 0 2px var(--surface-card)',
        }}>{badge}</span>
      )}
    </button>
  );
}
