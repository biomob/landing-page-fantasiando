export const brl = (cents: number) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function priceLabel({ priceCents, maxPriceCents }: { priceCents: number; maxPriceCents: number }) {
  return maxPriceCents > priceCents ? `${brl(priceCents)} – ${brl(maxPriceCents)}` : brl(priceCents);
}

/** "5524999999999" → "(24) 99999-9999". Devolve os dígitos como vieram se o formato não for reconhecido. */
export function formatPhone(digits: string) {
  const local = digits.startsWith("55") ? digits.slice(2) : digits;
  return local.length === 11 ? `(${local.slice(0, 2)}) ${local.slice(2, 7)}-${local.slice(7)}` : digits;
}

export const pluralize = (count: number, singular: string, plural: string) => `${count} ${count === 1 ? singular : plural}`;
