import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <WeatherIcon code={forecast[0].weather[0].icon} size={32} />
            <div className="WeatherForecast-temps">
              <span className="WeatherForecast-temps-max">
                {Math.round(forecast[0].temp.max)}°
              </span>
              <span className="WeatherForecast-temps-min">
                {Math.round(forecast[0].temp.min)}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9b77eeb61e3b275b0be225f1885f3d86";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?
  lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
