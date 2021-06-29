/*
    PRIVACY COMPONENT

    This component returns the corresponding
    privacy icon based on the feed.json config
    back to the post component in the header section

    Currently has three know privacy access states
    with a null || undefined fall back.

    1) Public
    2) PublicFriends
    3) Private
*/

import React from "react";
import feed from "../../assets/data/feed.json";
import "./newsfeed.scss";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PublicIcon from "@material-ui/icons/Public";
import LockIcon from "@material-ui/icons/Lock";

export default function Privacy(props) {
  // Public access
  if (props.access === "public") {
    return (
      <span className="icon-privacy">
        <PublicIcon />
      </span>
    );
  }
  // Friends access
  if (props.access === "friends") {
    return (
      <span className="icon-privacy">
        <SupervisorAccountIcon />
      </span>
    );
  }
  // Private access
  if (props.access === "private") {
    return (
      <span className="icon-privacy">
        <LockIcon />
      </span>
    );
  }

  // Fall back returns NULL
  // to assist in catching errors
  if (null || undefined) {
    return "NULL";
  }
}
