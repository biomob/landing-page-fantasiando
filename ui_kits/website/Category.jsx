// Category / listing screen — filters + product grid.
function Category() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const { ProductCard, Checkbox, Select, Badge, Button } = C;
  const { Eyebrow, Title } = window;

  const [temas, setTemas] = React.useState({});
  const [tamanho, setTamanho] = React.useState('Todos');
  const [cor, setCor] = React.useState({});
  const [ocasiao, setOcasiao] = React.useState({});
  const [prontaEntrega, setProntaEntrega] = React.useState(false);
  const [ordem, setOrdem] = React.useState('Relevância');

  const temaList = ['Princesas', 'Festa junina', 'Fantasia temática', 'Vestidos florais', 'Aniversário'];
  const cores = [['Rosa', 'var(--rosa-400)'], ['Caramelo', 'var(--caramelo-400)'], ['Azul', 'var(--sky-400)'], ['Amarelo', 'var(--yellow-400)'], ['Coral', 'var(--coral-400)'], ['Multicor', 'var(--grad-candy)']];
  const ocasioes = ['Festa', 'Aniversário', 'Junina', 'Dia a dia'];

  const activeTemas = Object.keys(temas).filter((k) => temas[k]);
  let list = window.PRODUCTS.filter((p) => activeTemas.length === 0 || activeTemas.includes(p.theme));
  if (ordem === 'Menor preço') list = [...list].sort((a, b) => a.price - b.price);
  if (ordem === 'Maior preço') list = [...list].sort((a, b) => b.price - a.price);

  const FilterGroup = ({ title, children }) => (
    <div style={{ borderBottom: '1px solid var(--line-200)', padding: '16px 0' }}>
      <div style={{ fontWeight: 800, fontSize: 13.5, color: 'var(--text-strong)', marginBottom: 12 }}>{title}</div>
      {children}
    </div>
  );

  return (
    <div>
      <section style={{ background: 'var(--grad-hero)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px' }}>
          <Eyebrow>Vitrine</Eyebrow>
          <Title>Vestidos & fantasias</Title>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, margin: '6px 0 0' }}>{list.length} modelos · escolha com mais segurança usando a prova virtual.</p>
        </div>
      </section>
      <div className="atelier-category-layout" style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '32px 24px 64px', display: 'grid', gridTemplateColumns: '248px 1fr', gap: 32, alignItems: 'start' }}>
        {/* Filters */}
        <aside style={{ background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', padding: '6px 18px 18px', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 96 }}>
          <FilterGroup title="Tema">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {temaList.map((t) => <Checkbox key={t} label={t} checked={!!temas[t]} onChange={(e) => setTemas((s) => ({ ...s, [t]: e.target.checked }))} />)}
            </div>
          </FilterGroup>
          <FilterGroup title="Tamanho">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Todos', '2', '4', '6', '8', '10'].map((s) => (
                <button key={s} onClick={() => setTamanho(s)} style={{ minWidth: 38, height: 38, borderRadius: 'var(--radius-sm)', cursor: 'pointer', fontWeight: 700, fontSize: 13, border: tamanho === s ? '2px solid var(--violet-500)' : '1.5px solid var(--line-200)', background: tamanho === s ? 'var(--violet-50)' : 'var(--surface-card)', color: tamanho === s ? 'var(--violet-700)' : 'var(--text-body)', fontFamily: 'var(--font-body)' }}>{s}</button>
              ))}
            </div>
          </FilterGroup>
          <FilterGroup title="Cor">
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {cores.map(([name, c]) => {
                const on = !!cor[name];
                return <button key={name} title={name} onClick={() => setCor((s) => ({ ...s, [name]: !s[name] }))} style={{ width: 30, height: 30, borderRadius: 999, background: c, cursor: 'pointer', border: on ? '2px solid var(--violet-600)' : '2px solid var(--surface-card)', boxShadow: on ? '0 0 0 2px var(--violet-300)' : 'var(--shadow-xs)' }} />;
              })}
            </div>
          </FilterGroup>
          <FilterGroup title="Ocasião">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ocasioes.map((o) => <Checkbox key={o} label={o} checked={!!ocasiao[o]} onChange={(e) => setOcasiao((s) => ({ ...s, [o]: e.target.checked }))} />)}
            </div>
          </FilterGroup>
          <FilterGroup title="Disponibilidade">
            <Checkbox label="Pronta entrega" checked={prontaEntrega} onChange={(e) => setProntaEntrega(e.target.checked)} />
          </FilterGroup>
        </aside>
        {/* Grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18, gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {activeTemas.map((t) => <Badge key={t} tone="violet" dot>{t}</Badge>)}
              {prontaEntrega && <Badge tone="success" dot>Pronta entrega</Badge>}
            </div>
            <div style={{ width: 200 }}><Select value={ordem} onChange={(e) => setOrdem(e.target.value)} options={['Relevância', 'Menor preço', 'Maior preço', 'Mais avaliados']} /></div>
          </div>
          <div className="atelier-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {list.map((p) => (
              <div key={p.id} className="atelier-product-tile">
                <ProductCard {...p} favorite={!!shop.favs[p.id]} onFavorite={() => shop.toggleFav(p.id)}
                  onBuy={() => shop.addToCart(p, p.sizes[0])} onTryOn={() => shop.openTryOn(p)} />
                <button type="button" onClick={() => shop.openProduct(p)}>Ver detalhes de {p.name}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
Object.assign(window, { Category });
