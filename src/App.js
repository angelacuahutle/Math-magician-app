/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import Calculator from './Components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
