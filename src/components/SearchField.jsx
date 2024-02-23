import React, { useEffect, useState } from "react";
import location from "../assets/location.png";

export default function SearchField({ setData }) {
  const [searchCity, setSearchCity] = useState("Nanded");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/current.json?key=57b917270de749448e461319241602&q=${searchCity}&aqi=no`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=57b917270de749448e461319241602&q=${searchCity}&aqi=no`
      );
      if(!response.ok){
        return
      }
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="flex items-center border mt-20 mb-5 border-none">
      <div className="flex items-center bg-white">
        <img src={location} alt="icon" className="h-5" />
        <input
          type="text"
          placeholder="Location"
          onChange={handleChange}
          className="outline-none indent-2 py-2"
        />
      </div>
      <button
        onClick={handleSearch}
        className="px-3 py-2 ml-1 text-white font-semibold rounded border border-green-600 hover:bg-green-600 duration-300"
      >
        Search
      </button>
    </div>
  );
}
