// App shell: TopBar + Header + router + cart drawer + toast + theme (light/dark/system).
const { TopBar, Header, Button, IconButton, MascotState, Toast, PriceTag } = window.FantasiandoDesignSystem_43d79f;

const ShopContext = React.createContext(null);
const useShop = () => React.useContext(ShopContext);

const NAV_MAP = {
  'Vestidos': 'category', 'Fantasias': 'category', 'Temas': 'category',
  'Prova virtual': 'prova', 'Novidades': 'category', 'Sobre': 'home', 'Contato': 'contato', '__home': 'home',
};
const IMMERSIVE = ['prova', 'contato'];

function MobileHeader({ onNav, onAction, theme, onToggleTheme, cartCount }) {
  const [open, setOpen] = React.useState(false);
  const items = ['Vestidos', 'Fantasias', 'Prova virtual', 'Sobre', 'Contato'];
  return (
    <header className="mobile-header">
      <div className="mobile-header-bar">
        <button type="button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(!open)}><window.Icon d={open ? 'x' : 'menu'} size={23} /></button>
        <a href="#" onClick={(e) => { e.preventDefault(); onNav('__home'); setOpen(false); }}><img src={window.ASSETS + 'logo-cor.png'} alt="Annapê Ateliê" /></a>
        <div className="mobile-header-actions">
          <button type="button" aria-label={theme === 'dark' ? 'Modo claro' : 'Modo escuro'} onClick={onToggleTheme}><window.Icon d={theme === 'dark' ? 'sun' : 'moon'} size={21} /></button>
          <button type="button" aria-label={`Carrinho, ${cartCount} itens`} onClick={() => onAction('cart')}><window.Icon d="cart" size={21} /></button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Navegação principal">{items.map((item) => <a key={item} href="#" onClick={(e) => { e.preventDefault(); onNav(item); setOpen(false); }}>{item}</a>)}</nav>}
    </header>
  );
}

// Theme: stored choice wins; otherwise follow the OS.
function useTheme() {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const [stored, setStored] = React.useState(() => localStorage.getItem('annape-theme'));
  const [sys, setSys] = React.useState(mq.matches ? 'dark' : 'light');
  React.useEffect(() => { const f = (e) => setSys(e.matches ? 'dark' : 'light'); mq.addEventListener('change', f); return () => mq.removeEventListener('change', f); }, []);
  const theme = stored || 'light';
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggle = () => { const next = theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('annape-theme', next); setStored(next); };
  return [theme, toggle];
}

function Footer({ go }) {
  const cols = [
    { h: 'Comprar', items: ['Vestidos', 'Fantasias', 'Novidades', 'Promoções'] },
    { h: 'Ajuda', items: ['Tabela de medidas', 'Trocas', 'Envio', 'Pagamento'] },
    { h: 'Prova virtual', items: ['Como funciona', 'Créditos', 'Privacidade', 'Excluir imagens'] },
    { h: 'Ateliê', items: ['Sobre', 'Contato', 'Instagram', 'WhatsApp'] },
  ];
  return (
    <footer style={{ background: 'var(--bg-cream)', color: 'var(--text-body)', borderTop: '1px solid var(--line-200)' }}>
      <div className="atelier-footer-grid" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '56px 24px 32px', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) repeat(4, minmax(0,1fr))', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <img src={window.ASSETS + 'logo-cor.png'} alt="Annapê Ateliê" style={{ height: 92 }} />
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 260 }}>
            Vestidos e fantasias infantis feitos com carinho, com prova virtual por IA. De Petrópolis para todo o Brasil.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.h}>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, marginBottom: 14, color: 'var(--text-strong)' }}>{c.h}</div>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {c.items.map((it) => <li key={it}><a href="#" onClick={(e) => { e.preventDefault(); if (it === 'Contato') go('contato', 'Contato'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14 }}>{it}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--line-200)', padding: '16px 24px', textAlign: 'center', fontSize: 13, color: 'var(--text-subtle)' }}>
        © 2026 Annapê Ateliê · A prévia da prova virtual é uma simulação visual. Cores e caimento podem variar.
      </div>
    </footer>
  );
}

