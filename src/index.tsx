import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import configureStore from "./store/applicationStore";
import { renderApp } from "../src/utils/microfrontend/singleSpaHelper";
const store = configureStore();
if (process.env.NODE_ENV === "development") {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
} else {
  renderApp("React", "react-app");
}
