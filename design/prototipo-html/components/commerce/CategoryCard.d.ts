import React from 'react';
export interface CategoryCardProps {
  label: string;
  count?: number;
  /** Image URL; falls back to the tone color fill. */
  image?: string;
  /** Accent dot color. @default "violet" */
  tone?: 'violet' | 'pink' | 'yellow' | 'sky' | 'coral' | 'mint';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
/** "Escolha por ocasião" category tile with photo, gradient base, label & count. */
export function CategoryCard(props: CategoryCardProps): JSX.Element;
