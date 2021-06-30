/**
 *
 * MESSENGER COMPONENT
 *
 * This component takes in the JSON config of the friends list and renders a list
 * of friends recently active on fb_clone. The config file contains details for current and last
 * activity with a time stamp.
 */

import React from "react";
import friends from "../../assets/data/friends.json";
import "./messenger.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import VideoCallIcon from "@material-ui/icons/VideoCall";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function messenger(props) {
  // This map function builds the list of friends to be displayed below
  const friendsList = friends.map((item, index) => {
    // This funchtion checks for current activity status and renders the
    // corresponding ui element.
    function ActiveUser(props) {
      return (
        <div className="active-container">
          {item.active ? (
            // When active a green dot
            <span className="active-dot"></span>
          ) : (
            // When -inactive- the time last active
            <span className="active-last">{item.last_active}m </span>
          )}
        </div>
      );
    }

    // Buildings the individual user object
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

  // Container that holds messenger component
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
