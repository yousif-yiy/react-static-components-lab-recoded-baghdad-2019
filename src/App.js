import React, { Component } from 'react';
import CatComponent from './CatComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CatComponent />
        <MouseComponent />
      </div>
    );
  }
}

export default App;