import React from 'react';

export interface InputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  helper?: string;
  error?: string;
  iconLeft?: React.ReactNode;
  id?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

/** Labeled text field with focus ring, optional leading icon, helper & error. */
export function Input(props: InputProps): JSX.Element;
