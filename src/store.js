import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import IndexSagas from './sagas/index';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const configureStore = preloaderState => (
  createStore(
    rootReducer,
    preloaderState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )
);

const store = configureStore({});

sagaMiddleware.run(IndexSagas);

export default store;