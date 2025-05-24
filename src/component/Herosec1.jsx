import React from 'react';

const Herosec1 = () => {
    return (
        <div className="font-poppins w-full min-h-screen px-4 sm:px-6 py-10">
            <div className="text-2xl sm:text-3xl font-bold text-center mb-10 leading-snug">
                1mdm.com is a leading ecommerce platform that <br className="hidden sm:block" />
                helps SMEs go global
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 px-2 sm:px-6">

                <div className="md:w-1/2 w-full">
                    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/TN7iJyc5Uks?start=2"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="md:w-1/2 w-full space-y-6 text-gray-800 text-base sm:text-lg leading-relaxed">
                    <p>Connect with millions of business buyers from around the world.</p>
                    <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
                    <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                </div>
            </div>
        </div>
    );
};

export default Herosec1;



