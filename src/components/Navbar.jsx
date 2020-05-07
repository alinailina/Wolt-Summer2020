import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Children
import ToolBar from "./Toolbar";

const Navbar = (props) => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <nav style={{ background: theme.background, color: theme.color }}>
      <div>
        <a href="/">
          <span>
            <img
              style={{ filter: theme.filter }}
              src={require("../assets/wolt.png")}
              alt="wolt-logo"
            />
          </span>
        </a>
        <input type="text" placeholder="Search" />
      </div>
      <ToolBar />
    </nav>
  );
};

export default Navbar;
