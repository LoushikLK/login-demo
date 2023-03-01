import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import AppContextProvider from "./state/AppContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
