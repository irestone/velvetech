import { createAsyncAction } from '../../../utils/actions'
import axios from 'axios'

// =====================================
//  CREATE
// =====================================

export const [
  addCategory,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryFailure,
] = createAsyncAction(
  'data',
  'add',
  'category',
  async ({ request, success, failure }, values) => {
    request()
    try {
      const { data } = await axios.post(`/api/categories`, values)
      success(data.data)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)

// =====================================
//  READ
// =====================================

export const [
  getCategories,
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
] = createAsyncAction(
  'data',
  'get',
  'categories',
  async ({ request, success, failure }) => {
    request()
    try {
      const { data } = await axios.get(`/api/categories`)
      success(data.data)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)

// =====================================
//  UPDATE
// =====================================

export const [
  updateCategory,
  updateCategoryRequest,
  updateCategorySuccess,
  updateCategoryFailure,
] = createAsyncAction(
  'data',
  'update',
  'category',
  async ({ request, success, failure }, id, values) => {
    request()
    try {
      const { data } = await axios.put(`/api/categories/${id}`, values)
      success(data.data)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)

// =====================================
//  DELETE
// =====================================

export const [
  deleteCategory,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure,
] = createAsyncAction(
  'data',
  'delete',
  'category',
  async ({ request, success, failure }, id) => {
    request()
    try {
      await axios.delete(`/api/categories/${id}`)
      success(id)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)
