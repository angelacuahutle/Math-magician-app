import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

}

render() {

  return ( 
  
  <><div>Wellcome To Calculator</div><div className="calculator card">

      <input type="text" className="calculator-screen z-depth-1" placeholder="0" disabled />

      <div className="calculator-keys">

        <button type="button" className="operator btn btn-secondary"> +/-</button>
        <button type="button" className="operator btn btn-secondary"> AC </button>
        <button type="button" className="operator btn btn-secondary"> % </button>
        <button type="button" className="operator btn btn-secondary"> &divide;</button>


        <button type="button" className="btn btn-gray waves-effect">7</button>
        <button type="button" className="btn btn-gray waves-effect">8</button>
        <button type="button" className="btn btn-gray waves-effect">9</button>
        <button type="button" className="operator btn btn-Orange">+</button>
        <button type="button" className="btn btn-gray waves-effect">4</button>
        <button type="button" className="btn btn-gray waves-effect">5</button>
        <button type="button" className="btn btn-gray waves-effect">6</button>
        <button type="button" className="operator btn btn-Orange">-</button>
        <button type="button" className="btn btn-gray waves-effect">1</button>
        <button type="button" className="btn btn-gray waves-effect">2</button>
        <button type="button" className="btn btn-gray waves-effect">3</button>
        <button type="button" className="operator btn btn-Orange">&times;</button>
        <button type="button" className="btn btn-gray zero">0</button>
        <button type="button" className="decimal function btn btn-secondary dot">.</button>
        <button type="button" className="equal-sign operator btn btn-Orange equal">=</button>
      </div>
    </div></>
  );
 }

export default Calculator;