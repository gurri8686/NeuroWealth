import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControl";
import Backdrop from "./Backdrop";

// Define types for the track object
interface Track {
  title: string;
  artist: string;
  color: string;
  image: string;
  audioSrc: string;
}

interface AudioPlayerProps {
  tracks: Track[];
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ tracks }) => {
  // State
  const [trackIndex, setTrackIndex] = useState<number>(0);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  // Refs
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  // Start timer to update track progress
  const startTimer = () => {
    // Clear any timers already running
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  // Scrub the track to a new position
  const onScrub = (value: string) => {
    // Clear any timers already running
    if (intervalRef.current) clearInterval(intervalRef.current);
    audioRef.current.currentTime = parseFloat(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    setTrackIndex((prevIndex) =>
      prevIndex - 1 < 0 ? tracks.length - 1 : prevIndex - 1
    );
  };

  const toNextTrack = () => {
    setTrackIndex((prevIndex) =>
      prevIndex < tracks.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio-player bg-white w-[350px] p-[24px] rounded-[24px] shadow-[0_1px_6px_rgba(0,0,0,0.2)] text-center m-auto">
      <div className="track-info text-center m-auto">
        <img
          className="artwork m-auto rounded-full w-[200px]"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <h2 className="title my-4 text-[24px] font-bold text-[#493e82]">
          {title}
        </h2>
        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className="progress-bar w-full"
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
        <AudioControls
          isPlaying={isPlaying}
          onPrevClick={toPrevTrack}
          onNextClick={toNextTrack}
          onPlayPauseClick={setIsPlaying}
        />
      </div>
      <Backdrop
        trackIndex={trackIndex}
        activeColor={color}
        isPlaying={isPlaying}
      />
    </div>
  );
};

export default AudioPlayer;
