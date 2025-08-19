import { getRequestConfig } from "next-intl/server";
import { routing } from "@/i18n/routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const timeZone = "America/Sao_Paulo";

  return {
    timeZone,
    locale,
    messages: (await import(`../../lang/${locale}.json`)).default,
  };
});
