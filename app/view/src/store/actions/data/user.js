import { createAction as act } from 'redux-actions'
import axios from 'axios'

// =====================================
//  READ
// =====================================

export const getUserRequest = act('DATA/GET:USER...')
export const getUserSuccess = act('...[SUCCESS](DATA/GET:USER)')
export const getUserFailure = act('...[FAILURE](DATA/GET:USER)')

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest())
  try {
    const { data } = await axios.get(`/api/users/me`)
    dispatch(getUserSuccess(data.data))
  } catch (error) {
    console.error(error)
    dispatch(getUserFailure(error))
  }
}
