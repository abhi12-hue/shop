import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Nav from './Nav';
import axios from '../utiles/axios'; // Ensure this path is correct
import Loading from './Loading';
import image from '../components/image1-removebg-preview.png';
import image2 from '../components/image2-removebg-preview.png';
import Button from '../shared/Button';
import Category from './partials/Category';
import MenWomen from './partials/MenWomen';
import Womenclothing from './partials/Womenclothing';
import Freeshiping from './partials/Freeshiping';
import MenAmination from './MenAmination';
import FemaleAmination from './FemaleAmination';
import Testinonail from './Testinonail';
import Footer from './partials/Footer';

const Hero = () => {
    const heroData = [
        {
            id: 1,
            img: image,
            subtitle: "Beats Solo",
            titles: "Wireless",
            title2: "Headphone",
            description: "",
        },
        {
            id: 2,
            img: image2,
            subtitle: "Beats Studio",
            titles: "Smarter and iOS",
            title2: "iPhone",
            description: "",
        },
        {
            id: 3,
            img: image,
            subtitle: "AirPods",
            titles: "Wireless",
            title2: "Earbuds",
            description: "",
        },
        {
            id: 4,
            img: image,
            subtitle: "Beats Flex",
            titles: "Wireless",
            title2: "Earphones",
            description: "",
        },
    ];

    const [inter, setInter] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Function to fetch data
    const getData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get('products/category/electronics');
            setInter(data);
        } catch (error) {
            setError('Failed to fetch electronics');
        } finally {
            setLoading(false);
        }
    };

    // Fetch data on component mount
    useEffect(() => {
        getData();
    }, []);

    const sliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Loader covering the entire page
    if (loading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
                <Loading />
            </div>
        );
    }

    return (
        <>
            <Nav />
            <div className='container mt-5'>
                {/* Display Error if any */}
                {error && <p className="text-red-500">{error}</p>}

                {/* If Data is successfully fetched */}
                {!loading && !error && inter.length > 0 && (
                    <div className='overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
                        <div className='container pb-8 sm:pb-0'>
                            <Slider {...sliderSettings}>
                                {heroData.map((item) => (
                                    <div key={item.id} className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-8'>
                                        {/* Text Content */}
                                        <div className='text-left space-y-4 sm:space-y-6 px-4 mt-3 flex flex-col justify-center items-start'>
                                            <h3 className='text-gray-600 text-lg sm:text-xl font-semibold'>{item.subtitle}</h3>
                                            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>{item.titles}</h1>
                                            <h1 className='text-4xl sm:text-5xl uppercase text-zinc-900 dark:text-white 
                                            md:text-[100px] xl:text-[150px] font-bold'>{item.title2}</h1>
                                            <div>
                                                <Button 
                                                    text="Shop By Category"
                                                    bgColor="bg-primary"
                                                    textColor="text-white"
                                                />
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className='flex justify-center'>
                                            <img
                                                src={item.img}
                                                alt={item.subtitle} // Improved alt text
                                                className="max-w-full h-auto sm:w-[350px] sm:h-[450px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] lg:scale-110 mx-auto"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                )}
            </div>

            {/* Other Components */}
            <Category />
            <MenAmination />
            <MenWomen />
            <FemaleAmination />
            <Womenclothing />
            <Testinonail />
            <Freeshiping />
            <Footer />
        </>
    );
};

export default Hero;
