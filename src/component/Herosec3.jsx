import React from 'react';
import laptopImage from '../assets/laptop.png';

const Herosec3 = () => {
    return (
        <div className="w-full font-poppins py-16 px-4">
            <div className="flex justify-center mb-12 text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E50914] max-w-3xl leading-snug">
                    Grow your business with a suite of tools built for you
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">

                <div className="flex flex-col gap-6 text-left w-full lg:w-1/4">
                    <div className="border-l-4 border-[#e50914] pl-4 text-[#e50914] font-semibold">
                        Custom<br />storefront
                    </div>
                    <div className="pl-4 font-semibold text-gray-800">
                        Advertising<br />tools
                    </div>
                    <div className="pl-4 font-semibold text-gray-800">
                        Data and<br />analytics
                    </div>
                    <div className="pl-4 font-semibold text-gray-800">
                        Customers<br />support
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 font-semibold leading-snug">
                        Set up a store that<br />showcases your <br /> brand
                    </h2>
                    <p className="mt-6 text-gray-700 text-base sm:text-lg max-w-xl">
                        Differentiate yourself from the competition with a full store dedicated to your products – no coding or design skills necessary!
                    </p>
                </div>

                <div className="w-full lg:w-1/4 flex justify-center">
                    <img
                        src={laptopImage}
                        alt="Laptop Preview"
                        className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Herosec3;

