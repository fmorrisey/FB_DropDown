import React from "react";
import Privacy from "./privacy";
import "./newsfeed.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import CallMadeIcon from "@material-ui/icons/CallMade";

export default function Posts(props) {
  // Feed data is passed from App.js -> newsfeed -> posts
  const posts = props.feed.map((postItem, index) => {
    function PostImage(props) {
      console.log(props.image);
      if (props.image) {
        return (
          <div key={`post-${index}`} className="post-image">
            <a className="img-wrapper" href="">
              <img src={postItem.src} alt={postItem.type} />
            </a>
          </div>
        );
      }
      if (!props.image) {
        return null;
      }
    }

    function Comments(props) {
      return props.postComments.map((comment, index) => {
        console.log("comment", comment.isLiked);
        return (
          <>
            <div key={index} className="post-comment">
              <AccountCircleIcon className="icon-account__small icon-left" />
              <div>
                <div className="post-comment__content">
                  <a href="">
                    <b>{comment.user}</b>
                  </a>
                  <br />
                  {comment.content}
                </div>
                <div className="post-comment__engagement">
                  {comment.isLiked ? (
                    <a href="" className="fbBlue">
                      Like
                    </a>
                  ) : (
                    <a href="" className="">
                      Like
                    </a>
                  )}{" "}
                  · Reply · {comment.time}
                </div>
              </div>
            </div>
          </>
        );
      });
    }

    return (
      <div key={index} className="post">
        <div className="header">
          <span className="icon-account icon-left">
            <AccountCircleIcon />
          </span>
          <div className="top">
            <span className="username">{postItem.user}</span>
            <span className="time">
              {postItem.time} · <Privacy access={postItem.privacy} />{" "}
            </span>
          </div>
          <a className="icon-button__noBG icon-right">
            <MoreHorizIcon />
          </a>
        </div>
        <div className="content">
          <p>{postItem.post}</p>
          <PostImage image={postItem.src} />
        </div>

        <hr />
        <div className="post-engagement">
          <span className="post-engagement-action">
            <ThumbUpAltOutlinedIcon className="icon-action" /> Like
          </span>
          <span className="post-engagement-action">
            <ChatBubbleOutlineOutlinedIcon className="icon-action" /> Comment
          </span>
          <span className="post-engagement-action">
            <CallMadeIcon className="icon-action" /> Share
          </span>
        </div>
        <hr />
        <Comments postComments={postItem.comments} />
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
  return posts;
}
