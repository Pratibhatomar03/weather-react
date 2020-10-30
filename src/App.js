import "./App.css";

import GeneralInformation from "./GeneralInformation";
import Form from "./Form.js";
import CurrentTemperature from "./CurrentTemperature";

function App() {
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
            Open-source on
            <a
              href="https://github.com/Pratibhatomar03/vanilla-weather-application"
              target="_blank"
            >
              GitHub
            </a>
            and hosted on
            <a href="https://sad-babbage-b8d06f.netlify.app" target="_blank">
              Netlify
            </a>
            by Pratibha Tomar
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
