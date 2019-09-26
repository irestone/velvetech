import { handleActions } from 'redux-actions'

import { getUserSuccess } from '../actions/data/user'
import { getProductsSuccess } from '../actions/data/products'
import {
  getCategoriesSuccess,
  addCategorySuccess,
} from '../actions/data/categories'

export const data = handleActions(
  {
    [getUserSuccess]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
    [getProductsSuccess]: (state, { payload }) => ({
      ...state,
      products: payload,
    }),
    [addCategorySuccess]: (state, { payload }) => ({
      ...state,
      categories: [...state.categories, payload],
    }),
    [getCategoriesSuccess]: (state, { payload }) => ({
      ...state,
      categories: payload,
    }),
  },
  { user: null, products: [], categories: [] }
)
