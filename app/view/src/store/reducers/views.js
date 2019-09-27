import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import {
  showCreateProductForm,
  hideCreateProductForm,
} from '../actions/views/products'

import {
  showCreateCategoryForm,
  hideCreateCategoryForm,
  editCategory,
  cancelCategoryEditing,
} from '../actions/views/categories'
import { deleteCategorySuccess } from '../actions/data/categories'

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
    [editCategory]: (state, { payload: id }) => ({
      ...state,
      editing: [...state.editing, id],
    }),
    [cancelCategoryEditing]: (state, { payload: id }) => ({
      ...state,
      editing: state.editing.filter((eid) => eid !== id),
    }),
    [deleteCategorySuccess]: (state, { payload: id }) => ({
      ...state,
      editing: state.editing.filter((eid) => eid !== id),
    }),
  },
  { isAddCategoryFormHidden: true, editing: [] }
)

export const views = combineReducers({ products, categories })
