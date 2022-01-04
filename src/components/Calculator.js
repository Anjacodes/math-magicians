import React, { Component } from 'react';

export class Calculator extends Component {
  render() {
    return (
      <div className="calcContainer">
        <input className="input"/>
        <div className="gridContainer">
          <button className="btn" type="button">AC</button>
          <button className="btn" type="button">+/-</button>
          <button className="btn" type="button">%</button>
          <button className="btn btn-orange" type="button">÷</button>
          <button className="btn" type="button">7</button>
          <button className="btn" type="button">8</button>
          <button className="btn" type="button">9</button>
          <button className="btn btn-orange" type="button">x</button>
          <button className="btn" type="button">4</button>
          <button className="btn" type="button">5</button>
          <button className="btn" type="button">6</button>
          <button className="btn btn-orange" type="button">-</button>
          <button className="btn" type="button">1</button>
          <button className="btn" type="button">2</button>
          <button className="btn" type="button">3</button>
          <button className="btn btn-orange" type="button">+</button>
          <button className="btn btn-large" type="button">0</button>
          <button className="btn" type="button">.</button>
          <button className="btn btn-orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
