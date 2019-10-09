import { createAction as reduxCreateAction } from 'redux-actions'

export const createAction = (prefix, verb, subject, status) => {
  const type = `${prefix}/${verb}${subject ? ':' + subject : ''}`.toUpperCase()

  switch (status) {
    case 'request':
      return reduxCreateAction(`${type}...`)
    case 'success':
      return reduxCreateAction(`...[SUCCESS](${type})`)
    case 'failure':
      return reduxCreateAction(`...[FAILURE](${type})`)
    default:
      return reduxCreateAction(type)
  }
}

// assumes that 'redux-thunk' is in use
export const createAsyncAction = (prefix, verb, subject, func) => {
  const request = createAction(prefix, verb, subject, 'request')
  const success = createAction(prefix, verb, subject, 'success')
  const failure = createAction(prefix, verb, subject, 'failure')

  const action = (...args) => async (dispatch) =>
    func(
      {
        request: (...requestArgs) => dispatch(request(...requestArgs)),
        success: (...successArgs) => dispatch(success(...successArgs)),
        failure: (...failureArgs) => dispatch(failure(...failureArgs)),
      },
      ...args
    )

  return [action, request, success, failure]
}
