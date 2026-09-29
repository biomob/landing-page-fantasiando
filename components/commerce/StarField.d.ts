import React from 'react';
export interface StarFieldProps {
  /** Number of stars (max 7). @default 7 */
  density?: number;
  /** Gentle twinkle animation. @default true */
  twinkle?: boolean;
  style?: React.CSSProperties;
}
/** Decorative scattered star backdrop; absolute-positioned, place inside a relative section behind content. */
export function StarField(props: StarFieldProps): JSX.Element;
