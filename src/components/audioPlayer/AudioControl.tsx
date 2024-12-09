import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

interface AudioControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: (isPlaying: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => (
  <div className="audio-controls flex justify-between">
    <button
      type="button"
      className="prev"
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <SkipPreviousIcon className="text-[#493e82] transition duration-300 !text-[30px]" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <PauseCircleIcon className="text-[#493e82] transition duration-300 !text-[40px]" />
      </button>
    ) : (
      <button
        type="button"
        className="play"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <PlayCircleIcon className="text-[#493e82] transition duration-300 !text-[40px]" />
      </button>
    )}
    <button
      type="button"
      className="next"
      aria-label="Next"
      onClick={onNextClick}
    >
      <SkipNextIcon className="text-[#493e82] transition duration-300 !text-[30px]" />
    </button>
  </div>
);

export default AudioControls;
