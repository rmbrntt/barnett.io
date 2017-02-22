import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'semantic-ui-react';
import SidebarLeft from './SidebarLeft';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header as='h1'>First header </Header>
          <h2>Welcome to React</h2>
          <SidebarLeft />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
