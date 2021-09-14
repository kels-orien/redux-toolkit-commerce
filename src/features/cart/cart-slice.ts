import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CartItem {
    id: number;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

interface CartState {
    cart: CartItem[]
}


const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>)  {

            let id = 0
            if (state.cart.length > 0) {
                state.cart.forEach(item => {
                    if(item.id === action.payload.id) {
                        id = item.id
                         item.quantity++
                    }                
                })
            }
            if (state.cart.length === 0 || id !== action.payload.id) {
                 state.cart = [...state.cart, action.payload]
            }       
        },
        removeFromCart(state, action: PayloadAction<CartItem>) {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
       updateQuantity(state, action: any) {
           
        const {id, value} = action.payload
        
        state.cart.forEach(item => {
            if(item.id === id) {
                item.quantity = value
            }
        })
      },
      emptyCart(state) {
        state.cart = []
      }
    },
})


export const { addToCart, removeFromCart, updateQuantity, emptyCart } = cartSlice.actions

export default cartSlice.reducer


