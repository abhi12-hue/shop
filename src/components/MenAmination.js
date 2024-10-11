import React from 'react';
import image3 from '../components/image3-removebg-preview.png';

const MenAmination = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full h-3/4 bg-red-500 text-white relative">
      {/* Left Text Content */}
      <div className="flex flex-col items-start justify-center p-4">
        <p className="text-lg font-bold">30% off</p>
        <h1 className="text-6xl font-extrabold">FIME SMILE</h1> {/* Increased font size */}
        <p className="mt-2 text-lg">10 Jan to 29 Jan</p> {/* Increased font size */}
      </div>

      {/* Centered Image with Animation */}
      <div className="flex justify-center items-center p-4 relative ">
        <img
          src={image3}
          alt="Sale Image"
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>

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

export default MenAmination;
