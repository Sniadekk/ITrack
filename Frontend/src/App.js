import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Viewer from './Components/Viewer';
import './Styles/App.css';
import Homepage from "./Components/Homepage";
class App extends Component {
    constructor(props){
        super(props);
        this.updateItem = this.updateItem.bind(this);
        this.state = {currentCategory:1};

    }

    updateItem(categoryId){
        this.setState({currentCategory:categoryId});

    }

  render() {
    return (
        <div className="wrapper">
                <Sidebar update = {this.updateItem}/>
                <Viewer currentCategory = {this.state.currentCategory}/>
        </div>

    );
  }
}

export default App;
