import { createSlice } from '@reduxjs/toolkit'

export const loggedInSlice = createSlice({
    name: 'loggedIn',
    initialState: {
        value: false,
    },
    reducers: {
        logIn: (state) => {
            state.value = true
        },
        logOut: (state) => {
            state.value = false
        }
    }
})

export const { logIn, logOut } = loggedInSlice.actions


export default loggedInSlice.reducer