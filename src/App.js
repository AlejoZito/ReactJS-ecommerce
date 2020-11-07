import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const itemList = []

function App() {

  const [itemCount, setItemCount] = useState(0);

  const stock = 15;
  const initialCount = 2;

  function addItem(quantityPurchased) {
    setItemCount(quantityPurchased);
    console.log(itemCount);
  }

  return (
    <BrowserRouter>
      <NavBar itemCount={itemCount} />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer title="Productos" />
        </Route>
        <Route exact path='/detail/:id'>
          <ItemCount stock={stock} initial={initialCount} onAdd={addItem} />
          <ItemDetailContainer/>
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;
