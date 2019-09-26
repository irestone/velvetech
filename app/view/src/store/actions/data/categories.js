import { createAction } from 'redux-actions'

// Getting all categories

export const getCategoriesRequest = createAction('DATA/GET:CATEGORIES...')
export const getCategoriesSuccess = createAction(
  '...[SUCCESS](DATA/GET:CATEGORIES)'
)
export const getCategoriesFailure = createAction(
  '...[FAILURE](DATA/GET:CATEGORIES)'
)

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

// Creating category

export const addCategoryRequest = createAction('DATA/ADD:CATEGORY...')
export const addCategorySuccess = createAction(
  '...[SUCCESS](DATA/ADD:CATEGORY)'
)
export const addCategoryFailure = createAction(
  '...[FAILURE](DATA/ADD:CATEGORY)'
)

export const addCategory = (values) => async (dispatch) => {
  dispatch(addCategoryRequest())
  try {
    const response = await fetch(`/api/categories`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())

    if (response.error) {
      dispatch(addCategoryFailure(response.error))
    } else {
      dispatch(addCategorySuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(addCategoryFailure(error))
  }
}
