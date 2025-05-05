import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // required CSS
import img from '../assets/irewolede-PvwdlXqo85k-unsplash.jpg';
import img2 from '../assets/jan-kopriva-LTMaAwxanGk-unsplash.jpg';
const slides = [
  {
    id: 1,
    image: img,
    title: "Smart Irrigation",
    description: "Save water with automated irrigation systems.That basically the only way to save water .Now a days this samrt version of saving water work properly ans this is also benificial for our country too "
  },
  {
    id: 2,
    image: img2,
    title: "Soil Monitoring",
    description: "Monitor real-time soil data to improve yield."
  },
  {
    id: 3,
    image: img,
    title: "Drone Surveillance",
    description: "Track crop health using aerial drones."
  }
];

const Banner = () => {
    return (
        <div className="w-full ">
        <Carousel
          autoPlay
          interval={4000}
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
              className="h-[700px] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="backdrop-blur-sm bg-white/30 p-8 rounded-lg ml-10 text-left text-white max-w-md">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
};

export default Banner;