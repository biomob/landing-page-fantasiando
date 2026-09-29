import React from 'react';
export interface TopBarProps {
  /** Announcement messages. Defaults to the four standard trust messages. */
  messages?: string[];
  /** Rotate one-at-a-time (true) or spread all on one row (false). @default true */
  rotate?: boolean;
  /** Rotation interval in ms. @default 3200 */
  interval?: number;
  style?: React.CSSProperties;
}
/** Thin violet announcement bar with rotating trust messages and a star marker. */
export function TopBar(props: TopBarProps): JSX.Element;
