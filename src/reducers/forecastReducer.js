import { STORE_FORECAST, CHANGE_UNITS, SUCCESS_FETCH, FETCH_ERROR } from './../actions/index';

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
