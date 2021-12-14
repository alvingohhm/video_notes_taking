import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = (props) => {
  const { videoId } = props;

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={videoOnReady} />;
};

export default VideoPlayer;
