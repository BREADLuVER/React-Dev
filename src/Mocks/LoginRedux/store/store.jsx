import {configureStore} from "@redux.js/toolkit"
import authReducer from "./authSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})