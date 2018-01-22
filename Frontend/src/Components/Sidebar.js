import React, { Component } from 'react';
import {getCategories} from "../Functions/AjaxCalls";
import "../Styles/foundation.css"
import "../Styles/App.css";

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {isLoaded:false};
        this.toggleCategories = this.toggleCategories.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
      getCategories().then( (res) =>{
          this.setState({categories:res, isVisible:true})
      });

    }

    changeCategory(evt){
        this.props.update(evt.target.value);
    }

    parseCategories(){
        return this.state.categories.map( category => <li key={category.id}><button onClick={this.changeCategory} value ={category.id} className="button primary">{category.name}</button></li>)
    }

    toggleCategories(){
        this.setState(prevState => ({
            isVisible:!prevState.isVisible
        }));
    }

    render(){
        return(
            <div className="sidebar">
                <button onClick ={this.toggleCategories} className ="dropdown button">CATEGORIES</button>
                <ul>
                {this.state.isVisible && this.parseCategories()}
                </ul>
            </div>
        );
    }
}

export default Sidebar;