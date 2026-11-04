import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** @default "violet" */
  tone?: 'violet' | 'pink' | 'yellow' | 'sky' | 'coral' | 'success' | 'neutral' | 'solid';
  /** Leading status dot. */
  dot?: boolean;
  /** Leading brand star (overrides dot). */
  star?: boolean;
  style?: React.CSSProperties;
}

/** Small pill label for promos, statuses and trust badges. */
export function Badge(props: BadgeProps): JSX.Element;
