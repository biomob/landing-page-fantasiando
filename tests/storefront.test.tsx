import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Catalogue } from "../components/catalog/catalogue";
import { ProductActions } from "../components/catalog/product-actions";
import { SiteHeader } from "../components/layout/site-header";
import { mockCategories } from "../lib/catalog/mock-data";
import { createMockSource } from "../lib/catalog/mock-source";

vi.mock("next/navigation", () => ({ usePathname: () => "/colecao" }));

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("Catalogue", () => {
  it("filters products by category and keeps the filter in the URL hash", async () => {
    const user = userEvent.setup();
    const products = await createMockSource().listProducts();
    render(<Catalogue products={products} categories={mockCategories} />);

    await user.click(screen.getByRole("button", { name: "Festa junina" }));

    expect(window.location.hash).toBe("#festa-junina");
    expect(screen.getByRole("heading", { name: "Festa Junina Doçura" })).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Vestido Princesa Aurora" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Todos" }));
    expect(window.location.hash).toBe("");
    expect(screen.getByRole("heading", { name: "Vestido Princesa Aurora" })).toBeVisible();
  });

  it("opens already filtered when the URL has a category hash", async () => {
    window.history.replaceState(null, "", "/colecao#princesas");
    const products = await createMockSource().listProducts();
    render(<Catalogue products={products} categories={mockCategories} />);

    expect(screen.getByRole("button", { name: "Princesas" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.queryByRole("heading", { name: "Festa Junina Doçura" })).not.toBeInTheDocument();
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

  it("preselects the first available size", () => {
    render(<ProductActions product={{ name: "Vestido Aurora", slug: "vestido-aurora" }} sizes={[{ label: "2", available: false }, { label: "4", available: true }]} />);

    expect(screen.getByRole("button", { name: "4" })).toHaveAttribute("aria-pressed", "true");
  });
});

describe("SiteHeader", () => {
  it("opens the mobile menu and closes it with Escape", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    expect(screen.getAllByRole("navigation", { name: /navegação principal/i })).toHaveLength(2);
    expect(screen.getAllByRole("link", { name: "Coleção" })[0]).toHaveAttribute("aria-current", "page");

    await user.keyboard("{Escape}");
    expect(screen.getAllByRole("navigation", { name: /navegação principal/i })).toHaveLength(1);
    expect(screen.getByRole("button", { name: /abrir menu/i })).toHaveAttribute("aria-expanded", "false");
  });
});
