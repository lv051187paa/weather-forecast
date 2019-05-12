import { combineReducers } from 'redux'
import {browserGeo} from "./browserReducer";
import {forecast} from "./forecastReducer";

export const reducer = combineReducers({
  browserGeo,
  forecast
})
