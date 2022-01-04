import React, { Component } from 'react';
import { Calculator } from './components/Calculator';

export class App extends Component { // eslint-disable-line
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
