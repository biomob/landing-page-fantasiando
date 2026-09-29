declare module "react-custom-audio-player" {
  import { FC } from "react";

  interface AudioPlayerProps {
    src: string;
    showLoader?: boolean;
    showSeekControls?: boolean;
    enableDownload?: boolean;
    showRunningTimer?: boolean;
    showFullDuration?: boolean;
    showRemainingTime?: boolean;
    showVolumeSlider?: boolean;
    showPlaybackRate?: boolean;
    customDownloadButton?: boolean;
    type?: string;
    filename?: string;
    theme?:
      | string
      | {
          progressBarColor?: string;
          progressBarFillColor?: string;
        };
    // Outros eventos
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (e: any) => void;
  }

  const AudioPlayer: FC<AudioPlayerProps>;
  export default AudioPlayer;
}
