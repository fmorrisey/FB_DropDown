// BUILT INS
import React, { useState } from "react";

// ASSETS / INTERNALS
import Navbar from "./components/navbar/navbar.jsx";
import Navitem from "./components/navbar/navitem.jsx";
import DropdownMenu from "./components/dropdownmenu/dropdownmenu.jsx";

// LOCAL
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

// @MATERIAL UI
import AppsIcon from "@material-ui/icons/Apps";

function App() {
  return (
    <Navbar>
      <Navitem icon={<AppsIcon />} />
      <Navitem icon={<MessengerIcon />} />
      <Navitem icon={<BellIcon />} />

      <Navitem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </Navitem>
    </Navbar>
  );
}

export default App;
