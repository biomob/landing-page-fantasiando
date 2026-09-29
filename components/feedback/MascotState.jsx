import React from 'react';

const STATES = {
  empty: {
    asset: 'mascote-vazio.png', tone: 'var(--brand)', float: true,
    title: 'Ainda não tem nada por aqui', text: 'Envie uma foto ou adicione favoritos para começar.',
  },
  loading: {
    asset: 'mascote-loading.png', tone: 'var(--brand)', float: true,
    title: 'Gerando a prévia…', text: 'O mascote da Annapê está preparando a sua simulação. Leva só alguns instantes.',
  },
  success: {
    asset: 'mascote-sucesso.png', tone: 'var(--success)', float: false,
    title: 'Prévia pronta!', text: 'Veja como ficou. Lembre que é uma simulação visual.',
  },
  error: {
    asset: 'mascote-erro-foto.png', tone: 'var(--coral-500)', float: false,
    title: 'Vamos tentar outra foto?', text: 'Use uma foto de corpo inteiro, com boa luz e a criança de frente.',
  },
  'no-credits': {
    asset: 'mascote-vazio.png', tone: 'var(--coral-500)', float: true,
    title: 'Suas provas acabaram', text: 'Você usou as 3 provas da sua conta. Fale com a gente no WhatsApp para continuar.',
  },
  cart: {
    asset: 'mascote-sucesso.png', tone: 'var(--success)', float: false,
    title: 'Adicionado ao carrinho', text: 'Continue escolhendo ou finalize quando quiser.',
  },
};

/**
 * Mascot-led UI state block (empty / loading / success / error / no-credits /
 * cart). Each maps to the right heart-sun mascot pose and default copy you can override.
 * `assetsPath` is the relative prefix to /assets.
 */
export function MascotState({
  state = 'empty', title, text, action = null, assetsPath = 'assets/', progress = null,
  size = 'md', style = {},
}) {
  const s = STATES[state] || STATES.empty;
  const dim = { sm: 96, md: 140, lg: 184 }[size] || 140;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      gap: 14, padding: '8px 16px', fontFamily: 'var(--font-body)', ...style,
    }}>
      <img src={assetsPath + s.asset} alt="" style={{
        width: dim, height: 'auto',
        animation: s.float ? 'fz-float var(--float-dur) var(--ease-soft) infinite' : 'fz-fade-up var(--dur-slow) var(--ease-out)',
      }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxWidth: 380 }}>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--text-strong)' }}>
          {title || s.title}
        </h3>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--text-muted)' }}>{text || s.text}</p>
      </div>
      {progress != null && (
        <div style={{ width: 220, height: 8, borderRadius: 999, background: 'var(--violet-100)', overflow: 'hidden' }}>
          <div style={{ width: `${Math.round(progress * 100)}%`, height: '100%', borderRadius: 999, background: 'var(--grad-candy)', transition: 'width var(--dur-base) var(--ease-out)' }} />
        </div>
      )}
      {action}
    </div>
  );
}
