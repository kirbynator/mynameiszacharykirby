import React, { Fragment } from "react";
import Landing from "./components/Landing";
import SWAPI from "./components/stawi/Home";
// import NoMatch from "./components/NoMatch";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/StarWarsApi" component={SWAPI} />
      <Route path="/" component={Landing} />
      {/* <Route component={NoMatch} /> */}
    </Switch>
  </Fragment>
);

export default App;
