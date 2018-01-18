import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {getCategories} from './Functions/AjaxCalls';
import Sidebar from './Components/Sidebar';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
      <Sidebar/>
        </div>
    );
  }
}

export default App;
