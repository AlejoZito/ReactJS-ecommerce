import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const itemList = []

function App() {

  const [itemCount, setItemCount] = useState(0);

  function addItem (){
    setItemCount(itemCount + 1);
    console.log(itemCount);
  }

  return (
    <div className="App">
      <NavBar itemCount={itemCount} />
      <ItemListContainer title="Productos" onAdd={addItem} />
    </div>
  );
}

export default App;
