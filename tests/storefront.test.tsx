import { act, cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CollectionView } from "../components/catalog/collection-view";
import { ProductActions } from "../components/catalog/product-actions";
import { ProductCard } from "../components/catalog/product-card";
import { SiteHeader } from "../components/layout/site-header";
import { createMockSource } from "../lib/catalog/mock-source";
import { FAVORITES_KEY } from "../lib/favorites";

const nav = { search: new URLSearchParams(), pathname: "/colecao" };
vi.mock("next/navigation", () => ({ usePathname: () => nav.pathname, useSearchParams: () => nav.search }));
vi.mock("next/form", () => ({ default: ({ children, action, ...props }: { children: ReactNode; action: string }) => <form action={action} {...props}>{children}</form> }));

afterEach(() => {
  cleanup();
  localStorage.clear();
  nav.search = new URLSearchParams();
  window.history.replaceState(null, "", "/");
});

const source = createMockSource();
const renderCollection = async () => {
  const [products, categories] = await Promise.all([source.listProducts(), source.listCategories()]);
  return render(<CollectionView products={products} categories={categories} />);
};
const productNames = () => screen.queryAllByRole("link", { name: /^Vestido|^Festa|^Fantasia/ }).map((link) => link.textContent);

describe("CollectionView", () => {
  it("opens filtered by the URL hash and shows the theme as title", async () => {
    window.history.replaceState(null, "", "/colecao#festa-junina");
    await renderCollection();

    expect(screen.getByRole("heading", { level: 1, name: "Festa junina" })).toBeVisible();
    expect(screen.getByRole("status")).toHaveTextContent("1 peça em Festa junina");
    expect(productNames()).toEqual(["Festa Junina Doçura"]);
  });

  it("combines theme checkboxes, size and availability, and clears them", async () => {
    const user = userEvent.setup();
    await renderCollection();
    const filters = screen.getByRole("complementary", { name: "Filtros" });

    await user.click(within(filters).getByRole("checkbox", { name: "Princesas" }));
    expect(window.location.hash).toBe("#princesas");
    expect(productNames()).toHaveLength(3);

    await user.click(within(filters).getByRole("button", { name: "4" }));
    expect(screen.getByRole("status")).toHaveTextContent("3 peças em Princesas · tamanho 4");

    await user.click(within(filters).getByRole("radio", { name: "Sob encomenda" }));
    expect(screen.getByText(/nenhuma peça com esses filtros/i)).toBeVisible();

    await user.click(screen.getByRole("button", { name: "Limpar filtros" }));
    expect(productNames()).toHaveLength(8);
    expect(window.location.hash).toBe("");
  });

  it("searches by the ?busca= query ignoring accents", async () => {
    nav.search = new URLSearchParams("busca=lilas");
    await renderCollection();

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Busca: “lilas”");
    expect(productNames()).toEqual(["Vestido Tule Lilás"]);
  });

  it("sorts by lowest price", async () => {
    const user = userEvent.setup();
    await renderCollection();

    await user.selectOptions(screen.getByRole("combobox", { name: "Ordenar por" }), "price");
    expect(productNames()[0]).toBe("Festa Junina Doçura");
  });
});

describe("ProductCard", () => {
  it("saves the product in favorites and orders through WhatsApp", async () => {
    const user = userEvent.setup();
    const [aurora] = await source.listProducts();
    render(<ProductCard product={aurora} />);

    await user.click(screen.getByRole("button", { name: "Salvar Vestido Princesa Aurora nos favoritos" }));
    expect(JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? "[]")).toEqual(["vestido-princesa-aurora"]);
    expect(screen.getByRole("button", { name: /remover .* dos favoritos/i })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("link", { name: "Pedir Vestido Princesa Aurora no WhatsApp" })).toHaveAttribute("href", expect.stringContaining("wa.me"));
  });
});

describe("ProductActions", () => {
  it("sends the selected size to WhatsApp instead of a cart", async () => {
    const user = userEvent.setup();
    render(<ProductActions product={{ name: "Vestido Aurora", slug: "vestido-aurora" }} sizes={[{ label: "4", available: true }, { label: "6", available: true }]} />);

    await user.click(screen.getByRole("button", { name: "6" }));

    const link = screen.getByRole("link", { name: /quero este vestido no tamanho 6/i });
    expect(decodeURIComponent(link.getAttribute("href") ?? "")).toContain("Vestido Aurora no tamanho 6");
    expect(screen.queryByText(/sacola|carrinho/i)).not.toBeInTheDocument();
  });

  it("preselects the first available size", () => {
    render(<ProductActions product={{ name: "Vestido Aurora", slug: "vestido-aurora" }} sizes={[{ label: "2", available: false }, { label: "4", available: true }]} />);

    expect(screen.getByRole("button", { name: "4" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("Tamanho: 4")).toBeVisible();
  });
});

describe("SiteHeader", () => {
  it("searches the collection, counts favorites and opens the mobile menu", async () => {
    const user = userEvent.setup();
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(["a", "b"]));
    render(<SiteHeader />);

    expect(screen.getByRole("search")).toHaveAttribute("action", "/colecao");
    expect(screen.getByRole("searchbox", { name: "Buscar na loja" })).toHaveAttribute("name", "busca");
    expect(screen.getByRole("link", { name: /favoritos/i })).toHaveTextContent("2");

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    expect(screen.getByRole("navigation", { name: "Menu" })).toBeVisible();
    await user.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: "Menu" })).not.toBeInTheDocument();
  });
});

describe("SiteHeader tabs", () => {
  it("marks the tab of the current route and follows hash navigation", async () => {
    nav.pathname = "/colecao";
    window.history.replaceState(null, "", "/colecao");
    render(<SiteHeader />);
    const categories = () => screen.getAllByRole("navigation", { name: "Categorias" }).at(-1)!;

    expect(within(categories()).getByRole("link", { name: "Novidades" })).toHaveAttribute("aria-current", "page");

    // O Next troca o hash com pushState (sem "hashchange"); a aba precisa acompanhar.
    await act(async () => window.history.pushState(null, "", "/colecao#princesas"));
    expect(within(categories()).getByRole("link", { name: "Princesas" })).toHaveAttribute("aria-current", "page");
    expect(within(categories()).getByRole("link", { name: "Novidades" })).not.toHaveAttribute("aria-current");
    nav.pathname = "/colecao";
  });

  it("compacts when the page scrolls", async () => {
    render(<SiteHeader />);
    const header = screen.getByRole("banner");
    expect(header).not.toHaveAttribute("data-scrolled");

    await act(async () => {
      Object.defineProperty(window, "scrollY", { value: 400, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    expect(header).toHaveAttribute("data-scrolled");

    await act(async () => {
      Object.defineProperty(window, "scrollY", { value: 0, configurable: true });
      window.dispatchEvent(new Event("scroll"));
    });
    expect(header).not.toHaveAttribute("data-scrolled");
  });
});
