import { createAction } from 'redux-actions'

// Getting all products

export const getProductsRequest = createAction('GET_PRODUCTS_REQUEST')
export const getProductsSuccess = createAction('GET_PRODUCTS_SUCCESS')
export const getProductsFailure = createAction('GET_PRODUCTS_FAILURE')

export const getProducts = () => async (dispatch) => {
  dispatch(getProductsRequest())
  try {
    const response = await fetch(`/api/products`).then((res) => res.json())

    if (response.error) {
      dispatch(getProductsFailure(response.error))
    } else {
      dispatch(getProductsSuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(getProductsFailure(error))
  }
}
