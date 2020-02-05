import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Details from "./components/Details";
import Modal from "./components/Modal";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
