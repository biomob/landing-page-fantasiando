import React from 'react';

export interface CreditCounterProps {
  /** Try-on credits left. @default 3 */
  remaining?: number;
  /** Total per account. @default 3 */
  total?: number;
  /** Smaller inline form. */
  compact?: boolean;
  style?: React.CSSProperties;
}

/** Virtual try-on credit indicator: "{remaining} de {total} provas disponíveis", pips deplete and turn coral at zero. */
export function CreditCounter(props: CreditCounterProps): JSX.Element;
