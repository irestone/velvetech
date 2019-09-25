import { createAction } from 'redux-actions'

// Getting all categories

export const getCategoriesRequest = createAction('GET_CATEGORIES_REQUEST')
export const getCategoriesSuccess = createAction('GET_CATEGORIES_SUCCESS')
export const getCategoriesFailure = createAction('GET_CATEGORIES_FAILURE')

export const getCategories = () => async (dispatch) => {
  dispatch(getCategoriesRequest())
  try {
    const response = await fetch(`/api/categories`).then((res) => res.json())

    if (response.error) {
      dispatch(getCategoriesFailure(response.error))
    } else {
      dispatch(getCategoriesSuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(getCategoriesFailure(error))
  }
}
