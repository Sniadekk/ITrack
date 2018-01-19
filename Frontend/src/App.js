import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import './Styles/App.css';
class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="wrapper">
          <Sidebar/>
        </div>
    );
  }
}

export default App;
