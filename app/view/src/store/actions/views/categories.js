import { createAction } from 'redux-actions'

export const showCreateCategoryForm = createAction(
  'VIEWS/CATEGORIES/SHOW:CREATE_CATEGORY_FORM'
)

export const hideCreateCategoryForm = createAction(
  'VIEWS/CATEGORIES/HIDE:CREATE_CATEGORY_FORM'
)
