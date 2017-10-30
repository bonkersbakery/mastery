import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { StyleRoot } from "radium";
import App from "../app/App";
import About from "../about";
import Home from "../app/Home";
import Order from "../order";
import "typeface-roboto";

const Routes = props => (
  <StyleRoot>
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <App />
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/order" component={Order} />
      </div>
    </Router>
  </StyleRoot>
);

export default Routes;
