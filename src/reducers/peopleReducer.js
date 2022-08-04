import _ from "lodash";
import { GET_PEOPLE } from "../actions/types";

const peopleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PEOPLE:
      return { ...state, ..._.mapKeys(action.payload, "url") };
    default:
      return state;
  }
};
export default peopleReducer;
