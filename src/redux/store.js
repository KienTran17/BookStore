

import {
    applyMiddleware,
    compose,
    createStore as createReduxStore
  } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
  
import makeRootReducer from "./reducer"

const createStore = (initialState = {}, history) => {
    // const middleware = [thunk, logger]]
    const middleware = [thunk]
  
    const enhancers = []
  
    let composeEnhancers = compose
  
    const store = createReduxStore(
      makeRootReducer,
      initialState,
      composeEnhancers(applyMiddleware(...middleware), ...enhancers)
    )
  
    store.asyncReducers = {}
  
    return store
  }
  
export default createStore