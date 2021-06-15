import React from "react";
import "./sidenav.scss";

export default function Sidenavbar(props) {
  return (
    <div className="sidenav">
      <ul className="sidenav-nav">{props.children}</ul>
    </div>
  );
}
