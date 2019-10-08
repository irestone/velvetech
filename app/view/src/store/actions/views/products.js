import { createAction } from 'redux-actions'

// Create product

export const showAddProductForm = createAction(
  'VIEWS/PRODUCTS/SHOW:CREATE_PRODUCT_FORM'
)

export const hideAddProductForm = createAction(
  'VIEWS/PRODUCTS/HIDE:CREATE_PRODUCT_FORM'
)
