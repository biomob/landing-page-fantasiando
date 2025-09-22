"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const RightHeaderBar: React.FC<{ locale: string; showLinks?: boolean }> = ({ showLinks = true }) => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/img/fantasiando.png"
          alt="Logo Fantasiando Kids"
          width={140}
          height={50}
          className="h-20 px-6 mt-7"
        />
      </Link>
    </div>
  );
};
export default RightHeaderBar;