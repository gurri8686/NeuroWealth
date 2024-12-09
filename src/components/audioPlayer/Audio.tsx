// src/pages/Audio.tsx
import React from "react";
import AudioPlayer from "./AudioPlayer"; // Make sure the AudioPlayer component is properly typed
import tracks from "./tracks";

const Audio: React.FC = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-[500] mb-2">
          Listen to Your Favorite Tracks
        </h1>
        <p className="text-[16px] text-[#555]">
          Enjoy a curated selection of music designed to set the mood. Explore
          new tracks and artists while
          <br /> you relax or focus.
        </p>
      </div>
      <div className="text-center">
        <AudioPlayer tracks={tracks} />
      </div>
      <div className="text-center mt-8">
        <p className="text-sm text-[#777]">
          Powered by our amazing music platform. Discover new tracks daily!
        </p>
      </div>
    </>
  );
};

export default Audio;
