import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        Welcome to our shopping website! We are dedicated to bringing you the best products at the most competitive prices.
        Our mission is to provide an exceptional online shopping experience, where quality meets convenience.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h2>
      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        We aim to make shopping easy and enjoyable for everyone. Our carefully curated selection of products
        ensures that you find exactly what you're looking for, whether it's the latest fashion trends, 
        electronics, home essentials, or unique gifts.
      </p>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Why Choose Us?</h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
        <li>Wide variety of high-quality products.</li>
        <li>Secure payment options for your peace of mind.</li>
        <li>Fast and reliable shipping.</li>
        <li>Customer support available 24/7.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Join Our Community</h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Follow us on social media to stay updated on the latest arrivals, special offers, and exclusive promotions. 
        Thank you for choosing us for your shopping needs!
      </p>
    </div>
  );
}

export default About;
