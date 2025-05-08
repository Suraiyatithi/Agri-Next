

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import img1 from '../assets/main-icon-leaf.png';

const ChooseUs = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -20]);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#f9f9f7]">
      
      {/* Left Section */}
      <motion.div style={{ y }} className="lg:w-2/5 w-full relative overflow-hidden">
        <img
          src="https://i.ibb.co.com/BKvT8myM/agriculture-healthy-food-23-2151969814.jpg"
          alt="Why Choose Us"
          className="w-full h-full object-cover m-4"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-900 via-yellow-700/50 to-transparent" />

        {/* Floating Text Box */}
        <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-xs">
          <h3 className="text-xl font-bold text-lime-900 mb-2">Trusted by Farmers</h3>
          <p className="text-sm text-gray-800">
            Empowering agriculture through smart tech. Farming is the backbone of life—let’s make it smarter.
           
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="lg:w-3/5 w-full px-6 lg:px-16 py-12 flex flex-col justify-center">
        <p className="text-sm text-gray-600 uppercase tracking-wider mb-2">Our Specialities</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-lime-800 mb-4">Why Choose Us</h2>
        <img src={img1} alt="Leaf Icon" className="w-28 h-auto mb-6" />
        
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          At AgriNext, we blend innovation with deep agricultural understanding to empower farmers. Our smart tools and expert insights drive real results—more efficiency, more sustainability, more growth.
          Empowering agriculture through smart tech. Farming is the backbone of life—let’s make it smarter.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Feature 1 */}
          <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-lime-700 text-6xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Smart Monitoring</h4>
              <p className="text-gray-600 mt-2">
                Track your crop and soil health in real time using intelligent sensors—designed for smarter decisions.
                Our smart tools and expert insights drive real results—more efficiency, more sustainability, more growth.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
            <FaCheckCircle className="text-lime-700 text-6xl mt-1" />
            <div>
              <h4 className="text-xl font-semibold text-gray-800">Expert Guidance</h4>
              <p className="text-gray-600 mt-2">
                Get personalized farming advice and alerts from professionals to boost productivity and confidence.
                At AgriNext, we blend innovation with deep agricultural understanding to empower farmers. 
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="inline-flex items-center gap-2 self-start bg-lime-800 text-white px-6 py-3 rounded-full hover:bg-lime-700 transition">
          Read More
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


