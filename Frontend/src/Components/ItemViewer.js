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
    }


    componentWillReceiveProps(nextProps){
        this.fetchItems();
    }

    fetchItems(){
        console.log(this.state.itemsLoaded);
        this.setState({itemsLoaded:false});
        console.log(this.state.itemsLoaded);
        getItems(this.props.currentCategory)
            .then((response)=>{
                console.log("Response length:",response.length);
                    this.setState({items: response, itemsLoaded: true});
            });
    }

    parseItems(){
        if(this.state.items.length === 0){
            return("THERE ARE NO ITEMS AVAILABLE");
        }
        return this.state.items.map((itemData) => <Item key={itemData.id} data = {itemData} />);
    }

    render(){
        return(
            <div className="itemViewer">
                {this.state.itemsLoaded  && this.parseItems()}
            </div>

        );
    }
}

export default ItemViewer;