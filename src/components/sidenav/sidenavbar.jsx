/**
 * SIDE NAVIGATION COMPONENT
 *
 * This this parent component of SideNav Items Component.
 * Functions in a similar manner to the navbar and navitem.
 *
 * See App.js for more details related to this component.
 */

import React from "react";
import "./sidenav.scss";

export default function Sidenavbar(props) {
  return (
    <div className="sidenav">
      <ul className="sidenav-nav">{props.children}</ul>
    </div>
  );
}
