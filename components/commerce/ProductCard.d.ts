import React from 'react';

export interface ProductBadge { label: string; tone?: 'violet' | 'pink' | 'yellow' | 'sky' | 'coral' | 'success'; }

export interface ProductCardProps {
  name: string;
  /** Collection / theme eyebrow, e.g. "Princesas". */
  theme?: string;
  price: number;
  original?: number;
  installments?: number;
  image?: string;
  /** Available sizes, e.g. ["2","4","6","8"]. */
  sizes?: string[];
  rating?: number;
  reviews?: number;
  /** Corner promo badge. */
  badge?: ProductBadge;
  favorite?: boolean;
  onFavorite?: (next: boolean) => void;
  onBuy?: () => void;
  onTryOn?: () => void;
  style?: React.CSSProperties;
}

/**
 * The storefront product card: image, theme, name, rating, sizes, price,
 * "Comprar" + "Experimentar com IA" and a favorite heart.
 * @startingPoint section="Commerce" subtitle="Product card with AI try-on CTA" viewport="320x520"
 */
export function ProductCard(props: ProductCardProps): JSX.Element;
