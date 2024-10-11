import { configureStore } from "@reduxjs/toolkit";
import cartsystem from "../store/reduces/CardSlice"; 

const store = configureStore({
    reducer: {
        card: cartsystem // Change 'name' to 'card' to match the slice name
    }
})

export default store;
