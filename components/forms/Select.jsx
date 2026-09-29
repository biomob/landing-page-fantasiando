import React from 'react';

/** Native select styled to match Annapê inputs. */
export function Select({ label, value, onChange, options = [], id, helper, disabled = false, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const selId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)', ...style }}>
      {label && <label htmlFor={selId} style={{ fontWeight: 700, fontSize: 13.5, color: 'var(--text-strong)' }}>{label}</label>}
      <div style={{
        position: 'relative', height: 48,
        border: `1.5px solid ${focus ? 'var(--violet-400)' : 'var(--line-200)'}`,
        borderRadius: 'var(--radius-md)', background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)', color: 'var(--text-body)',
        boxShadow: focus ? 'var(--ring)' : 'none', transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      }}>
        <select
          id={selId} value={value} onChange={onChange} disabled={disabled}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{
            width: '100%', height: '100%', padding: '0 38px 0 14px', border: 'none', outline: 'none',
            background: 'transparent', appearance: 'none', WebkitAppearance: 'none',
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)', cursor: 'pointer',
          }}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lab = typeof o === 'string' ? o : o.label;
            return <option key={val} value={val}>{lab}</option>;
          })}
        </select>
        <span style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-subtle)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </span>
      </div>
      {helper && <span style={{ fontSize: 12.5, color: 'var(--text-muted)' }}>{helper}</span>}
    </div>
  );
}
