import React, { Component } from 'react';

import '../Styles/foundation.css';
import '../Styles/Fontello/css/fontello.css';
import {deleteItem} from "../Functions/AjaxCalls";

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            menuToggled:false,
            json:{

            }

        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.removeMenu = this.removeMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.modalDiv = document.getElementById('modal-root');
    }

    toggleMenu(){
        document.addEventListener('keydown',this.removeMenu);
        this.setState({menuToggled:true});
    }

    removeMenu(evt, requestType){
        if(requestType ==="delete" || evt.keyCode === 27 || (evt.buttons === 0 && !evt.target.className.includes('menu'))){
            document.removeEventListener('keydown',this.removeMenu);
            this.modalDiv.removeEventListener('click',this.removeMenu, true);
            this.setState({menuToggled:false});
        }
    }

    deleteItem(){
        //Delete request(categoryId,itemId)
        deleteItem(this.props.currentCategory,this.props.data.id)
            .then(()=> {
                this.props.fetchItems()
            })
                .then(() => this.removeMenu(undefined,"delete"));

    }

    render(){
        return(
            <div className="item">
                <button onClick ={this.toggleMenu} className="button primary ">{this.props.data.name}</button>
                                        {/*MENU*/}

                {this.state.menuToggled &&
                    <div>
                        <div className="hide-background" onClick={this.removeMenu}> </div>
                        <div tabIndex="0" onKeyDown={this.removeMenu} className="menu">
                            <label>
                                <span className="menu-item"> Name: </span>
                            <input type="text" name="name" value={this.props.data.name} />
                            </label>
                            <label>
                                <span className="menu-item"> Amount: </span>
                            <input type="text" name="amount" value={this.props.data.amount} />
                            </label>
                            <label>
                                <span className="menu-item"> Price: </span>
                            <input type="text" name="price" value={this.props.data.price} />
                            </label>
                            <label>
                                <span className="menu-item"> Description: </span>
                            <textarea name="description" value={this.props.data.description} />
                            </label>
                            <div className="menu-buttons">
                                <button className="button alert" onClick={this.deleteItem}><span className="icon-trash-empty" aria-hidden="true"> DELETE</span></button>
                                <button className="button success"><span className="icon-pencil" aria-hidden="true">EDIT</span></button>

                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default Item;
