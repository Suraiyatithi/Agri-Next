// import React, { useState } from 'react';
// import useProduct from '../Hooks/useProduct';
// import ProductData from '../Product/ProductData';
// import { useNavigate } from 'react-router-dom';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import '../Allcss/Allcss.css';

// const HeroSection = () => {
//     const [product] = useProduct();
//     const [index, setIndex] = useState(0);
//     const navigate = useNavigate();

//     const visibleProducts = product.slice(index, index + 2);

//     const nextSlide = () => {
//         if (index + 2 < product.length) setIndex(index + 2);
//     };

//     const prevSlide = () => {
//         if (index - 2 >= 0) setIndex(index - 2);
//     };
// // 'https://i.ibb.co/qF1BTKh3/hydroponics-system-planting-vegetables-herbs-without-using-soil-health-1150-8153.jpg'
// //https://i.ibb.co.com/Lz99JCB5/pexels-photo-767240.webp
//     return (
//         <div
//             className="flex background flex-col md:flex-row items-center mt-12 mb-12 justify-between bg-cover bg-center py-16 px-6 md:px-16"
//             style={{ backgroundImage: `url('https://i.ibb.co/1fX0VqJk/22.webp')` }} // Replace with your image path
//         >
//             {/* Left Section: Heading */}
//             <div className="w-full md:w-2/6 text-white space-y-6 mb-10 md:mb-0">
//                 <h1 className="text-4xl font-bold leading-snug">
//                     Discover Smart Farming Products
//                 </h1>
//                 <p className="text-lg text-gray-200">
//                     Boost productivity with our premium and sustainable farming tools.
//                 </p>
//                 <button
//                     onClick={() => navigate('/products')}
//                     className="px-6 py-3 bg-lime-600 hover:bg-lime-700 rounded-full text-white font-semibold transition"
//                 >
//                     Browse Products
//                 </button>
//             </div>

//             {/* Right Section: Slider */}
//             <div className="w-full md:w-4/6 relative flex items-center justify-center">
//                 {/* Slide Container */}
//                 <div className="flex gap-6 overflow-hidden">
//                     {visibleProducts.map(p => (
//                         <div key={p._id} className="w-[48%]">
//                             <ProductData data={p} />
//                         </div>
//                     ))}
//                 </div>

//                 {/* Slide Controls */}
//                 <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4">
//                     <button
//                         onClick={prevSlide}
//                         className="bg-white text-lime-600 p-2 rounded-full shadow-md hover:bg-lime-100 transition"
//                     >
//                         <FaChevronLeft />
//                     </button>
//                     <button
//                         onClick={nextSlide}
//                         className="bg-white text-lime-600 p-2 rounded-full shadow-md hover:bg-lime-100 transition"
//                     >
//                         <FaChevronRight />
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;

// HeroSection.jsx (Multi-language enabled)
import React, { useState } from 'react';
import useProduct from '../Hooks/useProduct';
import ProductData from '../Product/ProductData';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../Allcss/Allcss.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const [product] = useProduct();
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const visibleProducts = product.slice(index, index + 2);

  const nextSlide = () => {
    if (index + 2 < product.length) setIndex(index + 2);
  };

  const prevSlide = () => {
    if (index - 2 >= 0) setIndex(index - 2);
  };

  return (
    <div
      className="flex background flex-col md:flex-row items-center mt-12 mb-12 justify-between bg-cover bg-center py-16 px-6 md:px-16"
      style={{ backgroundImage: `url('https://i.ibb.co/1fX0VqJk/22.webp')` }}
    >
      {/* Left Section: Heading */}
      <div className="w-full md:w-2/6 text-white space-y-6 mb-10 md:mb-0">
        <h1 className="text-4xl font-bold leading-snug">
          {t('hero.heading')}
        </h1>
        <p className="text-lg text-gray-200">
          {t('hero.subheading')}
        </p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-lime-600 hover:bg-lime-700 rounded-full text-white font-semibold transition"
        >
          {t('hero.button')}
        </button>
      </div>

      {/* Right Section: Slider */}
      <div className="w-full md:w-4/6 relative flex items-center justify-center">
        <div className="flex gap-6 overflow-hidden">
          {visibleProducts.map(p => (
            <div key={p._id} className="w-[48%]">
              <ProductData data={p} />
            </div>
          ))}
        </div>

        {/* Slide Controls */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-4">
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
