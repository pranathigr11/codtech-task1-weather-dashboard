import React from "react";
import { BiDroplet, BiWind } from "react-icons/bi";
import { MdOutlineWbSunny, MdCompress, MdAir } from "react-icons/md";
import { WiSunrise, WiSunset } from "react-icons/wi";

function Highlights({ weather: { speed, humidity, feels_like, sunrise, sunset, timezone, aqi } }) {
  
  // Helper to determine AQI label
  const getAqiLabel = (aqi) => {
    if(aqi === 1) return { text: "Good", color: "text-green-400" };
    if(aqi === 2) return { text: "Fair", color: "text-yellow-400" };
    if(aqi === 3) return { text: "Moderate", color: "text-orange-400" };
    if(aqi === 4) return { text: "Poor", color: "text-red-400" };
    return { text: "Very Poor", color: "text-red-600" };
  };

  const aqiInfo = getAqiLabel(aqi);

  const cards = [
    {
        id: 1,
        title: "Real Feel",
        value: `${Math.round(feels_like)}°`,
        Icon: MdOutlineWbSunny,
    },
    {
        id: 2,
        title: "Humidity",
        value: `${humidity}%`,
        Icon: BiDroplet,
    },
    {
        id: 3,
        title: "Wind",
        value: `${speed} km/h`,
        Icon: BiWind,
    },
    {
        id: 4,
        title: "Air Quality",
        value: aqiInfo.text,
        colorClass: aqiInfo.color,
        Icon: MdAir,
    }
  ];

  return (
    <div className="mt-6">
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">Today's Highlights</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {cards.map((card) => (
          <div key={card.id} className="glass-card p-4 flex flex-col items-center justify-center space-y-2">
             <div className="flex flex-row items-center justify-center space-x-2 text-gray-200 text-sm">
                <card.Icon size={18} />
                <p>{card.title}</p>
             </div>
             <p className={`text-xl font-bold ${card.colorClass || 'text-white'}`}>{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;