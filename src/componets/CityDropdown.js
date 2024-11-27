import React from "react";
import "./style.css";

const CityDropdown = ({ selectedCity, onCityChange }) => {
  const cities = [
    "Ho Chi Minh",
    "Singapore",
    "Kuala Lumpur",
    "Tokyo",
    "Athens",
  ];

  return (
    <select value={selectedCity} onChange={onCityChange}>
      <option value="">Select city</option>
      {cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default CityDropdown;
