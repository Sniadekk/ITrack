import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../Styles/foundation.css';
import '../Styles/App.css';

class Modal extends Component{
    constructor(props){
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('hide-background');
        this.modalRoot = document.getElementById("modal-root");
    }

    componentDidMount(){
        this.modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
    }

    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}

export default  Modal;