/**
 * NEWSFEED COMPONENT
 * Currently contains
 * - Status update (create post )
 * - Posts
 */

import React from "react";

import "./newsfeed.scss";
import CreatePost from "./createpost/createpost";

import Posts from "./post";

export default function Newsfeed(props) {
  console.log("feed here", props.feed);
  return (
    <div className="feed">
      {/* #TODO: Add filtering */}
      <CreatePost user={props.user} />
      <Posts feed={props.feed} />
    </div>
  );
}
