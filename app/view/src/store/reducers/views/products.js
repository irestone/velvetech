import { handleActions } from 'redux-actions'

import {
  showCreateProductForm,
  hideCreateProductForm,
} from '../../actions/views/products'

export const products = handleActions(
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
