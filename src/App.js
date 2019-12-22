import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <h3>Here we have made some changes</h3>
          <span>and we expect to see them update on the deployed site as well</span>
        </p>
      </div>
    );
  }
}

export default App;
