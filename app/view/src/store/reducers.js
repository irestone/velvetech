import { handleActions } from 'redux-actions'

import { getUserSuccess } from './actions/user'
import { getProductsSuccess } from './actions/products'
import { getCategoriesSuccess } from './actions/categories'

export const rootReducer = handleActions(
  {
    [getUserSuccess]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
    [getProductsSuccess]: (state, { payload }) => ({
      ...state,
      products: payload,
    }),
    [getCategoriesSuccess]: (state, { payload }) => ({
      ...state,
      categories: payload,
    }),
  },
  { user: null, products: [], categories: [] }
)
