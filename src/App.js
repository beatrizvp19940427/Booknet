import './App.css';
import {  Route, Routes } from "react-router-dom";
import Landingpage from './pages/Landingpage';
import Account from './pages/Account';
import React  from 'react';
import {useState,useEffect} from 'react';
import Categories from './pages/Categories';
import Management from './pages/Management';
import {getCategories} from './services/bookServices';
import CategoriesSettings from './components/settings/categoriesSettings';
import AuthorsSettings from './components/settings/authorsSettings';

function App() {
  const myList=[{id:"1",name:"No categories yet", description:"Please add the first"}];
  const [allcategories, setCategories] = useState(myList);
  
  useEffect(() => {
    getCategories().then(result => { console.log(result.data.result); setCategories( result.data.result) })
    .catch(error => { console.error(error); return Promise.reject(error); }); 
    
  },[]);
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/categories" element={<Categories allCategories={allcategories} />} />
      <Route path="/settings" element={<Management />} />
      <Route path="/settings/categories" element={<CategoriesSettings />} />
      <Route path="/settings/authors" element={<AuthorsSettings />} />

    </Routes> 
  );
}

export default App;
