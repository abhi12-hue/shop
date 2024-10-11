import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  card: [], // Holds the products in the cart
  quantity: 0
}

const CardSlice = createSlice({
    name: "card",
    initialState,
    reducers:{
        AddCard: (state, action) => {
            state.card.push(action.payload); // Add product to card array
        }
    }
})

export const { AddCard } = CardSlice.actions; // Export the AddCard action
export default CardSlice.reducer; // Export the reducer
