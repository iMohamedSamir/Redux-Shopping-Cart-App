import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer,
        ui: uiSlice.reducer
    },
})

export default store;