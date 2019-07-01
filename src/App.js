import React, { Fragment } from "react";
import Landing from "./components/Landing";
import { Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <Fragment>
    <Route path="/" component={Landing} />
  </Fragment>
);

export default App;
