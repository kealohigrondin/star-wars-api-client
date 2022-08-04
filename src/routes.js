import Home from "./pages/Home";
import PlanetList from "./pages/PlanetList";
import PlanetDetails from "./pages/PlanetDetails";
import PeopleList from "./pages/PeopleList";
import FilmList from "./pages/FilmList";
import SpeciesList from "./pages/SpeciesList";
import StarshipList from "./pages/StarshipList";
import VehicleList from "./pages/VehicleList";

export default [
  { path: "/", name: "Home", Component: Home },
  { path: "/planets", name: "Planets", Component: PlanetList },
  { path: "/planets/:planetName", name: "Planet Details", Component: PlanetDetails },
  { path: "/people", name: "People", Component: PeopleList },
  { path: "/films", name: "Films", Component: FilmList },
  { path: "/species", name: "Species", Component: SpeciesList },
  { path: "/starships", name: "Starships", Component: StarshipList },
  { path: "/vehicles", name: "Vehicles", Component: VehicleList },
];
