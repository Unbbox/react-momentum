import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<App />} />
      </Routes>
    </Router>
  </StrictMode>
);
