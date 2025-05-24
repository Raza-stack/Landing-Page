import React, { useState } from 'react';
import slider1 from '../assets/slider.png';
import slider2 from '../assets/sliderr.png';
import slider3 from '../assets/sliderr.png';

const Testinomial = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const slides = [
    {
      img: slider1,
      text: `Lab Evolution is an import-export company of reagents and laboratory equipment established over a decade. Our expert team ensures top-quality lab solutions globally.`,
    },
    {
      img: slider2,
      text: `We specialize in providing advanced imaging tools and reagent kits that help researchers work more efficiently and accurately.`,
    },
    {
      img: slider3,
      text: `Trusted by scientists worldwide, Lab Evolution delivers quality equipment and reliable service tailored to your lab’s needs.`,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto my-12 px-4 font-poppins relative">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        ⟨
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
      >
        ⟩
      </button>

      {/* Testimonial Card */}
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500">
        {/* Text */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center">
          <div>
            <div className="text-red-500 text-4xl md:text-5xl mb-4 leading-none">“</div>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              {slides[index].text}
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src={slides[index].img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Testinomial;


