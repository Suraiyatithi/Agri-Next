import React, { useState, useEffect } from 'react';

const OfferBanner = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (t) => {
    const m = Math.floor(t / 60);
    const s = t % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="bg-gradient-to-r from-lime-500 to-green-600 text-white py-8 px-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold">🌾 Flash Offer: 30% Off on Organic Seeds!</h2>
        <p className="text-sm mt-2">Hurry up! This offer ends in:</p>
      </div>
      <div className="mt-4 md:mt-0 text-2xl font-semibold">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default OfferBanner;
