import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post/>
        <p>Hello World</p>
      </div>
    );
  }
}

export default App;
