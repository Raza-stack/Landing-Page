import React from 'react'
import laptopImage from '../assets/laptop.png';
const Herosec3 = () => {
    return (
        <div className='w-full h-screen font-poppins'>
            <div className='flex items-center justify-center mt-20 font-poppins font-bold text-4xl text-[#E50914]'>
                <h1>Grow your business with a suite of tools built for you
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-8 px-6 py-12 max-w-7xl mx-auto mt-[200px]">
                <div className="flex flex-col gap-6 min-w-[200px] text-left">
                    <div className="border-l-4 border-[#e50914] pl-4 text-[#e50914] font-semibold">
                        Custom<br />storefront
                    </div>
                    <div className="pl-4 font-semibold text-gray-800">Advertising<br />tools</div>
                    <div className="pl-4 font-semibold text-gray-800">Data and<br />analytics</div>
                    <div className="pl-4 font-semibold text-gray-800">Customers<br />support</div>
                </div>

                <div className="flex-1">
                    <h2 className="text-3xl lg:text-5xl  text-gray-900 leading-tight">
                        Set up a store that<br />showcases your <br /> brand
                    </h2>
                    <p className="mt-6 text-gray-700 text-lg max-w-xl">
                        Differentiate yourself from the competition with a full store dedicated to your products - no coding or design skills necessary!
                    </p>
                </div>

                <div className="flex-shrink-0 ">
                    <img
                        src={laptopImage}
                        alt="Laptop Preview"
                        className="w-full max-w-md mx-auto flex items-center"
                    />
                </div>
            </div>
        </div>
    )
}

export default Herosec3
