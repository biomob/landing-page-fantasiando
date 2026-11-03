"use client";
import Link from "next/link";
import { useState } from "react";
import type { ProductSize } from "@/lib/catalog/types";
import { productMessage, whatsappLink } from "@/lib/whatsapp";
import { Icon } from "./icon";

export function ProductActions({ product, sizes }: { product: { name: string; slug: string }; sizes: ProductSize[] }) {
  const [size, setSize] = useState(sizes.find((item) => item.available)?.label);

  return (
    <>
      {sizes.length > 0 && (
        <fieldset>
          <legend>Tamanho</legend>
          <div className="size-row">
            {sizes.map((item) => (
              <button key={item.label} type="button" className={size === item.label ? "size active" : "size"} aria-pressed={size === item.label} onClick={() => setSize(item.label)} title={item.available ? undefined : "Sob encomenda"} data-unavailable={!item.available || undefined}>
                {item.label}
              </button>
            ))}
          </div>
          <small className="size-note">Tamanhos riscados são feitos sob encomenda. Tire dúvidas de medida pelo WhatsApp.</small>
        </fieldset>
      )}
      <a className="button primary wide" href={whatsappLink(productMessage(product, size))} target="_blank" rel="noopener noreferrer">
        <Icon name="whatsapp" size={18} /> Quero este vestido
      </a>
      <Link className="button soft wide" href={`/prova-virtual?produto=${product.slug}`}>
        Experimentar com IA <Icon name="sparkle" size={17} />
      </Link>
    </>
  );
}
