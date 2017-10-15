import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import cupcakeConspiracy from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import Routes from "./routes";
import createHistory from "history/createBrowserHistory";

let store = createStore(cupcakeConspiracy);
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
