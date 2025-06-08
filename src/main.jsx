import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// import "./index.css";

import App from "./App.jsx";
import AboutUs from "./pages/AboutUs";
import ExpenseTracker from "./pages/ExpenseTracker";
import TaskTrackerPage from "./pages/TaskTracker.jsx";
import LocalStorageTestPage from "./pages/LocalStorageTest.jsx";
import MyAppBar from "./MyAppBar";
import ErrorBoundary from "./components/ErrorBoundry.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <MyAppBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/expenseTracker" element={<ExpenseTracker />} />
          <Route path="/taskTracker" element={<TaskTrackerPage />} />
          <Route path="/localStoreTesting" element={<LocalStorageTestPage />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
