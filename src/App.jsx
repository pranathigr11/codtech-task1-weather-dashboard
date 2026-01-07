// import React, { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar";
// import MainWeather from "./components/MainWeather";
// import Highlights from "./components/Highlights";
// import Forecast from "./components/Forecast";
// import getFormattedWeatherData from "./services/weatherService";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [query, setQuery] = useState({ q: "Mumbai" });
//   const [units, setUnits] = useState("metric");
//   const [weather, setWeather] = useState(null);

//   // --- 1. DEFINE DUMMY DATA ---
//   const dummyData = {
//     name: "Mumbai",
//     country: "IN",
//     dt: 1704528000,
//     timezone: 19800,
//     lat: 19.07,
//     lon: 72.87,
//     temp: 28.5,
//     feels_like: 30.2,
//     temp_min: 28.0,
//     temp_max: 29.0,
//     humidity: 65,
//     pressure: 1012,
//     sunrise: 1704504000,
//     sunset: 1704544000,
//     speed: 5.2,
//     details: "Haze",
//     icon: "04d", 
//     aqi: 3, 
//     daily: [
//       { title: "Tue", temp: 29, icon: "01d" },
//       { title: "Wed", temp: 28, icon: "02d" },
//       { title: "Thu", temp: 27, icon: "03d" },
//       { title: "Fri", temp: 30, icon: "04d" },
//       { title: "Sat", temp: 31, icon: "01d" },
//     ]
//   };

//   useEffect(() => {
//     // --- 2. FORCE DUMMY DATA (Bypass API for now) ---
//     setWeather(dummyData);
//     toast.info("Using Dummy Data (Waiting for API Key activation)");

//     /* 
//     // --- REAL API CALL (Keep this commented out until tomorrow) ---
//     const fetchWeather = async () => {
//       const message = query.q ? query.q : "current location.";
//       try {
//         const data = await getFormattedWeatherData({ ...query, units });
//         setWeather(data);
//       } catch (error) {
//         toast.error("City not found or API error.");
//       }
//     };
//     fetchWeather();
//     */
    
//   }, [query, units]);

//   const formatBackground = () => {
//     if (!weather) return "from-cyan-700 to-blue-700";
//     const isNight = weather.icon?.includes("n");
//     if(isNight) return "from-gray-900 to-blue-900";

//     const threshold = weather.details;
//     if (threshold === "Clear") return "from-yellow-400 to-orange-500";
//     if (threshold === "Clouds") return "from-blue-400 to-gray-400";
//     if (threshold === "Rain" || threshold === "Drizzle") return "from-cyan-700 to-blue-900";
//     if (threshold === "Snow") return "from-blue-200 to-gray-200 text-gray-800";
//     if (threshold === "Thunderstorm") return "from-purple-900 to-gray-900";
//     return "from-cyan-700 to-blue-700"; 
//   };

//   return (
//     <div
//       className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()} transition-all duration-1000 ease-in-out md:px-10 lg:px-20 rounded-lg`}
//     >
//       <div className="flex flex-col w-full h-full max-w-4xl mx-auto px-4 py-6 z-10 relative">
//         <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

//         {weather && (
//           <>
//             <MainWeather weather={weather} />
//             <Highlights weather={weather} />
//             <Forecast title="5-Day Forecast" data={weather.daily} />
//           </>
//         )}
//       </div>
//       <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import SearchBar from "./components/SearchBar";
// import MainWeather from "./components/MainWeather";
// import Highlights from "./components/Highlights";
// import Forecast from "./components/Forecast";
// import getFormattedWeatherData from "./services/weatherService";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   const [query, setQuery] = useState({ q: "Mumbai" });
//   const [units, setUnits] = useState("metric");
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       const message = query.q ? query.q : "current location.";

//       try {
//         const data = await getFormattedWeatherData({ ...query, units });
//         setWeather(data);
//       } catch (error) {
//         // If the API Key is invalid, this might crash or show an error
//         console.error(error);
//         toast.error("Error: Key not active or City not found.");
//       }
//     };

//     fetchWeather();
//   }, [query, units]);

