import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

const itemList = []

function App() {
  return (
    <div className="App">
      <NavBar>
        <h2>Un titulo</h2>
      </NavBar>
      <ItemListContainer title="Productos" />
    </div>
  );
}

export default App;
