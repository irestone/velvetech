import { createAction as act } from 'redux-actions'
import axios from 'axios'

// =====================================
//  CREATING
// =====================================

export const addProductRequest = act('DATA/ADD:PRODUCT...')
export const addProductSuccess = act('...[SUCCESS](DATA/ADD:PRODUCT)')
export const addProductFailure = act('...[FAILURE](DATA/ADD:PRODUCT)')

export const addProduct = (values) => async (dispatch) => {
  dispatch(addProductRequest())
  try {
    const { data } = await axios.post(`/api/products`, values)
    dispatch(addProductSuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(addProductFailure(error))
  }
}

// =====================================
//  GETTING
// =====================================

export const getProductsRequest = act('DATA/GET:PRODUCTS...')
export const getProductsSuccess = act('...[SUCCESS](DATA/GET:PRODUCTS)')
export const getProductsFailure = act('...[FAILURE](DATA/GET:PRODUCTS)')

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsRequest())
  try {
    const { data } = await axios.get(`/api/products`)
    dispatch(getProductsSuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(getProductsFailure(error))
  }
}

// =====================================
//  UPDATING
// =====================================

export const updateProductRequest = act('DATA/UPDATE:PRODUCT...')
export const updateProductSuccess = act('...[SUCCESS](DATA/UPDATE:PRODUCT)')
export const updateProductFailure = act('...[FAILURE](DATA/UPDATE:PRODUCT)')

export const updateProduct = (id, values) => async (dispatch) => {
  dispatch(updateProductRequest())
  try {
    const { data } = await axios.put(`/api/products/${id}`, values)
    dispatch(updateProductSuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(updateProductFailure(error))
  }
}

// =====================================
//  DELETING
// =====================================

// Delete many

export const deleteProductsRequest = act('DATA/DELETE:PRODUCTS...')
export const deleteProductsSuccess = act('...[SUCCESS](DATA/DELETE:PRODUCTS)')
export const deleteProductsFailure = act('...[FAILURE](DATA/DELETE:PRODUCTS)')

export const deleteProducts = (ids) => async (dispatch) => {
  dispatch(deleteProductsRequest())
  try {
    await axios.delete(`/api/products`, { data: { ids } })
    dispatch(deleteProductsSuccess(ids))
  } catch (error) {
    console.error(error)
    dispatch(deleteProductsFailure(error))
  }
}
