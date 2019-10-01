import { createAction } from 'redux-actions'

// Getting authorized user's data

export const getUserRequest = createAction('DATA/GET:USER...')
export const getUserSuccess = createAction('...[SUCCESS](DATA/GET:USER)')
export const getUserFailure = createAction('...[FAILURE](DATA/GET:USER)')

export const getUser = () => async (dispatch) => {
  dispatch(getUserRequest())
  try {
    const response = await fetch(`/api/users/me`).then((res) => res.json())

    if (response.error) {
      dispatch(getUserFailure(response.error))
    } else {
      dispatch(getUserSuccess(response.data))
    }
  } catch (error) {
    console.error(error)
    dispatch(getUserFailure(error))
  }
}
