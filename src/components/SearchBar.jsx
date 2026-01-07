import React, { useState } from "react";
import { BiSearch, BiCurrentLocation } from "react-icons/bi";
import { toast } from "react-toastify";

function SearchBar({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-col items-center justify-center my-6 space-y-4">
      {/* Search Input Section */}
      <div className="flex flex-row items-center justify-center w-full space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchClick()}
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase bg-white/20 backdrop-blur-md rounded-lg text-white placeholder-gray-200"
        />
        <BiSearch
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <BiCurrentLocation
          size={30}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      {/* Unit Toggle (C vs F) */}
      <div className="flex flex-row items-center justify-center space-x-2">
        <button
          name="metric"
          className={`text-xl text-white font-light transition ease-out hover:scale-125 ${
            units === "metric" ? "font-bold" : ""
          }`}
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className={`text-xl text-white font-light transition ease-out hover:scale-125 ${
            units === "imperial" ? "font-bold" : ""
          }`}
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default SearchBar;