import React, {Component} from 'react';
import Sidebar from './Components/Sidebar';
import Viewer from './Components/Viewer';
import './Styles/App.css';
import Homepage from "./Components/Homepage";
import {getCategories} from "./Functions/AjaxCalls";

class App extends Component {
    constructor(props) {
        super(props);
        this.updateItem = this.updateItem.bind(this);
        this.fetchCategories = this.fetchCategories.bind(this);
        this.state = {
            currentCategory: {
              id:1
            },
            updateCategories: false
        };
        this.fetchCategories();
    }


    updateItem(category) {
        this.setState({currentCategory: category});

    }

    fetchCategories() {
        getCategories().then((res) => {
            this.setState({categories: res})
        });

    }

    render() {
        return (
            <div className="wrapper">
                <Sidebar update={this.updateItem} categories={this.state.categories} />
                <Viewer currentCategory={this.state.currentCategory} updateCategories={this.fetchCategories}/>
            </div>

        );
    }
}

export default App;
