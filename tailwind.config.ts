import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {},
      screens: {
        "2sm": "481px",
        "max-2sm": { raw: "(max-width: 480px)" },
        "2smh": { raw: "(max-height: 600px)" },
        smh: { raw: "(max-height: 680px)" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "max-sm": { raw: "(max-width: 640px)" },
        "max-md": { raw: "(max-width: 768px)" },
        "max-lg": { raw: "(max-width: 1024px)" },
        "max-xl": { raw: "(max-width: 1280px)" },
        "max-2xl": { raw: "(max-width: 1536px)" },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          hover: "hsl(var(--background-hover))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
          teste: "hsl(var(--funcional-success-teste))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        miniSectionBackgroundTexture: "url(/img/miniSectionBackgroundTexture.svg)",
      },
      animation: {
        scroll: "scroll 40s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px * 14))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      fontSize: {
        "display-01": "4.5rem",
        "display-02": "4rem",
        "heading-01": "3.5rem",
        "heading-02": "3rem",
        "heading-03": "2rem",
        "heading-04": "1.75rem",
        "heading-05": "1.5rem",
        "body-title": "1.25rem",
        "body-paragraph": "1rem",
        "body-callout": "0.875rem",
        "body-caption": "0.75rem",
      },
      fontWeight: {
        light: "300",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [
    animatePlugin,
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "hsl(var(--rev-azul-principal))",
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "hsl(var(--rev-azul-principal))",
            borderRadius: "20px",
            border: "1px solid white",
          },
        },
        ".display-01": { fontWeight: "700", fontSize: "4.5rem" },
        ".display-02": { fontWeight: "700", fontSize: "4rem" },
        ".heading-01": { fontWeight: "700", fontSize: "3.5rem" },
        ".heading-02-bold": { fontWeight: "700", fontSize: "3rem" },
        ".heading-02-medium": { fontWeight: "500", fontSize: "3rem" },
        ".heading-02": { fontWeight: "500", fontSize: "3rem" },
        ".heading-02-light": { fontWeight: "300", fontSize: "3rem" },
        ".heading-03-bold": { fontWeight: "700", fontSize: "2rem" },
        ".heading-03-medium": { fontWeight: "500", fontSize: "2rem" },
        ".heading-03": { fontWeight: "500", fontSize: "2rem" },
        ".heading-04-bold": { fontWeight: "700", fontSize: "1.75rem" },
        ".heading-04-medium": { fontWeight: "500", fontSize: "1.75rem" },
        ".heading-04": { fontWeight: "500", fontSize: "1.75rem" },
        ".heading-04-light": { fontWeight: "300", fontSize: "1.75rem" },
        ".heading-05-bold": { fontWeight: "700", fontSize: "1.5rem" },
        ".heading-05-medium": { fontWeight: "500", fontSize: "1.5rem" },
        ".heading-05": { fontWeight: "500", fontSize: "1.5rem" },
        ".heading-05-light": { fontWeight: "300", fontSize: "1.5rem" },
        ".body-title-bold": { fontWeight: "700", fontSize: "1.25rem" },
        ".body-title-medium": { fontWeight: "500", fontSize: "1.25rem" },
        ".body-title": { fontSize: "1.25rem" },
        ".body-title-light": { fontWeight: "300", fontSize: "1.25rem" },
        ".body-paragraph-bold": { fontWeight: "700", fontSize: "1rem" },
        ".body-paragraph-medium": { fontWeight: "500", fontSize: "1rem" },
        ".body-paragraph": { fontWeight: "500", fontSize: "1rem" },
        ".body-paragraph-light": { fontWeight: "300", fontSize: "1rem" },
        ".body-callout-bold": { fontWeight: "700", fontSize: "0.875rem" },
        ".body-callout-medium": { fontWeight: "500", fontSize: "0.875rem" },
        ".body-callout": { fontWeight: "500", fontSize: "0.875rem" },
        ".body-callout-light": { fontWeight: "300", fontSize: "0.875rem" },
        ".body-caption-bold": { fontWeight: "700", fontSize: "0.75rem" },
        ".body-caption-medium": { fontWeight: "500", fontSize: "0.75rem" },
        ".body-caption": { fontWeight: "500", fontSize: "0.75rem" },
        ".body-caption-light": { fontWeight: "300", fontSize: "0.75rem" },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    require("tailwind-scrollbar-hide"),
  ],
};

export default config;
