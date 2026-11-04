import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { FontSizeControl } from "../components/accessibility/font-size-control";
import { ThemeToggle } from "../components/accessibility/theme-toggle";
import { FONT_SIZE_KEY, preferencesScript, THEME_KEY } from "../lib/preferences";

const html = document.documentElement;

afterEach(() => {
  cleanup();
  localStorage.clear();
  delete html.dataset.theme;
  html.style.fontSize = "";
});

describe("ThemeToggle", () => {
  it("switches between light and dark and remembers the choice", async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole("switch", { name: "Trocar para o tema escuro" }));
    expect(html.dataset.theme).toBe("dark");
    expect(localStorage.getItem(THEME_KEY)).toBe("dark");
    expect(screen.getByRole("switch", { name: "Trocar para o tema claro" })).toHaveAttribute("aria-checked", "true");

    await user.click(screen.getByRole("switch"));
    expect(html.dataset.theme).toBe("light");
  });
});

describe("FontSizeControl", () => {
  it("changes the root font size within 13–19px and remembers it", async () => {
    const user = userEvent.setup();
    render(<FontSizeControl />);
    const increase = screen.getByRole("button", { name: "Aumentar tamanho da fonte" });

    for (let i = 0; i < 5; i += 1) await user.click(increase);

    expect(html.style.fontSize).toBe("19px");
    expect(localStorage.getItem(FONT_SIZE_KEY)).toBe("19");
    expect(increase).toBeDisabled();
    expect(screen.getByRole("slider", { name: "Controle de tamanho da fonte" })).toHaveValue("19");

    for (let i = 0; i < 8; i += 1) await user.click(screen.getByRole("button", { name: "Diminuir tamanho da fonte" }));
    expect(html.style.fontSize).toBe("13px");
    expect(screen.getByRole("button", { name: "Diminuir tamanho da fonte" })).toBeDisabled();
  });
});

describe("preferencesScript", () => {
  it("restores stored preferences and ignores invalid font sizes", () => {
    localStorage.setItem(THEME_KEY, "dark");
    localStorage.setItem(FONT_SIZE_KEY, "18");
    new Function(preferencesScript)();
    expect(html.dataset.theme).toBe("dark");
    expect(html.style.fontSize).toBe("18px");

    html.style.fontSize = "";
    localStorage.setItem(FONT_SIZE_KEY, "40");
    new Function(preferencesScript)();
    expect(html.style.fontSize).toBe("");
  });
});
