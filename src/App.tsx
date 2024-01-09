import React from "react";
import Home from "./Features/HomePage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./Features/Portfolio";
import Header from "./Components/Layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
