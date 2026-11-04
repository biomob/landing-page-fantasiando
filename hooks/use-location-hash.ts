"use client";
import { useSyncExternalStore } from "react";
import { readHash, subscribeHash } from "@/lib/hash-events";

/** Hash atual da URL (sem "#"), atualizado também em navegações do Next. */
export function useLocationHash() {
  return useSyncExternalStore(subscribeHash, readHash, () => "");
}
