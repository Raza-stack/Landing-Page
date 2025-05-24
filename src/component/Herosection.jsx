import React from 'react';
import sellerbanner from '../assets/seller-banner.png';
import CountUp from 'react-countup';
import { ShoppingCart, Headphones } from "lucide-react";

const Herosection = () => {
    return (
        <div
            className="font-poppins w-full bg-cover bg-center py-12 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-12 text-black min-h-screen"
            style={{ backgroundImage: `url(${sellerbanner})` }}
        >

            <div className="w-full max-w-xl space-y-6 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold">Sell on 1mdm.com</h2>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Reach millions of B2B buyers globally
                </h1>

                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-8">
                    <button className="bg-red-600 text-white text-lg px-6 py-2 rounded-full hover:bg-red-700 transition">
                        Start Selling
                    </button>
                    <button className="border border-red-600 text-lg text-red-600 px-6 py-2 rounded-full hover:bg-red-100 transition">
                        Chat with Consultant
                    </button>
                </div>
            </div>

            <div className="w-full max-w-md flex flex-col items-center md:items-start space-y-6">
                <div className="text-center md:text-left">
                    <div className="text-3xl sm:text-4xl font-semibold">
                        <CountUp start={10000000} end={26000000} duration={4} separator="," />
                    </div>
                    <div className="pt-2 text-base sm:text-lg">active buyers globally</div>
                </div>

                <div className="text-center md:text-left">
                    <div className="text-3xl sm:text-4xl font-semibold">
                        <CountUp start={100000} end={400000} duration={3} separator="," />
                    </div>
                    <div className="pt-2 text-base sm:text-lg">product inquiries daily</div>
                </div>

                <div className="text-center md:text-left">
                    <div className="text-3xl sm:text-4xl font-semibold">
                        <CountUp start={50} end={200} duration={2} />
                    </div>
                    <div className="pt-2 text-base sm:text-lg">countries and regions represented</div>
                </div>
            </div>

            <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
                <button className="bg-red-600 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-red-700 transition-all text-sm sm:text-base">
                    <ShoppingCart size={20} />
                    <span>Start Selling</span>
                </button>

                <button className="bg-red-600 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-md hover:bg-red-700 transition-all text-sm sm:text-base">
                    <Headphones size={20} />
                    <span>Customer Service</span>
                </button>
            </div>
        </div>
    );
};

export default Herosection;



