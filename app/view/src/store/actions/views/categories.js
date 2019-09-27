import { createAction } from 'redux-actions'

// creating category

export const showCreateCategoryForm = createAction(
  'VIEWS/CATEGORIES/SHOW:CREATE_CATEGORY_FORM'
)

export const hideCreateCategoryForm = createAction(
  'VIEWS/CATEGORIES/HIDE:CREATE_CATEGORY_FORM'
)

// editing category

export const editCategory = createAction('VIEWS/CATEGORIES/EDIT:CATEGORY')
export const cancelCategoryEditing = createAction(
  'VIEWS/CATEGORIES/CANCEL:CATEGORY_EDITING'
)
