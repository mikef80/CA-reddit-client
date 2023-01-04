import React from "react";

const Post = (props) => {
  const { title, thumbnail, selftext, media } = props.data;
  
  let video_url;

  if (media) {
    if(media.reddit_video) {
      video_url = media.reddit_video.fallback_url;
    }
  }

  return (
    <div
      role="generic"
      className="border border-slate-400 rounded flex flex-col p-4 my-2 font"
    >
      <h3 className="ibmPlexSans font-medium pb-4">{title ? title : ""}</h3>
      {!media && thumbnail ? <img src={thumbnail} alt={title} className='rounded-md' /> : ""}
      {media && <video src={video_url} controls />}
      <p className="notoSans font-normal text-sm">{selftext ? selftext : ""}</p>
    </div>
  );
};

export default Post;

// id, title, thumbnail, selftext
