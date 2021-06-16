import React from "react";
import feed from "../../assets/data/feed.json";
import "./newsfeed.scss";

import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import PublicIcon from "@material-ui/icons/Public";
import LockIcon from "@material-ui/icons/Lock";

export default function Privacy(props) {
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
