import React, { Component } from 'react';
import Products from './Products';
import Cart from './Cart';

class App extends Component {
  render() {   
    return (
      <div className="App">
        <h1>ezyVet - React+Redux test - <a href="https://github.com/charles-benedito/ezyVet-test-react-redux" target="_NEW">Github</a></h1>
        <Cart />
        <hr />
        <Products />
      </div>
    );
  }
}

export default App;



