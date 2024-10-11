import React from 'react';
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon stylesheet

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
        <div className="flex justify-center mb-4">
          <a href="https://www.instagram.com/abhishek_bisht321" target="_blank" rel="noopener noreferrer" className="mx-4">
            <i className="ri-instagram-line text-3xl hover:text-pink-600"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mx-4">
            <i className="ri-github-line text-3xl hover:text-gray-500"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-4">
            <i className="ri-linkedin-line text-3xl hover:text-blue-600"></i>
          </a>
        </div>
        <p className="mb-2">Feel free to reach out via email:</p>
        <a href="mailto:abhi12bisht@gmail.com" className="text-gray-400 hover:underline ">abhi12bisht@gmail.com</a>
        <div className="mt-4">
          <p className="text-sm">© {new Date().getFullYear()} Abhishek Bisht. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
