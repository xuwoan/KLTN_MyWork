import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers.config';
import rootSagas from '../sagas';
import * as actions from '../actions';
import * as request from '../utils/request';
import * as constants from '../constants';

const sagaMiddleware = createSagaMiddleware();


const configureStore = () => {
 

  const store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSagas);
 
  return store;
};

export default configureStore();
