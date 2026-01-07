import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, data }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2 opacity-30" />

      <div className="flex flex-row items-center justify-between overflow-x-auto gap-4 pb-2">
        {data.map((d, index) => (
          <div
            key={index}
            className="glass-card min-w-[100px] flex flex-col items-center justify-center py-4"
          >
            <p className="font-light text-sm">{d.title}</p>
            <img src={iconUrlFromCode(d.icon)} className="w-12 my-1" alt="" />
            <p className="font-medium">{Math.round(d.temp)}°</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;