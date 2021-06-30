/**
 * SIDENAV ITEM COMPONENT
 *
 * This is child of SideNavbar component. Contains two conditionals
 * that reacts to the props of either a user or icon.
 *
 * See App.js for more details related to this component.
 */

import React from "react";
import "./sidenav.scss";
import UsrImg from "../../assets/users/forrest.jpeg";

export default function Sidenavitem(props) {
  console.log(props);
  if (props.user) {
    const User = { ...props.user[0].user };
    return (
      <li className="side-item">
        <span>
          {/* #TODO Make Avatars a Component  */}
          <img
            src={UsrImg}
            className="icon-left user-avatar-sidenav"
            alt={`${User.firstName} ${User.lastName}`}
            title={`${User.firstName} ${User.lastName}`}
          />
        </span>
        <span className="display">{`${User.firstName} ${User.lastName}`}</span>
      </li>
    );
  }

  if (props.icon) {
    return (
      <li className="side-item">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="icon-left icon-account">
          {props.icon}
        </a>
        <span className="display">{props.display}</span>
      </li>
    );
  }

  if (props.hr) {
    return (
      <span className="side-item">
        <hr />
      </span>
    );
  }
}
