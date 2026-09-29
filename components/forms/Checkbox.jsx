import React from 'react';

/** Checkbox with brand-violet fill when checked. Use for filters & consent. */
export function Checkbox({ label, checked = false, onChange, disabled = false, id, style = {} }) {
  const cbId = id || React.useId();
  return (
    <label htmlFor={cbId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10, cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'var(--text-body)', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <input id={cbId} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
      <span style={{
        width: 22, height: 22, borderRadius: 'var(--radius-sm)', flexShrink: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: checked ? 'var(--brand)' : 'var(--surface-card)',
        border: `1.5px solid ${checked ? 'var(--brand)' : 'var(--border-strong)'}`,
        transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      }}>
        {checked && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-brand)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        )}
      </span>
      {label}
    </label>
  );
}
