import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { TryOn } from "../components/try-on/try-on";
import { createMockSource } from "../lib/catalog/mock-source";

const searchParams = { value: new URLSearchParams() };
vi.mock("next/navigation", () => ({ useSearchParams: () => searchParams.value }));

afterEach(() => {
  cleanup();
  searchParams.value = new URLSearchParams();
});

describe("TryOn", () => {
  it("walks through photo, dress and result steps", async () => {
    const user = userEvent.setup();
    searchParams.value = new URLSearchParams("produto=fantasia-arco-iris");
    render(<TryOn products={await createMockSource().listProducts()} />);

    expect(screen.getByText(/Escolha uma foto/, { selector: "li" })).toHaveAttribute("aria-current", "step");
    await user.click(screen.getByRole("button", { name: /usar foto de exemplo/i }));

    expect(screen.getByRole("combobox", { name: /peça escolhida/i })).toHaveValue("fantasia-arco-iris");
    await user.selectOptions(screen.getByRole("combobox"), "vestido-tule-lilas");
    await user.click(screen.getByRole("button", { name: /gerar prévia/i }));

    const link = screen.getByRole("link", { name: /falar sobre esta peça/i });
    expect(decodeURIComponent(link.getAttribute("href") ?? "")).toContain("Vestido Tule Lilás");

    await user.click(screen.getByRole("button", { name: /recomeçar/i }));
    expect(screen.getByRole("button", { name: /usar foto de exemplo/i })).toBeVisible();
  });

  it("falls back to the first product when the query is unknown", async () => {
    const user = userEvent.setup();
    searchParams.value = new URLSearchParams("produto=nao-existe");
    const products = await createMockSource().listProducts();
    render(<TryOn products={products} />);

    await user.click(screen.getByRole("button", { name: /usar foto de exemplo/i }));
    expect(screen.getByRole("combobox")).toHaveValue(products[0].slug);
  });
});
