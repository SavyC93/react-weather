import React, { useState } from "react";
import "./Temperature.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "3ed82e3bd8722b160448f1693f7570dd";
    let city = "Denver";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherLayout">
        <div>
          <form onSubmit={handleSubmit} className="Search">
            <input
              type="search"
              placeholder="Type in your city..."
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <h2>Hey Beautiful! How is it in...</h2>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
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
