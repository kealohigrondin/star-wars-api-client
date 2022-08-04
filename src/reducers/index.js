import {combineReducers} from 'redux';
import planetReducer from './planetReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
    planets: planetReducer,
    people: peopleReducer
})