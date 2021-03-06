import React, {Component} from 'react';
import '../../Styles/foundation.css';
import '../../Styles/App.css';

class Toolkit extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        const component = evt.target.value;
        this.props.setActiveComponent(component);
    }

    render() {
        return (
            <div className="toolkit">
                <ul>
                    <li>
                        <button onClick={this.handleClick} className="button primary toolkit-item"
                                value="CategoryAdder">Add category
                        </button>
                    </li>
                    <li>
                        <button onClick={this.handleClick} className="button primary toolkit-item" value="ItemAdder">Add
                            item
                        </button>
                    </li>
                    <li>
                        <button onClick={this.handleClick} className="button primary toolkit-item"
                                value="Statistics">Statistics
                        </button>
                    </li>
                    <li>
                        <button onClick={this.handleClick} className="button primary toolkit-item"
                                value="cool stuff">Cool stuff
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}


export default Toolkit;
