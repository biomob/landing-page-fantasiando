"use client";
import React from "react";
import Image from "next/image";

const RightHeaderBar: React.FC<{ locale: string; showLinks?: boolean }> = ({ showLinks = true }) => {
  return (
    <div className="flex items-center">
      <Image
        src="/img/fantasiando.png"
        alt="Logo Fantasiando Kids"
        width={140}
        height={50}
        className="h-20 px-6 mt-7"
      />
    </div>
  );
};
export default RightHeaderBar;