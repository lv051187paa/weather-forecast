import { FETCH_ERROR, SUCCESS_FETCH } from "./actions";

export const successFetch = () => ({
  type: SUCCESS_FETCH,
  payload: false
})

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error
})
