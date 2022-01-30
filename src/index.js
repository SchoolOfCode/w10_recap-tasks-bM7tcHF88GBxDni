import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import css from "./Index.module.css";
import App from "./components/App";
import { auth0 } from "./config.js";

ReactDOM.render(
  <Auth0Provider
    domain={auth0.domain}
    clientId={auth0.clientID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
