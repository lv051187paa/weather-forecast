export const GET_BROWSER_GEO = 'GET_BROWSER_GEO';
export const SET_GEO = 'SET_GEO';
export const FETCH_FORECAST = 'FETCH_FORECAST';
export const STORE_FORECAST = 'STORE_FORECAST';

export const getGeo = () => ({
  type: GET_BROWSER_GEO,
})

export const setGeo = positions => ({
  type: SET_GEO,
  payload: positions
})

export const fetchForecast = query => ({
  type: FETCH_FORECAST,
  payload: query
})

export const storeForecast = forecast => ({
  type: STORE_FORECAST,
  payload: forecast
})
