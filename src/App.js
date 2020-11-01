import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount'
import ItemDetailContainer from "./components/ItemDetailContainer";

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
      <ItemListContainer title="Productos"/>
      <ItemCount stock={stock} initial={initialCount} onAdd={addItem} />
      <ItemDetailContainer itemId={1} />
    </div>
  );
}

export default App;
