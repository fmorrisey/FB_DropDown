import { KeyboardReturnRounded } from "@material-ui/icons";
import React, { useState } from "react";
import UsrImg from "../../assets/users/forrest.jpeg";

export default function Navitem(props) {
  const [open, setOpen] = useState(false);

  if (props.user) {
    const User = { ...props.user[0].user };

    return (
      <li className="nav-user">
        <img src={UsrImg} className="user-avatar-navbar" />
        {`${User.firstName}`}
      </li>
    );
  }

  if (props.icon) {
    return (
      <li className="nav-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className={
            open ? " icon-button__BG icon-button-active" : " icon-button__BG"
          }
          onClick={() => setOpen(!open)}
        >
          {props.icon}
        </a>

        {open && props.children}
      </li>
    );
  }
}
