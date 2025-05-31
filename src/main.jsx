import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import AboutUs from "./pages/AboutUs";
import MyAppBar from "./MyAppBar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <MyAppBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
