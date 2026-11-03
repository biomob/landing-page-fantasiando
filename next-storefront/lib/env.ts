export type CatalogSourceName = "mock" | "api";

export function catalogSourceName(value = process.env.CATALOG_SOURCE): CatalogSourceName {
  if (!value || value === "mock") return "mock";
  if (value === "api") return "api";
  throw new Error(`CATALOG_SOURCE inválido: "${value}". Use "mock" ou "api".`);
}

export function catalogApiUrl(value = process.env.CATALOG_API_URL): string {
  if (!value) throw new Error("CATALOG_API_URL é obrigatória quando CATALOG_SOURCE=api.");
  return value.replace(/\/+$/, "");
}

// NEXT_PUBLIC_* precisa ser lido literalmente para o Next inlinar no bundle do cliente.
export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "").replace(/\D/g, "");
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
