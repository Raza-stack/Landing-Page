import React from 'react'
import bgImage from '../assets/footer-banner.png';

const Herosec4 = () => {
    return (
        <div
            className="w-full bg-cover bg-center py-20 text-center text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Grow Your Business?
            </h2>
            <div className="flex justify-center gap-4">
                <button className="bg-white text-red-600 font-medium px-6 py-2 rounded-full hover:bg-red-100 transition">
                    Start selling
                </button>
                <button className="border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-white hover:text-red-600 transition">
                    Chat with consultant
                </button>
            </div>
        </div>
    )
}

export default Herosec4
