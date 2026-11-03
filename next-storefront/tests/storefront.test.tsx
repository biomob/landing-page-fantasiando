import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { Catalogue } from "../components/storefront/catalogue";
import { ProductActions } from "../components/storefront/product-actions";
import { mockCategories } from "../lib/catalog/mock-data";
import { createMockSource } from "../lib/catalog/mock-source";
import { priceLabel, productMessage, whatsappLink } from "../lib/whatsapp";

afterEach(cleanup);

describe("whatsapp helpers", () => {
  it("builds an encoded wa.me link with the product, size and page URL", () => {
    const message = productMessage({ name: "Vestido Aurora", slug: "vestido-aurora" }, "6", "https://loja.test");
    expect(message).toBe("Olá! Tenho interesse no Vestido Aurora no tamanho 6. Pode me passar mais informações? https://loja.test/produto/vestido-aurora");
    expect(whatsappLink(message, "5524999999999")).toBe(`https://wa.me/5524999999999?text=${encodeURIComponent(message)}`);
  });

  it("formats single prices and ranges in BRL", () => {
    expect(priceLabel({ priceCents: 12990, maxPriceCents: 12990 })).toMatch(/129,90/);
    expect(priceLabel({ priceCents: 9990, maxPriceCents: 12990 })).toMatch(/99,90.*129,90/);
  });
});

describe("Catalogue", () => {
  it("filters products by category", async () => {
    const user = userEvent.setup();
    const products = await createMockSource().listProducts();
    render(<Catalogue products={products} categories={mockCategories} />);

    await user.click(screen.getByRole("button", { name: "Festa junina" }));

    expect(screen.getByRole("heading", { name: "Festa Junina Doçura" })).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Vestido Princesa Aurora" })).not.toBeInTheDocument();
  });
});

describe("ProductActions", () => {
  it("sends the selected size to WhatsApp instead of a cart", async () => {
    const user = userEvent.setup();
    render(<ProductActions product={{ name: "Vestido Aurora", slug: "vestido-aurora" }} sizes={[{ label: "4", available: true }, { label: "6", available: true }]} />);

    await user.click(screen.getByRole("button", { name: "6" }));

    const link = screen.getByRole("link", { name: /quero este vestido/i });
    expect(decodeURIComponent(link.getAttribute("href") ?? "")).toContain("Vestido Aurora no tamanho 6");
    expect(screen.queryByText(/sacola|carrinho/i)).not.toBeInTheDocument();
  });
});
