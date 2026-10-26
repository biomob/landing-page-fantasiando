import { cleanup, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { HeaderFixture } from "../components/storefront/header-fixture";

describe("HeaderFixture", () => {
  afterEach(cleanup);
  it("renders the storefront navigation and opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<HeaderFixture initialViewport="mobile" />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    expect(screen.getByRole("navigation", { name: /navegação principal/i })).toBeVisible();
    expect(within(screen.getByRole("navigation", { name: /navegação principal/i })).getAllByRole("button", { name: "Prova virtual" })[0]).toBeVisible();
  });

  it("takes a shopper through the catalogue and the virtual try-on flow", async () => {
    const user = userEvent.setup();
    render(<HeaderFixture />);

    await user.click(within(screen.getByRole("navigation", { name: /navegação principal/i })).getByRole("button", { name: "Vestidos" }));
    expect(screen.getByRole("heading", { name: /vestidos que fazem a imaginação florescer/i })).toBeVisible();

    await user.click(screen.getByRole("button", { name: /ver vestido princesa aurora/i }));
    expect(screen.getByRole("heading", { name: "Vestido Princesa Aurora" })).toBeVisible();

    await user.click(within(screen.getByRole("main")).getByRole("button", { name: /experimentar com ia/i }));
    expect(screen.getByRole("heading", { name: /sua prova virtual/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /escolher foto/i })).toBeVisible();
  });

  it("filters the catalogue by collection", async () => {
    const user = userEvent.setup();
    render(<HeaderFixture />);

    await user.click(within(screen.getByRole("navigation", { name: /navegação principal/i })).getByRole("button", { name: "Vestidos" }));
    await user.click(screen.getByRole("button", { name: "Festa junina" }));
    expect(screen.getByRole("heading", { name: "Festa Junina Doçura" })).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Vestido Princesa Aurora" })).not.toBeInTheDocument();

  });
});
