import { call, put, takeEvery, all } from 'redux-saga/effects';
import { GET_BROWSER_GEO, setGeo, FETCH_FORECAST, storeForecast, successFetch, fetchError } from './../actions/index';
import { api } from '../api';

const getGeo = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error),
  )
})

function* getBrowserGeo() {
  try{
    const positions = yield call(getGeo);
    const {latitude, longitude} = positions.coords;
    yield put(setGeo({lat: latitude, lon: longitude}))
  } catch (e) {
    yield put(fetchError(e.message));
  }

}

function* getForecast(action) {
  try{
    const forecast = yield call(api, action.payload);
    yield put(storeForecast(forecast));
    yield put(successFetch())
  } catch (e) {
    yield put(fetchError('Some error while getting forecast'));
  }

}

function* sagaWather() {
  yield takeEvery(GET_BROWSER_GEO, getBrowserGeo);
  yield takeEvery(FETCH_FORECAST, getForecast);
}

export function* rootSaga() {
  yield all([
    sagaWather(),
  ])
}
