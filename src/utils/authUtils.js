import {getProfileService} from "../services/userService"

const authUtils = {
  isAuthenticated: async () => {
    const token = localStorage.getItem('token')
    if (!token) return false
    try {
      const res = await getProfileService()
      return res.data.user
    } catch {
      return false
    }
  }
}

export default authUtils