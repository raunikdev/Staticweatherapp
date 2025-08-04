import { useState } from "react";
import './weatherApp.css';
import { weatherData } from "./weatherData";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [info, setInfo] = useState(null);
  const [isNightMode, setIsNightMode] = useState(false);

  const cityHandler = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    const normalized = city.trim().toLowerCase();
    // case-insensitive lookup
    const matched = Object.entries(weatherData).find(
      ([name]) => name.toLowerCase() === normalized
    );
    if (matched) {
      setInfo(matched[1]);
    } else {
      alert("Not available. Try Delhi, Mumbai, London");
      setInfo(null);
    }
  };

  const toggleHandler = () => {
    setIsNightMode((prev) => !prev);
  };

  return (
    <div className={isNightMode ? "night" : "day"}>
      <div className="input-button">
        <input
          type="text"
          placeholder="City..."
          value={city}
          onChange={cityHandler}
          className="input-city"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <div className="info-weather">
        {info ? (
          <>
            <p className="temp">Temperature : {info.temp} Celcius</p>
            <p className="condition">Condition : {info.condition}</p>
            <p className="isDay">Time : {info.isDay ? "Day" : "Night"}</p>
          </>
        ) : (
          <p>No data buddy</p>
        )}
      </div>

      <button className="toggle-dark-light" onClick={toggleHandler}>
        {isNightMode ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default WeatherApp;

