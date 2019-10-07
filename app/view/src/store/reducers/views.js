import { combineReducers } from 'redux'

import { categories } from './views/categories'
import { products } from './views/products'

export const views = combineReducers({
  categories,
  products,
})
