"use client";
import { useState } from "react";
import type { ProductSize } from "@/lib/catalog/types";

/** Tamanho escolhido; começa no primeiro disponível. */
export function useSizeSelection(sizes: ProductSize[]) {
  return useState(() => sizes.find((size) => size.available)?.label);
}
