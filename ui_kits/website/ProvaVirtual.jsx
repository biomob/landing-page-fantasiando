// Prova Virtual — full-screen wizard: Entrar → Vestido → Foto → Prévia, plus a saved gallery.
const PV_STEPS = ['Entrar', 'Vestido', 'Foto', 'Prévia'];
const PV_TIPS = ['Ajustando o caimento do tecido…', 'Combinando cores e luz da foto…', 'Conferindo proporções…', 'Quase pronto — capricho de ateliê.'];

function ProvaVirtual() {
  const shop = window.useShop();
  const [view, setView] = React.useState('wizard');
  const [step, setStep] = React.useState(shop.user ? 1 : 0);
  const [photo, setPhoto] = React.useState(null); // { name, url }
  const [phase, setPhase] = React.useState('idle'); // idle | loading | done | nocredits
  const [progress, setProgress] = React.useState(0);
  const picked = shop.selected;

  const generate = () => {
    if (shop.credits <= 0) { setStep(3); setPhase('nocredits'); return; }
    setStep(3); setPhase('loading'); setProgress(0);
    const id = setInterval(() => setProgress((x) => {
      if (x >= 1) {
        clearInterval(id); shop.setCredits((c) => c - 1); setPhase('done');
        shop.setGallery((g) => [{ id: Date.now(), product: picked, photo, date: new Date() }, ...g]);
        return 1;
      }
      return Math.min(1, x + 0.06);
    }), 180);
  };
  const reachable = (k) => (k === 0 ? !shop.user : shop.user && (k <= 1 || (k === 2) || (k === 3 && phase === 'done')));

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'var(--bg-base)' }}>
      <div style={{ borderBottom: '1px solid var(--line-200)', background: 'var(--surface-card)' }}>
        <div className="atelier-wizard-header" style={{ maxWidth: 'var(--container-wide)', margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-strong)' }}>
            <span style={{ width: 34, height: 34, borderRadius: 999, background: 'var(--brand)', color: 'var(--text-on-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><window.Icon d="sparkle" size={17} /></span>
            Prova virtual
          </div>
          {view === 'wizard' ? (
            <ol className="atelier-wizard-steps" style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center', gap: 6, flex: 1, justifyContent: 'center' }}>
              {PV_STEPS.map((s, k) => {
                const done = k < step || (k === 0 && shop.user);
                const cur = k === step;
                return (
                  <React.Fragment key={s}>
                    {k > 0 && <span style={{ width: 28, height: 2, borderRadius: 2, background: done || cur ? 'var(--brand)' : 'var(--line-200)' }} />}
                    <li>
                      <button disabled={!reachable(k)} onClick={() => setStep(k)} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8, border: 'none', background: cur ? 'var(--rosa-100)' : 'transparent', padding: '6px 12px 6px 6px', borderRadius: 999,
                        cursor: reachable(k) ? 'pointer' : 'default', fontFamily: 'var(--font-body)', fontWeight: cur ? 800 : 600, fontSize: 14, color: cur ? 'var(--brand-ink)' : done ? 'var(--text-body)' : 'var(--text-subtle)',
                      }}>
                        <span style={{ width: 26, height: 26, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12.5, fontWeight: 800, background: done ? 'var(--brand)' : cur ? 'var(--surface-card)' : 'var(--surface-sunken)', color: done ? 'var(--text-on-brand)' : 'inherit', border: cur ? '1.5px solid var(--brand)' : '1.5px solid transparent' }}>
                          {done && !cur ? <window.Icon d="check" size={14} stroke={3} /> : k + 1}
                        </span>{s}
                      </button>
                    </li>
                  </React.Fragment>
                );
              })}
            </ol>
          ) : <div style={{ flex: 1 }} />}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <window.FantasiandoDesignSystem_43d79f.CreditCounter remaining={shop.credits} total={3} compact />
            {shop.user && (
              <button onClick={() => setView(view === 'gallery' ? 'wizard' : 'gallery')} style={pvPill(view === 'gallery')}>
                <window.Icon d={view === 'gallery' ? 'sparkle' : 'grid'} size={16} />{view === 'gallery' ? 'Nova prova' : `Minhas prévias${shop.gallery.length ? ' · ' + shop.gallery.length : ''}`}
              </button>
            )}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex' }}>
        {view === 'gallery' ? <PvGallery onNew={() => { setView('wizard'); setStep(1); setPhase('idle'); }} /> : (
          <div key={step} style={{ flex: 1, display: 'flex', animation: 'fz-fade-up var(--dur-slow) var(--ease-out)' }}>
            {step === 0 && <AuthPanel onDone={() => setStep(1)} />}
            {step === 1 && <PvDress onNext={() => setStep(2)} />}
            {step === 2 && <PvPhoto photo={photo} setPhoto={setPhoto} onBack={() => setStep(1)} onGenerate={generate} />}
            {step === 3 && <PvResult phase={phase} progress={progress} photo={photo} onRetry={() => { setStep(1); setPhase('idle'); }} onGallery={() => setView('gallery')} />}
          </div>
        )}
      </div>
    </div>
  );
}
const pvPill = (on) => ({ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '8px 14px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13.5, border: '1.5px solid var(--line-200)', background: on ? 'var(--rosa-100)' : 'var(--surface-card)', color: on ? 'var(--brand-ink)' : 'var(--text-body)' });
const pvWrap = { width: '100%', maxWidth: 'var(--container-max)', margin: '0 auto', padding: '48px 24px 64px' };
const pvH = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)', textWrap: 'balance' };
const pvSub = { fontSize: 16.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: '10px 0 0', maxWidth: 560 };

// ---------- Login / cadastro ----------
function AuthPanel({ onDone }) {
  const shop = window.useShop();
  const { Button, Input } = window.FantasiandoDesignSystem_43d79f;
  const [mode, setMode] = React.useState('criar');
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const submit = (e) => { e && e.preventDefault(); shop.setUser({ name: (nome || 'Pérola').split(' ')[0], email: email || 'perola@email.com' }); shop.showToast({ tone: 'success', title: mode === 'criar' ? 'Conta criada!' : 'Bem-vinda de volta!', text: 'Você tem 3 provas virtuais para usar.' }); onDone && onDone(); };
  const perks = [['sparkle', '3 provas virtuais grátis por conta'], ['lock', 'Fotos privadas, nunca exibidas publicamente'], ['trash', 'Exclua suas imagens quando quiser']];
  return (
    <div className="atelier-stack-mobile" style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', minHeight: 620 }}>
      <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--brand)', color: 'var(--text-on-brand)', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
        <img src={window.ASSETS + 'simbolo-branco.png'} alt="" aria-hidden="true" style={{ position: 'absolute', right: -60, top: -40, width: 360, opacity: 0.35, transform: 'rotate(-8deg)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75 }}>Prova virtual com IA</div>
          <h1 style={{ ...pvH, color: 'inherit', fontSize: 46, marginTop: 14, maxWidth: 440 }}>Crie sua conta e veja a magia acontecer.</h1>
          <ul style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {perks.map(([i, t]) => <li key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 16, fontWeight: 700 }}><span style={{ width: 36, height: 36, borderRadius: 999, background: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><window.Icon d={i} size={17} /></span>{t}</li>)}
          </ul>
        </div>
        <img src={window.ASSETS + 'mascote-prova-virtual.png'} alt="" style={{ position: 'relative', width: 220, alignSelf: 'flex-end', animation: 'fz-float var(--float-dur) var(--ease-soft) infinite' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px 24px' }}>
        <form onSubmit={submit} style={{ width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', padding: 4, borderRadius: 999, background: 'var(--surface-sunken)', border: '1px solid var(--line-200)' }}>
            {[['criar', 'Criar conta'], ['entrar', 'Entrar']].map(([k, l]) => (
              <button type="button" key={k} onClick={() => setMode(k)} style={{ border: 'none', borderRadius: 999, padding: '10px 0', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 14, background: mode === k ? 'var(--surface-card)' : 'transparent', color: mode === k ? 'var(--text-strong)' : 'var(--text-muted)', boxShadow: mode === k ? 'var(--shadow-sm)' : 'none' }}>{l}</button>
            ))}
          </div>
          <h2 style={{ ...pvH, fontSize: 30, marginTop: 8 }}>{mode === 'criar' ? 'Comece em 30 segundos' : 'Que bom te ver de novo'}</h2>
          <button type="button" onClick={submit} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, height: 48, borderRadius: 999, border: '1.5px solid var(--line-200)', background: 'var(--surface-card)', color: 'var(--text-strong)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>
            Continuar com Google
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-subtle)', fontSize: 13 }}><span style={{ flex: 1, height: 1, background: 'var(--line-200)' }} />ou com e-mail<span style={{ flex: 1, height: 1, background: 'var(--line-200)' }} /></div>
          {mode === 'criar' && <Input label="Seu nome" placeholder="Como podemos te chamar?" value={nome} onChange={(e) => setNome(e.target.value)} />}
          <Input label="E-mail" type="email" placeholder="voce@email.com" value={email} onChange={(e) => setEmail(e.target.value)} iconLeft={<window.Icon d="mail" size={18} />} />
          <Input label="Senha" type="password" placeholder="Mínimo 8 caracteres" value={senha} onChange={(e) => setSenha(e.target.value)} iconLeft={<window.Icon d="lock" size={18} />} />
          <Button type="submit" variant="primary" size="lg" fullWidth>{mode === 'criar' ? 'Criar conta e ganhar 3 provas' : 'Entrar'}</Button>
          <p style={{ fontSize: 12.5, color: 'var(--text-subtle)', lineHeight: 1.5, margin: 0, textAlign: 'center' }}>Ao continuar você concorda com os Termos e a Política de imagens da Annapê Ateliê.</p>
        </form>
      </div>
    </div>
  );
}

// ---------- 1 · Vestido ----------
function PvDress({ onNext }) {
  const shop = window.useShop();
  const { Button, PriceTag } = window.FantasiandoDesignSystem_43d79f;
  const picked = shop.selected;
  return (
    <div style={{ ...pvWrap, paddingBottom: 120 }}>
      <h1 style={pvH}>{shop.user ? `${shop.user.name}, qual vestido vamos provar?` : 'Qual vestido vamos provar?'}</h1>
      <p style={pvSub}>Escolha um modelo. Você pode trocar depois sem gastar crédito.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 18, marginTop: 32 }}>
        {window.PRODUCTS.map((p) => {
          const on = picked && picked.id === p.id;
          return (
            <button key={p.id} onClick={() => shop.setSelected(p)} style={{
              position: 'relative', textAlign: 'left', padding: 0, cursor: 'pointer', background: 'var(--surface-card)', borderRadius: 20, overflow: 'hidden',
              border: `2px solid ${on ? 'var(--brand)' : 'var(--line-200)'}`, boxShadow: on ? '0 0 0 4px var(--rosa-100)' : 'none', transition: 'all var(--dur-fast)', fontFamily: 'var(--font-body)',
            }}>
              <img src={p.image} alt="" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
              {on && <span style={{ position: 'absolute', top: 12, right: 12, width: 32, height: 32, borderRadius: 999, background: 'var(--brand)', color: 'var(--text-on-brand)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)' }}><window.Icon d="check" size={17} stroke={3} /></span>}
              <div style={{ padding: '12px 14px 14px' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16, color: 'var(--text-strong)', lineHeight: 1.2 }}>{p.name}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', marginTop: 4 }}>{window.fmtBRL(p.price)}</div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="atelier-pv-selected" style={{ position: 'fixed', left: '50%', bottom: 20, transform: 'translateX(-50%)', zIndex: 600, display: 'flex', alignItems: 'center', gap: 16, padding: '10px 10px 10px 12px', borderRadius: 999, background: 'var(--surface-raised)', border: '1px solid var(--line-200)', boxShadow: 'var(--shadow-lg)' }}>
        <img src={picked.image} alt="" style={{ width: 44, height: 44, borderRadius: 999, objectFit: 'cover' }} />
        <div style={{ minWidth: 160 }}><div style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 700 }}>Selecionado</div><div style={{ fontWeight: 800, fontSize: 14.5, color: 'var(--text-strong)' }}>{picked.name}</div></div>
        <Button variant="primary" onClick={onNext} iconRight={<window.Icon d="arrow" size={17} />}>Continuar</Button>
      </div>
    </div>
  );
}

// ---------- 2 · Foto ----------
function PvPhoto({ photo, setPhoto, onBack, onGenerate }) {
  const shop = window.useShop();
  const { Button, Checkbox } = window.FantasiandoDesignSystem_43d79f;
  const [consent, setConsent] = React.useState(false);
  const inputRef = React.useRef(null);
  const pick = (f) => { if (!f) { setPhoto({ name: 'foto-exemplo.jpg', url: null }); return; } setPhoto({ name: f.name, url: URL.createObjectURL(f) }); };
  const good = [['pv-ok-1', 'Corpo inteiro, de frente'], ['pv-ok-2', 'Luz boa, fundo simples']];
  const bad = [['pv-no-1', 'Cortada ou muito de perto'], ['pv-no-2', 'Escura ou com sombra forte'], ['pv-no-3', 'Objetos cobrindo a roupa']];
  const Ex = ({ id, label, ok }) => (
    <figure style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: 14, overflow: 'hidden', outline: `2px solid ${ok ? 'var(--success)' : 'var(--danger)'}`, outlineOffset: -2 }}>
        <window.Slot id={id} label={label} shape="rect" />
        <span style={{ position: 'absolute', top: 8, left: 8, width: 26, height: 26, borderRadius: 999, background: ok ? 'var(--success)' : 'var(--danger)', color: 'var(--surface-card)', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}><window.Icon d={ok ? 'check' : 'x'} size={15} stroke={3} /></span>
      </div>
      <figcaption style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--text-muted)', lineHeight: 1.3 }}>{label}</figcaption>
    </figure>
  );
  return (
    <div style={pvWrap}>
      <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 48, alignItems: 'start' }}>
        <div>
          <h1 style={pvH}>Agora, uma foto de corpo inteiro.</h1>
          <p style={pvSub}>A foto fica só na sua conta e serve apenas para gerar a prévia do <b style={{ color: 'var(--text-strong)' }}>{shop.selected.name}</b>.</p>
          <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => pick(e.target.files[0])} />
          <div onClick={() => inputRef.current.click()} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); pick(e.dataTransfer.files[0]); }}
            style={{ marginTop: 28, position: 'relative', aspectRatio: photo ? '4 / 5' : 'auto', maxWidth: photo ? 360 : 'none', borderRadius: 24, overflow: 'hidden', cursor: 'pointer', border: photo ? '1px solid var(--line-200)' : '2px dashed var(--rosa-300)', background: 'var(--rosa-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: photo ? 0 : '40px 24px', textAlign: 'center' }}>
            {photo ? (
              <>
                {photo.url ? <img src={photo.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <window.Slot id="pv-foto" label="Foto da criança" shape="rect" />}
                <span style={{ position: 'absolute', bottom: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', borderRadius: 999, background: 'var(--surface-raised)', fontSize: 13, fontWeight: 700, color: 'var(--text-strong)', boxShadow: 'var(--shadow-md)' }}>
                  <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center', color: 'var(--success)' }}><window.Icon d="check" size={15} stroke={3} />Foto pronta</span>
                  <span style={{ color: 'var(--brand-ink)' }}>Trocar</span>
                </span>
              </>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <img src={window.ASSETS + 'mascote-vazio.png'} alt="" style={{ width: 120, animation: 'fz-float var(--float-dur) var(--ease-soft) infinite' }} />
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--text-strong)' }}>Arraste a foto aqui</div>
                <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>ou toque para escolher · JPG ou PNG</div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 6, padding: '10px 18px', borderRadius: 999, background: 'var(--brand)', color: 'var(--text-on-brand)', fontWeight: 800, fontSize: 14 }}><window.Icon d="camera" size={17} />Escolher foto</span>
                <button onClick={(e) => { e.stopPropagation(); pick(null); }} style={{ border: 'none', background: 'none', color: 'var(--text-subtle)', fontSize: 12.5, textDecoration: 'underline', cursor: 'pointer', fontFamily: 'var(--font-body)' }}>usar foto de exemplo</button>
              </div>
            )}
          </div>
          <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 20, fontSize: 14, color: 'var(--text-muted)', cursor: 'pointer', lineHeight: 1.5 }}>
            <Checkbox checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>Autorizo o uso desta foto apenas para gerar a prévia. Posso excluir quando quiser.</span>
          </label>
          <div style={{ display: 'flex', gap: 12, marginTop: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <Button variant="secondary" onClick={onBack} iconLeft={<window.Icon d="back" size={17} />}>Vestido</Button>
            <Button variant="primary" size="lg" disabled={!photo || !consent} onClick={onGenerate} iconLeft={<window.Icon d="sparkle" size={18} />}>Gerar prévia · usa 1 crédito</Button>
          </div>
        </div>
        <aside style={{ background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 24, padding: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
            <img src={window.ASSETS + 'mascote-erro-foto.png'} alt="" style={{ width: 64 }} />
            <div><div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 20, color: 'var(--text-strong)' }}>Guia da foto boa</div><div style={{ fontSize: 14, color: 'var(--text-muted)' }}>Uma boa foto deixa a prévia muito mais fiel.</div></div>
          </div>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', color: 'var(--success)', marginBottom: 10 }}>ASSIM FICA ÓTIMO</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 22 }}>{good.map(([id, l]) => <Ex key={id} id={id} label={l} ok />)}</div>
          <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '0.08em', color: 'var(--danger)', marginBottom: 10 }}>EVITE</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>{bad.map(([id, l]) => <Ex key={id} id={id} label={l} />)}</div>
        </aside>
      </div>
    </div>
  );
}

