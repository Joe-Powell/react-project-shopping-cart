import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import { provider } from 'react-redux';



function App() {
  return (
    <provider >
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </provider>
  );
}

export default App;
