import React from "react";
import friends from "../../assets/data/friends.json";
import "./messenger.scss";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function messenger(props) {
  const friendsList = friends.map((item, index) => {
    return (
      <div key={index} className="friend">
        <div className="header">
          <span className="icon-account icon-left">
            <AccountCircleIcon />
          </span>
          <span className="username">{item.user}</span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="messenger">{friendsList}</div>
    </div>
  );
}
