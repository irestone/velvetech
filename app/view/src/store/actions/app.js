import { createAction } from 'redux-actions'

import { getUser } from './data/user'
import { getProducts } from './data/products'
import { getCategories } from './data/categories'

export const initApp = () => async (dispatch) => {
  dispatch(createAction('APP/INIT')())
  dispatch(getUser())
  dispatch(getProducts())
  dispatch(getCategories())
}
