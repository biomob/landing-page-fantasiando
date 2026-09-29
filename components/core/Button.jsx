import React from 'react';

/**
 * Annapê Ateliê action button.
 * Variants: primary (rosa, dark text), accent (caramelo), secondary (outline), ghost, soft (rosa wash).
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13.5, height: 36, gap: 7 },
    md: { padding: '11px 20px', fontSize: 15, height: 46, gap: 8 },
    lg: { padding: '15px 28px', fontSize: 17, height: 56, gap: 10 },
  };
  const s = sizes[size] || sizes.md;

  const palettes = {
    primary: {
      background: hover ? 'var(--brand-strong)' : 'var(--brand)',
      color: 'var(--text-on-brand)', border: '1px solid transparent',
      boxShadow: disabled ? 'none' : 'var(--shadow-brand)',
    },
    accent: {
      background: hover ? 'var(--accent-strong)' : 'var(--accent)',
      color: 'var(--text-on-accent)', border: '1px solid transparent',
      boxShadow: disabled ? 'none' : '0 8px 20px rgba(195,138,103,0.26)',
    },
    secondary: {
      background: hover ? 'var(--rosa-50)' : 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--line-200)',
      boxShadow: 'var(--shadow-xs)',
    },
    soft: {
      background: hover ? 'var(--violet-200)' : 'var(--violet-100)',
      color: 'var(--violet-700)', border: '1px solid transparent', boxShadow: 'none',
    },
    ghost: {
      background: hover ? 'var(--rosa-50)' : 'transparent',
      color: 'var(--brand-ink)', border: '1px solid transparent', boxShadow: 'none',
    },
  };
  const p = palettes[variant] || palettes.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: s.gap, fontFamily: 'var(--font-display)', fontWeight: 600,
        fontSize: s.fontSize, lineHeight: 1, padding: s.padding, minHeight: s.height,
        width: fullWidth ? '100%' : 'auto',
        borderRadius: 'var(--radius-pill)', cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
        transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base), box-shadow var(--dur-base)',
        ...p, ...style,
      }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}
