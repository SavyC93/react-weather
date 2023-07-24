import React from "react";
import Humidity from "./Humidity";
import Wind from "./Wind";

export default function Temperature() {
  return (
    <div>
      <h1> 30°C </h1>
      <Humidity />
      <Wind />
    </div>
  );
}
