import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const Weather = ({ city, days = 3 }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const API_KEY = "349db4a4d70726f5b27e0e75f112654c";
      const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${days}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(weatherUrl);
      setWeather(response.data);
    };

    if (city) {
      fetchWeather();
    }
  }, [city, days]);

  return (
    <div>
      {weather ? (
        <div className="Container">
          <div className="current-weather">
            <h2 style={{ textAlign: "center" }}> City: {weather.city.name}</h2>
            <p>Temperature: {weather.list[0].main.temp}°C</p>
            <p>Weather: {weather.list[0].weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
              alt={weather.list[0].weather[0].description}
            />
          </div>
          <h3 style={{ textAlign: "center", fontSize: "40px" }}>Forecast</h3>
          <ul className="forecast-list">
            {weather.list.map((forecast, index) => (
              <div key={index} className="forecast-item">
                <p>
                  {" "}
                  <strong>Date:</strong>
                  {forecast.dt_txt}
                </p>

                <p>
                  <strong>Temperature:</strong>
                  {forecast.main.temp}°C
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                />
                <p>{forecast.weather[0].description}</p>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>Select a city to view weather</p>
      )}
    </div>
  );
};

export default Weather;
