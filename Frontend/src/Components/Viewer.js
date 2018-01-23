import React, { Component } from 'react';
import ItemViewer from './ItemViewer';
import ItemAdder from './ActiveComponents/ItemAdder';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Viewer extends Component{

render(){
    return(
    <div className="viewer">
        <ItemAdder/>
        <ItemViewer currentCategory ={this.props.currentCategory}/>
    </div>
    );
    }
}

export default  Viewer;