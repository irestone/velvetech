import { createAction } from 'redux-actions'

export const showCreateProductForm = createAction(
  'VIEWS/PRODUCTS/SHOW:CREATE_PRODUCT_FORM'
)

export const hideCreateProductForm = createAction(
  'VIEWS/PRODUCTS/HIDE:CREATE_PRODUCT_FORM'
)
