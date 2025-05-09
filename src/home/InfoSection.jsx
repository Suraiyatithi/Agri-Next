


import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import img2 from '../assets/person-1.jpg';
import InfoBottom from './InfoBottom';

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
      <p className="text-6xl font-extrabold text-lime-800">{count.toLocaleString()}+</p>
      <p className="text-xl text-gray-700">{label}</p>
    </div>
  );
};

const InfoSection = () => {
  return (
    <div>
    <div className="relative bg-gradient-to-br from-green-100 to-yellow-200 min-h-screen py-16 px-6 md:px-16">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-lime-800 mb-4">Empowering Farmers Everywhere</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            AgriNext is committed to revolutionizing agriculture with modern tools and smart solutions.
            With today’s innovative technology, farming is easier, more profitable, and sustainable.
            We strive to ensure every farmer can benefit from the digital age.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center gap-14">
          <StatsCounter target={1200} label="Happy Clients" />
          <StatsCounter target={350} label="Products Available" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-b-2 border-dashed border-lime-800 mb-16" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Circular Image with Floating Circle */}
        <div className="relative md:w-1/2 flex justify-center mb-12 md:mb-0">
          {/* Decorative Top-Left Circle */}
          <div className="absolute top-0 left-[10%] w-16 h-16 bg-lime-800 rounded-full z-10 shadow-lg animate-bounce" />

          {/* Profile Image */}
          <div className="w-[400px] h-[400px] rounded-full overflow-hidden border-8 border-white shadow-xl hover:scale-105 transition-transform duration-300 mb-12">
            <img
              src={img2}
              alt="Farmer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left md:pl-10">
          <h3 className="text-3xl font-semibold text-lime-800 mb-4">About Our Mission</h3>
          <p className="text-gray-800 text-base leading-relaxed">
            We aim to bridge the gap between traditional farming and technological advancement by providing
            easy-to-use solutions tailored to farmers’ needs. Our goal is to empower rural communities, enhance productivity,
            and build a sustainable future. Smart farming tools from AgriNext allow better monitoring, decision-making,
            and yield optimization to ultimately help feed the world.
          </p>
          <button className="mt-8 mb-12 border-2 border-lime-800 hover:bg-lime-800 text-yellow-700 px-8 py-3 rounded-full transition-all">
            About Us
          </button>
        </div>
      </div>
</div>
      {/* InfoBottom Section */}
      <div className="-mt-30 z-10 relative">
        <InfoBottom />
      </div>
    </div>
  );
};

export default InfoSection;
