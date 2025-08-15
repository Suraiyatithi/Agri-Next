import React, { useState, useEffect } from 'react';
import useProduct from '../Hooks/useProduct';
import ProductData from '../Product/ProductData';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Allcss/Allcss.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [product] = useProduct();
  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(2);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Detect screen size and set number of visible cards
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth < 640) {
        setCardsPerSlide(1);
      } else {
        setCardsPerSlide(2);
      }
    };

    updateCardsPerSlide(); // Initial check
    window.addEventListener('resize', updateCardsPerSlide);

    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  const visibleProducts = product.slice(index, index + cardsPerSlide);

  const nextSlide = () => {
    if (index + cardsPerSlide < product.length) {
      setIndex(index + cardsPerSlide);
    }
  };

  const prevSlide = () => {
    if (index - cardsPerSlide >= 0) {
      setIndex(index - cardsPerSlide);
    }
  };

  return (
    <div
      className="flex background flex-col md:flex-row items-center mt-12 mb-12 justify-between bg-cover bg-center py-16 px-6 md:px-16"
      style={{ backgroundImage: `url('https://i.ibb.co/1fX0VqJk/22.webp')` }}
    >
      {/* Left Section */}
      <div className="w-full md:w-2/6 text-white space-y-6 mb-10 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold leading-snug">
          {t('hero.heading')}
        </h1>
        <p className="text-base sm:text-lg text-gray-200">
          {t('hero.subheading')}
        </p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-lime-600 hover:bg-lime-700 rounded-full text-white font-semibold transition"
        >
          {t('hero.button')}
        </button>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-4/6 relative flex items-center justify-center">
        <div className="flex gap-4 sm:gap-6 overflow-hidden w-full justify-center">
          {visibleProducts.map((p) => (
            <div key={p._id} className="w-full sm:w-[48%]">
              <ProductData data={p} />
            </div>
          ))}
        </div>

        {/* Slide Controls */}
        <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white text-lime-600 p-2 rounded-full shadow-md hover:bg-lime-100 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white text-lime-600 p-2 rounded-full shadow-md hover:bg-lime-100 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
