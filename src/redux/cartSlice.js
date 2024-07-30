import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers:{
        addItem(state, action){
            const index = state.items.findIndex(item => item.id == action.payload.id)
            if (index >= 0){
                state.items[index].quantity++;
            }
            else {
                state.items = [...state.items, {...action.payload, quantity: 1}]
            }
        },
        removeItem(state, action){
            state.items = state.items.filter(item => item.id !== action.payload.id)
        },
        clearCart(state){
            state.items = []
        },
        updateQuantity(state, action){
            const index = state.items.findIndex(item => item.id === action.payload.id)
            
            if (state.items[index].quantity > 1){
                state.items[index].quantity += action.payload.count
            }
        }
    }
})

export const {addItem, removeItem, clearCart, updateQuantity} = cartSlice.actions
export default cartSlice.reducer