import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import Hero from './components/Hero'

const itemList = []

function App() {

  const [itemCount, setItemCount] = useState(0);

  const stock = 15;
  const initialCount = 2;

  function addItem (quantityPurchased){
    setItemCount(quantityPurchased);
    console.log(itemCount);
  }

  return (
    <div className="App">
      <NavBar itemCount={itemCount} />
      <Hero />
      <ItemListContainer title="Productos"/>
      <ItemCount stock={stock} initial={initialCount} onAdd={addItem} />
    </div>
  );
}

export default App;
