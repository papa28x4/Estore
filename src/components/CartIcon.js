import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../css/cartIcon.css';

export class CartIcon extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <span className="icon-parent pt-3"><a href="/#" className="icon-bullet" data-content={this.props.totalQty} ><i className="fas fa-shopping-cart text-light fa-lg mr-3"></i></a></span>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        totalQty: state.figures.totalQty
    }
}

export default connect(mapStateToProps)(CartIcon)
