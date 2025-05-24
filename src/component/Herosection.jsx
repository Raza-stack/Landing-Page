import React from 'react';
import sellerbanner from '../assets/seller-banner.png';
import CountUp from 'react-countup';
import { ShoppingCart, Headphones } from "lucide-react";

const Herosection = () => {
    return (
        <div
            className=" font-poppins w-full bg-cover bg-center py-12 px-6 flex flex-col md:flex-row items-center justify-around gap-12 text-black"
            style={{ backgroundImage: `url(${sellerbanner})`, width: '100%', height: '100vh' }}
        >
            <div className=" max-w-xl space-y-6 text-center md:text-left mb-20 text-base/8">
                <h2 className="text-3xl font-semibold">Sell on 1mdm.com</h2>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Reach millions of B2B buyers globally
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                    <button className="bg-red-600 text-white text-lg px-6 py-2 rounded-full mt-20 hover:bg-red-700 transition">
                        Start Selling
                    </button>
                    <button className="mt-20 border border-red-600 text-lg text-red-600 px-6 py-2 rounded-full hover:bg-red-100 transition">
                        Chat with Consultant
                    </button>
                </div>
            </div>

            <div className="flex flex-col space-y-4 mb-[90px] ml-[120px]">
                <div className="py-6">
                    <div className="text-4xl font-semibold py-2">
                        <CountUp start={10000000} end={26000000} duration={4} separator="," />
                    </div>
                    <div className="pt-2 text-lg">active buyers globally</div>
                </div>

                <div className="py-6">
                    <div className="text-4xl font-semibold">
                        <CountUp start={100000} end={400000} duration={3} separator="," />
                    </div>
                    <div className="pt-2 text-lg">product inquiries daily</div>
                </div>

                <div className="py-6">
                    <div className="text-4xl font-semibold">
                        <CountUp start={50} end={200} duration={2} />
                    </div>
                    <div className="pt-2 text-lg">countries and regions represented</div>
                </div>
            </div>


            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">

                <button className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-red-700 transition-all">
                    <ShoppingCart size={20} />
                    <span>Start Selling</span>
                </button>

                <button className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-red-700 transition-all">
                    <Headphones size={20} />
                    <span>Customer Service</span>
                </button>

            </div>
        </div>
    );
};

export default Herosection;


