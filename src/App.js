import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <div className="App">
      <NavBar><h2>Un titulo</h2></NavBar>
      <ItemGrid />
    </div>
  );
}

export default App;
