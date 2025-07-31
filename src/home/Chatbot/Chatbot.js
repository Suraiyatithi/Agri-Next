// const chatbotKnowledge = {
//   // Crop Cultivation
//   "how to grow rice": "To grow rice, prepare a wet paddy field, use quality seeds, and ensure proper irrigation.",
//   "how to grow wheat": "Use well-drained loamy soil, sow seeds in cooler months, and ensure regular weeding and watering.",
//   "how to grow corn": "Sow in warm soil, use fertilizer high in nitrogen, and ensure full sun exposure.",
//   "how to grow potatoes": "Plant seed potatoes in cool weather, mound soil as they grow, and harvest after flowering.",
//   "how to grow tomatoes": "Use fertile soil, provide ample sunlight, stake the plants, and water regularly.",
//   "how to grow onions": "Plant in well-drained soil, keep weed-free, and harvest when tops yellow.",
//   "how to grow sugarcane": "Use rich soil, plant cane stalks, and ensure irrigation every 7–10 days.",
//   "how to grow carrots": "Loosen soil, sow seeds thinly, and keep soil moist.",
//   "how to grow cabbage": "Sow seeds in cool weather, provide full sunlight, and space plants adequately.",
//   "how to grow bananas": "Use well-drained soil, provide frequent watering, and apply potassium-rich fertilizer.",

//   // Fertilizers & Nutrition
//   "fertilizer for tomatoes": "Use a balanced fertilizer with nitrogen, phosphorus, and potassium for tomatoes.",
//   "best fertilizer for rice": "Use urea, DAP, and potash in split doses during the growing stages.",
//   "organic fertilizer for vegetables": "Compost, cow dung, and vermicompost are excellent choices.",
//   "fertilizer for potatoes": "Use high-phosphorus fertilizers and add potassium at the tuber development stage.",
//   "how often to fertilize wheat": "Apply fertilizer during sowing and again during tillering and booting stages.",

//   // Pest and Disease Control
//   "pest control in wheat": "Use neem oil or approved pesticides to control pests in wheat crops.",
//   "how to control aphids": "Spray neem oil or insecticidal soap on the underside of leaves.",
//   "fungus in rice field": "Use fungicide like Tricyclazole and improve drainage to reduce moisture.",
//   "how to prevent leaf blight": "Apply copper-based fungicides and remove infected leaves.",
//   "pest control in sugarcane": "Use biological control like Trichogramma or neem-based sprays.",
//   "how to prevent fruit flies": "Use traps and remove rotting fruits regularly.",
//   "treatment for powdery mildew": "Apply sulfur fungicide and increase air circulation around plants.",
//   "how to treat root rot": "Avoid overwatering and use fungicide containing metalaxyl.",

//   // Soil & Irrigation
//   "best soil for rice": "Clayey or loamy soil with good water retention is ideal for rice.",
//   "soil type for wheat": "Loamy and well-drained soil with a neutral pH is best.",
//   "how to improve soil fertility": "Add compost, practice crop rotation, and use cover crops.",
//   "importance of irrigation": "Irrigation helps maintain soil moisture, especially in dry seasons.",
//   "drip irrigation benefits": "Saves water, reduces weed growth, and improves plant health.",
//   "sprinkler vs drip irrigation": "Drip is more efficient and localized, while sprinkler covers a wider area.",
//   "how to test soil pH": "Use a soil test kit or send a sample to a local agri lab.",

//   // Weather & Climate
//   "best season to plant rice": "Kharif season (June to November) is ideal for rice in South Asia.",
//   "when to sow wheat": "Rabi season (October to December) is best for wheat.",
//   "ideal temperature for tomatoes": "Between 20°C to 25°C is ideal for tomato growth.",
//   "climate required for maize": "Warm and sunny climate with well-distributed rainfall.",
//   "how does rain affect crops": "Too much rain can cause waterlogging; too little affects growth and yield.",

//   // Equipment & Techniques
//   "how to use a seed drill": "Load seeds in the hopper, adjust spacing, and move the drill through the field.",
//   "what is no-till farming": "It is a method where the soil is not plowed, helping preserve moisture and soil structure.",
//   "use of tractor in farming": "Tractors are used for plowing, tilling, planting, and harvesting.",
//   "how to transplant seedlings": "Gently uproot seedlings, retain soil around roots, and replant with proper spacing.",
//   "importance of crop rotation": "It prevents soil depletion and controls pests and diseases.",
//   "what is mulching": "Covering the soil with straw or plastic to retain moisture and suppress weeds.",

//   // Livestock
//   "how to raise chickens": "Provide clean shelter, balanced feed, and regular vaccinations.",
//   "goat farming tips": "Goats need dry shelter, green fodder, and regular deworming.",
//   "cow feed for more milk": "Use green fodder, grains, and mineral supplements.",
//   "how to prevent mastitis in cows": "Maintain udder hygiene and milk cows properly.",
//   "best breed of dairy cow": "Holstein Friesian and Jersey are high milk-yielding breeds.",

