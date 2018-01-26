import React, {Component} from 'react';
import {getCategories} from "../Functions/AjaxCalls";
import "../Styles/foundation.css"
import "../Styles/App.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {isVisible: true};
        this.toggleCategories = this.toggleCategories.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
        this.checkData = this.checkData.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.categories !== this.props.categories){

        }
    }

    changeCategory(evt) {
        this.props.update(evt.target.value);
    }

    parseCategories() {
        return this.props.categories.map(category => <li key={category.id}>
            <button onClick={this.changeCategory} value={category.id}
                    className="button primary">{category.name}</button>
        </li>)
    }

    toggleCategories() {
        this.setState(prevState => ({
            isVisible: !prevState.isVisible
        }));
    }

    checkData(data = this.props.categories){
        if(typeof data === 'undefined'){
            return "FETCHING DATA";
        }
        else if(data.length === 0){
            return "There are no categories yet.";
        }
        else if(data.length > 0){
            return this.parseCategories();
        }
    }

    render() {
        return (
            <div className="sidebar">
                <button onClick={this.toggleCategories} className="dropdown button toolkit-item">CATEGORIES</button>
                <ul>
                    {this.checkData()}
                </ul>
            </div>
        );
    }
}

export default Sidebar;