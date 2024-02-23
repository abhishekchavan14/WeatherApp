import React, { useState } from "react";
import Additional from "./Additional";

export default function DisplayField({ weatherData }) {

  return (
    <div className="">
  {weatherData && (
    <div className="flex flex-wrap flex-row justify-center items-center h-full bg-white rounded-xl p-5">
      <div className={`p-2 shadow-md shadow-black rounded-lg bg-green-400 m-5`}>
        <h2 className="font-bold text-xl">{weatherData.location.name}</h2>
        <h3>{weatherData.location.region}</h3>
        <div className="w-full flex flex-row items-center justify-evenly mt-6 mb-6">
          <img src={weatherData.current.condition.icon} alt="icon" />
          <h1 className="bold text-5xl">{weatherData.current.temp_c}°C</h1>
        </div>
        <div className="flex justify-center">
          <div>"{weatherData.current.condition.text}"</div><span className="ml-4 font-bold">{weatherData.current.temp_f}°F</span>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-4 text-center md:grid-rows-2 gap-10 m-5">
        <Additional weatherData = {weatherData} text="Feels Like(°C)" field="feelslike_c"/>
        <Additional weatherData = {weatherData} text="Humidity" field="humidity"/>
        <Additional weatherData = {weatherData} text="Wind(kph)" field="wind_kph"/>
        <Additional weatherData = {weatherData} text="Wind Gusts(kph)" field="gust_kph"/>
      </div>
    </div>
  )}
</div>
  );
}

