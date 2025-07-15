import React from 'react';

const seasonalData = [
  {
    season: "Summer",
    crops: [
      {
        name: "Maize",
        image: "https://i.ibb.co/Zp2Rqrp9/images.jpg",
        description: "A heat-tolerant cereal crop ideal for high sunlight.",
        benefits: "Used for food, fodder, and industrial products.",
        conditions: "25–35°C, well-drained soil.",
      },
      {
        name: "Sunflower",
        image: "https://i.ibb.co/qM6XRVvm/images.jpg",
        description: "Bright oilseed flower that thrives in warm conditions.",
        benefits: "Used for sunflower oil and honey production.",
        conditions: "20–30°C, full sun exposure.",
      },
      {
        name: "Pumpkin",
        image: "https://i.ibb.co/bjjdvqqT/download.jpg",
        description: "Large vegetable that grows well in warm summers.",
        benefits: "Rich in fiber and vitamins.",
        conditions: "20–35°C, loamy soil.",
      },
    ],
  },
  {
    season: "Rainy",
    crops: [
      {
        name: "Paddy",
        image: "https://i.ibb.co/ZzVLy45r/images.jpg",
        description: "Main rice crop grown in flooded fields.",
        benefits: "Staple food crop for billions worldwide.",
        conditions: "24–30°C, flooded/wet soil.",
      },
      {
        name: "Jute",
        image: "https://i.ibb.co/wNvH50JX/images.jpg",
        description: "Fiber crop used for making sacks and eco-bags.",
        benefits: "Biodegradable and sustainable fiber.",
        conditions: "High humidity, 25–35°C.",
      },
      {
        name: "Bottle Gourd",
        image: "https://i.ibb.co/yFYm3HDm/download.jpg",
        description: "Climber vegetable that grows quickly in moist climate.",
        benefits: "Good for digestion and cooling effect.",
        conditions: "Warm, humid, lots of water.",
      },
    ],
  },

  {
  season: "Winter",
  crops: [
    {
      name: "Tomato",
      image: "https://i.ibb.co/dwxk0zDT/download.jpg",
      description: "A versatile vegetable that thrives in cooler temperatures and abundant sunlight.",
      benefits: "Rich in vitamins A and C, widely used in cooking and salads.",
      conditions: "15–25°C, well-drained loamy soil with moderate irrigation.",
    },
    {
      name: "Cauliflower",
      image: "https://i.ibb.co/W4yjP8Ff/download.jpg",
      description: "A popular winter vegetable grown for its edible white head.",
      benefits: "High in fiber and antioxidants, supports digestion and heart health.",
      conditions: "12–20°C, prefers moist but not waterlogged soil.",
    },
    {
      name: "Cabbage",
      image: "https://i.ibb.co/9kh4z6vf/download.jpg",
      description: "Leafy vegetable that forms a tight head and grows best in cold climates.",
      benefits: "Boosts immunity, rich in vitamin K and folate.",
      conditions: "10–18°C, fertile soil with consistent moisture.",
    },
  ],
}
  // Add similar sections for Autumn, Late Autumn, Winter, Spring...
];

const SeasonalCropGuide = () => {
  return (
    <section className="w-full px-4 py-12 bg-gradient-to-br from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-lime-800 mb-10">
          🌿 Seasonal Planting Guide for Best Crop Production
        </h2>

        {seasonalData.map((season, idx) => (
          <div key={idx} className="mb-12">
            <h3 className="text-2xl font-semibold text-green-700 mb-6 border-l-4 pl-4 border-green-500">
              {season.season}
            </h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {season.crops.map((crop, i) => (
                <div
                  key={i}
                  className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-green-300 transition-all duration-300"
                >
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 space-y-2">
                    <h4 className="text-xl font-bold text-green-800">{crop.name}</h4>
                    <p className="text-gray-600 text-sm">{crop.description}</p>
                    <p className="text-sm">
                      <span className="font-semibold text-green-600">Benefits:</span>{" "}
                      {crop.benefits}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold text-green-600">Ideal Conditions:</span>{" "}
                      {crop.conditions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalCropGuide;
