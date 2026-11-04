import React from 'react';

/** Lightweight toast notification. Optional mascot icon avatar. */
export function Toast({ title, text, tone = 'success', icon = null, onClose, assetsPath = 'assets/', showMascot = false, style = {} }) {
  const tones = {
    success: { bar: 'var(--success)', bg: 'var(--surface-raised)' },
    info: { bar: 'var(--info)', bg: 'var(--surface-raised)' },
    warning: { bar: 'var(--warning)', bg: 'var(--surface-raised)' },
    error: { bar: 'var(--danger)', bg: 'var(--surface-raised)' },
  };
  const t = tones[tone] || tones.success;
  return (
    <div role="status" style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', minWidth: 280, maxWidth: 380,
      background: t.bg, borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
      borderLeft: `4px solid ${t.bar}`, fontFamily: 'var(--font-body)',
      animation: 'fz-fade-up var(--dur-base) var(--ease-out)', ...style,
    }}>
      {showMascot ? (
        <img src={assetsPath + 'mascote-icone.png'} alt="" style={{ width: 40, height: 40, flexShrink: 0 }} />
      ) : icon ? (
        <span style={{ color: t.bar, display: 'flex', flexShrink: 0 }}>{icon}</span>
      ) : null}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-strong)' }}>{title}</div>}
        {text && <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 1 }}>{text}</div>}
      </div>
      {onClose && (
        <button aria-label="Fechar" onClick={onClose} style={{
          border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--ink-400)', display: 'flex', padding: 4,
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      )}
    </div>
  );
}
