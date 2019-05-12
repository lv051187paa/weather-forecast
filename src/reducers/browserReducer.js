import { SET_GEO, CLEAR_GEO, FETCH_ERROR, SUCCESS_FETCH } from './../actions/index';

const browserState = {fetching: true};

export const browserGeo = (state = browserState, {type, payload}) => {
  switch (type) {
    case SET_GEO:
      return {
        ...state,
        ...payload
      }
    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        fetching: false
      }
    case CLEAR_GEO:
      return {
        ...state,
        lat: '',
        lon: '',
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
