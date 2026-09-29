import React from 'react';

/** Labeled text field with optional leading icon, helper and error states. */
export function Input({
  label, value, onChange, placeholder, type = 'text', helper, error,
  iconLeft = null, id, disabled = false, style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--coral-400)' : focus ? 'var(--violet-400)' : 'var(--line-200)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 9, padding: '0 14px', height: 48,
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-md)',
        boxShadow: focus ? 'var(--ring)' : 'none',
        transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      }}>
        {iconLeft && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{iconLeft}</span>}
        <input
          id={inputId} type={type} value={value} onChange={onChange} placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', minWidth: 0,
          }}
          {...rest}
        />
      </div>
      {(helper || error) && (
        <span style={{ fontSize: 12.5, color: error ? 'var(--coral-500)' : 'var(--text-muted)' }}>{error || helper}</span>
      )}
    </div>
  );
}
