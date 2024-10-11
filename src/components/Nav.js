import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from './partials/DarkMode';

const Nav = () => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-10'>
            <div className='p-4'>
                <div className='container flex justify-between items-center'>
                    {/* Logo and links */}
                    <div className='flex gap-6 items-center'>
                        {/* Logo */}
                        <a
                            href='#'
                            className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'
                        >
                            Ashop
                        </a>
                        
                        {/* Menu links */}
                        <div className='hidden md:flex items-center gap-4'>
                            <Link to="/home" className='inline-block px-4 font-semibold text-gray-600
                                hover:text-black dark:hover:text-white duration-200'>
                                Home
                            </Link>
                            <Link to="/shop" className='inline-block px-4 font-semibold text-gray-600
                                hover:text-black dark:hover:text-white duration-200'>
                                Shop
                            </Link>
                            <Link to="/about" className='inline-block px-4 font-semibold text-gray-600
                                hover:text-black dark:hover:text-white duration-200'>
                                About
                            </Link>
                            <Link to="/blog" className='inline-block px-4 font-semibold text-gray-600 
                                hover:text-black dark:hover:text-white duration-200'>
                                Blog
                            </Link>
                            
                            {/* Quick Links with Dropdown */}
                            <div className='relative cursor-pointer group flex items-center'>
                                <span className='inline-block px-4 font-semibold text-gray-600
                                    hover:text-black dark:hover:text-white duration-200'>
                                    Quick Links
                                    <i className="ri-arrow-down-line ml-1 group-hover:rotate-180 duration-300"></i>
                                </span>
                               
                                
                                {/* Dropdown content (visible on hover) */}
                                <div className='absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg mt-2 rounded-lg py-2'>
                                    <Link to="/link1" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                                        Link 1
                                    </Link>
                                    <Link to="/link2" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                                        Link 2
                                    </Link>
                                    <Link to="/link3" className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700'>
                                        Link 3
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navbar right section */}
                    <div className='flex items-center gap-6'>
                        {/* Search bar */}
                        <div className='relative hidden sm:block'>
                            <input
                                type='text'
                                placeholder='Search'
                                className='border border-none dark:border-gray-600 rounded-md p-2 pl-10 pr-4 w-[200px]
                                focus:outline-none dark:bg-gray-800 dark:text-gray-300'
                            />
                            <i className="ri-search-line text-xl absolute left-3 top-1/2 transform -translate-y-1/2 text-red-600 dark:text-gray-400"></i>
                        </div>

                        {/* Cart icon with item count */}
                        <Link to="/cart" className='relative'>
                            <i className="ri-shopping-cart-2-fill text-2xl text-yellow-500 dark:text-gray-400"></i>
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex 
                            items-center justify-center text-xs'>4</div>
                        </Link>

                        {/* Dark mode toggle */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nav;
