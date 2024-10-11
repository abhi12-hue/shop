import React from 'react';
import image3 from '../components/imag4-removebg-preview.png';
import { Link } from 'react-router-dom';

const FemaleAmination = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-3/4 bg-green-500 text-white relative">
      {/* Left Text Content */}
      <div className="flex flex-col items-start justify-center p-4">
        <p className="text-lg font-bold">30% off</p>
        <h1 className="text-6xl font-extrabold">FIME SMILE</h1> {/* Increased font size */}
        <p className="mt-2 text-lg">10 Jan to 29 Jan</p> {/* Increased font size */}
      </div>

      {/* Centered Image with Animation */}
      <Link to="/menwomen" className="flex justify-center items-center p-4">
        <img
          src={image3}
          alt="Winter Sale Image" // Improved alt text
          className="w-80 h-100 object-cover rounded-lg transition-transform duration-500 hover:scale-105" // Added hover effect
        />
      </Link>

      {/* Right Text Content */}
      <div className="flex flex-col items-start justify-center p-4">
        <p className="text-lg font-semibold">Full Comfort</p>
        <h1 className="text-6xl font-bold">Winter Sale</h1> {/* Increased font size */}
        <p className="mt-2 text-lg">
          Best products for winter - extra cool and high quality. {/* Increased font size */}
        </p>
      </div>
    </div>
  );
};

export default FemaleAmination;
