
import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const WeatherSuggestion = () => {
  const [temperature, setTemperature] = useState(null);
  const [suggestionKey, setSuggestionKey] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=184b5af00c5aeef71a50b3193d9fa2a2&units=metric"
        );
        const temp = res.data.main.temp;
        setTemperature(temp);

        // Use translation keys
        if (temp < 20) {
          setSuggestionKey("weather.suggestion.cold");
        } else if (temp < 30) {
          setSuggestionKey("weather.suggestion.warm");
        } else {
          setSuggestionKey("weather.suggestion.hot");
        }
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div
      className="w-full text-white text-center py-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/rRncvRfs/download.jpg')", 
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <h2 className="text-2xl font-bold mb-2">{t("weather.heading")}</h2>
      <p className="text-4xl font-semibold">
        {temperature !== null ? `${temperature}°C` : t("weather.loading")}
      </p>
      <p className="mt-4 text-lg italic">{t(suggestionKey)}</p>
    </div>
  );
};

export default WeatherSuggestion;
