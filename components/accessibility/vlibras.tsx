"use client";
import Script from "next/script";

declare global {
  interface Window {
    VLibras?: { Widget: new (url: string) => unknown };
  }
}

const VLIBRAS_URL = "https://vlibras.gov.br/app";

/** Widget oficial do VLibras (tradução para Libras), carregado depois que a página fica ociosa. */
export function VLibras() {
  return (
    <>
      {/* Atributos customizados exigidos pelo plugin do governo. */}
      <div {...{ vw: "" }} className="enabled">
        <div {...{ "vw-access-button": "" }} className="active" />
        <div {...{ "vw-plugin-wrapper": "" }}>
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
      <Script
        src={`${VLIBRAS_URL}/vlibras-plugin.js`}
        strategy="lazyOnload"
        onLoad={() => {
          if (!window.VLibras) return;
          new window.VLibras.Widget(VLIBRAS_URL);
          // O plugin se inicializa no window.onload, que já passou quando o script termina de carregar.
          window.onload?.(new Event("load"));
        }}
      />
    </>
  );
}
