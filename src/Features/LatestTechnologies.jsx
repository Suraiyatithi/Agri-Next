import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Cpu, Thermometer } from 'lucide-react';

const techImages = [
  'https://i.ibb.co.com/F49QTKpP/download.jpg',
  'https://i.ibb.co.com/Rp5xnyMc/download.jpg',
  'https://i.ibb.co.com/GfxhJwQV/download.jpg',
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

export default function LatestTechnologies() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 lg:px-20 py-10 bg-white">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold text-green-700">Latest Technologies</h2>
        <p className="text-gray-600">
          Explore the most recent innovations transforming agriculture — from AI-powered sensors to smart irrigation systems.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-green-100 p-4 rounded-xl shadow-md">
            <Cpu className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">AI Monitoring</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-green-100 p-4 rounded-xl shadow-md">
            <Thermometer className="text-green-600 w-8 h-8 mb-2" />
            <p className="text-sm font-semibold">Smart Sensors</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Slider {...sliderSettings}>
          {techImages.map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden shadow-lg">
              <img src={src} alt={`Technology ${idx + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}
