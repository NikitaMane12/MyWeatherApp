import React, { useState, useEffect } from "react";
import CityDropdown from "./componets/CityDropdown";
import Weather from "./componets/Weather";
import "./componets/style.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("selectedCity") || "Ho Chi Minh"
  );

  useEffect(() => {
    localStorage.setItem("selectedCity", selectedCity);
  }, [selectedCity]);

  const handleCityChange = (e) => setSelectedCity(e.target.value);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather Application</h1>
      <CityDropdown
        selectedCity={selectedCity}
        onCityChange={handleCityChange}
      />
      <Weather city={selectedCity} />
    </div>
  );
};

export default App;
