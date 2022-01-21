import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const MainGlobal = createSlice({
    name: "MainGlobal",
    initialState,
    reducers: {
    addCounter: (state) =>{
        state.value += 1;
    },
    minusCounter: (state) => {
        state.value -= 1;
    },
    }
});

export const {
addCounter, minusCounter
} = MainGlobal.actions
export default MainGlobal.reducer