import React, {Component} from 'react';
import '../../Styles/foundation.css';
import {addCategory} from "../../Functions/AjaxCalls";

class CategoryAdder extends Component {
    constructor(props) {
        super(props);
        this.addCategory = this.addCategory.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            json: {
                name: ""
            }
        };
    }

    addCategory() {
        addCategory(this.state.json)
            .then(()=>this.props.fetchCategories());
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


    render() {
        return (
            <div className="toolkit-item">
                <form onSubmit={(evt) => evt.preventDefault()}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.json.name} onChange={this.handleChange}
                               required/>
                    </label>
                    <input type="submit" className="button success item-adder-button" onClick={this.addCategory}
                           value="ADD CATEGORY"/>


                </form>


            </div>

        )
    };
}

export default CategoryAdder;