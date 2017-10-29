import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import createHistory from "history/createBrowserHistory";
import { StyleRoot } from "radium";

let store = createStore(rootReducer);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
