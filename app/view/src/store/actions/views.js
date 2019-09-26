import { createAction } from 'redux-actions'

// Products

export const showCreateProductForm = createAction(
  'VIEWS/SHOW:CREATE_PRODUCT_FORM'
)

export const hideCreateProductForm = createAction(
  'VIEWS/HIDE:CREATE_PRODUCT_FORM'
)
