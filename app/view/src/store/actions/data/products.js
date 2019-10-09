import { createAsyncAction } from '../../../utils/actions'
import axios from 'axios'

// =====================================
//  CREATE
// =====================================

export const [
  addProduct,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
] = createAsyncAction(
  'data',
  'add',
  'product',
  async ({ request, success, failure }, values) => {
    request()
    try {
      const { data } = await axios.post(`/api/products`, values)
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
  getProducts,
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
] = createAsyncAction(
  'data',
  'get',
  'products',
  async ({ request, success, failure }) => {
    request()
    try {
      const { data } = await axios.get(`/api/products`)
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
  updateProduct,
  updateProductRequest,
  updateProductSuccess,
  updateProductFailure,
] = createAsyncAction(
  'data',
  'update',
  'product',
  async ({ request, success, failure }, id, values) => {
    request()
    try {
      const { data } = await axios.put(`/api/products/${id}`, values)
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
  deleteProducts,
  deleteProductsRequest,
  deleteProductsSuccess,
  deleteProductsFailure,
] = createAsyncAction(
  'data',
  'delete',
  'products',
  async ({ request, success, failure }, ids) => {
    request()
    try {
      await axios.delete(`/api/products`, { data: { ids } })
      success(ids)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)
