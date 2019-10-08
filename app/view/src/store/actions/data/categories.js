import { createAction as act } from 'redux-actions'
import axios from 'axios'

// =====================================
//  CREATE
// =====================================

export const addCategoryRequest = act('DATA/ADD:CATEGORY...')
export const addCategorySuccess = act('...[SUCCESS](DATA/ADD:CATEGORY)')
export const addCategoryFailure = act('...[FAILURE](DATA/ADD:CATEGORY)')

export const addCategory = (values) => async (dispatch) => {
  dispatch(addCategoryRequest())
  try {
    const { data } = await axios.post(`/api/categories`, values)
    dispatch(addCategorySuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(addCategoryFailure(error))
  }
}

// =====================================
//  READ
// =====================================

// Get all

export const getCategoriesRequest = act('DATA/GET:CATEGORIES...')
export const getCategoriesSuccess = act('...[SUCCESS](DATA/GET:CATEGORIES)')
export const getCategoriesFailure = act('...[FAILURE](DATA/GET:CATEGORIES)')

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesRequest())
  try {
    const { data } = await axios.get(`/api/categories`)
    dispatch(getCategoriesSuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(getCategoriesFailure(error))
  }
}

// =====================================
//  UPDATE
// =====================================

export const updateCategoryRequest = act('DATA/UPDATE:CATEGORY...')
export const updateCategorySuccess = act('...[SUCCESS](DATA/UPDATE:CATEGORY)')
export const updateCategoryFailure = act('...[FAILURE](DATA/UPDATE:CATEGORY)')

export const updateCategory = (id, values) => async (dispatch) => {
  dispatch(updateCategoryRequest())
  try {
    const { data } = await axios.put(`/api/categories/${id}`, values)
    dispatch(updateCategorySuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(updateCategoryFailure(error))
  }
}

// =====================================
//  DELETE
// =====================================

export const deleteCategoryRequest = act('DATA/DELETE:CATEGORY...')
export const deleteCategorySuccess = act('...[SUCCESS](DATA/DELETE:CATEGORY)')
export const deleteCategoryFailure = act('...[FAILURE](DATA/DELETE:CATEGORY)')

export const deleteCategory = (id) => async (dispatch) => {
  dispatch(deleteCategoryRequest())
  try {
    await axios.delete(`/api/categories/${id}`)
    dispatch(deleteCategorySuccess(id))
  } catch (error) {
    console.error(error)
    dispatch(deleteCategoryFailure(error))
  }
}
