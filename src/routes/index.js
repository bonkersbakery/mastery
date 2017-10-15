import React from "react";
import { Router, Route } from "react-router";
import App from "../app/App";
import Order from "../order";
import { HashRouter } from "react-router-dom";

const Routes = props => (
  <HashRouter>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/order" component={Order} />
    </div>
  </HashRouter>
);

export default Routes;
