import './App.css';
import {  Route, Routes } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Account from './pages/Account';
import React  from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/account" element={<Account />} />
    </Routes> 
  );
}

export default App;
