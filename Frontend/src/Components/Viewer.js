import React, { Component } from 'react';
import ItemViewer from './ItemViewer';
import ItemAdder from './ActiveComponents/ItemAdder';
import Toolkit from './ActiveComponents/Toolkit';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Viewer extends Component{
    constructor(props){
        super(props);
        this.fetchItems = this.fetchItems.bind(this);
        this.state = {shouldFetch:false};
    }

    fetchItems(){
        console.log('fetching...');
        this.setState({shouldFetch:true});

    }

    setActiveComponent(component){
        console.log(component);
    }

render(){
    return(
    <div className="viewer">
        <Toolkit setActiveComponent = {this.setActiveComponent}/>
        <ItemAdder  currentCategory ={this.props.currentCategory} fetchItems ={this.fetchItems}/>
        <ItemViewer shouldFetch ={this.state.shouldFetch} currentCategory ={this.props.currentCategory}/>
    </div>
    );
    }
}

export default  Viewer;