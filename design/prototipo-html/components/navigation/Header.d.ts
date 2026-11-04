import React from 'react';
export interface HeaderProps {
  /** Nav items. Defaults to the standard 7-item menu. */
  nav?: string[];
  /** Currently active nav item label. */
  active?: string;
  cartCount?: number;
  favCount?: number;
  /** Relative path prefix to /assets. @default "assets/" */
  assetsPath?: string;
  /** Nav click. Logo click sends "__home". */
  onNav?: (item: string) => void;
  /** Icon/CTA clicks: "cart" | "account" | "tryon". */
  onAction?: (key: 'cart' | 'account' | 'tryon') => void;
  /** Current theme, drives the toggle icon. */
  theme?: 'light' | 'dark';
  /** When provided, renders the light/dark toggle. */
  onToggleTheme?: () => void;
  /** Compact mobile header (menu · logo · theme · cart). */
  compact?: boolean;
  style?: React.CSSProperties;
}
/**
 * Main storefront header: Annapê Ateliê logo, nav, icons, light/dark toggle and
 * the "Experimentar com IA" CTA; `compact` renders the mobile bar.
 */
export function Header(props: HeaderProps): JSX.Element;
