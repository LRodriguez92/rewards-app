import { configureStore } from '@reduxjs/toolkit'
import loggedinReducer from './reducers/loggedInSlice'

export default configureStore({
  reducer: {
    loggedIn: loggedinReducer,
  },
})