//   const formatBackground = () => {
//     if (!weather) return "from-cyan-700 to-blue-700";
//     const isNight = weather.icon?.includes("n");
//     if(isNight) return "from-gray-900 to-blue-900";

//     const threshold = weather.details;
//     if (threshold === "Clear") return "from-yellow-400 to-orange-500";
//     if (threshold === "Clouds") return "from-blue-400 to-gray-400";
//     if (threshold === "Rain" || threshold === "Drizzle") return "from-cyan-700 to-blue-900";
//     if (threshold === "Snow") return "from-blue-200 to-gray-200 text-gray-800";
//     if (threshold === "Thunderstorm") return "from-purple-900 to-gray-900";
//     return "from-cyan-700 to-blue-700"; 
//   };

//   return (
//     <div
//       className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()} transition-all duration-1000 ease-in-out md:px-10 lg:px-20 rounded-lg`}
//     >
//       <div className="flex flex-col w-full h-full max-w-4xl mx-auto px-4 py-6 z-10 relative">
//         <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

//         {weather && (
//           <>
//             <MainWeather weather={weather} />
//             <Highlights weather={weather} />
//             <Forecast title="5-Day Forecast" data={weather.daily} />
//           </>
//         )}
//       </div>
//       <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MainWeather from "./components/MainWeather";
import Highlights from "./components/Highlights";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Switzerland" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData({ ...query, units });
        setWeather(data);
      } catch (error) {
        console.error(error);
        toast.error("Error: Key not active or City not found.");
      }
    };

    fetchWeather();
  }, [query, units]);

  // --- LOGIC TO CHOOSE BACKGROUND IMAGE ---
  const getBackgroundImage = () => {
    if (!weather) return "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"; // Default

    const icon = weather.icon; // e.g., '01d', '04n'
    const isNight = icon?.includes("n");
    const condition = weather.details; // Clear, Clouds, Rain, etc.

    // Night Scenarios
    if (isNight) {
      if (condition === "Rain" || condition === "Drizzle" || condition === "Thunderstorm") 
        return "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?q=80&w=2074&auto=format&fit=crop"; // Night Rain
      return "https://images.unsplash.com/photo-1507400492013-162706c8c05e?q=80&w=2059&auto=format&fit=crop"; // Clear Night
    }

    // Day Scenarios
    if (condition === "Clear") return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop"; // Sunny
    if (condition === "Clouds") return "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop"; // Cloudy
    if (condition === "Rain" || condition === "Drizzle") return "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1974&auto=format&fit=crop"; // Rainy
    if (condition === "Thunderstorm") return "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=2071&auto=format&fit=crop"; // Storm
    if (condition === "Snow") return "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=2070&auto=format&fit=crop"; // Snow
    if (condition === "Haze" || condition === "Mist" || condition === "Fog") return "https://images.unsplash.com/photo-1487621167305-5d248087c724?q=80&w=1932&auto=format&fit=crop"; // Fog

    return "https://images.unsplash.com/photo-1601297183305-6df142704ea2?q=80&w=1974&auto=format&fit=crop"; // Default Sunny
  };

  return (
    // 1. FULL SCREEN WRAPPER WITH DYNAMIC IMAGE
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out flex justify-center items-center"
      style={{ backgroundImage: `url(${getBackgroundImage()})` }}
    >
      {/* 2. BLACK OVERLAY (Makes text readable) */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-0"></div>

      {/* 3. YOUR DASHBOARD (Centered & Floating) */}
      <div className="relative z-10 w-full max-w-screen-md mx-4 md:mx-auto">
        
        {/* We keep the gradient on the card for the 'Glass' effect, but simpler */}
        <div className="glass-card shadow-2xl p-5 md:px-10 lg:px-12 py-6 bg-gradient-to-br from-gray-900/60 to-blue-900/60 rounded-xl border border-white/20">
          <SearchBar setQuery={setQuery} units={units} setUnits={setUnits} />

          {weather && (
            <>
              <MainWeather weather={weather} />
              <Highlights weather={weather} />
              <Forecast title="5-Day Forecast" data={weather.daily} />
            </>
          )}
        </div>
      </div>

      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;