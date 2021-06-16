import React, { useState, useEffect } from "react";
import UsrImg from "../../assets/users/forrest.jpeg";

export default function CreatePost(props) {
  const User = { ...props.user[0].user };
  return (
    <div>
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
    </div>
  );
}
