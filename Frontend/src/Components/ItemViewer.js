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
        this.noItemsWarning = <div className="no-items-warning"> THERE ARE NO ITEMS AVAILABLE. </div>;
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.currentCategory !== this.props.currentCategory){
            this.fetchItems(nextProps.currentCategory);
        }
    }

    fetchItems(currentCategory){
        getItems(currentCategory)
            .then((response)=>{
                console.log("Response length:",response.length);
                console.log("Response data:",response);
                    this.setState({items: response, itemsLoaded: true});
            });
    }

    parseItems(){
        if(this.state.items.length === 0){
            return this.noItemsWarning;
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