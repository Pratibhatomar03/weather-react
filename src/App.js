import React from "react";

import "./App.css";
import GeneralInformation from "./GeneralInformation.js";
import Form from "./Form.js";
import CurrentTemperature from "./CurrentTemperature.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <h1>Weather forecast</h1>
            <hr />
            <Form />
            <br />
            <GeneralInformation />
            <CurrentTemperature />
          </div>

          <p>
            Open-source on{" "}
            <a
              href="https://github.com/Pratibhatomar03/weather-react"
              target="_blank"
            >
              GitHub{" "}
            </a>
            and hosted on{" "}
            <a href="https://sad-babbage-b8d06f.netlify.app" target="_blank">
              Netlify{" "}
            </a>
            by{" "}
            <a
              href="https://ecstatic-bassi-280461.netlify.app/"
              target="_blank"
            >
              Pratibha Tomar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
