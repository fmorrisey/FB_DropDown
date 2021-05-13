import React, { useState } from "react";

export default function Navitem(props) {
  const [open, setOpen] = useState(false);

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
