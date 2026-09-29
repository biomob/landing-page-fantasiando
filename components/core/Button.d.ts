import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'accent' | 'secondary' | 'soft' | 'ghost';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button for Annapê Ateliê. Display-font pill label, rosa with dark text by
 * default, with a soft brand glow; press scales to 0.97.
 * @startingPoint section="Core" subtitle="Buttons — primary, accent, outline, ghost" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
