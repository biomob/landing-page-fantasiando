import React from 'react';

/** Centered modal dialog with scrim. Use for the try-on flow, size guide, login. */
export function Modal({ open = true, onClose, title, children, footer = null, width = 520, style = {} }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20, background: 'var(--overlay)', backdropFilter: 'blur(3px)',
        animation: 'fz-fade-up var(--dur-fast) var(--ease-out)', fontFamily: 'var(--font-body)',
      }}>
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog" aria-modal="true"
        style={{
          width: '100%', maxWidth: width, maxHeight: '90vh', overflow: 'auto',
          background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)',
          animation: 'fz-fade-up var(--dur-base) var(--ease-out)', ...style,
        }}>
        {title && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            padding: '18px 22px', borderBottom: '1px solid var(--line-200)',
          }}>
            <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, color: 'var(--text-strong)' }}>{title}</h2>
            {onClose && (
              <button aria-label="Fechar" onClick={onClose} style={{
                border: 'none', background: 'var(--surface-sunken)', cursor: 'pointer', color: 'var(--ink-600)',
                width: 36, height: 36, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
              </button>
            )}
          </div>
        )}
        <div style={{ padding: 22 }}>{children}</div>
        {footer && <div style={{ padding: '16px 22px', borderTop: '1px solid var(--line-200)', display: 'flex', gap: 10, justifyContent: 'flex-end' }}>{footer}</div>}
      </div>
    </div>
  );
}
