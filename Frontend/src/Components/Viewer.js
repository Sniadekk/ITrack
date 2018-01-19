import React, { Component } from 'react';
import ItemViewer from './ItemViewer';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Viewer extends Component{
    constructor(props){
        super(props);
    }



render(){
    return(
    <div className="viewer">
    <ItemViewer currentCategory ={this.props.currentCategory}/>
    </div>
    );
    }
}

export default  Viewer;