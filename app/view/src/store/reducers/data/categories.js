import { handleActions } from 'redux-actions'

import {
  getCategoriesSuccess,
  addCategorySuccess,
  deleteCategorySuccess,
  updateCategorySuccess,
} from '../../actions/data/categories'

export const categories = handleActions(
  {
    [addCategorySuccess]: (state, { payload }) => [...state, payload],
    [getCategoriesSuccess]: (state, { payload }) => payload,
    [updateCategorySuccess]: (state, { payload }) =>
      state.map((c) => (c._id === payload._id ? payload : c)),
    [deleteCategorySuccess]: (state, { payload }) =>
      state.filter((c) => c._id !== payload),
  },
  []
)
