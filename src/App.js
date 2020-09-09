import React from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import About from './components/About';


function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <BrowserRouter>
          <NavBar name='joe' />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Cart" component={Cart} />
            <Route path="/about" component={About} />
          </Switch>

        </BrowserRouter>

      </div>
    </Provider>
  );
}

export default App;
