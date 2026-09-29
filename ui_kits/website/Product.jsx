// Product detail screen — gallery, price, sizes, description, CTAs, related.
function Product() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const { Button, PriceTag, Rating, Badge, ProductCard } = C;
  const { Section, Eyebrow, Title } = window;
  const p = shop.selected || window.PRODUCTS[0];
  const [size, setSize] = React.useState(p.sizes[1] || p.sizes[0]);
  const gallery = [p.image];
  const [main, setMain] = React.useState(0);
  const related = window.PRODUCTS.filter((x) => x.id !== p.id).slice(0, 4);

  return (
    <div>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '24px 24px 0', fontSize: 13.5, color: 'var(--text-muted)' }}>
        <a href="#" onClick={(e) => { e.preventDefault(); shop.go('home'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Início</a> · <a href="#" onClick={(e) => { e.preventDefault(); shop.go('category', 'Temas'); }} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{p.theme}</a> · <span style={{ color: 'var(--text-body)' }}>{p.name}</span>
      </div>
      <Section style={{}}>
        <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'start' }}>
          <div>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-sunken)', border: '1px solid var(--line-200)' }}>
              <img src={gallery[main]} alt={p.name} style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setMain(i)} style={{ width: 72, height: 88, borderRadius: 'var(--radius-md)', overflow: 'hidden', border: main === i ? '2px solid var(--violet-500)' : '2px solid var(--line-200)', cursor: 'pointer', padding: 0, background: 'var(--surface-card)' }}>
                  <img src={g} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          </div>
          <div>
            {p.badge && <Badge tone={p.badge.tone}>{p.badge.label}</Badge>}
            <Eyebrow>{p.theme}</Eyebrow>
            <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, lineHeight: 1.1, color: 'var(--text-strong)', margin: '6px 0 10px' }}>{p.name}</h1>
            <Rating value={p.rating} count={p.reviews} />
            <div style={{ margin: '18px 0' }}><PriceTag price={p.price} original={p.original} installments={3} size="lg" /></div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>Tamanho</span>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 13, fontWeight: 700, color: 'var(--brand-ink)', textDecoration: 'none', display: 'inline-flex', gap: 6, alignItems: 'center' }}><window.Icon d="ruler" size={15} />Tabela de medidas</a>
            </div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
              {p.sizes.map((s) => (
                <button key={s} onClick={() => setSize(s)} style={{
                  minWidth: 48, height: 48, borderRadius: 'var(--radius-md)', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15,
                  border: size === s ? '2px solid var(--violet-500)' : '1.5px solid var(--line-200)',
                  background: size === s ? 'var(--violet-50)' : 'var(--surface-card)', color: size === s ? 'var(--violet-700)' : 'var(--text-body)',
                }}>{s}</button>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
              <Button variant="primary" size="lg" style={{ flex: 1 }} onClick={() => shop.addToCart(p, size)}>Comprar</Button>
              <Button variant="secondary" size="lg" style={{ flex: 1 }} onClick={() => shop.openTryOn(p)} iconLeft={<window.Icon d="sparkle" size={18} />}>Experimentar com IA</Button>
            </div>
            <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)', marginBottom: 6 }}>Sobre o modelo</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>
                Vestido em tule com forro macio e acabamento delicado, pensado para festas e ocasiões especiais. Confortável para a criança brincar e posar.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 14, flexWrap: 'wrap' }}>
                <Badge tone="neutral" dot>Pronta entrega</Badge>
                <Badge tone="neutral" dot>Envio para todo o Brasil</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section bg="var(--bg-cream)">
        <Eyebrow color="var(--coral-500)">Você também vai amar</Eyebrow>
        <Title size={28}>Modelos relacionados</Title>
        <div className="atelier-products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 24 }}>
          {related.map((r) => (
            <ProductCard key={r.id} {...r} favorite={!!shop.favs[r.id]} onFavorite={() => shop.toggleFav(r.id)}
              onBuy={() => shop.addToCart(r, r.sizes[0])} onTryOn={() => shop.openTryOn(r)} />
          ))}
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { Product });
