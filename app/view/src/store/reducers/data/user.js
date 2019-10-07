import { handleActions } from 'redux-actions'

import { getUserSuccess } from '../../actions/data/user'

export const user = handleActions(
  {
    [getUserSuccess]: (state, { payload }) => payload,
  },
  null
)
