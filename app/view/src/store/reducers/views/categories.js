import { handleActions } from 'redux-actions'

import {
  showAddCategoryForm,
  hideAddCategoryForm,
  editCategory,
  cancelCategoryEditing,
} from '../../actions/views/categories'

import { deleteCategorySuccess } from '../../actions/data/categories'

export const categories = handleActions(
  {
    [showAddCategoryForm]: (state) => ({
      ...state,
      isAddCategoryFormHidden: false,
    }),
    [hideAddCategoryForm]: (state) => ({
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
