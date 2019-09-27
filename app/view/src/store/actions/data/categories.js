import { createAction } from 'redux-actions'

// =====================================
//  CREATING
// =====================================

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

// =====================================
//  GETTING
// =====================================

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

// =====================================
//  UPDATING
// =====================================

export const updateCategoryRequest = createAction('DATA/UPDATE:CATEGORY...')
export const updateCategorySuccess = createAction(
  '...[SUCCESS](DATA/UPDATE:CATEGORY)'
)
export const updateCategoryFailure = createAction(
  '...[FAILURE](DATA/UPDATE:CATEGORY)'
)

export const updateCategory = (id, values) => async (dispatch) => {
  dispatch(updateCategoryRequest())
  try {
    const response = await fetch(`/api/categories/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json())

    if (response.error) {
      dispatch(updateCategoryFailure(response.error))
    } else {
      dispatch(updateCategorySuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(updateCategoryFailure(error))
  }
}

// =====================================
//  DELETING
// =====================================

export const deleteCategoryRequest = createAction('DATA/DELETE:CATEGORY...')
export const deleteCategorySuccess = createAction(
  '...[SUCCESS](DATA/DELETE:CATEGORY)'
)
export const deleteCategoryFailure = createAction(
  '...[FAILURE](DATA/DELETE:CATEGORY)'
)

export const deleteCategory = (id) => async (dispatch) => {
  dispatch(deleteCategoryRequest())
  try {
    const response = await fetch(`/api/categories/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())

    if (response.error) {
      dispatch(deleteCategoryFailure(response.error))
    } else {
      dispatch(deleteCategorySuccess(id))
    }
  } catch (error) {
    console.error(error)
    dispatch(deleteCategoryFailure(error))
  }
}
