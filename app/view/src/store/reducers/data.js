import { combineReducers } from 'redux'

import { categories } from './data/categories'
import { products } from './data/products'
import { user } from './data/user'

export const data = combineReducers({
  categories,
  products,
  user,
})
