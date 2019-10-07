import { handleActions } from 'redux-actions'

import {
  getProductsSuccess,
  addProductSuccess,
  deleteProductsSuccess,
  updateProductSuccess,
} from '../../actions/data/products'

export const products = handleActions(
  {
    [addProductSuccess]: (state, { payload }) => [...state, payload],
    [getProductsSuccess]: (state, { payload }) => payload,
    [updateProductSuccess]: (state, { payload }) =>
      state.map((p) => (p._id === payload._id ? payload : p)),
    [deleteProductsSuccess]: (state, { payload }) =>
      state.filter(({ _id }) => !payload.includes(_id)),
  },
  []
)
