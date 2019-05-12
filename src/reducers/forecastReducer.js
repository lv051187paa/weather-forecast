import { STORE_FORECAST, CHANGE_UNITS, } from './../actions/forecast/actions';
import { SUCCESS_FETCH, FETCH_ERROR } from './../actions/fetchResults/actions';

const forecastState = {
  units: 'c',
  fetching: true
};

export const forecast = (state = forecastState, { type, payload }) => {
  switch (type) {
    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      }
    case STORE_FORECAST:
      return {
        ...state,
        ...payload
      }
    case CHANGE_UNITS:
      return {
        ...state,
        units: payload,
        fetching: true
      }
    case SUCCESS_FETCH:
      return {
        ...state,
        fetching: payload
      }
    default:
      return state
  }
}
