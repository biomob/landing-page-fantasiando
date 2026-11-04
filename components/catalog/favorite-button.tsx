"use client";
import { Icon } from "@/components/ui/icon";
import { useFavorites } from "@/hooks/use-favorites";

/** Coração que salva a peça nos favoritos do navegador. */
export function FavoriteButton({ slug, name, className }: { slug: string; name: string; className?: string }) {
  const favorites = useFavorites();
  const saved = favorites.has(slug);

  return (
    <button type="button" className={className} aria-pressed={saved} aria-label={saved ? `Remover ${name} dos favoritos` : `Salvar ${name} nos favoritos`} onClick={() => favorites.toggle(slug)}>
      <Icon name="heart" size={18} />
    </button>
  );
}
