import React, { Component } from 'react';
import logo from '../../olsen.jpg';
import './App.css';
import Introduction from '../Intro/introduction.js';
import Main from '../Main/main.js';
//import Series from '../../containers/series/series.js';
import 'whatwg-fetch';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Nigerian Television and films Directory
          </p>
          <h2>
            Cinema of Nigeria
          </h2>
        </header>
        <Introduction message="Search here for your favourite Nollywood films!" />
        
        <Main />
      </div>
    );
  }
}

export default App;
