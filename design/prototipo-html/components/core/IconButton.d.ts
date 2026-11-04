import React from 'react';

export interface IconButtonProps {
  children: React.ReactNode;
  /** Accessible label (required — icon-only control). */
  label: string;
  /** Optional count bubble (e.g. cart items). */
  badge?: React.ReactNode;
  /** @default "plain" */
  variant?: 'plain' | 'soft' | 'solid';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Round icon-only button for header actions; supports a pink count badge. */
export function IconButton(props: IconButtonProps): JSX.Element;
