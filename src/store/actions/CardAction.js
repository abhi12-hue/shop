import axios from '../../utiles/axios';
import { AddCard } from '../reduces/CardSlice'; // Import AddCard action

// Action to asynchronously load product details and add it to the cart
export const asyncloadProductToCart = (id) => async (dispatch, getState) => {
  try {
    // Fetch the product details
    const productResponse = await axios.get(`/products/${id}`);
    const productData = productResponse.data;

    const { id: productId, name, price, image } = productData; 
    const item = {
      id: productId,
      name,
      price,
      image,
      quantity: 1, // Default quantity to 1 when adding to the cart
    };
    

    // Dispatch the product to the Redux cart store
    dispatch(AddCard(item)); // Dispatch the correct action
  } catch (error) {
    console.error('Error loading product details:', error.message || error); // Log error message
  }
};
