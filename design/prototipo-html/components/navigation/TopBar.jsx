import React from 'react';

const DEFAULT = [
  'Envio para todo o Brasil',
  '3 provas virtuais grátis por conta',
  'Atendimento pelo WhatsApp',
  'Compra segura',
];

/** Thin cocoa announcement bar. Rotates messages, or shows them spread on wide screens. */
export function TopBar({ messages = DEFAULT, rotate = true, interval = 3200, style = {} }) {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    if (!rotate) return;
    const id = setInterval(() => setI((p) => (p + 1) % messages.length), interval);
    return () => clearInterval(id);
  }, [rotate, interval, messages.length]);

  return (
    <div style={{
      background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', fontFamily: 'var(--font-body)',
      fontSize: 13, fontWeight: 600, height: 'var(--topbar-h)', display: 'flex',
      alignItems: 'center', justifyContent: 'center', overflow: 'hidden', ...style,
    }}>
      {rotate ? (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, animation: 'fz-fade-up var(--dur-base) var(--ease-out)' }}>
          <span style={{ color: 'var(--rosa-400)' }}>♥</span>
          {messages[i]}
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: 26, maxWidth: 'var(--container-wide)', padding: '0 24px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {messages.map((m, k) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
              <span style={{ color: 'var(--rosa-400)' }}>♥</span>{m}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
