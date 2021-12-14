import React, { useRef, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  React.useEffect(() => {
    // to make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      // update player
    }
  }, [options, videoRef]);

  return <div></div>;
};

export default VideoPlayer;
