import React, { Component } from 'react';
import logo from './logo.svg';
import TaskApp from'./components/TaskApp.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <TaskApp/>
      </div>
    );
  }
}

export default App;
