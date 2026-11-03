import { siteUrl, whatsappNumber } from "./env";

export const brl = (cents: number) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function priceLabel({ priceCents, maxPriceCents }: { priceCents: number; maxPriceCents: number }) {
  return maxPriceCents > priceCents ? `${brl(priceCents)} – ${brl(maxPriceCents)}` : brl(priceCents);
}

export function whatsappLink(message: string, number = whatsappNumber) {
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

export function productMessage(product: { name: string; slug: string }, size?: string, base = siteUrl) {
  const sizeLine = size ? ` no tamanho ${size}` : "";
  return `Olá! Tenho interesse no ${product.name}${sizeLine}. Pode me passar mais informações? ${base}/produto/${product.slug}`;
}

export const generalMessage = "Olá! Vim pelo site da Annapê Ateliê e gostaria de mais informações.";
