// Home — hero, ticker, categories, try-on bento, featured, ateliê, reviews, contact CTA.
function Home() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  return (
    <div>
      <Hero shop={shop} C={C} />
      <Ticker />
      <Categories shop={shop} C={C} />
      <ProvaBento shop={shop} C={C} />
      <Featured shop={shop} C={C} />
      <Atelie />
      <Reviews C={C} />
      <ContactCTA shop={shop} C={C} />
    </div>
  );
}

function Section({ children, bg, style, pad = '88px 24px' }) {
  return <section style={{ background: bg || 'transparent', ...style }}><div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: pad }}>{children}</div></section>;
}
function Eyebrow({ children, color }) {
  return <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: color || 'var(--accent-ink)' }}>{children}</div>;
}
function Title({ children, size = 40, style }) {
  return <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, lineHeight: 1.08, color: 'var(--text-strong)', margin: '10px 0 0', letterSpacing: '-0.02em', textWrap: 'balance', ...style }}>{children}</h2>;
}
function Mark({ children }) {
  return <span style={{ backgroundImage: 'linear-gradient(transparent 62%, var(--rosa-200) 62%, var(--rosa-200) 92%, transparent 92%)', padding: '0 4px', margin: '0 -4px' }}>{children}</span>;
}
function SectionHead({ eyebrow, title, action }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 32 }}>
      <div><Eyebrow>{eyebrow}</Eyebrow><Title>{title}</Title></div>
      {action}
    </div>
  );
}

function Hero({ shop, C }) {
  const { Button } = C;
  const trust = [['truck', 'Envio para todo o Brasil'], ['shield', 'Compra segura'], ['scissors', 'Acabamento de ateliê']];
  return (
    <section className="atelier-hero" style={{ position: 'relative', overflow: 'hidden' }}>
      <img src={window.ASSETS + 'simbolo-cor.png'} alt="" aria-hidden="true" style={{ position: 'absolute', right: '-4%', top: '-8%', width: 520, opacity: 0.12, transform: 'rotate(-12deg)', pointerEvents: 'none' }} />
      <div className="atelier-hero-content" style={{ position: 'relative', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '96px 24px 104px', display: 'grid', gridTemplateColumns: 'minmax(0,1.1fr) minmax(0,0.9fr)', gap: 56, alignItems: 'center' }}>
        <div style={{ animation: 'fz-fade-up var(--dur-slow) var(--ease-out)' }}>
          <Eyebrow><img src={window.ASSETS + 'simbolo-cor.png'} alt="" style={{ width: 22 }} />Ateliê infantil · Petrópolis</Eyebrow>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 68, lineHeight: 1.0, letterSpacing: '-0.03em', color: 'var(--text-strong)', margin: '20px 0 0', textWrap: 'balance' }}>
            Vestidos que viram <Mark>memória</Mark>.
          </h1>
          <p style={{ fontSize: 19, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 480, margin: '22px 0 32px', textWrap: 'pretty' }}>
            Peças feitas com carinho para festas e fantasias — e uma prova virtual com IA para ver o modelo na criança antes de comprar.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => shop.go('category', 'Vestidos')} iconRight={<window.Icon d="arrow" size={18} />}>Ver vestidos</Button>
            <Button variant="secondary" size="lg" onClick={() => shop.openTryOn()} iconLeft={<window.Icon d="sparkle" size={18} />}>Testar prova virtual</Button>
          </div>
          <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginTop: 36, color: 'var(--text-muted)', fontSize: 14, fontWeight: 600 }}>
            {trust.map(([i, t]) => <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><window.Icon d={i} size={18} color="var(--accent)" />{t}</span>)}
          </div>
        </div>
        <div className="atelier-hero-mascot" style={{ position: 'relative', justifySelf: 'end', alignSelf: 'end' }}>
          <img src={window.ASSETS + 'mascote-estrela.png'} alt="Mascote de coração e sol da Annapê Ateliê" style={{ width: 180, maxWidth: '100%', filter: 'drop-shadow(0 16px 24px rgba(0,0,0,0.14))', animation: 'fz-float var(--float-dur) var(--ease-soft) infinite' }} />
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = [...window.TICKER, ...window.TICKER];
  return (
    <div style={{ background: 'var(--brand)', overflow: 'hidden' }}
      onMouseEnter={(e) => { const t = e.currentTarget.firstChild; if (t) t.style.animationPlayState = 'paused'; }}
      onMouseLeave={(e) => { const t = e.currentTarget.firstChild; if (t) t.style.animationPlayState = 'running'; }}>
      <div style={{ display: 'flex', whiteSpace: 'nowrap', width: 'max-content', animation: 'fz-marquee 32s linear infinite' }}>
        {items.map((it, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 22, padding: '14px 22px', color: 'var(--text-on-brand)', fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 17 }}>
            {it}<img src={window.ASSETS + 'simbolo-preto.png'} alt="" style={{ width: 20, opacity: 0.7 }} />
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: '@keyframes fz-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}' }} />
    </div>
  );
}

