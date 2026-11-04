// Contato — conversational form: one typed question, one answer, next.
const CONTATO_STEPS = [
  { key: 'nome', q: 'Oi! Que bom ter você por aqui. Como você se chama?', type: 'text', ph: 'Digite seu nome', valid: (v) => v.trim().length >= 2 || 'Conta pra gente seu nome.' },
  { key: 'whatsapp', q: 'Prazer, {nome}! Qual é o seu WhatsApp?', type: 'tel', ph: '(24) 99999-9999', valid: (v) => v.replace(/\D/g, '').length >= 10 || 'Confere o número com DDD?' },
  { key: 'email', q: 'E um e-mail, caso a gente precise enviar fotos ou orçamento?', type: 'email', ph: 'voce@email.com', valid: (v) => /.+@.+\..+/.test(v) || 'Esse e-mail parece incompleto.' },
  { key: 'idade', q: 'Qual a idade ou o tamanho da criança?', type: 'chips', options: ['1 ano', '2 anos', '4 anos', '6 anos', '8 anos', '10 anos', '12 anos'], ph: 'Ou escreva: ex. 5 anos, veste 6', valid: (v) => !!v.trim() || 'Escolha uma opção ou escreva.' },
  { key: 'ocasiao', q: 'Que delícia! E qual é a ocasião?', type: 'chips', options: ['Aniversário', 'Festa junina', 'Daminha / casamento', 'Fantasia temática', 'Ensaio de fotos', 'Dia a dia'], ph: 'Ou conte com suas palavras', valid: (v) => !!v.trim() || 'Escolha uma opção ou escreva.' },
  { key: 'data', q: 'Quando vai ser a festa?', type: 'date', valid: (v) => !!v || 'Escolha a data (pode ser aproximada).' },
  { key: 'mensagem', q: 'Quer contar mais alguma coisa? Tema, cores, uma ideia que você viu…', type: 'textarea', ph: 'Escreva à vontade (opcional)', optional: true, valid: () => true },
];
const maskTel = (v) => { const d = v.replace(/\D/g, '').slice(0, 11); if (d.length <= 2) return d ? '(' + d : ''; if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`; return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`; };

function Typewriter({ text, onDone }) {
  const [n, setN] = React.useState(0);
  React.useEffect(() => {
    setN(0);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(text.length); onDone && onDone(); return; }
    let i = 0;
    const id = setInterval(() => { i += 1; setN(i); if (i >= text.length) { clearInterval(id); onDone && onDone(); } }, 24);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {text.slice(0, n)}
      <span style={{ display: 'inline-block', width: 3, height: '0.9em', marginLeft: 4, verticalAlign: '-0.08em', borderRadius: 2, background: 'var(--brand)', animation: 'fz-caret 1s steps(1) infinite' }} />
    </span>
  );
}

