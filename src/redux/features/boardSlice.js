import { createSlice } from '@reduxjs/toolkit'
import { lists } from '../../helpers/kanbarData'
const initialState = { list: [{
  title: "Mobile App",
  stateColor: "#7AC555",
  kanban:null
},
{
  title: "Website Redesign",
  stateColor: "#FFA500",
  kanban:null
},
{
  title: "Design System",
  stateColor: "#E4CCFD",
  kanban:null
},
{
  title: "Wireframes",
  stateColor: "#76A5EA",
  kanban:null
}],
}

export const boardSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBoards: (state, action) => {
      state.list = action.payload
    },
  }
})

export const { setBoards } = boardSlice.actions

export default boardSlice.reducer