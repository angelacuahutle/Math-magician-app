import React from 'react';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorHook = () => {
  const [stateObj, setStateObj] = useState({ total: '0' });

  const onClickHandler = (e) => {
    const result = calculate(stateObj, e.target.innerHTML);
    setStateObj(result);
  };

  const { next, total } = this.state;
  return (

    <div className="calculator card">

      <div type="text" className="calculator-screen z-depth-1 " placeholder="0" disabled>
        {next ?? total ?? 0}
      </div>
      <div className="calculator-keys">

        <button type="button" onClick={this.onClickHandler} className="operator btn btn-gray border-secondary">+/-</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-gray border-secondary">AC</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-gray border-secondary">%</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-Orange border-secondary">&divide;</button>

        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">7</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">8</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">9</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-Orange border-secondary">+</button>

        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">4</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">5</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">6</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-Orange border-secondary">-</button>

        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">1</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">2</button>
        <button type="button" onClick={this.onClickHandler} className="btn btn-gray waves-effect border-secondary">3</button>
        <button type="button" onClick={this.onClickHandler} className="operator btn btn-Orange border-secondary">x</button>

        <button type="button" onClick={this.onClickHandler} className="btn btn-gray zero border-secondary">0</button>
        <button type="button" onClick={this.onClickHandler} className="decimal function btn btn-gray dot border-secondary">.</button>
        <button type="button" onClick={this.onClickHandler} className="equal-sign operator btn btn-Orange equal border-secondary">=</button>

      </div>
    </div>
  );
}
export default Calculator;