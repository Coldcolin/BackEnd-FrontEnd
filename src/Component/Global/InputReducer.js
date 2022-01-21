import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
}

const InputReducer = createSlice({
    name: "InputReducer",
    initialState,
    reducers: {
    myName: (state, {payload}) =>{
        state.name = payload
    },
    myEmail: (state, {payload}) =>{
        state.email = payload
    }
    }
});

export const {
myName, myEmail
} = InputReducer.actions
export default InputReducer.reducer