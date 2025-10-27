import React, { type FormEvent } from "react";
import { useState } from "react";

interface SearchBarProps {
  fetchWeather: (city: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ fetchWeather }) => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    }
  };
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border border-green-300 rounded-l-lg w-64 
        focus:outline-none focus:ring-none focus:border-teal-400"
      ></input>
      <button
        type="submit"
        className="p-2 border bg-green-300 text-black font-bold
         border-green-300 rounded-r-lg hover:outline-none hover:bg-teal-400 hover:border-teal-400 cursor-pointer"
      >
        Tìm kiếm
      </button>
    </form>
  );
};

export default SearchBar;
