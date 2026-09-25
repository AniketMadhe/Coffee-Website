import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Popular from "./pages/Popular";
Home;
function App() {
  return (
    <div className=" min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
}

export default App;
