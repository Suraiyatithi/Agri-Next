import { useEffect, useState } from "react";

const tips = [
  "Use compost to improve soil fertility naturally.",
  "Rotate crops to prevent soil nutrient depletion.",
  "Check leaves for early signs of pests or disease.",
  "Water plants early in the morning to avoid evaporation.",
  "Use drip irrigation to conserve water efficiently.",
];

const TipsCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border rounded-xl shadow-md p-5 w-full max-w-md text-center">
      <h2 className="text-xl font-bold text-green-700 mb-3">🌾 Smart Farming Tip</h2>
      <p className="text-gray-700 italic transition duration-500 ease-in-out">
        “{tips[index]}”
      </p>
    </div>
  );
};

export default TipsCarousel;
