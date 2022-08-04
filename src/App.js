import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home";
import PlanetList from "./pages/PlanetList";
import PlanetDetails from "./pages/PlanetDetails";
import PeopleList from "./pages/PeopleList";
import FilmList from "./pages/FilmList";
import SpeciesList from "./pages/SpeciesList";
import StarshipList from "./pages/StarshipList";
import VehicleList from "./pages/VehicleList";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <p>breadcrumb</p>
      <div className="ui container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/planets" exact component={PlanetList} />
          <Route path="/details/:planetName" component={PlanetDetails} />
          <Route path="/people" exact component={PeopleList} />
          <Route path="/films" exact component={FilmList} />
          <Route path="/species" exact component={SpeciesList} />
          <Route path="/starships" exact component={StarshipList} />
          <Route path="/vehicles" exact component={VehicleList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
