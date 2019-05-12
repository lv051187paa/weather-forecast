import { SET_GEO, STORE_FORECAST } from './../actions/index';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_GEO:
      return {...state, browserGeo: payload}
    case STORE_FORECAST:
      return {...state, forecast: payload}
    default:
      return state
  }
}
