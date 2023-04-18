import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "../src/styles.css";
import { EmailsContextProvider } from "./context/EmailContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EmailsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EmailsContextProvider>
  </React.StrictMode>
);
