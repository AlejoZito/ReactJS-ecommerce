import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartProvider } from "./context/cartContext";

const itemList = []

function App() {
  //Items in cart is a dictionary with { key: itemId, value: quantity}
  //const [itemsInCart, setItemsInCart] = useState({});

  // function addItem(itemId, quantity) {
  //   const newCart = { ...itemsInCart, [itemId]: quantity }

  //   let sum = 0;
  //   for (let el in newCart) {
  //     if (newCart.hasOwnProperty(el)) {
  //       sum += parseInt(newCart[el]);
  //     }
  //   }

  //   setItemsInCart(newCart);
  //   setTotalItemCount(sum);
  // }
  return (
    <CartProvider defaultValue={[]} initialValue={{
      "id": 1,
      "img": "/img/watch_01.png",
      "title": "SS",
      "price": 5050,
      "description": "Founded in Tokyo, Japanese brand Casio offer a collection of watches that spans both retro and contemporary styles. Known for their innovative features, such as calculator functions, Casio watches adopt a bold use of colour to bring a modern edge to their collections of digital and analogue watches."
    }}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer title="Productos" />
          </Route>
          <Route exact path='/detail/:id'>
            <ItemDetailContainer />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>

        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
