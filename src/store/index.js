import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from '../reducers';
import enhance from './enhance';
import {rootSaga} from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

  const enhancers = enhance(applyMiddleware(sagaMiddleware));
  const store = createStore(reducer, enhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
