import './App.css';
import {  Route, Routes } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Account from './pages/Account';
import React  from 'react';
import {useState,useEffect} from 'react';
import Categories from './pages/Categories';
import {getCategories} from './services/bookServices';

function App() {
  const myList=[{id:"1",name:"C1", description:"desc 1"}, {id:"2",name:"C2", description:"desc 2"}, {id:"3",name:"C3", description:"desc 3"}];
  const [allcategories, setCategories] = useState(myList);
  console.log(myList);
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    setCategories(getCategories());
  });
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/categories" element={<Categories allCategories={allcategories} />} />
    </Routes> 
  );
}

export default App;
