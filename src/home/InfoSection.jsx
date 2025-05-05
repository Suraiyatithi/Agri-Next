import React from 'react';
import img2 from '../assets/person-1.jpg';
import img3 from '../assets/info-section-photo-1.jpg';
import img4 from '../assets/leaf-bg.jpg';

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import InfoBottom from './InfoBottom';

const StatsCounter = ({ target, label }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.8,     // 50% of the element must be visible
  });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(target);
      if (start === end) return;

      let incrementTime = 10;
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
      <p className="text-7xl font-bold text-lime-500">{count.toLocaleString()}+</p>
      <p className="text-xl text-gray-600">{label}</p>
    </div>
  );
};

const InfoSection = () => {
    return (
      <div className="relative ">
        <div
        className="bg-cover pb-12 pt-6 bg-yellow-700 bg-center min-h-screen flex flex-col justify-center px-6 py-6"
        // style={{ backgroundImage: "url('https://i.ibb.co.com/FCHch27/leaf-21851-1920.jpg')" }}
      >
        {/* Top section */}
        <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Left Text */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-white mb-4">Empowering Farmers Everywhere</h2>
            <p className="text-white text-lg ">
              AgriNext is committed to revolutionizing agriculture with modern tools and smart solutions.
              With modern solution it is way more easy to work with proper profit .Smart agriculture is here to support our farmers.
            </p>
       
          </div>
  
          {/* Right Count */}
          <div className="md:w-1/2 flex justify-center gap-10">
            <StatsCounter target={1200} label="Happy Clients" />
            <StatsCounter target={350} label="Products Available" />
          </div>
          </div>
          <div className="border-b-2 border-dashed border-white " />
        </div>
  
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center mt-10 px-4">
  {/* Left Circular Image */}
  <div className="md:w-1/2 flex justify-center mb-12 md:mb-0">
    <div className="w-[450px] h-[450px] rounded-full mb-12 overflow-hidden shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300">
      <img
        src={img2}
        alt="Farmer"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Right Text */}
  <div className="md:w-1/2 text-white md:pl-10 text-center md:text-left mb-12">
    <h3 className="text-2xl font-semibold mb-4">About Our Mission</h3>
    <p className="text-base leading-relaxed">
      We aim to bridge the gap between traditional farming and technological advancement by providing easy-to-use solutions tailored to farmers’ needs.
      Smart farming provides a variety of services that help users in many ways. Our main focus is to help farmers and develop our economy.
      Smart farming offers different features that help produce more efficiently and sustainably.
    </p>
    <button className="mt-10 bg-neutral-500 text-white px-8 py-3 rounded-full hover:bg-neutral-600 transition-all">
      About Us
    </button>
  </div>
</div>
   </div>
   <div className='-mt-24 z-10 relative'>
    <InfoBottom></InfoBottom>
   </div>
  </div>
    );
};

export default InfoSection;