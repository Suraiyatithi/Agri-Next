
import React, { useState } from 'react';
import img1 from '../assets/veges.jpg';
import img2 from '../assets/leaf-bg.jpg';
import img3 from '../assets/leaf-21851_1920.jpg';
import img4 from '../assets/leaf-bg.jpg';

const InfoBottom = () => {
  const slides = [
    {
      bg: `url(${img2})`,
      text: 'Empowering Farmers',
      des: 'Our main goal is to empower the farmer who lives in the village and does not get enough facilities.A country is fully dependent on farming, as people cannot live without food.',
    },
    {
      bg: `url(${img3})`,
      text: 'Smart Agriculture Solutions',
      des: 'Smart farming can bring the best results in agriculture, where users can get a lot of benefits.Our main goal is to empower the farmer who lives in the village and does not get enough facilities.',
    },
    {
      bg: `url(${img4})`,
      text: 'Future of Farming',
      des: 'A country is fully dependent on farming, as people cannot live without food.Our main goal is to empower the farmer who lives in the village and does not get enough facilities. This is a basic need.',
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="flex w-full h-[400px]">
      
      <div className="w-1/3 border border-dashed border-lime-800 p-3">
      <div
        className=" bg-cover  bg-center flex flex-col items-center justify-center text-white text-2xl font-bold transition-all duration-700 p-4"
        style={{ backgroundImage: slides[current].bg }}
      >
        <div className=" bg-opacity-50 p-3 rounded mb-3 w-full text-center">
          {slides[current].text}
        </div>
        <div className="bg-opacity-40 p-2 rounded mb-4 text-sm font-normal text-center">
          {slides[current].des}
        </div>

        {/* Slide Buttons */}
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                current === index ? 'bg-white' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
</div>
      {/* Right Side: Static Image */}
      <div className="w-2/3 flex items-right justify-center ">
      <div className=" border border-dashed border-lime-800 p-3">
        <img
          src={img1}
          alt="Right Side"
          className="max-w-full max-h-full object-cover"
        />
        </div>
      </div>
    </div>
  );
};

export default InfoBottom;
