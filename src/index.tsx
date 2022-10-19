import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import { store } from "./state/store";
import "./index.css";
import GlobalStyles from "./pages/styles/Global.styled";

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter basename="/">
        <GlobalStyles />
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>
);
