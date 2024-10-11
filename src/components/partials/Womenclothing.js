import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utiles/axios'; // Ensure you import axios
import Button from '../../shared/Button'; // Adjust this import based on your Button component's path
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Womenclothing = () => {
    const [menWomen, setMenWomen] = useState([]); // Use camelCase for variable names

    const getData = async () => {
        try {
            // Use a valid endpoint
            const { data } = await axios.get("products/category/women's%20clothing");
            setMenWomen(data);
            
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddToCart = (item) => {
        // Logic to add the item to the cart can go here.
        // For now, we'll just show a notification.
        toast.success(`${item.name} added to cart!`);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <ToastContainer /> {/* Place ToastContainer to enable notifications */}
            <h2 className='text-2xl font-bold mb-4 dark:text-white'>Women Clothing</h2> {/* Heading */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Responsive Grid */}
                {menWomen.slice(0, 4).map((item) => ( // Limit to the first 6 items
                    <div key={item.id}> {/* Use item.id as key */}
                        <Link to={"/menwomen"}>
                            <div className='p-4 border rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800'>
                                <div className='flex justify-center'>
                                    {/* Render the image of the product */}
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className='w-full h-[150px] object-contain' // Set full width for images
                                    />
                                </div>
                                <div className='text-center mt-4'>
                                    {/* Category name */}
                                    <h3 className='text-lg font-semibold dark:text-white'>{item.name}</h3>
                                    <p className='text-gray-600 mt-2 dark:text-gray-300'>
                                        {item.description.slice(0, 100)}...
                                    </p>
                                    {/* Price Display */}
                                    <p className='text-lg font-bold mt-2 dark:text-white'>
                                        ${item.price} {/* Displaying price */}
                                    </p>
                                </div>
                                <div className='mt-4 text-center'>
                                    <Link to={"/menwomen"}> {/* Corrected Link to Cart */}
                                        <Button 
                                            text="Add to Cart"
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                            onClick={() => handleAddToCart(item)} // Call add to cart function
                                        />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Womenclothing;
