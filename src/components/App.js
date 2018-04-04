import React, { Component } from 'react';
import './css/App.css';
import Main from './Content.js';
import './css/Content.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Content">
          <Main/>
        </div>


      </div>
    );
  }
}

export default App;
