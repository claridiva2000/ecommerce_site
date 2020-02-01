import React from 'react';
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductList from './components/ProductList'
import Product from './components/Product'
import NotFound from './components/NotFound'
import Details from './components/Details'

import './App.css';

function App() {
  return (
    <React.Fragment className="App">
      <Navbar/>
      <Product/>
      <ProductList/>
      <Cart/>
      <Details/>
      <NotFound/>
      
    </React.Fragment>
  );
}

export default App;
