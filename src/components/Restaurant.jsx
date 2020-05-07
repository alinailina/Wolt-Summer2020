import React from "react";

const Restaurant = ({ image, name, description }) => {
  return (
    <div>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Restaurant;
