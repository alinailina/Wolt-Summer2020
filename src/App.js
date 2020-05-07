import React from "react";
import DataContextProvider from "./contexts/DataContext";

// Children
import Navbar from "./components/Navbar";
import Restaurants from "./components/Restaurants";

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
