import React, { Component } from 'react';
import {getCategories} from "../Functions/AjaxCalls";

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {categories:null};
    }

    componentWillMount(){
        const cat = getCategories();
        console.log("fetch: " + cat);
        this.setState({categories:cat});
    }

    parseCategories(){
        console.log("state:" + this.state.categories);
        const parsedCategories = this.state.categories.map((category) => <li> {category.name} </li>);
        this.setState({categories:parsedCategories});
    }

    render(){
        return(
            <div>
                {this.parseCategories()}
            </div>
        );
    }
}

export default Sidebar;