function CartDrawer({ open, items, onClose, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 900, background: 'var(--overlay)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity var(--dur-base)' }} />
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: 420, maxWidth: '92vw', zIndex: 901,
        background: 'var(--bg-base)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform var(--dur-slow) var(--ease-out)', fontFamily: 'var(--font-body)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid var(--line-200)' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--text-strong)' }}>Sua sacola</h3>
          <IconButton label="Fechar" onClick={onClose}><window.Icon d="x" /></IconButton>
        </div>
        {items.length === 0 ? (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <MascotState state="empty" assetsPath={window.ASSETS} title="Sua sacola está vazia" text="Escolha um vestido para começar." />
          </div>
        ) : (
          <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {items.map((it, idx) => (
              <div key={idx} style={{ display: 'flex', gap: 12, background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', padding: 10 }}>
                <img src={it.image} alt="" style={{ width: 64, height: 80, objectFit: 'cover', borderRadius: 'var(--radius-md)' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{it.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-muted)', margin: '2px 0 6px' }}>Tamanho {it.size} · Qtd {it.qty}</div>
                  <PriceTag price={it.price} size="sm" />
                </div>
              </div>
            ))}
          </div>
        )}
        {items.length > 0 && (
          <div style={{ borderTop: '1px solid var(--line-200)', padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
              <span style={{ fontSize: 15, color: 'var(--text-muted)' }}>Subtotal</span>
              <PriceTag price={total} />
            </div>
            <Button variant="primary" fullWidth size="lg" onClick={onCheckout}>Finalizar compra</Button>
            <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--text-subtle)', marginTop: 10 }}>Compra segura · Envio para todo o Brasil</p>
          </div>
        )}
      </aside>
    </>
  );
}

function App() {
  const [theme, toggleTheme] = useTheme();
  const [screen, setScreen] = React.useState(() => localStorage.getItem('annape-screen') || 'home');
  const [activeNav, setActiveNav] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);
  const [favs, setFavs] = React.useState({});
  const [toast, setToast] = React.useState(null);
  const [credits, setCredits] = React.useState(3);
  const [user, setUser] = React.useState(null);
  const [gallery, setGallery] = React.useState([]);
  const [selected, setSelected] = React.useState(window.PRODUCTS[0]);

  const showToast = (t) => { setToast(t); clearTimeout(window.__tt); window.__tt = setTimeout(() => setToast(null), 3200); };
  const addToCart = (p, size = '6') => {
    setCart((c) => [...c, { ...p, size, qty: 1 }]);
    showToast({ tone: 'success', title: 'Adicionado à sacola', text: `${p.name} · Tam ${size}` });
  };
  const go = (s, nav) => { setScreen(s); localStorage.setItem('annape-screen', s); setActiveNav(nav || ''); window.scrollTo(0, 0); };
  const openTryOn = (p) => { if (p) setSelected(p); go('prova', 'Prova virtual'); };
  const openProduct = (p) => { setSelected(p); go('product'); };
  const toggleFav = (id) => setFavs((f) => ({ ...f, [id]: !f[id] }));

  const ctx = { go, addToCart, openTryOn, openProduct, favs, toggleFav, credits, setCredits, selected, setSelected, showToast, setCartOpen, user, setUser, gallery, setGallery, theme };
  const onNav = (item) => go(NAV_MAP[item] || 'home', item === '__home' ? '' : item);
  const onAction = (k) => { if (k === 'cart') setCartOpen(true); if (k === 'account') go('account'); if (k === 'tryon') openTryOn(); };

  const Screen = { home: window.Home, prova: window.ProvaVirtual, product: window.Product, category: window.Category, account: window.Account, contato: window.Contato }[screen] || window.Home;
  const immersive = IMMERSIVE.includes(screen);

  return (
    <ShopContext.Provider value={ctx}>
      <div style={{ background: 'var(--bg-base)', color: 'var(--text-body)', minHeight: '100vh', display: 'flex', flexDirection: 'column', transition: 'background var(--dur-base)' }}>
        {!immersive && <TopBar />}
        <div style={{ position: 'sticky', top: 0, zIndex: 500 }}>
          <div className="desktop-header"><Header active={activeNav} cartCount={cart.length} favCount={Object.values(favs).filter(Boolean).length}
            assetsPath={window.ASSETS} onNav={onNav} onAction={onAction} theme={theme} onToggleTheme={toggleTheme} /></div>
          <MobileHeader onNav={onNav} onAction={onAction} theme={theme} onToggleTheme={toggleTheme} cartCount={cart.length} />
        </div>
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Screen key={screen} />
        </main>
        {!immersive && <Footer go={go} />}
      </div>

      <CartDrawer open={cartOpen} items={cart} onClose={() => setCartOpen(false)}
        onCheckout={() => { setCartOpen(false); showToast({ tone: 'success', title: 'Pedido recebido!', text: 'Vamos preparar tudo com carinho.' }); setCart([]); }} />

      {toast && (
        <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1200 }}>
          <Toast tone={toast.tone} showMascot assetsPath={window.ASSETS} title={toast.title} text={toast.text} onClose={() => setToast(null)} />
        </div>
      )}
    </ShopContext.Provider>
  );
}

Object.assign(window, { App, ShopContext, useShop, Footer });
