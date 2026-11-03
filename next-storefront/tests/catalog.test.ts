import { describe, expect, it, vi } from "vitest";
import { createApiSource } from "../lib/catalog/api-source";
import { mockProducts } from "../lib/catalog/mock-data";
import { createMockSource } from "../lib/catalog/mock-source";
import { catalogApiUrl, catalogSourceName } from "../lib/env";

describe("catalog env", () => {
  it("defaults to mock and rejects unknown sources", () => {
    expect(catalogSourceName(undefined)).toBe("mock");
    expect(catalogSourceName("api")).toBe("api");
    expect(() => catalogSourceName("csv")).toThrow(/CATALOG_SOURCE/);
  });

  it("requires an API URL and trims trailing slashes", () => {
    expect(() => catalogApiUrl("")).toThrow(/CATALOG_API_URL/);
    expect(catalogApiUrl("https://api.test/api/v1/")).toBe("https://api.test/api/v1");
  });
});

describe("mock source", () => {
  it("has unique slugs and lists summaries without detail fields", async () => {
    const source = createMockSource();
    const products = await source.listProducts();
    expect(new Set(products.map((product) => product.slug)).size).toBe(mockProducts.length);
    expect(products[0]).not.toHaveProperty("sizes");
  });

  it("counts products per category and finds products by slug", async () => {
    const source = createMockSource();
    const categories = await source.listCategories();
    expect(categories.find((category) => category.slug === "festa-junina")?.productCount).toBe(1);
    expect((await source.getProduct("fantasia-arco-iris"))?.name).toBe("Fantasia Arco-Íris");
    expect(await source.getProduct("nao-existe")).toBeNull();
  });
});

describe("api source", () => {
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });

  it("follows cursors and maps the public catalog contract", async () => {
    const item = (slug: string) => ({ id: "x", slug, name: slug, brand: null, summary: null, productType: "dress", currency: "BRL", minPriceCents: 9990, maxPriceCents: 12990, available: true, images: [], categories: [{ slug: "princesas", name: "Princesas" }] });
    const fetcher = vi.fn<typeof fetch>()
      .mockResolvedValueOnce(json({ items: [item("a")], nextCursor: "c1" }))
      .mockResolvedValueOnce(json({ items: [item("b")], nextCursor: null }));

    const products = await createApiSource("https://api.test/api/v1", fetcher).listProducts();

    expect(fetcher.mock.calls[1][0]).toBe("https://api.test/api/v1/catalog/products?limit=100&cursor=c1");
    expect(products.map((product) => product.slug)).toEqual(["a", "b"]);
    expect(products[0]).toMatchObject({ priceCents: 9990, maxPriceCents: 12990, image: { url: "/assets/mascote-vazio.png" } });
  });

  it("collapses variants into sizes and returns null on 404", async () => {
    const fetcher = vi.fn<typeof fetch>()
      .mockResolvedValueOnce(json({
        slug: "aurora", name: "Aurora", summary: "Resumo", description: null, composition: "Tule", careInstructions: null, origin: null,
        images: [{ url: "https://cdn.test/a.jpg", altText: "Aurora" }], categories: [],
        variants: [
          { size: "4", priceCents: 12000, available: false },
          { size: "4", priceCents: 12000, available: true },
          { size: "6", priceCents: 13000, available: false },
        ],
      }))
      .mockResolvedValueOnce(json({ error: { code: "NOT_FOUND" } }, 404));
    const source = createApiSource("https://api.test/api/v1", fetcher);

    expect(await source.getProduct("aurora")).toMatchObject({
      description: "Resumo", priceCents: 12000, maxPriceCents: 13000, available: true, details: ["Tule"],
      sizes: [{ label: "4", available: true }, { label: "6", available: false }],
    });
    expect(await source.getProduct("sumiu")).toBeNull();
  });

  it("fails loudly when the API is unavailable", async () => {
    const fetcher = vi.fn<typeof fetch>().mockResolvedValue(json({}, 503));
    await expect(createApiSource("https://api.test", fetcher).listCategories()).rejects.toThrow(/503/);
  });
});
