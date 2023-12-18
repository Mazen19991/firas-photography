import React from 'react';
import logo from './logo.svg';
import Header from './Components/Layout/Header';
import Home from './Components/Home/Home';
import './App.css';

function App() {
  return (
    <div className='main'>
    <Header></Header>
    <Home></Home>
    </div>
  );
}

export default App;
