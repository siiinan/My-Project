import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Satranc from "./satranc.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/satranc" element={<Satranc />} />
    </Routes>
  </BrowserRouter>
);
