import React from "react";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function MainWeather({ weather: { dt, timezone, name, country, details, icon, temp, temp_min, temp_max } }) {
  return (
    <div>
      {/* Date & Time */}
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      {/* City Name */}
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {name}, {country}
        </p>
      </div>

      {/* Main Temperature Card */}
      <div className="glass-card flex flex-row items-center justify-between text-white py-8 px-10 rounded-xl">
        <div className="flex flex-col items-center justify-center">
            <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
            <p className="text-sm font-light">{details}</p>
        </div>
        
        <p className="text-6xl">{Math.round(temp)}°</p>

        <div className="flex flex-col items-center justify-center text-sm font-light space-y-2">
           <div className="flex flex-col items-center">
                <span className="text-lg">High</span>
                <span>{Math.round(temp_max)}°</span>
           </div>
           <div className="flex flex-col items-center">
                <span className="text-lg">Low</span>
                <span>{Math.round(temp_min)}°</span>
           </div>
        </div>
      </div>
    </div>
  );
}

export default MainWeather;