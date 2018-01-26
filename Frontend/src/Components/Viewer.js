import React, {Component} from 'react';
import ItemViewer from './ItemViewer';
import ItemAdder from './ActiveComponents/ItemAdder';
import Toolkit from './ActiveComponents/Toolkit';
import CategoryAdder from './ActiveComponents/CategoryAdder';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Viewer extends Component {
    constructor(props) {
        super(props);
        this.fetchItems = this.fetchItems.bind(this);
        this.setActiveComponent = this.setActiveComponent.bind(this);
        this.ActiveComponent = this.ActiveComponent.bind(this);
        this.state = {
            shouldFetch: false,
            activeComponent: ""
        };
    }

    fetchItems() {
        console.log('fetching...');
        this.setState({shouldFetch: true});

    }

    setActiveComponent(component) {
        this.setState({activeComponent: component});
        console.log(this.state);
    }

    ActiveComponent() {
        switch (this.state.activeComponent) {
            case "ItemAdder":
                return <ItemAdder currentCategory={this.props.currentCategory} fetchItems={this.fetchItems}/>
            case "CategoryAdder":
                return <CategoryAdder currentCategory={this.props.currentCategory} fetchCategories={this.props.updateCategories}/>
        }
    }

    render() {
        return (
            <div className="viewer">
                <Toolkit setActiveComponent={this.setActiveComponent}/>
                {this.ActiveComponent()}
                <ItemViewer shouldFetch={this.state.shouldFetch} currentCategory={this.props.currentCategory}/>
            </div>
        );
    }
}

export default Viewer;