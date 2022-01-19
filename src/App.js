/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="./math-magician-app/">Calculator</Route>
        </Routes>
        <Calculator />
      </BrowserRouter>
    );
  }
}

export default App;
