import { createAction } from '../../../utils/actions'

const ca = createAction.bind(this, 'views/categories')

export const showAddCategoryForm = ca('show', 'add_category_form')
export const hideAddCategoryForm = ca('hide', 'add_category_form')
export const editCategory = ca('edit', 'category')
export const cancelCategoryEditing = ca('cancel', 'category_editing')
