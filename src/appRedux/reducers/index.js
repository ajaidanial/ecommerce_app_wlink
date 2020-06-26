import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import appReducers from './app'
import dummyReducers from './dummy'

const reducers = combineReducers({
  routing: routerReducer,
  dummy: dummyReducers,
  app: appReducers
})

export default reducers
