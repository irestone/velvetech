import { createAction } from 'redux-actions'

const act = (action) => createAction(`VIEWS/CATEGORIES/${action}`)

// Forms
export const showAddCategoryForm = act('SHOW:ADD_CATEGORY_FORM')
export const hideAddCategoryForm = act('HIDE:ADD_CATEGORY_FORM')
export const editCategory = act('EDIT:CATEGORY')
export const cancelCategoryEditing = act('CANCEL:CATEGORY_EDITING')
