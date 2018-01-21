import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
        //Here I want to make my modal look better by changing the background opacity
        document.getElementById("root").style = "background-color:rgba(0, 0, 0, 0.5)";
        document.addEventListener('keydown',this.removeMenu);
        this.setState({menuToggled:true});
    }

    removeMenu(evt){
        if(evt.keyCode === 27){
            document.removeEventListener('keydown',this.removeMenu);
            this.setState({menuToggled:false});
        }
    }

    render(){
        return(
            <div className="item">
                <button onClick ={this.toggleMenu} className="button primary ">{this.props.data.name}</button>
                                        {/*MENU*/}
                {this.state.menuToggled && <div tabIndex="0" onKeyDown={this.removeMenu} className="menu">
                    <p className = "menuItem"> Item name : {this.props.data.name} </p>
                    <p className = "menuItem"> Amount : {this.props.data.amount} {this.props.data.measureUnit} </p>
                    <p className = "menuItem"> {this.props.data.description}  </p>
                    


                    </div>}
            </div>
        );
    }
}
export default Item;