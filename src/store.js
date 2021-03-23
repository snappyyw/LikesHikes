import { createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const logger=createLogger({
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))