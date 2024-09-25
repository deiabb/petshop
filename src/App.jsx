import './App.css';
import NavBar from './components/Navbar/NavBar';
import Products from './components/Products';
import { productsList } from './assets/data';
import { useState } from 'react';

function App() {
 
  const products = productsList;

  return (
    <>  
      <NavBar/>
      <Products products={products}/>
    </>
  )
}
export default App


