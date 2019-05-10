import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import enhance from './enhance';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}) {
  const enhancers = enhance(applyMiddleware(sagaMiddleware));
  const store = createStore(() => {}, initialState, enhancers);

//   sagaMiddleware.run();

  return store;
}