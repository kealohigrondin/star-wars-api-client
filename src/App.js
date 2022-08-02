import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import PlanetList from "./pages/PlanetList";
import PlanetDetails from "./pages/PlanetDetails";

const App = () => {
  return (
    <BrowserRouter>
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={PlanetList} />
          <Route path="/details/:planetName" component={PlanetDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
