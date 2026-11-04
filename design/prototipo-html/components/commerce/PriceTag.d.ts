import React from 'react';
export interface PriceTagProps {
  /** Price in BRL (number, e.g. 129.9). */
  price: number;
  /** Original price for a strikethrough sale. */
  original?: number;
  /** Installment count, e.g. 3 → "ou 3x de R$ 43,30 sem juros". */
  installments?: number;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}
/** BRL price with optional sale strikethrough and installment line. */
export function PriceTag(props: PriceTagProps): JSX.Element;
