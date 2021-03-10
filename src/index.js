import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navigation from "./components/ui/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
//import moduleName from './store/reducers';
import logger from "redux-logger";
import { Provider } from "react-redux";
import reducer from "./store/reducers/counter";

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
