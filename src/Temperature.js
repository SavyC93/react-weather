import React, { useState } from "react";
import "./Temperature.css";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "3ed82e3bd8722b160448f1693f7570dd";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
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
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
