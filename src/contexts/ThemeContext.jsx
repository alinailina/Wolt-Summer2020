import React, { createContext } from "react";

// Children
import Navbar from "../components/Navbar";

const themes = {
  dark: {
    color: "white",
    background: "rgb(10, 161, 225)",
    filter: "invert(100%)",
  },
  light: {
    color: "rgb(10, 161, 225)",
    background: "white",
    filter: "invert(0%)",
  },
};

export const ThemeContext = createContext(themes.dark);

export const ThemeContextProvider = () => {
  return (
    <ThemeContext.Provider value={themes}>
      <Navbar />
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
