import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="row">
        <div className="col-6">
          <div className="temperature">
            <strong>{weatherData.temp}</strong>
            <span className="unit">°C</span>
          </div>
          <p className="text-capitalize">{weatherData.description}</p>
        </div>
        <div className="col-6">
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind: {weatherData.wind} km/h</p>
        </div>
      </div>
    );
  } else {
    const apiKey = "3ed82e3bd8722b160448f1693f7570dd";
    let city = "Denver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return;
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />;
  }
}
