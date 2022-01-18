import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <div className="calculator card">
        <input type="text" className="calculator-screen z-depth-1" placeholder="0" disabled />

        <div className="calculator-keys">

          <button type="button" className="operator btn btn-gray border-secondary">AC</button>
          <button type="button" className="operator btn btn-gray border-secondary">%</button>
          <button type="button" className="operator btn btn-gray border-secondary">&divide;</button>
          <button type="button" className="operator btn btn-Orange border-secondary">+/-</button>

          <button type="button" className="btn btn-gray waves-effect border-secondary">7</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">8</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">9</button>
          <button type="button" className="operator btn btn-Orange border-secondary">+</button>

          <button type="button" className="btn btn-gray waves-effect border-secondary">4</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">5</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">6</button>
          <button type="button" className="operator btn btn-Orange border-secondary">-</button>

          <button type="button" className="btn btn-gray waves-effect border-secondary">1</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">2</button>
          <button type="button" className="btn btn-gray waves-effect border-secondary">3</button>
          <button type="button" className="operator btn btn-Orange border-secondary">&times;</button>

          <button type="button" className="btn btn-gray zero border-secondary">0</button>
          <button type="button" className="decimal function btn btn-gray dot border-secondary">.</button>
          <button type="button" className="equal-sign operator btn btn-Orange equal border-secondary">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
