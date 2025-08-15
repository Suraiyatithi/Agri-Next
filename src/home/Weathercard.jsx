


import { useTranslation } from "react-i18next";

const WeatherCard = () => {
  const { t } = useTranslation();

  // Dummy data – replace with API later
  const weather = {
    location: "Rajshahi, BD",
    temperature: 32,
    humidity: 75,
    condition: "Sunny",
    cropSuggestion: t("weather.suggestion")
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-2xl shadow-md w-full max-w-sm">
      <h2 className="text-xl font-bold text-green-700 mb-2">🌦️ {t("weather.title")}</h2>
      <p className="text-gray-700 mb-1">📍 <strong>{weather.location}</strong></p>
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-lg font-semibold text-gray-800">{weather.temperature}°C</p>
          <p className="text-sm text-gray-600">{t("weather.humidity")}: {weather.humidity}%</p>
        </div>
        <div className="text-right">
          <p className="text-sm bg-yellow-300 px-2 py-1 rounded-full text-gray-800 font-medium">{t("weather.condition")}: {weather.condition}</p>
        </div>
      </div>
      <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-3 rounded">
        🌱 <span className="font-medium">{t("weather.cropTip")}:</span> {weather.cropSuggestion}
      </div>
    </div>
  );
};

export default WeatherCard;
 // "weather": {
  //   "title": "Weather Today",
  //   "location": "Location",
  //   "humidity": "Humidity",
  //   "condition": "Condition",
  //   "cropTip": "Crop Tip",
  //   "suggestion": "Ideal for paddy transplantation today."
  // },
  //   "weather": {
  //   "title": "আজকের আবহাওয়া",
  //   "location": "অবস্থান",
  //   "humidity": "আর্দ্রতা",
  //   "condition": "আবহাওয়া",
  //   "cropTip": "ফসল পরামর্শ",
  //   "suggestion": "আজ ধানের রোপণের জন্য আদর্শ দিন।"
  // },
