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

  const [totalItemCount, setTotalItemCount] = useState(0);
  const [itemsInCart, setItemsInCart] = useState({});

  function addItem(itemId, quantity) {
    const newCart = { ...itemsInCart, [itemId]: quantity }
    
    console.log(itemId, quantity);

    let sum = 0;
    for (var el in newCart) {
      if (newCart.hasOwnProperty(el)) {
        sum += parseInt(newCart[el]);
      }
    }
    console.log(sum);
    setItemsInCart(newCart);
    setTotalItemCount(sum);
  }
  return (
    <BrowserRouter>
      <NavBar itemCount={totalItemCount} />
      <Switch>
        <Route exact path='/'>
          <ItemListContainer title="Productos" />
        </Route>
        <Route exact path='/detail/:id'>
          <ItemDetailContainer onAdd={addItem}/>
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
