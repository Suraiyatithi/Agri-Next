


// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img from "../assets/irewolede-PvwdlXqo85k-unsplash.jpg";
// import img2 from "../assets/jan-kopriva-LTMaAwxanGk-unsplash.jpg";
// import img3 from '../assets/tractor-agricultural-machine-cultivating-field.jpg';
// import { useTranslation } from "react-i18next";

// const Banner = () => {
//   const { t } = useTranslation();

//   const slides = [
//     {
//       id: 1,
//       image: img,
//       title: t("banner.smart_irrigation_title"),
//       description: t("banner.smart_irrigation_desc"),
//     },
//     {
//       id: 2,
//       image: img2,
//       title: t("banner.soil_monitoring_title"),
//       description: t("banner.soil_monitoring_desc"),
//     },
//     {
//       id: 3,
//       image: img3,
//       title: t("banner.drone_surveillance_title"),
//       description: t("banner.drone_surveillance_desc"),
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Carousel
//         autoPlay
//         interval={3000}
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         showArrows={false}
//         swipeable
//         emulateTouch
//       >
//         {slides.map((slide) => (
//           <div
//             key={slide.id}
//             className="relative h-[700px] bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
//             <div className="relative z-10 h-full flex items-center">
//               <div className="ml-10 p-12 bg-white/20 backdrop-blur-md p-8 rounded-xl max-w-xl text-white animate-fadeInUp">
//                 <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">
//                   {slide.title}
//                 </h2>
//                 <p className="text-lg leading-relaxed drop-shadow-sm">
//                   {slide.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/irewolede-PvwdlXqo85k-unsplash.jpg";
import img2 from "../assets/jan-kopriva-LTMaAwxanGk-unsplash.jpg";
import img3 from '../assets/tractor-agricultural-machine-cultivating-field.jpg';
import { useTranslation } from "react-i18next";

const Banner = () => {
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: img,
      title: t("banner.smart_irrigation_title"),
      description: t("banner.smart_irrigation_desc"),
    },
    {
      id: 2,
      image: img2,
      title: t("banner.soil_monitoring_title"),
      description: t("banner.soil_monitoring_desc"),
    },
    {
      id: 3,
      image: img3,
      title: t("banner.drone_surveillance_title"),
      description: t("banner.drone_surveillance_desc"),
    },
  ];

  return (
    <div className="w-full">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        swipeable
        emulateTouch
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>

            <div className="relative z-10 h-full flex items-center">
              <div className="ml-4 sm:ml-8 lg:ml-12 px-4 sm:px-6 lg:px-12 py-6 bg-white/20 backdrop-blur-md rounded-xl max-w-md sm:max-w-lg text-white animate-fadeInUp">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
