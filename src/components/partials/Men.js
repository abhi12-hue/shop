import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../utiles/axios';
import Button from '../../shared/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../Nav';

const Men = () => {
    const [menWomen, setMenWomen] = useState([]);

    const getData = async () => {
        try {
            const { data } = await axios.get("products");
            setMenWomen(data);
           
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleAddToCart = (item) => {
        toast.success(`${item.name} added to cart!`);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Nav />
            <div className="container mx-auto p-4">
                <ToastContainer />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {menWomen.map((item) => (
                        <div key={item.id}>
                            <Link to={`/card/${item.id}`}> {/* Updated Link to include product ID */}
                                <div className='p-4 border rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-800'>
                                    <div className='flex justify-center'>
                                        <img 
                                            src={item.image} 
                                            alt={item.name} 
                                            className='w-full h-[150px] object-contain' 
                                        />
                                    </div>
                                    <div className='text-center mt-4'>
                                        <h3 className='text-lg font-semibold dark:text-white'>{item.name}</h3>
                                        <p className='text-gray-600 mt-2 dark:text-gray-300'>
                                            {item.description.slice(0, 100)}...
                                        </p>
                                        <p className='text-lg font-bold mt-2 dark:text-white'>
                                            ${item.price}
                                        </p>
                                    </div>
                                    <div className='mt-4 text-center'>
                                        <Button 
                                            text="Add to Cart"
                                            bgColor={"bg-primary"}
                                            textColor={"text-white"}
                                            onClick={() => handleAddToCart(item)}
                                        />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Men;
