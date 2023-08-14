import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temps-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temps-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
