import { createAsyncAction } from '../../../utils/actions'
import axios from 'axios'

// =====================================
//  READ
// =====================================

export const [
  getUser,
  getUserRequest,
  getUserSuccess,
  getUserFailure,
] = createAsyncAction(
  'data',
  'get',
  'user',
  async ({ request, success, failure }) => {
    request()
    try {
      const { data } = await axios.get(`/api/users/me`)
      success(data.data)
    } catch (error) {
      console.error(error)
      failure(error)
    }
  }
)
