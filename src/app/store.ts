import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from "../features/products/products-api-slice"
import cartReducer  from "../features/cart/cart-slice"
import shippingReducer from "../features/shipping/shipping-slice"

export const store =  configureStore({
    reducer: {
        cart: cartReducer,
        shipping: shippingReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }   
})

export type AppDispatch =  typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>