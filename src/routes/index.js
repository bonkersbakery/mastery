import React from "react";
import { Router, Route } from "react-router";
import App from "../app/App";
import Order from "../order";

const Routes = props => (
  <Router {...props}>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/order" component={Order} />
    </div>
  </Router>
);

export default Routes;
