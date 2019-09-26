import { createAction } from 'redux-actions'

import { getUser } from './data/user'
import { getProducts } from './data/products'

export const initApp = () => async (dispatch) => {
  dispatch(createAction('APP/INIT')())
  dispatch(getUser())
  dispatch(getProducts())
}
