import { createSlice } from '@reduxjs/toolkit'
import { lists } from '../../helpers/kanbarData'
const initialState = { board : {}
}

export const boardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.board = action.payload
    },
  }
})

export const { setBoards } = boardSlice.actions

export default boardSlice.reducer