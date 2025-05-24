import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Icon library
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full font-poppins">
      <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-16 px-3 py-2 text-sm md:text-xl font-medium text-gray-500 border-b mt-2 text-center md:text-left">
        <span className="mb-2 md:mb-0">
          World's Largest Medical Equipment Market Place
        </span>
        <div className="text-black font-medium space-x-1">
          <span className="hover:underline cursor-pointer">My account</span>
          <span>|</span>
          <span className="hover:underline cursor-pointer">Contact Us</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 md:px-6 py-4 mx-4 md:mx-16">
        <img src={logo} alt="1MDM Logo" className="h-12" />

        <div className="hidden md:flex space-x-6 text-gray-500 font-medium">
          <span className="hover:text-black cursor-pointer">About Us</span>
          <span className="hover:text-black cursor-pointer">Our Story</span>
          <span className="hover:text-black cursor-pointer">Sell on 1MDM</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-3 pb-4 text-gray-500 font-medium">
          <span className="hover:text-black cursor-pointer">About Us</span>
          <span className="hover:text-black cursor-pointer">Our Story</span>
          <span className="hover:text-black cursor-pointer">Sell on 1MDM</span>
          <span className="hover:text-black cursor-pointer">Pricing</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;

