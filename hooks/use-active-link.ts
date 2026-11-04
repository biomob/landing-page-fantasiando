"use client";
import { usePathname } from "next/navigation";
import { useLocationHash } from "./use-location-hash";

/**
 * Diz se um link do menu corresponde à página atual, considerando o hash:
 * "/colecao" fica ativo sem tema escolhido; "/colecao#princesas" quando o tema é só Princesas.
 */
export function useActiveLink() {
  const pathname = usePathname();
  const hash = useLocationHash();

  return (href: string, { ignoreHash = false } = {}) => {
    const [path, target = ""] = href.split("#");
    if (path === "/") return pathname === "/";
    if (pathname !== path && !pathname.startsWith(`${path}/`)) return false;
    return ignoreHash || target === hash;
  };
}
