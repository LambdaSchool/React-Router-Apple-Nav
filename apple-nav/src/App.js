import React, { Component } from 'react';
import { Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import NavWrapper from './components/NavWrapper'






class App extends Component {
  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