function Categories({ shop, C }) {
  const { CategoryCard, Button } = C;
  return (
    <Section>
      <SectionHead eyebrow="Escolha por ocasião" title="Para cada festa, uma fantasia."
        action={<Button variant="ghost" onClick={() => shop.go('category', 'Temas')} iconRight={<window.Icon d="arrow" size={18} />}>Todas as categorias</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16 }}>
        {window.CATEGORIES.map((c) => <CategoryCard key={c.label} {...c} onClick={(e) => { e.preventDefault(); shop.go('category', 'Temas'); }} />)}
      </div>
    </Section>
  );
}

// Draggable before/after comparison. `before` / `after` are React nodes filling the frame.
function BeforeAfter({ before, after, initial = 50, labels = ['Antes', 'Prévia IA'], ratio = '4 / 5', radius = 20 }) {
  const [x, setX] = React.useState(initial);
  const ref = React.useRef(null);
  const drag = React.useRef(false);
  const move = (clientX) => { const r = ref.current.getBoundingClientRect(); setX(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100))); };
  const chip = { position: 'absolute', top: 14, padding: '6px 12px', borderRadius: 999, fontSize: 12, fontWeight: 800, letterSpacing: '0.04em', pointerEvents: 'none' };
  return (
    <div ref={ref} style={{ position: 'relative', aspectRatio: ratio, borderRadius: radius, overflow: 'hidden', userSelect: 'none', touchAction: 'none', background: 'var(--surface-sunken)', cursor: 'ew-resize' }}
      onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => drag.current && move(e.clientX)}
      onPointerUp={() => { drag.current = false; }}>
      <div style={{ position: 'absolute', inset: 0 }}>{after}</div>
      <div style={{ position: 'absolute', inset: 0, clipPath: `inset(0 ${100 - x}% 0 0)` }}>{before}</div>
      <span style={{ ...chip, left: 14, background: 'rgba(24,18,20,0.66)', color: '#FCF8F5' }}>{labels[0]}</span>
      <span style={{ ...chip, right: 14, background: 'var(--brand)', color: 'var(--text-on-brand)' }}>{labels[1]}</span>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${x}%`, width: 3, marginLeft: -1.5, background: '#FCF8F5', boxShadow: '0 0 12px rgba(0,0,0,0.25)', pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: '50%', left: '50%', width: 44, height: 44, marginLeft: -22, marginTop: -22, borderRadius: 999, background: '#FCF8F5', color: '#2E2226', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}><window.Icon d="compare" size={20} /></span>
      </div>
    </div>
  );
}

function ProvaBento({ shop, C }) {
  const { Button, CreditCounter } = C;
  const steps = [
    ['Escolha o vestido', 'Qualquer modelo da vitrine.'],
    ['Envie uma foto', 'Corpo inteiro, de frente, com boa luz.'],
    ['Veja a prévia', 'Compare o antes e depois e decida.'],
  ];
  return (
    <Section bg="var(--bg-tint)">
      <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,0.9fr) minmax(0,1.1fr)', gap: 56, alignItems: 'center' }}>
        <div style={{ position: 'relative', maxWidth: 420, width: '100%', justifySelf: 'center' }}>
          <BeforeAfter initial={46}
            before={<img src={window.ASSETS + 'foto-exemplo-crianca.png'} alt="Criança usando uma roupa básica para comparação da prova virtual" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />}
            after={<img src={window.ASSETS + 'foto-exemplo-crianca-vestido-rosa.png'} alt="Mesma criança usando o vestido princesa rosa na simulação de prova virtual" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />} />
          <img src={window.ASSETS + 'mascote-prova-virtual.png'} alt="" style={{ position: 'absolute', right: -52, bottom: -36, width: 150, pointerEvents: 'none', filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.12))' }} />
        </div>
        <div>
          <Eyebrow><window.Icon d="sparkle" size={15} />Prova virtual com IA</Eyebrow>
          <Title size={44}>Veja o vestido na criança <Mark>antes</Mark> de comprar.</Title>
          <p style={{ fontSize: 17, color: 'var(--text-muted)', maxWidth: 520, lineHeight: 1.65, margin: '16px 0 28px' }}>
            Arraste a linha para comparar. É uma simulação visual para ajudar na escolha — a magia ajuda, mas a decisão é sua.
          </p>
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map(([t, d], i) => (
              <li key={t} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16, alignItems: 'center', padding: '14px 0', borderTop: i ? '1px solid var(--line-200)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 30, color: 'var(--accent)' }}>0{i + 1}</span>
                <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 19, color: 'var(--text-strong)' }}>{t}</div><div style={{ fontSize: 14.5, color: 'var(--text-muted)', marginTop: 2 }}>{d}</div></div>
              </li>
            ))}
          </ol>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => shop.openTryOn()} iconLeft={<window.Icon d="sparkle" size={18} />}>Começar prova virtual</Button>
            <CreditCounter remaining={shop.credits} total={3} />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Featured({ shop, C }) {
  const { ProductCard, Button } = C;
  return (
    <Section>
      <SectionHead eyebrow="Destaques do ateliê" title="Os queridinhos da estação."
        action={<Button variant="ghost" onClick={() => shop.go('category', 'Novidades')} iconRight={<window.Icon d="arrow" size={18} />}>Ver tudo</Button>} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
        {window.PRODUCTS.slice(0, 4).map((p) => (
          <div key={p.id} className="atelier-product-tile">
            <ProductCard {...p} favorite={!!shop.favs[p.id]} onFavorite={() => shop.toggleFav(p.id)}
              onBuy={() => shop.addToCart(p, p.sizes[1] || p.sizes[0])} onTryOn={() => shop.openTryOn(p)} />
            <button type="button" onClick={() => shop.openProduct(p)}>Ver detalhes de {p.name}</button>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Atelie() {
  return (
    <Section bg="var(--bg-cream)">
      <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'center' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16, alignItems: 'end' }}>
          <div style={{ aspectRatio: '3 / 4', borderRadius: '999px 999px 20px 20px', overflow: 'hidden' }}><img src={window.ASSETS + 'atelie-maos-costurando.png'} alt="Mãos costurando um vestido infantil rosa no ateliê" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div style={{ aspectRatio: '1', borderRadius: 20, overflow: 'hidden' }}><img src={window.ASSETS + 'detalhe-tecido-renda.png'} alt="Detalhe de tule, renda e bordado floral de um vestido infantil" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
        </div>
        <div>
          <Eyebrow>Sobre o ateliê</Eyebrow>
          <Title size={44}>Cada peça nasce com carinho, ponto a ponto.</Title>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--text-body)', maxWidth: 520, margin: '18px 0 0', textWrap: 'pretty' }}>
            A Annapê Ateliê reúne vestidos e fantasias infantis com acabamento cuidadoso e tecidos gostosos de vestir. Unimos o feito à mão com uma experiência visual que ajuda famílias a escolherem com mais segurança e encanto.
          </p>
          <img src={window.ASSETS + 'simbolo-cor.png'} alt="" style={{ width: 64, marginTop: 28 }} />
        </div>
      </div>
    </Section>
  );
}

function Reviews({ C }) {
  const { Rating } = C;
  const revs = [
    { q: 'A prévia ajudou muito a escolher o vestido certo.', n: 'Camila M.', c: 'Petrópolis, RJ' },
    { q: 'Minha filha amou se ver no modelo antes da compra.', n: 'Renata S.', c: 'Belo Horizonte, MG' },
    { q: 'Acabamento lindo e chegou muito bem embalado.', n: 'Patrícia L.', c: 'Curitiba, PR' },
  ];
  return (
    <Section>
      <SectionHead eyebrow="Quem já vestiu" title="Famílias que escolheram com segurança." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
        {revs.map((r) => (
          <figure key={r.n} style={{ margin: 0, background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Rating value={5} />
            <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 21, lineHeight: 1.35, color: 'var(--text-strong)', flex: 1 }}>“{r.q}”</blockquote>
            <figcaption style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ width: 40, height: 40, borderRadius: 999, background: 'var(--rosa-100)', color: 'var(--brand-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>{r.n[0]}</span>
              <div><div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-strong)' }}>{r.n}</div><div style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{r.c}</div></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

function ContactCTA({ shop, C }) {
  const { Button } = C;
  return (
    <Section pad="0 24px 96px">
      <div className="atelier-stack-mobile atelier-contact-cta" style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-inverse)', color: 'var(--text-on-inverse)', borderRadius: 28, padding: '56px 56px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 32, alignItems: 'center' }}>
        <img src={window.ASSETS + 'simbolo-cor.png'} alt="" aria-hidden="true" style={{ position: 'absolute', right: 180, top: -40, width: 260, opacity: 0.18, transform: 'rotate(14deg)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em', maxWidth: 560 }}>Vamos conversar sobre a festa?</div>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.8, margin: '12px 0 28px', maxWidth: 520 }}>Conta pra gente a ocasião, a idade e a data. Respondemos rapidinho pelo WhatsApp.</p>
          <Button variant="primary" size="lg" onClick={() => shop.go('contato', 'Contato')} iconRight={<window.Icon d="arrow" size={18} />}>Começar conversa</Button>
        </div>
        <img src={window.ASSETS + 'mascote-base.png'} alt="" style={{ position: 'relative', width: 190, animation: 'fz-float var(--float-dur) var(--ease-soft) infinite' }} />
      </div>
    </Section>
  );
}

Object.assign(window, { Home, Section, Eyebrow, Title, Mark, SectionHead, BeforeAfter });
