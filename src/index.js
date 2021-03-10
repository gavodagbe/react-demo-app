import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserAdmin from "./components/container/UserAdmin/UserAdmin";
import Navigation from "./components/ui/Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
