import React, { Component } from 'react';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Item extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="item">

                <p>{this.props.data.name}</p>


            </div>

        );
    }
}
export default Item;