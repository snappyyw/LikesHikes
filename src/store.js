import { createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import createSagaMiddleware from 'redux-saga';

import rootReducer from "./reducers";
import {rootWatcher} from './sagas'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger({
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootWatcher);