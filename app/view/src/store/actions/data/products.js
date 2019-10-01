import { createAction } from 'redux-actions'

// =====================================
//  CREATING
// =====================================

export const addProductRequest = createAction('DATA/ADD:PRODUCT...')
export const addProductSuccess = createAction('...[SUCCESS](DATA/ADD:PRODUCT)')
export const addProductFailure = createAction('...[FAILURE](DATA/ADD:PRODUCT)')

export const addProduct = (values) => async (dispatch) => {
  dispatch(addProductRequest())
  try {
    const response = await fetch(`/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    }).then((res) => res.json())

    if (response.error) {
      dispatch(addProductFailure(response.error))
    } else {
      dispatch(addProductSuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(addProductFailure(error))
  }
}

// =====================================
//  GETTING
// =====================================

export const getProductsRequest = createAction('DATA/GET:PRODUCTS...')
export const getProductsSuccess = createAction(
  '...[SUCCESS](DATA/GET:PRODUCTS)'
)
export const getProductsFailure = createAction(
  '...[FAILURE](DATA/GET:PRODUCTS)'
)

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
