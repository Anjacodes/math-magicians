import React, { Component } from 'react';
import calculate from '../logic/calculate';
import { Button } from './Button';

export class Calculator extends Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const adaptState = calculate(this.state, e.target.innerText);
    this.setState(() => ({
      total: adaptState.total,
      next: adaptState.next,
      operation: adaptState.operation,
    }));
  }

  printResults = () => {
    const { next, total, operation } = this.state;
    if (!next && !total && !operation) return '0';
    if (next && !total && !operation) return next;
    if (total && !next && operation) return total;
    if (total && next && operation) return next;
    return total;
  }

  render() {
    return (
      <div className="calcContainer">
        <p className="input">{this.printResults()}</p>
        <div className="gridContainer">
          <Button handleClick={this.handleClick} class="btn" text="AC" />
          <Button handleClick={this.handleClick} class="btn" text="+/-" />
          <Button handleClick={this.handleClick} class="btn" text="%" />
          <Button handleClick={this.handleClick} class="btn btn-orange" text="÷" />
          <Button handleClick={this.handleClick} class="btn" text="7" />
          <Button handleClick={this.handleClick} class="btn" text="8" />
          <Button handleClick={this.handleClick} class="btn" text="9" />
          <Button handleClick={this.handleClick} class="btn btn-orange" text="x" />
          <Button handleClick={this.handleClick} class="btn" text="4" />
          <Button handleClick={this.handleClick} class="btn" text="5" />
          <Button handleClick={this.handleClick} class="btn" text="6" />
          <Button handleClick={this.handleClick} class="btn btn-orange" text="-" />
          <Button handleClick={this.handleClick} class="btn" text="1" />
          <Button handleClick={this.handleClick} class="btn" text="2" />
          <Button handleClick={this.handleClick} class="btn" text="3" />
          <Button handleClick={this.handleClick} class="btn btn-orange" text="+" />
          <Button handleClick={this.handleClick} class="btn btn-large" text="0" />
          <Button handleClick={this.handleClick} class="btn" text="." />
          <Button handleClick={this.handleClick} class="btn btn-orange" text="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
