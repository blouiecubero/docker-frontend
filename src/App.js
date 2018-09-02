/*# ---------------------------------------------
# ---------------------------------------------
# Author: Brian Cubero
# Date:   2018-08-31 16:24:58
# Last Modified by:   cubero.bv
# Last Modified time: 2018-09-01 08:51:47
# ---------------------------------------------
# ---------------------------------------------*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Woot woot
        </p>
      </div>
    );
  }
}

export default App;