// ---------- 3 · Prévia ----------
function PvResult({ phase, progress, photo, onRetry, onGallery }) {
  const shop = window.useShop();
  const { Button, MascotState, PriceTag } = window.FantasiandoDesignSystem_43d79f;
  const p = shop.selected;
  const tip = PV_TIPS[Math.min(PV_TIPS.length - 1, Math.floor(progress * PV_TIPS.length))];
  if (phase === 'loading') return <div style={{ ...pvWrap, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 520 }}><MascotState state="loading" size="lg" assetsPath={window.ASSETS} progress={progress} text={tip} /></div>;
  if (phase === 'nocredits') return (
    <div style={{ ...pvWrap, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 520 }}>
      <MascotState state="no-credits" size="lg" assetsPath={window.ASSETS} action={<div style={{ display: 'flex', gap: 12 }}><Button variant="primary" iconLeft={<window.Icon d="chat" size={16} />} onClick={() => shop.go('contato', 'Contato')}>Falar com o ateliê</Button><Button variant="secondary" onClick={onGallery}>Ver minhas prévias</Button></div>} />
    </div>
  );
  return (
    <div style={pvWrap}>
      <div className="atelier-stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,0.9fr)', gap: 56, alignItems: 'center' }}>
        <div style={{ maxWidth: 460, width: '100%', justifySelf: 'center' }}>
          <window.BeforeAfter initial={50}
            before={photo && photo.url ? <img src={photo.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> : <window.Slot id="pv-foto" label="Foto da criança" shape="rect" />}
            after={<img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />} />
          <p style={{ fontSize: 12.5, color: 'var(--text-subtle)', textAlign: 'center', marginTop: 12 }}>Arraste para comparar · Simulação visual — o caimento real pode variar.</p>
        </div>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'var(--success-soft)', color: 'var(--success)', fontSize: 13, fontWeight: 800 }}><window.Icon d="check" size={15} stroke={3} />Prévia pronta e salva</div>
          <h1 style={{ ...pvH, marginTop: 16 }}>Olha só como ficou o {p.name}!</h1>
          <div style={{ margin: '20px 0 28px' }}><PriceTag price={p.price} original={p.original} installments={3} size="lg" /></div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" onClick={() => shop.addToCart(p, p.sizes[1] || p.sizes[0])} iconLeft={<window.Icon d="cart" size={18} />}>Comprar este modelo</Button>
            <Button variant="secondary" size="lg" onClick={onRetry} iconLeft={<window.Icon d="refresh" size={18} />}>Provar outro</Button>
          </div>
          <div style={{ display: 'flex', gap: 20, marginTop: 24, flexWrap: 'wrap' }}>
            <button onClick={onGallery} style={pvLink}><window.Icon d="grid" size={16} />Ver minhas prévias</button>
            <button onClick={() => shop.showToast({ tone: 'info', title: 'Download iniciado', text: 'A prévia foi salva no seu aparelho.' })} style={pvLink}><window.Icon d="download" size={16} />Baixar imagem</button>
          </div>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--line-200)', fontSize: 14, color: 'var(--text-muted)', display: 'flex', gap: 10, alignItems: 'center' }}>
            <window.FantasiandoDesignSystem_43d79f.CreditCounter remaining={shop.credits} total={3} compact />
            {shop.credits > 0 ? 'Você ainda pode testar outros modelos.' : 'Suas provas acabaram — fale com o ateliê.'}
          </div>
        </div>
      </div>
    </div>
  );
}
const pvLink = { display: 'inline-flex', alignItems: 'center', gap: 7, border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--brand-ink)' };

