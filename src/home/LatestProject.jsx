// import React from 'react';
// import img1 from '../assets/main-icon-leaf.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import '../Allcss/Allcss.css'


// const slideData = [
//   { id: 1, image: 'https://i.ibb.co/2JPYt2J/download.jpg', link: '#project1',des:'Weather Forcasting and Solution', },
//   { id: 2, image: 'https://i.ibb.co.com/mFTRtRYY/kittens-cat-cat-puppy-rush-45170.jpg', link: '#project2',des:'Animal Food and medicine supply' },
//   { id: 3, image: 'https://i.ibb.co/chhyT33q/download.jpg', link: '#project3',des:'Supply Home made Food ' },
//   { id: 4, image: 'https://i.ibb.co.com/cSVzWkvB/download.jpg', link: '#project4',des:'Matket Price Analysis' },
// ];

// const LatestProject = () => {


// return (
//   <div
//   className="relative background bg-cover bg-center pb-12 pt-12 "
//   style={{
//     backgroundImage: "url('https://i.ibb.co.com/tpKKntDv/pexels-photo-414837.jpg')",
//   }}
// >
//   {/* Overlay for whole section */}
//   <div className="absolute inset-0 bg-black/50 z-0"></div>

//   {/* Content on top of overlay */}
//   <div className="relative z-10 mt-12">
//     {/* Heading and description */}
//     <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between text-white">
//       <div className="md:w-1/2 mb-6 md:mb-0">
//         <p className='text-gray-300 text-sm mb-2'>CLOSED PROJECTS</p>
//         <h1 className='text-4xl sm:text-6xl font-bold text-lime-400'>
//           Latest projects update
//         </h1>
//         <img className="w-26 h-10 mt-3" src={img1} alt="" />
//       </div>
//       <div className="md:w-1/2 text-lg leading-relaxed text-gray-200">
//         <p>
//           Explore our recent smart agriculture initiatives, weather forecasting tools, animal care systems, and food supply chain solutions designed to empower farmers globally.
//         </p>
//       </div>
//     </div>

//     {/* Swiper Section */}
//     <Swiper
//     className='mb-12'
//       modules={[Autoplay]}
//       autoplay={{ delay: 3000, disableOnInteraction: false }}
//       spaceBetween={30}
//       slidesPerView={1}
//       breakpoints={{
//         1024: {
//           slidesPerView: 2,
//         },
//       }}
//       loop={true}
//     >
//       {slideData.map((slide) => (
//         <SwiperSlide key={slide.id}>
//           <div
//             className="relative group h-64 lg:h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <a
//               href={slide.link}
//               className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300"
//             >
//               <button className="backdrop-blur-sm bg-white/30 text-white text-3xl p-12 font-semibold rounded-xl hover:bg-yellow-700 transition">
//                 {slide.des}
//               </button>
//             </a>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>

//     <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-6 bg-lime-800">
//   {/* Left Section - 3/4 */}
//   <div className="md:w-3/4 flex flex-col md:flex-row items-center p-8 gap-6">
//     {/* Small Image */}
//     <img
//       src="https://i.ibb.co.com/hF4TR6tQ/download.png" // replace with your image URL
//       alt="icon"
//       className="w-30 h-30 object-contain rounded-full"
//     />

//     {/* Text Section */}
//     <div>
//       <h2 className="text-3xl font-bold text-amber-100 mb-2 p-6">
//         We care about our agriculture
//       </h2>
//       <p className="text-white text-base pr-6 pl-6">
//         Our platform supports farmers through data-driven tools, sustainable practices, and reliable resources to ensure a brighter future for agriculture.
//       </p>
//     </div>
//   </div>

//   {/* Right Section - 1/4 */}
//   <div className="md:w-1/4 flex items-center gap-4">
//     {/* Vertical Yellow Bar */}
//     <div className="w-3 h-38 bg-yellow-700 rounded-sm"></div>

//     {/* Right Image */}
//     <img
//       src="https://i.ibb.co.com/gLrSCdPb/close-up-box-with-ripe-vegetables-329181-4612.jpg" // replace with your image URL
//       alt="Agriculture"
//       className="w-98 h-38 object-cover rounded"
//     />
//   </div>
// </div>


//   </div>



// </div>

// );

// };

// export default LatestProject;



import React from 'react';
import img1 from '../assets/main-icon-leaf.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../Allcss/Allcss.css';
import { useTranslation } from 'react-i18next';

const slideData = [
  { id: 1, image: 'https://i.ibb.co/2JPYt2J/download.jpg', link: '#project1', key: 'weather' },
  { id: 2, image: 'https://i.ibb.co.com/mFTRtRYY/kittens-cat-cat-puppy-rush-45170.jpg', link: '#project2', key: 'animal' },
  { id: 3, image: 'https://i.ibb.co/chhyT33q/download.jpg', link: '#project3', key: 'food' },
  { id: 4, image: 'https://i.ibb.co.com/cSVzWkvB/download.jpg', link: '#project4', key: 'market' },
];

const LatestProject = () => {
  const { t } = useTranslation();

  return (
    <div
      className="relative background bg-cover bg-center pb-12 pt-12 "
      style={{
        backgroundImage: "url('https://i.ibb.co.com/tpKKntDv/pexels-photo-414837.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 mt-12">
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <p className='text-gray-300 text-sm mb-2'>{t('latest_projects.welcome')}</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-lime-400'>
              {t('latest_projects.heading')}
            </h1>
            <img className="w-26 h-10 mt-3" src={img1} alt="" />
          </div>
          <div className="md:w-1/2 text-lg leading-relaxed text-gray-200">
            <p>{t('latest_projects.desc')}</p>
          </div>
        </div>

        <Swiper
          className='mb-12'
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          loop={true}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative group h-64 lg:h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <a
                  href={slide.link}
                  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 bg-black/50 transition duration-300"
                >
                  <button className="backdrop-blur-sm bg-white/30 text-white text-3xl p-12 font-semibold rounded-xl hover:bg-yellow-700 transition">
                    {t(`latest_projects.${slide.key}`)}
                  </button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-6 bg-lime-800">
          <div className="md:w-3/4 flex flex-col md:flex-row items-center p-8 gap-6">
            <img
              src="https://i.ibb.co.com/hF4TR6tQ/download.png"
              alt="icon"
              className="w-30 h-30 object-contain rounded-full"
            />
            <div>
              <h2 className="text-3xl font-bold text-amber-100 mb-2 p-6">
                {t('latest_projects.care_heading')}
              </h2>
              <p className="text-white text-base pr-6 pl-6">
                {t('latest_projects.care_desc')}
              </p>
            </div>
          </div>

          <div className="md:w-1/4 flex items-center gap-4">
            <div className="w-3 h-38 bg-yellow-700 rounded-sm"></div>
            <img
              src="https://i.ibb.co.com/gLrSCdPb/close-up-box-with-ripe-vegetables-329181-4612.jpg"
              alt="Agriculture"
              className="w-98 h-38 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;