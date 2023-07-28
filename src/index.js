import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import Search from "./Search";
import axios from "axios";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Search />
          <h1>Hey Beautiful! How is it in...</h1>
          <h1>
            <strong>Denver</strong>
          </h1>
          <p>Last updated on Monday at 12:10pm</p>
          <Temperature defaultCity="Denver" />
          <Forecast />
        </div>
        <p>
          <a
            href="https://github.com/SavyC93/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced
          </a>{" "}
          by Savannah Chin
        </p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
