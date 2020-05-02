import React from "react";

import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";

import DataContextProvider from "./contexts/DataContext";

function App() {
  return (
    <div>
      <Navbar />
      <DataContextProvider>
        <Restaurants />
      </DataContextProvider>
    </div>
  );
}

export default App;
