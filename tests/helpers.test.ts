import { describe, expect, it } from "vitest";
import { filterCatalog } from "../lib/catalog/filters";
import { featuredProducts, productsInCategory, relatedProducts, startingPrice } from "../lib/catalog/selectors";
import { createMockSource } from "../lib/catalog/mock-source";
import { formatPhone, pluralize, priceLabel } from "../lib/format";
import { productMessage, whatsappLink } from "../lib/whatsapp";

describe("whatsapp helpers", () => {
  it("builds an encoded wa.me link with the product, size and page URL", () => {
    const message = productMessage({ name: "Vestido Aurora", slug: "vestido-aurora" }, "6", "https://loja.test");
    expect(message).toBe("Olá! Tenho interesse no Vestido Aurora no tamanho 6. Pode me passar mais informações? https://loja.test/produto/vestido-aurora");
    expect(whatsappLink(message, "5524999999999")).toBe(`https://wa.me/5524999999999?text=${encodeURIComponent(message)}`);
  });
});

describe("format", () => {
  it("formats single prices and ranges in BRL", () => {
    expect(priceLabel({ priceCents: 12990, maxPriceCents: 12990 })).toMatch(/129,90/);
    expect(priceLabel({ priceCents: 9990, maxPriceCents: 12990 })).toMatch(/99,90.*129,90/);
  });

  it("formats Brazilian mobile numbers and keeps unknown formats", () => {
    expect(formatPhone("5524999999999")).toBe("(24) 99999-9999");
    expect(formatPhone("123")).toBe("123");
  });

  it("pluralizes counts", () => {
    expect(pluralize(1, "peça", "peças")).toBe("1 peça");
    expect(pluralize(3, "peça", "peças")).toBe("3 peças");
  });
});

describe("catalog selectors", async () => {
  const products = await createMockSource().listProducts();

  it("puts badged products first in the featured list", () => {
    const featured = featuredProducts(products);
    expect(featured).toHaveLength(4);
    expect(featured.slice(0, 3).every((product) => product.badge)).toBe(true);
  });

  it("finds related products sharing a category, excluding the product itself", () => {
    const morango = products.find((product) => product.slug === "vestido-morango")!;
    const related = relatedProducts(morango, products);
    expect(related.map((product) => product.slug)).not.toContain(morango.slug);
    expect(related.every((product) => product.categories.some((ref) => ["fantasias", "aniversario"].includes(ref.slug)))).toBe(true);
  });

  it("returns everything without a category and filters with one", () => {
    expect(productsInCategory(products, null)).toHaveLength(products.length);
    expect(productsInCategory(products, "festa-junina").map((product) => product.slug)).toEqual(["vestido-junino-patchwork", "vestido-vaquinha"]);
  });
});

describe("catalog filters", async () => {
  const products = await createMockSource().listProducts();
  const base = { themes: [], query: "", size: null, availability: "all" as const, sort: "new" as const };

  it("matches search terms without accents across name and category", () => {
    expect(filterCatalog(products, { ...base, query: "junina" }).map((p) => p.slug)).toEqual(["vestido-junino-patchwork", "vestido-vaquinha"]);
    expect(filterCatalog(products, { ...base, query: "TULE azul" }).map((p) => p.slug)).toEqual(["vestido-tule-azul"]);
    expect(filterCatalog(products, { ...base, query: "maca" }).map((p) => p.slug)).toEqual(["vestido-princesa-azul-amarelo"]);
  });

  it("filters by availability and keeps products without size data", () => {
    expect(filterCatalog(products, { ...base, availability: "custom" }).map((p) => p.slug)).toEqual(["vestido-vaquinha"]);
    const unknownSizes = [{ ...products[0], sizeLabels: [] }];
    expect(filterCatalog(unknownSizes, { ...base, size: "12" })).toHaveLength(1);
  });

  it("sorts by price or by loved (badged first)", () => {
    const byPrice = filterCatalog(products, { ...base, sort: "price" }).map((p) => p.priceCents);
    expect(byPrice).toEqual([...byPrice].sort((a, b) => a - b));
    expect(filterCatalog(products, { ...base, sort: "loved" }).slice(0, 3).every((p) => p.badge)).toBe(true);
  });

  it("computes the starting price in whole reais", () => {
    expect(startingPrice(products)).toBe(99);
    expect(startingPrice([])).toBe(0);
  });
});
