import React, { Component } from 'react';
import {addItem} from "../../Functions/AjaxCalls";
import '../../Styles/foundation.css';


class ItemAdder extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.state = {
            name:"",
            amount:0,
            measureUnit:"",
            price:0,
            description:""
        }
    }

    handleChange(evt){
        let value = evt.target.value;
        if(evt.target.type === "number"){
            if(value.toString().length >= 8){
                return;
            }
            value = parseFloat(evt.target.value);

        }
        const name = evt.target.name;
        this.setState({[name]:value});
    }

    validateForm(){
        const json = this.state;
        let isValidated = true;
        Object.values(json).map((item) =>{
            if(item.length === 0){
                isValidated = false;
            }
        });
        return isValidated;
    }

    addItem(evt){
        if(this.validateForm()) {
            const json = this.state;
            const categoryId = this.props.currentCategory;
            addItem(categoryId, json)
                .then((response) => {
                    // Clearing input forms
                    this.setState( {
                        name:"",
                        amount:0,
                        measureUnit:"",
                        price:0,
                        description:""
                    });
                    this.props.fetchItems();
                });
        }
    }

    render(){
        return(
          <div className="item-adder">
                <form onSubmit = {(evt)=>evt.preventDefault()}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}  required/>
                    </label>
                    <label>
                        Amount:
                        <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}  required/>
                    </label>
                    <label>
                        Measure unit:
                        <input type="text" name="measureUnit" value={this.state.measureUnit} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" step={0.10} value={this.state.price} onChange={this.handleChange}  required/>
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={this.state.description} onChange={this.handleChange} required/>
                    </label>
                    <label className="button item-adder-button-image">
                        Click to add image.
                        <input  type="file" ref={input =>{ this.image = input}} className="show-for-sr"/>
                    </label>
                    <input type="submit"  className="button success item-adder-button" onClick={this.addItem} value="ADD"/>
                </form>
          </div>

        );
    }
}


export default ItemAdder;