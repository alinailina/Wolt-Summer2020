import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Toolbar = () => {
  const restaurants = useContext(DataContext);

  console.log(restaurants);
  return (
    <ul className="toolbar">
      <li>
        <button>A-Z</button>
      </li>
      <li>
        <button>Z-A</button>
      </li>
    </ul>
  );
};

export default Toolbar;
