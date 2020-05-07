import React, { useState } from "react";

const Sort = () => {
  const [array, setArray] = useState([1, 10, 5, 7, 3, 6, 2, 8]);

  const sort = () => {
    const newArray = [...array].sort(function (a, b) {
      return a - b;
    });
    console.log(newArray);
    setArray(newArray);
  };

  return (
    <div>
      {array.map((num, i) => (
        <p key={i}>{num}</p>
      ))}
      <button onClick={sort}>Click</button>
    </div>
  );
};

export default Sort;
