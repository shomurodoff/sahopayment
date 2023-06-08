import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./router";
import Theme from "./services/theme";
import Query from "./services/query";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Theme>
      <Query>
        <Router />
      </Query>
    </Theme>
  </React.StrictMode>
);
