export const GET_BROWSER_GEO = 'GET_BROWSER_GEO';
export const SET_GEO = 'SET_GEO';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const STORE_FORECAST = 'STORE_FORECAST';
export const CHANGE_UNITS = 'CHANGE_UNITS';
export const CLEAR_GEO = 'CLEAR_GEO';
export const SUCCESS_FETCH = 'SUCCESS_FETCH';

export const getGeo = () => ({
  type: GET_BROWSER_GEO,
})

export const setGeo = positions => ({
  type: SET_GEO,
  payload: positions
})

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error
})

export const fetchForecast = query => ({
  type: FETCH_FORECAST,
  payload: query
})

export const storeForecast = forecast => ({
  type: STORE_FORECAST,
  payload: forecast
})

export const changeUnits = unit => ({
  type: CHANGE_UNITS,
  payload: unit
})

export const clearLocation = () => ({
  type: CLEAR_GEO,
})

export const successFetch = () => ({
  type: SUCCESS_FETCH,
  payload: false
})
