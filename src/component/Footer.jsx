import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 font-poppins">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Intro */}
        <div>
          <div className="mb-4">
            <img src={logo} alt="1MDM Logo" className="h-20 w-auto" />
          </div>
          <p className="text-gray-400 text-lg mt-6 leading-relaxed">
            One Medical Devices<br />Market Place
          </p>
        </div>

        {/* Platform Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li><a href="#">Sell on 1MDM</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Press Room & Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Press Room</h3>
          <ul className="space-y-2 text-gray-400 text-base mb-6">
            <li><a href="#">Images & B-roll</a></li>
          </ul>
          <h3 className="text-xl font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Delivery Information</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Reach Us</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

