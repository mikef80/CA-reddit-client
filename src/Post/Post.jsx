import React from "react";
// import "node_modules/video-react/dist/video-react.css";
import "../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

const Post = (props) => {
  const { title, thumbnail, selftext, media } = props.data;

  let video_url;

  if (media) {
    if (media.reddit_video) {
      video_url = media.reddit_video.fallback_url;
    }
  }

  return (
    <div className="border border-slate-400 rounded flex flex-col p-4 my-2 font">
      <h3 className="ibmPlexSans font-medium pb-4">{title ? title : ""}</h3>
      {!media && thumbnail ? (
        <img src={thumbnail} alt={title} className="rounded-md" />
      ) : (
        ""
      )}
      {media && 
        <Player playsInline src={video_url} className="rounded-md overflow-hidden">
          <BigPlayButton position="center" />
        </Player>}
      <p className="notoSans font-normal text-sm">{selftext ? selftext : ""}</p>
    </div>
  );
};

export default Post;

// id, title, thumbnail, selftext
