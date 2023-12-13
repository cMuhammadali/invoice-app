import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme.jsx";
import { store } from "./store/Store.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./assets/index.css";
import App from "./App.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
