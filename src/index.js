import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./App.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <Search />
      <h1>Hey Beautiful! Let's see what it's like in...</h1>
      <h2>Denver</h2>
      <p>Last updated on Monday at 12:10pm</p>
      <p>Clear Sky</p>
      <Temperature />
      <Forecast />
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
