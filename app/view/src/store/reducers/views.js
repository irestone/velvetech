import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
  showCreateProductForm,
  hideCreateProductForm,
} from '../actions/views/products'

import {
  showCreateCategoryForm,
  hideCreateCategoryForm,
} from '../actions/views/categories'

const products = handleActions(
  {
    [showCreateProductForm]: (state) => ({
      ...state,
      isAddProductFormHidden: false,
    }),
    [hideCreateProductForm]: (state) => ({
      ...state,
      isAddProductFormHidden: true,
    }),
  },
  { isAddProductFormHidden: true }
)

const categories = handleActions(
  {
    [showCreateCategoryForm]: (state) => ({
      ...state,
      isAddCategoryFormHidden: false,
    }),
    [hideCreateCategoryForm]: (state) => ({
      ...state,
      isAddCategoryFormHidden: true,
    }),
  },
  { isAddCategoryFormHidden: true }
)

export const views = combineReducers({ products, categories })
