import { CHANGE_UNITS, FETCH_FORECAST, STORE_FORECAST } from "./actions";

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