function Contato() {
  const shop = window.useShop();
  const { Button, MascotState } = window.FantasiandoDesignSystem_43d79f;
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [val, setVal] = React.useState('');
  const [err, setErr] = React.useState('');
  const [typed, setTyped] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const inputRef = React.useRef(null);
  const total = CONTATO_STEPS.length;
  const review = i >= total;
  const step = CONTATO_STEPS[i];
  const firstName = (answers.nome || '').trim().split(' ')[0];
  const question = step ? step.q.replace('{nome}', firstName) : '';

  React.useEffect(() => { setTyped(false); setErr(''); setVal(step ? (answers[step.key] || '') : ''); }, [i]);
  React.useEffect(() => { if (typed && inputRef.current) inputRef.current.focus(); }, [typed]);

  const commit = (v = val) => {
    const ok = step.valid(v);
    if (ok !== true) { setErr(ok); return; }
    setAnswers((a) => ({ ...a, [step.key]: v }));
    setI((x) => x + 1);
  };
  const onKey = (e) => {
    if (e.key === 'Enter' && !(step.type === 'textarea' && e.shiftKey)) { e.preventDefault(); commit(); }
  };
  const fmtDate = (d) => { if (!d) return ''; const [y, m, dd] = d.split('-'); return `${dd}/${m}/${y}`; };

  const fieldStyle = {
    width: '100%', border: 'none', borderBottom: `2px solid ${err ? 'var(--danger)' : 'var(--line-200)'}`, background: 'transparent', outline: 'none',
    fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 30, color: 'var(--text-strong)', padding: '10px 0 12px', transition: 'border-color var(--dur-base)',
  };

  if (sent) {
    return (
      <Stage>
        <div style={{ textAlign: 'center', animation: 'fz-fade-up var(--dur-slow) var(--ease-out)' }}>
          <MascotState state="success" assetsPath={window.ASSETS} size="lg" title={`Recebemos, ${firstName}!`} text="Nossa equipe vai te chamar no WhatsApp em breve para conversar sobre a festa."
            action={<div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}><Button variant="primary" onClick={() => shop.go('category', 'Vestidos')}>Ver vestidos</Button><Button variant="secondary" onClick={() => shop.go('home')}>Voltar ao início</Button></div>} />
        </div>
      </Stage>
    );
  }

  return (
    <Stage progress={Math.min(i, total) / total}>
      <div style={{ width: '100%', maxWidth: 760 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 36 }}>
          <button onClick={() => (i > 0 ? setI(i - 1) : shop.go('home'))} style={ghostBtn}><window.Icon d="back" size={18} />{i > 0 ? 'Voltar' : 'Início'}</button>
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em', color: 'var(--text-subtle)' }}>{review ? 'REVISÃO' : `${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`}</span>
        </div>

        {!review && (
          <div key={i} style={{ animation: 'fz-fade-up var(--dur-slow) var(--ease-out)' }}>
            <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <img src={window.ASSETS + 'mascote-icone.png'} alt="" style={{ width: 52, height: 52, flexShrink: 0, borderRadius: 999, background: 'var(--rosa-100)', padding: 4 }} />
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, lineHeight: 1.12, letterSpacing: '-0.02em', color: 'var(--text-strong)', textWrap: 'balance', minHeight: '2.24em' }}>
                <Typewriter text={question} onDone={() => setTyped(true)} />
              </h1>
            </div>
            <div style={{ marginTop: 36, marginLeft: 70, opacity: typed ? 1 : 0, transform: typed ? 'none' : 'translateY(8px)', transition: 'opacity var(--dur-slow), transform var(--dur-slow) var(--ease-out)' }}>
              {step.type === 'chips' && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 20 }}>
                  {step.options.map((o) => {
                    const on = val === o;
                    return <button key={o} onClick={() => { setVal(o); setErr(''); setTimeout(() => commit(o), 220); }} style={{
                      padding: '12px 20px', borderRadius: 999, cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 16,
                      border: `1.5px solid ${on ? 'var(--brand)' : 'var(--line-200)'}`, background: on ? 'var(--brand)' : 'var(--surface-card)', color: on ? 'var(--text-on-brand)' : 'var(--text-body)',
                      transition: 'all var(--dur-fast)',
                    }}>{o}</button>;
                  })}
                </div>
              )}
              {step.type === 'textarea' ? (
                <textarea ref={inputRef} rows={3} value={val} placeholder={step.ph} onKeyDown={onKey} onChange={(e) => setVal(e.target.value)} style={{ ...fieldStyle, fontSize: 24, resize: 'none', lineHeight: 1.4 }} />
              ) : step.type === 'date' ? (
                <input ref={inputRef} type="date" value={val} onKeyDown={onKey} onChange={(e) => { setVal(e.target.value); setErr(''); }} style={{ ...fieldStyle, colorScheme: shop.theme }} />
              ) : (
                <input ref={inputRef} type={step.type === 'chips' ? 'text' : step.type} value={val} placeholder={step.ph} onKeyDown={onKey}
                  onChange={(e) => { setVal(step.type === 'tel' ? maskTel(e.target.value) : e.target.value); setErr(''); }} style={{ ...fieldStyle, fontSize: step.type === 'chips' ? 22 : 30 }} />
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, minHeight: 46 }}>
                <Button variant="primary" onClick={() => commit()} iconRight={<window.Icon d="check" size={17} />}>{step.optional && !val ? 'Pular' : 'OK'}</Button>
                <span style={{ fontSize: 13, color: 'var(--text-subtle)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>ou aperte <kbd style={kbd}>Enter ↵</kbd></span>
                {err && <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--danger)', marginLeft: 'auto' }}>{err}</span>}
              </div>
            </div>
          </div>
        )}

        {review && (
          <div style={{ animation: 'fz-fade-up var(--dur-slow) var(--ease-out)' }}>
            <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>Tudo certo, {firstName}? Confere pra gente.</h1>
            <dl style={{ margin: '32px 0 32px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', columnGap: 24 }}>
              {CONTATO_STEPS.map((s, k) => (
                <React.Fragment key={s.key}>
                  <dt style={{ ...rowCell, fontSize: 13, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-subtle)' }}>{({ nome: 'Nome', whatsapp: 'WhatsApp', email: 'E-mail', idade: 'Idade', ocasiao: 'Ocasião', data: 'Data', mensagem: 'Mensagem' })[s.key]}</dt>
                  <dd style={{ ...rowCell, margin: 0, fontSize: 17, color: 'var(--text-strong)', fontWeight: 600 }}>{s.key === 'data' ? fmtDate(answers.data) : (answers[s.key] || '—')}</dd>
                  <dd style={{ ...rowCell, margin: 0 }}><button onClick={() => setI(k)} style={{ ...ghostBtn, padding: '4px 8px' }}>Editar</button></dd>
                </React.Fragment>
              ))}
            </dl>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button variant="primary" size="lg" onClick={() => setSent(true)} iconLeft={<window.Icon d="chat" size={18} />}>Enviar e falar no WhatsApp</Button>
              <Button variant="secondary" size="lg" onClick={() => setSent(true)} iconLeft={<window.Icon d="mail" size={18} />}>Só enviar por e-mail</Button>
            </div>
          </div>
        )}
      </div>
    </Stage>
  );
}

function Stage({ children, progress }) {
  return (
    <section style={{ position: 'relative', flex: 1, minHeight: 'calc(100vh - 84px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '56px 24px', background: 'var(--grad-hero)', overflow: 'hidden' }}>
      {progress != null && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'color-mix(in oklab, var(--line-200) 60%, transparent)' }}>
          <div style={{ width: `${progress * 100}%`, height: '100%', borderRadius: '0 3px 3px 0', background: 'var(--brand)', transition: 'width var(--dur-slow) var(--ease-out)' }} />
        </div>
      )}
      <img src={window.ASSETS + 'simbolo-cor.png'} alt="" aria-hidden="true" style={{ position: 'absolute', right: -80, bottom: -60, width: 420, opacity: 0.1, transform: 'rotate(-10deg)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>{children}</div>
    </section>
  );
}
const ghostBtn = { display: 'inline-flex', alignItems: 'center', gap: 6, border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)', padding: '6px 4px', borderRadius: 8 };
const kbd = { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, padding: '3px 8px', borderRadius: 6, border: '1px solid var(--line-200)', background: 'var(--surface-card)', color: 'var(--text-muted)' };
const rowCell = { padding: '14px 0', borderBottom: '1px solid var(--line-200)', display: 'flex', alignItems: 'center' };

Object.assign(window, { Contato, Typewriter });
