import { createAction } from 'redux-actions'

import { getUser } from './user'
import { getProducts } from './products'

export const initApp = () => async (dispatch) => {
  dispatch(createAction('INIT_APP')())
  dispatch(getUser())
  dispatch(getProducts())
}
