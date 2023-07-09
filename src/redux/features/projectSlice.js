import { createSlice } from '@reduxjs/toolkit'
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
modalState: false
}

export const projectsSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.list = action.payload
    },
    addProject: (state, action) =>{
        state.list = [...state.list, action.payload]
    },
    setModalState: (state, action) => {
        state.modalState = action.payload;
    },

  }
})

export const { setProjects, addProject, setModalState } = projectsSlice.actions

export default projectsSlice.reducer