import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <span>
          <img src={require("../assets/wolt.png")} alt="wolt-logo" />
        </span>
      </a>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
