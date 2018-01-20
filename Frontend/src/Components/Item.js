import React, { Component } from 'react';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {menuToggled:false};
        this.toggleMenu = this.toggleMenu.bind(this);
        this.removeMenu = this.removeMenu.bind(this);
    }

    toggleMenu(){
        document.addEventListener('keydown',this.removeMenu);
        this.setState({menuToggled:true});
    }

    removeMenu(evt){
        console.log('click');
        if(evt.keyCode === 27){
            this.setState({menuToggled:false});
        }
    }

    render(){
        return(
            <div className="item">
                <button onClick ={this.toggleMenu} className="button primary ">{this.props.data.name}</button>
                {this.state.menuToggled && <div tabIndex="0" onKeyDown={this.removeMenu} className="menu">MENU</div>}

            </div>

        );
    }
}
export default Item;