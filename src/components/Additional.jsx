import React from "react";

export default function Additional({text, field,weatherData}) {
  return (
    <div>
      <p className="font-semibold">{text}</p>
      <p className="opacity-70">{weatherData.current[field]}</p>
    </div>
  );
}
