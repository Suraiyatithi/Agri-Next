import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { Sun, CloudRain, Wind } from 'lucide-react';
import LiveWeatherChart from './LiveWeatherChart';

const weatherData = [
  { icon: <Sun />, title: 'Sunny', temp: '32°C', wind: '12 km/h' },
  { icon: <CloudRain />, title: 'Rainy', temp: '24°C', wind: '8 km/h' },
  { icon: <Wind />, title: 'Windy', temp: '28°C', wind: '20 km/h' },
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

export default function WeatherInsights() {
  return (
    <section className="text-center space-y-8 px-6 lg:px-20 py-10 bg-white">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl font-bold text-blue-700"
      >
        Weather Insights
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <Slider {...sliderSettings}>
          {weatherData.map((data, idx) => (
            <div key={idx} className="bg-blue-100 rounded-xl px-6 py-8 max-w-md mx-auto shadow-md">
              <div className="flex flex-col items-center space-y-4">
                <div className="text-blue-600">{data.icon}</div>
                <h3 className="text-xl font-semibold">{data.title}</h3>
                <p className="text-gray-700">{data.temp} | Wind: {data.wind}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
      <div>
        <LiveWeatherChart></LiveWeatherChart>
      </div>
    </section>
  );
}
