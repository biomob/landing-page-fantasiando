import React from 'react';
export interface RatingProps {
  /** 0–5. @default 5 */
  value?: number;
  /** Review count shown in parentheses. */
  count?: number;
  size?: number;
  style?: React.CSSProperties;
}
/** Star rating in brand yellow with optional review count. */
export function Rating(props: RatingProps): JSX.Element;
