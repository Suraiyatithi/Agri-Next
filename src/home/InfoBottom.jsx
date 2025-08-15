




import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/veges.jpg';
import img2 from '../assets/leaf-bg.jpg';
import img3 from '../assets/leaf-21851_1920.jpg';
import img4 from '../assets/leaf-bg.jpg';

const InfoBottom = () => {
  const { t } = useTranslation();

  const slides = [
    {
      bg: `url(${img2})`,
      text: t('info_bottom.slide1.title'),
      des: t('info_bottom.slide1.desc'),
    },
    {
      bg: `url(${img3})`,
      text: t('info_bottom.slide2.title'),
      des: t('info_bottom.slide2.desc'),
    },
    {
      bg: `url(${img4})`,
      text: t('info_bottom.slide3.title'),
      des: t('info_bottom.slide3.desc'),
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[450px] mt-10 px-4 gap-6">
      {/* Slide Section */}
      <div
        className="w-full md:w-1/2 relative rounded-2xl overflow-hidden border-2 border-lime-700 shadow-lg"
        style={{ backgroundImage: slides[current].bg }}
      >
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm flex flex-col justify-center p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">{slides[current].text}</h2>
          <p className="text-lg leading-relaxed mb-6">{slides[current].des}</p>

          {/* Slide Dots */}
          <div className="flex justify-start gap-2 mt-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition duration-300 ${
                  current === index ? 'bg-lime-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center border-2 border-dashed border-lime-700 rounded-2xl shadow-lg overflow-hidden">
        <img
          src={img1}
          alt="Farming Visual"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default InfoBottom;
