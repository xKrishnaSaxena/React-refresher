import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { FavouritesContextProvider } from "./store/favourites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavouritesContextProvider>
  </React.StrictMode>
);
