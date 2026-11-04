import React from 'react';
export interface ModalProps {
  open?: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** Max width in px. @default 520 */
  width?: number;
  style?: React.CSSProperties;
}
/** Centered modal dialog with blurred scrim; for the try-on flow, size guide and login. */
export function Modal(props: ModalProps): JSX.Element;
