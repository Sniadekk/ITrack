import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {helloWorld} from './Functions/axios'

class App extends Component {
  constructor(props){
    super(props);
    this.hello = this.hello.bind(this);
  }
  hello(){
      helloWorld();
  }

  render() {
    return (
      <button onClick={this.hello}>HELLO</button>
    );
  }
}

export default App;
