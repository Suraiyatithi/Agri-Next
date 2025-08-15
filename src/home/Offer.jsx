



import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../assets/main-icon-leaf.png';

const Offer = () => {
  const { t } = useTranslation();

  const offers = t('offers.items', { returnObjects: true });

  return (
    <div className='p-12 mt-12'>
      <p className='text-gray-600 text-sm mb-2 text-center'>{t('offers.welcome')}</p>
      <h1 className='text-lime-800 text-5xl sm:text-6xl text-center font-semibold mb-4'>
        {t('offers.heading')}
      </h1>
      <div className="flex items-center justify-center mt-2 mb-12">
        <img className="w-26 h-10" src={img1} alt="" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {offers.map((offer, index) => (
          <div
            key={index}
            className='bg-white shadow-md rounded-2xl text-center relative'
          >
            {/* Image with hover zoom */}
            <div className="relative">
              <img
                src={offer.image}
                alt='offer'
                className='w-full h-40 object-cover rounded-t-2xl transform transition-transform duration-500 hover:scale-110'
              />
              {/* Logo over image */}
              <div className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 z-12'>
                <img
                  src={offer.logo}
                  alt='logo'
                  className='w-20 h-20 bg-white p-1 rounded-full shadow-lg border'
                />
              </div>
            </div>

            {/* Card body */}
            <div className='pt-10 pb-6 px-4 mt-6 mb-6'>
              <h4 className='text-gray-800 font-semibold text-xl mb-2'>{offer.text}</h4>
              <p className='font-light text-sm text-gray-600'>{offer.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;





