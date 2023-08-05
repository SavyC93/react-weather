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
        </p>
        <div className="col-6">
          <div className="temperature">
            <div className="clearfix">
              <div className="mb-3 ">
                <WeatherIcon className="float-left" code={props.data.icon} />
                <span className="description text-capitalize">
                  {props.data.description}
                </span>
                <div className="float-left">
                  <TempConversion celsius={props.data.temp} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind: {props.data.wind} km/h</p>
        </div>
      </div>
    </div>
  );
}
