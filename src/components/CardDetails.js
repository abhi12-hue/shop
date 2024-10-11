import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncloadProductToCart } from '../store/actions/CardAction';
import Loading from './Loading';

const CardDetails = () => {
  const { id } = useParams(); // Get the product ID from the route params
  const dispatch = useDispatch();

  // Use useSelector to get the product from the Redux store
  const product = useSelector((state) =>
    state.card.card.find((item) => item.id === parseInt(id)) // Ensure ID is matched properly
  );

  // Fetch product details when component mounts
  useEffect(() => {
    if (!product) { // Check if product is not loaded yet
      dispatch(asyncloadProductToCart(id)); // Dispatch action to load product details
    }
  }, [id, product, dispatch]);

  // Add item to cart by dispatching the async action
  const handleAddToCart = () => {
    if (product) {
      dispatch(asyncloadProductToCart(id)); // Dispatch action to load and add to cart
    }
  };
  
  // Log for debugging
  console.log('Fetched product:', product);

  return (
    <div className="flex items-center justify-center min-h-screen"> {/* Center the card */}
      {product ? ( // Check if the product exists
        <div className="p-8 w-full max-w-lg border rounded-lg shadow-lg dark:border-gray-700 dark:bg-gray-800"> {/* Increase card size */}
          <div className="flex justify-center mb-4">
            <img
              src={product.image} // Access image from the specific product
              alt={product.name}
              className="w-full h-[300px] object-contain" // Increase image size
            />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold dark:text-white"> {/* Increase text size */}
              {product.name}
            </h3>
            <p className="text-gray-600 mt-4 dark:text-gray-300">
              {product.description}
            </p>
            <p className="text-xl font-bold mt-4 dark:text-white"> {/* Increase price size */}
              ${product.price}
            </p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-6 py-3 mt-6 rounded-lg text-lg" // Increase button size
            >
              Buy Now
            </button>
          </div>
        </div>
      ) : (
       <Loading/>// Show loading state while fetching
      )}
    </div>
  );
};

export default CardDetails;
