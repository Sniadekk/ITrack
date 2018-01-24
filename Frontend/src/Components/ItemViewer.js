import React, { Component } from 'react';
import Item from './Item';
import {getItems} from "../Functions/AjaxCalls";
import '../Styles/foundation.css';
import '../Styles/App.css';

class ItemViewer extends Component{
    constructor(props){
        super(props);
        this.parseItems = this.parseItems.bind(this);
        this.shouldFetch = this.shouldFetch.bind(this);
        this.state = {
            itemsLoaded:false,
            currentCategory:1
        };
        this.noItemsWarning = <div className="no-items-warning"> THERE ARE NO ITEMS AVAILABLE. </div>;
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.currentCategory !== this.props.currentCategory){
            this.fetchItems(nextProps.currentCategory);
        }
        if(nextProps.shouldFetch === true){
            this.fetchItems(nextProps.currentCategory);
        }
    }

    shouldFetch(){
        this.fetchItems(this.state.currentCategory);
    }

    fetchItems(currentCategory){
        getItems(currentCategory)
            .then((response)=>{
                    this.setState({items: response, itemsLoaded: true, currentCategory:currentCategory});
            });
    }

    parseItems(){
        console.log(this.state);
        if(this.state.items.length === 0){
            return this.noItemsWarning;
        }

        return this.state.items.map((itemData) => <Item key={itemData.id} data = {itemData} currentCategory={this.state.currentCategory} fetchItems ={this.shouldFetch}/>);
    }

    render(){
        return(
            <div className="item-viewer">
                {this.state.itemsLoaded  && this.parseItems()}
            </div>

        );
    }
}

export default ItemViewer;