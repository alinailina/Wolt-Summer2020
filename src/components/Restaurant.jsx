import React from "react";

const Restaurant = (props) => {
  // console.log(props);
  return (
    <div>
      <img src={props.image} alt="" />
      <div>
        {" "}
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Restaurant;
