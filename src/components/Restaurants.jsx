import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

// Children
import Restaurant from "../components/Restaurant";

const Restaurants = () => {
  const restaurants = useContext(DataContext);
  console.log(restaurants);
  return (
    <div className="container">
      {restaurants.map((restaurant, i) => (
        <Restaurant {...restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
