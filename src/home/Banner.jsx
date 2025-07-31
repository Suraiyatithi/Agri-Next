

// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import img from "../assets/irewolede-PvwdlXqo85k-unsplash.jpg";
// import img2 from "../assets/jan-kopriva-LTMaAwxanGk-unsplash.jpg";
// import img3 from '../assets/tractor-agricultural-machine-cultivating-field.jpg';

// const slides = [
//   {
//     id: 1,
//     image: img,
//     title: "Smart Irrigation",
//     description:
//       "Smart irrigation systems help conserve water by delivering the right amount at the right time, automatically adjusting to weather conditions. With this advanced technology, farmers can reduce water waste, lower operational costs, and increase crop efficiency—making agriculture more sustainable and impactful for our nation.",
//   },
//   {
//     id: 2,
//     image: img2,
//     title: "Soil Monitoring",
//     description:
//       "Soil monitoring sensors provide farmers with real-time data on moisture, temperature, and nutrient levels. This data-driven approach empowers them to make informed decisions, optimize fertilization schedules, and boost crop productivity, ultimately contributing to smarter and greener agriculture.",
//   },
//   {
//     id: 3,
//     image: img3,
//     title: "Drone Surveillance",
//     description:
//       "Drones enable precision farming by offering aerial views of crop health, pest outbreaks, and irrigation coverage. With quick and comprehensive insights, farmers can respond faster to issues, ensuring healthier crops and improved harvests across larger farmlands.",
//   },
// ];

// const Banner = () => {
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
//             {/* Dark overlay for better readability */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

//             {/* Text content */}
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


// Banner.jsx (Multi-language enabled)
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
            className="relative h-[700px] bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
            <div className="relative z-10 h-full flex items-center">
              <div className="ml-10 p-12 bg-white/20 backdrop-blur-md p-8 rounded-xl max-w-xl text-white animate-fadeInUp">
                <h2 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-lg leading-relaxed drop-shadow-sm">
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
