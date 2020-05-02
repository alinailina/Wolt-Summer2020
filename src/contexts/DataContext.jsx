import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
import Restaurants from "../components/Restaurants";

export const DataContext = createContext();

const DataContextProvider = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    await Axios.get(
      "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
    ).then((response) => setRestaurants(response.data));
  };

  // console.log(restaurants);

  return (
    <DataContext.Provider value={{ ...restaurants }}>
      <Restaurants />
    </DataContext.Provider>
  );
};

export default DataContextProvider;
