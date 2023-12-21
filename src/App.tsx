import React from 'react';
import logo from './logo.svg';
import Header from './Components/Layout/Header';
import Home from './Features/HomePage';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
