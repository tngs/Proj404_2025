import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./styles.css";

console.log("%c Welcome to the Matrix", "color: #0f0; font-size: 20px; background: black; padding: 5px;");
console.log("%c Logging in...", "color: #0f0; font-family: monospace;");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);