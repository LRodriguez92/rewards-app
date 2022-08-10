import { createSlice } from '@reduxjs/toolkit'

export const loggedInSlice = createSlice({
    name: 'loggedIn',
    initialState: {
        value: false,
        store: null
    },
    reducers: {
        logIn: (state) => {
            state.value = true
        },
        logOut: (state) => {
            state.value = false
        },
        isStore: (state) => {
            state.store = true
        },
        isCustomer: (state) => {
            state.store = false
        }
    }
})

export const { logIn, logOut } = loggedInSlice.actions


export default loggedInSlice.reducer