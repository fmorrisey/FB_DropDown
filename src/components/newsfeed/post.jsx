/*  POST COMPONENT
This component builds the final posts before being returned
to the newsfeed component using the JSON config data passed
down from the app component.

Some smaller functions are self containing and other are external functions

*/

import React from "react";
import Privacy from "./privacy";
import "./newsfeed.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import CallMadeIcon from "@material-ui/icons/CallMade";

// Feed data is passed from App.js -> Newsfeed -> Post
export default function Posts(props) {
  // Creates an array of the objects that contains the posts
  const posts = props.feed.map((postItem, index) => {
    // Image Post Component
    function PostImage(props) {
      // When the post type is an image
      // it passes the url to thru
      // and returns a post formatted for images
      console.log(props.image);
      if (props.image) {
        return (
          <div key={`post-${index}`} className="post-image">
            <a className="img-wrapper" href="#">
              <img src={postItem.src} alt={postItem.type} />
            </a>
          </div>
        );
      }
    }

    // Comments Component
    function Comments(props) {
      // Map the array of comments attached to the post
      return props.postComments.map((comment, index) => {
        console.log("comment", comment.isLiked);
        return (
          <>
            <div key={index} className="post-comment">
              <AccountCircleIcon className="icon-account__small icon-left" />
              <div>
                <div className="post-comment__content">
                  <a href="#">
                    <b>{comment.user}</b>
                  </a>
                  <br />
                  {comment.content}
                </div>
                {/* Sets the state of the comment's like */}
                <div className="post-comment__engagement">
                  {/* isTrue sets text to blue */}
                  {comment.isLiked ? (
                    <a href="#" className="fbBlue">
                      Like
                    </a>
                  ) : (
                    <a href="#" className="">
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

    // POST COMPONENT
    return (
      // This is where the above functional components
      // are constructed into post components and returned to the DOM
      <div key={index} className="post">
        {/* The header of the post containing name, time, privacy status */}
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

        {/* CONTENT OF THE POST
        currently limited to text or image 
        */}
        <div className="content">
          {/* Post Text */}
          <p>{postItem.post}</p>
          {/* Post Image if image === isTrue */}
          <PostImage image={postItem.src} />
        </div>

        {/* Display HR */}
        <hr />

        {/* Engagement with the post */}
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

        {/* Display HR */}
        <hr />

        {/* Comments component returns the comments array to the DOM */}
        <Comments postComments={postItem.comments} />

        {/* User Comments
        Currently display only, non-functional  */}
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
