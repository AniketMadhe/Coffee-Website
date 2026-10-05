import React, { useState, createContext } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Popular from "./pages/Popular";
import Welcome from "./pages/Welcome";
import Coffee from "./pages/adminPage/Coffee";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export const LoginContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(false);
  return (
    <LoginContext.Provider value={{ login, setLogin, admin, setAdmin }}>
      <div className=" bg-coffee  min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/home" element={<Home />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}

export default App;
