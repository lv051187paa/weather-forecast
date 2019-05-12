import { SET_GEO } from './../actions/index';

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_GEO:
      return {...state, browserGeo: payload}
    default:
      return state
  }
}
