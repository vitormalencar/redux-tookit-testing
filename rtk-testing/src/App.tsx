import React from "react";
import "./App.css";
import Login from "./features/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
}

export default App;
