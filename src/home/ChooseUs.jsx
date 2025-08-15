


import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../assets/main-icon-leaf.png';
import { useTranslation } from 'react-i18next';

const ChooseUs = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -20]);
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#f9f9f7]">
      {/* Left Section */}
      <motion.div style={{ y }} className="lg:w-2/5 w-full relative overflow-hidden">
        <img
          src="https://i.ibb.co/TxsDNDrg/grain-drying-2107462-1280.jpg"
          alt="Why Choose Us"
          className="w-full h-full object-cover m-4"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-yellow-700/50 to-transparent" />

        {/* Floating Text Box */}
        <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-bold text-lime-900 mb-2">{t('choose.trusted_title')}</h3>
          <p className="text-sm text-gray-800">
            {t('choose.trusted_desc')}
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="lg:w-3/5 w-full px-6 lg:px-16 py-12 flex flex-col justify-center">
        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">{t('choose.specialities')}</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-lime-800 mb-4">{t('choose.heading')}</h2>
        <img src={img1} alt="Leaf Icon" className="w-28 h-auto mb-6" />

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {t('choose.intro_desc')}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-lime-700 text-6xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{t('choose.feature1_title')}</h4>
              <p className="text-gray-600 mt-2">{t('choose.feature1_desc')}</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-lime-700 text-6xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">{t('choose.feature2_title')}</h4>
              <p className="text-gray-600 mt-2">{t('choose.feature2_desc')}</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="inline-flex items-center gap-2 self-start bg-lime-800 text-white px-6 py-3 rounded-full hover:bg-lime-700 transition">
          {t('choose.button')}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-yellow-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
