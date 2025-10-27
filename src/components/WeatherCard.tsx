import React from "react";
interface WeatherCardProps {
  weather: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="mt-6 ">
      <h2 className="text-2xl font-semibold text-center ">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex justify-center items-center mt-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <p className="text-4xl font-bold ml-4">
          {Math.round(weather.main.temp)}°C
        </p>
      </div>
      <p className="text-center mt-2 capitalize">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6 text-center">
        <div className= "text-center">
          <p className = "text-blue-300">Độ ẩm</p>
          <p className ="font-bold">{weather.main.humidity}%</p>
        </div>
        <div className= "text-center">
          <p className = "text-blue-300">Tốc độ gió</p>
          <p className ="font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className= "text-center">
          <p className = "text-blue-300">Áp suất</p>
          <p className ="font-bold">{weather.main.pressure} hPa</p>
        </div>
        <div className= "text-center">
          <p className = "text-blue-300">Cảm giác như</p>
          <p className ="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
