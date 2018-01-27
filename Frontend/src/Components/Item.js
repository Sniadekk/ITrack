import React, {Component} from 'react';

import '../Styles/foundation.css';
import '../Styles/Fontello/css/fontello.css';
import {deleteItem, updateItem} from "../Functions/AjaxCalls";

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuToggled: false,
            json: {
                name: this.props.data.name,
                amount: this.props.data.amount,
                price: this.props.data.price,
                description: this.props.data.description,
                measureUnit:this.props.data.measureUnit
            }

        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.removeMenu = this.removeMenu.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.modalDiv = document.getElementById('modal-root');
    }

    toggleMenu() {
        document.addEventListener('keydown', this.removeMenu);
        this.setState({menuToggled: true});
    }

    removeMenu(evt, requestType) {
        if (requestType === "delete" || evt.keyCode === 27 || (evt.buttons === 0 && !evt.target.className.includes('menu'))) {
            document.removeEventListener('keydown', this.removeMenu);
            this.modalDiv.removeEventListener('click', this.removeMenu, true);
            this.setState({menuToggled: false});
        }
    }

    deleteItem() {
        //Delete request(categoryId,itemId)
        deleteItem(this.props.currentCategory, this.props.data.id)
            .then(() => {
                this.props.fetchItems()
            })
            .then(() => this.removeMenu(undefined, "delete"));

    }

    handleChange(evt) {
        let value = evt.target.value;
        if (evt.target.type === "number") {
            if (value.toString().length >= 8) {
                return;
            }
            value = parseFloat(evt.target.value);
        }
        const name = evt.target.name;
        this.setState({json: {...this.state.json, [name]: value}});
    }

    updateItem() {
        updateItem(this.props.currentCategory, this.props.data.id, this.state.json);
    }

    render() {
        return (
            <div className="item">
                <button onClick={this.toggleMenu} className="button primary ">{this.props.data.name}</button>
                {/*MENU*/}

                {this.state.menuToggled &&
                <div>
                    <div className="hide-background" onClick={this.removeMenu}></div>
                    <div tabIndex="0" onKeyDown={this.removeMenu} className="menu">
                        <label>
                            <span className="menu-item"> Name: </span>
                            <input type="text" name="name" value={this.state.json.name} onChange={this.handleChange}/>
                        </label>
                        <label>
                            <span className="menu-item"> Amount ({this.state.json.measureUnit}): </span>
                            <input type="number" name="amount" value={this.state.json.amount}
                                   onChange={this.handleChange}/>
                        </label>
                        <label>
                            <span className="menu-item"> Price: </span>
                            <input type="number" name="price" value={this.state.json.price}
                                   onChange={this.handleChange}/>
                        </label>
                        <label>
                            <span className="menu-item"> Description: </span>
                            <textarea name="description" value={this.state.json.description}
                                      onChange={this.handleChange}/>
                        </label>
                        <div className="menu-buttons">
                            <button className="button alert" onClick={this.deleteItem}><span
                                className="icon-trash-empty" aria-hidden="true"> DELETE</span></button>
                            <button onClick={this.updateItem} className="button success"><span className="icon-pencil"
                                                                                               aria-hidden="true">EDIT</span>
                            </button>

                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Item;
