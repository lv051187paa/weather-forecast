import { SET_GEO, CLEAR_GEO,  } from './../actions/browser/actions';
import {FETCH_ERROR, SUCCESS_FETCH} from './../actions/fetchResults/actions'

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
