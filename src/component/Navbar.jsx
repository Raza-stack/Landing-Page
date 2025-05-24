import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="w-full font-poppins">
      <div className="flex items-center justify-between mx-16 px-3 py-2 text-xl font-medium text-sm text-gray-500 border-b mt-2">
        <span>World's Largest Medical Equipment Market Place</span>
        <div className="text-black font-medium space-x-1">
          <span className="hover:underline cursor-pointer">My account</span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">Contact Us</span>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 py-4 mx-16 ">
        <img src={logo} alt="1MDM Logo" className="h-30 " />

        <div className="flex space-x-6 text-gray-500 font-medium">
          <span className="hover:text-black cursor-pointer">About Us</span>
          <span className="hover:text-black cursor-pointer">Our Story</span>
          <span className="hover:text-black cursor-pointer">Sell on 1MDM</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;


