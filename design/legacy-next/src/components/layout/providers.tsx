"use client";
import React from "react";
import { ThemeProvider } from "next-themes";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { UpdateProvider } from "@/context/UpdateContext";
export default function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string | undefined;
  messages: AbstractIntlMessages | undefined;
}) {
  return (
    <>
      <NextIntlClientProvider messages={messages} timeZone={"America/Sao_Paulo"} locale={locale}>
        <WindowSizeProvider>
          <HtmlFontSizeProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <UpdateProvider>{children}</UpdateProvider>
            </ThemeProvider>
          </HtmlFontSizeProvider>
        </WindowSizeProvider>
      </NextIntlClientProvider>
    </>
  );
}
