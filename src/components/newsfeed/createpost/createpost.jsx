import React, { useState, useEffect } from "react";
import "../newsfeed.scss";
import UsrImg from "../../../assets/users/forrest.jpeg";

import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";

export default function CreatePost(props) {
  const User = { ...props.user[0].user };
  return (
    <div className="post">
      <div className="post-comment">
        <span>
          {/* #TODO Make Avatars a Component  */}
          <img
            src={UsrImg}
            className="icon-left user-avatar-sidenav"
            alt={`${User.firstName} ${User.lastName}`}
            title={`${User.firstName} ${User.lastName}`}
          />
        </span>
        <input
          className="post-comment__input"
          placeholder={`What's on your mind, ${User.firstName}?`}
        ></input>
      </div>
      <hr />
      <div className="post-engagement">
        <span className="post-item">
          <VideoCallOutlinedIcon className="icon-livevideo" /> Live Video
        </span>
        <span className="post-item">
          <PhotoLibraryOutlinedIcon className="icon-media" /> Photo/Video
        </span>
        <span className="post-item">
          <EmojiEmotionsOutlinedIcon className="icon-feeling" />
          Feeling/Activity
        </span>
      </div>
    </div>
  );
}
