import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function LiveWeatherChart() {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
  const fetchWeather = async () => {
    try {
      const apiKey = 'YOUR_REAL_API_KEY_HERE';
      const city = 'Dhaka';
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
      const data = await res.json();
      console.log('Weather data:', data); // <--- Check if data is valid

      const chartData = data.list.slice(0, 8).map(item => ({
        time: item.dt_txt.split(' ')[1].slice(0, 5),
        temp: item.main.temp
      }));

      setForecast(chartData);
    } catch (error) {
      console.error('Weather fetch error:', error);
    }
  };

  fetchWeather();
}, []);


  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Live Temperature Forecast</h3>
    {forecast.length > 0 ? (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={forecast}>
      <XAxis dataKey="time" />
      <YAxis unit="°C" />
      <Tooltip />
      <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} />
    </LineChart>
  </ResponsiveContainer>
) : (
  <p className="text-gray-500">Loading forecast...</p>
)}

    </div>
  );
}
