"use client";

import { IoMdMenu } from "react-icons/io";

export const MobileButton = () => {
  return (
    <button aria-label="Abrir menu" className="hidden text-white max-2sm:flex items-center">
      <IoMdMenu className="text-[2rem]" />
    </button>
  );
};
