import React, { createContext } from "react";

// Children
import Restaurants from "../components/Restaurants";

const restaurants = [
  {
    blurhash: "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
    city: "Helsinki",
    currency: "EUR",
    delivery_price: 390,
    description: "Asenneburgeri",
    image:
      "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
    location: [24.941325187683105, 60.169938852212965],
    name: "Social Burgerjoint Citycenter",
    online: false,
    tags: ["hamburger", "fries"],
  },
  {
    blurhash: "U8INy*D+KjIW%3pZ$yx[5T0Lv|_1.3m,0z9h",
    city: "Helsinki",
    currency: "EUR",
    delivery_price: 390,
    description: "Japanilaista ramenia parhaimmillaan",
    image:
      "https://prod-wolt-venue-images-cdn.wolt.com/5d108aa82e757db3f4946ca9/d88ebd36611a5e56bfc6a60264fe3f81",
    location: [24.941786527633663, 60.169934599421396],
    name: "Momotoko Citycenter",
    online: false,
    tags: ["ramen", "risotto"],
  },
];

// const [restaurants, setRestaurants] = useState([]);

//   useEffect(() => {
//     getRestaurants();
//   }, []);

//   const getRestaurants = async () => {
//     await Axios.get(
//       "https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json"
//     ).then((response) => setRestaurants(response.data));
//   };

//   console.log(restaurants);

export const DataContext = createContext(restaurants);

export const DataContextProvider = () => {
  return (
    <DataContext.Provider value={restaurants}>
      <Restaurants />
    </DataContext.Provider>
  );
};

export default DataContextProvider;
