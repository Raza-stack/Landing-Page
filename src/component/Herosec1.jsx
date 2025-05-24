import React from 'react';

const Herosec1 = () => {
    return (
        <div className="font-poppins w-full h-screen px-6 py-10">
            <div className="text-3xl font-bold text-center mb-10">
                1mdm.com is a leading ecommerce platform that <br />
                helps SMEs go global
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-10">
                <div className="md:w-1/2 w-full">
                    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
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

                <div className="md:w-1/2 w-full space-y-6 text-gray-800 text-lg leading-relaxed font-poppins">
                    <p>Connect with millions of business buyers from around the world.</p>
                    <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
                    <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
                </div>
            </div>


           


        </div>
    );
};

export default Herosec1;


