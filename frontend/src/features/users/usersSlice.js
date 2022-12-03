import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import usersService from './usersService'

const initialState = {
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Get users under admin
export const getUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await usersService.getUsers(token)
    } catch (error) {
        const message = ((error.response && error.response.data && error.response.data.message) || error.message || error.toString())
        return thunkAPI.rejectWithValue(message)
    }
})


export const formSlice = createSlice({
    name: 'resources',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder 
            .addCase(getUsers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = action.payload
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = formSlice.actions
export default formSlice.reducer