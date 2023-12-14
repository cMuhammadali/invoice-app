import { BrowserRouter as Router } from "react-router-dom";
import React, { StrictMode } from "react";
import { ThemeProvider } from "./theme";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./assets/index.css";
import App from "./app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </StrictMode>
);
