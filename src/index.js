import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserAdmin from "./components/container/UserAdmin/UserAdmin";

ReactDOM.render(
  <React.StrictMode>
    <UserAdmin />
  </React.StrictMode>,
  document.getElementById("root")
);
