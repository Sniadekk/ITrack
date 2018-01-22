import React, { Component } from 'react';

import '../Styles/foundation.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {menuToggled:false};
        this.toggleMenu = this.toggleMenu.bind(this);
        this.removeMenu = this.removeMenu.bind(this);
        this.modalDiv = document.getElementById('modal-root');
    }

    toggleMenu(){
        document.addEventListener('keydown',this.removeMenu);
        this.setState({menuToggled:true});
    }

    removeMenu(evt){
        const targetClass = evt.target.className;
        if(evt.keyCode === 27 || (evt.buttons === 0 && !targetClass.includes('menu'))){
            document.removeEventListener('keydown',this.removeMenu);
            this.modalDiv.removeEventListener('click',this.removeMenu, true);
            this.setState({menuToggled:false});
        }
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
                            <p className = "menu-item"><span className="menu-item-description">Name </span> <span className="menu-item-content">{this.props.data.name}</span> </p>
                            <p className = "menu-item"> <span className="menu-item-description">Amount  </span> <span className="menu-item-content">{this.props.data.amount} {this.props.data.measureUnit} </span> </p>
                            <p className = "menu-item"> {this.props.data.description}  </p>
                        </div>
                    </div>
                }
            </div>
        );
    }
}
export default Item;