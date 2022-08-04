import _ from "lodash";
import { GET_PLANETS, GET_PLANETS_ERROR, GET_PLANET } from "../actions/types";

const INITIAL_STATE = {};

const planetReducer = (state = INITIAL_STATE, action) => {
  //use switch so we can add new cases in future like getting one planet
  switch (action.type) {
    case GET_PLANETS:
      //map thru the list of keys from the response object and add each to the state
      // as a key value pair of id:payload (payload being the planet object)
      return { ...state, ..._.mapKeys(action.payload, "name") };
    case GET_PLANET:
      //get one planet and add to state
      return {...state, [action.payload.name]: action.payload};
    case GET_PLANETS_ERROR:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default planetReducer;
