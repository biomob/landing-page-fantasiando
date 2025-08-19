"use client";

import { useHtmlFontSize } from "@/context/HtmlFontSizeContext";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function IconsImg(props: any) {
  const { theme } = useTheme();
  const { htmlFontSize } = useHtmlFontSize();
  const [imageKey, setImageKey] = useState("light"); // State for image key

  useEffect(() => {
    setImageKey(imageKey + 1);
  }, [theme]);

  return (
    <Link href={props.href} target="_blank">
      <Image
        width={htmlFontSize + 5}
        height={htmlFontSize + 5}
        src={theme == "light" ? props.src : props.srcDark}
        alt={props.alt}
        className="cursor-pointer"
        key={imageKey}
      />
    </Link>
  );
}
