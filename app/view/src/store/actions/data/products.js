import { createAction } from 'redux-actions'

// Getting all products

export const getProductsRequest = createAction('DATA/GET:PRODUCTS...')
export const getProductsSuccess = createAction('DATA/GET:PRODUCTS->SUCCESS')
export const getProductsFailure = createAction('DATA/GET:PRODUCTS->FAILURE')

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
