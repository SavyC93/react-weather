import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  if (loaded) {
    const apiKey = "3ed82e3bd8722b160448f1693f7570dd";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  } else {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day">Mon</div>
            <WeatherIcon code="09d" size={32} />
            <div className="WeatherForecast-temps">
              <span className="WeatherForecast-temps-max">19°</span>
              <span className="WeatherForecast-temps-min">10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
