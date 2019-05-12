import { CLEAR_GEO, GET_BROWSER_GEO, SET_GEO } from "./actions";

export const getGeo = () => ({
  type: GET_BROWSER_GEO,
})

export const setGeo = positions => ({
  type: SET_GEO,
  payload: positions
})

export const clearLocation = () => ({
  type: CLEAR_GEO,
})
