"use client";
import { Icon } from "@/components/ui/icon";
import { useFavorites } from "@/hooks/use-favorites";

/** Coração que salva a peça nos favoritos do navegador. */
export function FavoriteButton({ slug, name, className, withLabel = false }: { slug: string; name: string; className?: string; withLabel?: boolean }) {
  const favorites = useFavorites();
  const saved = favorites.has(slug);
  const action = saved ? `Remover ${name} dos favoritos` : `Salvar ${name} nos favoritos`;

  return (
    <button type="button" className={className} aria-pressed={saved} aria-label={withLabel ? undefined : action} onClick={() => favorites.toggle(slug)}>
      <Icon name="heart" size={18} />
      {withLabel ? (saved ? "Salvo nos favoritos" : "Salvar nos favoritos") : null}
    </button>
  );
}
