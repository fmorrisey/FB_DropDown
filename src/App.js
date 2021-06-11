// BUILT INS
import React, { useState } from "react";

// ASSETS / INTERNALS
import Navbar from "./components/navbar/navbar.jsx";
import Navitem from "./components/navbar/navitem.jsx";
import DropdownMenu from "./components/dropdownmenu/dropdownmenu";
import Newsfeed from "./components/newsfeed/newsfeed";
import Messenger from "./components/messenger/messenger.jsx";

import FacebookIcon from "@material-ui/icons/Facebook";

// LOCAL
import { ReactComponent as BellIcon } from "./assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./assets/icons/caret.svg";

// @MATERIAL UI
import AppsIcon from "@material-ui/icons/Apps";

function App() {
  return (
    <>
      <Navbar>
        <Navitem icon={<FacebookIcon />} />
        <Navitem icon={<AppsIcon />} />
        <Navitem icon={<MessengerIcon />} />
        <Navitem icon={<BellIcon />} />

        <Navitem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </Navitem>
      </Navbar>
      <div className="flex-row">
        <Newsfeed />
        <Messenger />
      </div>
    </>
  );
}

export default App;
