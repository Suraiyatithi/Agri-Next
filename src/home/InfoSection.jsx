

import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import img2 from '../assets/person-1.jpg';
import InfoBottom from './InfoBottom';
import { useTranslation } from 'react-i18next';

const StatsCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target);
      const incrementTime = 10;
      const step = Math.ceil(end / (1000 / incrementTime));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-lime-800">
        {count.toLocaleString()}+
      </p>
      <p className="text-base sm:text-lg text-gray-700">{label}</p>
    </div>
  );
};

const InfoSection = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="relative bg-gradient-to-br from-green-100 to-yellow-200 min-h-screen py-12 px-4 sm:px-6 md:px-16">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-10 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-lime-800 mb-4">
              {t('info.empowering_title')}
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
              {t('info.empowering_description')}
            </p>
          </div>
          <div className="md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-10">
            <StatsCounter target={1200} label={t('info.happy_clients')} />
            <StatsCounter target={350} label={t('info.products_available')} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-b-2 border-dashed border-lime-800 mb-16" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative md:w-1/2 flex justify-center mb-12 md:mb-0">
            <div className="absolute top-0 left-[10%] w-10 h-10 sm:w-14 sm:h-14 bg-lime-800 rounded-full z-10 shadow-lg animate-bounce" />
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-full overflow-hidden border-8 border-white shadow-xl hover:scale-105 transition-transform duration-300 mb-12">
              <img src={img2} alt="Farmer" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left md:pl-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-lime-800 mb-4">
              {t('info.about_mission_title')}
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              {t('info.about_mission_description')}
            </p>
            <button className="mt-8 mb-12 border-2 border-lime-800 hover:bg-lime-800 text-yellow-700 hover:text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-all text-sm sm:text-base">
              {t('info.about_us_button')}
            </button>
          </div>
        </div>
      </div>

      {/* InfoBottom Section */}
      <div className="-mt-24 z-10 relative">
        <InfoBottom />
      </div>
    </div>
  );
};

export default InfoSection;
