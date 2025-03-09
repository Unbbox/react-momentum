import { StrictMode } from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");

let root = rootElement._reactRoot || null;

if (!root) {
  root = ReactDom.createRoot(rootElement);
  rootElement._reactRoot = root;
}
root.render(
  // <StrictMode>
  <Router basename={import.meta.env.BASE_URL}>
    <Routes>
      <Route path={"/"} element={<App />} />
    </Routes>
  </Router>
  // </StrictMode>
);
