/* eslint-disable @next/next/no-img-element -- direct static assets preserve storefront image crops. */
"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import type { ProductSummary } from "@/lib/catalog/types";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icon";

// Demonstração visual: não envia foto nem chama IA.
export function TryOn({ products }: { products: ProductSummary[] }) {
  const requested = useSearchParams().get("produto");
  const [slug, setSlug] = useState(() => products.find((item) => item.slug === requested)?.slug ?? products[0]?.slug);
  const [step, setStep] = useState<"photo" | "dress" | "result">("photo");
  const product = products.find((item) => item.slug === slug) ?? products[0];
  const stepClass = (order: number) => {
    const current = { photo: 0, dress: 1, result: 2 }[step];
    return current === order ? "current" : current > order ? "done" : "";
  };

  if (!product) return null;

  return (
    <section className="tryon">
      <div className="tryon-intro">
        <p className="eyebrow">Prova virtual · demonstração</p>
        <h1>Sua prova virtual</h1>
        <p>Uma prévia carinhosa para ajudar a escolher a fantasia que mais combina com esse momento.</p>
        <ol>
          <li className={stepClass(0)}>1. Escolha uma foto</li>
          <li className={stepClass(1)}>2. Confira a peça</li>
          <li className={stepClass(2)}>3. Veja a prévia</li>
        </ol>
      </div>
      <div className="tryon-stage">
        {step === "result" ? (
          <>
            <img src="/assets/foto-exemplo-crianca-vestido-rosa.png" alt="Prévia da prova virtual" />
            <h2>Prévia pronta para você</h2>
            <p>Esta é uma simulação visual. Cores e caimento podem variar.</p>
            <div className="button-row center">
              <a className="button primary" href={whatsappLink(productMessage(product))} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> Falar sobre esta peça</a>
              <button className="button soft" type="button" onClick={() => setStep("photo")}>Recomeçar</button>
            </div>
          </>
        ) : step === "dress" ? (
          <>
            <img src={product.image.url} alt={product.image.alt} className="selected-dress" />
            <label className="dress-select">
              Peça escolhida
              <select value={product.slug} onChange={(event) => setSlug(event.target.value)}>
                {products.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}
              </select>
            </label>
            <button className="button primary" type="button" onClick={() => setStep("result")}>Gerar prévia <Icon name="sparkle" size={17} /></button>
          </>
        ) : (
          <>
            <div className="upload-icon"><Icon name="camera" size={34} /></div>
            <h2>Escolha uma foto</h2>
            <p>Prefira uma foto de corpo inteiro, com boa luz e fundo simples.</p>
            <button className="button primary" type="button" onClick={() => setStep("dress")}>Usar foto de exemplo</button>
            <small>Demonstração: nenhuma foto é enviada. A prova virtual com IA chega em breve.</small>
          </>
        )}
      </div>
    </section>
  );
}
