import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

ReactDOM.render(
  <BrowserRouter>
    <App id="page" />
  </BrowserRouter>,
  document.getElementById("root")
);
