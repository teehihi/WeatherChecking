import SearchBar from "./components/SearchBar";
import { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import video from "./assets/bg.mp4";

function App() {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const respond = await axios.get(url);
      console.log(respond.data);
      setWeather(respond.data);
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        setError("Thành phố không tồn tại. Vui lòng thử lại.");
      } else {
        setError("Đã xảy ra lỗi. Vui lòng thử lại.");
      }
      setWeather("");
    } finally{
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-teal-300 to-cyan-200 relative overflow-hidden">
      <video className ="absolute w-full h-full object-cover"
       autoPlay loop muted>
        <source src={video} type="video/mp4" className="fixed w-full h-full object-cover z-0"/>
      </video>
      <div className="p-8 bg-black/70 text-white bg-opacity-70 rounded-lg shadow-lg z-99">
        <h1 className="text-3xl font-bold text-center mb-6">
          Weather App By Tee
        </h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="mt-4 text-center">Đang tải...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
