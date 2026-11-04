import React from 'react';
export interface ToastProps {
  title?: string;
  text?: string;
  /** @default "success" */
  tone?: 'success' | 'info' | 'warning' | 'error';
  icon?: React.ReactNode;
  /** Show the heart-sun mascot icon avatar instead of an icon. */
  showMascot?: boolean;
  assetsPath?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
/** Toast notification with a tone-colored bar and optional mascot avatar (e.g. "Produto adicionado ao carrinho"). */
export function Toast(props: ToastProps): JSX.Element;
