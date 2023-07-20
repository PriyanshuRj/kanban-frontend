import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: {} }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
    },
    updateProfilePicture: (state, action) =>{
      state.value = {...state.value, profilePicture: action.payload}
    },
    updateProfile: (state, action) =>{
      state.value = {...state.value, ...action.payload}
    }
  }
})

export const { setUser, updateProfilePicture,updateProfile } = userSlice.actions

export default userSlice.reducer