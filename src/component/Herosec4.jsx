import React from 'react';
import bgImage from '../assets/footer-banner.png';

const Herosec4 = () => {
    return (
        <div
            className="w-full bg-cover bg-center py-16 sm:py-20 text-center text-white px-4"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                Ready to Grow Your Business?
            </h2>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 flex-wrap">
                <button className="bg-white text-red-600 font-medium px-6 py-2 rounded-full hover:bg-red-100 transition">
                    Start Selling
                </button>
                <button className="border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-white hover:text-red-600 transition">
                    Chat with Consultant
                </button>
            </div>
        </div>
    );
};

export default Herosec4;

