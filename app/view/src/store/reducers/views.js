import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { showCreateProductForm, hideCreateProductForm } from '../actions/views'

const products = handleActions(
  {
    [showCreateProductForm]: (state) => ({
      ...state,
      isCreateProductFormHidden: false,
    }),
    [hideCreateProductForm]: (state) => ({
      ...state,
      isCreateProductFormHidden: true,
    }),
  },
  { isCreateProductFormHidden: true }
)

export const views = combineReducers({ products })
