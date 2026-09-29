import React from 'react';

export interface MascotStateProps {
  /** Which mascot state to show. @default "empty" */
  state?: 'empty' | 'loading' | 'success' | 'error' | 'no-credits' | 'cart';
  /** Override the default title. */
  title?: string;
  /** Override the default body copy. */
  text?: string;
  /** Action node (e.g. a Button) shown below the copy. */
  action?: React.ReactNode;
  /** Relative path prefix to /assets. @default "assets/" */
  assetsPath?: string;
  /** 0–1 progress bar (loading state). */
  progress?: number | null;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/**
 * Mascot-led state block — the brand's reusable empty/loading/success/error/
 * no-credits/cart UI, each with the matching heart-sun mascot pose and editable copy.
 * @startingPoint section="Feedback" subtitle="Mascot states: empty, loading, success, error" viewport="460x360"
 */
export function MascotState(props: MascotStateProps): JSX.Element;
