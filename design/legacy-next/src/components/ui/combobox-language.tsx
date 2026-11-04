"use client";

import * as React from "react";
import Image from "next/image";
import FlagIcon from "react-flagkit";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

export function ComboboxLanguage({
  locale,
  type,
}: Readonly<{ locale: string; type: "header" | "page"; existsInThisLanguage?: boolean }>) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const { theme } = useTheme();

  const handleLanguageChange = (newValue: string) => {
    const currentPath = window.location.pathname;
    const currentLocale = currentPath.split("/")[1];
    let newPath;
    newPath = `/${newValue}${currentPath.slice(currentLocale.length + 1)}`;
    setOpen(false);
    router.push(newPath);
  };

  const t = useTranslations();

  const frameworks = [
    {
      value: "pt",
      label: t("Language.Portuguese"),
      icon: "BR",
    },
    {
      value: "zh-Hant",
      label: t("Language.ChineseTraditional"),
      icon: "CN",
    },
    {
      value: "zh-Hans",
      label: t("Language.ChineseSimplified"),
      icon: "CN",
    },
    {
      value: "en",
      label: t("Language.English"),
      icon: "US",
    },
    {
      value: "fr",
      label: t("Language.French"),
      icon: "FR",
    },
    {
      value: "de",
      label: t("Language.German"),
      icon: "DE",
    },
    {
      value: "it",
      label: t("Language.Italian"),
      icon: "IT",
    },
    {
      value: "bn",
      label: t("Language.Bengali"),
      icon: "BD",
    },
    {
      value: "hi",
      label: t("Language.Hindi"),
      icon: "IN",
    },
    {
      value: "ru",
      label: t("Language.Russian"),
      icon: "RU",
    },
    {
      value: "ja",
      label: t("Language.Japanese"),
      icon: "JP",
    },
    {
      value: "ko",
      label: t("Language.Korean"),
      icon: "KR",
    },
    {
      value: "vi",
      label: t("Language.Vietnamese"),
      icon: "VN",
    },
    {
      value: "te",
      label: t("Language.Telugu"),
      icon: "IN",
    },
    {
      value: "yue",
      label: t("Language.Cantonese"),
      icon: "HK",
    },
    {
      value: "mr",
      label: t("Language.Marathi"),
      icon: "IN",
    },
    {
      value: "ta",
      label: t("Language.Tamil"),
      icon: "IN",
    },
    {
      value: "tr",
      label: t("Language.Turkish"),
      icon: "TR",
    },
    {
      value: "ur",
      label: t("Language.Urdu"),
      icon: "PK",
    },
    {
      value: "gu",
      label: t("Language.Gujarati"),
      icon: "IN",
    },
    {
      value: "pl",
      label: t("Language.Polish"),
      icon: "PL",
    },
    {
      value: "uk",
      label: t("Language.Ukrainian"),
      icon: "UA",
    },
    {
      value: "ms",
      label: t("Language.Malay"),
      icon: "MY",
    },
    {
      value: "kn",
      label: t("Language.Kannada"),
      icon: "IN",
    },
    {
      value: "or",
      label: t("Language.Oriya"),
      icon: "IN",
    },
    {
      value: "pa",
      label: t("Language.Punjabi"),
      icon: "IN",
    },
    {
      value: "ro",
      label: t("Language.Romanian"),
      icon: "RO",
    },
    {
      value: "az",
      label: t("Language.Azerbaijani"),
      icon: "AZ",
    },
    {
      value: "fa",
      label: t("Language.Farsi"),
      icon: "IR",
    },
    {
      value: "my",
      label: t("Language.Burmese"),
      icon: "MM",
    },
    {
      value: "th",
      label: t("Language.Thai"),
      icon: "TH",
    },
    {
      value: "nl",
      label: t("Language.Dutch"),
      icon: "NL",
    },
    {
      value: "yo",
      label: t("Language.Yoruba"),
      icon: "NG",
    },
    {
      value: "sd",
      label: t("Language.Sindhi"),
      icon: "PK",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative flex items-center gap-1 cursor-pointer">
          <Image
            src={theme == "light" ? "/ico/google-translateDark.svg" : "/ico/google-translate.svg"}
            alt={t("trocarIdioma")}
            height={32}
            width={32}
            className="text-white"
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={t("Language.pesquise")} />
          <CommandList>
            <CommandEmpty>Pesquisar idioma</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => {
                    handleLanguageChange(framework.value);
                    setOpen(false);
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", locale === framework.value ? "opacity-100" : "opacity-0")} />
                  <div className="flex w-full justify-between">
                    {framework.label}
                    <FlagIcon size={17} country={framework.icon} />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

const frameworks = [
  {
    value: "pt",
    label: "Português BR",
    icon: "BR",
  },
  {
    value: "zh-Hant",
    label: "Chinês (Tradicional)",
    icon: "CN",
  },
  {
    value: "zh-Hans",
    label: "Chinês (Simplificado)",
    icon: "CN",
  },
  {
    value: "en",
    label: "Inglês",
    icon: "US",
  },
  {
    value: "fr",
    label: "Francês",
    icon: "FR",
  },
  {
    value: "de",
    label: "Alemão",
    icon: "DE",
  },
  {
    value: "it",
    label: "Italiano",
    icon: "IT",
  },
  {
    value: "bn",
    label: "Bengali",
    icon: "BD",
  },
  {
    value: "hi",
    label: "Hindi",
    icon: "IN",
  },
  {
    value: "ru",
    label: "Russo",
    icon: "RU",
  },
  {
    value: "ja",
    label: "Japonês",
    icon: "JP",
  },
  {
    value: "ko",
    label: "Coreano",
    icon: "KR",
  },
  {
    value: "vi",
    label: "Vietnamita",
    icon: "VN",
  },
  {
    value: "te",
    label: "Telugu",
    icon: "IN",
  },
  {
    value: "yue",
    label: "Cantonês",
    icon: "HK",
  },
  {
    value: "mr",
    label: "Marathi",
    icon: "IN",
  },
  {
    value: "ta",
    label: "Tamil",
    icon: "IN",
  },
  {
    value: "tr",
    label: "Turco",
    icon: "TR",
  },
  {
    value: "ur",
    label: "Urdu",
    icon: "PK",
  },
  {
    value: "gu",
    label: "Gujarati",
    icon: "IN",
  },
  {
    value: "pl",
    label: "Polonês",
    icon: "PL",
  },
  {
    value: "uk",
    label: "Ucraniano",
    icon: "UA",
  },
  {
    value: "ms",
    label: "Malay",
    icon: "MY",
  },
  {
    value: "kn",
    label: "Kannada",
    icon: "IN",
  },
  {
    value: "or",
    label: "Oriya",
    icon: "IN",
  },
  {
    value: "pa",
    label: "Punjabi",
    icon: "IN",
  },
  {
    value: "ro",
    label: "Romeno",
    icon: "RO",
  },
  {
    value: "az",
    label: "Azerbaijano",
    icon: "AZ",
  },
  {
    value: "fa",
    label: "Farsi",
    icon: "IR",
  },
  {
    value: "my",
    label: "Birmanês",
    icon: "MM",
  },
  {
    value: "th",
    label: "Tailandês",
    icon: "TH",
  },
  {
    value: "nl",
    label: "Holandês",
    icon: "NL",
  },
  {
    value: "yo",
    label: "Yoruba",
    icon: "NG",
  },
  {
    value: "sd",
    label: "Sindhi",
    icon: "PK",
  },
];
