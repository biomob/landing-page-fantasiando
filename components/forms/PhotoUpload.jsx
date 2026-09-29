import React from 'react';

/**
 * Full-body photo dropzone for the virtual try-on. Dashed well with upload
 * affordance; shows the empty-state heart-sun mascot when no file is chosen.
 * `assetsPath` is the relative prefix to the /assets folder.
 */
export function PhotoUpload({
  fileName = null, onPick, assetsPath = 'assets/', hint = 'Foto de corpo inteiro · boa luz · criança de frente',
  style = {},
}) {
  const [drag, setDrag] = React.useState(false);
  const inputRef = React.useRef(null);
  const has = !!fileName;

  return (
    <div
      onClick={() => inputRef.current && inputRef.current.click()}
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); onPick && onPick(e.dataTransfer.files[0]); }}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 12, padding: '26px 22px', textAlign: 'center', cursor: 'pointer',
        background: drag ? 'var(--violet-50)' : 'var(--surface-sunken)',
        border: `2px dashed ${drag ? 'var(--violet-400)' : 'var(--violet-200)'}`,
        borderRadius: 'var(--radius-lg)', fontFamily: 'var(--font-body)',
        transition: 'background var(--dur-base), border-color var(--dur-base)', ...style,
      }}
    >
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={(e) => onPick && onPick(e.target.files[0])} />
      {!has && (
        <img src={assetsPath + 'mascote-vazio.png'} alt="" style={{ width: 116, height: 'auto', animation: 'fz-float var(--float-dur) var(--ease-soft) infinite' }} />
      )}
      {has ? (
        <>
          <div style={{
            width: 54, height: 54, borderRadius: 999, background: 'var(--success-soft)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--success)',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          </div>
          <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{fileName}</div>
          <div style={{ fontSize: 13, color: 'var(--brand-ink)', fontWeight: 700 }}>Trocar foto</div>
        </>
      ) : (
        <>
          <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-strong)' }}>Envie uma foto da criança</div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', maxWidth: 280, lineHeight: 1.5 }}>{hint}</div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 2,
            padding: '9px 16px', borderRadius: 'var(--radius-pill)', background: 'var(--violet-100)',
            color: 'var(--violet-700)', fontWeight: 700, fontSize: 14,
          }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/></svg>
            Escolher arquivo
          </span>
        </>
      )}
    </div>
  );
}
