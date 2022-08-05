import swapi from "../api/swapi";
import { GET_PEOPLE, GET_PLANETS, GET_PLANETS_ERROR } from "./types";

export const getPlanets = () => async (dispatch) => {
  swapi
    .get("/planets")
    .then((response) => {
      dispatch({ type: GET_PLANETS, payload: response.data.results });
    })
    .catch((err) => {
      console.log("hello", err.response);
      dispatch({ type: GET_PLANETS_ERROR, payload: GET_PLANETS_ERROR });
    });
  // some kind of error state when the swapi call is blocked
};

//get info for one planet using the url params
export const getPlanet = (planetName) => {
  console.log(planetName, "is in the action");
};

export const getPeople = () => async (dispatch) => {
  swapi
  .get("/people")
  .then((response) => {
    dispatch({ type: GET_PEOPLE, payload: response.data.results });
  });
};

export const getFilms = () => {};

export const getSpecies = () => {};

export const getStarships = () => {};

export const getVehicles = () => {};