// ---------- Galeria ----------
function PvGallery({ onNew }) {
  const shop = window.useShop();
  const { Button, MascotState } = window.FantasiandoDesignSystem_43d79f;
  const [open, setOpen] = React.useState(null);
  const g = shop.gallery;
  const del = (id) => { shop.setGallery((x) => x.filter((h) => h.id !== id)); setOpen(null); shop.showToast({ tone: 'info', title: 'Prévia excluída', text: 'A imagem foi removida da sua conta.' }); };
  return (
    <div style={pvWrap}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div><h1 style={pvH}>Minhas prévias</h1><p style={pvSub}>Só você vê estas imagens. Exclua quando quiser.</p></div>
        {g.length > 0 && <Button variant="primary" onClick={onNew} iconLeft={<window.Icon d="sparkle" size={17} />}>Nova prova</Button>}
      </div>
      {g.length === 0 ? (
        <div style={{ marginTop: 40, background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 24, padding: 48 }}>
          <MascotState state="empty" assetsPath={window.ASSETS} title="Nenhuma prévia ainda" text="As simulações que você gerar ficam guardadas aqui." action={<Button variant="primary" onClick={onNew}>Fazer minha primeira prova</Button>} />
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 20, marginTop: 32 }}>
          {g.map((h) => (
            <figure key={h.id} style={{ margin: 0, background: 'var(--surface-card)', border: '1px solid var(--line-200)', borderRadius: 20, overflow: 'hidden' }}>
              <button onClick={() => setOpen(h)} style={{ display: 'block', width: '100%', padding: 0, border: 'none', cursor: 'zoom-in', background: 'none' }}>
                <img src={h.product.image} alt="" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', display: 'block' }} />
              </button>
              <figcaption style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 14, color: 'var(--text-strong)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{h.product.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--text-subtle)' }}>{h.date.toLocaleDateString('pt-BR')}</div>
                </div>
                <button aria-label="Excluir" onClick={() => del(h.id)} style={{ border: 'none', background: 'var(--surface-sunken)', width: 34, height: 34, borderRadius: 999, cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><window.Icon d="trash" size={16} /></button>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      {open && (
        <div onClick={() => setOpen(null)} style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'var(--overlay)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: 420, maxWidth: '100%', background: 'var(--surface-raised)', borderRadius: 24, padding: 16, boxShadow: 'var(--shadow-lg)' }}>
            <window.BeforeAfter before={open.photo && open.photo.url ? <img src={open.photo.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <window.Slot id="pv-foto" label="Foto da criança" shape="rect" />} after={<img src={open.product.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />} />
            <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
              <Button variant="primary" style={{ flex: 1 }} onClick={() => { shop.addToCart(open.product, open.product.sizes[0]); setOpen(null); }}>Comprar</Button>
              <Button variant="secondary" onClick={() => del(open.id)} iconLeft={<window.Icon d="trash" size={16} />}>Excluir</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ProvaVirtual, AuthPanel });
