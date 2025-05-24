import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-10 px-6 md:px-20 font-poppins">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <div className="mb-4">
                        <img src={logo} alt="1MDM Logo" className="h-30" />
                    </div>
                    <p className="text-gray-400 text-xl mt-8">One Medical Devices<br />Market Place</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Platform</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Sell on 1MDM</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Press Room</h3>
                    <ul className="space-y-2 text-gray-400 mb-6">
                        <li><a href="#">Images & B-roll</a></li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">Policies</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Delivery Information</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Reach Us</h3>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>

        


        </footer>

    )
}

export default Footer
