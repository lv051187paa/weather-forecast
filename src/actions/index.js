export const GET_BROWSER_GEO = 'GET_BROWSER_GEO';
export const SET_GEO = 'SET_GEO';

export const getGeo = () => ({
  type: GET_BROWSER_GEO,
})

export const setGeo = positions => ({
  type: SET_GEO,
  payload: positions
})