//   // Organic & Sustainable
//   "what is organic farming": "Organic farming avoids synthetic fertilizers and pesticides and uses natural alternatives.",
//   "how to make compost": "Use kitchen waste, dry leaves, and cow dung in a compost pit and aerate regularly.",
//   "benefits of organic farming": "Improves soil health, is eco-friendly, and produces healthier food.",
//   "green manure benefits": "Improves soil fertility, adds nitrogen, and prevents erosion.",
//   "natural pest control methods": "Use neem oil, garlic spray, and insect-repelling plants like marigold.",

//   // Harvest & Post-Harvest
//   "when to harvest rice": "Harvest when grains are golden yellow and firm.",
//   "how to store grains": "Keep in airtight containers in a dry and cool place.",
//   "post-harvest losses": "Can be minimized using proper storage, handling, and drying methods.",
//   "how to dry crops after harvest": "Sun-dry crops on clean surfaces to avoid fungal growth.",
//   "how to increase crop yield": "Use quality seeds, proper spacing, timely irrigation, and nutrient management.",

//   // Agri Market & Business
//   "how to sell farm produce": "You can sell via local markets, cooperatives, or online platforms.",
//   "importance of farmers market": "It provides direct access to consumers and better profit margins.",
//   "how to become a smart farmer": "Adopt modern techniques, digital tools, and data-driven decision-making.",
//   "agriculture subsidies in india": "Subsidies include fertilizer, seed, irrigation, and crop insurance schemes.",
//   "loan for farmers": "Farmers can get loans from banks under schemes like KCC (Kisan Credit Card).",

//   // Miscellaneous
//   "what is hydroponics": "Hydroponics is growing plants in water with nutrients instead of soil.",
//   "what is vertical farming": "Vertical farming is growing crops in stacked layers, often indoors.",
//   "how to conserve water in farming": "Use drip irrigation, rainwater harvesting, and avoid water wastage.",
//   "importance of pollination": "Pollination helps in fruit and seed production, mostly done by bees.",
//   "what are gm crops": "Genetically modified crops are altered for better yield, resistance, or nutrition."



//  ,en: {
//     "how to grow rice": "To grow rice, prepare a wet paddy field, use quality seeds, and ensure proper irrigation.",
//     "how to grow wheat": "Use well-drained loamy soil, sow seeds in cooler months, and ensure regular weeding and watering.",
//     // ...continue with all other English keys and values
//   },
//   bn: {
//     "how to grow rice": "ধান চাষের জন্য জমি প্রস্তুত করে, চারা রোপণ করে এবং সঠিকভাবে পানি বজায় রাখতে হয়।",
//     "how to grow wheat": "", // You can add Bangla translations here
//     // ...leave other keys empty or translate progressively
//   }



// };

// export default chatbotKnowledge;
 




