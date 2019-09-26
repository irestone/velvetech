import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

import { data } from './data'
import { views } from './views'

export const root = combineReducers({
  data,
  views,
  form,
})
