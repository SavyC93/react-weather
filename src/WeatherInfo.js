import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <h1>
          <strong>{props.data.city}</strong>
        </h1>
        <p>
          <FormattedDate date={props.data.date} />
          <span className="description text-capitalize">
            {props.data.description}
          </span>
        </p>
        <div className="row">
          <div className="col-6">
            <div className="d-flex">
              <div className="d-center">
                <WeatherIcon
                  code={props.data.icon}
                  alt={props.data.description}
                  size={52}
                />
              </div>

              <div>
                <TempConversion celsius={props.data.temp} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>Humidity: {props.data.humidity}%</p>
            <p>Wind: {props.data.wind} km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
