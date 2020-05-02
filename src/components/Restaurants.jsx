import React from "react";
import { DataContext } from "../contexts/DataContext";
import Restaurant from "./Restaurant";

const Restaurants = () => {
  // console.log(DataContext);

  return (
    <DataContext.Consumer>
      {(DataContext) => {
        // console.log(DataContext);
        const { restaurants } = DataContext;
        // console.log(restaurants);
        if (restaurants) {
          return (
            <div className="container">
              {restaurants.map((restaurant, i) => (
                <Restaurant key={i} {...restaurant} />
              ))}
            </div>
          );
        }
      }}
    </DataContext.Consumer>
  );
};

export default Restaurants;
