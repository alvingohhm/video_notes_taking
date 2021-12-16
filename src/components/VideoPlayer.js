import React, { useContext } from "react";
import YouTube from "react-youtube";
import VideoContext from "../context/video_context";

const VideoPlayer = (props) => {
  const { videoId } = props;
  const { setPlayerObj } = useContext(VideoContext);

  const opts = {
    // height: "390",
    // width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    setPlayerObj(event.target);
    event.target.stopVideo();
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={videoOnReady}
      containerClassName="ratio ratio-16x9 w-75 mt-3"
      className="rounded-3"
    />
  );
};

export default VideoPlayer;
