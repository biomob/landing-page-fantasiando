import React from 'react';

export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

/** Checkbox with violet fill + white check; for filters and consent. */
export function Checkbox(props: CheckboxProps): JSX.Element;
