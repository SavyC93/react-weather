import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1>
          <strong>{props.data.city}</strong>
        </h1>
        <p>
          <FormattedDate date={props.data.date} />
        </p>
        <div className="col-6">
          <div className="temperature">
            <strong>{props.data.temp}</strong>
            <span className="unit">°C</span>
          </div>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
        <div className="col-6">
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
