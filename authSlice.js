import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"))

const initialState = {
    user : userExist ? userExist : null ,
    isLoading : false ,
    isSuccess : false ,
    isError : false ,
    message : "" ,
}

const authSlice = createSlice({
    name : "auth" ,
    initialState ,
    reducers : {

    } ,
    extraReducers : (builder) => {

        builder
        .addCase(registerUser.pending , (state , action) => {
            state.isLoading = true 
            state.isSuccess = false
            state.isError = false
        })
        .addCase(registerUser.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isSuccess = true
            state.isError = false
            state.user = action.payload
        })
        .addCase(registerUser.rejected , (state , action) => {
            state.isLoading = false 
            state.isSuccess = false
            state.isError = true
            state.user = null
            state.message = action.payload
        })
        .addCase(logOutUser.fulfilled , (state , action) => {
            state.user = null
            state.isLoading = false 
            state.isSuccess = false
            state.isError = false
            state.message = ""
        })
        .addCase(logInUser.pending , (state) => {
            state.isLoading = true 
            state.isSuccess = false
            state.isError = false
        })
        .addCase(logInUser.fulfilled , (state , action) => {
            state.isLoading = false 
            state.isSuccess = true
            state.isError = false
            state.user = action.payload
        })
        .addCase(logInUser.rejected , (state , action) => {
            state.isLoading = false 
            state.isSuccess = false
            state.isError = true
            state.user = null
            state.message = action.payload
        })
    }
})

export default authSlice.reducer;



// Register User

export const registerUser = createAsyncThunk("REGISTER/USER" , async(formData , thunkAPI) => {

    try {
        return await authService.register(formData)
    } catch (error) {
        const message = error.response.data.message
        
        return thunkAPI.rejectWithValue(message)
    }

})


// Logout User


export const logOutUser = createAsyncThunk("LOGOUT/USER" , async() => {
    localStorage.removeItem("user")
})

// Login User

export const logInUser = createAsyncThunk("LOGIN/USER" , async (formData, thunkAPI) => {

    try {
        return await authService.login(formData)
    } catch (error) {
        const message = error.response.data.message

        return thunkAPI.rejectWithValue(message)

    }

})