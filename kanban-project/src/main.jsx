import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/user.jsx";
import { CardsProvider } from "./contexts/cards.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CardsProvider>
          <App />
        </CardsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
