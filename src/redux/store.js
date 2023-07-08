import {configureStore} from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import boardReducer from './features/boardSlice'
import themeSlice from './features/themeSlice'
import projectSlice from './features/projectSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    board: boardReducer,
    theme: themeSlice,
    projects: projectSlice
  }
})