import { createStore, compose, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'

import { root as rootReducer } from './store/reducers/root'

const middlewares = []
middlewares.push(applyMiddleware(thunk))
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(rootReducer, compose(...middlewares))
