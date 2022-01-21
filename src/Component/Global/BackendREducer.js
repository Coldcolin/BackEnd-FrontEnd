import { createSlice } from '@reduxjs/toolkit'

const BackendREducer = createSlice({
    name: "BackendREducer",
    initialState: {
        dataFile: []
    },
    reducers: {
        addData: (state,{payload}) =>{
            state.dataFile = payload
        }
    }
});

export const {
    addData
} = BackendREducer.actions
export default BackendREducer.reducer