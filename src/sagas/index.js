import { call, put, takeEvery, all } from 'redux-saga/effects';
import { GET_BROWSER_GEO, SET_GEO, setGeo } from './../actions/index';

const getGeo = () => new Promise((resolve, reject) => {
  navigator.geolocation.getCurrentPosition(
    location => resolve(location),
    error => reject(error),
  )
})

function* getBrowserGeo() {
  const positions = yield call(getGeo);
  const {latitude, longitude} = positions.coords;
  yield put(setGeo({latitude, longitude}))

}

function* sagaWather() {
  yield takeEvery('GET_BROWSER_GEO', getBrowserGeo);
}

export function* rootSaga() {
  yield all([
    sagaWather(),
  ])
}
