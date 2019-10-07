import { handleActions } from 'redux-actions'

import {
  showCreateCategoryForm,
  hideCreateCategoryForm,
  editCategory,
  cancelCategoryEditing,
} from '../../actions/views/categories'

import { deleteCategorySuccess } from '../../actions/data/categories'

export const categories = handleActions(
  {
    [showCreateCategoryForm]: (state) => ({
      ...state,
      isAddCategoryFormHidden: false,
    }),
    [hideCreateCategoryForm]: (state) => ({
      ...state,
      isAddCategoryFormHidden: true,
    }),
    [editCategory]: (state, { payload: id }) => ({
      ...state,
      editing: [...state.editing, id],
    }),
    [cancelCategoryEditing]: (state, { payload: id }) => ({
      ...state,
      editing: state.editing.filter((eid) => eid !== id),
    }),
    [deleteCategorySuccess]: (state, { payload: id }) => ({
      ...state,
      editing: state.editing.filter((eid) => eid !== id),
    }),
  },
  { isAddCategoryFormHidden: true, editing: [] }
)
