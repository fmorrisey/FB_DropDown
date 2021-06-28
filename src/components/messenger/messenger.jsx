import React from "react";
import friends from "../../assets/data/friends.json";
import "./messenger.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function messenger(props) {
  const friendsList = friends.map((item, index) => {
    function ActiveUser(props) {
      return (
        <div className="active-container">
          {item.active ? (
            <span className="active-dot"></span>
          ) : (
            <span className="active-last">{item.last_active}m </span>
          )}
        </div>
      );
    }

    return (
      <div key={index} className="friend-item">
        <span className="icon-account__small icon-left mr">
          <AccountCircleIcon />
          <ActiveUser />
        </span>
        <span className="username">{item.user}</span>
      </div>
    );
  });

  return (
    <div className="messenger">
      <div>
        <span className="header">
          <h4>Sponsored</h4>
        </span>
        <hr />
        <span className="header">
          <h4>Contacts</h4>
        </span>
        {/* <span className="icon icon-button">
          <VideoCallIcon />
          <SearchIcon />
          <MoreHorizIcon />
        </span> */}
      </div>
      <div>{friendsList}</div>
    </div>
  );
}
