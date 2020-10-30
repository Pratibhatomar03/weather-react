import React from "react";
import "./CurrentTemperature.css";
export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature">
      <h2>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/13/13/18/weather-160759__480.png"
          alt="emoji"
          width="200px"
        />
        <br />
        <span> 🌨 9 </span>
        <span className="units">
          <a href="#"> °C </a>|<a href="#"> °F </a>
          <br />
        </span>
        <span id="description"> Cloudy </span>
      </h2>
    </div>
  );
}
