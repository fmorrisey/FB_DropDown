import React from "react";
import feed from "../../assets/data/feed.json";
import "./newsfeed.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PublicIcon from "@material-ui/icons/Public";
import LockIcon from "@material-ui/icons/Lock";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function Newsfeed(props) {
  const posts = feed.map((item, index) => {
    function PostImage(props) {
      console.log(props.image);
      if (props.image) {
        return (
          <div key={`post-${index}`} className="post-image">
            <a className="img-wrapper" href="#">
              <img src={item.src} alt={item.type} />
            </a>
          </div>
        );
      }
      if (!props.image) {
        return null;
      }
    }

    function Privacy(props) {
      if (props.access === "public") {
        return (
          <span className="icon-privacy">
            <PublicIcon />
          </span>
        );
      }
      if (props.access === "friends") {
        return (
          <span className="icon-privacy">
            <SupervisorAccountIcon />
          </span>
        );
      }
      if (props.access === "private") {
        return (
          <span className="icon-privacy">
            <LockIcon />
          </span>
        );
      }
      if (null) {
        return "NULL";
      }
    }
    return (
      <div key={index} className="post">
        <div className="header">
          <span className="icon-account icon-left">
            <AccountCircleIcon />
          </span>
          <div className="top">
            <span className="username">{item.user}</span>
            <span className="time">
              {item.time} · <Privacy access={item.privacy} />{" "}
            </span>
          </div>
          <a className="icon-button__noBG icon-right">
            <MoreHorizIcon />
          </a>
        </div>
        <div className="content">
          <p>{item.post}</p>
          <PostImage image={item.src} />
        </div>

        <hr />
        <div className="post-engagement">
          <span className="post-item">
            <ThumbUpAltOutlinedIcon className="icon-like" /> Like
          </span>
          <span className="post-item">
            <ChatBubbleOutlineOutlinedIcon className="icon-comment" /> Comment
          </span>
          <span className="post-item">
            <CallMadeIcon className="icon-share" /> Share
          </span>
        </div>
        <hr />
        <div className="post-comment">
          <span className="icon-account__small icon-left">
            <AccountCircleIcon />
          </span>
          <input
            className="post-comment__input"
            placeholder="Write a comment..."
          ></input>
        </div>
      </div>
    );
  });
  return <div className="feed">{posts}</div>;
}
