"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NextImage } from "../../ui/NextImage";

export const LogoWithTheme = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return (
      <Link href={"/"} className="relative w-100%  h-[1.875rem] ">
        <NextImage
          imageUrl="/img/LOGO-ABERTALIGHT.png"
          altImage="Logo da Biomob"
          ariaLabel="Logo da Biomob"
          sizes="100vw"
          className="w-[10.25rem]"
        />
      </Link>
    );
  }

  return (
    <Link href={"/"} className="relative w-100%  h-[1.875rem] ">
      {theme == "light" ? (
        <NextImage
          imageUrl="/img/LOGO-ABERTALIGHT.png"
          altImage="Logo da Biomob"
          ariaLabel="Logo da Biomob"
          sizes="100vw"
          className="w-[10.25rem]"
        />
      ) : (
        <NextImage
          imageUrl="/img/LOGO-ABERTA.png"
          altImage="Logo da Biomob"
          ariaLabel="Logo da Biomob"
          sizes="100vw"
          className="w-[10.25rem]"
        />
      )}
    </Link>
  );
};
