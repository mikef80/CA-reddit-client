import React from "react";
import "../../node_modules/video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";

const Post = (props) => {
  const { title, selftext, media } = props.data; 
  let photo;

  let video_url;

  if (media) {
    if (media.reddit_video) {
      video_url = media.reddit_video.fallback_url;
    }
  }

  if (props.data.preview) {
    photo = props.data.url_overridden_by_dest;
  }

  return (
    <div className="border-[1px] border-black flex flex-col p-4 my-2 font">
      <h3 className="ibmPlexSans font-medium pb-4">{ title ? title : "" }</h3>
      { !media && photo ? (
        <img src={ photo } alt={ title } className="rounded-md border-black border" />
      ) : (
        ""
      ) }
      {media && 
        <Player playsInline src={video_url} className="rounded-md overflow-hidden">
          <BigPlayButton position="center" />
        </Player>}
      <p className="notoSans font-normal text-sm">{selftext ? selftext : ""}</p>
    </div>
  );
};

export default Post;
