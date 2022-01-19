/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Quote from './Components/Quote/Quote';

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
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