const chatbotKnowledge = {
  en: {
    // Crop Cultivation
    "how to grow rice": "To grow rice, prepare a wet paddy field, use quality seeds, and ensure proper irrigation.",
    "how to grow wheat": "Use well-drained loamy soil, sow seeds in cooler months, and ensure regular weeding and watering.",
    "how to grow corn": "Sow in warm soil, use fertilizer high in nitrogen, and ensure full sun exposure.",
    "how to grow potatoes": "Plant seed potatoes in cool weather, mound soil as they grow, and harvest after flowering.",
    "how to grow tomatoes": "Use fertile soil, provide ample sunlight, stake the plants, and water regularly.",
    "how to grow onions": "Plant in well-drained soil, keep weed-free, and harvest when tops yellow.",
    "how to grow sugarcane": "Use rich soil, plant cane stalks, and ensure irrigation every 7–10 days.",
    "how to grow carrots": "Loosen soil, sow seeds thinly, and keep soil moist.",
    "how to grow cabbage": "Sow seeds in cool weather, provide full sunlight, and space plants adequately.",
    "how to grow bananas": "Use well-drained soil, provide frequent watering, and apply potassium-rich fertilizer.",
    
    // Fertilizers & Nutrition
    "fertilizer for tomatoes": "Use a balanced fertilizer with nitrogen, phosphorus, and potassium for tomatoes.",
    "best fertilizer for rice": "Use urea, DAP, and potash in split doses during the growing stages.",
    "organic fertilizer for vegetables": "Compost, cow dung, and vermicompost are excellent choices.",
    "fertilizer for potatoes": "Use high-phosphorus fertilizers and add potassium at the tuber development stage.",
    "how often to fertilize wheat": "Apply fertilizer during sowing and again during tillering and booting stages.",

    // Pest and Disease Control
    "pest control in wheat": "Use neem oil or approved pesticides to control pests in wheat crops.",
    "how to control aphids": "Spray neem oil or insecticidal soap on the underside of leaves.",
    "fungus in rice field": "Use fungicide like Tricyclazole and improve drainage to reduce moisture.",
    "how to prevent leaf blight": "Apply copper-based fungicides and remove infected leaves.",
    "pest control in sugarcane": "Use biological control like Trichogramma or neem-based sprays.",
    "how to prevent fruit flies": "Use traps and remove rotting fruits regularly.",
    "treatment for powdery mildew": "Apply sulfur fungicide and increase air circulation around plants.",
    "how to treat root rot": "Avoid overwatering and use fungicide containing metalaxyl.",

    // Soil & Irrigation
    "best soil for rice": "Clayey or loamy soil with good water retention is ideal for rice.",
    "soil type for wheat": "Loamy and well-drained soil with a neutral pH is best.",
    "how to improve soil fertility": "Add compost, practice crop rotation, and use cover crops.",
    "importance of irrigation": "Irrigation helps maintain soil moisture, especially in dry seasons.",
    "drip irrigation benefits": "Saves water, reduces weed growth, and improves plant health.",
    "sprinkler vs drip irrigation": "Drip is more efficient and localized, while sprinkler covers a wider area.",
    "how to test soil pH": "Use a soil test kit or send a sample to a local agri lab.",

    // Weather & Climate
    "best season to plant rice": "Kharif season (June to November) is ideal for rice in South Asia.",
    "when to sow wheat": "Rabi season (October to December) is best for wheat.",
    "ideal temperature for tomatoes": "Between 20°C to 25°C is ideal for tomato growth.",
    "climate required for maize": "Warm and sunny climate with well-distributed rainfall.",
    "how does rain affect crops": "Too much rain can cause waterlogging; too little affects growth and yield.",

    // Equipment & Techniques
    "how to use a seed drill": "Load seeds in the hopper, adjust spacing, and move the drill through the field.",
    "what is no-till farming": "It is a method where the soil is not plowed, helping preserve moisture and soil structure.",
    "use of tractor in farming": "Tractors are used for plowing, tilling, planting, and harvesting.",
    "how to transplant seedlings": "Gently uproot seedlings, retain soil around roots, and replant with proper spacing.",
    "importance of crop rotation": "It prevents soil depletion and controls pests and diseases.",
    "what is mulching": "Covering the soil with straw or plastic to retain moisture and suppress weeds.",

    // Livestock
    "how to raise chickens": "Provide clean shelter, balanced feed, and regular vaccinations.",
    "goat farming tips": "Goats need dry shelter, green fodder, and regular deworming.",
    "cow feed for more milk": "Use green fodder, grains, and mineral supplements.",
    "how to prevent mastitis in cows": "Maintain udder hygiene and milk cows properly.",
    "best breed of dairy cow": "Holstein Friesian and Jersey are high milk-yielding breeds.",

    // Organic & Sustainable
    "what is organic farming": "Organic farming avoids synthetic fertilizers and pesticides and uses natural alternatives.",
    "how to make compost": "Use kitchen waste, dry leaves, and cow dung in a compost pit and aerate regularly.",
    "benefits of organic farming": "Improves soil health, is eco-friendly, and produces healthier food.",
    "green manure benefits": "Improves soil fertility, adds nitrogen, and prevents erosion.",
    "natural pest control methods": "Use neem oil, garlic spray, and insect-repelling plants like marigold.",

    // Harvest & Post-Harvest
    "when to harvest rice": "Harvest when grains are golden yellow and firm.",
    "how to store grains": "Keep in airtight containers in a dry and cool place.",
    "post-harvest losses": "Can be minimized using proper storage, handling, and drying methods.",
    "how to dry crops after harvest": "Sun-dry crops on clean surfaces to avoid fungal growth.",
    "how to increase crop yield": "Use quality seeds, proper spacing, timely irrigation, and nutrient management.",

    // Agri Market & Business
    "how to sell farm produce": "You can sell via local markets, cooperatives, or online platforms.",
    "importance of farmers market": "It provides direct access to consumers and better profit margins.",
    "how to become a smart farmer": "Adopt modern techniques, digital tools, and data-driven decision-making.",
    "agriculture subsidies in india": "Subsidies include fertilizer, seed, irrigation, and crop insurance schemes.",
    "loan for farmers": "Farmers can get loans from banks under schemes like KCC (Kisan Credit Card).",

    // Miscellaneous
    "what is hydroponics": "Hydroponics is growing plants in water with nutrients instead of soil.",
    "what is vertical farming": "Vertical farming is growing crops in stacked layers, often indoors.",
    "how to conserve water in farming": "Use drip irrigation, rainwater harvesting, and avoid water wastage.",
    "importance of pollination": "Pollination helps in fruit and seed production, mostly done by bees.",
    "what are gm crops": "Genetically modified crops are altered for better yield, resistance, or nutrition."
  },

  bn: {
    "how to grow rice": "ধান চাষের জন্য স্যাঁতসেঁতে জমি প্রস্তুত করতে হয়, ভালো মানের বীজ ব্যবহার করতে হয় এবং সঠিকভাবে সেচ দিতে হয়।",
    "how to grow wheat": "",
    "how to grow corn": "",
    "how to grow potatoes": "",
    "how to grow tomatoes": "",
    "how to grow onions": "",
    "how to grow sugarcane": "",
    "how to grow carrots": "",
    "how to grow cabbage": "",
    "how to grow bananas": "",
    // ... continue translating progressively
  }
};

export default chatbotKnowledge;
