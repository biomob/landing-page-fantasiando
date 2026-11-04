import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';

const ICONS = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M5.5 21a7 7 0 0 1 13 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  cart: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  sparkle: '<path d="M12 3l1.7 5.2L19 10l-5.3 1.8L12 17l-1.7-5.2L5 10l5.3-1.8Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>',
  dress: '<path d="M9 3h6l1 5-2 2 4 10H6l4-10-2-2 1-5Z"/><path d="M9 3h6"/>',
  chat: '<path d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.5 8.5 0 0 1-3.4-.7L4 20l1.7-3.5A7.1 7.1 0 0 1 4 11.5 7.5 7.5 0 0 1 12 4a7.5 7.5 0 0 1 8 7.5Z"/>',
};
const Icon = ({ d, size = 21 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: d }} />
);

const NAV = ['Vestidos', 'Fantasias', 'Prova virtual', 'Sobre', 'Contato'];
const NAV_ICONS = { Vestidos: ICONS.dress, Fantasias: ICONS.sparkle, 'Prova virtual': ICONS.sparkle, Sobre: ICONS.heart, Contato: ICONS.chat };

/**
 * Main storefront header — Annapê Ateliê logo, nav, icons, theme toggle and
 * the "Experimentar com IA" CTA. Translucent over the page (backdrop blur).
 * `assetsPath` is the relative prefix to /assets.
 */
export function Header({ nav = NAV, active, cartCount = 0, favCount = 0, assetsPath = 'assets/', onNav, onAction, theme, onToggleTheme, compact = false, style = {} }) {
  const [hovered, setHovered] = React.useState(null);
  const act = (k) => onAction && onAction(k);
  const bar = {
    background: 'color-mix(in oklab, var(--bg-base) 84%, transparent)',
    backdropFilter: 'saturate(1.4) blur(14px)', WebkitBackdropFilter: 'saturate(1.4) blur(14px)',
    borderBottom: '1px solid var(--line-200)', fontFamily: 'var(--font-body)', color: 'var(--text-body)', ...style,
  };
  const themeBtn = onToggleTheme ? (
    <IconButton label={theme === 'dark' ? 'Modo claro' : 'Modo escuro'} onClick={onToggleTheme}>
      <Icon d={theme === 'dark' ? ICONS.sun : ICONS.moon} />
    </IconButton>
  ) : null;

  if (compact) {
    return (
      <header style={bar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, height: 64, padding: '0 14px' }}>
          <IconButton label="Menu"><Icon d={ICONS.menu} /></IconButton>
          <img src={assetsPath + 'logo-cor.png'} alt="Annapê Ateliê" style={{ height: 46, margin: '0 auto' }} />
          {themeBtn}
          <IconButton label="Carrinho" badge={cartCount || undefined} onClick={() => act('cart')}><Icon d={ICONS.cart} /></IconButton>
        </div>
      </header>
    );
  }

  return (
    <header style={bar}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 20, height: 84,
        maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '0 24px',
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('__home'); }} style={{ display: 'flex', flexShrink: 0 }}>
          <img src={assetsPath + 'logo-cor.png'} alt="Annapê Ateliê" style={{ height: 62 }} />
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}>
          {nav.map((item) => {
            const isActive = active === item;
            const isHover = hovered === item;
            const isAI = item === 'Prova virtual';
            return (
              <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNav && onNav(item); }}
                onMouseEnter={() => setHovered(item)} onMouseLeave={() => setHovered(null)}
                style={{
                  position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 'var(--radius-pill)',
                  fontSize: 15, fontWeight: isActive ? 800 : 600, textDecoration: 'none',
                  color: (isActive || isHover || isAI) ? 'var(--brand-ink)' : 'var(--text-body)',
                  background: isActive ? 'var(--rosa-100)' : isHover ? 'var(--rosa-50)' : 'transparent', whiteSpace: 'nowrap',
                  transition: 'color var(--dur-fast), background var(--dur-fast)',
                }}>
                <Icon d={NAV_ICONS[item] || ICONS.sparkle} size={14} />
                {item}
              </a>
            );
          })}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
          <IconButton label="Busca"><Icon d={ICONS.search} /></IconButton>
          <IconButton label="Conta" onClick={() => act('account')}><Icon d={ICONS.user} /></IconButton>
          <IconButton label="Favoritos" badge={favCount || undefined}><Icon d={ICONS.heart} /></IconButton>
          <IconButton label="Carrinho" badge={cartCount || undefined} onClick={() => act('cart')}><Icon d={ICONS.cart} /></IconButton>
          {themeBtn}
          <Button variant="primary" size="sm" style={{ marginLeft: 8 }} onClick={() => act('tryon')} iconLeft={<Icon d={ICONS.sparkle} size={15} />}>Experimentar com IA</Button>
        </div>
      </div>
    </header>
  );
}
