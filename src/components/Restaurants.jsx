import React, { useState, useEffect } from "react";
import Axios from "axios";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    await Axios.get(
      "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
    ).then((response) => setRestaurants(response.data.restaurants));
  };

  // console.log(restaurants);

  return (
    <div className="container">
      {restaurants.map((restaurant, i) => (
        <Restaurant key={i} {...restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
