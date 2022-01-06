import { useState } from 'react';
import calculate from '../logic/calculate';
import { Button } from './Button';

export function Calculator() {
  const [state, setState] = useState({ total: '0', next: null, operation: null });

  const handleClick = (e) => {
    setState(calculate(state, e.target.innerText));
  };

  const printResults = () => {
    const { next, total, operation } = state;
    if (!next && !total && !operation) return '0';
    if (next && !total && !operation) return next;
    if (total && !next && operation) return total;
    if (total && next && operation) return next;
    return total;
  };

  return (
    <div className="calcContainer">
      <p className="input">{printResults()}</p>
      <div className="gridContainer">
        <Button handleClick={handleClick} addClass="btn" text="AC" />
        <Button handleClick={handleClick} addClass="btn" text="+/-" />
        <Button handleClick={handleClick} addClass="btn" text="%" />
        <Button handleClick={handleClick} addClass="btn btn-orange" text="÷" />
        <Button handleClick={handleClick} addClass="btn" text="7" />
        <Button handleClick={handleClick} addClass="btn" text="8" />
        <Button handleClick={handleClick} addClass="btn" text="9" />
        <Button handleClick={handleClick} addClass="btn btn-orange" text="x" />
        <Button handleClick={handleClick} addClass="btn" text="4" />
        <Button handleClick={handleClick} addClass="btn" text="5" />
        <Button handleClick={handleClick} addClass="btn" text="6" />
        <Button handleClick={handleClick} addClass="btn btn-orange" text="-" />
        <Button handleClick={handleClick} addClass="btn" text="1" />
        <Button handleClick={handleClick} addClass="btn" text="2" />
        <Button handleClick={handleClick} addClass="btn" text="3" />
        <Button handleClick={handleClick} addClass="btn btn-orange" text="+" />
        <Button handleClick={handleClick} addClass="btn btn-large" text="0" />
        <Button handleClick={handleClick} addClass="btn" text="." />
        <Button handleClick={handleClick} addClass="btn btn-orange" text="=" />
      </div>
    </div>
  );
}

export default Calculator;
