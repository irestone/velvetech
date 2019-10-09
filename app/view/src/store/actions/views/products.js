import { createAction } from '../../../utils/actions'

const ca = createAction.bind(this, 'views/products')

export const showAddProductForm = ca('show', 'add_product_form')
export const hideAddProductForm = ca('hide', 'add_product_form')
