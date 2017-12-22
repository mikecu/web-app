import React, { Component } from 'react';
import NavHeader from './NavHeader';
import Home from './Home';
import {Router, Route} from 'react-router';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavHeader/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
