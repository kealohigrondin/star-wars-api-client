import _ from "lodash";
import { GET_PEOPLE } from "../actions/types";

const INITIAL_STATE = {};

const peopleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, ..._.mapKeys(action.payload, "name") };
    default:
      return state;
  }
};
export default peopleReducer;
