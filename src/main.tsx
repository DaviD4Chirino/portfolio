import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.sass";
import MuiTheme from "./MuiTheme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MuiTheme>
      <App />
    </MuiTheme>
  </React.StrictMode>
);
