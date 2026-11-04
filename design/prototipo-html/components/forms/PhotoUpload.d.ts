import React from 'react';

export interface PhotoUploadProps {
  /** Name of the chosen file, or null for the empty state. */
  fileName?: string | null;
  onPick?: (file: File) => void;
  /** Relative path prefix to the /assets folder. @default "assets/" */
  assetsPath?: string;
  hint?: string;
  style?: React.CSSProperties;
}

/** Full-body photo dropzone for the AI try-on; empty-state heart-sun mascot + upload affordance, success check once a file is chosen. */
export function PhotoUpload(props: PhotoUploadProps): JSX.Element;
