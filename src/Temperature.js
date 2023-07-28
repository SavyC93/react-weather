import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="temperature">
          <strong>30</strong>
          <span className="unit">°C</span>
        </div>
        <p>Clear Sky</p>
      </div>
      <div className="col-6">
        <Humidity />
        <Wind />
      </div>
    </div>
  );
}
