import React, { Component } from 'react';

export class Calculator extends Component {
  render() {
    return (
      <div>
        <input />
        <div className="gridContainer">
            <button>AC</button>
            <button>+/-</button>
            <button>%</button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
      </div>
    );
  }
}

export default Calculator;
