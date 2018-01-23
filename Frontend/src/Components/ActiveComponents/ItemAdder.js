import React, { Component } from 'react';
import '../../Styles/foundation.css';

class ItemAdder extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name:"",
            amount:0,
            measureUnit:"",
            price:0,
            description:""
        }
    }

    handleChange(evt){
        const value = evt.target.value;
        const name = evt.target.name;
        this.setState({[name]:value});
    }

    addItem(evt){
        evt.preventDefault();
        console.log(this.state);
        console.log(this.image.files[0].name);
    }

    render(){
        return(
          <div className="item-adder">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Amount:
                        <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Measure unit:
                        <input type="text" name="measureUnit" value={this.state.measureUnit} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Price:
                        <input type="number" name="price" step={0.10} value={this.state.price} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Description:
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                    </label>
                    <label className="button">
                        Image:
                        <input  type="file" ref={input =>{ this.image = input}} className="show-for-sr"/>
                    </label>
                    <button type="submit" onClick={this.addItem} className="button success item-adder-button small">ADD</button>
                </form>
          </div>

        );
    }
}


export default ItemAdder;