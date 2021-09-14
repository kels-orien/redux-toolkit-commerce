import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from "../features/products/products-api-slice"
import cartReducer  from "../features/cart/cart-slice"


export const store =  configureStore({
    reducer: {
        cart: cartReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware)
    }   
})

export type AppDispatch =  typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>