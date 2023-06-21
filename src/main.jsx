import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {  HashRouter } from "react-router-dom";
import PageContextProvider from "./context/PageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PageContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </PageContextProvider>
  </React.StrictMode>
);
