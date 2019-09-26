import { combineReducers } from 'redux'

import { data } from './data'
import { views } from './views'

export const root = combineReducers({
  data,
  views,
})
