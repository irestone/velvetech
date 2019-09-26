import { createAction } from 'redux-actions'

// Getting all categories

export const getCategoriesRequest = createAction('DATA/GET:CATEGORIES...')
export const getCategoriesSuccess = createAction('DATA/GET:CATEGORIES->SUCCESS')
export const getCategoriesFailure = createAction('DATA/GET:CATEGORIES->FAILURE')

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
