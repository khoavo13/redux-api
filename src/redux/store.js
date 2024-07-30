import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import catSlide from "./catSlide";

const store = configureStore({
    reducer: {
        products: productSlice,
        cart: cartSlice,
        cats: catSlide
    }
})

export default store;