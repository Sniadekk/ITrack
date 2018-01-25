import React, { Component } from 'react';
import '../../Styles/foundation.css';
import '../../Styles/App.css';

class Toolkit extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt){
        const component = evt.target.value;
        this.props.setActiveComponent(component);
    }

    render(){
        return(
            <div className="toolkit">
                <ul>
                    <li><button onClick={this.handleClick} className="button primary toolkit-item" value="category">Add category</button></li>
                    <li><button onClick={this.handleClick} className="button primary toolkit-item" value="item">Add item</button></li>
                    <li><button onClick={this.handleClick} className="button primary toolkit-item" value="statistics">Statistics</button></li>
                    <li><button onClick={this.handleClick} className="button primary toolkit-item" value="cool stuff">Cool stuff</button></li>
                </ul>
            </div>
        );
    }
}


export default Toolkit;
