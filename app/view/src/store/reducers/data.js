import { handleActions } from 'redux-actions'

import { getUserSuccess } from '../actions/data/user'
import { getProductsSuccess, addProductSuccess } from '../actions/data/products'
import {
  getCategoriesSuccess,
  addCategorySuccess,
  deleteCategorySuccess,
  updateCategorySuccess,
} from '../actions/data/categories'

export const data = handleActions(
  {
    [getUserSuccess]: (state, { payload }) => ({
      ...state,
      user: payload,
    }),
    [addProductSuccess]: (state, { payload }) => ({
      ...state,
      products: [...state.products, payload],
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
    [updateCategorySuccess]: (state, { payload: category }) => ({
      ...state,
      categories: state.categories.map((c) =>
        c._id === category._id ? category : c
      ),
    }),
    [deleteCategorySuccess]: (state, { payload }) => ({
      ...state,
      categories: state.categories.filter((c) => c._id !== payload),
    }),
  },
  { user: null, products: [], categories: [] }
)
