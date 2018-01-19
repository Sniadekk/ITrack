import React, { Component } from 'react';
import Item from './Item';
import {getItems} from "../Functions/AjaxCalls";
import '../Styles/foundation.css';
import '../Styles/App.css';

class ItemViewer extends Component{
    constructor(props){
        super(props);
        this.parseItems = this.parseItems.bind(this);
        this.state = {itemsLoaded:false};
        this.fetchItems();
    }

    fetchItems(){
        getItems(this.props.currentCategory)
            .then((response)=>{
                this.setState({items:response,itemsLoaded:true});
            });
    }

    parseItems(){
        this.fetchItems();
        return this.state.items.map((itemData) => <Item key={itemData.id} data = {itemData} />);
    }

    render(){
        return(
            <div className="itemViewer">
                {this.state.itemsLoaded && this.parseItems()}
            </div>

        );
    }
}

export default ItemViewer;