import { configureStore } from "@reduxjs/toolkit"
import myReducer from "./MainGlobal"
import myInputReducer from "./InputReducer"
import BackendREducer from "./BackendREducer"

export const store = configureStore({
    reducer: { myReducer, myInputReducer, BackendREducer }
})