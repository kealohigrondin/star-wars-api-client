import React from "react";
import { Route, Routes } from "react-router-dom";
import PlanetList from "./pages/PlanetList";
import PlanetDetails from "./pages/PlanetDetails";

const App = () => {
  return (
    <div className="ui container">
      <Routes>
        <Route path="/" element={<PlanetList />} />
        <Route path="details/:planetName" element={<PlanetDetails/>} />
        <Route path="*" element={<div>No Matches for this url!</div>} />
      </Routes>
    </div>
  );
};

export default App;
