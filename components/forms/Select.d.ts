import React from 'react';

export interface SelectOption { value: string; label: string; }
export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** String[] or {value,label}[]. */
  options?: Array<string | SelectOption>;
  id?: string;
  helper?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Styled native select matching the input system; custom chevron. */
export function Select(props: SelectProps): JSX.Element;
