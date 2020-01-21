import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import FordQuoteComponent from './FordQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatComponent />
        <FordQuoteComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;