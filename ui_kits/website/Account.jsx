// Account screen — user data, orders, credits, saved results, privacy.
function Account() {
  const shop = window.useShop();
  const C = window.FantasiandoDesignSystem_43d79f;
  const { Button, CreditCounter, Badge, MascotState, Input, Checkbox } = C;
  const { Section, Eyebrow, Title } = window;
  const [tab, setTab] = React.useState('Visão geral');
  const tabs = ['Visão geral', 'Pedidos', 'Provas virtuais', 'Privacidade'];
  if (!shop.user) return <div style={{ flex: 1, display: 'flex' }}><window.AuthPanel /></div>;

  const orders = [
    { id: '#AN-2041', date: '02 jun 2026', items: 'Vestido Princesa Aurora · Tam 6', status: 'A caminho', tone: 'sky', total: 129.9 },
    { id: '#AN-1987', date: '18 mai 2026', items: 'Fantasia Arco-Íris · Tam 8', status: 'Entregue', tone: 'success', total: 139.9 },
  ];

  return (
    <div>
      <section style={{ background: 'var(--grad-hero)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 24px', display: 'flex', alignItems: 'center', gap: 18 }}>
          <img src={window.ASSETS + 'mascote-icone.png'} alt="" style={{ width: 72, height: 72, borderRadius: 999, background: 'var(--rosa-100)', boxShadow: 'var(--shadow-sm)', padding: 4 }} />
          <div style={{ flex: 1 }}>
            <Eyebrow>Minha conta</Eyebrow>
            <Title size={28}>Olá, {shop.user.name}!</Title>
          </div>
          <CreditCounter remaining={shop.credits} total={3} />
        </div>
      </section>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 24px', borderBottom: '1px solid var(--line-200)', display: 'flex', gap: 4 }}>
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: '16px 16px', border: 'none', background: 'transparent', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontWeight: tab === t ? 800 : 600, fontSize: 15,
            color: tab === t ? 'var(--brand-ink)' : 'var(--text-muted)',
            borderBottom: tab === t ? '3px solid var(--violet-500)' : '3px solid transparent', marginBottom: -1,
          }}>{t}</button>
        ))}
      </div>

      <Section>
        {tab === 'Visão geral' && (
          <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <Card title="Dados da conta">
              <Field label="Nome" value={shop.user.name} />
              <Field label="E-mail" value={shop.user.email} />
              <Field label="Cidade" value="Petrópolis, RJ" />
              <Button variant="secondary" size="sm" style={{ marginTop: 6 }}>Editar dados</Button>
            </Card>
            <Card title="Provas virtuais">
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.6, margin: '0 0 14px' }}>Cada conta tem 3 provas virtuais. Use para simular o vestido antes de comprar.</p>
              <CreditCounter remaining={shop.credits} total={3} />
              <Button variant="primary" size="sm" style={{ marginTop: 16 }} onClick={() => shop.go('prova', 'Prova virtual')} iconLeft={<window.Icon d="sparkle" size={16} />}>Fazer uma prova</Button>
            </Card>
            <Card title="Últimos pedidos" wide>
              {orders.map((o) => <OrderRow key={o.id} o={o} C={C} />)}
            </Card>
          </div>
        )}
        {tab === 'Pedidos' && (
          <Card title="Seus pedidos">
            {orders.map((o) => <OrderRow key={o.id} o={o} C={C} />)}
          </Card>
        )}
        {tab === 'Provas virtuais' && (
          <Card title="Resultados salvos">
            <MascotState state="empty" size="sm" assetsPath={window.ASSETS} title="Nenhum resultado salvo" text="Gere uma prova virtual e salve a prévia para ver aqui depois." action={<Button variant="primary" onClick={() => shop.go('prova', 'Prova virtual')}>Ir para a prova virtual</Button>} />
          </Card>
        )}
        {tab === 'Privacidade' && (
          <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, alignItems: 'start' }}>
            <Card title="Privacidade e imagens">
              <p style={{ fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.65, margin: '0 0 16px' }}>
                As fotos enviadas são usadas apenas para gerar a prévia da prova virtual. Não exibimos fotos de crianças em áreas públicas. Você pode excluir suas imagens e resultados quando quiser.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <Checkbox label="Quero receber novidades e reposições por e-mail" checked onChange={() => {}} />
                <Checkbox label="Autorizo o uso da foto apenas para a prova virtual" checked onChange={() => {}} />
              </div>
              <Button variant="secondary" size="sm" style={{ marginTop: 18 }} iconLeft={<window.Icon d="trash" size={16} />} onClick={() => shop.showToast({ tone: 'info', title: 'Imagens excluídas', text: 'Todas as suas fotos e prévias foram removidas.' })}>Excluir minhas imagens</Button>
            </Card>
            <div style={{ background: 'var(--violet-50)', border: '1px solid var(--violet-100)', borderRadius: 'var(--radius-lg)', padding: 22, textAlign: 'center' }}>
              <img src={window.ASSETS + 'mascote-base.png'} alt="" style={{ width: 130 }} />
              <p style={{ fontSize: 14, color: 'var(--violet-700)', fontWeight: 700, margin: '8px 0 0', lineHeight: 1.5 }}>A magia ajuda, mas a decisão — e a privacidade — são sempre suas.</p>
            </div>
          </div>
        )}
      </Section>
    </div>
  );
}

function Card({ title, children, wide }) {
  return (
    <div style={{ gridColumn: wide ? '1 / -1' : 'auto', background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 'var(--radius-lg)', padding: 22, boxShadow: 'var(--shadow-card)' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-strong)', marginBottom: 16 }}>{title}</div>
      {children}
    </div>
  );
}
function Field({ label, value }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ fontSize: 15, color: 'var(--text-body)', marginTop: 2 }}>{value}</div>
    </div>
  );
}
function OrderRow({ o, C }) {
  const { Badge, PriceTag } = C;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0', borderTop: '1px solid var(--line-100)' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-strong)' }}>{o.id}</span>
          <Badge tone={o.tone} dot>{o.status}</Badge>
        </div>
        <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 3 }}>{o.items} · {o.date}</div>
      </div>
      <PriceTag price={o.total} size="sm" />
    </div>
  );
}
Object.assign(window, { Account });
