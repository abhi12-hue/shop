import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import axios from '../../utiles/axios'; // Ensure the path is correct
import Button from '../../shared/Button';

const Category = () => {
    const [category, setCategory] = useState([]);

    const getData = async () => {
        try {
            const { data } = await axios.get('products/category/electronics');
            setCategory(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div className='container py-8'>
            <Slider {...sliderSettings}>
                {
                    category.map((item, index) => (
                        // Wrap each card in a Link component to make the entire card clickable
                        <Link to={`/menwomen`} key={index}>
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
                                        {item.description.slice(0, 50)}...
                                    </p>
                                </div>
                                <div className='mt-4 text-center'>
                                    <Button 
                                        text="Browse"
                                        bgColor={"bg-primary"}
                                        textColor={"text-white"}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))
                
                }
            </Slider>
        </div>
    );
};

export default Category;
