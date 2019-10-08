import { handleActions } from 'redux-actions'

import {
  showAddProductForm,
  hideAddProductForm,
} from '../../actions/views/products'

export const products = handleActions(
  {
    [showAddProductForm]: (state) => ({
      ...state,
      isAddProductFormHidden: false,
    }),
    [hideAddProductForm]: (state) => ({
      ...state,
      isAddProductFormHidden: true,
    }),
  },
  { isAddProductFormHidden: true }
)
