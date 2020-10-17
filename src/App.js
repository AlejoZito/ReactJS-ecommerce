import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import ItemGrid from './components/ItemGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemGrid />
      </header>
    </div>
  );
}

export default App;
