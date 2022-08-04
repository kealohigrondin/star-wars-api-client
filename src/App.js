import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Nav from "./components/Nav";
// import Home from "./pages/Home";
// import PlanetList from "./pages/PlanetList";
// import PlanetDetails from "./pages/PlanetDetails";
// import PeopleList from "./pages/PeopleList";
// import FilmList from "./pages/FilmList";
// import SpeciesList from "./pages/SpeciesList";
// import StarshipList from "./pages/StarshipList";
// import VehicleList from "./pages/VehicleList";
import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="ui container">
        <p>breadcrumb</p>
        <Switch>
          {routes.map((route) => {
            console.log(route);
            return (
              <Route
                path={route.path}
                key={route.name}
                exact
                component={route.Component}
              />
            );
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
